<template>
  <div>

    <div class="alert alert-info mb-5" role="alert">
      <ul class="list-unstyled mb-0">
        <li>Package name: <code>vue-form</code></li>
        <li>Link: <a class="alert-link" href="https://github.com/fergaldoyle/vue-form" target="_blank">GitHub</a></li>
      </ul>
    </div>

    <vue-form :state="formstate" @submit.prevent="onSubmit" class="mb-3">
      <div class="form-row">
        <div class="col-sm mb-2">
          <validate tag="div">
            <input class="form-control" v-model="model.name" required name="name" placeholder="Name">

            <field-messages name="name">
              <small class="form-text text-success">Looks good!</small>
              <small class="form-text text-danger" slot="required">Name is a required field</small>
            </field-messages>
          </validate>
        </div>

        <div class="col-sm mb-2">
          <validate tag="div">
            <input class="form-control" v-model="model.email" name="email" type="email" required placeholder="Email">

            <field-messages name="email">
              <small class="form-text text-success">Looks good!</small>
              <small class="form-text text-danger" slot="required">Email is a required field</small>
              <small class="form-text text-danger" slot="email">Email is not valid</small>
            </field-messages>
          </validate>
        </div>

        <div class="col-auto mb-2">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </div>
    </vue-form>

    <div class="card text-dark bg-light">
      <div class="card-header">Form states</div>
      <div class="card-body">
        <pre>{{ formstate }}</pre>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      formstate: {},
      model: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      if(this.formstate.$invalid) {
        // alert user and exit early
        return;
      }
      // otherwise submit form
    }
  }
}
</script>
