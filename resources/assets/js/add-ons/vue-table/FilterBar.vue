<template>
    <div class="filter-bar">
      <div class="input-group">
        <input type="text" v-model="filterText" class="form-control" @keyup.enter="doFilter" placeholder="Search for">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click.prevent="doFilter">Go</button>
          <button class="btn btn-outline-secondary" type="button" @click.prevent="resetFilter">Reset</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      filterText: ''
    }
  },
  methods: {
    doFilter () {
      this.$events.fire('filter-set', this.filterText);
    },
    resetFilter () {
      this.filterText = '';
      this.$events.fire('filter-reset');
    }
  }
}
</script>
