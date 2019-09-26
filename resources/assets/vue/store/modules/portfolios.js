import Portfolio from '../../models/Portfolio'

const PortfolioModule = new Portfolio()

export default {
  namespaced: true,

  state: () => ({
    all: {
      years: [],
      group: {},
      collection: []
    },
    one: {
      current: {}
    },
    year: null
  }),

  getters: {},

  actions: {
    async fetchPortfolio ({ commit }) {
      try {
        const response = await PortfolioModule.index()
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

        if (data.current) {
          commit('updatePortfolioOne', data)
        } else {
          throw new Error('Show Portfolio.')
        }
      } else {
        try {
          const response = await PortfolioModule.show(id)
          commit('updatePortfolioOne', response.data)
        } catch (e) {
          throw new Error('Show Portfolio.')
        }
      }
    }
  },

  mutations: {
    updatePortfolio (state, data) {
      state.all = data
    },
    updateYearTab (state, data) {
      state.year = data
    },
    updatePortfolioOne (state, data) {
      state.one = data

      if (typeof data.current.carousel === 'string') {
        state.one.current.carousel = JSON.parse(data.current.carousel)
      }

      if (typeof data.current.video === 'string') {
        state.one.current.video = JSON.parse(data.current.video)
      }
    }
  }
}