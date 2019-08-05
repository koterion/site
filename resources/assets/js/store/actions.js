import Portfolio from '../models/Portfolio'

export default {
  fetchLoading ({ commit }, data) {
    commit('changeLoading', data)
  },
  toggleMenu ({ commit }, data) {
    commit('changeMenu', data)
  },
  toggleTab ({ commit }) {
    commit('changeTab')
  },
  async fetchPortfolio ({ commit }, page = 1) {
    try {
      const response = await Portfolio.index(Portfolio.getUrl(), page)
      commit('updatePortfolio', response.data)
      commit('updateYearTab', response.data.years[response.data.years.length - 1])
    } catch (e) {
      commit('updatePortfolio', false)
      throw new Error('Get portfolio')
    }
  },
  clickYearTab ({ commit }, year) {
    commit('updateYearTab', year)
  },
  async fetchPortfolioOne ({ commit }, id = 1) {
    try {
      const response = await Portfolio.show(Portfolio.getUrl(),id)
      commit('updatePortfolioOne', response.data)
    } catch (e) {
      commit('updatePortfolioOne', false)
      throw new Error('Show Portfolio. ' + e.message)
    }
  },
}
