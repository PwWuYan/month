import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: () =>
            import ('./views/index'),
        children: [{
            path: '/home',
            component: () =>
                import ('./views/home/index.vue')
        }, , {
            path: '/classify',
            component: () =>
                import ('./views/classify/index.vue')
        }, {
            path: '/sort',
            component: () =>
                import ('./views/sort/index.vue')
        }, {
            path: '/book',
            component: () =>
                import ('./views/book/index.vue')
        }]
    }]
})