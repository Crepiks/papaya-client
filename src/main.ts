import { createApp } from "vue";
import { createPinia } from "pinia";
import { TroisJSVuePlugin } from "troisjs";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const app = createApp(App);

app.use(createPinia()).use(router).use(TroisJSVuePlugin).mount("#app");
