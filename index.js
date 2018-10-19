import helper from '@/index.js'
helper.addRequestCallback(function (data) {
  data['sss'] = sessionSt
  return data
})
helper.addResponseCallback(function (data) {
  // ddasdasd
  const data = d.data
  if (data.retCode === '123123') {
    router.replace('/')
    return -1
  } else if (data.retCode === '312312') {
    return -1
  }
  return 0
})

helper.setGlobalError(function (msg) {
  console.log(msg)
  // 网络错误
  // 不是200

})

helper.ajaxPost('/', {dasdasdasdasdasd:'12313'}).then(d => {
  console.log('dsdsad')
  const data = d.data
  if (data.retCode === '000000') {

  } else {

  }
}).catch(e => {
  e.message  = '用户自定义异常'
  console.log(e.message)
})
