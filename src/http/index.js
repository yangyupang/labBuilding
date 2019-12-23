import axios from 'axios'
import qs from 'qs'
import { Loading, Message } from 'element-ui'

let loading = null


// 判断当前环境是生产环境还是开发环?
// process.env.NODE_ENV的值决定当前环?
// production为生产环?development为开发环?
const isProduction = process.env.NODE_ENV === 'production'

// 创建axios配置对象
const service = axios.create()

// 接口基础路径
service.defaults.baseURL = isProduction ? '线上接口路径' : '/api'

// 超时时间
service.defaults.timeout = 10000
    // 请求头类?
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截?
service.interceptors.request.use(config => {
    // loading = Loading.service({
    //     text: '正在加载.....'
    // })
    let token = localStorage.getItem('adminToken')
        // 每次请求 都在请求头带上token
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
}, err => {
    console.log(err)
    return Promise.reject(err)
})

// 响应拦截�?
service.interceptors.response.use(response => {
    if (loading) {
        loading.close()
    }
    return response.data
}, err => {
    // if (err.response.status === 401) {
    //   Message.error(err.response.data.msg)
    // }
})

service.req = function(...params) {
    if (params.length === 1) {
        return service.get(params[0])
    }
    if (params.length === 2) {
        return service.post(params[0], qs.stringify(params[1]))
    }
}

export default service