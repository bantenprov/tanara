import loadash from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import 'bootstrap';

window.Vue = Vue;
Vue.use(VueRouter);
window._ = loadash;
window.axios = axios;

window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};
