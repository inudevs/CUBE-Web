import Vue from 'vue'
import ToggleButton from 'vue-js-toggle-button'
import Ripple from 'vue-ripple-directive'

import App from './App.vue'
import router from './router'

import './style.css'

Vue.config.productionTip = false

Vue.use(ToggleButton)

Ripple.zIndex = 55
Vue.directive('ripple', Ripple)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
