import Vuex from "vuex";
import Vue from 'vue'

Vue.use(Vuex)

const actions = {
    ch_sc(context, value) {
        context.commit('CH_SC', value)
    },
    ch_user(context, value) {
        context.state.user = value
    },
    clear_user(context, value){
        context.state.user.id = ""
        context.state.user.username = ""
        context.state.user.account = ""
        context.state.user.items = context.state.default_items
        context.state.notice.dym = 0
        context.state.notice.message = 0
    },
    ch_all_items(context, value) {
        context.state.all_items = value
    },
    ch_user_items(context, value) {
        context.state.user.items = value
    },
    ch_default_items(context, value) {
        context.state.default_items = value
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
}

const state = {
    per: '93%',
    user: {
        id: '',
        username: "",
        account: "",
        items: [
            {name: '', uri: '', pid: ''},
        ],
    },
    notice: {
        dym: 0,
        message: 0
    },
    all_items: [
        {name: '', uri: '', pid: ""},
    ],
    default_items: [
        {name: '', uri: '', pid: ""},
    ]
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})
