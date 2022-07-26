import {createApp} from 'vue';
import bootstrap, {isReady} from 'src/bootstrap';
import App from 'src/App.vue';


import 'uno.css';
import {$toast} from './libs/feedback';

const app = createApp(App).use(bootstrap);
isReady().then(() => app.mount('#app'));

app.config.errorHandler = (err) => {
  if (err.message.includes(`Failed to fetch dynamically imported module`)) {
    $toast('文件加载异常，刷新页面中……');
    location.reload();
  }
//   console.log('errorHandler', err, instance, info);
};

(() => {
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/eruda';
  s.onload = () => window.eruda.init();
  document.head.appendChild(s);
})();
(() => {
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/vconsole';
  s.onload = () => new window.VConsole();
  document.head.appendChild(s);
})();
