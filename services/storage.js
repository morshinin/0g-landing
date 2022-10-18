export class StorageService {
  static get plugin() {
    return {
      install(Vue, options) {
        Vue.prototype.$storage = new StorageService(localStorage)
      },
    }
  }

  constructor(provider) {
    this._provider = provider
  }

  get(key) {
    return this._provider.getItem(key)
  }

  set(key, value) {
    return this._provider.setItem(key, value)
  }

  remove(key, value) {
    return this._provider.removeItem(key)
  }

  has(key) {
    return Boolean(this.get(key))
  }
}
