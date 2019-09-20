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

    if (state.menu) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  },
  changeTab (state) {
    if (state.tab === 'col') {
      state.tab = 'row'
    } else {
      state.tab = 'col'
    }
  },
  changeAnimation (state) {
    state.animation = !state.animation
  },
  updatePortfolio (state, data) {
    state.portfolio.all = data
  },
  updateYearTab (state, data) {
    state.year = data
  },
  updatePortfolioOne (state, data) {
    state.portfolio.one = data
    state.portfolio.one.images = JSON.parse(data.current.carousel)
  }
}
