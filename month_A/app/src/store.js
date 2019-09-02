import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        contList: [],
        curIndex: 0,
        detailList: [],
        readList: [],
        bookList: []
    },
    mutations: {
        setList(state, payload) {
            state.list = payload;
        },
        setCurIndex(state, payload) {
            state.curIndex = payload;
            state.contList = state.list['ranklist' + payload];
        },
        setDetailList(state, payload) {
            state.detailList = state.contList.filter(item => item.bookId == payload)
        },
        setBookList(state, payload) {
            state.bookList.push(state.contList.find(item => item.bookId === payload))
        },
        setReadList(state, payload) {
            state.readList.push(state.contList.find(item => item.bookId === payload))
            console.log(state.readList)
        }
    },
    actions: {
        getList(context) {
            axios.get('/list').then(res => {
                let values = res.data.values
                context.commit('setList', values)
                context.commit('setCurIndex', 0)
            })
        }
    }
})