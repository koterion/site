import { shallowMount, createLocalVue } from '@vue/test-utils'
import getters from '../store/getters'

import Vuex from 'vuex'
import Home from '../views/Home.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const state = {
  display: {
    current: 0,
    desktop: 1230,
    laptop: 1150,
    pad: 992,
    padmini: 768,
    mobile: 568
  }
}

describe('Home', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state,
      getters
    })
  })

  describe('Desctop', () => {
    beforeEach(() => {
      store.state.display.current = 1680
    })

    test('Lighter is presented', () => {
      const wrapper = shallowMount(Home, { localVue, store, stubs: ['vue-headful', 'router-link'] })
      expect(wrapper.contains('.home__switcher')).toBe(true)
      expect(wrapper.contains('.lighter')).toBe(true)
    })

    test('Switcher click', () => {
      const wrapper = shallowMount(Home, { localVue, store, stubs: ['vue-headful', 'router-link'] })
      wrapper.find('.home__switcher').trigger('click')
      expect(wrapper.vm.light).toBe(true)
    })
  })

  describe('Mobile', () => {
    beforeEach(() => {
      store.state.display.current = 768
    })

    test('Lighter is empty', () => {
      const wrapper = shallowMount(Home, { localVue, store, stubs: ['vue-headful', 'router-link'] })
      expect(wrapper.contains('.home__switcher')).toBe(false)
      expect(wrapper.contains('.lighter')).toBe(false)
    })
  })
})
