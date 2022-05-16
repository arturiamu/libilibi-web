import Vuex from "vuex";
import Vue from 'vue'

Vue.use(Vuex)

const actions = {
    chw(context, value) {
        context.commit('CHW', value)
    }
}
const mutations = {
    CHW(state, value) {
        state.screenWidth = value
    },
}
const state = {
    user: {id: '', name: ''},
    screenWidth: 0,
    items: [
        {name: '舞蹈', url: 'DANCE'},
        {name: '音乐', url: 'MUSIC'},
        {name: '动画', url: 'ANIME'},
        {name: '时尚', url: 'FASHION'},
        {name: '游戏', url: 'GAME'},
        {name: '娱乐', url: 'ENT'},
        {name: '知识', url: 'KNOWLEDGE'},
        {name: '原创', url: 'GUO_CHUANG'},
        {name: '课堂', url: 'TECH'},
        {name: '运动', url: 'SPORTS'},
        {name: '汽车', url: 'CAR'},
        {name: '生活', url: 'LIFE'},
        {name: '美食', url: 'FOOD'},
        {name: '动物', url: 'ANIMAL'},
        {name: '鬼畜', url: 'KICHIKU'},
        {name: '资讯', url: 'INFORMATION'},
    ],
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})
