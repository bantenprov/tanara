<template>
  <div>

    <vue-tables title="Vue tables with AJAX" :rows="rowdata" :columns="columndata"></vue-tables>

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
        },
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
