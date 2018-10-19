import axios from 'axios'


const requestQueue = []
const responseQueue = []
const globalError = []
const errorMsg = {
  400: '请求错误(400)',
  401: '未授权，请重新登录(401)',
  403: '拒绝访问(403)',
  404: '请求出错(404)',
  408: '请求超时(408)',
  500: '服务器错误(500)',
  501: '服务未实现(501)',
  502: '网络错误(502)',
  503: '服务不可用(503)',
  504: '网络超时(504)',
  505: 'HTTP版本不受支持(505)'
}

const ajaxPory = {
  addRequestCallback (fn) {
    requestQueue.push(fn) // 增加请求和回调函数
  },
  removeRequestCallback (fn) {
    const index = requestQueue.indexOf(fn)
    if (index !== -1) {
      requestQueue.splice(index, 1)
    }
  },
  addResponseCallback (fn) {
    responseQueue.puhs(fn)
  },
  removeResponseCallback (fn) {
    const index = responseQueue.indexOf(fn)
    if (index !== -1) {
      responseQueue.splice(index, 1)
    }
  },
  setGlobalError (fn) {
      globalError.push(fn) // 错误全局错误的处理函数
  },
  /**
   * 异常请求
   * @param  {string|array}   url  请求的远程地址
   * @param  {Array}   data  请求的地址
   * @param  {Function} fn   发生网络异常或者回调异常的回调函数
   * @return {Promise}       ajax请求的回调promise
   */
  ajaxPost (url, data) {
    data = this.callRequest(data)
    return new Promise((r, j) => {
      axios.post(url, data).then(d => {
        // 业务请求正确
        const retCode = this.callResponse(d)
        if (retCode === 0) {
          r(data)
        } else {
          // 被前置拦截的错误
          j(new Error('用户自定义错误'))
        }
      }).catch(error => {
        let msg
        if (error && error.response) { // 返回不是200的链接错误
          msg = errorMsg[error.response.status] || '未知错误'
        } else {
          msg = '网络连接失败' // 网络失败的错误
        }
        globalError.forEach(fn => { // 错误的回调函数调用
          fn.call(this, msg)
        })
        j(new Error(msg))
      })
    })
  },
  callRequest (data) {
    const requestQueueClone = requestQueue.slice(0) // 复制数组
    while (requestQueueClone.length > 0) {
      let fn = requestQueueClone.shift()
      data = fn(data)
    }
    return data
  },
  callResponse (data) {
    // 处理后置错误
    const responseQueueClone = requestQueue.slice(0) // 复制数组
    let retCode = 0
    while (responseQueueClone.length > 0) {
      var fn = responseQueueClone.shift()
      retCode += fn(data)
    }
    return retCode // 返回函数执行的结果
  }
}

export default ajaxPory
