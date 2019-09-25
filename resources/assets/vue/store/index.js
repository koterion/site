import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import portfolios from './modules/portfolios'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      portfolios
    },
    state: () => ({
      loading: true,
      menu: false,
      tab: '',
      animation: false,
      display: {
        current: window.innerWidth,
        desktop: 1230,
        laptop: 1150,
        pad: 992,
        padmini: 768,
        mobile: 568
      }
    }),
    actions,
    mutations,
    getters
  })
}
