export default {
  changeLoading (state, data) {
    state.loading = data
  },
  changeMenu (state, data) {
    state.menu = data ? data : !state.menu
  },
  changeTab (state) {
    state.tab = !state.tab
  }
}
