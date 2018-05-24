import {
  SET_NEPHELE_SERVICE_HOST,
  SET_NEPHELE_SERVICE_PORT
} from '../mutation-types'

const app = {
  state: {
    nepheleService: {
      host: '192.168.205.128',
      port: '8080'
    }
  },
  mutations: {
    [SET_NEPHELE_SERVICE_HOST] (state, host) {
      state.nepheleService.host = host
    },
    [SET_NEPHELE_SERVICE_PORT] (state, port) {
      state.nepheleService.port = port
    }
  }
}

export default app
