import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../views/home/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
