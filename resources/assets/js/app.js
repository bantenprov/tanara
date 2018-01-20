import 'bootstrap';

import Vue from 'vue';
import axios from 'axios';
import lodash from 'lodash';
import VueRouter from 'vue-router';
import TableComponent from 'vue-table-component';
import VueCharts from 'vue-chartjs';

import routes from './routes';
import './components';


window.Vue = Vue;
window.axios = axios;
window._ = lodash;

window.axios.defaults.headers.common = {
  // 'X-Requested-With': 'XMLHttpRequest'

};


const router = new VueRouter({
  routes,
  linkActiveClass: "active"
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

router.afterEach((to, from) => {
  // ...
})


Vue.use(VueRouter);
Vue.use(TableComponent);


new Vue({
  router
}).$mount('#app')
