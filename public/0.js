webpackJsonp([0],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03a755c4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(908);
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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03a755c4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
                attrs: { to: "/" }
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
                _c("ul", { staticClass: "navbar-nav ml-auto" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/sign-up" } },
                        [
                          _c("i", {
                            staticClass: "fa fa-user-plus",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" Create account")
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "home-header-content" }, [
          _c("h1", { staticClass: "home-header-title" }, [_vm._v("Tanara")]),
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
                    "btn btn-lg btn-light d-block d-sm-inline-block rounded-0 px-5 mx-2 mb-3 mb-sm-0",
                  attrs: { to: "/dashboard" }
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
              _c(
                "router-link",
                {
                  staticClass:
                    "btn btn-lg btn-outline-light d-block d-sm-inline-block rounded-0 px-5 mx-2 mb-3 mb-sm-0",
                  attrs: { to: "/sign-in" }
                },
                [
                  _c("i", {
                    staticClass: "fa fa-sign-in",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" Sign in")
                ]
              )
            ],
            1
          )
        ])
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
    _c("section", { staticClass: "home-section-1" }, [
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
    _c("section", { staticClass: "home-section-2" }, [
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
    _c("section", { staticClass: "home-section-3" }, [
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
      ])
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
        staticClass: "img-fluid",
        attrs: {
          src: "/images/lukisan-syekh-nawawi-al-bantani-oleh-kang-alam.jpg",
          alt: "Syekh Nawawi al-Bantani"
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
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-03a755c4", esExports)
  }
}

/***/ })

});