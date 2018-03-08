import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  render: h => h(App)
})
