export default {
    name: 'proveedores',
    component: () => import(/* webpackChunkName: "ProveedoresRouterView" */ '@/modules/proveedores/views/ProveedoresRouterView.vue'),
    children: [
        {
            path: "/home",
            name: "home-proveedores",
            component: () => import(/* webpackChunkName: "ProveedorHomeView.vue" */ '@/modules/proveedores/views/ProveedorHomeView.vue'),
        }
    ]
}