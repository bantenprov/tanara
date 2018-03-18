//
// vue
//

import Vue from 'vue';

window.Vue = Vue;

//
// vue-events
//

import VueEvents from 'vue-events';

Vue.use(VueEvents);

//
// axios
//

import axios from 'axios';

window.axios = axios;

//
// lodash
//

import lodash from 'lodash';
import debounce from 'lodash/debounce';

window._ = lodash;

//
// moment
//

import moment from 'moment';

//
// fuse.js
//

import Fuse from 'fuse.js';

window.Fuse = Fuse;

//
// vue-progressbar
//

import VueProgressBar from 'vue-progressbar';

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

//
// vue-form
//

import VueForm from 'vue-form';

Vue.use(VueForm);

//
// vue-form-wizard
//

import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

Vue.use(VueFormWizard);

//
// vue-form-generator
//

import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';

window.VueFormGenerator = VueFormGenerator;

Vue.use(VueFormGenerator);

//
// vform
//

import Form from 'vform';
import { HasError, AlertError, AlertErrors, AlertSuccess } from 'vform';

window.Form = Form;

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.component(AlertErrors.name, AlertErrors);
Vue.component(AlertSuccess.name, AlertSuccess);

//
// vue-select
//

import vSelect from 'vue-select';

window.vSelect = vSelect;

Vue.component('v-select', vSelect);

//
// vuejs-datepicker
//

import Datepicker from 'vuejs-datepicker';

window.Datepicker = Datepicker;

Vue.component('datepicker', Datepicker);

//
// vue-chartjs
//

import VueCharts from 'vue-chartjs';

import ChartjsBarChart from './add-ons/vue-chartjs/BarChart.js';
import ChartjsBarHorizontalChart from './add-ons/vue-chartjs/BarHorizontalChart.js';
import ChartjsBubbleChart from './add-ons/vue-chartjs/BubbleChart.js';
import ChartjsDoughnutChart from './add-ons/vue-chartjs/DoughnutChart.js';
import ChartjsLineChart from './add-ons/vue-chartjs/LineChart.js';
import ChartjsPieChart from './add-ons/vue-chartjs/PieChart.js';
import ChartjsPolarAreaChart from './add-ons/vue-chartjs/PolarAreaChart.js';
import ChartjsRadarChart from './add-ons/vue-chartjs/RadarChart.js';

Vue.component('chartjs-bar', ChartjsBarChart);
Vue.component('chartjs-bar-horizontal', ChartjsBarHorizontalChart);
Vue.component('chartjs-bubble', ChartjsBubbleChart);
Vue.component('chartjs-doughnut', ChartjsDoughnutChart);
Vue.component('chartjs-line', ChartjsLineChart);
Vue.component('chartjs-pie', ChartjsPieChart);
Vue.component('chartjs-polar-area', ChartjsPolarAreaChart);
Vue.component('chartjs-radar', ChartjsRadarChart);

//
// vue-echarts-v3
//

import IEcharts from 'vue-echarts-v3/src/full.js';

Vue.component('IEcharts', IEcharts);

//
// mini-toastr
//

import miniToastr from 'mini-toastr';

window.miniToastr = miniToastr;

miniToastr.init();

//
// vue-sweetalert2
//

import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);

//
// vue-fullscreen
//

import fullscreen from 'vue-fullscreen';

Vue.use(fullscreen);

//
// vue-tables-2
//

import { ServerTable, ClientTable, Event } from 'vue-tables-2';
import VueTablesTemplate from './add-ons/vue-tables/Template.vue';

Vue.use(ServerTable, {}, false);
Vue.use(ClientTable, {}, false);

Vue.component('vue-tables', VueTablesTemplate);

//
// @xkeshi/vue-qrcode
//

import Qrcode from '@xkeshi/vue-qrcode';

Vue.component('qrcode', Qrcode);

//
// vuetable-2
//

import Vuetable from 'vuetable-2/src/components/Vuetable';
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';
import VuetablePaginationDropdown from 'vuetable-2/src/components/VuetablePaginationDropdown';
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';
import VuetableFilterBar from './add-ons/vue-table/FilterBar.vue';

Vue.component("vuetable", Vuetable);
Vue.component("vuetable-pagination", VuetablePagination);
Vue.component("vuetable-pagination-dropdown", VuetablePaginationDropdown);
Vue.component("vuetable-pagination-info", VuetablePaginationInfo);
Vue.component("vuetable-filter-bar", VuetableFilterBar);

//
// vuejs-countdown
//

import Countdown from 'vuejs-countdown'

Vue.component('countdown', Countdown);

//
// vue-backtotop
//

import BackToTop from 'vue-backtotop';

Vue.use(BackToTop);

//
// #
//

import App from './App.vue';
import store from '~/store';
import router from '~/router';
import '~/plugins';
import '~/components';

new Vue({
  store,
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
