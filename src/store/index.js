import {reactive, computed} from 'vue';

const state = reactive({
  me: null,
});

export default computed(() => state);
