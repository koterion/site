import { shallowMount, createLocalVue } from '@vue/test-utils'
import portfolio from '../../store/modules/portfolios'
import getters from '../../store/getters'

import Vuex from 'vuex'
import Portfolio from '../../views/portfolio/all.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
const state = {
  display: {
    current: 1680,
    desktop: 1230,
    laptop: 1150,
    pad: 992,
    padmini: 768,
    mobile: 568
  },
  portfolios: {
    all: {
      years: [2015, 2016, 2017, 2018],
      group: {
        2018: {}
      }
    },
    year: 2018
  }
}

describe('Portfolio All', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state,
      getters: { ...portfolio.getters, ...getters }
    })
  })

  test('Check click year tab', () => {
    const wrapper = shallowMount(Portfolio, { localVue, store, stubs: ['vue-headful'] })
    expect(wrapper.contains('.portfolio__time--item')).toBe(true)
    wrapper.find('.portfolio__time--item').trigger('click')
    expect(wrapper.vm.change).toBe(true)
  })
})
