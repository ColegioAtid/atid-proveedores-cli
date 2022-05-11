export default {
    name:'admin',
    component: () => import(/* webpackChunkName: "AdminHomeView" */ '@/modules/admin/views/AdminHomeView.vue'),
    children: [
        {
            path: "/admin", // Default route
            name: "lista-proveedores",
            component: () => import(/* webpackChunkName: "ListaProveedoresView" */ '@/modules/admin/views/ListaProveedoresView.vue'),
        },
        {
            path: "lista-expirados",
            name: "lista-expirados",
            component: () => import(/* webpackChunkName: "ListaExpiradosView" */ '@/modules/admin/views/ListaExpiradosView.vue'),
        },
        {
            path: "no-validados",
            name: "no-validados",
            component: () => import(/* webpackChunkName: "ListaNoValidadosView" */ '@/modules/admin/views/ListaNoValidadosView.vue'),
        },
        {
            path: "detalle-proveedor/:idProvedor",
            name: "detalle-proveedor",
            component: () => import(/* webpackChunkName: "DetalleProveedorView" */ '@/modules/admin/views/DetalleProveedorView.vue'),
        },

    ]
}