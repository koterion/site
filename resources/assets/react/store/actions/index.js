import Portfolio from '../../models/Portfolio'
import * as types from '../constants/ActionTypes'

const PortfolioModule = new Portfolio()

const receivePortfolios = all => ({
  type: types.RECEIVE_PORTFOLIOS,
  all
})

const receivePortfolio = one => ({
  type: types.RECEIVE_PORTFOLIO,
  one
})

const receiveYearTab = year => ({
  type: types.RECEIVE_YEAR,
  year
})

const receivePortfoliosTab = tab => ({
  type: types.RECEIVE_PORTFOLIO_TAB,
  tab
})

const receivePortfoliosAnimation = animation => ({
  type: types.RECEIVE_PORTFOLIO_ANIMATION,
  animation
})

export const togglePortfolioTab = tab => (dispatch) => {
  dispatch(receivePortfoliosTab(tab))
}

export const togglePortfolioAnimation = animation => (dispatch) => {
  dispatch(receivePortfoliosAnimation(animation))
}

export const getAllPortfolios = () => async dispatch => {
  try {
    const response = await PortfolioModule.index()
    dispatch(receivePortfolios(response.data))
    dispatch(receiveYearTab(response.data.years[response.data.years.length - 1]))
  } catch (e) {
    dispatch(receivePortfolios(false))
    throw new Error('Get portfolio')
  }
}

export const clickYearTab = year => (dispatch) => {
  dispatch(receiveYearTab(year))
}

export const getOnePortfolio = (id = 1) => async (dispatch, getState) => {
  const collection = getState.all.collection
  const all = Object.values(collection)

  if (all.length > 0) {
    const data = {}
    const prev = all.filter(el => el.id < id)
    const next = all.filter(el => el.id > id)

    data.current = all.find(x => x.id === id)
    data.prev = prev[prev.length - 1] ? prev[prev.length - 1].id : ''
    data.next = next[0] ? next[0].id : ''

    if (data.current) {
      if (typeof data.current.carousel === 'string') {
        data.current.carousel = JSON.parse(data.current.carousel)
      }

      if (typeof data.current.video === 'string') {
        data.current.video = JSON.parse(data.current.video)
      }

      dispatch(receivePortfolio(data))
    } else {
      throw new Error('Show Portfolio.')
    }
  } else {
    try {
      const response = await PortfolioModule.show(id)
      if (typeof response.current.carousel === 'string') {
        response.current.carousel = JSON.parse(response.current.carousel)
      }

      if (typeof response.current.video === 'string') {
        response.current.video = JSON.parse(response.current.video)
      }

      dispatch(receivePortfolio(response.data))
    } catch (e) {
      throw new Error('Show Portfolio.')
    }
  }
}