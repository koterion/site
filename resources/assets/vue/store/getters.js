export default {
  getDisplay: state => name => state.display.current > state.display[name]
}