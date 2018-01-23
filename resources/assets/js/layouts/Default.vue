<template>
  <div>
    <router-view name="navbar"></router-view>
    <div class="row no-gutters">
      <div class="site-sidebar col-md-4 col-lg-3">
        <router-view name="sidebar"></router-view>
      </div><!-- /col -->
      <div class="site-main col-md-8 col-lg-9 p-3 p-md-4">
        <router-view name="main"></router-view>
      </div><!-- /col -->
    </div><!-- /.row -->
  </div>
</template>
