<template>
  <div style="width: 100%; height: 400px;">
    <IEcharts :option="bar"></IEcharts>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.js';

export default {
  components: {
    IEcharts
  },
  data: () => ({
    bar: {
      title: {
        text: 'ECharts bar',
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
        data: [3, 3, 58, 45, 92, 79, 90, 89, 29, 66, 79, 89],
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
            offset: 0, color: '#3F51B5' // color at 0% position
        }, {
            offset: 1, color: '#2196F3' // color at 100% position
        }],
        globalCoord: false // false by default
      }
    }
  })
}
</script>
