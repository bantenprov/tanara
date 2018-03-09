webpackJsonp([3],{

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(1327)
/* template */
var __vue_template__ = __webpack_require__(1331)
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
Component.options.__file = "resources\\assets\\js\\components\\views\\auth\\Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c6c941a", Component.options)
  } else {
    hotAPI.reload("data-v-3c6c941a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkbox__ = __webpack_require__(1328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__checkbox__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
  components: {
    'checkbox': __WEBPACK_IMPORTED_MODULE_1__checkbox___default.a
  },

  data: function data() {
    return {
      form: new Form({
        email: '',
        password: ''
      }),
      remember: false
    };
  },

  methods: {
    login: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.form.post('/api/login');

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;


                // Save the token.
                this.$store.dispatch('saveToken', {
                  token: data.token,
                  remember: this.remember
                });

                // Fetch the user.
                _context.next = 7;
                return this.$store.dispatch('fetchUser');

              case 7:

                // Redirect home.
                this.$router.push({ name: 'dashboard' });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
  }
});

/***/ }),

/***/ 1328:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(1329)
/* template */
var __vue_template__ = __webpack_require__(1330)
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
Component.options.__file = "resources\\assets\\js\\components\\views\\auth\\checkbox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-572fdf82", Component.options)
  } else {
    hotAPI.reload("data-v-572fdf82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1329:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Checkbox',

  props: {
    id: String,
    name: String,
    value: Boolean,
    checked: Boolean
  },

  data: function data() {
    return {
      internalValue: false
    };
  },

  created: function created() {
    this.internalValue = this.value;

    if ('checked' in this.$options.propsData) {
      this.internalValue = this.checked;
    }
  },


  watch: {
    value: function value(val) {
      this.internalValue = val;
    },
    checked: function checked(val) {
      this.internalValue = val;
    },
    internalValue: function internalValue(val, oldVal) {
      if (val !== oldVal) {
        this.$emit('input', val);
      }
    }
  },

  methods: {
    handleClick: function handleClick(e) {
      this.$emit('click', e);

      if (!e.isPropagationStopped) {
        this.internalValue = e.target.checked;
      }
    }
  }
});

/***/ }),

/***/ 1330:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "custom-control custom-checkbox" }, [
    _c("input", {
      staticClass: "custom-control-input",
      attrs: {
        type: "checkbox",
        name: _vm.name,
        id: _vm.id || _vm.name || "checkbox"
      },
      domProps: { checked: _vm.internalValue },
      on: { click: _vm.handleClick }
    }),
    _vm._v(" "),
    _c(
      "label",
      {
        staticClass: "custom-control-label",
        attrs: { for: _vm.id || _vm.name || "checkbox" }
      },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-572fdf82", module.exports)
  }
}

/***/ }),

/***/ 1331:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-auth-wrap" }, [
    _c(
      "form",
      {
        staticClass: "form-auth form-auth-sm",
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.login($event)
          },
          keydown: function($event) {
            _vm.form.onKeydown($event)
          }
        }
      },
      [
        _c("h2", { staticClass: "form-auth-header" }, [_vm._v("Log In")]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "label",
            { staticClass: "sr-only", attrs: { for: "inputEmail" } },
            [_vm._v("Email")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "input-group" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.email,
                    expression: "form.email"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("email") },
                attrs: {
                  type: "email",
                  name: "email",
                  id: "inputEmail",
                  placeholder: "Email",
                  autofocus: ""
                },
                domProps: { value: _vm.form.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "email" } })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "label",
            { staticClass: "sr-only", attrs: { for: "inputPassword" } },
            [_vm._v("Password")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "input-group" },
            [
              _vm._m(1),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.password,
                    expression: "form.password"
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("password") },
                attrs: {
                  type: "password",
                  name: "password",
                  id: "inputPassword",
                  placeholder: "Password"
                },
                domProps: { value: _vm.form.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "password", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "password" } })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-check pl-0 mb-3" },
          [
            _c(
              "checkbox",
              {
                attrs: { name: "remember" },
                model: {
                  value: _vm.remember,
                  callback: function($$v) {
                    _vm.remember = $$v
                  },
                  expression: "remember"
                }
              },
              [_vm._v("\n        Remember Me\n      ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-block text-capitalize mb-2",
            attrs: { disabled: _vm.form.busy, type: "submit" }
          },
          [_vm._v("Log In")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-center" },
          [
            _c(
              "router-link",
              {
                staticClass: "small",
                attrs: { to: { name: "password.request" } }
              },
              [_vm._v("\n        Forgot Your Password?\n      ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-auth-footer d-flex flex-wrap flex-column" },
          [
            _c(
              "div",
              { staticClass: "btn-group" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-light w-100 text-capitalize",
                    attrs: { to: { name: "register" }, exact: "" }
                  },
                  [_vm._v("\n          Register\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-light w-100 text-capitalize",
                    attrs: { to: { name: "home" }, exact: "" }
                  },
                  [_vm._v("\n          Back to home\n        ")]
                )
              ],
              1
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("i", {
          staticClass: "fa fa-envelope",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fa fa-key", attrs: { "aria-hidden": "true" } })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c6c941a", module.exports)
  }
}

/***/ })

});