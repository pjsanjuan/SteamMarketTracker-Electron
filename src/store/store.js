import Vue from 'vue'
import Vuex from 'vuex'
import RawItem from '../../classes/RawItem';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        items: []
    },
    getters: {
        getItems (state) {
            return state.items.items.map(item => new RawItem(item.url, item.purchasePrice))
        }
    },
    mutations: {
        setItems(state, items) {
            state.items = items
        }
    }
})