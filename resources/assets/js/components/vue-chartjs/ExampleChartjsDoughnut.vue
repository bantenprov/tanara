<template>

  <chartjs-doughnut :data="datacollection" :options="chartoptions"></chartjs-doughnut>

</template>

<script>
export default {
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
