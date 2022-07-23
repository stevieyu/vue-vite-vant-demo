import {createApp} from 'vue';
import bootstrap, {isReady} from 'src/bootstrap';
import App from 'src/App.vue';


import 'uno.css';

const app = createApp(App).use(bootstrap);
isReady().then(() => app.mount('#app'));
