import Portfolio from '../../models/Portfolio'

const state = {
  all: {
    years: {},
    group: {},
    collection: {}
  },
  one: {
    current: {}
  },
  year: 0
}

const getters = {}

const actions = {
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
    const collection = state.all.collection
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

const mutations = {
  updatePortfolio (state, data) {
    state.all = data
  },
  updateYearTab (state, data) {
    state.year = data
  },
  updatePortfolioOne (state, data) {
    state.one = data
    state.one.images = JSON.parse(data.current.carousel)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}