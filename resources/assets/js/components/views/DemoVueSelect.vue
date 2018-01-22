<template>
  <div>

    <div class="alert alert-info mb-5" role="alert">
      <ul class="list-unstyled mb-0">
        <li>Package name: <code>vue-select</code></li>
        <li>Link: <a class="alert-link" href="https://github.com/sagalbot/vue-select" target="_blank">GitHub</a></li>
      </ul>
    </div>

    <h2>1. Vue Select - Custom Option Templating</h2>
    <v-select :options="options1" label="title" class="mb-4">
      <template slot="option" slot-scope="option">
        <span class="fa" :class="option.icon"></span>
        {{ option.title }}
      </template>
    </v-select>

    <h2>2. Vue Select - Custom Labels</h2>
    <v-select label="countryName" :options="options2" class="mb-4"></v-select>

    <h2>3. Vue Select - Using v-model</h2>
    <v-select v-model="selectedOptions3" :options="options3" class="mb-4"></v-select>

    <h2>4. Vue Select - Selecting Multiple Values</h2>
    <v-select multiple v-model="selectedOptions4" :options="options4" class="mb-4"></v-select>

    <h2>5. Vue Select - Select All</h2>
    <button class="btn btn-secondary btn-sm mb-2" @click="selectAll">Select All</button>
    <v-select ref="select" multiple :options="options5" v-model="selectedOptions5" class="mb-4"></v-select>

    <h2>6. Vue Select - Ajax</h2>
    <v-select placeholder="search github.." label="name" :filterable="false" :options="options6" @search="onSearch">
      <template slot="no-options">
        type to search GitHub repositories..
      </template>
      <template slot="option" slot-scope="option">
        <div class="media p-2">
          <img class="mr-3" :src="option.owner.avatar_url" width="72" height="72" alt="">
          <div class="media-body">
            <h5>{{ option.full_name }}</h5>
          </div>
        </div>
      </template>
      <template slot="selected-option" slot-scope="option">
        <div class="media p-2 selected">
          <img class="mr-3" :src="option.owner.avatar_url" width="72" height="72" alt="">
          <div class="media-body">
            <h5>{{ option.full_name }}</h5>
          </div>
        </div>
      </template>
    </v-select>

  </div>
</template>

<script>
export default {
  data () {
    return {
      options1: [
        {
          title: 'Read the Docs',
          icon: 'fa-book',
          url: 'https://codeclimate.com/github/sagalbot/vue-select'
        },
        {
          title: 'View on GitHub',
          icon: 'fa-github',
          url: 'https://codeclimate.com/github/sagalbot/vue-select'
        },
        {
          title: 'View on NPM',
          icon: 'fa-database',
          url: 'https://codeclimate.com/github/sagalbot/vue-select'
        },
        {
          title: 'View Codepen Examples',
          icon: 'fa-pencil',
          url: 'https://codeclimate.com/github/sagalbot/vue-select'
        }
      ],

      options2: [
        { countryCode: "AU", countryName: "Australia" },
        { countryCode: "CA", countryName: "Canada" },
        { countryCode: "CN", countryName: "China" },
        { countryCode: "DE", countryName: "Germany" },
        { countryCode: "JP", countryName: "Japan" },
        { countryCode: "MX", countryName: "Mexico" },
        { countryCode: "CH", countryName: "Switzerland" },
        { countryCode: "US", countryName: "United States" }
      ],

      options3: [
        {id: 1, label: 'foo'},
        {id: 3, label: 'bar'},
        {id: 2, label: 'baz'},
      ],
      selectedOptions3: {id: 3, label: 'bar'},

      options4: [
        'foo',
        'bar',
        'baz'
      ],
      selectedOptions4: ['foo','bar'],

      options5: [
        'foo',
        'bar',
        'baz'
      ],
      selectedOptions5: [],

      options6: []
    }
  },
  methods: {
    //== 5. Vue Select - Select All (options5)
    selectAll() {
      const select = this.$refs.select;
      select.options.forEach(option => {
        select.select(option);
      });
      // bug caused by onAfterSelect
      select.open = false
    },

    //== 6. Vue Select - Ajax (options6)
    onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce((loading, search, vm) => {
      fetch(
        `https://api.github.com/search/repositories?q=${escape(search)}`
      ).then(res => {
        res.json().then(json => (vm.options6 = json.items));
        loading(false);
      });
    }, 350)
  }
}
</script>
