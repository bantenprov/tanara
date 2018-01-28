<template>
  <div style="width: 100%; height: 400px;">
    <IEcharts :option="bar" :loading="loading"></IEcharts>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      bar: {
        title: {
          text: '',
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
    axios.get('/json/echarts-bar-data-interactive.json').then(response => {
      var e = response.data;
      var get = e[0].chartdata.tahun[0];

      let i = 0;

      this.bar.title.text = get[Object.keys(get)[0]][0].title;
      this.bar.series[0].data = get[Object.keys(get)[0]][0].data;

      setInterval(() => {
        this.loading = true;
        i++;
        setTimeout(() => {
          this.bar.title.text = get[Object.keys(get)[i]][0].title;
          this.bar.series[0].data = get[Object.keys(get)[i]][0].data;
          this.loading = false;
        }, 10);

        if(i ==  Object.keys(get).length) {
          i = 0;
        }
      }, 3000);
    })
    .catch(function(error) {
      // error
    });
  }
}
</script>
