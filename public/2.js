webpackJsonp([2],{

/***/ 1286:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    }()
  }
});

/***/ }),

/***/ 1287:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "home-header" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "nav",
          {
            staticClass:
              "home-header-navbar navbar navbar-expand-lg navbar-dark bg-transparent"
          },
          [
            _c(
              "router-link",
              {
                staticClass:
                  "navbar-brand d-flex flex-row align-items-center text-uppercase",
                attrs: { to: "/", exact: "" }
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
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "collapse navbar-collapse",
                attrs: { id: "navbar" }
              },
              [
                _c(
                  "ul",
                  { staticClass: "navbar-nav ml-auto" },
                  [
                    _vm.authenticated
                      ? _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link",
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
                              _vm._v(" Logout\n                ")
                            ]
                          )
                        ])
                      : [
                          _c(
                            "li",
                            { staticClass: "nav-item" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
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
                        ]
                  ],
                  2
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "home-header-content d-flex flex-column justify-content-center py-5"
          },
          [
            _c("div", [
              _c("h1", { staticClass: "home-header-title" }, [
                _vm._v("Tanara")
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "mb-0" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-lg btn-light d-block d-sm-inline-block px-5 mx-2 mb-3 mb-sm-0",
                      attrs: { to: { name: "dashboard" } }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-th-large",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" Dashboard")
                    ]
                  ),
                  _vm._v(" "),
                  !_vm.authenticated
                    ? _c(
                        "router-link",
                        {
                          staticClass:
                            "btn btn-lg btn-outline-light d-block d-sm-inline-block px-5 mx-2 mb-3 mb-sm-0",
                          attrs: { to: { name: "login" } }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-sign-in",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" Log In")
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "svg",
        {
          attrs: {
            viewBox: "0 0 1280 70",
            preserveAspectRatio: "none",
            id: "homeHeaderCurve",
            role: "presentation",
            "aria-hidden": "true"
          }
        },
        [_c("polygon", { attrs: { points: "1280 0 1280 70 0 70" } })]
      )
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "home-section home-section-1" }, [
      _vm._m(2),
      _vm._v(" "),
      _c(
        "svg",
        {
          attrs: {
            viewBox: "0 0 1280 70",
            preserveAspectRatio: "none",
            id: "homeSection1Curve",
            role: "presentation",
            "aria-hidden": "true"
          }
        },
        [_c("polygon", { attrs: { points: "1280 0 1280 70 0 70" } })]
      )
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "home-section home-section-2" }, [
      _vm._m(3),
      _vm._v(" "),
      _c(
        "svg",
        {
          attrs: {
            viewBox: "0 0 1280 70",
            preserveAspectRatio: "none",
            id: "homeSection2Curve",
            role: "presentation",
            "aria-hidden": "true"
          }
        },
        [_c("polygon", { attrs: { points: "1280 0 1280 70 0 70" } })]
      )
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "home-section home-section-3" }, [
      _vm._m(4),
      _vm._v(" "),
      _c(
        "svg",
        {
          attrs: {
            viewBox: "0 0 1280 70",
            preserveAspectRatio: "none",
            id: "homeSection3Curve",
            role: "presentation",
            "aria-hidden": "true"
          }
        },
        [_c("polygon", { attrs: { points: "1280 0 1280 70 0 70" } })]
      )
    ]),
    _vm._v(" "),
    _vm._m(5),
    _vm._v(" "),
    _vm._m(6)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbar",
          "aria-controls": "navbar",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "home-header-description mb-5" }, [
      _vm._v(
        "Tanara adalah sebuah kecamatan di Kabupaten Serang, Provinsi Banten, Indonesia. Daerah ini sangat terkenal karena ulama besar, "
      ),
      _c("strong", [_vm._v("Syaikh Nawawi al-Bantani")]),
      _vm._v(
        ", guru bagi para ulama Indonesia dan guru besar di Mekkah, lahir di sini."
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("h2", [_vm._v("Wilayah")]),
      _vm._v(" "),
      _c("p", { staticClass: "lead" }, [
        _vm._v(
          "Terletak disekitar Sungai Cidurian yang bermuara ke Laut Jawa. Pada tahun 2010 wilayah ini terbagi menjadi beberapa desa."
        )
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "home-section-img",
        attrs: {
          src: "https://placehold.it/1200x630/777/eee/?text=IMAGE",
          alt: "Image"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("h2", [_vm._v("Ulama")]),
      _vm._v(" "),
      _c("p", { staticClass: "lead" }, [
        _vm._v("Karena kemasyhurannya, "),
        _c("strong", [_vm._v("Syekh Nawawi al-Bantani")]),
        _vm._v(
          " kemudian dijuluki Sayyid Ulama al-Hijaz (Pemimpin Ulama Hijaz), al-Imam al-Muhaqqiq wa al-Fahhamah al-Mudaqqiq (Imam yang Mumpuni ilmunya), A'yan Ulama al-Qarn al-Ram Asyar li al-Hijrah (Tokoh Ulama Abad 14 Hijriyah), hingga Imam Ulama al-Haramain, (Imam 'Ulama Dua Kota Suci)."
        )
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "home-section-img",
        attrs: {
          src: "https://placehold.it/1200x630/eee/777/?text=IMAGE",
          alt: "Image"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("h2", [_vm._v("Talk Less Do More")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-4 mb-3" }, [
          _c("div", { staticClass: "card text-white bg-primary h-100" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Primary card title")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4 mb-3" }, [
          _c("div", { staticClass: "card text-white bg-success h-100" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Success card title")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4 mb-3" }, [
          _c("div", { staticClass: "card text-white bg-warning h-100" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [
                _vm._v("Info card title")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                )
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "footer" }, [
      _c("div", { staticClass: "container mt-5" }, [
        _c("div", { staticClass: "row mb-4" }, [
          _c("div", { staticClass: "col-md-3 mb-3" }, [
            _c("h4", { staticClass: "footer-title" }, [_vm._v("Title One")]),
            _vm._v(" "),
            _c("ul", { staticClass: "footer-nav" }, [
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3 mb-3" }, [
            _c("h4", { staticClass: "footer-title" }, [_vm._v("Title Two")]),
            _vm._v(" "),
            _c("ul", { staticClass: "footer-nav" }, [
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3 mb-3" }, [
            _c("h4", { staticClass: "footer-title" }, [_vm._v("Title Three")]),
            _vm._v(" "),
            _c("ul", { staticClass: "footer-nav" }, [
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "footer-nav-item" }, [
                _c(
                  "a",
                  { staticClass: "footer-nav-link", attrs: { href: "#" } },
                  [_vm._v("Footer link")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3 mb-3" }, [
            _c("h4", { staticClass: "footer-title" }, [_vm._v("Title Four")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
              )
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "footer" }, [
      _c("div", { staticClass: "container" }, [
        _c("ul", { staticClass: "footer-links text-center" }, [
          _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Link 1")])]),
          _vm._v(" "),
          _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Link 2")])]),
          _vm._v(" "),
          _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Link 3")])]),
          _vm._v(" "),
          _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Link 4")])]),
          _vm._v(" "),
          _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Link 5")])])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "footer-description text-center" }, [
          _c("p", [
            _c("i", {
              staticClass: "fa fa-code",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(" with "),
            _c("i", {
              staticClass: "fa fa-heart",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(" by "),
            _c("a", { attrs: { href: "https://github.com/bantenprov" } }, [
              _vm._v("@bantenprov")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-03a755c4", module.exports)
  }
}

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(1286)
/* template */
var __vue_template__ = __webpack_require__(1287)
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
Component.options.__file = "resources\\assets\\js\\components\\views\\Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03a755c4", Component.options)
  } else {
    hotAPI.reload("data-v-03a755c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});