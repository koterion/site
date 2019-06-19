export default {
  fetchLoading ({commit}, data) {
    commit('changeLoading', data)
  },
  toggleMenu ({commit}) {
    commit('changeMenu')
  },
  toggleTab ({commit}) {
    commit('changeTab')
  }
}
