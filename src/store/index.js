import Vuex from "vuex";
import Vue from 'vue'

Vue.use(Vuex)

const actions = {
    ch_sc(context, value) {
        context.commit('CH_SC', value)
    },

    ch_user(context, value) {
        context.commit('CH_USER', value)
    },
}
const mutations = {
    CH_SC(state, value) {
        if (value < 1500 && value > 1200) {
            state.per = '96%'
        } else if (value < 1000) {
            state.per = '-200px'
        }
    },

    CH_USER(state, user) {
        state.user = user;
        if (state.user.items === null) {
            state.user.items = state.explore
        }
    },
}

const state = {
    user: {
        id: '',
        username: "",
        account: "",
        msg: 0,
        dym: 0,
        items: [
            {name: '舞蹈', url: 'dance', pid: 129},
            {name: '番剧', url: 'fan_drama', pid: 13},
            {name: '鬼畜', url: 'ki_chi_ku', pid: 119},
        ],
    },
    per: '93%',
    explore: [
        {name: '动画', url: 'animation', pid: 1},
        {name: '番剧', url: 'fan_drama', pid: 13},
        {name: '国创', url: 'china', pid: 167},
        {name: '音乐', url: 'music', pid: 3},
        {name: '舞蹈', url: 'dance', pid: 129},
        {name: '游戏', url: 'game', pid: 4},
        {name: '知识', url: 'knowledge', pid: 36},
        {name: '科技', url: 'tech', pid: 188},
        {name: '运动', url: 'sports', pid: 234},
        {name: '汽车', url: 'car', pid: 223},
        {name: '生活', url: 'life', pid: 160},
        {name: '动物', url: 'animal', pid: 217},
        {name: '鬼畜', url: 'ki_chi_ku', pid: 119},
        {name: '时尚', url: 'fashion', pid: 155},
        {name: '资讯', url: 'information', pid: 202},
        {name: '娱乐', url: 'entertainment', pid: 5},
        {name: '影视', url: 'ft', pid: 181},
        {name: '纪录片', url: 'documentary', pid: 177},
        {name: '电影', url: 'movie', pid: 23},
        {name: '电视剧', url: 'tv', pid: 11},
    ],
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})
