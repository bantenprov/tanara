import Vue from 'vue';
import axios from 'axios';
import loadash from 'lodash';

window.Vue = Vue;
window.axios = axios;
window._ = loadash;

window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};
