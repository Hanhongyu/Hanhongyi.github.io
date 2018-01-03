import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Hello from '@/components/Hello'
import login from '@/components/login/Login'
import register from '@/components/register/Register'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
