import Vue from 'vue'
import 'babel-polyfill'
import App from '../app/main.vue'
import router from '../router/router'
import store from '../store/store'
import '../lib/el/main'
import '../css/base.css'
import plugin from '../pages/GlobalComponents/index'
// 注册插件
import AppUtil from '../util/main'
Vue.use(plugin)
// import _ from 'lodash';
// console.log(_)

Vue.prototype.AppUtil = AppUtil

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')

if (__PROD__) {
  Vue.config.devtools = false
} else {
  Vue.config.devtools = true
}
