!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ajaxAopInterceptor=t():e.ajaxAopInterceptor=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="./src/index.js")}({"./node_modules/axios/index.js":function(e,t,o){e.exports=o("./node_modules/axios/lib/axios.js")},"./node_modules/axios/lib/adapters/xhr.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js"),r=o("./node_modules/axios/lib/core/settle.js"),s=o("./node_modules/axios/lib/helpers/buildURL.js"),i=o("./node_modules/axios/lib/helpers/parseHeaders.js"),a=o("./node_modules/axios/lib/helpers/isURLSameOrigin.js"),u=o("./node_modules/axios/lib/core/createError.js"),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||o("./node_modules/axios/lib/helpers/btoa.js");e.exports=function(e){return new Promise(function(t,l){var f=e.data,d=e.headers;n.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var x=e.auth.username||"",b=e.auth.password||"";d.Authorization="Basic "+c(x+":"+b)}if(p.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var o="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:o,config:e,request:p};r(t,l,n),p=null}},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var j=o("./node_modules/axios/lib/helpers/cookies.js"),y=(e.withCredentials||a(e.url))&&e.xsrfCookieName?j.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&n.forEach(d,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},"./node_modules/axios/lib/axios.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js"),r=o("./node_modules/axios/lib/helpers/bind.js"),s=o("./node_modules/axios/lib/core/Axios.js"),i=o("./node_modules/axios/lib/defaults.js");function a(e){var t=new s(e),o=r(s.prototype.request,t);return n.extend(o,s.prototype,t),n.extend(o,t),o}var u=a(i);u.Axios=s,u.create=function(e){return a(n.merge(i,e))},u.Cancel=o("./node_modules/axios/lib/cancel/Cancel.js"),u.CancelToken=o("./node_modules/axios/lib/cancel/CancelToken.js"),u.isCancel=o("./node_modules/axios/lib/cancel/isCancel.js"),u.all=function(e){return Promise.all(e)},u.spread=o("./node_modules/axios/lib/helpers/spread.js"),e.exports=u,e.exports.default=u},"./node_modules/axios/lib/cancel/Cancel.js":function(e,t,o){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},"./node_modules/axios/lib/cancel/CancelToken.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/cancel/Cancel.js");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var o=this;e(function(e){o.reason||(o.reason=new n(e),t(o.reason))})}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},"./node_modules/axios/lib/cancel/isCancel.js":function(e,t,o){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"./node_modules/axios/lib/core/Axios.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/defaults.js"),r=o("./node_modules/axios/lib/utils.js"),s=o("./node_modules/axios/lib/core/InterceptorManager.js"),i=o("./node_modules/axios/lib/core/dispatchRequest.js");function a(e){this.defaults=e,this.interceptors={request:new s,response:new s}}a.prototype.request=function(e){"string"==typeof e&&(e=r.merge({url:arguments[0]},arguments[1])),(e=r.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[i,void 0],o=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)o=o.then(t.shift(),t.shift());return o},r.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(t,o){return this.request(r.merge(o||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,o,n){return this.request(r.merge(n||{},{method:e,url:t,data:o}))}}),e.exports=a},"./node_modules/axios/lib/core/InterceptorManager.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js");function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},"./node_modules/axios/lib/core/createError.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/core/enhanceError.js");e.exports=function(e,t,o,r,s){var i=new Error(e);return n(i,t,o,r,s)}},"./node_modules/axios/lib/core/dispatchRequest.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js"),r=o("./node_modules/axios/lib/core/transformData.js"),s=o("./node_modules/axios/lib/cancel/isCancel.js"),i=o("./node_modules/axios/lib/defaults.js"),a=o("./node_modules/axios/lib/helpers/isAbsoluteURL.js"),u=o("./node_modules/axios/lib/helpers/combineURLs.js");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return c(e),t.data=r(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(c(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},"./node_modules/axios/lib/core/enhanceError.js":function(e,t,o){"use strict";e.exports=function(e,t,o,n,r){return e.config=t,o&&(e.code=o),e.request=n,e.response=r,e}},"./node_modules/axios/lib/core/settle.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/core/createError.js");e.exports=function(e,t,o){var r=o.config.validateStatus;o.status&&r&&!r(o.status)?t(n("Request failed with status code "+o.status,o.config,null,o.request,o)):e(o)}},"./node_modules/axios/lib/core/transformData.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js");e.exports=function(e,t,o){return n.forEach(o,function(o){e=o(e,t)}),e}},"./node_modules/axios/lib/defaults.js":function(e,t,o){"use strict";(function(t){var n=o("./node_modules/axios/lib/utils.js"),r=o("./node_modules/axios/lib/helpers/normalizeHeaderName.js"),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=o("./node_modules/axios/lib/adapters/xhr.js"):void 0!==t&&(e=o("./node_modules/axios/lib/adapters/xhr.js")),e}(),transformRequest:[function(e,t){return r(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(e){a.headers[e]={}}),n.forEach(["post","put","patch"],function(e){a.headers[e]=n.merge(s)}),e.exports=a}).call(this,o("./node_modules/process/browser.js"))},"./node_modules/axios/lib/helpers/bind.js":function(e,t,o){"use strict";e.exports=function(e,t){return function(){for(var o=new Array(arguments.length),n=0;n<o.length;n++)o[n]=arguments[n];return e.apply(t,o)}}},"./node_modules/axios/lib/helpers/btoa.js":function(e,t,o){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(){this.message="String contains an invalid character"}r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,o,s=String(e),i="",a=0,u=n;s.charAt(0|a)||(u="=",a%1);i+=u.charAt(63&t>>8-a%1*8)){if((o=s.charCodeAt(a+=.75))>255)throw new r;t=t<<8|o}return i}},"./node_modules/axios/lib/helpers/buildURL.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js");function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,o){if(!t)return e;var s;if(o)s=o(t);else if(n.isURLSearchParams(t))s=t.toString();else{var i=[];n.forEach(t,function(e,t){null!==e&&void 0!==e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),s=i.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},"./node_modules/axios/lib/helpers/combineURLs.js":function(e,t,o){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"./node_modules/axios/lib/helpers/cookies.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,o,r,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(o)&&a.push("expires="+new Date(o).toGMTString()),n.isString(r)&&a.push("path="+r),n.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"./node_modules/axios/lib/helpers/isAbsoluteURL.js":function(e,t,o){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"./node_modules/axios/lib/helpers/isURLSameOrigin.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function r(e){var n=e;return t&&(o.setAttribute("href",n),n=o.href),o.setAttribute("href",n),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return e=r(window.location.href),function(t){var o=n.isString(t)?r(t):t;return o.protocol===e.protocol&&o.host===e.host}}():function(){return!0}},"./node_modules/axios/lib/helpers/normalizeHeaderName.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js");e.exports=function(e,t){n.forEach(e,function(o,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=o,delete e[n])})}},"./node_modules/axios/lib/helpers/parseHeaders.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/utils.js"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,o,s,i={};return e?(n.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),o=n.trim(e.substr(s+1)),t){if(i[t]&&r.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([o]):i[t]?i[t]+", "+o:o}}),i):i}},"./node_modules/axios/lib/helpers/spread.js":function(e,t,o){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"./node_modules/axios/lib/utils.js":function(e,t,o){"use strict";var n=o("./node_modules/axios/lib/helpers/bind.js"),r=o("./node_modules/is-buffer/index.js"),s=Object.prototype.toString;function i(e){return"[object Array]"===s.call(e)}function a(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===s.call(e)}function c(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),i(e))for(var o=0,n=e.length;o<n;o++)t.call(null,e[o],o,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:r,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function o(o,n){"object"==typeof t[n]&&"object"==typeof o?t[n]=e(t[n],o):t[n]=o}for(var n=0,r=arguments.length;n<r;n++)c(arguments[n],o);return t},extend:function(e,t,o){return c(t,function(t,r){e[r]=o&&"function"==typeof t?n(t,o):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},"./node_modules/is-buffer/index.js":function(e,t){function o(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(o(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&o(e.slice(0,0))}(e)||!!e._isBuffer)}},"./node_modules/process/browser.js":function(e,t){var o,n,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(o===setTimeout)return setTimeout(e,0);if((o===s||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:s}catch(e){o=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o];c.push(new h(e,t)),1!==c.length||l||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"./src/index.js":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/axios/index.js"),r=o.n(n),s=[],i=[],a=[],u={400:"请求错误(400)",401:"未授权，请重新登录(401)",403:"拒绝访问(403)",404:"请求出错(404)",408:"请求超时(408)",500:"服务器错误(500)",501:"服务未实现(501)",502:"网络错误(502)",503:"服务不可用(503)",504:"网络超时(504)",505:"HTTP版本不受支持(505)"},c={addRequestCallback:function(e){s.push(e)},removeRequestCallback:function(e){var t=s.indexOf(e);-1!==t&&s.splice(t,1)},addResponseCallback:function(e){i.push(e)},removeResponseCallback:function(e){var t=i.indexOf(e);-1!==t&&i.splice(t,1)},setGlobalError:function(e){a.push(e)},ajaxPost:function(e,t){var o=this;return t=this.callRequest(t),new Promise(function(n,s){r.a.post(e,t).then(function(e){0===o.callResponse(e)?n(t):s(new Error("用户自定义错误"))}).catch(function(e){var t;t=e&&e.response?u[e.response.status]||"未知错误":"网络连接失败",a.forEach(function(e){e.call(o,t)}),s(new Error(t))})})},ajaxGet:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o=this.callRequest(o),new Promise(function(n,s){Object.keys(o).forEach(function(e){o[e]=encodeURIComponent(o[e])});var i={params:o};r.a.get(e,i).then(function(e){0===t.callResponse(e)?n(o):s(new Error("用户自定义错误"))}).catch(function(e){var o;o=e&&e.response?u[e.response.status]||"未知错误":"网络连接失败",a.forEach(function(e){e.call(t,o)}),s(new Error(o))})})},callRequest:function(e){for(var t=s.slice(0);t.length>0;){e=t.shift()(e)}return e},callResponse:function(e){for(var t=i.slice(0),o=0;t.length>0;){o+=t.shift()(e)}return o}};t.default=c}})});
//# sourceMappingURL=main.js.map