import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userName: "",
        userId: -1,
        courseId: -1,
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
        updateCourseId(state, courseId) {
            state.courseId = courseId;
        }
    }
})

export default store