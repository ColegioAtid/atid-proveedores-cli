import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {Service} from '@/services/serivce'
Vue.config.productionTip = false

let vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Service.prototype.$vue = vue