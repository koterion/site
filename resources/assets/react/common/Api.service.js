import axios from 'axios'

export default class Api {
  constructor (name = 'Api') {
    this.name = name
  }

  index (url = '/api/' + this.name.toLowerCase()) {
    return axios(url)
  }

  show (id, url = '/api/' + this.name.toLowerCase()) {
    return axios(url + '/' + id)
  }
}
