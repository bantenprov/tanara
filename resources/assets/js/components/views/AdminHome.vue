<template>
  <div>
    <admin-navbar></admin-navbar>
    <div class="row no-gutters">
      <div class="col-md-4 col-lg-3 admin-sidebar">
        <admin-sidebar></admin-sidebar>
      </div><!-- /col -->
      <div class="col-md-8 col-lg-9 admin-main">
        <div class="admin-main-content">
          <!-- ===================================================================== -->
          <div class="row">
            <div class="col-sm-4 mb-3">
              <div class="card card-media text-white bg-primary">
                <div class="card-body">
                  <div class="media">
                    <i class="fa fa-user fa-card-media-avatar mr-3" aria-hidden="true"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Users</h5>
                      <span><i class="fa fa-dot-circle-o" aria-hidden="true"></i> 1500</span>
                    </div>
                  </div>
                </div><!-- /.card-body -->
              </div><!-- /.card -->
            </div><!-- /col -->
            <div class="col-sm-4 mb-3">
              <div class="card card-media text-white bg-success">
                <div class="card-body">
                  <div class="media">
                    <i class="fa fa-comments fa-card-media-avatar mr-3" aria-hidden="true"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Comments</h5>
                      <span><i class="fa fa-dot-circle-o" aria-hidden="true"></i> 500</span>
                    </div>
                  </div>
                </div><!-- /.card-body -->
              </div><!-- /.card -->
            </div><!-- /col -->
            <div class="col-sm-4 mb-3">
              <div class="card card-media text-white bg-info">
                <div class="card-body">
                  <div class="media">
                    <i class="fa fa-calendar fa-card-media-avatar mr-3" aria-hidden="true"></i>
                    <div class="media-body">
                      <h5 class="mt-0">Agenda</h5>
                      <span><i class="fa fa-dot-circle-o" aria-hidden="true"></i> 30</span>
                    </div>
                  </div>
                </div><!-- /.card-body -->
              </div><!-- /.card -->
            </div><!-- /col -->
          </div><!-- /.row -->
          <!-- ===================================================================== -->
          <div class="card mb-3">
            <div class="card-header">Line chart</div>
            <div class="card-body">
              <example-line-chart></example-line-chart>
            </div><!-- /.card-body -->
          </div><!-- /.card -->
          <!-- ===================================================================== -->
          <div class="card mb-3">
            <div class="card-header">Bar chart</div>
            <div class="card-body">
              <example-bar-chart></example-bar-chart>
            </div><!-- /.card-body -->
          </div><!-- /.card -->
          <!-- ===================================================================== -->
          <div class="card mb-3">
            <div class="card-header">Horizontalbar chart</div>
            <div class="card-body">
              <example-horizontalbar-chart></example-horizontalbar-chart>
            </div><!-- /.card-body -->
          </div><!-- /.card -->
          <!-- ===================================================================== -->
          <div class="row">
            <div class="col-sm-6">
              <div class="card mb-3">
                <div class="card-header">Doughnut chart</div>
                <div class="card-body">
                  <example-doughnut-chart></example-doughnut-chart>
                </div><!-- /.card-body -->
              </div><!-- /.card -->
            </div><!-- /col -->
            <div class="col-sm-6">
              <div class="card mb-3">
                <div class="card-header">Pie chart</div>
                <div class="card-body">
                  <example-pie-chart></example-pie-chart>
                </div><!-- /.card-body -->
              </div><!-- /.card -->
            </div><!-- /col -->
          </div>
          <!-- ===================================================================== -->
          <div class="row">
            <div class="col-sm-6">
              <div class="card mb-3">
                <div class="card-header">Radar chart</div>
                <div class="card-body">
                  <example-radar-chart></example-radar-chart>
                </div><!-- /.card-body -->
              </div><!-- /.card -->
            </div><!-- /col -->
            <div class="col-sm-6">
              <div class="card mb-3">
                <div class="card-header">Polararea chart</div>
                <div class="card-body">
                  <example-polararea-chart></example-polararea-chart>
                </div><!-- /.card-body -->
              </div><!-- /.card -->
            </div><!-- /col -->
          </div>
          <!-- ===================================================================== -->
          <div class="card mb-3">
            <div class="card-header">Bubble chart</div>
            <div class="card-body">
              <example-bubble-chart></example-bubble-chart>
            </div><!-- /.card-body -->
          </div><!-- /.card -->
          <!-- ===================================================================== -->
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
          <!-- ===================================================================== -->
          <div class="card mb-3">
            <div class="card-header">Form</div>
            <div class="card-body">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Address 2</label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>Option 1</option>
                    </select>
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip">
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox"> Check me out
                    </label>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
              </form>
            </div><!-- /.card-body -->
          </div><!-- /.card -->
          <!-- ===================================================================== -->
          <div class="card mb-3">
            <div class="card-header">Table</div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div><!-- /.card-body -->
          </div><!-- /.card -->
          <!-- ===================================================================== -->
          <div class="card mb-3">
            <div class="card-header">Vue table component</div>
            <div class="card-body">
              <example-vue-table></example-vue-table>
            </div><!-- /.card-body -->
          </div><!-- /.card -->
          <!-- ===================================================================== -->
        </div>
      </div><!-- /col -->
    </div><!-- /.row -->
  </div>
</template>
