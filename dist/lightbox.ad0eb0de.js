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
})({"../build/lightbox.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = function (modules, cache, entry, globalName) {
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
        } // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.


        if (previousRequire) {
          return previousRequire(name, true);
        } // Try the node require function if it exists.


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

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
      module.exports = mainExports; // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      }); // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  } // Override the current require with this new one


  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
}({
  "utils.ts": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.debounce = void 0;

    function debounce(callback, delay) {
      var timer;
      return function () {
        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
          callback.apply(context, args);
        }, delay);
      };
    }

    exports.debounce = debounce;
  }, {}],
  "Lightbox.ts": [function (require, module, exports) {
    "use strict";

    var __assign = this && this.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var __generator = this && this.__generator || function (thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var utils_1 = require("./utils");

    var Lightbox = function () {
      function Lightbox(options) {
        if (options === void 0) {
          options = {};
        }

        this._groups = {};
        this._image = null;
        this._current = {
          group: '',
          index: -1
        };
        this.options = __assign(__assign({}, Lightbox.default_options), options);
        this.elements = document.querySelectorAll(this.options.selector);

        if (this.elements.length === 0) {
          return;
        }

        this.hide = this.hide.bind(this);
        this.onEscape = this.onEscape.bind(this);
        this.onResize = this.onResize.bind(this);
        this.attachEvents();
      }

      Object.defineProperty(Lightbox, "default_options", {
        get: function get() {
          return {
            selector: '.lightbox--link',
            lightbox_class: 'lightbox',
            lightbox_inner_class: 'lightbox--inner',
            lightbox_legend_class: 'lightbox--legend',
            lightbox_visible_class: 'visible',
            image_loading_class: 'is-loading',
            prevent_scroll: true,
            prevent_scroll_class: 'prevent-scroll',
            prevent_scroll_element: document.body,
            inner_offset: 30,
            nav: true,
            nav_prev_class: 'lightbox--prev',
            nav_next_class: 'lightbox--next'
          };
        },
        enumerable: false,
        configurable: true
      });

      Lightbox.prototype.show = function (src) {
        var _this = this;

        this._lightbox.classList.add(this.options.image_loading_class);

        this._image = new Image();

        this._image.onload = function () {
          return __awaiter(_this, void 0, Promise, function () {
            var _this = this;

            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.setInnerBoundings()];

                case 1:
                  _a.sent();

                  this._lightbox_inner.style.backgroundImage = "url('" + this._image.src + "')";
                  setTimeout(function () {
                    _this._lightbox.classList.remove(_this.options.image_loading_class);
                  }, 300);
                  return [2];
              }
            });
          });
        };

        this._image.src = src;

        if (this.options.prevent_scroll) {
          this.options.prevent_scroll_element.classList.add(this.options.prevent_scroll_class);
        }

        this._lightbox.classList.add(this.options.lightbox_visible_class);
      };

      Lightbox.prototype.hide = function () {
        this._lightbox.classList.remove(this.options.lightbox_visible_class);

        if (this.options.prevent_scroll) {
          this.options.prevent_scroll_element.classList.remove(this.options.prevent_scroll_class);
        }

        this._lightbox_inner.style.backgroundImage = null;
        this._image = null;
        this._current.group = '';
        this._current.index = -1;
        return this;
      };

      Lightbox.prototype.prev = function () {
        var _a = this._current,
            group = _a.group,
            index = _a.index;

        var item = this._groups[group][index - 1] || this._groups[group][Object.keys(this._groups[group]).length - 1];

        this.hide().show(item.src);
        return this;
      };

      Lightbox.prototype.next = function () {
        var _a = this._current,
            group = _a.group,
            index = _a.index;
        var item = this._groups[group][index + 1] || this._groups[group][0];
        this.hide().show(item.src);
        return this;
      };

      Lightbox.prototype.destroy = function () {
        for (var group in this._groups) {
          if (this._groups.hasOwnProperty(group)) {
            var entries = Object.values(this._groups[group]);

            if (entries.length > 0) {
              entries.forEach(function (entry) {
                if (entry.lightbox_inner) {
                  entry.lightbox_inner.removeEventListener('click', function (e) {
                    return e.stopPropagation();
                  });
                  entry.lightbox_inner.remove();
                }

                entry.el.removeEventListener('click', entry.event_handler);
              });
            }
          }
        }

        window.removeEventListener('resize', utils_1.debounce(this.onResize, 300));
        window.removeEventListener('keyup', this.onEscape);

        this._lightbox.removeEventListener('click', this.hide);

        this._lightbox.remove();

        this._lightbox = null;
        this._lightbox_inner = null;
        this._image = null;
        this._groups = {};
        this._current.group = '';
        this._current.index = -1;
      };

      Lightbox.prototype.createLightBox = function () {
        var _this = this;

        this._lightbox_inner = document.createElement('div');

        this._lightbox_inner.classList.add(this.options.lightbox_inner_class);

        this._lightbox = document.createElement('div');

        this._lightbox.classList.add(this.options.lightbox_class);

        this._lightbox.appendChild(this._lightbox_inner);

        if (this.options.nav === true) {
          var nav_prev = document.createElement('div');
          var nav_next = document.createElement('div');
          nav_prev.classList.add(this.options.nav_prev_class);
          nav_next.classList.add(this.options.nav_next_class);
          nav_prev.addEventListener('click', function () {
            return _this.prev();
          });
          nav_next.addEventListener('click', function () {
            return _this.next();
          });

          this._lightbox_inner.appendChild(nav_prev);

          this._lightbox_inner.appendChild(nav_next);
        }

        document.body.appendChild(this._lightbox);
      };

      Lightbox.prototype.attachEvents = function () {
        var _this = this;

        window.addEventListener('resize', utils_1.debounce(this.onResize, 300));
        window.addEventListener('keyup', this.onEscape);
        this.createLightBox();
        this.elements.forEach(function (el, index) {
          return __awaiter(_this, void 0, Promise, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.storeElement(el, index)];

                case 1:
                  _a.sent();

                  return [2];
              }
            });
          });
        });
      };

      Lightbox.prototype.createLegend = function (legend) {
        var div = document.createElement('div');
        div.classList.add(this.options.lightbox_legend_class);
        div.innerHTML = legend;

        this._lightbox_inner.appendChild(div);
      };

      Lightbox.prototype.storeElement = function (el, index) {
        return __awaiter(this, void 0, Promise, function () {
          var src, group, event_handler;

          var _this = this;

          return __generator(this, function (_a) {
            src = el.constructor === HTMLImageElement ? el.src : el.dataset.src;
            group = el.dataset.group || 'default';

            if (!this._groups[group]) {
              this._groups[group] = {};
            }

            this._lightbox.addEventListener('click', this.hide);

            this._lightbox_inner.addEventListener('click', function (e) {
              return e.stopPropagation();
            });

            event_handler = function event_handler() {
              _this._current.group = group;
              _this._current.index = index;

              _this.show(src);
            };

            this._groups[group][index] = {
              el: el,
              event_handler: event_handler,
              lightbox: this._lightbox,
              lightbox_inner: this._lightbox_inner,
              src: src
            };
            el.addEventListener('click', event_handler);
            return [2];
          });
        });
      };

      Lightbox.prototype.onEscape = function (e) {
        if (e.key === 'Escape') {
          this.hide();
        }
      };

      Lightbox.prototype.onResize = function () {
        return __awaiter(this, void 0, Promise, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!(this._image !== null)) return [3, 2];
                return [4, this.setInnerBoundings()];

              case 1:
                _a.sent();

                _a.label = 2;

              case 2:
                return [2];
            }
          });
        });
      };

      Lightbox.prototype.setInnerBoundings = function () {
        return __awaiter(this, void 0, Promise, function () {
          var _a, naturalWidth, naturalHeight, ratio, width, height, orientation, inner_offset, offsetWidth, offsetHeight;

          return __generator(this, function (_b) {
            _a = this._image, naturalWidth = _a.naturalWidth, naturalHeight = _a.naturalHeight;
            ratio = this.aspectRatioFit(naturalWidth, naturalHeight, window.innerWidth, window.innerHeight);
            width = ratio.width, height = ratio.height, orientation = ratio.orientation;
            inner_offset = this.options.inner_offset;
            offsetWidth = 0;
            offsetHeight = 0;

            switch (orientation) {
              case 'landscape':
                offsetWidth = inner_offset;
                break;

              case 'portrait':
                offsetHeight = inner_offset;
                break;

              case 'even':
                offsetWidth = inner_offset;
                offsetHeight = inner_offset;
                break;
            }

            this._lightbox_inner.style.width = width - 2 * offsetWidth + "px";
            this._lightbox_inner.style.height = height - 2 * offsetHeight + "px";
            return [2];
          });
        });
      };

      Lightbox.prototype.aspectRatioFit = function (srcWidth, srcHeight, maxWidth, maxHeight) {
        var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
        var orientation = 'even';

        if (srcWidth > srcHeight) {
          orientation = 'landscape';
        } else if (srcWidth < srcHeight) {
          orientation = 'portrait';
        }

        var width = srcWidth * ratio;
        var height = srcHeight * ratio;

        if (width <= maxWidth || height <= maxHeight) {
          orientation = 'even';
        }

        return {
          ratio: ratio,
          width: width,
          height: height,
          orientation: orientation
        };
      };

      return Lightbox;
    }();

    exports.default = Lightbox;

    if (window && document) {
      window['Lightbox'] = Lightbox;
    }
  }, {
    "./utils": "utils.ts"
  }],
  "../node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';
    var OldModule = module.bundle.Module;

    function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
          this._acceptCallbacks.push(fn || function () {});
        },
        dispose: function dispose(fn) {
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
      var ws = new WebSocket(protocol + '://' + hostname + ':' + "36617" + '/');

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
  }, {}]
}, {}, ["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "Lightbox.ts"], null);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45479" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../build/lightbox.js"], null)
//# sourceMappingURL=/lightbox.ad0eb0de.js.map