import axios from 'axios'

export const PORTFOLIO = '/api/portfolio'

export default class Api {
  static index (url, page = 1) {
    return axios(url + '?page=' + page)
  }

  static show (url, id) {
    return axios(url + '/' + id)
  }
}
