import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com/api',
  timeout: 5000
})
export default function({ store }, inject) {
  console.log('plugin loaded');
  api.interceptors.request.use((config) => {
    config.headers.Authorization = store.state.user && store.state.user.token
    return config
  }, (err) => {
    return Promise.reject(err)
  })
  
  api.interceptors.response.use((res) => {
    return res.data
  }, err => {
    return Promise.reject(err)
  })
}