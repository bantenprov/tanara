<template>
  <div class="card mb-3">

    <div class="card-header">
      <nav-settings></nav-settings>
    </div>

    <div class="card-body">
      <form @submit.prevent="update" @keydown="form.onKeydown($event)">
        <alert-success :form="form" :message="'Your password has been updated!'"/>

        <!-- Password -->
        <div class="form-group">
          <label for="inputNewPassword">New Password</label>
          <input v-model="form.password" type="password" name="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" id="inputNewPassword" autofocus>
          <has-error :form="form" field="password"/>
        </div><!-- /.form-group -->

        <!-- Password Confirmation -->
        <div class="form-group">
          <label for="inputPasswordConfirm">Confirm Password</label>
          <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="form-control":class="{ 'is-invalid': form.errors.has('password_confirmation') }" id="inputPasswordConfirm">
          <has-error :form="form" field="password_confirmation"/>
        </div><!-- /.form-group -->

        <!-- Submit -->
        <button :disabled="form.busy" type="submit" class="btn btn-primary">Update</button>

      </form>
    </div><!-- /.card-body -->
  </div><!-- /.card -->
</template>

<script>
import NavSettings from './navs';

export default {
  components: {
    'nav-settings': NavSettings
  },

  data: () => ({
    form: new Form({
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    async update () {
      await this.form.patch('/api/settings/password')

      this.form.reset()
    }
  }
}
</script>
