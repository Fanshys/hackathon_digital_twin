import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './vue-globals';
import 'normalize.css';
import './assets/styles/main.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
