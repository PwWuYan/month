import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        contList: [],
        curIndex: 0
    },
    mutations: {
        setList(state, payload) {
            state.list = payload;
        },
        setCurIndex(state, payload) {
            state.curIndex = payload;
            state.contList = state.list['ranklist' + payload];
            console.log(state.contList)
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