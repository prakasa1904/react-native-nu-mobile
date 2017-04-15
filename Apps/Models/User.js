import RestClient from 'react-native-rest-client'
import CONSTANTS from './../Constants/Main'

const LIST_DEFAULT = {
  total: 0,
  data: [],
}

export default class ModelUser extends RestClient {
  constructor () {
    super(CONSTANTS.API.production);
  }
  
  login (username, password) {
    return this.POST('/auth', { username, password })
  }

  getUsers(page = 0, limit = 10) {
    return this.GET(`/member/get/?offset=${page}&limit=${limit}`)
      .then(response => response)
  }
}
