<template>
  <div>
    <router-view name="navbar"></router-view>
    <div class="row no-gutters">
      <div class="col-md-4 col-lg-3 dashboard-sidebar">
        <router-view name="sidebar"></router-view>
      </div><!-- /col -->
      <div class="col-md-8 col-lg-9 dashboard-main">
        <router-view name="main"></router-view>
      </div><!-- /col -->
    </div><!-- /.row -->
  </div>
</template>
