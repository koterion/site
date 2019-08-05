import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    menu: false,
    tab: '',
    portfolio: {
      years: {},
      data: {},
      one: {
        data: {
          title: '',
          content: '',
          site: ''
        },
        images: {},
        ids: {
          prev: '',
          next: ''
        }
      }
    },
    year: 0,
  },
  actions,
  getters,
  mutations
})
