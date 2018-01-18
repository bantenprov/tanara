<template>
  <pie-chart
    :data="datacollection"
    :options="chartoptions">
  </pie-chart>
</template>

<script>
import PieChart from './js/PieChart.js';

export default {
  components: {
    'pie-chart': PieChart
  },
  data () {
    return {
      datacollection: {
        labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: [40, 20, 80, 10]
          }
        ]
      },
      chartoptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
