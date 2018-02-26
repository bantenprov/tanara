webpackJsonp([40],{

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1164)
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
Component.options.__file = "resources\\assets\\js\\components\\views\\DemoVueChartjs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d953d4ae", Component.options)
  } else {
    hotAPI.reload("data-v-d953d4ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card text-white bg-dark mb-3" }, [
      _c("div", { staticClass: "card-header" }, [_vm._v("Line chart")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [_c("example-chartjs-line")], 1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-header" }, [_vm._v("Bar chart")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [_c("example-chartjs-bar")], 1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-header" }, [
        _vm._v("Horizontal bar chart")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [_c("example-chartjs-bar-horizontal")],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-6" }, [
        _c("div", { staticClass: "card text-white bg-success mb-3" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Doughnut chart")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("example-chartjs-doughnut")],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6" }, [
        _c("div", { staticClass: "card text-white bg-success mb-3" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Pie chart")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("example-chartjs-pie")],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-6" }, [
        _c("div", { staticClass: "card text-white bg-warning mb-3" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Radar chart")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("example-chartjs-radar")],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6" }, [
        _c("div", { staticClass: "card text-white bg-warning mb-3" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("PolarArea chart")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("example-chartjs-polar-area")],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card text-white bg-danger mb-3" }, [
      _c("div", { staticClass: "card-header" }, [_vm._v("Bubble chart")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [_c("example-chartjs-bubble")], 1)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d953d4ae", module.exports)
  }
}

/***/ })

});