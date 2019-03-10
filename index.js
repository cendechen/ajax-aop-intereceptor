import helper from '@/index.js'
helper.use('beforeRequest', function(error, data, next) {
  next(error, data)
})
helper.use('beforeRequest', function(error, data, next) {
  next(error, data)
}, 'post')


helper.post('/', {dasdasdasdasdasd:'12313'}).then(d => {
  console.log('dsdsad')
  const data = d.data
  if (data.retCode === '000000') {

  } else {

  }
}).catch(e => {
  console.log(e)
})

helper.get('/', {dasdasdasdasdasd:'12313'}).then(d => {
  console.log('dsdsad')
  const data = d.data
  if (data.retCode === '000000') {

  } else {

  }
}).catch(e => {
  console.log(e)
})
