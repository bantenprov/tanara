<template>
  <div class="form-auth-wrap">
    <form class="form-auth form-auth-sm" @submit.prevent="login" @keydown="form.onKeydown($event)">

      <!-- Header -->
      <h2 class="form-auth-header">Log In</h2>

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

      <!-- Remember Me -->
      <div class="form-check pl-0 mb-3">
        <checkbox v-model="remember" name="remember">
          Remember Me
        </checkbox>
      </div>

      <!-- Submit -->
      <button :disabled="form.busy" type="submit" class="btn btn-primary btn-block text-capitalize mb-2">Log In</button>
      <div class="text-center">
        <router-link :to="{ name: 'password.request' }" class="small">
          Forgot Your Password?
        </router-link>
      </div>

      <!-- Footer -->
      <div class="form-auth-footer d-flex flex-wrap flex-column">
        <div class="btn-group">
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
import Checkbox from './checkbox'

export default {
  components: {
    'checkbox': Checkbox
  },

  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('fetchUser')

      // Redirect home.
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>
