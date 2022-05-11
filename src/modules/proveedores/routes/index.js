export default {
    name: 'proveedores',
    component: () => import(/* webpackChunkName: "ProveedoresRouterView" */ '@/modules/proveedores/views/HomeProveedores.vue'),
    children: [
        {
            path: "/proveedores",
            name: "datos-generales-proveedores",
            component: () => import(/* webpackChunkName: "ProveedorHomeView" */ '@/modules/proveedores/views/InformacionProveedoresView.vue'),
        },
        {
            path: "registro-proveedores",
            name: "registro-proveedores",
            component: () => import(/* webpackChunkName: "ProveedorHomeView" */ '@/modules/proveedores/views/RegistroProveedoresView.vue'),
        },
        {
            path:"datos-proveedor",
            name:"datos-proveedores",
            component: () => import(/* webpackChunkName: "DatosProveedorView" */ '@/modules/proveedores/views/DatosProveedorView.vue')
        },
        {
            path:"documentos-proveedor",
            name:"documentos-proveedores",
            component: () => import(/* webpackChunkName: "DocumentosProveedorView" */ '@/modules/proveedores/views/DocumentosProveedorView.vue')
        }
    ]
}