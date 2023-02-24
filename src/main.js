import { createApp } from "vue";
import pinia from "./stores";
import "uno.css";
import router from "./router";
import App from "./App.vue";
createApp(App).use(router).use(pinia).mount("#app");
