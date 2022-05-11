import Vue from 'vue'
import VueRouter from 'vue-router'
import ProveedoresRouter from '@/modules/proveedores/routes'
import AdminRouter from '@/modules/admin/routes'
import LoginView from '@/views/LoginView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
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
