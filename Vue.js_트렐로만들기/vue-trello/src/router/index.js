import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/MainPage.vue";
import Login from "@/components/LoginPage.vue";
import Board from "@/components/BoardView.vue";
import NotFound from "@/components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/b/:bid",
    component: Board,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
