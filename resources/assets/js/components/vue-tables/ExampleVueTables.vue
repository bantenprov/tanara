<template>
  <div>

    <vue-tables title="Vue tables" :rows="rowdata" :columns="columndata"></vue-tables>

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
        }, {
          label: 'Action',
          field: 'button',
          numeric: false,
          html: true,
        }
      ],
      rowdata: [{
        "fname": "Gale",
        "lname": "Mcmyne",
        "age": 16,
        "state": "RI",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Tighe",
        "lname": "Walls",
        "age": 43,
        "state": "AL",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Anuj",
        "lname": "Wittcop",
        "age": 16,
        "state": "MO",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Elisha",
        "lname": "Mahan",
        "age": 28,
        "state": "MA",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Sutman",
        "lname": "Kiab",
        "age": 18,
        "state": "ME",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Wazir",
        "lname": "Odonoghue",
        "age": 27,
        "state": "ND",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Renardo",
        "lname": "Schuessler",
        "age": 5,
        "state": "OK",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Colleen",
        "lname": "Schotuen",
        "age": 33,
        "state": "DE",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Natalia",
        "lname": "Sacks",
        "age": 24,
        "state": "FL",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Kamaniee",
        "lname": "Knaus",
        "age": 11,
        "state": "ID",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Deena",
        "lname": "Downing",
        "age": 39,
        "state": "NM",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Gueorgui",
        "lname": "Downing",
        "age": 22,
        "state": "LA",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Toya",
        "lname": "Wallace",
        "age": 19,
        "state": "MD",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Deborah",
        "lname": "Morrison",
        "age": 14,
        "state": "VT",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Nerissa",
        "lname": "Wade",
        "age": 7,
        "state": "DE",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Glenn",
        "lname": "Bommi",
        "age": 8,
        "state": "MO",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Kate",
        "lname": "Azcunaga",
        "age": 25,
        "state": "ME",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Jesse",
        "lname": "Ingham",
        "age": 50,
        "state": "OK",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Gateri",
        "lname": "Sergent",
        "age": 50,
        "state": "MA",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }, {
        "fname": "Marian",
        "lname": "Malmfeldt",
        "age": 50,
        "state": "DC",
        "button": "<button class='btn btn-link p-0 text-info mr-1' type='button'><i class='fa fa-pencil'></i></button> <button class='btn btn-link p-0 text-danger' type='button'><i class='fa fa-trash'></i></button>"
      }]
    }
  }
}
</script>
