import {reactive, computed} from 'vue';

const state = reactive({
  me: 'store for me',
});

export default computed(() => state);
