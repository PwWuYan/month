import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        contList: []
    },
    mutations: {
        setList(state, payload) {
            state.list = payload;
        },
        setContList(state, payload) {
            state.contList = payload;
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