import { createApp } from "vue";
import Vue from 'vue'
import vuetify from "./plugins/vuetify";
import App from "./App.vue";

const app = createApp(App);
app.use(vuetify);

app.mount("#app");

// src/main.js
new Vue({
  vuetify,
}).$mount('#app')

