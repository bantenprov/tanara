<template>
  <div>
    <dashboard-navbar></dashboard-navbar>
    <div class="row no-gutters">
      <div class="col-md-4 col-lg-3 dashboard-sidebar">
        <dashboard-sidebar></dashboard-sidebar>
      </div><!-- /col -->
      <div class="col-md-8 col-lg-9 dashboard-main">
        <router-view></router-view>
      </div><!-- /col -->
    </div><!-- /.row -->
  </div>
</template>
