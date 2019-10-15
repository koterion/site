import {
  RECEIVE_PORTFOLIOS,
  RECEIVE_PORTFOLIO,
  RECEIVE_YEAR,
  RECEIVE_PORTFOLIO_TAB,
  RECEIVE_PORTFOLIO_ANIMATION
} from '../constants/ActionTypes'

const initialState = {
  all: {
    collection: {},
    years: [],
    group: {}
  },
  one: {
    current: {
      title: '',
      content: ''
    },
    prev: 0,
    next: 0
  },
  tab: 'row',
  animation: false,
  year: 0
}

export default function portfolios (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PORTFOLIOS:
      return { ...state, all: action.all }
    case RECEIVE_PORTFOLIO:
      return { ...state, one: action.current }
    case RECEIVE_YEAR:
      return { ...state, year: action.year }
    case RECEIVE_PORTFOLIO_TAB:
      return { ...state, tab: action.tab === 'col' ? 'row' : 'col' }
    case RECEIVE_PORTFOLIO_ANIMATION:
      return { ...state, animation: !action.animation }
    default:
      return state
  }
}
