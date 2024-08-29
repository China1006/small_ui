import { createRouter, createWebHashHistory } from 'vue-router'
import componentRouter from './modules/component'
import appRouter from './modules/app'
const routes = [
  componentRouter,
  appRouter
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router