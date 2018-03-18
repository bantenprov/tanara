<template>
  <div class="form-auth-wrap d-flex align-items-center justify-content-center">
    <form class="form-auth form-auth-sm" @submit.prevent="reset" @keydown="form.onKeydown($event)">

      <!-- Header -->
      <h2 class="form-auth-header">Reset Password</h2>

      <alert-success :form="form" :message="status"/>

      <!-- Email -->
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-envelope" aria-hidden="true"></i></div>
          </div>
          <input v-model="form.email" type="email" name="email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" id="inputEmail" readonly>
          <has-error :form="form" field="email"/>
        </div>
      </div><!-- /.form-group -->

      <!-- Password -->
      <div class="form-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-key" aria-hidden="true"></i></div>
          </div>
          <input v-model="form.password" type="password" name="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" id="inputPassword" placeholder="Password">
          <has-error :form="form" field="password"/>
        </div>
      </div><!-- /.form-group -->

      <!-- Password Confirmation -->
      <div class="form-group">
        <label for="inputPasswordConfirm" class="sr-only">Confirm Password</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-key" aria-hidden="true"></i></div>
          </div>
          <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="form-control" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" id="inputPasswordConfirm" placeholder="Confirm Password">
          <has-error :form="form" field="password_confirmation"/>
        </div>
      </div>

      <!-- Submit -->
      <button :disabled="form.busy" type="submit" class="btn btn-primary btn-block text-capitalize">Reset Password</button>

      <!-- Footer -->
      <div class="form-auth-footer d-flex flex-wrap flex-column">
        <div class="btn-group">
          <router-link class="btn btn-light w-100 text-capitalize" :to="{ name: 'login' }" exact>
            Log In
          </router-link>
          <router-link class="btn btn-light w-100 text-capitalize" :to="{ name: 'register' }" exact>
            Register
          </router-link>
          <router-link class="btn btn-light w-100 text-capitalize" :to="{ name: 'home' }" exact>
            Back to home
          </router-link>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    status: '',
    form: new Form({
      token: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  created () {
    this.form.email = this.$route.query.email
    this.form.token = this.$route.params.token
  },

  methods: {
    async reset () {
      const { data } = await this.form.post('/api/password/reset')

      this.status = data.status

      this.form.reset()
    }
  }
}
</script>
