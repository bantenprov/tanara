webpackJsonp([1],{

/***/ 1290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(522);


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



/* harmony default export */ __webpack_exports__["default"] = ({
  computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])({
    user: 'authUser',
    authenticated: 'authCheck'
  }),
  methods: {
    logout: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch('logout');

              case 2:

                // Redirect to login.
                this.$router.push({ name: 'login' });

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function logout() {
        return _ref.apply(this, arguments);
      }

      return logout;
    }(),

    toggleSidebar: function toggleSidebar(event) {
      var sidebar = document.querySelector('.site-sidebar');
      var main = document.querySelector('.site-main');

      sidebar.classList.toggle('d-none');

      main.classList.toggle('col-md-8');
      main.classList.toggle('col-lg-9');
      main.classList.toggle('col-12');
    },
    toggleFullscreen: function toggleFullscreen(event) {
      var elem = document.documentElement;
      if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
        if (!this.isFullscreen) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
            this.isFullscreen = true;
            return;
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
            this.isFullscreen = true;
            return;
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
            this.isFullscreen = true;
            return;
          } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
            this.isFullscreen = true;
            return;
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
            this.isFullscreen = false;
            return;
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            this.isFullscreen = false;
            return;
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            this.isFullscreen = false;
            return;
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            this.isFullscreen = false;
            return;
          }
        };
      }
    }
  }
});

/***/ }),

/***/ 1291:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "site-navbar navbar navbar-expand-md navbar-dark flex-md-nowrap p-0"
    },
    [
      _c(
        "router-link",
        {
          staticClass:
            "navbar-brand col-md-4 col-lg-3 mr-0 d-flex flex-row align-items-center text-uppercase",
          attrs: { to: { name: "home" }, exact: "" }
        },
        [
          _c("img", {
            staticClass: "mr-2",
            attrs: { src: "/images/logo.png", width: "36", height: "36" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Tanara")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "btn-group d-none d-md-inline-flex mx-3",
          attrs: { role: "group" }
        },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-dark",
              attrs: { type: "button" },
              on: { click: _vm.toggleSidebar }
            },
            [
              _c("i", {
                staticClass: "fa fa-exchange",
                attrs: { "aria-hidden": "true" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-dark",
              attrs: { type: "button" },
              on: { click: _vm.toggleFullscreen }
            },
            [
              _c("i", {
                staticClass: "fa fa-arrows-alt",
                attrs: { "aria-hidden": "true" }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "navbar-nav d-none d-md-block px-3 ml-auto" },
        [
          _vm.user
            ? _c("li", { staticClass: "nav-item dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link dropdown-toggle",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        src: _vm.user.photo_url,
                        width: "20",
                        height: "20",
                        alt: ""
                      }
                    }),
                    _vm._v(" " + _vm._s(_vm.user.name) + "\n      ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-menu dropdown-menu-right" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item",
                        attrs: { to: { name: "user.profile" } }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-user fa-fw",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(" Profile")
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item",
                        attrs: { to: { name: "user.settings" } }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-cogs fa-fw",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(" Settings")
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item pl-3",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.logout($event)
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-sign-out fa-fw",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(" Logout\n        ")
                      ]
                    )
                  ],
                  1
                )
              ])
            : [
                _c("li", { staticClass: "nav-item dropdown" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "dropdown-menu dropdown-menu-right" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "dropdown-item",
                          attrs: { to: { name: "login" } }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-sign-in fa-fw",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" Log In")
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-divider" }),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "dropdown-item",
                          attrs: { to: { name: "register" } }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-user-plus fa-fw",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" Register")
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]
        ],
        2
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
      "a",
      {
        staticClass: "nav-link dropdown-toggle",
        attrs: {
          href: "#",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-user-circle fa-fw",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" User\n        ")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cd7fb372", module.exports)
  }
}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(1290)
/* template */
var __vue_template__ = __webpack_require__(1291)
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
Component.options.__file = "resources\\assets\\js\\components\\Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cd7fb372", Component.options)
  } else {
    hotAPI.reload("data-v-cd7fb372", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});