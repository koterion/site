export default {
  changeLoading (state, data) {
    state.loading = data
  },
  changeMenu (state) {
    state.menu = !state.menu
  },
  changeTab (state) {
    state.tab = !state.tab
  }
}
