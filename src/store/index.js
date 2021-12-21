import {reactive, computed} from 'vue';

const state = reactive({
  me: 'null-nullnullnullnullnullnull',
});

export default computed(() => state);
