import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//引入Home
import Home from '../views/home.vue'
import Cate from '../views/cate.vue'

//配置路由
const routes = [
    {
        path: '/home',
        component:Home
    }, {
        path: '/cate',
        component:Cate
    }

]

//实例化路由
const router = new VueRouter({
    routes
})


//导出路由
export default router