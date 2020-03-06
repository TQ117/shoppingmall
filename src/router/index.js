import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

//创建路由对象
let routes = [
    {
        path: '/',
        redirect: '/home', //重定向
        component: () => import('@/views/home/home.vue')
    },
    {
        path: "/home",
        component: () => import("@/views/home/home.vue")
    },
    {
        path: "/car",
        component: () => import("@/views/car/car.vue")
    },
    {
        path: "/category",
        component: () => import("@/views/category/category.vue")
    },
    {
        path: "/profile",
        component: () => import("@/views/profile/profile.vue")
    }
];
let router = new VueRouter({
    routes,
    mode: 'history' //修改模式为history模式
})

//导出
export default router