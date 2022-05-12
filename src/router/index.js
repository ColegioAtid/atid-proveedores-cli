import Vue from 'vue'
import VueRouter from 'vue-router'
import ProveedoresRouter from '@/modules/proveedores/routes'
import AdminRouter from '@/modules/admin/routes'
import LoginView from '@/views/LoginView.vue'
//import { getUserInfo, isLoggedIn } from '@/helpers/utils'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/proveedores',
    ...ProveedoresRouter,
    meta: {
      requiresAuth: true,
      isAdmin: false,
    }
  },
  {
    path: '/admin',
    ...AdminRouter,
    meta: {
      requiresAuth: true,
      isAdmin: true,
    }
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


// Protección de rutas
/* router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(r => r.meta.requiresAuth);
  if (requiresAuth) { // ¿La ruta require autenticación?
    if (isLoggedIn()) { // ¿ El usuario esta logeado ?
      const { rol } = getUserInfo();
      const isAdminRoute = to.matched.some(r => r.meta.isAdmin);
      if (isAdminRoute && rol === 'ADMIN') { // ¿Es ruta de admin?       
        next();
      } else if (!isAdminRoute && rol === 'PROVEEDOR') { // ¿Es ruta de proveedor?       
        next();
      } else {  // es un rol entrando a una ruta de otro rol     
        next("/");
      }
    } else { // Redirige al login
      next("/");
    }
  } else {
    if (isLoggedIn()) { // si el ya está logeado, redirigir a la ruta principal
      const { rol } = getUserInfo();
      if (rol === 'PROVEEDOR') { next("/proveedores") }
      else if (rol === 'ADMIN') { next("/admin") }
    } else { // Redirige al login
      next();
    }
  }
}); */
export default router
