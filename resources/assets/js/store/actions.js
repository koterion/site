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
  turnAnimation ({ commit }) {
    commit('changeAnimation')
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
  async fetchPortfolioOne ({ commit, state }, id = 1) {
    const collection = state.portfolio.all.collection
    const all = Object.values(collection)

    if (all.length > 0) {
      const data = {}
      const prev = all.filter(el => el.id < id)
      const next = all.filter(el => el.id > id)

      data.current = all.find(x => x.id === id)
      data.prev = prev[prev.length - 1] ? prev[prev.length - 1].id : ''
      data.next = next[0] ? next[0].id : ''

      commit('updatePortfolioOne', data)
    } else {
      try {
        const response = await Portfolio.show(Portfolio.getUrl(), id)
        commit('updatePortfolioOne', response.data)
      } catch (e) {
        throw new Error('Show Portfolio. ' + e.message)
      }
    }
  }
}
