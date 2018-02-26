<template>
  <div>

    <div class="alert alert-info mb-5" role="alert">
      <ul class="list-unstyled mb-0">
        <li>Package name: <code>mini-toastr</code></li>
        <li>Link: <a class="alert-link" href="https://github.com/se-panfilov/mini-toastr" target="_blank">GitHub</a></li>
      </ul>
    </div>

    <button v-on:click="x" class="btn btn-secondary btn-lg">Click Me!</button>

  </div>
</template>

<script>
export default {
  methods: {
    x: function (event) {
      miniToastr.success('Success message', 'Title');
      miniToastr.info('Info message', 'Title');
      miniToastr.warn('Warn message', 'Title');
      miniToastr.error('Error message', 'Title');
    }
  }
}
</script>
