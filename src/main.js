import Vue from 'vue'
import Ripple from 'vue-ripple-directive'

import App from './App.vue'
import router from './router'

import './style.css'

Vue.config.productionTip = false

Ripple.zIndex = 55
Vue.directive('ripple', Ripple)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
