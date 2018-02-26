<template>
  <div class="form-auth-wrap">
    <form class="form-auth form-auth-md">
      <h2 class="form-auth-heading">Sign up</h2>
      <div class="row">
        <div class="col-sm form-group">
          <label for="inputFirstName" class="sr-only">First Name</label>
          <input type="text" id="inputFirstName" class="form-control" placeholder="First Name" autofocus>
        </div><!-- /col -->
        <div class="col-sm form-group">
          <label for="inputLastName" class="sr-only">Last Name</label>
          <input type="text" id="inputLastName" class="form-control" placeholder="Last Name">
        </div><!-- /col -->
      </div><!-- /.row -->
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required>
      </div><!-- /.form-group -->
      <div class="row">
        <div class="col-sm form-group">
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        </div><!-- /col -->
        <div class="col-sm form-group">
          <label for="inputConfirmPassword" class="sr-only">Confirm Password</label>
          <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Confirm Password" required>
        </div><!-- /col -->
      </div><!-- /.row -->
      <button class="btn btn-primary btn-block text-capitalize" type="submit">Sign up</button>
      <p class="text-muted text-center my-2 text-capitalize">Already a member?</p>
      <router-link class="btn btn-success btn-block text-capitalize" :to="{ name: 'sign-in' }">Sign in</router-link>
      <hr>
      <p class="mb-0 text-center">
        <router-link class="btn btn-light text-capitalize" :to="{ name: 'home' }">
          <i class="fa fa-home fa-lg mr-2"></i>
          Kembali ke Beranda
        </router-link>
      </p>
    </form>
  </div>
</template>
