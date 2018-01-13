<template>
  <table-component
    :data="tableData"
    table-class="table table-bordered"
    filter-input-class="form-control d-inline w-50 mb-3"
    filter-placeholder="Filter"
    filter-no-results="Tidak ada hasil yang cocok.">
    <table-column show="firstName" label="First name"></table-column>
    <table-column show="songs" label="Songs" data-type="numeric"></table-column>
  </table-component>
</template>

<script>
// Learn more: https://github.com/spatie/vue-table-component

export default {
  data () {
    return {
      tableData: [
        {
          firstName: 'John',
          songs: 72
        },
        {
          firstName: 'Paul',
          songs: 70
        },
        {
          firstName: 'Paul',
          songs: 70
        },
        {
          firstName: 'George',
          songs: 22
        },
        {
          firstName: 'Ringo',
          songs: 2
        }
      ]
    }
  }
}
</script>
