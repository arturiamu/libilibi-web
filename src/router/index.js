import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Explore from "@/views/Explore"
import Player from "@/views/Player";
import Search from "@/views/Search";
import Login from "@/views/Login";
import Live from "@/views/Live";
import Message from "@/views/Message";
import Collection from "@/views/Collection";
import Dynamic from "@/views/Dynamic";
import History from "@/views/History";
import Register from "@/views/Register";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'ad-astra 首页'
        }
    },
    {
        path: '/history',
        name: 'history',
        component: History,
        meta: {
            title: 'ad-astra 历史'
        }
    },
    {
        path: '/dynamic',
        name: 'dynamic',
        component: Dynamic,
        meta: {
            title: 'ad-astra 动态'
        }
    },
    {
        path: '/collection',
        name: 'collection',
        component: Collection,
        meta: {
            title: 'ad-astra 收藏'
        }
    },
    {
        path: '/explore',
        name: 'explore',
        component: Explore,
        meta: {
            title: 'ad-astra 探索'
        }
    },
    {
        path: '/live',
        name: 'live',
        component: Live,
        meta: {
            title: 'ad-astra 直播'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'ad-astra 用户登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: 'ad-astra 用户注册'
        }
    },
    {
        path: '/message',
        name: 'message',
        component: Message,
        meta: {
            title: 'ad-astra 消息中心'
        }
    },
    {
        path: '/player',
        name: 'player',
        component: Player,
        meta: {
            title: 'ad-astra 视频播放'
        }
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
        meta: {
            title: 'ad-astra 搜索'
        }
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})
