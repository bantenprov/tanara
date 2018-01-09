webpackJsonp([4],{

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  null,
  /* template */
  __webpack_require__(65),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laravel-vue\\resources\\assets\\js\\components\\views\\SignIn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SignIn.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34ff3c1d", Component.options)
  } else {
    hotAPI.reload("data-v-34ff3c1d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "form-auth form-auth-sm"
  }, [_c('h2', {
    staticClass: "form-auth-heading"
  }, [_vm._v("Sign in")]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "sr-only",
    attrs: {
      "for": "inputEmail"
    }
  }, [_vm._v("Email address")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('div', {
    staticClass: "input-group-prepend"
  }, [_c('div', {
    staticClass: "input-group-text"
  }, [_c('i', {
    staticClass: "fa fa-envelope",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "inputEmail",
      "placeholder": "Email address",
      "required": "",
      "autofocus": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "sr-only",
    attrs: {
      "for": "inputPassword"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('div', {
    staticClass: "input-group-prepend"
  }, [_c('div', {
    staticClass: "input-group-text"
  }, [_c('i', {
    staticClass: "fa fa-key",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "inputPassword",
      "placeholder": "Password",
      "required": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-check mb-2"
  }, [_c('label', {
    staticClass: "form-check-label"
  }, [_c('input', {
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox",
      "value": "remember-me"
    }
  }), _vm._v(" Remember me\n    ")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success btn-block text-capitalize",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Sign in")]), _vm._v(" "), _c('p', {
    staticClass: "text-muted text-center my-2 text-capitalize"
  }, [_vm._v("New user?")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary btn-block text-capitalize",
    attrs: {
      "href": "/sign-up"
    }
  }, [_vm._v("Sign up now")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-34ff3c1d", module.exports)
  }
}

/***/ })

});