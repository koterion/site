import axios from 'axios'

export const PORTFOLIO = '/api/portfolio/'

export default class Api {
  static index (url) {
    return axios(url)
  }
  static show (url) {
    return axios(url)
  }
}
