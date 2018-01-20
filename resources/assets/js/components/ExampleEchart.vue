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
        data: ['data 1', 'data 2', 'data 3', 'data 4', 'data 5']
      },
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'bar',
        data: []
      }]
    }
  }),
  mounted() {


    var datas = [20, 33, 55, 10, 41];



    for(var i = 0; i < datas.length; i++){

      this.bar.series[0].data[i] = datas[i] * Math.floor(Math.random() * 20) + 10;
      

    }
  }
};
</script>

<style>
  .echarts {
    width: 100%;
    height: 400px;
  }
</style>
