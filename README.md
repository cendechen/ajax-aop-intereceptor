# ajax-aop-interceptor
面向切面的ajax请求拦截

## 加载方式

```
npm install ce-ajax-aop-interceptor --save
// 全局加载
import ajaxHelper from 'ce-ajax-aop-interceptor'

ajaxHelper.setGlobalError((errorMsg) => {
    // 全局错误
})

ajaxHelper.addRequestCallback((data) => {
    // 请求数据封装
    data = data || {}
    return data
})
ajaxHelper.addResponseCallback(data => {
    // 正常请求公共错误处理
    const returnData = data.data
    if (data.retCode === '123123') {
      warning('请勿重复提交')
      return -1 // 重复提交
    }
    return 0
})
ajaxHelper.ajaxPost(url, data).then(d => {
    // 正常请求到达数据
}).catch(error =>{
    // 请求发生错误
})
```


