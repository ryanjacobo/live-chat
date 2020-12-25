import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Chatroom from "../views/Chatroom.vue";
import { projectAuth } from "../firebase/config";

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log("current user in auth guard:", user);
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next(); // allows the user to proceed to the next page - Chatroom
  }
};

// prevents logged in user from going to the Welcome page
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log("current user in auth guard:", user);
  if (user) {
    next({ name: "Chatroom" });
  } else {
    next(); // proceeds to Welcome after logout
  }
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
