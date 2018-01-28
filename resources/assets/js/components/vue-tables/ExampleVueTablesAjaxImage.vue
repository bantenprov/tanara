<template>
  <div>

    <vue-tables title="Vue tables with AJAX + images" :rows="rowdata" :columns="columndata"></vue-tables>

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
        {
          label: 'Images',
          field: 'image',
          numeric: false,
          html: true,
        },
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
