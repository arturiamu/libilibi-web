import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home'),
        meta: {
            title: 'ad-astra 首页'
        }
    },
    {
        path: '/history',
        name: 'history',
        component: () => import('@/views/History'),
        meta: {
            title: 'ad-astra 历史'
        }
    },
    {
        path: '/dynamic',
        name: 'dynamic',
        component: () => import('@/views/Dynamic'),
        meta: {
            title: 'ad-astra 动态'
        }
    },
    {
        path: '/collection',
        name: 'collection',
        component: () => import('@/views/Collection'),
        meta: {
            title: 'ad-astra 收藏'
        }
    },
    {
        path: '/explore',
        name: 'explore',
        component: () => import('@/views/Explore'),
        meta: {
            title: 'ad-astra 探索'
        }
    },
    {
        path: '/live',
        name: 'live',
        component: () => import('@/views/Live'),
        meta: {
            title: 'ad-astra 直播'
        }
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/UserInfo'),
        meta: {
            title: 'ad-astra 用户中心'
        }
    },
    {
        path: '/message',
        name: 'message',
        component: () => import('@/views/Message'),
        meta: {
            title: 'ad-astra 消息中心'
        }
    },
    {
        path: '/player',
        name: 'player',
        component: () => import('@/views/Player'),
        meta: {
            title: 'ad-astra 视频播放'
        }
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/Search'),
        meta: {
            title: 'ad-astra 搜索'
        }
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})
