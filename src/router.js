import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pc from './views/Pc.vue'
import Ps4 from './views/Ps4.vue'
import Xbox from './views/Xbox.vue'
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    path: '/pc',
    name: 'pc',
    component: Pc
    },
    {
    path: '/ps4',
    name: 'ps4',
    component: Ps4
    },
    {
    path: '/xbox',
    name: 'xbox',
    component: Xbox
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: Details
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
