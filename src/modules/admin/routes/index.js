export default {
    name:'admin',
    component: () => import(/* webpackChunkName: "AdminRouterView" */ '@/modules/admin/views/AdminRouterView.vue'),
    children: [
        {
            path: "home",
            name: "home-admin",
            component: () => import(/* webpackChunkName: "AdminHomeView" */ '@/modules/admin/views/AdminHomeView.vue'),
        }
    ]
}