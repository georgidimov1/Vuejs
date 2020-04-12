import Vue from 'vue'
import App from './App.vue'
import VueFlexLayout from 'vue-flex-layout'
import VueRouter from 'vue-router';
import router from './router';
import Vuelidate from 'vuelidate'
export const EventBus = new Vue();

Vue.use(VueFlexLayout)
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
