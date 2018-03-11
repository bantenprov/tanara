webpackJsonp([49],{

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(1325)
/* template */
var __vue_template__ = __webpack_require__(1326)
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
Component.options.__file = "resources\\assets\\js\\components\\views\\DemoVueFormWizard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e6497586", Component.options)
  } else {
    hotAPI.reload("data-v-e6497586", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1325:
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      model: {
        firstName: '',
        lastName: '',
        email: '',
        alamat: '',
        kelKec: '',
        kota: ''
      },
      formOptions: {
        validationErrorClass: "has-error",
        validationSuccessClass: "has-success",
        validateAfterChanged: true
      },
      firstTabSchema: {
        fields: [{
          type: "input",
          inputType: "text",
          label: "Nama Depan",
          model: "firstName",
          required: true,
          validator: VueFormGenerator.validators.string
        }, {
          type: "input",
          inputType: "text",
          label: "Nama Belakang",
          model: "lastName",
          required: true,
          validator: VueFormGenerator.validators.string
        }, {
          type: "input",
          inputType: "text",
          label: "Email",
          model: "email",
          required: true,
          validator: VueFormGenerator.validators.email
        }]
      },
      secondTabSchema: {
        fields: [{
          type: "input",
          inputType: "text",
          label: "Alamat",
          model: "alamat",
          required: true,
          validator: VueFormGenerator.validators.string
        }, {
          type: "input",
          inputType: "text",
          label: "Kelurahan/Kecamatan",
          model: "kelKec",
          required: true,
          validator: VueFormGenerator.validators.string
        }, {
          type: "select",
          label: "Kota",
          model: "kota",
          required: true,
          validator: VueFormGenerator.validators.string,
          values: ['Serang', 'Cilegon', 'Tangerang']
        }]
      }
    };
  },

  methods: {
    onComplete: function onComplete() {
      miniToastr.success('Yay. Done!', 'Success');
    },
    // Advanced example
    onComplete2: function onComplete2() {
      miniToastr.success('Data Anda sudah Disimpan!', 'Success');
      this.$router.go(this.$router.currentRoute);
    },
    validateFirstTab: function validateFirstTab() {
      return this.$refs.firstTabForm.validate();
    },
    validateSecondTab: function validateSecondTab() {
      return this.$refs.secondTabForm.validate();
    },
    prettyJSON: function prettyJSON(json) {
      if (json) {
        json = JSON.stringify(json, undefined, 4);
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          var cls = 'number';
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'key';
            } else {
              cls = 'string';
            }
          } else if (/true|false/.test(match)) {
            cls = 'boolean';
          } else if (/null/.test(match)) {
            cls = 'null';
          }
          return '<span class="' + cls + '">' + match + '</span>';
        });
      }
    }
  }
});

/***/ }),

/***/ 1326:
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
        "form-wizard",
        {
          attrs: { shape: "square", color: "#3498db" },
          on: { "on-complete": _vm.onComplete }
        },
        [
          _c(
            "div",
            {
              staticClass: "text-center mb-3",
              attrs: { slot: "title" },
              slot: "title"
            },
            [
              _c("h2", { staticClass: "text-dark" }, [_vm._v("Basic example")]),
              _vm._v(" "),
              _c("h5", { staticClass: "text-muted" }, [_vm._v("Subtitle")])
            ]
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            { attrs: { title: "Personal details", icon: "fa fa-user" } },
            [
              _c("div", { staticClass: "card mb-3" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v("My first tab content")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _vm._v("\n          Content\n        ")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            { attrs: { title: "Additional Info", icon: "fa fa-gear" } },
            [
              _c("div", { staticClass: "card mb-3" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v("My second tab content")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _vm._v("\n          Content\n        ")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            { attrs: { title: "Last step", icon: "fa fa-check" } },
            [
              _c("div", { staticClass: "card mb-3" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v("My third tab content")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _vm._v("\n          Content\n        ")
                ])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "my-5" }),
      _vm._v(" "),
      _c(
        "form-wizard",
        {
          attrs: {
            shape: "square",
            color: "#3097D1",
            "error-color": "#a94442",
            "back-button-text": "Kembali",
            "next-button-text": "Selanjutnya",
            "finish-button-text": "Simpan"
          },
          on: { "on-complete": _vm.onComplete2 }
        },
        [
          _c(
            "div",
            {
              staticClass: "text-center mb-3",
              attrs: { slot: "title" },
              slot: "title"
            },
            [
              _c("h2", { staticClass: "text-dark" }, [
                _vm._v("Advanced example")
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "text-muted" }, [_vm._v("Subtitle")])
            ]
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            {
              attrs: {
                title: "Identitas",
                icon: "fa fa-user",
                "before-change": _vm.validateFirstTab
              }
            },
            [
              _c("div", { staticClass: "card mb-3" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v("Identitas Lengkap")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("vue-form-generator", {
                      ref: "firstTabForm",
                      attrs: {
                        model: _vm.model,
                        schema: _vm.firstTabSchema,
                        options: _vm.formOptions
                      }
                    })
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            {
              attrs: {
                title: "Alamat",
                icon: "fa fa-gear",
                "before-change": _vm.validateSecondTab
              }
            },
            [
              _c("div", { staticClass: "card mb-3" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v("Alamat Tinggal")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("vue-form-generator", {
                      ref: "secondTabForm",
                      attrs: {
                        model: _vm.model,
                        schema: _vm.secondTabSchema,
                        options: _vm.formOptions
                      }
                    })
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            { attrs: { title: "Review Data", icon: "fa fa-check" } },
            [
              _c("div", { staticClass: "card mb-3" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v("Identitas Anda sebagai berikut:")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _vm.model
                    ? _c("pre", {
                        domProps: {
                          innerHTML: _vm._s(_vm.prettyJSON(_vm.model))
                        }
                      })
                    : _vm._e()
                ])
              ])
            ]
          )
        ],
        1
      )
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
            _c("code", [_vm._v("vue-form-wizard")])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("Link: "),
            _c(
              "a",
              {
                staticClass: "alert-link",
                attrs: {
                  href: "https://github.com/cristijora/vue-form-wizard",
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
    require("vue-hot-reload-api")      .rerender("data-v-e6497586", module.exports)
  }
}

/***/ })

});