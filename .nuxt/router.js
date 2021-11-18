import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _748768a3 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _184726d0 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _184d553e = () => interopDefault(import('..\\pages\\auth' /* webpackChunkName: "" */))
const _12c9af5c = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _7407c576 = () => interopDefault(import('..\\pages\\articles' /* webpackChunkName: "" */))
const _0c6fcb50 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _68b88ee6 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))

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
    component: _748768a3,
    children: [{
      path: "",
      component: _184726d0,
      name: "home"
    }, {
      path: "login",
      component: _184d553e,
      name: "login"
    }, {
      path: "register",
      component: _184d553e,
      name: "register"
    }, {
      path: "settings",
      component: _12c9af5c,
      name: "settings"
    }, {
      path: "articles/:id",
      component: _7407c576,
      name: "articles"
    }, {
      path: "profile",
      component: _0c6fcb50,
      name: "profile"
    }, {
      path: "editor",
      component: _68b88ee6,
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
