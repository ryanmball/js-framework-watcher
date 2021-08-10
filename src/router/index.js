import Vue from "vue";
import VueRouter from "vue-router";
import Frameworks from "../views/Frameworks.vue";
import Charts from "../views/Charts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Frameworks",
    component: Frameworks,
  },
  {
    path: "/charts",
    name: "Charts",
    component: Charts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
