import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _977d1d70 = () => interopDefault(import('..\\pages\\CreateTag.vue' /* webpackChunkName: "pages/CreateTag" */))
const _1bc4fad8 = () => interopDefault(import('..\\pages\\log\\index.vue' /* webpackChunkName: "pages/log/index" */))
const _f2c96e3c = () => interopDefault(import('..\\pages\\LoginPage.vue' /* webpackChunkName: "pages/LoginPage" */))
const _4d5355da = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _143d1704 = () => interopDefault(import('..\\pages\\tag\\index.vue' /* webpackChunkName: "pages/tag/index" */))
const _284632b3 = () => interopDefault(import('..\\pages\\user-management\\index.vue' /* webpackChunkName: "pages/user-management/index" */))
const _7ed8e914 = () => interopDefault(import('..\\pages\\user-management\\CreateUser.vue' /* webpackChunkName: "pages/user-management/CreateUser" */))
const _7199fff3 = () => interopDefault(import('..\\pages\\user-management\\form.vue' /* webpackChunkName: "pages/user-management/form" */))
const _8517f37a = () => interopDefault(import('..\\pages\\user-management\\UpdateUser.vue' /* webpackChunkName: "pages/user-management/UpdateUser" */))
const _1a9319fc = () => interopDefault(import('..\\pages\\log\\_id.vue' /* webpackChunkName: "pages/log/_id" */))
const _3dd1744a = () => interopDefault(import('..\\pages\\user-management\\_id.vue' /* webpackChunkName: "pages/user-management/_id" */))
const _3fe6643c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CreateTag",
    component: _977d1d70,
    name: "CreateTag"
  }, {
    path: "/log",
    component: _1bc4fad8,
    name: "log"
  }, {
    path: "/LoginPage",
    component: _f2c96e3c,
    name: "LoginPage"
  }, {
    path: "/profile",
    component: _4d5355da,
    name: "profile"
  }, {
    path: "/tag",
    component: _143d1704,
    name: "tag"
  }, {
    path: "/user-management",
    component: _284632b3,
    name: "user-management"
  }, {
    path: "/user-management/CreateUser",
    component: _7ed8e914,
    name: "user-management-CreateUser"
  }, {
    path: "/user-management/form",
    component: _7199fff3,
    name: "user-management-form"
  }, {
    path: "/user-management/UpdateUser",
    component: _8517f37a,
    name: "user-management-UpdateUser"
  }, {
    path: "/log/:id",
    component: _1a9319fc,
    name: "log-id"
  }, {
    path: "/user-management/:id?",
    component: _3dd1744a,
    name: "user-management-id"
  }, {
    path: "/",
    component: _3fe6643c,
    name: "index"
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
