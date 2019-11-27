import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLayout from '@/layouts/UserLayout.vue'
import BasicLayout from '@/layouts/BasicLayout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/user",
        name: "userlayout",
        component: UserLayout,
        redirect: '/user/login',
        hidden: true,
        children: [{
            path: '/user/login',
            name: 'login',
            component: () => import('@/views/user/login/Login.vue'),
        }, {
            path: '/user/forgetpassword',
            name: 'forgetpassword',
            component: () => import('@/views/user/login/ForgetPassword.vue'),
        }]
    },
    {
        path: '/',
        name: 'basiclayout',
        component: BasicLayout,
        redirect: '/home',
        hidden: true,
        children: [{
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home.vue')
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to: any, from: any, next: any) => {
    const isLogin = localStorage.getItem('tsToken') ? true : false;
    if (to.path == "/user" || to.path == "/user/login" || to.path == "/user/forgetpassword") {
        next();
    } else {
        isLogin ? next() : next('/user')
    }
})
export default router
