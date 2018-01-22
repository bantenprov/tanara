import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
