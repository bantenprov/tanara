<template>
  <div>
    <datatable title="Vue tables with AJAX" :rows="rowdata" :columns="columndata"></datatable>
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
      ],
      rowdata: []
    }
  },
  mounted() {
    axios.get("/json/table-1000.json").then(response => {
      this.rowdata = response.data;
    })
    .catch(function(error) {
      // Error
    });
  }
}
</script>
