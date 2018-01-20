<template>
  <div style="width: 100%; height: 400px;">
    <IEcharts :option="bar" :loading="loading"></IEcharts>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.js';

export default {
  components: {
    IEcharts
  },
  data () {
    return {
      loading: true,
      bar: {
        title: {
          text: 'ECharts bar + Ajax',
          x: 'center'
        },
        tooltip: {
          show: true
        },
        xAxis: {
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {},
        series: [{
          type: 'bar',
          data: [],
          barWidth: 20,
          barGap: '-100%'
        }],
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: '#CDDC39' // color at 0% position
          }, {
              offset: 1, color: '#8BC34A' // color at 100% position
          }],
          globalCoord: false // false by default
        }
      }
    }
  },
  mounted: function () {
    axios.get('/json/echarts-bar-data-simple.json').then(response => {
      this.bar.series[0].data = response.data[0].chartdata;
      this.loading = false;
    })
    .catch(function(error) {
      // error
    });
  }
}
</script>
