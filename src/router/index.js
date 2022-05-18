import Vue from 'vue'
import VueRouter from 'vue-router'
import LBHome from "@/views/LBHome";
import LBPlayer from "@/views/LBPlayer";
import LBSearch from "@/views/LBSearch";
import LBLogin from "@/views/LBLogin";
import LBTemp from "@/views/LBTemp";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'lb-home',
        component: LBHome,
    },
    {
        path: '/temp',
        name: 'lb-temp',
        component: LBTemp,
    },
    {
        path: '/login',
        name: 'lb-login',
        component: LBLogin,
        meta: {
            keepAlive: false
        }
    },
    {
        path: '/player',
        name: 'lb-player',
        component: LBPlayer,
    },
    {
        path: '/search',
        name: 'lb-search',
        component: LBSearch,
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})
