import Vue from 'vue';

//
// Custom components
//

import AdminNavbar from './components/AdminNavbar.vue';
Vue.component('admin-navbar', AdminNavbar);

import AdminSidebar from './components/AdminSidebar.vue';
Vue.component('admin-sidebar', AdminSidebar);

import ExampleVueTable from './components/ExampleVueTable.vue';
Vue.component('example-vue-table', ExampleVueTable);

import ExampleLineChart from './components/chart/ExampleLineChart';
Vue.component('example-line-chart', ExampleLineChart);

import ExampleBarChart from './components/chart/ExampleBarChart';
Vue.component('example-bar-chart', ExampleBarChart);

import ExampleHorizontalBarChart from './components/chart/ExampleHorizontalBarChart';
Vue.component('example-horizontalbar-chart', ExampleHorizontalBarChart);

import ExampleDoughnutChart from './components/chart/ExampleDoughnutChart';
Vue.component('example-doughnut-chart', ExampleDoughnutChart);

import ExamplePieChart from './components/chart/ExamplePieChart';
Vue.component('example-pie-chart', ExamplePieChart);

import ExampleRadarChart from './components/chart/ExampleRadarChart';
Vue.component('example-radar-chart', ExampleRadarChart);

import ExamplePolarAreaChart from './components/chart/ExamplePolarAreaChart';
Vue.component('example-polararea-chart', ExamplePolarAreaChart);

import ExampleBubbleChart from './components/chart/ExampleBubbleChart';
Vue.component('example-bubble-chart', ExampleBubbleChart);
