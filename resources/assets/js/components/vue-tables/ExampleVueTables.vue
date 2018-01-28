<template>
  <div>

    <div class="card mb-3">
      <div class="card-header">
        <i class="fa fa-table" aria-hidden="true"></i> Vue tables basic example
      </div>
      <div class="card-body">
        <vue-tables
          tableClass="table table-bordered table-responsive-sm"
          :rows="rowdata"
          :columns="columndata"
          :sortable="true"
          :exportable="false"
          :paginate="false"
          :perPage="false"
          :pagelen="[]"
          paginateClass="">
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
          label: 'First Name',
          field: 'fname',
          numeric: false,
          width: false,
          html: false,
        }, {
          label: 'Last Name',
          field: 'lname',
          numeric: false,
          html: false,
        }, {
          label: 'Age',
          field: 'age',
          numeric: true,
          html: false,
        }, {
          label: 'State',
          field: 'state',
          numeric: false,
          html: false,
        }
      ],
      rowdata: [
        {
          "fname": "Gale",
          "lname": "Mcmyne",
          "age": 16,
          "state": "RI"
        }, {
          "fname": "Tighe",
          "lname": "Walls",
          "age": 43,
          "state": "AL"
        }, {
          "fname": "Anuj",
          "lname": "Wittcop",
          "age": 16,
          "state": "MO"
        }, {
          "fname": "Elisha",
          "lname": "Mahan",
          "age": 28,
          "state": "MA"
        }, {
          "fname": "Sutman",
          "lname": "Kiab",
          "age": 18,
          "state": "ME"
        }, {
          "fname": "Wazir",
          "lname": "Odonoghue",
          "age": 27,
          "state": "ND"
        }, {
          "fname": "Renardo",
          "lname": "Schuessler",
          "age": 5,
          "state": "OK"
        }, {
          "fname": "Colleen",
          "lname": "Schotuen",
          "age": 33,
          "state": "DE"
        }, {
          "fname": "Natalia",
          "lname": "Sacks",
          "age": 24,
          "state": "FL"
        }, {
          "fname": "Kamaniee",
          "lname": "Knaus",
          "age": 11,
          "state": "ID"
        }, {
          "fname": "Deena",
          "lname": "Downing",
          "age": 39,
          "state": "NM"
        }, {
          "fname": "Gueorgui",
          "lname": "Downing",
          "age": 22,
          "state": "LA"
        }, {
          "fname": "Toya",
          "lname": "Wallace",
          "age": 19,
          "state": "MD"
        }, {
          "fname": "Deborah",
          "lname": "Morrison",
          "age": 14,
          "state": "VT"
        }, {
          "fname": "Nerissa",
          "lname": "Wade",
          "age": 7,
          "state": "DE"
        }, {
          "fname": "Glenn",
          "lname": "Bommi",
          "age": 8,
          "state": "MO"
        }, {
          "fname": "Kate",
          "lname": "Azcunaga",
          "age": 25,
          "state": "ME"
        }, {
          "fname": "Jesse",
          "lname": "Ingham",
          "age": 50,
          "state": "OK"
        }, {
          "fname": "Gateri",
          "lname": "Sergent",
          "age": 50,
          "state": "MA"
        }, {
          "fname": "Marian",
          "lname": "Malmfeldt",
          "age": 50,
          "state": "DC"
        }
      ]
    }
  }
}
</script>
