import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/MainPage.vue";
import Login from "@/components/LoginPage.vue";
import Board from "@/components/BoardView.vue";
import Card from "@/components/CardView.vue";
import NotFound from "@/components/NotFound.vue";

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem("token");
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;
  isAuth ? next() : next(loginPath);
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/b/:bid",
    component: Board,
    beforeEnter: requireAuth,
    children: [{ path: "c/:cid", component: Card, beforeEnter: requireAuth }],
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
