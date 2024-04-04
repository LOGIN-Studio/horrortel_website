import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'
import store from '../store/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'web',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('setFullpath', to.fullPath)
  next()
})


export default router
