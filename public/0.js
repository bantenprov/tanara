webpackJsonp([0],{

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_js__ = __webpack_require__(1116);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      menuitems: __WEBPACK_IMPORTED_MODULE_0__menu_js__["a" /* default */]
    };
  }
});

/***/ }),

/***/ 1116:
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
  name: 'Charts demo',
  icon: 'fa fa-bar-chart',
  childType: 'collapse',
  childItem: [{
    name: 'Chart.js',
    link: '/demo/chartjs',
    icon: 'fa fa-angle-double-right'
  }, {
    name: 'ECharts',
    link: '/demo/echarts',
    icon: 'fa fa-angle-double-right'
  }]
}, {
  name: 'Tables demo',
  icon: 'fa fa-table',
  childType: 'collapse',
  childItem: [{
    name: 'Vue tables',
    link: '/demo/vue-tables',
    icon: 'fa fa-angle-double-right'
  }]
}, {
  name: 'Admin',
  icon: 'fa fa-lock',
  childType: 'collapse',
  childItem: [{
    name: 'Dashboard',
    link: '/admin',
    icon: 'fa fa-angle-double-right'
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
}];

/* harmony default export */ __webpack_exports__["a"] = (MenuItems);

/***/ }),

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "navmenu navmenu-expand-md navmenu-dark bg-dark h-100 pt-0 border-top-0 border-right-0 border-left-0"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "navmenu-brand bg-info text-white py-4 d-flex flex-row flex-nowrap justify-content-start align-items-center"
        },
        [
          _c("router-link", { attrs: { to: "/user/profile" } }, [
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
            _c("hr", { staticClass: "my-1" }),
            _vm._v(" "),
            _c("ul", { staticClass: "list-inline mb-0" }, [
              _c(
                "li",
                { staticClass: "list-inline-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "text-white",
                      attrs: { to: "/user/profile", title: "Profile" }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-home",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "list-inline-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "text-white",
                      attrs: {
                        to: "/user/change-password",
                        title: "Change Password"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-key",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "list-inline-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "text-white",
                      attrs: { to: "/user/settings", title: "Settings" }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-cog",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
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
                        staticClass: "fa fa-sign-out",
                        attrs: { "aria-hidden": "true" }
                      })
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
              attrs: { to: "/user/profile" }
            },
            [
              _c("i", {
                staticClass: "fa fa-user mr-2",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" Profile")
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass:
                "nav-item nav-item-hover nav-link d-flex align-items-center justify-content-between",
              attrs: { to: "/user/notifications" }
            },
            [
              _c("span", [
                _c("i", {
                  staticClass: "fa fa-bell mr-2",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v("\n        Notifications\n      ")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "badge badge-info" }, [_vm._v("10")])
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass:
                "nav-item nav-item-hover nav-link d-flex align-items-center justify-content-between",
              attrs: { to: "/user/messages" }
            },
            [
              _c("span", [
                _c("i", {
                  staticClass: "fa fa-envelope mr-2",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v("\n        Messages\n      ")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "badge badge-info" }, [_vm._v("15")])
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "nav-item nav-item-hover nav-link",
              attrs: { to: "/user/change-password" }
            },
            [
              _c("i", {
                staticClass: "fa fa-key mr-2",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" Change password")
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "nav-item nav-item-hover nav-link",
              attrs: { to: "/user/settings" }
            },
            [
              _c("i", {
                staticClass: "fa fa-cogs mr-2",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" Settings")
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "nav-item nav-item-hover nav-link",
              attrs: { to: "/", exact: "" }
            },
            [
              _c("i", {
                staticClass: "fa fa-sign-out mr-2",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" Sign out")
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "navmenu-divider" }),
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
          _c("h6", { staticClass: "navmenu-header" }, [_vm._v("Navs")]),
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
                            class: item.icon + " mr-2",
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
                                      class: item.icon + " mr-2",
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
                                      staticStyle: {
                                        "border-left": "4px solid #eee"
                                      }
                                    },
                                    [
                                      _vm._l(item.childItem, function(child) {
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
                                                    class: child.icon + " mr-2",
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
                                                        "#NavmenuNavSidebarCollapse2-" +
                                                        index,
                                                      "aria-expanded": "false",
                                                      "aria-controls":
                                                        "NavmenuNavSidebarCollapse2-" +
                                                        index
                                                    }
                                                  },
                                                  [
                                                    _c("span", [
                                                      _c("i", {
                                                        class:
                                                          child.icon + " mr-2",
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
                                                        "NavmenuNavSidebarCollapse2-" +
                                                        index
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticStyle: {
                                                          "border-left":
                                                            "6px solid #007bff"
                                                        }
                                                      },
                                                      [
                                                        _vm._l(
                                                          child.child,
                                                          function(child2) {
                                                            return [
                                                              _c(
                                                                "router-link",
                                                                {
                                                                  staticClass:
                                                                    "nav-item nav-link nav-link-sm small",
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
                                                                      " mr-2",
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
                                        class: item.icon + " mr-2",
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
                                                class: child.icon + " mr-2",
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
                                        class: item.icon + " mr-2",
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
                                                class: child.icon + " mr-2",
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
          _c("h6", { staticClass: "navmenu-header" }, [_vm._v("Form")]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "navmenu-divider" }),
          _vm._v(" "),
          _c("h6", { staticClass: "navmenu-header" }, [_vm._v("Button")]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "navmenu-divider" }),
          _vm._v(" "),
          _c("h6", { staticClass: "navmenu-header" }, [_vm._v("Text")]),
          _vm._v(" "),
          _vm._m(3)
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
      _c("form", [
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "text",
            placeholder: "Search for...",
            "aria-label": "Search for..."
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "navmenu-content d-flex flex-wrap flex-column" },
      [
        _c("div", { staticClass: "btn-group" }, [
          _c(
            "a",
            { staticClass: "btn btn-secondary w-100", attrs: { href: "#" } },
            [_vm._v("Action One")]
          ),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "btn btn-secondary w-100", attrs: { href: "#" } },
            [_vm._v("Action Two")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navmenu-content" }, [
      _c("blockquote", { staticClass: "blockquote text-white mb-0" }, [
        _c("p", { staticClass: "small mb-0" }, [
          _vm._v("Ideas are cheap, execution is everything.")
        ]),
        _vm._v(" "),
        _c("footer", { staticClass: "blockquote-footer text-light" }, [
          _vm._v("Chris Sacca")
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
    require("vue-hot-reload-api")      .rerender("data-v-00467796", esExports)
  }
}

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_es2015_modules_false_node_modules_vue_loader_lib_selector_type_script_index_0_Sidebar_vue__ = __webpack_require__(1110);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00467796_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sidebar_vue__ = __webpack_require__(1117);
var disposed = false
var normalizeComponent = __webpack_require__(19)
/* script */


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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_es2015_modules_false_node_modules_vue_loader_lib_selector_type_script_index_0_Sidebar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00467796_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sidebar_vue__["a" /* default */],
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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});