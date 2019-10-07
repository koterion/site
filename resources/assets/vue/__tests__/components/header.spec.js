import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vuex from 'vuex'
import Header from '../../views/components/header.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

let state = {
  display: {
    current: 1680,
    desktop: 1230,
    laptop: 1150,
    pad: 992,
    padmini: 768,
    mobile: 568
  }
}

let actions = {
  toggleMenu: jest.fn(),
  toggleTab: jest.fn(),
  turnAnimation: jest.fn()
}

let store
beforeEach(() => {
  store = new Vuex.Store({
    state,
    actions
  })
})

test('Open menu', () => {
  const wrapper = shallowMount(Header, {
    localVue,
    store,
    mocks: { $route: { path: '/', name: 'home' } },
    stubs: ['router-link']
  })
  const burger = wrapper.find('.header__burger')
  burger.trigger('click')
  expect(actions.toggleMenu).toHaveBeenCalled()
})

test('Toggle portfolio tab', () => {
  const wrapper = shallowMount(Header, {
    localVue,
    store,
    mocks: { $route: { path: '/portfolio', name: 'portfolio' } },
    stubs: ['router-link']
  })
  const tab = wrapper.find('.header__tab')
  tab.trigger('click')
  expect(actions.toggleTab).toHaveBeenCalled()
  expect(actions.turnAnimation).toHaveBeenCalled()
})
