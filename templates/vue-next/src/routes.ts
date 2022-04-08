import { RouteRecordRaw } from "vue-router";

import Home from "./views/Home.vue";

import About from "./views/About.vue";

import Layout from "./layouts/Layout.vue";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "",
    component: Layout,
    children: [
      { path: "", component: Home },
      { path: "/about", component: About },
    ],
  },
  { path: "/:path(.*)", redirect: "/error/404" },
];

export default routes;
