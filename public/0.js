webpackJsonp([0],{

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_173d7da0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignUp_vue__ = __webpack_require__(902);
var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = null
/* template */

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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_173d7da0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignUp_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/views/SignUp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-173d7da0", Component.options)
  } else {
    hotAPI.reload("data-v-173d7da0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-auth-wrap" }, [
    _c(
      "form",
      { staticClass: "form-auth form-auth-md" },
      [
        _c("h2", { staticClass: "form-auth-heading" }, [_vm._v("Sign up")]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-block text-capitalize",
            attrs: { type: "submit" }
          },
          [_vm._v("Sign up")]
        ),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "text-muted text-center my-2 text-capitalize" },
          [_vm._v("Already a member?")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass: "btn btn-success btn-block text-capitalize",
            attrs: { to: "/sign-in" }
          },
          [_vm._v("Sign in")]
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "mb-0 text-center" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-light text-capitalize",
                attrs: { to: "/" }
              },
              [
                _c("i", { staticClass: "fa fa-home fa-lg mr-2" }),
                _vm._v("\n        Kembali ke Beranda\n      ")
              ]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm form-group" }, [
        _c(
          "label",
          { staticClass: "sr-only", attrs: { for: "inputFirstName" } },
          [_vm._v("First Name")]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "text",
            id: "inputFirstName",
            placeholder: "First Name",
            autofocus: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm form-group" }, [
        _c(
          "label",
          { staticClass: "sr-only", attrs: { for: "inputLastName" } },
          [_vm._v("Last Name")]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", id: "inputLastName", placeholder: "Last Name" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { staticClass: "sr-only", attrs: { for: "inputEmail" } }, [
        _vm._v("Email address")
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "email",
          id: "inputEmail",
          placeholder: "Email address",
          required: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm form-group" }, [
        _c(
          "label",
          { staticClass: "sr-only", attrs: { for: "inputPassword" } },
          [_vm._v("Password")]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "password",
            id: "inputPassword",
            placeholder: "Password",
            required: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm form-group" }, [
        _c(
          "label",
          { staticClass: "sr-only", attrs: { for: "inputConfirmPassword" } },
          [_vm._v("Confirm Password")]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "password",
            id: "inputConfirmPassword",
            placeholder: "Confirm Password",
            required: ""
          }
        })
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-173d7da0", esExports)
  }
}

/***/ })

});