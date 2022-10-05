import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Index.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import Cart from "@/views/Cart.vue";
import Orders from "@/views/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
    ],
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
