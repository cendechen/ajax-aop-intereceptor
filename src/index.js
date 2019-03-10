import _axios from 'axios'
import getNetError from './netError'
import nextCompose from './next'
import Queue from './queue'
import _ from 'lodash/fp/cloneDeep'
const hooks = ['beforeRequest', 'afterResponse']
const methods = [ 'delete', 'head', 'options', 'put', 'patch', 'Axios', 'Cancel', 'CancelToken', 'isCancel', 'all', 'spread', 'create', 'interceptors', 'defaults' ]
const {post, get} = _axios
const queue = new Queue
const errorFn = []

const axios = function (config) {
  return axios.request(config)
}
/**
 * copy axios 的库函数
 */
methods.forEach(d => {
  axios[d] = _axios[d]
})

axios.use = function (hook, fn, methods = 'all') {
  if (!hooks.includes(hook)) {
    return new Error('安装了生命周期以外的函数')
  }
  // 安装函数
  queue.push(
    hook,
    fn,
    methods
  )
}
/**
 * 设置全局的网络错误
 */
axios.useError = function (fn) {
  errorFn.push(fn)
}

axios.post = function (url, data = {}, config = {}) {
  const fns = queue.get('beforeRequest', 'post')
  return new Promise((r, j) => {
    nextCompose(fns)(data, (error, data) => {
      // 生成新数据
      if (error) {
        j(error)
      } else {
        post(url, data, config).then(d => {
          // 处理数据和上报
          const rfns = queue.get('afterResponse', 'post')
          nextCompose(rfns)(d, (error, data) => {
            if (error) {
              j(new Error('post请求后置，afterResponse用户自定义错误'))
            } else {
              r(data)
            }
          })
        }).catch(e => {
          let msg
          if (e && e.response) {
            msg = getNetError(e.response.status)
          } else {
            msg = '网络错误'
          }
          // 调用全局错误
          errorFn.forEach(d => {
            if (d) {
              d(msg)
            }
          })
          j(new Error(msg))
        })
      }
    })
  })
}

axios.get = function (url, config = {}) {
  const fns = queue.get('beforeRequest', 'get')
  config = _(config)
  let data = config['data']
  if (!data) {
    data = config['params']
  }
  return new Promise((r, j) => {
    nextCompose(fns) (data, (error, data) => {
      if (error) {
        j(new Error('get请求前置，beforeRequest用户自定义错误'))
      } else {
        config['data'] && delete config['data']
        config['params'] = data || {}
        get(url, config).then(d => {
          const rfns = queue.get('afterResponse', 'get')
          nextCompose(rfns)(d, (error, data) => {
            if (error) {
              j(new Error('get请求后置，afterResponse用户自定义错误'))
            } else {
              r(data)
            }
          })
        }).catch(e => {
          let msg
          if (e && e.response) {
            msg = getNetError(e.response.status)
          } else {
            msg = '网络错误'
          }
          // 调用全局错误
          errorFn.forEach(d => {
            if (d) {
              d(msg)
            }
          })
          j(new Error(msg))
        })
      }
    })
  })
}

export default axios
