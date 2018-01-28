webpackJsonp([26],{

/***/ 1209:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(1215)
/* template */
var __vue_template__ = __webpack_require__(1225)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\views\\DemoVueSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-163bc92c", Component.options)
  } else {
    hotAPI.reload("data-v-163bc92c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      options1: [{
        title: 'Read the Docs',
        icon: 'fa-book',
        url: 'https://codeclimate.com/github/sagalbot/vue-select'
      }, {
        title: 'View on GitHub',
        icon: 'fa-github',
        url: 'https://codeclimate.com/github/sagalbot/vue-select'
      }, {
        title: 'View on NPM',
        icon: 'fa-database',
        url: 'https://codeclimate.com/github/sagalbot/vue-select'
      }, {
        title: 'View Codepen Examples',
        icon: 'fa-pencil',
        url: 'https://codeclimate.com/github/sagalbot/vue-select'
      }],

      options2: [{ countryCode: "AU", countryName: "Australia" }, { countryCode: "CA", countryName: "Canada" }, { countryCode: "CN", countryName: "China" }, { countryCode: "DE", countryName: "Germany" }, { countryCode: "JP", countryName: "Japan" }, { countryCode: "MX", countryName: "Mexico" }, { countryCode: "CH", countryName: "Switzerland" }, { countryCode: "US", countryName: "United States" }],

      options3: [{ id: 1, label: 'foo' }, { id: 3, label: 'bar' }, { id: 2, label: 'baz' }],
      selectedOptions3: { id: 3, label: 'bar' },

      options4: ['foo', 'bar', 'baz'],
      selectedOptions4: ['foo', 'bar'],

      options5: ['foo', 'bar', 'baz'],
      selectedOptions5: [],

      options6: []
    };
  },

  methods: {
    //== 5. Vue Select - Select All (options5)
    selectAll: function selectAll() {
      var select = this.$refs.select;
      select.options.forEach(function (option) {
        select.select(option);
      });
      // bug caused by onAfterSelect
      select.open = false;
    },


    //== 6. Vue Select - Ajax (options6)
    onSearch: function onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },

    search: _.debounce(function (loading, search, vm) {
      fetch('https://api.github.com/search/repositories?q=' + escape(search)).then(function (res) {
        res.json().then(function (json) {
          return vm.options6 = json.items;
        });
        loading(false);
      });
    }, 350)
  }
});

/***/ }),

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h2", [_vm._v("1. Vue Select - Custom Option Templating")]),
      _vm._v(" "),
      _c("v-select", {
        staticClass: "mb-4",
        attrs: { options: _vm.options1, label: "title" },
        scopedSlots: _vm._u([
          {
            key: "option",
            fn: function(option) {
              return [
                _c("span", { staticClass: "fa", class: option.icon }),
                _vm._v("\n      " + _vm._s(option.title) + "\n    ")
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("h2", [_vm._v("2. Vue Select - Custom Labels")]),
      _vm._v(" "),
      _c("v-select", {
        staticClass: "mb-4",
        attrs: { label: "countryName", options: _vm.options2 }
      }),
      _vm._v(" "),
      _c("h2", [_vm._v("3. Vue Select - Using v-model")]),
      _vm._v(" "),
      _c("v-select", {
        staticClass: "mb-4",
        attrs: { options: _vm.options3 },
        model: {
          value: _vm.selectedOptions3,
          callback: function($$v) {
            _vm.selectedOptions3 = $$v
          },
          expression: "selectedOptions3"
        }
      }),
      _vm._v(" "),
      _c("h2", [_vm._v("4. Vue Select - Selecting Multiple Values")]),
      _vm._v(" "),
      _c("v-select", {
        staticClass: "mb-4",
        attrs: { multiple: "", options: _vm.options4 },
        model: {
          value: _vm.selectedOptions4,
          callback: function($$v) {
            _vm.selectedOptions4 = $$v
          },
          expression: "selectedOptions4"
        }
      }),
      _vm._v(" "),
      _c("h2", [_vm._v("5. Vue Select - Select All")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-secondary btn-sm mb-2",
          on: { click: _vm.selectAll }
        },
        [_vm._v("Select All")]
      ),
      _vm._v(" "),
      _c("v-select", {
        ref: "select",
        staticClass: "mb-4",
        attrs: { multiple: "", options: _vm.options5 },
        model: {
          value: _vm.selectedOptions5,
          callback: function($$v) {
            _vm.selectedOptions5 = $$v
          },
          expression: "selectedOptions5"
        }
      }),
      _vm._v(" "),
      _c("h2", [_vm._v("6. Vue Select - Ajax")]),
      _vm._v(" "),
      _c(
        "v-select",
        {
          attrs: {
            placeholder: "search github..",
            label: "name",
            filterable: false,
            options: _vm.options6
          },
          on: { search: _vm.onSearch },
          scopedSlots: _vm._u([
            {
              key: "option",
              fn: function(option) {
                return [
                  _c("div", { staticClass: "media p-2" }, [
                    _c("img", {
                      staticClass: "mr-3",
                      attrs: {
                        src: option.owner.avatar_url,
                        width: "72",
                        height: "72",
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body" }, [
                      _c("h5", [_vm._v(_vm._s(option.full_name))])
                    ])
                  ])
                ]
              }
            },
            {
              key: "selected-option",
              fn: function(option) {
                return [
                  _c("div", { staticClass: "media p-2 selected" }, [
                    _c("img", {
                      staticClass: "mr-3",
                      attrs: {
                        src: option.owner.avatar_url,
                        width: "72",
                        height: "72",
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body" }, [
                      _c("h5", [_vm._v(_vm._s(option.full_name))])
                    ])
                  ])
                ]
              }
            }
          ])
        },
        [
          _c("template", { slot: "no-options" }, [
            _vm._v("\n      type to search GitHub repositories..\n    ")
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-163bc92c", module.exports)
  }
}

/***/ })

});