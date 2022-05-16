import Vue from 'vue'
import VueRouter from 'vue-router'
import LBHome from "@/views/LBHome";
import LBPlayer from "@/views/LBPlayer";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'lb-home',
        component: LBHome
    },
    {
        path: '/player',
        name: 'lb-player',
        component: LBPlayer
    },
    // {
    //     path: '/login',
    //     name: 'lb-login',
    //     component: Login
    // },
    // {
    //     path: '/player',
    //     name: 'lb-player',
    //     component: LBPlayer
    //     // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // },
    // {
    //     path: '/search',
    //     name: 'lb-search',
    //     component: Search
    // },
]

const router = new VueRouter({
    // mode:'history',
    mode: 'history',
    routes
})

export default router
