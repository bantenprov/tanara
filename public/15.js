webpackJsonp([15],{

/***/ 1274:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(9)
/* script */
var __vue_script__ = __webpack_require__(1321)
/* template */
var __vue_template__ = __webpack_require__(1322)
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
Component.options.__file = "resources\\assets\\js\\components\\views\\DemoVueFullscreen.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e3a0fa9", Component.options)
  } else {
    hotAPI.reload("data-v-1e3a0fa9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1321:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    fullscreen1: function fullscreen1() {
      this.$fullscreen.toggle(this.$el.querySelector('.fullscreen-example-1'), {
        wrap: false,
        callback: this.fullscreenChange
      });
    },
    fullscreen1Change: function fullscreen1Change(fullscreen) {
      this.fullscreen = fullscreen;
    },
    fullscreen2: function fullscreen2() {
      this.$fullscreen.toggle(this.$el.querySelector('.fullscreen-example-2'), {
        wrap: true,
        callback: this.fullscreenChange
      });
    },
    fullscreen2Change: function fullscreen2Change(fullscreen) {
      this.fullscreen = fullscreen;
    }
  },
  data: function data() {
    return {
      fullscreen: false
    };
  }
});

/***/ }),

/***/ 1322:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "fullscreen-example-1 mb-3" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          {
            staticClass:
              "card-header d-flex flex-row align-items-center justify-content-between"
          },
          [
            _c("span", [_vm._v("Short")]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-secondary ml-1",
                attrs: { type: "button" },
                on: { click: _vm.fullscreen1 }
              },
              [
                _c("i", {
                  staticClass: "fa fa-arrows-alt",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" Fullscreen\n        ")
              ]
            )
          ]
        ),
        _vm._v(" "),
        _vm._m(1)
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "fullscreen-example-2 mb-3" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          {
            staticClass:
              "card-header d-flex flex-row align-items-center justify-content-between"
          },
          [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-secondary ml-1",
                attrs: { type: "button" },
                on: { click: _vm.fullscreen2 }
              },
              [
                _c("i", {
                  staticClass: "fa fa-arrows-alt",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" Fullscreen\n        ")
              ]
            )
          ]
        ),
        _vm._v(" "),
        _vm._m(3)
      ])
    ])
  ])
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
            _c("code", [_vm._v("vue-fullscreen")])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("Link: "),
            _c(
              "a",
              {
                staticClass: "alert-link",
                attrs: {
                  href: "https://github.com/mirari/vue-fullscreen",
                  target: "_blank"
                }
              },
              [_vm._v("GitHub")]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("blockquote", { staticClass: "blockquote mb-0" }, [
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
          )
        ]),
        _vm._v(" "),
        _c("footer", { staticClass: "blockquote-footer" }, [
          _vm._v("Someone famous in "),
          _c("cite", { attrs: { title: "Source Title" } }, [
            _vm._v("Source Title")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v("Long ("),
      _c("code", [_vm._v("wrap: true")]),
      _vm._v(")")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("blockquote", { staticClass: "blockquote mb-0" }, [
        _c("h2", [_vm._v("HTML Ipsum Presents")]),
        _vm._v(" "),
        _c("p", [
          _c("strong", [_vm._v("Pellentesque habitant morbi tristique")]),
          _vm._v(
            " senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. "
          ),
          _c("em", [_vm._v("Aenean ultricies mi vitae est.")]),
          _vm._v(
            " Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, "
          ),
          _c("code", [_vm._v("commodo vitae")]),
          _vm._v(
            ", ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. "
          ),
          _c("a", { attrs: { href: "#" } }, [_vm._v("Donec non enim")]),
          _vm._v(" in turpis pulvinar facilisis. Ut felis.")
        ]),
        _vm._v(" "),
        _c("h3", [_vm._v("Header Level 3")]),
        _vm._v(" "),
        _c("ol", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("blockquote", [
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est."
            )
          ])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Header Level 4")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
          ]),
          _vm._v(" "),
          _c("li", [_vm._v("Aliquam tincidunt mauris eu risus.")])
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
    require("vue-hot-reload-api")      .rerender("data-v-1e3a0fa9", module.exports)
  }
}

/***/ })

});