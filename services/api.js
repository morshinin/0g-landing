import axios from 'axios'

import { API_URL } from '@/app.config'

export const Endpoint = {
  NEWSPAPER: 'newspaper',
  SUBSCRIBE: 'user/subscribe',
  SUBSCRIBE_EVENT: 'user/subscribe/event',
  FEEDBACK: 'user/feedback',
  VISIT: 'user/visit',
}

export const Network = {
  ETHEREUM: 'ethereum',
  TRON: 'tron',
}

export class ApiService {
  _network = Network.ETHEREUM
  _provider = null

  static get plugin() {
    return {
      install(Vue, options) {
        Vue.prototype.$api = new ApiService(axios)
      },
    }
  }

  constructor(provider) {
    this._provider = provider
  }

  async get(options) {
    try {
      const { url, network } = options
      const fullPath = `${API_URL[network || this._network]}${url}`
      const response = await this._provider.post(`${fullPath}`)

      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }

  async post(options) {
    try {
      const { url, network, data } = options
      const fullPath = `${API_URL[network || this._network]}${url}`
      const response = await this._provider.post(`${fullPath}`, data)

      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }

  async getStats() {
    try {
      const ethereum = await this.get({
        url: Endpoint.NEWSPAPER,
        network: Network.ETHEREUM,
      })

      const tron = await this.get({
        url: Endpoint.NEWSPAPER,
        network: Network.TRON,
      })

      const add = (a, b) => Number(a) + Number(b)

      return {
        buildings: add(ethereum.buildings.buildings, tron.buildings.buildings),
        landPlotsPurchased: add(ethereum.buildings.all, tron.buildings.all),
        citizens: add(ethereum.citizens.all, tron.citizens.all),
        districts: add(ethereum.stat.districts, tron.stat.districts),
        landPlots: add(ethereum.stat.lands, tron.stat.lands),
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async subscribe({ email, from, hash, query }) {
    try {
      await this.post({
        url: Endpoint.SUBSCRIBE,
        network: Network.ETHEREUM,
        data: {
          email,
          from,
          hash,
          query
        },
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)

      throw new Error("Can't subscribe")
    }
  }

  async event({ eventType, from, hash }) {
    try {
      await this.post({
        url: Endpoint.SUBSCRIBE_EVENT,
        network: Network.ETHEREUM,
        data: {
          event_type: eventType,
          from,
          hash,
        },
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async feedback({ email, name, message }) {
    try {
      await this.post({
        url: Endpoint.FEEDBACK,
        network: Network.ETHEREUM,
        data: { email, name, message },
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)

      throw new Error("Can't send feedback")
    }
  }

  async visit(data) {
    try {
      await this.post({
        url: Endpoint.VISIT,
        network: Network.ETHEREUM,
        data,
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
