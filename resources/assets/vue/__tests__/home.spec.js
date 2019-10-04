import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vuex from 'vuex'
import Home from '../views/Home.vue'
import VueHeadful from 'vue-headful'
import Router from 'vue-router'
import { createStore } from '../store'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Router)

localVue.component('vue-headful', VueHeadful)

describe('Home', () => {
  let store
  beforeEach(() => {
    store = createStore()
    store.state.display.current = 1680
  })

  describe('Desctop', () => {
    beforeEach(() => {
      store.state.display.current = 1680
    })

    test('Lighter is presented', () => {
      const wrapper = shallowMount(Home, { localVue, store })
      expect(wrapper.contains('.home__switcher')).toBe(true)
      expect(wrapper.contains('.lighter')).toBe(true)
    })

    test('Switcher click', () => {
      const wrapper = shallowMount(Home, { localVue, store })
      wrapper.find('.home__switcher').trigger('click')
      expect(wrapper.vm.light).toBe(true)
    })
  })

  describe('Mobile', () => {
    beforeEach(() => {
      store.state.display.current = 768
    })

    test('Lighter is empty', () => {
      const wrapper = shallowMount(Home, { localVue, store })
      expect(wrapper.contains('.home__switcher')).toBe(false)
      expect(wrapper.contains('.lighter')).toBe(false)
    })
  })
})
