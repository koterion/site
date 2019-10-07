import { shallowMount, createLocalVue } from '@vue/test-utils'
import Btn from '../../../vue/views/components/btn'
import getters from '../../store/getters'

import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

test('Desktop show', () => {
  const state = {
    display: {
      current: 1680,
      desktop: 1230,
      laptop: 1150,
      pad: 992,
      padmini: 768,
      mobile: 568
    }
  }
  const store = new Vuex.Store({
    state,
    getters
  })

  const wrapper = shallowMount(Btn, {
    localVue,
    store,
    propsData: { route: false, link: 'localhost', text: 'Some text' },
    stubs: ['router-link']
  })
  expect(wrapper.contains('.text')).toBe(true)
})

test('Mobile disable', () => {
  const state = {
    display: {
      current: 768,
      desktop: 1230,
      laptop: 1150,
      pad: 992,
      padmini: 768,
      mobile: 568
    }
  }
  const store = new Vuex.Store({
    state,
    getters
  })

  const wrapper = shallowMount(Btn, {
    localVue,
    store,
    propsData: { route: false, link: 'localhost', text: 'Some text' },
    stubs: ['router-link']
  })
  expect(wrapper.contains('.text')).toBe(false)
})