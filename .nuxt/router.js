import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7a8f6483 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _0971e078 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _096ec941 = () => interopDefault(import('..\\pages\\auth' /* webpackChunkName: "" */))
const _927b9988 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _18004956 = () => interopDefault(import('..\\pages\\articles' /* webpackChunkName: "" */))
const _71316920 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _6ec08ac6 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _7a8f6483,
    children: [{
      path: "",
      component: _0971e078,
      name: "home"
    }, {
      path: "login",
      component: _096ec941,
      name: "login"
    }, {
      path: "register",
      component: _096ec941,
      name: "register"
    }, {
      path: "settings",
      component: _927b9988,
      name: "settings"
    }, {
      path: "articles/:id",
      component: _18004956,
      name: "articles"
    }, {
      path: "profile",
      component: _71316920,
      name: "profile"
    }, {
      path: "editor",
      component: _6ec08ac6,
      name: "editor"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
