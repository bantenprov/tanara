<template>
  <div>

    <div class="alert alert-info mb-5" role="alert">
      <ul class="list-unstyled mb-0">
        <li>Package name: <code>vue-sweetalert2</code></li>
        <li>Link: <a class="alert-link" href="https://github.com/avil13/vue-sweetalert2" target="_blank">GitHub</a></li>
      </ul>
    </div>

    <button class="btn btn-primary" v-on:click="showAlert">Try me!</button>

  </div>
</template>

<script>
export default {
  methods: {
    showAlert () {
      this.$swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  }
}
</script>
