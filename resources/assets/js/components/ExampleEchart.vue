<template>
  <div class="echarts">
    <IEcharts :option="bar"></IEcharts>
  </div>
</template>

<script type="text/babel">
import IEcharts from 'vue-echarts-v3/src/full.js';

export default {
  components: {
    IEcharts
  },
  data: () => ({
    loading: false,
    bar: {
      title: {
        text: 'ECharts Hello World'
      },
      tooltip: {},
      xAxis: {
        data: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6']
      },
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'bar',
        data: [15, 25, 40, 50, 60, 50]
      }]
    }
  })
};
</script>

<style>
  .echarts {
    width: 100%;
    height: 400px;
  }
</style>
