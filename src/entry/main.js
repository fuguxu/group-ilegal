import Vue from 'vue';
import App from '../app/main.vue';
import router from '../router/router';
import store from '../store/store';
import  '../lib/el/main';
import '../css/base.css';
import AppUtil from '../util/main';

Vue.prototype.AppUtil = AppUtil;

new Vue({
    router:router,
    store,
    render: h => h(App),
}).$mount('#app');

console.log('prod',window.__PROD__);
if (window.__PROD__){
    Vue.config.devtools = false;
} else {
    Vue.config.devtools = true;
}
