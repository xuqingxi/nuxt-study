import { api } from '../plugins/request'
import { objToQueryStr } from '../utils/common'

// 获取关注文章
export async function getFeedArticles(params) {
  params = objToQueryStr(params)
  return api.get(`/articles/feed?${params}`)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}

// 获取所有文章
export async function getGlobalArticles(params) {
  params = objToQueryStr(params)
  return api.get(`/articles?${params}`)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}

// 生成文章
export async function createArticle(params) {
  return api.post(`/articles`, params)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}

// 获取文章
export async function getArticle(slug) {
  return api.get(`/articles/${slug}`)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}

// 更新文章
export async function updateArticle(slug, params) {
  return api.update(`/articles/${slug}`, params)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}

// 删除文章
export async function deleteArticle(slug) {
  return api.delete(`/articles/${slug}`)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}

// 获取文章评论
export async function getArticleComments(slug) {
  return api.get(`/articles/${slug}/comments`)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}

// 生成文章评论
export async function createArticleComment(slug, params) {
  return api.post(`/articles/${slug}/comments`, params)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}

// 删除文章评论
export async function deleteArticleComment(slug, id) {
  return api.delete(`/articles/${slug}/comments/${id}`)
            .then(data => {
              return [null, data]
            })
            .catch(err => {
              return [err]
            })
}