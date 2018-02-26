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
            color: '#333'
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
            borderColor: '#333'
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
              color: '#ddd'
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
              color: '#ddd'
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
            color: '#333'
          },
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              type: 'solid',
              color: '#ddd'
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
              color: '#ddd'
            }
          }
        },
        series: [{
          type: 'bar',
          data: [3, 3, 58, 45, 92, 79, 90, 89, 29, 66, 79, 89],
          barWidth: 20,
          barGap: '30%',
          cursor: 'default',
          itemStyle: {
            color: '#CDDC39'
          }
        }],
        label: {
          show: true,
          position: 'top',
          fontSize: 8,
          fontWeight: 'normal',
          fontStyle: 'normal',
          color: '#333'
        }
      }
    }
  }
}
</script>
