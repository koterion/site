import axios from 'axios'

export default class Api {
  static index (page = 1, url = '/api/' + this.name.toLowerCase()) {
    return axios(url + '?page=' + page)
  }

  static show (id, url = '/api/' + this.name.toLowerCase()) {
    return axios(url + '/' + id)
  }

  static getUrl () {
    return '/api/' + this.name.toLowerCase()
  }
}
