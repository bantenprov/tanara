<template>
  <div>

    <div class="form-row mb-3">
      <div class="col">
        <input type="search" class="form-control mb-2" placeholder="Search" v-model="searchInput">
      </div>
      <div v-if="exportable" class="col-auto">
        <a href="javascript:void(0)" class="btn btn-primary" v-if="this.exportable" @click="exportExcel" title="export excel">
          <i class="fa fa-download"></i> Download
        </a>
      </div>
    </div>
    <table ref="table" :class="tableClass">
      <thead>
        <tr>
          <th
            v-for="(column, index) in columns" @click="sort(index)"
            :class="(sortable ? 'sortable' : '') + (sortColumn === index ? (sortType === 'desc' ? ' sorting-desc' : ' sorting-asc') : '')"
            :style="{width: column.width ? column.width : 'auto'}">
              <div class="d-flex flex-row justify-content-start align-items-center">
                {{column.label}} <i class="ml-2 fa" :class="(sortColumn === index ? (sortType === 'desc' ? ' fa-angle-down' : ' fa-angle-up') : '')"></i>
              </div>
          </th>
          <slot name="thead-tr"></slot>
        </tr>
      </thead>
        <tbody>
          <tr v-for="(row, index) in paginated" @click="click(row, index)">
            <template v-for="column in columns">
              <td :class="column.numeric ? 'numeric' : ''" v-if="!column.html">
                {{ collect(row,column.field) }}
              </td>
              <td :class="column.numeric ? 'numeric' : ''" v-html="collect(row, column.field)" v-if="column.html"></td>
            </template>
            <slot name="tbody-tr" :row="row"></slot>
          </tr>
        </tbody>
    </table>
    <div :class="'d-flex flex-row justify-content-between align-items-center' + (paginateClass != '' ? ' ' : '') + paginateClass" v-if="paginate">
      <div class="pr-1">
        <div class="mb-1">Rows per page:</div>
        <select class="custom-select" v-model="currentPerPage">
          <option v-for="len in pagelen" :value="len">{{len}}</option>
          <option value="-1">All</option>
        </select>
        <div class="mt-3">
          <span>Showing</span> <span class="badge badge-info">{{(currentPage - 1) * currentPerPage ? (currentPage - 1) * currentPerPage : 1}} - {{currentPerPage==-1?processedRows.length:Math.min(processedRows.length, currentPerPage * currentPage)}}</span> of <span class="badge badge-info">{{processedRows.length}}</span> <span>records</span>
        </div>
      </div>
      <div class="pl-1">
        <ul class="pagination mb-0">
          <li class="page-item">
            <a href="javascript:void(0)" class="page-link" @click.prevent="previousPage" tabindex="0">
              <i class="fa fa-angle-left"></i>
            </a>
          </li>
          <li class="page-item">
            <a href="javascript:void(0)" class="page-link" @click.prevent="nextPage" tabindex="0">
              <i class="fa fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    tableClass: {
      default: "table"
    },
    paginateClass: {
      default: ""
    },
    columns: {
      required: true
    },
    rows: {
      required: true
    },
    perPage: {
      default: 10
    },
    sortable: {
      default: true
    },
    paginate: {
      default: true
    },
    exportable: {
      default: true
    },
    pagelen: {
      type: Array,
      default () {
        return [5, 10, 20, 50]
      }
    }
  },
  data() {
    return {
      currentPage: 1,
      currentPerPage: this.perPage,
      sortColumn: -1,
      sortType: 'asc',
      searchInput: '',
    }
  },
  mounted() {
    this.sort(0);
  },
  methods: {
    nextPage() {
      if (this.processedRows.length > this.currentPerPage * this.currentPage && this.currentPerPage != -1)
        ++this.currentPage;
    },
    previousPage() {
      if (this.currentPage > 1)
        --this.currentPage;
    },
    sort(index) {
      if (!this.sortable) {
        return;
      }
      if (this.sortColumn === index) {
        this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortType = 'asc';
        this.sortColumn = index;
      }
    },

    click(row, index) {
      this.$emit("rowClick", row, index);
    },

    exportExcel() {
      const mimeType = 'data:application/vnd.ms-excel';
      const html = this.renderTable().replace(/ /g, '%20');

      const d = new Date();

      var dummy = document.createElement('a');
      dummy.href = mimeType + ', ' + html;
      dummy.download = this.title.toLowerCase().replace(/ /g, '-') + '-' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() + '.xls';
      dummy.click();
    },

    renderTable() {
      var table = '<table><thead>';

      table += '<tr>';
      for (var i = 0; i < this.columns.length; i++) {
        const column = this.columns[i];
        table += '<th>';
        table += column.label;
        table += '</th>';
      }
      table += '</tr>';

      table += '</thead><tbody>';

      for (var i = 0; i < this.rows.length; i++) {
        const row = this.rows[i];
        table += '<tr>';
        for (var j = 0; j < this.columns.length; j++) {
          const column = this.columns[j];
          table += '<td>';
          table += this.collect(row, column.field);
          table += '</td>';
        }
        table += '</tr>';
      }

      table += '</tbody></table>';

      return table;
    },

    dig(obj, selector) {
      var result = obj;
      const splitter = selector.split('.');
      for (let i = 0; i < splitter.length; i++)
        if (typeof(result) === 'undefined')
          return undefined;
        else
          result = result[splitter[i]];
      return result;
    },

    collect(obj, field) {
      if (typeof(field) === 'function')
        return field(obj);
      else if (typeof(field) === 'string')
        return this.dig(obj, field);
      else
        return undefined;
    }
  },

  computed: {
    processedRows: function() {
      var computedRows = this.rows;

      if (this.sortable !== false) {
        computedRows = computedRows.sort((x, y) => {
          if (!this.columns[this.sortColumn]) {
              return 0;
          }

          const cook = (x) => {
            x = this.collect(x, this.columns[this.sortColumn].field);
            if (typeof(x) === 'string') {
              x = x.toLowerCase();
              if (this.columns[this.sortColumn].numeric)
                x = x.indexOf('.') >= 0 ? parseFloat(x) : parseInt(x);
            }
            return x;
          }

          x = cook(x);
          y = cook(y);

          return (x < y ? -1 : (x > y ? 1 : 0)) * (this.sortType === 'desc' ? -1 : 1);
        })
      }

      if (this.searchInput) {
        computedRows = (new Fuse(computedRows, {
            keys: this.columns.map(c => c.field)
        })).search(this.searchInput);
      }
      return computedRows;
    },

    paginated: function() {
      var paginatedRows = this.processedRows;
      if (this.paginate && this.currentPerPage != -1) {
        paginatedRows = paginatedRows.slice((this.currentPage - 1) * this.currentPerPage, this.currentPage * this.currentPerPage);
      }
      return paginatedRows;
    }
  },
  watch: {
    currentPerPage() {
      this.currentPage = 1;
      this.paginated;
    },
    searchInput(){
      this.currentPage = 1;
      this.paginated;
    }
  }
}
</script>
