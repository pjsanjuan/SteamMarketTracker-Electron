import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import AsyncComputed from 'vue-async-computed'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import {store} from './store/store'

import routes from './routes'

const router = new VueRouter({
    routes: routes
})


Vue.use(BootstrapVue)
Vue.use(AsyncComputed)
Vue.use(VueRouter)

new Vue({
    store: store,
    el: '#app',
    render: h => h(App),
    router
})
