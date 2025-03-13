import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import Button from './ui-kit/WheelButton.vue';

const app = createApp(App)

app.component('PrimaryButton', Button);

app.use(createPinia());
app.use(router);

app.mount('#app');
