export default {
  fetchLoading ({commit}, data) {
    commit('changeLoading', data)
  },
  toggleMenu ({commit}, data) {
    commit('changeMenu', data)
  },
  toggleTab ({commit}) {
    commit('changeTab')
  }
}
