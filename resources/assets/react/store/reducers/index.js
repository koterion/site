import { combineReducers } from 'redux'
import portfolios from './portfolios'

const initial = {
  loading: true,
  display: {
    current: window.innerWidth,
    desktop: 1230,
    laptop: 1150,
    pad: 992,
    padmini: 768,
    mobile: 568
  }
}

const site = combineReducers({
  portfolios
})

export const getDisplay = name => {
  return initial.display.current > initial.display[name]
}

export default site
