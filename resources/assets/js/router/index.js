import Vue from 'vue';
import store from '~/store';
import routes from './routes';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';

Vue.use(Router)


const router = make(
  routes({ authGuard, guestGuard })
)

sync(store, router)

export default router

/**
 * Create a new router instance.
 *
 * @param  {Array} routes
 * @return {Router}
 */
function make (routes) {
  const router = new Router({
    routes,
    linkActiveClass: 'active',
    scrollBehavior
  })

  // Register before guard.
  router.beforeEach(async (to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title;
    }

    if (!store.getters.authCheck && store.getters.authToken) {
      try {
        await store.dispatch('fetchUser')
      } catch (e) { }
    }

    next()
  })

  // Register after hook.
  router.afterEach((to, from) => {
    router.app.$nextTick(() => {
      // ...
    })
  })

  return router
}

/**
 * Redirect to login if guest.
 *
 * @param  {Array} routes
 * @return {Array}
 */
function authGuard (routes) {
  return beforeEnter(routes, (to, from, next) => {
    if (!store.getters.authCheck) {
      next({ name: 'login' })
    } else {
      next()
    }
  })
}

/**
 * Redirect to dashboard if authenticated.
 *
 * @param  {Array} routes
 * @return {Array}
 */
function guestGuard (routes) {
  return beforeEnter(routes, (to, from, next) => {
    if (store.getters.authCheck) {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  })
}

/**
 * Apply beforeEnter guard to the routes.
 *
 * @param  {Array} routes
 * @param  {Function} beforeEnter
 * @return {Array}
 */
function beforeEnter (routes, beforeEnter) {
  return routes.map(route => {
    return { ...route, beforeEnter }
  })
}

/**
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
