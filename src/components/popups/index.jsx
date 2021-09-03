import {defineComponent, reactive} from 'vue';
import {Popup} from 'vant';

export default (contentComponent) => {
  return () => defineComponent({
    setup() {
      const state = reactive({
        show: true,
      });
      return () => (<Popup show={state.show}>
        {contentComponent && <contentComponent />}
      </Popup>);
    },
  });
};
