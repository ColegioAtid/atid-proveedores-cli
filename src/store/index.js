import Vue from 'vue'
import Vuex from 'vuex'
import proveedores from '@/modules/proveedores/store/index'
Vue.use(Vuex)

export default new Vuex.Store({
 /*  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }, */
  modules: {
    proveedores,
  }
})
