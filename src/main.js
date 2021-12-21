import {createApp} from 'vue';
import bootstrap from 'src/bootstrap';
import App from 'src/App.vue';

import 'uno.css';

createApp(App)
    .use(bootstrap)
    .mount('#app');
