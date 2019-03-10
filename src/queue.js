export default class queue {
  constructor () {
    this._queue = []
  }
  /**
   * 添加队列
   */
  push (hook, fn, methods = 'all') {
    this._queue.push({hook, fn, methods})
  }
  get (hook, methods = 'all') {
    let queue = this._queue.filter(d => {
      if(d.hook === hook) {
        return true
      }
      return false
    })
    if (methods === 'post') {
      queue = queue.filter(d => {
        if (['all', 'post'].includes(d.methods)) {
          return true
        }
        return false
      })
    }
    if (methods === 'get') {
      queue = queue.filter(d => {
        if (['all', 'get'].includes(d.methods)) {
          return true
        }
        return false
      })
    }
    queue = queue.map(d => d.fn)
    return queue
  }
}
