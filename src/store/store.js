import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        items: []
    },
    getters: {
        getItems (state) {
            return state.items.items
        }
    },
    mutations: {
        setItems(state, items) {
            state.items = items
        }
    }
})