<template>
  <div>

    <div class="row">
      <div class="col-md-4 mb-3">
        <a href="#" class="card card-media text-white bg-primary">
          <div class="card-body">
            <div class="media">
              <i class="fa fa-user fa-card-media-avatar mr-3" aria-hidden="true"></i>
              <div class="media-body text-truncate">
                <h5 class="mt-0">Users</h5>
                <span><i class="fa fa-dot-circle-o" aria-hidden="true"></i> 1500</span>
              </div>
            </div>
          </div><!-- /.card-body -->
        </a><!-- /.card -->
      </div><!-- /col -->
      <div class="col-md-4 mb-3">
        <a href="#" class="card card-media text-white bg-success">
          <div class="card-body">
            <div class="media">
              <i class="fa fa-comments fa-card-media-avatar mr-3" aria-hidden="true"></i>
              <div class="media-body text-truncate">
                <h5 class="mt-0">Comments</h5>
                <span><i class="fa fa-dot-circle-o" aria-hidden="true"></i> 500</span>
              </div>
            </div>
          </div><!-- /.card-body -->
        </a><!-- /.card -->
      </div><!-- /col -->
      <div class="col-md-4 mb-3">
        <a href="#" class="card card-media text-white bg-warning">
          <div class="card-body">
            <div class="media">
              <i class="fa fa-calendar fa-card-media-avatar mr-3" aria-hidden="true"></i>
              <div class="media-body text-truncate">
                <h5 class="mt-0">Agenda</h5>
                <span><i class="fa fa-dot-circle-o" aria-hidden="true"></i> 30</span>
              </div>
            </div>
          </div><!-- /.card-body -->
        </a><!-- /.card -->
      </div><!-- /col -->
    </div><!-- /.row -->

    <!-- ===================================================================== -->

    <div class="row">
      <div class="col-md-8">

        <div class="card mb-3">
          <div class="card-header">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            Data
          </div>
          <div class="card-body">
            <example-echarts-bar-ajax-interactive></example-echarts-bar-ajax-interactive>
          </div><!-- /.card-body -->
        </div><!-- /.card -->

        <div class="card mb-3">
          <div class="card-header">
            <i class="fa fa-thumb-tack" aria-hidden="true"></i>
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div><!-- /.card -->

        <div class="card mb-3">
          <div class="card-header">
            <i class="fa fa-table" aria-hidden="true"></i>
            Table
          </div>
          <div class="card-body">
            <table class="table mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Muhammad Ibnu Musa Al-Khawarizmi</td>
                  <td>780–850</td>
                </tr>
                <tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Abu Ali Al-Husein Ibnu Sina</td>
                  <td>986-1037</td>
                </tr>
                  <th scope="row">3</th>
                  <td>Abu Nasir Al-Farabi</td>
                  <td>870-900</td>
                </tr>
              </tbody>
            </table>
          </div><!-- /.card-body -->
        </div><!-- /.card -->

      </div><!-- /col -->
      <div class="col-md-4">

        <div class="card mb-3">
          <div class="card-header">
            <i class="fa fa-pie-chart" aria-hidden="true"></i>
            Data
          </div>
          <div class="card-body">
            <example-chartjs-pie></example-chartjs-pie>
          </div><!-- /.card-body -->
        </div><!-- /.card -->

        <div class="card mb-3">
          <div class="card-header">
            <i class="fa fa-thumb-tack" aria-hidden="true"></i>
            Featured
          </div>
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              Cras justo odio
              <span class="badge badge-primary badge-pill">2</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <span class="badge badge-primary badge-pill">3</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span class="badge badge-primary badge-pill">5</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              Porta ac consectetur ac
              <span class="badge badge-primary badge-pill">7</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              Vestibulum at eros
              <span class="badge badge-primary badge-pill">11</span>
            </a>
          </div><!-- /.list-group -->
        </div><!-- /.card -->

        <div class="card text-white bg-info mb-3">
          <div class="card-header">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            Header
          </div>
          <div class="card-body">
            <h5 class="card-title">Info card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div><!-- /.card-body -->
        </div><!-- /.card -->

      </div><!-- /col -->
    </div><!-- /.row -->

  </div>
</template>
