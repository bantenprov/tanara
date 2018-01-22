<template>
  <div>

    <div class="alert alert-info mb-5" role="alert">
      <ul class="list-unstyled mb-0">
        <li>Package name: <code>vue-echarts-v3</code></li>
        <li>Link: <a class="alert-link" href="https://github.com/xlsdg/vue-echarts-v3" target="_blank">GitHub</a></li>
      </ul>
    </div>

    <div class="card mb-3">
      <div class="card-header">ECharts bar</div>
      <div class="card-body">
        <example-echarts-bar></example-echarts-bar>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="card mb-3">
      <div class="card-header">ECharts bar + Ajax</div>
      <div class="card-body">
        <example-echarts-bar-ajax></example-echarts-bar-ajax>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="card mb-3">
      <div class="card-header">ECharts bar + Ajax (Interactive)</div>
      <div class="card-body">
        <example-echarts-bar-ajax-interactive></example-echarts-bar-ajax-interactive>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="card text-white bg-dark mb-3">
      <div class="card-header">ECharts pie</div>
      <div class="card-body bg-dark">
        <example-echarts-pie></example-echarts-pie>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

  </div>
</template>
