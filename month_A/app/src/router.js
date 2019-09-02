import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let router = new Router({
    routes: [{
        path: '/',
        component: () =>
            import ('./views/index'),
        redirect: '/home',
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
    }, {
        path: '/detail',
        component: () =>
            import ('./views/detail/index.vue')


    }]
})

export default router