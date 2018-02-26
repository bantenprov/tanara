<template>
  <div>

    <div class="alert alert-info mb-5" role="alert">
      <ul class="list-unstyled mb-0">
        <li>Package name: <code>vue-echarts-v3</code></li>
        <li>Link: <a class="alert-link" href="https://github.com/xlsdg/vue-echarts-v3" target="_blank">GitHub</a></li>
      </ul>
    </div>

    <div class="card text-dark bg-light mb-3">
      <div class="card-header">ECharts line (light)</div>
      <div class="card-body">
        <example-echarts-line-light></example-echarts-line-light>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="card text-white bg-dark mb-3">
      <div class="card-header">ECharts line (dark)</div>
      <div class="card-body">
        <example-echarts-line-dark></example-echarts-line-dark>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="card text-dark bg-light mb-3">
      <div class="card-header">ECharts bar (light)</div>
      <div class="card-body">
        <example-echarts-bar-light></example-echarts-bar-light>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="card text-white bg-dark mb-3">
      <div class="card-header">ECharts bar (dark)</div>
      <div class="card-body">
        <example-echarts-bar-dark></example-echarts-bar-dark>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="row">
      <div class="col-lg-6 mb-3">
        <div class="card text-dark bg-light h-100">
          <div class="card-header">ECharts pie (light)</div>
          <div class="card-body">
            <example-echarts-pie-light></example-echarts-pie-light>
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </div><!-- /col -->
      <div class="col-lg-6 mb-3">
        <div class="card text-white bg-dark h-100">
          <div class="card-header">ECharts pie (dark, roseType)</div>
          <div class="card-body">
            <example-echarts-pie-dark></example-echarts-pie-dark>
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </div><!-- /col -->
    </div><!-- /.row -->

    <h2 class="text-muted text-center mt-5 mb-3">AJAX</h2>

    <div class="card mb-3">
      <div class="card-header">Basic example</div>
      <div class="card-body">
        <example-echarts-bar-ajax></example-echarts-bar-ajax>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="card mb-3">
      <div class="card-header">Interactive</div>
      <div class="card-body">
        <example-echarts-bar-ajax-interactive></example-echarts-bar-ajax-interactive>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

  </div>
</template>
