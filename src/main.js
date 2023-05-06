import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js';

import axios from 'axios';
import emitter from 'tiny-emitter/instance';

import MLoading from './components/MLoading.vue';

import MEnum from './js/MEnum';

const app = createApp(App);

app.component("MLoading",MLoading);

app.use(router);
app.config.globalProperties.$ngocaxios = axios;
app.config.globalProperties.$ngocemitter = emitter;
app.config.globalProperties.$MEnum = MEnum;

app.mount('#app');
