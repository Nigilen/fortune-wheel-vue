import './assets/main.css';

import { createApp } from 'vue';

import App from './App.vue';

import Button from './ui-kit/WheelButton.vue';

const app = createApp(App)

app.component('PrimaryButton', Button);

app.mount('#app');
