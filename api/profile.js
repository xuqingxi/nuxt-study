import { api } from '../plugins/request'

// 获取用户信息
export async function getProfile(username) {
  return api.get(`/profiles/${username}`)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}

// 关注用户
export async function followUser() {
  return api.post(`/profiles/${username}/follow`)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}
// 取消关注
export async function unfollowUser() {
  return api.delete(`/profiles/${username}/follow`)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}
