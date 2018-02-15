import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        items: [
            {name: 'AWP', buyPrice: 2.23},
            {name: 'AK', buyPrice: 10.7},
            {name: 'UMP', buyPrice: 3.50},
        ]
    }
})