import { api } from '../plugins/request'

// 登录
export async function login(params) {
  return api.post('/users/login', params)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}

// 注册
export async function register(params) {
  return api.post('/users', params)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}
// 获取用户信息
export async function geteUser() {
  return api.get('/user')
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}
// 更新用户信息
export async function updateUser(params) {
  return api.put('/user', params)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}