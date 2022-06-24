class Event {
  constructor() {
    this.clientList = {}
  }
  on(key, fun) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fun)
  }
  emit() {
    const key = Array.prototype.shift.call(arguments)
    const funs = this.clientList[key]

    if (!funs || funs.length === 0) {
      return false
    }

    for (let i = 0; i < funs.length; i++) {
      const fun = funs[i]
      fun.apply(this, arguments)
    }
  }
  off(key, fn) {
    const fns = this.clientList[key]
    if (!fns) {
      return false
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (let l = fns.length - 1; l >= 0; l--) {
        const _fn = fns[l]
        if (_fn === fn) {
          fns.splice(l, 1)
        }
      }
    }
  }
}

export default new Event()
