export default {
  changeLoading (state, data) {
    state.loading = data
  },
  changeMenu (state, data) {
    if (typeof data === 'boolean') {
      state.menu = data
    } else {
      state.menu = !state.menu
    }
  },
  changeTab (state) {
    if (state.tab === 'col') {
      state.tab = 'row'
    } else {
      state.tab = 'col'
    }
  },
  updatePortfolio (state, data) {
    state.portfolio = data
  },
  updateYearTab (state, data) {
    state.year = data
  },
  updatePortfolioOne (state, data) {
    state.portfolio.one.data = data.current
    state.portfolio.one.images = JSON.parse(data.current.carousel)
    state.portfolio.one.ids.prev = data.prev
    state.portfolio.one.ids.next = data.next
  }
}
