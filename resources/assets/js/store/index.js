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
    animation: false,
    portfolio: {
      all: {
        years: {},
        group: {},
        collection: {}
      },
      one: {
        current: {
          title: '',
          content: '',
          site: ''
        },
        images: '',
        prev: '',
        next: ''
      }
    },
    year: 0
  },
  actions,
  getters,
  mutations
})
