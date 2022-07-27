// import './vant';
import './prefetch';

import router from './router';
import {useRoute} from 'vue-router';

import store from '../store';

import feedback from '@/libs/feedback';

import authingWxMp from '@/supports/authingWxMp';
authingWxMp().then((res) => {
  if (!res) return;

  store.me = res;
});

Object.assign(window, feedback);

export const isReady = router.isReady;

export default {
  install(app) {
    Object.assign(app.config.globalProperties, feedback);
    app.config.globalProperties.$append = (pathToAppend) => {
      const path = useRoute().path;
      return path + (path.endsWith('/') ? '' : '/') + pathToAppend;
    };
    app.use(router);
  },
};
