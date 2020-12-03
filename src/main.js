import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/utils/request'
import '@/icons'
import './plugins/element.js'


Vue.config.productionTip = false
Vue.prototype.$http = axios

window.globalEvent = new Vue();//注册全局事件对象

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
