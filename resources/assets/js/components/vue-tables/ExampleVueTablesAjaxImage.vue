<template>
  <div>
    <datatable title="Vue tables with AJAX + images" :rows="rowdata" :columns="columndata"></datatable>
  </div>
</template>
<script>
import Vue from 'vue';
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
import datatable from './Theme.vue';

Vue.use(ServerTable, {}, false);
Vue.use(ClientTable, {}, false);

export default {
  components: {
    datatable
  },
  data() {
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
