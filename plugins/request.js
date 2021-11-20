import axios from 'axios'

let requestInterceptor = false
let responseInterceptor = false
export const api = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com/api',
  timeout: 5000
})
export default function({ store }, inject) {
  if(!requestInterceptor) {
    requestInterceptor = true
    api.interceptors.request.use((config) => {
      config.headers.Authorization = store.state.user && store.state.user.token
      return config
    }, (err) => {
      return Promise.reject(err)
    })
  }
  
  if(!responseInterceptor) {
    responseInterceptor = true
    api.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return Promise.reject(err)
    })
  }
}