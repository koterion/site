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
    } catch (e) {
      commit('updatePortfolio', false)
      throw new Error('Get portfolio')
    }
  }
}
