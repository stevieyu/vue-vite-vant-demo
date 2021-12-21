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
    popup: {
      show: false,
    },
    container: {},
  });

  const toggle = (show) => {
    state.popup.show = show;
  };

  const open = (props) => {
    Object.assign(state, props);
    nextTick().then(()=>toggle(true));
  };

  const close = () => {
    nextTick().then(()=>toggle(false));
  };

  useExpose({open, close, toggle});

  return {
    open,
    close,
    state,
    toggle,
  };
};

const mountComponent = (RootComponent, id = '') => {
  const app = createApp(RootComponent);
  let root;
  if (!id) id = `instance-dialog-${Date.now()}`;
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
      const {state, toggle, close} = usePopupState();
      const onClose = (...args) => {
        close(...args);
        if (!state._onClose) return;
        state._onClose(...args);
      };

      return () => <Popup {...state.popup} {...{'onUpdate:show': toggle}}>
        {contentComponent && <contentComponent {...state.container} {...{onClose: onClose}} />}
      </Popup>;
    },
  };

  ({instance} = mountComponent(Wrapper));
};


const Dialog = (options = {}) => {
  if (!inBrowser) return Promise.resolve();

  options = Object.assign({}, Dialog.currentOptions, options);

  return new Promise((resolve) => {
    if (!instance) {
      initInstance();
    }
    options._onClose = resolve;
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
