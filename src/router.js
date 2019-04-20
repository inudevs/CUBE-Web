import Vue from 'vue'
import Router from 'vue-router'

import Intro from './pages/Intro.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Home from './pages/Home.vue'
import Temp from './pages/Temp.vue'
import Light from './pages/Light.vue'
import Settings from './pages/Settings.vue'

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
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/temp',
      name: 'Temp',
      component: Temp
    },
    {
      path: '/light',
      name: 'Light',
      component: Light
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
