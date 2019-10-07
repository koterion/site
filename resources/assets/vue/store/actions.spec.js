import actions from './actions'

test('Fetch loading', () => {
  const commit = jest.fn()
  actions.fetchLoading({ commit }, true)
  expect(commit).toHaveBeenCalledWith('changeLoading', true)
})

test('Toggle menu', () => {
  const commit = jest.fn()
  actions.toggleMenu({ commit }, true)
  expect(commit).toHaveBeenCalledWith('changeMenu', true)
})

test('Toggle tab', () => {
  const commit = jest.fn()
  actions.toggleTab({ commit })
  expect(commit).toHaveBeenCalledWith('changeTab')
})

test('Turn animation', () => {
  const commit = jest.fn()
  actions.turnAnimation({ commit })
  expect(commit).toHaveBeenCalledWith('changeAnimation')
})