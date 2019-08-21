import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import GridTesting from "./views/GridTesting";
import TestTable from "./views/TestTable";
import TooFields from "./views/TooFields";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "about" */ "./views/About.vue");
      }
    },
    {
      path: "/test-grid",
      name: "test-grid",
      component: GridTesting
    },
    {
      path: "/test-table",
      name: "test-table",
      component: TestTable
    },
    {
      path: "/test-too-fields",
      name: "test-too-fields",
      component: TooFields
    }
  ]
});
