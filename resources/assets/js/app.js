// import 'bootstrap';
//
// (function ($) {
//   'use strict';
//
//   $(function () {
//
//     //== Initialize Bootstrap tooltip with `data-toggle="tooltip"`.
//
//     $('[data-toggle="tooltip"]').tooltip();
//
//     //== Initialize Bootstrap popover with `data-toggle="popover"`.
//
//     $('[data-toggle="popover"]').popover();
//
//   });
//
// }(jQuery));

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.axios = require('axios');
import Vue from 'vue';
import routes from './routes.js';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 Vue.component('example', require('./components/Example.vue'));

/**
 * Vue Router
 *
 * @link http://router.vuejs.org/en/installation.html
 */
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

// define routes for users
// const routes = [
// 	{
// 		path: '/',
// 		name: 'homepage',
// 		component: require('./components/Example.vue')
// 	}
// ]

// const router = new VueRouter({ routes });

const app = new Vue({
  router
}).$mount('#app');
