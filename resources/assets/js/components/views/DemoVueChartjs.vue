<template>
  <div>

    <div class="alert alert-info mb-5" role="alert">
      <ul class="list-unstyled mb-0">
        <li>Package name: <code>vue-chartjs</code></li>
        <li>Link: <a class="alert-link" href="https://github.com/apertureless/vue-chartjs" target="_blank">GitHub</a></li>
      </ul>
    </div>

    <div class="card text-white bg-dark mb-3">
      <div class="card-header">Line chart</div>
      <div class="card-body">
        <example-chartjs-line></example-chartjs-line>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="card mb-3">
      <div class="card-header">Bar chart</div>
      <div class="card-body">
        <example-chartjs-bar></example-chartjs-bar>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="card mb-3">
      <div class="card-header">Horizontal bar chart</div>
      <div class="card-body">
        <example-chartjs-bar-horizontal></example-chartjs-bar-horizontal>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

    <div class="row">
      <div class="col-sm-6">
        <div class="card text-white bg-success mb-3">
          <div class="card-header">Doughnut chart</div>
          <div class="card-body">
            <example-chartjs-doughnut></example-chartjs-doughnut>
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </div><!-- /col -->
      <div class="col-sm-6">
        <div class="card text-white bg-success mb-3">
          <div class="card-header">Pie chart</div>
          <div class="card-body">
            <example-chartjs-pie></example-chartjs-pie>
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </div><!-- /col -->
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="card text-white bg-warning mb-3">
          <div class="card-header">Radar chart</div>
          <div class="card-body">
            <example-chartjs-radar></example-chartjs-radar>
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </div><!-- /col -->
      <div class="col-sm-6">
        <div class="card text-white bg-warning mb-3">
          <div class="card-header">PolarArea chart</div>
          <div class="card-body">
            <example-chartjs-polar-area></example-chartjs-polar-area>
          </div><!-- /.card-body -->
        </div><!-- /.card -->
      </div><!-- /col -->
    </div>

    <div class="card text-white bg-danger mb-3">
      <div class="card-header">Bubble chart</div>
      <div class="card-body">
        <example-chartjs-bubble></example-chartjs-bubble>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

  </div>
</template>
