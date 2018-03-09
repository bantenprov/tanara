webpackJsonp([17],{

/***/ 1265:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(1308)
/* template */
var __vue_template__ = __webpack_require__(1309)
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
Component.options.__file = "resources\\assets\\js\\components\\views\\DemoVueForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70f84cb2", Component.options)
  } else {
    hotAPI.reload("data-v-70f84cb2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1308:
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formstate: {},
      model: {
        name: '',
        email: ''
      }
    };
  },

  methods: {
    onSubmit: function onSubmit() {
      if (this.formstate.$invalid) {
        // alert user and exit early
        return;
      }
      // otherwise submit form
    }
  }
});

/***/ }),

/***/ 1309:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "vue-form",
        {
          staticClass: "mb-3",
          attrs: { state: _vm.formstate },
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.onSubmit($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-row" }, [
            _c(
              "div",
              { staticClass: "col-sm mb-2" },
              [
                _c(
                  "validate",
                  { attrs: { tag: "div" } },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.model.name,
                          expression: "model.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        required: "",
                        name: "name",
                        placeholder: "Name"
                      },
                      domProps: { value: _vm.model.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.model, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("field-messages", { attrs: { name: "name" } }, [
                      _c("small", { staticClass: "form-text text-success" }, [
                        _vm._v("Looks good!")
                      ]),
                      _vm._v(" "),
                      _c(
                        "small",
                        {
                          staticClass: "form-text text-danger",
                          attrs: { slot: "required" },
                          slot: "required"
                        },
                        [_vm._v("Name is a required field")]
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm mb-2" },
              [
                _c(
                  "validate",
                  { attrs: { tag: "div" } },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.model.email,
                          expression: "model.email"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        name: "email",
                        type: "email",
                        required: "",
                        placeholder: "Email"
                      },
                      domProps: { value: _vm.model.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.model, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("field-messages", { attrs: { name: "email" } }, [
                      _c("small", { staticClass: "form-text text-success" }, [
                        _vm._v("Looks good!")
                      ]),
                      _vm._v(" "),
                      _c(
                        "small",
                        {
                          staticClass: "form-text text-danger",
                          attrs: { slot: "required" },
                          slot: "required"
                        },
                        [_vm._v("Email is a required field")]
                      ),
                      _vm._v(" "),
                      _c(
                        "small",
                        {
                          staticClass: "form-text text-danger",
                          attrs: { slot: "email" },
                          slot: "email"
                        },
                        [_vm._v("Email is not valid")]
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-auto mb-2" }, [
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card text-dark bg-light" }, [
        _c("div", { staticClass: "card-header" }, [_vm._v("Form states")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("pre", [_vm._v(_vm._s(_vm.formstate))])
        ])
      ])
    ],
    1
  )
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
            _c("code", [_vm._v("vue-form")])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("Link: "),
            _c(
              "a",
              {
                staticClass: "alert-link",
                attrs: {
                  href: "https://github.com/fergaldoyle/vue-form",
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
    require("vue-hot-reload-api")      .rerender("data-v-70f84cb2", module.exports)
  }
}

/***/ })

});