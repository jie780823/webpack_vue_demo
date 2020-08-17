import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    username: '张三',
    token:'asdfadsf8fadosyadisaydsi'

}

const actions = {
    xiu(context,xiu) {
        context.commit('xiu',xiu)
    }

}

const mutations = {
    xiu(state, xiu) {
        state.username=xiu
    }

}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
})

export default store;