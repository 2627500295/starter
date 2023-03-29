import { createApp } from "vue";

import { createPinia } from "pinia";

import App from "./containers/App.vue";

import router from "./router";

import "./assets/styles/style.css";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
