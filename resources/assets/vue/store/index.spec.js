import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { createStore } from './index'

test('Check loading statement', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = createStore()
  expect(store.state.loading).toBe(true)
  store.commit('changeLoading', false)
  expect(store.state.loading).toBe(false)
})

test('Check menu statement', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = createStore()
  expect(store.state.menu).toBe(false)
  store.commit('changeMenu')
  expect(store.state.menu).toBe(true)
})

test('Check tab statement', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = createStore()
  expect(store.state.tab).toBe('')
  store.commit('changeTab')
  expect(store.state.tab).toBe('col')
})

test('Check animation statement', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = createStore()
  expect(store.state.animation).toBe(false)
  store.commit('changeAnimation')
  expect(store.state.animation).toBe(true)
})
