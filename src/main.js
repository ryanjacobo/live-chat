import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import { projectAuth } from "./firebase/config";

// allows /chatroom to be refreshed without going back to the login screen when a user is logged in.
let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app");
  }
});
