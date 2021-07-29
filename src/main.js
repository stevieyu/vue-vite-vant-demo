import {createApp} from 'vue';
import bootstrap from 'src/bootstrap';
import App from 'src/App.vue';

createApp(App)
    .use(bootstrap)
    .mount('#app');
