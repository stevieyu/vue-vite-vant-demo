import {createApp, reactive, nextTick, getCurrentInstance} from 'vue';
import {Popup} from 'vant';

const inBrowser = typeof window !== 'undefined';

let instance;
let contentComponent;

const useExpose = (apis) => {
  const instance = getCurrentInstance();
  if (instance) {
    Object.assign(instance.proxy, apis);
  }
};

const usePopupState = () => {
  const state = reactive({
    show: false,
  });

  const toggle = (show) => {
    state.show = show;
  };

  const open = (props) => {
    Object.assign(state, props);
    nextTick(() => toggle(true));
  };

  const close = () => toggle(false);

  useExpose({open, close, toggle});

  return {
    open,
    close,
    state,
    toggle,
  };
};

const mountComponent = (RootComponent, id = 'xxxx') => {
  const app = createApp(RootComponent);
  let root;
  if (id) {
    root = document.querySelector(`#${id}`);
  }
  if (!root) {
    root = document.createElement('div');
    if (id) root.setAttribute('id', id);
  }

  document.body.appendChild(root);

  return {
    instance: app.mount(root),
    unmount() {
      app.unmount();
      document.body.removeChild(root);
    },
  };
};

const initInstance = () => {
  const Wrapper = {
    setup() {
      const {state, toggle} = usePopupState();
      return () => <Popup {...state} {...{'onUpdate:show': toggle}}>
        {contentComponent && <contentComponent />}
      </Popup>;
    },
  };

  ({instance} = mountComponent(Wrapper));
};


const Dialog = (options) => {
  if (!inBrowser) return Promise.resolve();

  options = Object.assign({}, Dialog.currentOptions, options);

  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }
    options.close = () => {
      reject(new Error('close'));
    };
    options.ok = () => {
      resolve();
    };
    instance.open(options);
  });
};

Dialog.install = (app) => {
  app.config.globalProperties.$dialog = Dialog;
};

Dialog.currentOptions = {
};

export default (component) => {
  contentComponent = component;
  return Dialog;
};
