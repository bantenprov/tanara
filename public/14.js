webpackJsonp([14],{

/***/ 1275:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(1323)
/* template */
var __vue_template__ = __webpack_require__(1324)
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
Component.options.__file = "resources\\assets\\js\\components\\views\\DemoVueQrcode.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0283de08", Component.options)
  } else {
    hotAPI.reload("data-v-0283de08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1323:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      val: window.location.href,
      bgColor: "#FFFFFF",
      fgColor: "#000000",
      size: 200
    };
  }
});

/***/ }),

/***/ 1324:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card border-info mb-3" }, [
      _c("div", { staticClass: "card-header bg-transparent border-info" }, [
        _vm._v("Settings")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "form-row" }, [
          _c("div", { staticClass: "col-sm form-group" }, [
            _c("label", { attrs: { for: "size" } }, [_vm._v("size(px)")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.size,
                  expression: "size"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "size" },
              domProps: { value: _vm.size },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.size = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm form-group" }, [
            _c("label", { attrs: { for: "background" } }, [
              _vm._v("background")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bgColor,
                  expression: "bgColor"
                }
              ],
              staticClass: "form-control p-0",
              staticStyle: { height: "38px" },
              attrs: { type: "color", id: "background" },
              domProps: { value: _vm.bgColor },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.bgColor = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm form-group" }, [
            _c("label", { attrs: { for: "foreground" } }, [
              _vm._v("foreground")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fgColor,
                  expression: "fgColor"
                }
              ],
              staticClass: "form-control p-0",
              staticStyle: { height: "38px" },
              attrs: { type: "color", id: "foreground" },
              domProps: { value: _vm.fgColor },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.fgColor = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 form-group mb-0" }, [
            _c("label", { attrs: { for: "value" } }, [_vm._v("value")]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.val,
                  expression: "val"
                }
              ],
              staticClass: "form-control",
              attrs: { rows: "3", cols: "80", id: "value" },
              domProps: { value: _vm.val },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.val = $event.target.value
                }
              }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card text-dark bg-light mb-3" }, [
      _c("div", { staticClass: "card-header" }, [_vm._v("QRcode")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("qrcode", {
            staticClass: "d-block mx-auto",
            attrs: {
              value: _vm.val,
              options: {
                background: _vm.bgColor,
                foreground: _vm.fgColor,
                size: _vm.size,
                level: "H"
              },
              tag: "img"
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "alert alert-info mb-5", attrs: { role: "alert" } },
      [
        _c("ul", { staticClass: "list-unstyled mb-0" }, [
          _c("li", [
            _vm._v("Package name: "),
            _c("code", [_vm._v("@xkeshi/vue-qrcode")])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("Link: "),
            _c(
              "a",
              {
                staticClass: "alert-link",
                attrs: {
                  href: "https://github.com/xkeshi/vue-qrcode",
                  target: "_blank"
                }
              },
              [_vm._v("GitHub")]
            )
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0283de08", module.exports)
  }
}

/***/ })

});