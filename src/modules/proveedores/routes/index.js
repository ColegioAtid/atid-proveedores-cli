export default {
    name: 'proveedores',
    component: () => import(/* webpackChunkName: "ProveedoresRouterView" */ '@/modules/proveedores/views/HomeProveedores.vue'),
    children: [
        {
            path: "home",
            name: "home-proveedores",
            component: () => import(/* webpackChunkName: "ProveedorHomeView" */ '@/modules/proveedores/views/ProveedorHomeView.vue'),
        }
    ]
}