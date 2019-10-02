import { combineReducers } from 'redux'
import {
  RECEIVE_PORTFOLIOS,
  RECEIVE_PORTFOLIO,
  RECEIVE_YEAR,
  RECEIVE_PORTFOLIO_TAB,
  RECEIVE_PORTFOLIO_ANIMATION
} from '../constants/ActionTypes'

const initial = {
  all: {
    collection: {},
    years: [],
    group: {}
  },
  one: {
    current: {},
    prev: null,
    next: null
  },
  tab: 'row',
  animation: false
}

const all = (state = initial.all, action) => {
  switch (action.type) {
    case RECEIVE_PORTFOLIOS:
      return Object.assign({}, state, action.all)
    default:
      return state
  }
}

const one = (state = initial.one, action) => {
  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      return Object.assign({}, state, action.current)
    default:
      return state
  }
}

const year = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_YEAR:
      return action.year
    default:
      return state
  }
}

const tab = (state = initial.tab, action) => {
  switch (action.type) {
    case RECEIVE_PORTFOLIO_TAB:
      return action.tab === 'col' ? 'row' : 'col'
    default:
      return state
  }
}

const animation = (state = initial.animation, action) => {
  switch (action.type) {
    case RECEIVE_PORTFOLIO_ANIMATION:
      return !action.animation
    default:
      return state
  }
}

export default combineReducers({
  all,
  one,
  year,
  tab,
  animation
})

export const getPortfolio = state => state.one
export const getPortfolios = state => state.all
export const getYear = state => state.year
export const getPortfolioTab = state => state.tab
export const getPortfolioAnimation = state => state.animation
