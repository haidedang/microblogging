/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { 
      path: '/login',
      name: 'login',
      component: Login
    }
    // {
    //   path: '/dashboard',
    //   name:'dashboard',
    //   component: Dashboard, 
    //   beforeEnter:requireAuth
    // }
  ]
})
