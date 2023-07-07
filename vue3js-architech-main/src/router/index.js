import { createRouter, createWebHashHistory } from "vue-router";
import AdminLayout from "@/components/Admin/AdminLayout.vue";
import MainVue from "@/components/Main/MainVue.vue";
import CapNhatUser from "@/components/CapNhatUser/CapNhatUser.vue";
import LogIn from "@/components/LogIn/LogIn.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainVue,
  },
  {
    path: "/admin",
    name: "abadminout",
    component: AdminLayout,
  },
  {
    path: "/user",
    name: "updateUser",
    component: CapNhatUser,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
