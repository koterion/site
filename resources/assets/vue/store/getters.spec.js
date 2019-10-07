import getters from './getters'

test('Get display', () => {
  const state = {
    display: {
      current: 1024,
      desktop: 1230,
      laptop: 1150,
      pad: 992,
      padmini: 768,
      mobile: 568
    }
  }

  expect(getters.getDisplay(state)('desktop')).toBe(false)
  expect(getters.getDisplay(state)('pad')).toBe(true)
})