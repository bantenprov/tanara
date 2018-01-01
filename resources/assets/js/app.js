// app.js

import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Example from './components/Example.vue';

const routes = [
  {
      name: 'Example',
      path: '/',
      component: Example
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');

import 'bootstrap';

(function ($) {
  'use strict';

  $(function () {

    //== Initialize Bootstrap tooltip with `data-toggle="tooltip"`.

    $('[data-toggle="tooltip"]').tooltip();

    //== Initialize Bootstrap popover with `data-toggle="popover"`.

    $('[data-toggle="popover"]').popover();

  });

}(jQuery));
