import axios from 'axios'
// import qs from 'qs';

axios.defaults.validateStatus = (status) => {
  if (status === 403) { // 无权限访问资源
    return false
  } else if (status === 401) { // 用户未登录或者登录已超时
    return false
  } else if (status === 404) {
    return false
  } else {
    return true
  }
}

const TIME_OUT = 50000

const MipBasePrefix = `http://localhost:8001`

const BaseAxiosOptions = {
  // withCredentials: true,
  timeout: TIME_OUT,
  headers: { 'content-type': 'application/json' }
}

// mip模块相关接口
const MipBaseUrl = `${MipBasePrefix}`
const mipAxios = axios.create(Object.assign({}, { baseURL: MipBaseUrl }, BaseAxiosOptions))
export const mipModuleApi = makeFetch(mipAxios)

function makeFetch (moduleAxios) {
  return {
    get (url, params) {
      return moduleAxios.get(url, { params: params }).then(res => res.data)
    },
    post (url, params) {
      return moduleAxios.post(url, params).then(res => res.data)
    }
  }
}
