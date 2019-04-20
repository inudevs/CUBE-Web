import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import ToggleButton from 'vue-js-toggle-button'
import VueSlider from 'vue-slider-component'
import Ripple from 'vue-ripple-directive'

import axios from 'axios'

import App from './App.vue'
import router from './router'

import 'vue-slider-component/theme/default.css'
import './style.css'

Vue.config.productionTip = false
Vue.prototype.$api = axios.create({
  baseURL: 'http://dimiwords.tk:3000/api'
})

Vue.use(VueSweetalert2)

Vue.use(ToggleButton)
Vue.component('VueSlider', VueSlider)

Ripple.zIndex = 55
Vue.directive('ripple', Ripple)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
