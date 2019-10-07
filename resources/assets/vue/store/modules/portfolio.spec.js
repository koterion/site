import portfolio from './portfolios'

const { actions, mutations } = portfolio

describe('Actions', () => {
  const state = portfolio.state()
  test('Fetch Portfolio all', async () => {
    const commit = jest.fn()
    try {
      await actions.fetchPortfolio({ commit })
      expect(commit).toHaveBeenCalledWith('updatePortfolio')
      expect(commit).toHaveBeenCalledWith('updateYearTab')
    } catch (e) {
      expect(e.message).toMatch('Get portfolio')
    }
  })

  test('Click Year Tab', () => {
    const commit = jest.fn()
    actions.clickYearTab({ commit }, 2017)
    expect(commit).toHaveBeenCalledWith('updateYearTab', 2017)
  })

  test('Fetch Portfolio one', async () => {
    const commit = jest.fn()

    try {
      await actions.fetchPortfolioOne({ commit, state })
      expect(commit).toHaveBeenCalledWith('updatePortfolioOne')
    } catch (e) {
      expect(e.message).toMatch('Show Portfolio.')
    }
  })
})

describe('Mutations', () => {
  const state = portfolio.state()

  test('Update portfolio', () => {
    const data = {
      years: [],
      group: {},
      collection: []
    }
    expect(state.all).toEqual(data)
    mutations.updatePortfolio(state, { years: [] })
    expect(state.all).toEqual({ years: [] })
  })

  test('Update Year Tab', () => {
    expect(state.year).toBe(null)
    mutations.updateYearTab(state, 2017)
    expect(state.year).toBe(2017)
  })

  test('Update Portfolio One', () => {
    const data = {
      current: {}
    }

    expect(state.one).toEqual(data)
    mutations.updatePortfolioOne(state, { ...data, prev: '', next: '' })
    expect(state.one).toEqual({ ...data, prev: '', next: '' })
  })
})