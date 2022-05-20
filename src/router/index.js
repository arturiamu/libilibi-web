import Vue from 'vue'
import VueRouter from 'vue-router'
import LBHome from "@/views/LBHome";
import LBExplore from "@/views/LBExplore"
import LBPlayer from "@/views/LBPlayer";
import LBSearch from "@/views/LBSearch";
import LBLogin from "@/views/LBLogin";
import LBLive from "@/views/LBLive";
import LBMessage from "@/views/LBMessage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'lb-home',
        component: LBHome,
        meta: {
            title: 'ad-astra 首页'
        }
    },
    {
        path: '/explore',
        name: 'lb-explore',
        component: LBExplore,
        meta: {
            title: 'ad-astra 探索'
        }
    },
    {
        path: '/temp',
        name: 'lb-temp',
        component: LBLive,
    },
    {
        path: '/live',
        name: 'lb-live',
        component: LBLive,
        meta: {
            title: 'ad-astra 直播'
        }
    },
    {
        path: '/login',
        name: 'lb-login',
        component: LBLogin,
        meta: {
            title: 'ad-astra 用户登录'
        }
    },
    {
        path: '/message',
        name: 'lb-message',
        component: LBMessage,
        meta: {
            title: 'ad-astra 消息中心'
        }
    },
    {
        path: '/player',
        name: 'lb-player',
        component: LBPlayer,
        meta: {
            title: 'ad-astra 视频播放'
        }
    },
    {
        path: '/search',
        name: 'lb-search',
        component: LBSearch,
        meta: {
            title: 'ad-astra 搜索'
        }
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})
