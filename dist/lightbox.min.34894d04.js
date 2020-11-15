// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../dist/lightbox.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "UldJ": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var o;
      return function () {
        var r = arguments,
            u = this;
        clearTimeout(o), o = setTimeout(function () {
          e.apply(u, r);
        }, t);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.debounce = void 0, exports.debounce = e;
  }, {}],
  "swik": [function (require, module, exports) {
    "use strict";

    var t = this && this.__assign || function () {
      return (t = Object.assign || function (t) {
        for (var e, i = 1, n = arguments.length; i < n; i++) {
          for (var s in e = arguments[i]) {
            Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
          }
        }

        return t;
      }).apply(this, arguments);
    },
        e = this && this.__awaiter || function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, o) {
        function r(t) {
          try {
            h(n.next(t));
          } catch (e) {
            o(e);
          }
        }

        function l(t) {
          try {
            h(n.throw(t));
          } catch (e) {
            o(e);
          }
        }

        function h(t) {
          var e;
          t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i(function (t) {
            t(e);
          })).then(r, l);
        }

        h((n = n.apply(t, e || [])).next());
      });
    },
        i = this && this.__generator || function (t, e) {
      var i,
          n,
          s,
          o,
          r = {
        label: 0,
        sent: function sent() {
          if (1 & s[0]) throw s[1];
          return s[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: l(0),
        throw: l(1),
        return: l(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;

      function l(o) {
        return function (l) {
          return function (o) {
            if (i) throw new TypeError("Generator is already executing.");

            for (; r;) {
              try {
                if (i = 1, n && (s = 2 & o[0] ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, o[1])).done) return s;

                switch (n = 0, s && (o = [2 & o[0], s.value]), o[0]) {
                  case 0:
                  case 1:
                    s = o;
                    break;

                  case 4:
                    return r.label++, {
                      value: o[1],
                      done: !1
                    };

                  case 5:
                    r.label++, n = o[1], o = [0];
                    continue;

                  case 7:
                    o = r.ops.pop(), r.trys.pop();
                    continue;

                  default:
                    if (!(s = (s = r.trys).length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
                      r = 0;
                      continue;
                    }

                    if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                      r.label = o[1];
                      break;
                    }

                    if (6 === o[0] && r.label < s[1]) {
                      r.label = s[1], s = o;
                      break;
                    }

                    if (s && r.label < s[2]) {
                      r.label = s[2], r.ops.push(o);
                      break;
                    }

                    s[2] && r.ops.pop(), r.trys.pop();
                    continue;
                }

                o = e.call(t, r);
              } catch (l) {
                o = [6, l], n = 0;
              } finally {
                i = s = 0;
              }
            }

            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([o, l]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var n = require("./utils"),
        s = function () {
      function s(e) {
        void 0 === e && (e = {}), this._groups = {}, this._image = null, this.options = t(t({}, s.default_options), e), this.elements = document.querySelectorAll(this.options.selector), 0 !== this.elements.length && (this.hide = this.hide.bind(this), this.onEscape = this.onEscape.bind(this), this.onResize = this.onResize.bind(this), this.attachEvents());
      }

      return Object.defineProperty(s, "default_options", {
        get: function get() {
          return {
            selector: ".lightbox--link",
            lightbox_class: "lightbox",
            lightbox_inner_class: "lightbox--inner",
            lightbox_legend_class: "lightbox--legend",
            lightbox_visible_class: "visible",
            image_loading_class: "is-loading",
            prevent_scroll: !0,
            prevent_scroll_class: "prevent-scroll",
            prevent_scroll_element: document.body,
            inner_offset: 30
          };
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.show = function (t) {
        return e(this, void 0, Promise, function () {
          var n = this;
          return i(this, function (s) {
            return this._lightbox.classList.add(this.options.image_loading_class), this._image = new Image(), this._image.onload = function () {
              return e(n, void 0, void 0, function () {
                var t = this;
                return i(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.setInnerBoundings()];

                    case 1:
                      return e.sent(), this._lightbox_inner.style.backgroundImage = "url('" + this._image.src + "')", setTimeout(function () {
                        t._lightbox.classList.remove(t.options.image_loading_class);
                      }, 300), [2];
                  }
                });
              });
            }, this._image.src = t, this.options.prevent_scroll && this.options.prevent_scroll_element.classList.add(this.options.prevent_scroll_class), this._lightbox.classList.add(this.options.lightbox_visible_class), [2];
          });
        });
      }, s.prototype.hide = function () {
        this._lightbox.classList.remove(this.options.lightbox_visible_class), this.options.prevent_scroll && this.options.prevent_scroll_element.classList.remove(this.options.prevent_scroll_class), this._lightbox_inner.style.backgroundImage = null, this._image = null, this._lightbox.remove();
      }, s.prototype.destroy = function () {
        var t = this;

        for (var e in this._groups) {
          if (this._groups.hasOwnProperty(e)) {
            var i = Array.from(this._groups[e].entries());
            i.length > 0 && i.forEach(function (e) {
              var i = e[0],
                  n = e[1],
                  s = n.event_handler,
                  o = n.lightbox,
                  r = n.lightbox_inner;
              r && (r.removeEventListener("click", function (t) {
                return t.stopPropagation();
              }), r.remove()), o && (o.removeEventListener("click", t.hide), o.remove()), i.removeEventListener("click", s);
            });
          }
        }

        window.removeEventListener("resize", n.debounce(this.onResize, 300)), window.removeEventListener("keyup", this.onEscape), this._lightbox = null, this._lightbox_inner = null, this._image = null, this._groups = {};
      }, s.prototype.attachEvents = function () {
        var t = this;
        window.addEventListener("resize", n.debounce(this.onResize, 300)), window.addEventListener("keyup", this.onEscape), this.elements.forEach(function (n) {
          return e(t, void 0, Promise, function () {
            var t,
                s,
                o = this;
            return i(this, function (r) {
              for (s in t = function t(_t) {
                return e(o, void 0, void 0, function () {
                  return i(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.onElementClick(n)];

                      case 1:
                        return [2, t.sent()];
                    }
                  });
                });
              }, n.addEventListener("click", t), this._groups) {
                this._groups.hasOwnProperty(s) && this._groups[s].set(n, {
                  event_handler: t
                });
              }

              return [2];
            });
          });
        });
      }, s.prototype.createLightBox = function () {
        this._lightbox_inner = document.createElement("div"), this._lightbox_inner.classList.add(this.options.lightbox_inner_class), this._lightbox = document.createElement("div"), this._lightbox.classList.add(this.options.lightbox_class), this._lightbox.appendChild(this._lightbox_inner), document.body.appendChild(this._lightbox);
      }, s.prototype.createLegend = function (t) {
        var e = document.createElement("div");
        e.classList.add(this.options.lightbox_legend_class), e.innerHTML = t, this._lightbox_inner.appendChild(e);
      }, s.prototype.onElementClick = function (n) {
        return e(this, void 0, Promise, function () {
          var e, s, o, r, l, h;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return e = n.constructor === HTMLImageElement ? n.src : n.dataset.src, s = n.dataset.group || "default", this._groups[s] || (this._groups[s] = new Map()), this._groups[s].has(n) ? (r = this._groups[s].get(n), l = r.lightbox_inner, h = r.lightbox, this._lightbox = h, this._lightbox_inner = l, document.body.appendChild(this._lightbox)) : (o = n.dataset.legend || null, this.createLightBox(), this._lightbox.addEventListener("click", this.hide), this._lightbox_inner.addEventListener("click", function (t) {
                  return t.stopPropagation();
                }), null !== o && this.createLegend(o), this._groups[s].set(n, t(t({}, this._groups[s].get(n)), {
                  lightbox: this._lightbox,
                  lightbox_inner: this._lightbox_inner
                }))), [4, this.show(e)];

              case 1:
                return i.sent(), [2];
            }
          });
        });
      }, s.prototype.onEscape = function (t) {
        "Escape" === t.key && this.hide();
      }, s.prototype.onResize = function () {
        return e(this, void 0, Promise, function () {
          return i(this, function (t) {
            switch (t.label) {
              case 0:
                return null === this._image ? [3, 2] : [4, this.setInnerBoundings()];

              case 1:
                t.sent(), t.label = 2;

              case 2:
                return [2];
            }
          });
        });
      }, s.prototype.setInnerBoundings = function () {
        return e(this, void 0, Promise, function () {
          var t, e, n, s, o, r, l, h, a, c;
          return i(this, function (i) {
            switch (t = this._image, e = t.naturalWidth, n = t.naturalHeight, s = this.aspectRatioFit(e, n, window.innerWidth, window.innerHeight), o = s.width, r = s.height, l = s.orientation, h = this.options.inner_offset, a = 0, c = 0, l) {
              case "landscape":
                a = h;
                break;

              case "portrait":
                c = h;
                break;

              case "even":
                a = h, c = h;
            }

            return this._lightbox_inner.style.width = o - 2 * a + "px", this._lightbox_inner.style.height = r - 2 * c + "px", [2];
          });
        });
      }, s.prototype.aspectRatioFit = function (t, e, i, n) {
        var s = Math.min(i / t, n / e),
            o = "even";
        t > e ? o = "landscape" : t < e && (o = "portrait");
        var r = t * s,
            l = e * s;
        return (r <= i || l <= n) && (o = "even"), {
          ratio: s,
          width: r,
          height: l,
          orientation: o
        };
      }, s;
    }();

    exports.default = s, window && document && (window.Lightbox = s);
  }, {
    "./utils": "UldJ"
  }],
  "Focm": [function (require, module, exports) {
    "use strict";

    var e = t(require("./src/Lightbox"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    globalThis.Lightbox = e.default;
  }, {
    "./src/Lightbox": "swik"
  }]
}, {}, ["Focm"], null);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43891" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../dist/lightbox.min.js"], null)
//# sourceMappingURL=/lightbox.min.34894d04.js.map