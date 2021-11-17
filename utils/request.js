import axios from 'axios'

let api = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com/api',
  timeout: 5000
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjMyMSIsInVzZXJuYW1lIjoiMTIzMjIiLCJiaW8iOm51bGwsImltYWdlIjoiaHR0cHM6Ly9yZWFsd29ybGQtdGVtcC1hcGkuaGVyb2t1YXBwLmNvbS9pbWFnZXMvc21pbGV5LWN5cnVzLmpwZWciLCJpYXQiOjE2MzQyODQzMTEsImV4cCI6MTYzOTQ2ODMxMX0._LxspiplEvMNfPR6QGXzBmsTYvf5E8pbNRqPg9PHX4E'
  return config
}, (err) => {
  return Promise.reject(err)
})

api.interceptors.response.use((res) => {
  return res.data
}, err => {
  return Promise.reject(err)
})

export default api