<template>

  <chartjs-bar-horizontal :data="datacollection" :options="chartoptions"></chartjs-bar-horizontal>

</template>

<script>
export default {
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
            backgroundColor: 'rgba(63,81,181,.45)',
            borderWidth: 2,
            borderColor: '#3F51B5'
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
