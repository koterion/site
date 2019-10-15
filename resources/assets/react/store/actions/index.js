import Portfolio from '../../models/Portfolio'
import * as types from '../constants/ActionTypes'

const PortfolioModule = new Portfolio()

function receivePortfolios (all) {
  return {
    type: types.RECEIVE_PORTFOLIOS,
    all
  }
}

const receivePortfolio = current => ({
  type: types.RECEIVE_PORTFOLIO,
  current
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

export const togglePortfolioTab = tab => dispatch => {
  dispatch(receivePortfoliosTab(tab))
}

export const togglePortfolioAnimation = animation => dispatch => {
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

export const clickYearTab = year => dispatch => {
  dispatch(receiveYearTab(year))
}

export const getOnePortfolio = (id = 1) => async (dispatch, getState) => {
  const collection = getState().portfolios.all.collection
  const all = Object.values(collection)
  let data = {}

  if (all.length > 0) {
    data.current = all.find(x => x.id === +id)
    const near = getNearbyId(all, data.current.year, id, data)
    data = { ...data, near }
  } else {
    try {
      const response = await PortfolioModule.show(id)
      data = response.data
    } catch (e) {
      throw new Error('Show Portfolio.')
    }
  }

  if (typeof data.current.carousel === 'string') {
    data.current.carousel = JSON.parse(data.current.carousel)
  }

  if (typeof data.current.video === 'string') {
    data.current.video = JSON.parse(data.current.video)
  }

  dispatch(receivePortfolio(data))
}

function getNearbyId (all, year, id, data) {
  const currentData = data
  const allByYear = all.filter((el) => el.year === year)
  let prevId = 0
  let nextId = 0

  if (data.current && all.length > 0) {
    const prev = allByYear.filter(el => el.id < +id)
    const next = allByYear.filter(el => el.id > +id)

    prevId = prev[prev.length - 1] ? prev[prev.length - 1].id : 0
    nextId = next[0] ? next[0].id : 0
  }

  currentData.prev = prevId
  currentData.next = nextId

  return { prev: prevId, next: nextId }
}
