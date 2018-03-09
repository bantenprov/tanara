webpackJsonp([0],{

/***/ 1292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_js__ = __webpack_require__(1293);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      menuitems: __WEBPACK_IMPORTED_MODULE_0__menu_js__["a" /* default */]
    };
  }
});

/***/ }),

/***/ 1293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// childType: 'collapse|dropdown|dropup'

var MenuItems = [{
  name: 'Home',
  link: '/',
  icon: 'fa fa-home'
}, {
  name: 'Dashboard',
  icon: 'fa fa-dashboard',
  childType: 'collapse',
  childItem: [{
    name: 'Dashboard',
    link: '/dashboard',
    icon: 'fa fa-angle-double-right'
  }, {
    name: 'Entity',
    link: '/dashboard/entity',
    icon: 'fa fa-angle-double-right'
  }]
}, {
  name: 'Admin',
  icon: 'fa fa-lock',
  childType: 'collapse',
  childItem: [{
    name: 'Dashboard',
    icon: 'fa fa-angle-double-right',
    child: [{
      name: 'Dashboard',
      link: '/admin/dashboard',
      icon: 'fa fa-angle-right'
    }]
  }, {
    name: 'Contents',
    link: '/admin/contents',
    icon: 'fa fa-angle-double-right'
  }, {
    name: 'Configurations',
    link: '/admin/configurations',
    icon: 'fa fa-angle-double-right'
  }, {
    name: 'Reports',
    icon: 'fa fa-angle-double-right',
    child: [{
      name: 'Reports',
      link: '/admin/reports',
      icon: 'fa fa-angle-right'
    }, {
      name: 'System reports',
      link: '/admin/reports/system-reports',
      icon: 'fa fa-angle-right'
    }, {
      name: 'System logs',
      link: '/admin/reports/system-logs',
      icon: 'fa fa-angle-right'
    }]
  }]
}, {
  name: 'Demos',
  icon: 'fa fa-play-circle',
  childType: 'collapse',
  childItem: [{
    name: 'Forms',
    icon: 'fa fa-angle-double-right',
    child: [{
      name: 'Vue form',
      link: '/demo/vue-form',
      icon: 'fa fa-angle-right'
    }, {
      name: 'Vue select',
      link: '/demo/vue-select',
      icon: 'fa fa-angle-right'
    }, {
      name: 'Vue date picker',
      link: '/demo/vue-datepicker',
      icon: 'fa fa-angle-right'
    }]
  }, {
    name: 'Charts',
    icon: 'fa fa-angle-double-right',
    child: [{
      name: 'Vue Chart.js',
      link: '/demo/vue-chartjs',
      icon: 'fa fa-angle-right'
    }, {
      name: 'Vue ECharts',
      link: '/demo/vue-echarts',
      icon: 'fa fa-angle-right'
    }]
  }, {
    name: 'Tables',
    icon: 'fa fa-angle-double-right',
    child: [{
      name: 'Vue tables',
      link: '/demo/vue-tables',
      icon: 'fa fa-angle-right'
    }, {
      name: 'Vue table',
      link: '/demo/vue-table',
      icon: 'fa fa-angle-right'
    }]
  }, {
    name: 'Mini toastr',
    link: '/demo/mini-toastr',
    icon: 'fa fa-angle-double-right'
  }, {
    name: 'Vue Sweetalert',
    link: '/demo/vue-sweetalert',
    icon: 'fa fa-angle-double-right'
  }, {
    name: 'Vue Fullscreen',
    link: '/demo/vue-fullscreen',
    icon: 'fa fa-angle-double-right'
  }, {
    name: 'Vue QRcode',
    link: '/demo/vue-qrcode',
    icon: 'fa fa-angle-double-right'
  }, {
    name: 'Vue Form Wizard',
    link: '/demo/vue-form-wizard',
    icon: 'fa fa-angle-double-right'
  }]
}];

/* harmony default export */ __webpack_exports__["a"] = (MenuItems);

/***/ }),

