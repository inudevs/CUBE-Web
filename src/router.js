import Vue from 'vue'
import Router from 'vue-router'

import Intro from './pages/Intro.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: Register
    }
  ]
})
