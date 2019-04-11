import Vue from 'vue';
import App from '../app/main.vue';
import router from '../router/router';
import store from '../store/store';
import ElementUI from '../lib/el/main';
import '../css/base.css';
import AppUtil from '../util/main';


Window.Vue = global.Vue = Vue;
Vue.prototype.AppUtil = AppUtil;

window.Bus = global.Bus = new Vue();

new Vue({
    router:router,
    store,
    render: h => h(App),
}).$mount('#app');

window.console.log('prod',window.__PROD__);
if (window.__PROD__){
    Vue.config.devtools = false;
} else {
    Vue.config.devtools = true;
}
