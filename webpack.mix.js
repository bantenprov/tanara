const path = require('path')
const mix = require('laravel-mix')

mix.config.vue.esModule = true

mix
  .js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')

  .sourceMaps()

if (mix.inProduction()) {
  mix.version()

  mix.extract([
    '@xkeshi/vue-qrcode',
    'animate.css',
    'axios',
    'bootstrap',
    'chart.js',
    'echarts',
    'jquery',
    'js-cookie',
    'mini-toastr',
    'popper.js',
    'sweetalert2',
    'vform',
    'vue',
    'vue-backtotop',
    'vue-chartjs',
    'vue-echarts-lite',
    'vue-echarts-v3',
    'vue-events',
    'vue-form',
    'vue-form-generator',
    'vue-form-wizard',
    'vue-fullscreen',
    'vue-progressbar',
    'vue-router',
    'vue-select',
    'vue-sweetalert2',
    'vue-tables-2',
    'vuejs-countdown',
    'vuejs-datepicker',
    'vuetable-2',
    'vuex',
    'vuex-router-sync'
  ])
}

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/assets/js')
    }
  },
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: mix.config.hmr ? '//localhost:8080' : '/'
  }
})
