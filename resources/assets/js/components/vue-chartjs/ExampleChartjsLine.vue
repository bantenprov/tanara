<template>

  <chartjs-line :data="datacollection" :options="chartoptions"></chartjs-line>

</template>

<script>
export default {
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            data: [40, 20, 30, 40, 20, 40, 50],
            backgroundColor: 'rgba(63,81,181,.45)',
            borderWidth: 4,
            borderColor: '#3F51B5'
          },
          {
            label: 'Data Two',
            data: [30, 20, 25, 35, 55, 40, 60],
            backgroundColor: 'rgba(255,87,34,.45)',
            borderWidth: 4,
            borderColor: '#FF5722'
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
