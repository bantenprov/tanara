webpackJsonp([41],{

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1119)
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
Component.options.__file = "resources\\assets\\js\\components\\views\\DashboardHome.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e170c904", Component.options)
  } else {
    hotAPI.reload("data-v-e170c904", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card mb-3" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("example-echarts-bar-ajax-interactive")],
            1
          )
        ]),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card mb-3" }, [
          _vm._m(4),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("example-chartjs-pie")],
            1
          )
        ]),
        _vm._v(" "),
        _vm._m(5),
        _vm._v(" "),
        _vm._m(6)
      ])
    ]),
    _vm._v(" "),
    _vm._m(7)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4 mb-3" }, [
        _c("div", { staticClass: "card card-media text-white bg-primary" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "media" }, [
              _c("i", {
                staticClass: "fa fa-user fa-card-media-avatar mr-3",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "media-body text-truncate" }, [
                _c("h5", { staticClass: "mt-0" }, [_vm._v("Users")]),
                _vm._v(" "),
                _c("span", [
                  _c("i", {
                    staticClass: "fa fa-dot-circle-o",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" 1500")
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mb-3" }, [
        _c("div", { staticClass: "card card-media text-white bg-success" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "media" }, [
              _c("i", {
                staticClass: "fa fa-comments fa-card-media-avatar mr-3",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "media-body text-truncate" }, [
                _c("h5", { staticClass: "mt-0" }, [_vm._v("Comments")]),
                _vm._v(" "),
                _c("span", [
                  _c("i", {
                    staticClass: "fa fa-dot-circle-o",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" 500")
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mb-3" }, [
        _c("div", { staticClass: "card card-media text-white bg-warning" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "media" }, [
              _c("i", {
                staticClass: "fa fa-calendar fa-card-media-avatar mr-3",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "media-body text-truncate" }, [
                _c("h5", { staticClass: "mt-0" }, [_vm._v("Agenda")]),
                _vm._v(" "),
                _c("span", [
                  _c("i", {
                    staticClass: "fa fa-dot-circle-o",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" 30")
                ])
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
    return _c("div", { staticClass: "card-header" }, [
      _c("i", {
        staticClass: "fa fa-bar-chart",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("\n          Data\n        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("i", {
          staticClass: "fa fa-thumb-tack",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("\n          Featured\n        ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("h5", { staticClass: "card-title" }, [
          _vm._v("Special title treatment")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "card-text" }, [
          _vm._v(
            "With supporting text below as a natural lead-in to additional content."
          )
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "btn btn-primary", attrs: { href: "#" } }, [
          _vm._v("Go somewhere")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("i", {
          staticClass: "fa fa-table",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("\n          Table\n        ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("table", { staticClass: "table mb-0" }, [
          _c("thead", [
            _c("tr", [
              _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")])
            ])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
              _vm._v(" "),
              _c("td", [_vm._v("Muhammad Ibnu Musa Al-Khawarizmi")]),
              _vm._v(" "),
              _c("td", [_vm._v("780–850")])
            ]),
            _vm._v(" "),
            _c("tr"),
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
              _vm._v(" "),
              _c("td", [_vm._v("Abu Ali Al-Husein Ibnu Sina")]),
              _vm._v(" "),
              _c("td", [_vm._v("986-1037")])
            ]),
            _vm._v(" "),
            _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
            _vm._v(" "),
            _c("td", [_vm._v("Abu Nasir Al-Farabi")]),
            _vm._v(" "),
            _c("td", [_vm._v("870-900")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("i", {
        staticClass: "fa fa-pie-chart",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("\n          Data\n        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("i", {
          staticClass: "fa fa-thumb-tack",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("\n          Featured\n        ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "list-group list-group-flush" }, [
        _c(
          "a",
          {
            staticClass:
              "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
            attrs: { href: "#" }
          },
          [
            _vm._v("\n            Cras justo odio\n            "),
            _c("span", { staticClass: "badge badge-primary badge-pill" }, [
              _vm._v("2")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
            attrs: { href: "#" }
          },
          [
            _vm._v("\n            Dapibus ac facilisis in\n            "),
            _c("span", { staticClass: "badge badge-primary badge-pill" }, [
              _vm._v("3")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
            attrs: { href: "#" }
          },
          [
            _vm._v("\n            Morbi leo risus\n            "),
            _c("span", { staticClass: "badge badge-primary badge-pill" }, [
              _vm._v("5")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
            attrs: { href: "#" }
          },
          [
            _vm._v("\n            Porta ac consectetur ac\n            "),
            _c("span", { staticClass: "badge badge-primary badge-pill" }, [
              _vm._v("7")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
            attrs: { href: "#" }
          },
          [
            _vm._v("\n            Vestibulum at eros\n            "),
            _c("span", { staticClass: "badge badge-primary badge-pill" }, [
              _vm._v("11")
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card text-white bg-info mb-3" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("i", {
          staticClass: "fa fa-info-circle",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("\n          Header\n        ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("h5", { staticClass: "card-title" }, [_vm._v("Info card title")]),
        _vm._v(" "),
        _c("p", { staticClass: "card-text" }, [
          _vm._v(
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "carousel slide mb-3",
        attrs: { id: "carouselExampleControls", "data-ride": "carousel" }
      },
      [
        _c("div", { staticClass: "carousel-inner" }, [
          _c("div", { staticClass: "carousel-item active" }, [
            _c("img", {
              staticClass: "d-block w-100",
              attrs: {
                src: "https://placehold.it/800x400/777/eee/?text=First+slide",
                alt: "First slide"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-caption" }, [
              _c("h5", [_vm._v("Title")]),
              _vm._v(" "),
              _c("p", [_vm._v("Description.")]),
              _vm._v(" "),
              _c("p", [
                _c("a", { staticClass: "btn btn-primary" }, [_vm._v("Action")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c("img", {
              staticClass: "d-block w-100",
              attrs: {
                src: "https://placehold.it/800x400/777/eee/?text=Second+slide",
                alt: "Second slide"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-caption" }, [
              _c("h5", [_vm._v("Title")]),
              _vm._v(" "),
              _c("p", [_vm._v("Description.")]),
              _vm._v(" "),
              _c("p", [
                _c("a", { staticClass: "btn btn-success" }, [_vm._v("Action")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c("img", {
              staticClass: "d-block w-100",
              attrs: {
                src: "https://placehold.it/800x400/777/eee/?text=Third+slide",
                alt: "Third slide"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-caption" }, [
              _c("h5", [_vm._v("Title")]),
              _vm._v(" "),
              _c("p", [_vm._v("Description.")]),
              _vm._v(" "),
              _c("p", [
                _c("a", { staticClass: "btn btn-warning" }, [_vm._v("Action")])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "carousel-control-prev",
            attrs: {
              href: "#carouselExampleControls",
              role: "button",
              "data-slide": "prev"
            }
          },
          [
            _c("span", {
              staticClass: "carousel-control-prev-icon",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "carousel-control-next",
            attrs: {
              href: "#carouselExampleControls",
              role: "button",
              "data-slide": "next"
            }
          },
          [
            _c("span", {
              staticClass: "carousel-control-next-icon",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
          ]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e170c904", module.exports)
  }
}

/***/ })

});