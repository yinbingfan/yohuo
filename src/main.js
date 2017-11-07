// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import './assets/js/jquery-1.8.3.min.js'
import './assets/js/swiper.min.js'
import './assets/css/swiper.min.css'
import './assets/css/iconfont.css'
import './assets/js/youhuo.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Vuex)

// import  "./fetch/ShopService.js"


Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
