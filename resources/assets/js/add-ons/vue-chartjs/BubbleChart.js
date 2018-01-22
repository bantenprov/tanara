import { Bubble } from 'vue-chartjs';

export default {
  extends: Bubble,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
