import Api, { PORTFOLIO } from '../common/Api.service'

export default class Provider extends Api {
  static getUrl () {
    return PORTFOLIO
  }
}
