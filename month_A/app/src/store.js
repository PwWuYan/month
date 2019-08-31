import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        setList(state, payload) {
            state.list = payload;

        }
    },
    actions: {
        getList(context) {
            axios.get('/list').then(res => {
                let values = res.data.values
                context.commit('setList', values)
            })
        }
    }
})