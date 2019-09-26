import axios from 'axios'

export default class Api {
  constructor () {
    this.name = 'Api'
  }

  index (url = '/api/' + this.name.toLowerCase()) {
    return axios(url)
  }

  show (id, url = '/api/' + this.name.toLowerCase()) {
    return axios(url + '/' + id)
  }
}
