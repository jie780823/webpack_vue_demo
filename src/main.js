import Vue from 'vue';
import App from './App'

//注入路由
import router from './router'

//注入store
import store from './store'


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})