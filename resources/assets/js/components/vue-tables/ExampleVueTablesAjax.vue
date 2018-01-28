<template>
  <div>

    <div class="card mb-3">
      <div class="card-header">
        <i class="fa fa-table" aria-hidden="true"></i> Vue tables with AJAX
      </div>
      <div class="card-body">
        <vue-tables
          tableClass="table table-striped table-responsive-sm"
          :rows="rowdata"
          :columns="columndata"
          :sortable="true"
          :exportable="true"
          :paginate="true"
          :perPage="10"
          :pagelen="[5, 10, 20, 50]"
          paginateClass="p-3 border">
        </vue-tables>
      </div><!-- /.card-body -->
    </div><!-- /.card -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      columndata: [
        {
          label: '#',
          field: 'id',
          numeric: true,
          width: false,
          html: false,
        }, {
          label: 'Name',
          field: 'name',
          numeric: false,
          html: false,
        }, {
          label: 'Age',
          field: 'age',
          numeric: true,
          html: false,
        }
      ],
      rowdata: []
    }
  },
  mounted() {
    axios.get("/json/table-10000.json").then(response => {
      this.rowdata = response.data;
    })
    .catch(function(error) {
      // Error
    });
  }
}
</script>
