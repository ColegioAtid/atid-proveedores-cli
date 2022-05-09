import Vue from 'vue'
import VueRouter from 'vue-router'
import ProveedoresRouter from '@/modules/proveedores/routes/index'
import HomeView from '@/views/HomeView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/proveedores',
    ...ProveedoresRouter
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
