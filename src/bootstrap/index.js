import './vant';

import router from './router';
import {useRoute} from 'vue-router';

import store from '../store';

import feedback from '../libs/feedback';

import authingWxMp from '../supports/authingWxMp';
authingWxMp().then((res) => {
  if (!res) return;

  store.me = res;
});

export const isReady = router.isReady;

export default {
  install(app) {
    app.use(router);
    Object.assign(app.config.globalProperties, feedback);
    app.config.globalProperties.$append = (pathToAppend) => {
      const path = useRoute().path;
      return path + (path.endsWith('/') ? '' : '/') + pathToAppend;
    };
  },
};
