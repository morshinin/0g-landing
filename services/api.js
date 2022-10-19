import axios from 'axios'

import { API_URL } from '@/app.config'

export const Endpoint = {
  SCHEDULE: 'user/0g',
}

export class ApiService {

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

  async post(options) {
    try {
      const { url, data } = options
      const fullPath = `${API_URL}${url}`
      const response = await this._provider.post(`${fullPath}`, data)

      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }

  async schedule({ email, name, company, phoneCode, phoneNumber, date, timezone }) {
    try {
      await this.post({
        url: Endpoint.SCHEDULE,
        data: { email, name, company, phoneCode, phoneNumber, date, timezone },
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)

      throw new Error("Can't schedule the date")
    }
  }
}
