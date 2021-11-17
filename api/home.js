import { api } from '../plugins/request'

// 获取标签类别
export async function getTags() {
  return api.get('/tags')
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}