import {createApp} from 'vue';
import bootstrap from './bootstrap';
import App from './App.vue';

createApp(App)
    .use(bootstrap)
    .mount('#app');