/***/ 1294:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "site-navmenu navmenu navmenu-expand-md navmenu-dark bg-dark h-100 pt-0 pt-md-3 border-top-0 border-right-0 border-left-0"
    },
    [
      _c("div", { staticClass: "d-md-none" }, [
        _c(
          "div",
          {
            staticClass:
              "navmenu-brand text-white py-4 d-flex flex-row flex-nowrap justify-content-start align-items-center",
            staticStyle: { "background-color": "rgba(0,0,0,.1)" }
          },
          [
            _c("router-link", { attrs: { to: { name: "user.profile" } } }, [
              _c("img", {
                staticClass: "mr-3",
                attrs: {
                  src: "/images/avatar.png",
                  width: "64",
                  height: "64",
                  alt: ""
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-100" }, [
              _c("span", [_vm._v("User")]),
              _vm._v(" "),
              _c("hr", {
                staticClass: "my-1",
                staticStyle: { "background-color": "rgba(255,255,255,.1)" }
              }),
              _vm._v(" "),
              _c("ul", { staticClass: "list-inline small mb-0" }, [
                _c(
                  "li",
                  { staticClass: "list-inline-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "text-white",
                        attrs: { to: "/", title: "Sign out", exact: "" }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-sign-out mr-1",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v("Sign out\n            ")
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "navmenu-nav" },
          [
            _c(
              "router-link",
              {
                staticClass: "nav-item nav-item-hover nav-link",
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
            _c(
              "router-link",
              {
                staticClass: "nav-item nav-item-hover nav-link",
                attrs: { to: { name: "user.settings" } }
              },
              [
                _c("i", {
                  staticClass: "fa fa-cogs fa-fw",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" Settings")
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "navmenu-divider" })
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse navmenu-collapse",
          attrs: { id: "AdminSidebar" }
        },
        [
          _c("div", { staticClass: "mt-3 mt-md-0" }),
          _vm._v(" "),
          _c("div", { staticClass: "navmenu-divider d-md-none" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "navmenu-nav" },
            [
              _vm._l(_vm.menuitems, function(item, index) {
                return [
                  !item.childType && !item.childItem
                    ? _c(
                        "router-link",
                        {
                          staticClass: "nav-item nav-item-hover nav-link",
                          attrs: { to: item.link, exact: "" }
                        },
                        [
                          _c("i", {
                            class: item.icon + " fa-fw",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(
                            "\n            " +
                              _vm._s(item.name) +
                              "\n          "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.childType && item.childItem
                    ? [
                        item.childType == "collapse"
                          ? [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "nav-item nav-item-hover nav-link nav-link-collapse collapsed",
                                  attrs: {
                                    href: "javascript:void(0)",
                                    "data-toggle": "collapse",
                                    "data-target":
                                      "#NavmenuNavSidebarCollapse-" + index,
                                    "aria-expanded": "false",
                                    "aria-controls":
                                      "NavmenuNavSidebarCollapse-" + index
                                  }
                                },
                                [
                                  _c("span", [
                                    _c("i", {
                                      class: item.icon + " fa-fw",
                                      attrs: { "aria-hidden": "true" }
                                    }),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(item.name) +
                                        "\n                "
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "collapse",
                                  attrs: {
                                    id: "NavmenuNavSidebarCollapse-" + index
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "py-3",
                                      staticStyle: {
                                        "background-color": "rgba(0,0,0,.25)",
                                        "border-left":
                                          "4px solid rgba(255,255,255,.45)"
                                      }
                                    },
                                    [
                                      _vm._l(item.childItem, function(
                                        child,
                                        i
                                      ) {
                                        return [
                                          !child.child
                                            ? _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "nav-item nav-link nav-link-sm small",
                                                  attrs: {
                                                    to: child.link,
                                                    exact: ""
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    class:
                                                      child.icon + " fa-fw",
                                                    attrs: {
                                                      "aria-hidden": "true"
                                                    }
                                                  }),
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(child.name) +
                                                      "\n                    "
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          child.child
                                            ? [
                                                _c(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "nav-item nav-link nav-link-sm small nav-link-collapse nav-link-collapse-small collapsed",
                                                    attrs: {
                                                      href:
                                                        "javascript:void(0)",
                                                      "data-toggle": "collapse",
                                                      "data-target":
                                                        "#NavmenuNavSidebarCollapse-" +
                                                        index +
                                                        "-" +
                                                        i,
                                                      "aria-expanded": "false",
                                                      "aria-controls":
                                                        "NavmenuNavSidebarCollapse-" +
                                                        index +
                                                        "-" +
                                                        i
                                                    }
                                                  },
                                                  [
                                                    _c("span", [
                                                      _c("i", {
                                                        class:
                                                          child.icon + " fa-fw",
                                                        attrs: {
                                                          "aria-hidden": "true"
                                                        }
                                                      }),
                                                      _vm._v(
                                                        "\n                          " +
                                                          _vm._s(child.name) +
                                                          "\n                        "
                                                      )
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "collapse",
                                                    attrs: {
                                                      id:
                                                        "NavmenuNavSidebarCollapse-" +
                                                        index +
                                                        "-" +
                                                        i
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      [
                                                        _vm._l(
                                                          child.child,
                                                          function(child2) {
                                                            return [
                                                              _c(
                                                                "router-link",
                                                                {
                                                                  staticClass:
                                                                    "nav-item nav-link nav-link-sm small pl-5",
                                                                  attrs: {
                                                                    to:
                                                                      child2.link,
                                                                    exact: ""
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    class:
                                                                      child2.icon +
                                                                      " fa-fw",
                                                                    attrs: {
                                                                      "aria-hidden":
                                                                        "true"
                                                                    }
                                                                  }),
                                                                  _vm._v(
                                                                    "\n                              " +
                                                                      _vm._s(
                                                                        child2.name
                                                                      ) +
                                                                      "\n                            "
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          }
                                                        )
                                                      ],
                                                      2
                                                    )
                                                  ]
                                                )
                                              ]
                                            : _vm._e()
                                        ]
                                      })
                                    ],
                                    2
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        item.childType == "dropdown"
                          ? [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "nav-item nav-item-hover dropdown"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link dropdown-toggle",
                                      attrs: {
                                        href: "javascript:void(0)",
                                        id:
                                          "NavmenuNavSidebarDropdown-" + index,
                                        "data-toggle": "dropdown",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        class: item.icon + " fa-fw",
                                        attrs: { "aria-hidden": "true" }
                                      }),
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(item.name) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "dropdown-menu",
                                      attrs: {
                                        "aria-labelledby":
                                          "NavmenuNavSidebarDropdown-" + index
                                      }
                                    },
                                    [
                                      _vm._l(item.childItem, function(child) {
                                        return [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: child.link,
                                                exact: ""
                                              }
                                            },
                                            [
                                              _c("i", {
                                                class: child.icon + " fa-fw",
                                                attrs: { "aria-hidden": "true" }
                                              }),
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(child.name) +
                                                  "\n                    "
                                              )
                                            ]
                                          )
                                        ]
                                      })
                                    ],
                                    2
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        item.childType == "dropup"
                          ? [
                              _c(
                                "div",
                                {
                                  staticClass: "nav-item nav-item-hover dropup"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link dropdown-toggle",
                                      attrs: {
                                        href: "javascript:void(0)",
                                        id: "NavmenuNavSidebarDropup-" + index,
                                        "data-toggle": "dropdown",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        class: item.icon + " fa-fw",
                                        attrs: { "aria-hidden": "true" }
                                      }),
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(item.name) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "dropdown-menu",
                                      attrs: {
                                        "aria-labelledby":
                                          "NavmenuNavSidebarDropup-" + index
                                      }
                                    },
                                    [
                                      _vm._l(item.childItem, function(child) {
                                        return [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: child.link,
                                                exact: ""
                                              }
                                            },
                                            [
                                              _c("i", {
                                                class: child.icon + " fa-fw",
                                                attrs: { "aria-hidden": "true" }
                                              }),
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(child.name) +
                                                  "\n                    "
                                              )
                                            ]
                                          )
                                        ]
                                      })
                                    ],
                                    2
                                  )
                                ]
                              )
                            ]
                          : _vm._e()
                      ]
                    : _vm._e()
                ]
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "navmenu-divider" }),
          _vm._v(" "),
          _c("h6", { staticClass: "navmenu-header" }, [_vm._v("Text")]),
          _vm._v(" "),
          _vm._m(1)
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navmenu-content navmenu-toggler" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-light btn-block",
          attrs: {
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#AdminSidebar",
            "aria-controls": "AdminSidebar",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation"
          }
        },
        [_vm._v("Toggle navigation")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navmenu-content" }, [
      _c("blockquote", { staticClass: "blockquote text-muted mb-0" }, [
        _c("p", { staticClass: "small mb-0" }, [
          _vm._v("Ideas are cheap, execution is everything.")
        ]),
        _vm._v(" "),
        _c("footer", { staticClass: "blockquote-footer text-muted" }, [
          _vm._v("Chris Sacca")
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
    require("vue-hot-reload-api")      .rerender("data-v-00467796", module.exports)
  }
}

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(1292)
/* template */
var __vue_template__ = __webpack_require__(1294)
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
Component.options.__file = "resources\\assets\\js\\components\\Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00467796", Component.options)
  } else {
    hotAPI.reload("data-v-00467796", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});