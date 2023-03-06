class HyCache {
  constructor (isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setItem(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getItem(key) {
    if (this.storage.getItem(key)) {
      return JSON.parse(this.storage.getItem(key))
    }
  }

  key(idnex) {
    return this.storage.key(idnex)
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  length() {
    return this.storage.length
  }
}


const localCache = new HyCache()
const sessionCache = new HyCache()

export {
  localCache,
  sessionCache
}