// import ky from 'ky';

import router from './router';
import {useRoute} from 'vue-router';

import authingWxMp from '../supports/authingWxMp';

authingWxMp().then((res) => {

});

export default {
  install(app) {
    app.use(router);
    app.config.globalProperties.$append = (pathToAppend) => {
      const path = useRoute().path;
      return path + (path.endsWith('/') ? '' : '/') + pathToAppend;
    };
  },
};
