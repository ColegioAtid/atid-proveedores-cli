import Vue from 'vue'
import VueRouter from 'vue-router'
import ProveedoresRouter from '@/modules/proveedores/routes'
import AdminRouter from '@/modules/admin/routes'
import HomeView from '@/views/HomeView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: HomeView
  },
  {
    path: '/proveedores',
    ...ProveedoresRouter,
  },
  {
    path: '/admin',
    ...AdminRouter,
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
