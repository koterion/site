export default {
  getPortfolio: (state) => {
    return state.portfolio.all
  },
  getYear: (state) => {
    return state.year
  },
  getPortfolioOne: (state) => {
    return state.portfolio.one
  }
}
