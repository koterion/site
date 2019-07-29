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
  }
}
