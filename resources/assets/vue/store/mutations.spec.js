import mutations from './mutations'

test('Change loading', () => {
  const state = {
    loading: false
  }
  mutations.changeLoading(state, true)
  expect(state.loading).toBe(true)
})

test('Menu is open', () => {
  const state = {
    menu: false
  }
  mutations.changeMenu(state)
  expect(state.menu).toBe(true)
})

test('Tab is change', () => {
  const state = {
    tab: ''
  }
  mutations.changeTab(state)
  expect(state.tab).toBe('col')
})

test('Portfolio animations is started', () => {
  const state = {
    animation: false
  }
  mutations.changeAnimation(state)
  expect(state.animation).toBe(true)
})