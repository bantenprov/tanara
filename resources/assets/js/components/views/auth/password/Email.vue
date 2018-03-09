<template>
  <div class="form-auth-wrap">
    <form class="form-auth form-auth-sm" @submit.prevent="send" @keydown="form.onKeydown($event)">

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
          <input v-model="form.email" type="email" name="email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" id="inputEmail" placeholder="Email" autofocus>
          <has-error :form="form" field="email"/>
        </div>
      </div><!-- /.form-group -->

      <!-- Submit -->
      <button :disabled="form.busy" type="submit" class="btn btn-primary btn-block text-capitalize">Send Password Reset Link</button>

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
      email: ''
    })
  }),

  methods: {
    async send () {
      const { data } = await this.form.post('/api/password/email')

      this.status = data.status

      this.form.reset()
    }
  }
}
</script>
