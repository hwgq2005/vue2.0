import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'


Vue.use(Router)
const router = new Router({
    // mode: 'history',
    mode: 'hash',
    routes: [{
        path: '/',
        component: require('../pages/index.vue'),
        children: [{
            name: 'noteDetail',
            path: 'noteDetail', //食品详情页
            component: require('../pages/note-detail.vue'),
        }]
    }, 
    {
        path: '/user',
        component: require('../pages/user.vue')
    }, {
        path: '/login',
        component: require('../pages/login.vue')
    }, {
        path: '/register',
        component: require('../pages/register.vue')
    },
    {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach(function(to, from, next) {


    // 登录权限控制

    if (!to.meta.requireAuth) {
        if (to.name == "login") {
            $('body').addClass('login')
        }
        next()


    } else {
        //判断是否登陆
        if (!store.state.login) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })


        } else {
            $('body').removeClass('login')
            next()
            window.scrollTo(0, 0);
            document.onscroll = null;
        }
    }

    if (to.meta.title) {
        document.title = to.meta.title
    }


})
export default router