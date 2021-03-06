import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '*',
    component: () => import('@/views/404'),
    hidden: true
  }
]

const router = new VueRouter({
  routes
})

export default router
