<template>
  <div class="form-auth-wrap d-flex align-items-center justify-content-center">
    <form class="form-auth form-auth-md" @submit.prevent="register" @keydown="form.onKeydown($event)">

      <!-- Header -->
      <h2 class="form-auth-header">Register</h2>

      <!-- Name -->
      <div class="form-group">
        <label for="inputName" class="sr-only">Name</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-user-circle" aria-hidden="true"></i></div>
          </div>
          <input v-model="form.name" type="text" name="name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" id="inputName" placeholder="Name" autofocus>
          <has-error :form="form" field="name"/>
        </div>
      </div><!-- /.form-group -->

      <!-- Email -->
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fa fa-envelope" aria-hidden="true"></i></div>
          </div>
          <input v-model="form.email" type="email" name="email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" id="inputEmail" placeholder="Email">
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
      </div><!-- /.form-group -->

      <!-- Submit -->
      <button :disabled="form.busy" type="submit" class="btn btn-primary btn-block text-capitalize">Register</button>

      <!-- Footer -->
      <div class="form-auth-footer d-flex flex-wrap flex-column">
        <div class="btn-group">
          <router-link class="btn btn-light w-100 text-capitalize" :to="{ name: 'login' }" exact>
            Log In
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
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Log in the user.
      const { data: { token }} = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('saveToken', { token })

      // Update the user.
      await this.$store.dispatch('updateUser', { user: data })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
