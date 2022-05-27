import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './css/element-variables.scss'
import './css/common.css'
import VueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false

Vue.use(VueLazyLoad)

Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
