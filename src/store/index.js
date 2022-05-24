import Vuex from "vuex";
import Vue from 'vue'

Vue.use(Vuex)

const actions = {
    ch_sc(context, value) {
        context.commit('CH_SC', value)
    },
    ch_home(context, value) {
        context.commit('CH_HOME', value)
    },
    in_msg(context) {
        context.commit('IN_MSG', value)
    },
    in_dym(context) {
        context.commit('IN_DYM', value)
    },
}
const mutations = {
    CH_HOME(state, value) {
        state.home = value
    },
    CH_SC(state, value) {
        if (value < 1500 && value > 1200) {
            state.per = '96%'
        } else if (value < 1000) {
            state.per = '-200px'
        }
    },
    IN_MSG(state) {
        if (state.user.msg > 0) {
            state.user.msg -= 1
        }
    },
    IN_DYM(state) {
        if (state.user.dym > 0) {
            state.user.dym -= 1
        }
    }
}
const state = {
    user: {id: '', name: '', msg: 0, dym: 0},
    per: '93%',
    home: [
        {name: '舞蹈', url: 'DANCE'},
        {name: '动画', url: 'ANIME'},
        {name: '原创', url: 'GUO_CHUANG'},
    ],
    explore: [
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
