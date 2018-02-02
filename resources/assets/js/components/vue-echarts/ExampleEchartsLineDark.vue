<template>
  <div style="width: 100%; height: 400px;">
    <IEcharts :option="bar" :loading="loading" :resizable="true"></IEcharts>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      bar: {
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
        xAxis: {
          show: true,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisLabel: {
            show: true,
            fontSize: 8,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#333'
          },
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              type: 'solid',
              color: '#fff'
            }
          },
          axisTick: {
            show: true
          },
          splitArea: {
            show: true
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              type: 'solid',
              color: '#fff'
            }
          }
        },
        yAxis: {
          show: true,
          axisLabel: {
            show: true,
            fontSize: 8,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#fff'
          },
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              type: 'solid',
              color: '#fff'
            }
          },
          axisTick: {
            show: true
          },
          splitArea: {
            show: true
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              type: 'solid',
              color: '#fff'
            }
          }
        },
        series: [{
          type: 'line',
          data: [3, 3, 58, 45, 92, 79, 90, 89, 29, 66, 79, 89],
          cursor: 'default',
          showSymbol: true,
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#CDDC39'
          },
          lineStyle: {
            width: 2,
            type: 'solid',
            color: 'blue'
          },
          markLine: {
            silent: true,
            data: [{
              yAxis: 10
            }, {
              yAxis: 30
            }, {
              yAxis: 50
            }, {
              yAxis: 70
            }, {
              yAxis: 90
            }],
            lineStyle: {
              width: 1,
              type: 'dashed',
              color: '#F44336'
            }
          }
        }],
        label: {
          show: true,
          position: 'top',
          fontSize: 8,
          fontWeight: 'normal',
          fontStyle: 'normal',
          color: '#fff'
        }
      }
    }
  }
}
</script>
