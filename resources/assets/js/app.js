import App from './App.vue';

import 'bootstrap';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueEvents from 'vue-events';
import axios from 'axios';
import lodash from 'lodash';
import debounce from 'lodash/debounce';
import moment from 'moment';
import Fuse from 'fuse.js';
import VueProgressBar from 'vue-progressbar';
import VueForm from 'vue-form';
import vSelect from 'vue-select';
import Datepicker from 'vuejs-datepicker';
import VueCharts from 'vue-chartjs';
import IEcharts from 'vue-echarts-v3/src/full.js';
import miniToastr from 'mini-toastr';
import VueSweetalert2 from 'vue-sweetalert2';
import fullscreen from 'vue-fullscreen';

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

import Vuetable from 'vuetable-2/src/components/Vuetable';
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';
import VuetablePaginationDropdown from 'vuetable-2/src/components/VuetablePaginationDropdown';
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';
import VuetableFilterBar from './add-ons/vue-table/FilterBar.vue';

import routes from './routes';
import './components';


window.Vue = Vue;
window.axios = axios;
window._ = lodash;
window.Fuse = Fuse;
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
Vue.use(ServerTable, {}, false);
Vue.use(ClientTable, {}, false);
Vue.use(VueSweetalert2);
Vue.use(fullscreen);

Vue.use(VueProgressBar, {
  color: '#77b6ff',
  failedColor: '#bd2130',
  thickness: '4px',
  transition: {
    speed: '0.2s',
    opacity: '0.2s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
})


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
Vue.component("vuetable", Vuetable);
Vue.component("vuetable-pagination", VuetablePagination);
Vue.component("vuetable-pagination-dropdown", VuetablePaginationDropdown);
Vue.component("vuetable-pagination-info", VuetablePaginationInfo);
Vue.component("vuetable-filter-bar", VuetableFilterBar);


new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
