export default {
  getPortfolio: (state) => {
    return state.portfolio
  },
  getYear: (state) => {
    return state.year
  },
  getOnlyPortfolio: (state, getters) => {
    return Object.values(getters.getPortfolio)
  }
}
