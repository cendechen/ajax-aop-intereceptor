function map(arrFn) {
  var index = -1
  var len = arrFn.length
  var callback
  function next(error, data) {
    if (error) {
      return callback(new Error(error))
    } else {
      index++
      if (index >= len) {
        callback(null, data)
        return
      }
      arrFn[index](null, data, next)
    }
  }
  return function(data, done) {
    callback = done
    next(null, data)
  }
}

export default map
