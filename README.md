# ajax-aop-interceptor
面向切面的ajax请求拦截

## 加载方式

```
npm install ce-ajax-aop-interceptor --save
// 全局加载
import axios from 'ce-ajax-aop-interceptor'

axios.use('beforeRequest', function(error, data, next) {
    next(error, data)
})

axios.post('/', {data})


```
