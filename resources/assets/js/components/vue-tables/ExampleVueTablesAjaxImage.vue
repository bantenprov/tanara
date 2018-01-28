<template>
  <div>

    <div class="card mb-3">
      <div class="card-header">
        <i class="fa fa-table" aria-hidden="true"></i> Vue tables with AJAX + images
      </div>
      <div class="card-body">
        <vue-tables
          tableClass="table table-bordered table-striped table-responsive-sm"
          :rows="rowdata"
          :columns="columndata"
          :sortable="true"
          :exportable="true"
          :paginate="true"
          :perPage="10"
          :pagelen="[5, 10, 20, 50]"
          paginateClass="p-3 text-dark bg-light border border-info">
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
        }, {
          label: 'Images',
          field: 'image',
          numeric: false,
          html: true,
        }
      ],
      rowdata: []
    }
  },
  mounted() {
    axios.get("/json/table-10000-image.json").then(response => {
      var data = response.data;
      var i;

      for(i in data) {
        data[i].image = '<img class="img-fluid rounded" src="' + data[i].image + '" alt="' + data[i].name + '">'
      }

      this.rowdata = data
    })
    .catch(function(error) {
      // Error
    });
  }
}
</script>
