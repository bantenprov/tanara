<template>
  <div style="width: 100%; height: 400px;">
    <IEcharts :option="pie" :resizable="true"></IEcharts>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pie: {
        title: {
          show: true,
          text: 'ECharts',
          x: 'center',
          textStyle: {
            fontSize: 16,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#fff'
          }
        },
        tooltip: {
          show: true
        },
        toolbox: {
          show : true,
          orient : 'horizontal',
          bottom: 0,
          x: 'center',
          feature : {
            dataView: {
              show: true,
              lang: ['Data view', 'Cancel', ''],
              readOnly: true,
              backgroundColor: 'rgba(0,0,0,.65)',
              textareaColor: 'rgba(0,0,0,.5)',
              textareaBorderColor: 'rgba(0,0,0,.5)',
              textColor: '#fff',
              buttonColor: '#ddd',
              buttonTextColor: '#333'
            },
            saveAsImage: {
              show: true,
              backgroundColor: 'transparent',
              excludeComponents: ['toolbox', 'visualMap']
            }
          },
          iconStyle: {
            borderWidth: 1,
            borderType: 'solid',
            borderColor: '#fff'
          }
        },
        visualMap: {
          show: true,
          type: 'continuous',
          orient: 'vertical',
          right: 0,
          y: 'center',
          min: 200,
          max: 400,
          text: ['High', 'Low'],
          calculable : false,
          inRange: {
            color: ['#F0F4C3', '#DCE775', '#CDDC39'],
          },
          textStyle: {
            color: '#fff'
          }
        },
        series: [{
          type:'pie',
          data:[
            {value:335, name:'Tangerang'},
            {value:310, name:'Lebak'},
            {value:274, name:'Pandeglang'},
            {value:235, name:'Serang'},
            {value:400, name:'Cilegon'}
          ].sort(function (a, b) { return a.value - b.value; }),
          radius: '55%',
          roseType: 'radius', // false, 'area' or 'radius'
          cursor: 'default',
          itemStyle: {
            color: '#CDDC39'
          },
          label: {
            show: true,
            fontSize: 8,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#fff'
          },
          labelLine: {
            show: true,
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid',
              color: '#fff'
            }
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }]
      }
    }
  }
}
</script>
