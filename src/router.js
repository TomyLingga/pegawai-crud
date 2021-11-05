import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/users",
      name: "pegawai",
      component: () => import("./components/UsersList")
    },
    {
      path: "/users/:id",
      name: "profil-pegawai",
      component: () => import("./components/User")
    },
    {
      path: "/add",
      name: "tambah-pegawai",
      component: () => import("./components/AddUser")
    }
  ]
});