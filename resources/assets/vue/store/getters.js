export default {
  getDisplay: state => name => {
    return state.display.current > state.display[name]
  }
}