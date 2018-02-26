<template>
  <div>

    <div class="d-flex justify-content-between align-items-center mb-3">
      <vuetable-filter-bar></vuetable-filter-bar>
      <div>
        <div v-if="loading" class="d-flex justify-content-start align-items-center">
          <i class="fa fa-refresh fa-spin fa-fw"></i>
          <span>Loading...</span>
        </div>
      </div>
    </div>

    <vuetable ref="vuetable"
      api-url="https://vuetable.ratiw.net/api/users"
      :fields="fields"
      :sort-order="sortOrder"
      :css="css.table"
      pagination-path=""
      :per-page="5"
      :append-params="moreParams"
      @vuetable:pagination-data="onPaginationData"
      @vuetable:loading="onLoading"
      @vuetable:loaded="onLoaded">

      <template slot="actions" slot-scope="props">
        <div class="table-button-container">
          <button class="btn btn-warning btn-sm mr-1 mb-1" @click="editRow(props.rowData)">
            <span class="fa fa-pencil"></span> Edit
          </button>
          <button class="btn btn-danger btn-sm mr-1 mb-1" @click="deleteRow(props.rowData)">
            <span class="fa fa-trash"></span> Delete
          </button>
        </div>
      </template>

    </vuetable>

    <div class="d-flex justify-content-between align-items-center">
      <div>
        <div v-if="loading" class="d-flex justify-content-start align-items-center">
          <i class="fa fa-refresh fa-spin fa-fw"></i>
          <span>Loading...</span>
        </div>
      </div>
      <vuetable-pagination ref="pagination"
        :css="css.pagination"
        @vuetable-pagination:change-page="onChangePage">
      </vuetable-pagination>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      fields: [
        {
          name: 'name',
          title: 'Full Name',
          sortField: 'name'
        },
        {
          name: 'email',
          title: 'Email',
          sortField: 'email'
        },
        {
          name: 'birthdate',
          title: 'Birthdate'
        },
        {
          name: 'nickname',
          title: 'Nickname'
        },
        {
          name: 'gender',
          title: 'Gender'
        },
        '__slot:actions'
      ],
      sortOrder: [
        { field: 'name', direction: 'asc' }
      ],
      moreParams: {},
      css: {
        table: {
          tableClass: 'table table-bordered table-hover table-responsive-xl',
          ascendingIcon: 'fa fa-chevron-up',
          descendingIcon: 'fa fa-chevron-down'
        },
        pagination: {
          wrapperClass: 'vuetable-pagination btn-group',
          activeClass: 'active',
          disabledClass: 'disabled',
          pageClass: 'btn btn-light',
          linkClass: 'btn btn-light',
          icons: {
            first: 'fa fa-angle-double-left',
            prev: 'fa fa-angle-left',
            next: 'fa fa-angle-right',
            last: 'fa fa-angle-double-right'
          }
        }
      }
    }
  },
  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    editRow(rowData) {
      alert("You clicked edit on"+ JSON.stringify(rowData));
    },
    deleteRow(rowData) {
      alert("You clicked delete on"+ JSON.stringify(rowData));
    },
    onLoading: function () {
      this.loading = true;
      // console.log('Loading: ' + this.loading);
    },
    onLoaded: function () {
      this.loading = false;
      // console.log('Loading: ' + this.loading);
    }
  },
  events: {
    'filter-set' (filterText) {
      this.moreParams = {
        filter: filterText
      }
      Vue.nextTick( () => this.$refs.vuetable.refresh() )
    },
    'filter-reset' () {
      this.moreParams = {}
      Vue.nextTick( () => this.$refs.vuetable.refresh() )
    }
  }
}
</script>
