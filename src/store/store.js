import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        items: [
            { url: 'http://steamcommunity.com/market/listings/730/Clutch%20Case', buyPrice: 10.2 },
            { url: 'http://steamcommunity.com/market/listings/730/AK-47%20%7C%20Redline%20%28Field-Tested%29', buyPrice: 10.7 },
            { url: 'http://steamcommunity.com/market/listings/730/AK-47%20%7C%20Frontside%20Misty%20%28Field-Tested%29', buyPrice: 3.50 },
        ]
    },
    getters: {
        getItems: (state) => {
            return state.items
        }
    }
})