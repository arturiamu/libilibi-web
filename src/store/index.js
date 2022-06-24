import Vuex from "vuex";
import Vue from 'vue'

Vue.use(Vuex)

const actions = {
    ch_user(context, value) {
        context.state.user = value
    },
    ch_favorites(context, value) {
        context.state.user.favorites = value
    },
    add_favorites(context, value) {
        context.state.user.favorites.push(value)
    },
    del_favorites(context, value) {
        for (let i = 0; i < context.state.user.favorites.length; i++) {
            if (context.state.user.favorites[i].categoryName === value) {
                context.state.user.favorites.splice(i, 1)
                break
            }
        }
    },
    clear_user(context, value) {
        context.state.user.id = ""
        context.state.user.username = ""
        context.state.user.account = ""
        context.state.user.items = context.state.default_items
        context.state.notice.dym = 0
        context.state.notice.message = 0
        context.state.user.favorites = []
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
const mutations = {// 1630

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
        favorites: []
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
