import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from "../views/Login.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
