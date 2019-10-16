import Api from '../../common/Api.service'

const Portfolio = new Api('Portfolio')

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
        const response = await Portfolio.index()
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
      let data = {}

      if (all.length > 0) {
        data.current = all.find(x => x.id === +id)

        if (data.current) {
          const near = getNearbyId(all, data.current.year, id, data)
          data = { ...data, near }
        } else {
          throw new Error('Show Portfolio.')
        }
      } else {
        try {
          const response = await Portfolio.show(id)
          data = response.data
        } catch (e) {
          throw new Error('Show Portfolio.')
        }
      }

      commit('updatePortfolioOne', data)
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

function getNearbyId (all, year, id, data) {
  const currentData = data
  const allByYear = all.filter((el) => el.year === year)
  let prevId = 0
  let nextId = 0

  if (data.current && all.length > 0) {
    const prev = allByYear.filter(el => el.id < +id)
    const next = allByYear.filter(el => el.id > +id)

    prevId = prev[prev.length - 1] ? prev[prev.length - 1].id : null
    nextId = next[0] ? next[0].id : null
  }

  currentData.prev = prevId
  currentData.next = nextId

  return { prev: prevId, next: nextId }
}