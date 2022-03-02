import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userName: "19845919903",
        userId: 1,
    },
    mutations: {
        setUserName(state, name) {
            state.userName = name;
        },
        setUserId(state, id) {
            state.userId = id;
        },
        exit(state) {
            state.userName = "";
            state.userId = "";
        },
    }
})

export default store