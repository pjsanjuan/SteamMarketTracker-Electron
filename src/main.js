import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import AsyncComputed from 'vue-async-computed'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import {store} from './store/store'


Vue.use(BootstrapVue)
Vue.use(AsyncComputed)

new Vue({
    store: store,
    el: '#app',
    render: h => h(App)
})
