<template>
  <div class="card mb-3">

    <div class="card-header">
      <nav-settings></nav-settings>
    </div>

    <div class="card-body">
      <form @submit.prevent="update" @keydown="form.onKeydown($event)">
        <alert-success :form="form" :message="'Your profile has been updated!'"/>

        <!-- Name -->
        <div class="form-group">
          <label for="inputName">Name</label>
          <input v-model="form.name" type="text" name="name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" id="inputName" autofocus>
          <has-error :form="form" field="name"/>
        </div><!-- /.form-group -->

        <!-- Email -->
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input v-model="form.email" type="email" name="email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" id="inputEmail">
          <has-error :form="form" field="email"/>
        </div><!-- /.form-group -->

        <!-- Submit -->
        <button :disabled="form.busy" type="submit" class="btn btn-primary">Update</button>

      </form>
    </div><!-- /.card-body -->
  </div><!-- /.card -->
</template>

<script>
import { mapGetters } from 'vuex'
import NavSettings from './settings-nav'

export default {
  components: {
    'nav-settings': NavSettings
  },

  data: () => ({
    form: new Form({
      name: '',
      email: ''
    })
  }),

  computed: mapGetters({
    user: 'authUser',
    authenticated: 'authCheck'
  }),

  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },

  methods: {
    async update () {
      const { data } = await this.form.patch('/api/settings/profile')

      this.$store.dispatch('updateUser', { user: data })
    }
  }
}
</script>
