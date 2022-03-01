import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userName: "",
        userId: "",
    },
    mutations: {
        setUserName(state, name) {
            state.userName = name;
        },
        setUserId(state, id) {
            state.userId = id;
        },
    }
})

export default store