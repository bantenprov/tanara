import { PolarArea } from 'vue-chartjs';

export default {
  extends: PolarArea,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
