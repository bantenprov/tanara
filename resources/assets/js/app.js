import 'bootstrap';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueEvents from 'vue-events';
import axios from 'axios';
import lodash from 'lodash';
import debounce from 'lodash/debounce';
import moment from 'moment';
import Fuse from 'fuse.js';
import TableComponent from 'vue-table-component';
import VueForm from 'vue-form';
import vSelect from 'vue-select';
import Datepicker from 'vuejs-datepicker';
import VueCharts from 'vue-chartjs';
import IEcharts from 'vue-echarts-v3/src/full.js';
import miniToastr from 'mini-toastr';

import ChartjsBarChart from './add-ons/vue-chartjs/BarChart.js';
import ChartjsBarHorizontalChart from './add-ons/vue-chartjs/BarHorizontalChart.js';
import ChartjsBubbleChart from './add-ons/vue-chartjs/BubbleChart.js';
import ChartjsDoughnutChart from './add-ons/vue-chartjs/DoughnutChart.js';
import ChartjsLineChart from './add-ons/vue-chartjs/LineChart.js';
import ChartjsPieChart from './add-ons/vue-chartjs/PieChart.js';
import ChartjsPolarAreaChart from './add-ons/vue-chartjs/PolarAreaChart.js';
import ChartjsRadarChart from './add-ons/vue-chartjs/RadarChart.js';

import { ServerTable, ClientTable, Event } from 'vue-tables-2';
import VueTablesTemplate from './add-ons/vue-tables/Template.vue';

import VueTable from 'vuetable-2/src/components/Vuetable';
import VueTablePagination from 'vuetable-2/src/components/VuetablePagination';
import VueTablePaginationDropdown from 'vuetable-2/src/components/VueTablePaginationDropdown';
import VueTablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';

import routes from './routes';
import './components';


window.Vue = Vue;
window.axios = axios;
window._ = lodash;
window.miniToastr = miniToastr;
window.vSelect = vSelect;
window.Datepicker = Datepicker;

window.axios.defaults.headers.common = {
  // 'X-Requested-With': 'XMLHttpRequest'
};


miniToastr.init();


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
Vue.use(VueEvents);
Vue.use(VueForm);
Vue.use(TableComponent);
Vue.use(ServerTable, {}, false);
Vue.use(ClientTable, {}, false);


Vue.component('v-select', vSelect);
Vue.component('datepicker', Datepicker);
Vue.component('chartjs-bar', ChartjsBarChart);
Vue.component('chartjs-bar-horizontal', ChartjsBarHorizontalChart);
Vue.component('chartjs-bubble', ChartjsBubbleChart);
Vue.component('chartjs-doughnut', ChartjsDoughnutChart);
Vue.component('chartjs-line', ChartjsLineChart);
Vue.component('chartjs-pie', ChartjsPieChart);
Vue.component('chartjs-polar-area', ChartjsPolarAreaChart);
Vue.component('chartjs-radar', ChartjsRadarChart);
Vue.component('IEcharts', IEcharts);
Vue.component('vue-tables', VueTablesTemplate);
Vue.component("vuetable", VueTable);
Vue.component("vuetable-pagination", VueTablePagination);
Vue.component("vuetable-pagination-dropdown", VueTablePaginationDropdown);
Vue.component("vuetable-pagination-info", VueTablePaginationInfo);


new Vue({
  router
}).$mount('#app')
