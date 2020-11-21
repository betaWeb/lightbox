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
    exports.getElementSrc = exports.aspectRatioFit = exports.getImageBoundings = exports.debounce = void 0;

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

    function getImageBoundings(image, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var naturalWidth = 0;
      var naturalHeight = 0;
      var offsetWidth = 0;
      var offsetHeight = 0;

      if (image.constructor === HTMLImageElement) {
        naturalWidth = image.naturalWidth;
        naturalHeight = image.naturalHeight;
      } else {
        naturalWidth = image.clientWidth;
        naturalHeight = image.clientHeight;
      }

      var _a = aspectRatioFit(naturalWidth, naturalHeight, window.innerWidth, window.innerHeight),
          width = _a.width,
          height = _a.height,
          orientation = _a.orientation;

      switch (orientation) {
        case 'landscape':
          offsetWidth = offset;
          break;

        case 'portrait':
          offsetHeight = offset;
          break;

        case 'even':
          offsetWidth = offset;
          offsetHeight = offset;
          break;
      }

      return {
        width: width - 2 * offsetWidth,
        height: height - 2 * offsetHeight
      };
    }

    exports.getImageBoundings = getImageBoundings;

    function aspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
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
    }

    exports.aspectRatioFit = aspectRatioFit;

    function getElementSrc(el) {
      return el.constructor === HTMLImageElement ? el.src : el.dataset.src;
    }

    exports.getElementSrc = getElementSrc;
  }, {}],
  "LightboxItem.ts": [function (require, module, exports) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var LightboxGroup_1 = __importDefault(require("./LightboxGroup"));

    var LightboxItem = function () {
      function LightboxItem(_a) {
        var el = _a.el,
            src = _a.src,
            handler = _a.handler,
            legend = _a.legend;
        this.el = null;
        this.src = null;
        this.handler = null;
        this.legend = null;
        this._group = null;
        this._index = null;
        this.el = el;
        this.src = src;
        this.handler = handler || null;
        this.legend = legend || null;
      }

      Object.defineProperty(LightboxItem.prototype, "group", {
        get: function get() {
          return this._group;
        },
        set: function set(group) {
          this._group = group || LightboxGroup_1.default.DEFAULT_NAME;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LightboxItem.prototype, "index", {
        get: function get() {
          return this._index;
        },
        set: function set(index) {
          this._index = index;
        },
        enumerable: false,
        configurable: true
      });

      LightboxItem.prototype.addEvent = function (handler) {
        if (handler) {
          this.handler = handler;
        }

        this.el.addEventListener('click', this.handler);
        return this;
      };

      LightboxItem.prototype.removeEvent = function () {
        this.el.removeEventListener('click', this.handler);
        return this;
      };

      return LightboxItem;
    }();

    exports.default = LightboxItem;
  }, {
    "./LightboxGroup": "LightboxGroup.ts"
  }],
  "LightboxList.ts": [function (require, module, exports) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var LightboxItem_1 = __importDefault(require("./LightboxItem"));

    var LightboxList = function () {
      function LightboxList() {
        this.items = [];
      }

      LightboxList.prototype.add = function (item) {
        if (!(item instanceof LightboxItem_1.default)) {
          item = new LightboxItem_1.default(item);
        }

        this.items.push(item);
        return item;
      };

      LightboxList.prototype.find = function (index) {
        return this.items[index] || null;
      };

      LightboxList.prototype.findBy = function (src) {
        return this.items.find(function (item) {
          return item.src === src;
        }) || null;
      };

      LightboxList.prototype.refresh = function () {
        this.items.forEach(function (item, index) {
          return item.index = index;
        });
      };

      LightboxList.prototype.remove = function (index) {
        var item = this.find(index);

        if (item !== null) {
          this.items.splice(index, 1);
        }

        return item;
      };

      return LightboxList;
    }();

    exports.default = LightboxList;
  }, {
    "./LightboxItem": "LightboxItem.ts"
  }],
  "LightboxGroup.ts": [function (require, module, exports) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var LightboxList_1 = __importDefault(require("./LightboxList"));

    var LightboxGroup = function () {
      function LightboxGroup() {
        this.groups = {};
      }

      LightboxGroup.prototype.all = function () {
        return this.groups;
      };

      LightboxGroup.prototype.has = function (name) {
        return this.groups[name] !== undefined;
      };

      LightboxGroup.prototype.get = function (name) {
        return this.groups[name];
      };

      LightboxGroup.prototype.create = function (name) {
        if (!this.has(name)) {
          this.groups[name] = new LightboxList_1.default();
        }
      };

      LightboxGroup.prototype.addTo = function (name, item) {
        this.create(name);
        this.get(name).add(item);
        return item;
      };

      LightboxGroup.prototype.retrieve = function (name, needle) {
        if (typeof needle === 'string') {
          return this.get(name).findBy(needle);
        }

        return this.get(name).find(needle);
      };

      LightboxGroup.prototype.remove = function (name) {
        delete this.groups[name];
      };

      LightboxGroup.prototype.size = function (name) {
        try {
          return this.get(name).items.length;
        } catch (_a) {
          return 0;
        }
      };

      LightboxGroup.DEFAULT_NAME = "_DEFAULT";
      return LightboxGroup;
    }();

    exports.default = LightboxGroup;
  }, {
    "./LightboxList": "LightboxList.ts"
  }],
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

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var utils_1 = require("./utils");

    var LightboxGroup_1 = __importDefault(require("./LightboxGroup"));

    var LightboxItem_1 = __importDefault(require("./LightboxItem"));

    var Lightbox = function () {
      function Lightbox(options) {
        if (options === void 0) {
          options = {};
        }

        this._groups = null;
        this._lightbox = null;
        this._lightbox_inner = null;
        this._lightbox_legend = null;
        this._image = null;
        this._nav_prev = null;
        this._nav_next = null;
        this._nav_dots = null;
        this._current = null;
        this.options = __assign(__assign({}, Lightbox.default_options), options);
        this.elements = document.querySelectorAll(this.options.selector);

        if (this.elements.length === 0) {
          throw new Error('Lightbox::constructor - no elements found');
        }

        this._groups = new LightboxGroup_1.default();
        this.hide = this.hide.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
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
            nav_prev_class: 'lightbox--nav-prev',
            nav_next_class: 'lightbox--nav-next',
            dots: true,
            nav_dots_class: 'lightbox--nav-dots'
          };
        },
        enumerable: false,
        configurable: true
      });

      Lightbox.prototype.show = function (src, group) {
        var item = this.find(src, group);

        if (item !== null) {
          this.revealImage(item);
        }

        return item;
      };

      Lightbox.prototype.hide = function () {
        this._lightbox.classList.remove(this.options.lightbox_visible_class);

        if (this.options.prevent_scroll) {
          this.options.prevent_scroll_element.classList.remove(this.options.prevent_scroll_class);
        }

        this._lightbox_inner.style.backgroundImage = null;
        this._image = null;
        this.setCurrent(null);
        return this;
      };

      Lightbox.prototype.find = function (src, group) {
        var item = null;

        if (group) {
          item = this._groups.get(group).findBy(src);
        } else {
          var groups = this._groups.all();

          for (var groupName in groups) {
            if (groups.hasOwnProperty(groupName)) {
              item = this._groups.get(groupName).findBy(src);

              if (item !== null) {
                break;
              }
            }
          }
        }

        return item;
      };

      Lightbox.prototype.prev = function () {
        return this.nav(-1);
      };

      Lightbox.prototype.next = function () {
        return this.nav(1);
      };

      Lightbox.prototype.add = function (el) {
        this.storeElement(el);
        return this;
      };

      Lightbox.prototype.remove = function (el) {
        var group = el.dataset.group || LightboxGroup_1.default.DEFAULT_NAME;

        var item = this._groups.retrieve(group, utils_1.getElementSrc(el));

        if (item !== null) {
          this._groups.get(group).remove(item.index);

          if (this._groups.size(group) === 0) {
            this._groups.remove(group);
          } else {
            this._groups.get(group).refresh();
          }

          return item;
        }

        return null;
      };

      Lightbox.prototype.refresh = function (groupName) {
        if (groupName === void 0) {
          groupName = null;
        }

        var altered = {};

        if (groupName === null) {
          var groups = this._groups.all();

          for (var name in groups) {
            if (groups.hasOwnProperty(name)) {
              altered = __assign(__assign({}, altered), this.refreshGroup(name));
            }
          }
        } else {
          altered = __assign(__assign({}, altered), this.refreshGroup(groupName));
        }

        return altered;
      };

      Lightbox.prototype.destroy = function () {
        for (var group in this._groups.all()) {
          if (this._groups.hasOwnProperty(group)) {
            var entries = Object.values(this._groups[group]);

            if (entries.length > 0) {
              entries.forEach(function (entry) {
                entry.removeEvent();
              });
            }
          }
        }

        window.removeEventListener('resize', utils_1.debounce(this.onResize, 300));
        window.removeEventListener('keyup', this.onKeyup);

        this._nav_prev.removeEventListener('click', this.prev);

        this._nav_next.removeEventListener('click', this.next);

        this._lightbox_inner.removeEventListener('click', function (e) {
          return e.stopPropagation();
        });

        this._lightbox_inner.remove();

        this._lightbox.removeEventListener('click', this.hide);

        this._lightbox.remove();

        this._lightbox = null;
        this._lightbox_inner = null;
        this._image = null;
        this._groups = null;
        this._nav_prev = null;
        this._nav_next = null;
        this.setCurrent(null);
      };

      Lightbox.prototype.nav = function (direction) {
        var _a = this._current,
            group = _a.group,
            index = _a.index;

        var count = this._groups.size(group);

        var newIndex = direction < 0 ? index - 1 < 0 ? count : index : index + 1 === count ? -1 : index;

        var item = this._groups.retrieve(group, newIndex + direction);

        if (item !== null) {
          this.goTo(item);
        }

        return this;
      };

      Lightbox.prototype.revealImage = function (item) {
        var _this = this;

        this._lightbox.classList.add(this.options.image_loading_class);

        this._image = new Image();
        this._image.src = item.src;

        this._image.onload = function () {
          _this.setInnerBoundings();

          _this._lightbox_inner.style.backgroundImage = "url('" + _this._image.src + "')";
          setTimeout(function () {
            _this._lightbox.classList.remove(_this.options.image_loading_class);
          }, 300);
        };

        if (this.options.prevent_scroll) {
          this.options.prevent_scroll_element.classList.add(this.options.prevent_scroll_class);
        }

        this._lightbox.classList.add(this.options.lightbox_visible_class);

        this.displayLegend(item.legend);

        if (this.options.dots === true) {
          this._nav_dots.childNodes.forEach(function (dot) {
            dot.classList.toggle('active', parseInt(dot.dataset.index, 10) === item.index);
          });
        }
      };

      Lightbox.prototype.goTo = function (item) {
        this.hide();
        this.setCurrent(item);
        this.revealImage(item);
      };

      Lightbox.prototype.refreshGroup = function (groupName) {
        var _a;

        var _this = this;

        var elements = Array.from(document.querySelectorAll(this.options.selector + "[data-group=\"" + groupName + "\"]"));

        var group = this._groups.get(groupName);

        var items = group.items;
        var added = [];
        var removed = [];

        if (elements.length !== items.length) {
          added = elements.filter(function (el) {
            return !items.map(function (i) {
              return i.src;
            }).includes(utils_1.getElementSrc(el));
          });
          removed = items.filter(function (item) {
            return !elements.map(utils_1.getElementSrc).includes(item.src);
          });
          removed.forEach(function (_a) {
            var index = _a.index;
            return group.remove(index);
          });
          added.forEach(function (el) {
            return _this.storeElement(el);
          });
          group.refresh();
        }

        return _a = {}, _a[groupName] = {
          added: added,
          removed: removed
        }, _a;
      };

      Lightbox.prototype.createLightBox = function () {
        this._lightbox_legend = document.createElement('div');

        this._lightbox_legend.classList.add(this.options.lightbox_legend_class);

        this._lightbox_inner = document.createElement('div');

        this._lightbox_inner.classList.add(this.options.lightbox_inner_class);

        this._lightbox_inner.appendChild(this._lightbox_legend);

        this._lightbox = document.createElement('div');

        this._lightbox.classList.add(this.options.lightbox_class);

        this._lightbox.appendChild(this._lightbox_inner);

        if (this.options.nav === true) {
          this._nav_prev = document.createElement('div');
          this._nav_next = document.createElement('div');

          this._nav_prev.classList.add(this.options.nav_prev_class);

          this._nav_next.classList.add(this.options.nav_next_class);

          this._nav_prev.addEventListener('click', this.prev);

          this._nav_next.addEventListener('click', this.next);

          this._lightbox_inner.appendChild(this._nav_prev);

          this._lightbox_inner.appendChild(this._nav_next);
        }

        if (this.options.dots === true) {
          this._nav_dots = document.createElement('ul');

          this._nav_dots.classList.add(this.options.nav_dots_class);

          this._lightbox.appendChild(this._nav_dots);
        }

        document.body.appendChild(this._lightbox);
      };

      Lightbox.prototype.attachEvents = function () {
        var _this = this;

        window.addEventListener('resize', utils_1.debounce(this.onResize, 300));
        window.addEventListener('keyup', this.onKeyup);
        this.createLightBox();

        this._lightbox.addEventListener('click', this.hide);

        this._lightbox_inner.addEventListener('click', function (e) {
          return e.stopPropagation();
        });

        this.elements.forEach(function (el) {
          return __awaiter(_this, void 0, Promise, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.storeElement(el)];

                case 1:
                  _a.sent();

                  return [2];
              }
            });
          });
        });
      };

      Lightbox.prototype.storeElement = function (el) {
        var _this = this;

        var src = utils_1.getElementSrc(el);
        var group = el.dataset.group || LightboxGroup_1.default.DEFAULT_NAME;
        var legend = el.dataset.legend || null;

        this._groups.create(group);

        var lightboxItem = new LightboxItem_1.default({
          el: el,
          src: src,
          legend: legend
        });
        lightboxItem.group = group;
        lightboxItem.index = this._groups.size(group);
        lightboxItem.addEvent(function () {
          _this.setCurrent(lightboxItem);

          var hideNav = _this._groups.size(group) <= 1;

          _this._nav_prev.classList.toggle('is-hidden', hideNav);

          _this._nav_next.classList.toggle('is-hidden', hideNav);

          if (!hideNav) {
            _this.createNavDots(lightboxItem);
          }

          _this.revealImage(lightboxItem);
        });

        this._groups.addTo(group, lightboxItem);
      };

      Lightbox.prototype.displayLegend = function (legend) {
        this._lightbox_legend.style.display = legend ? '' : 'none';
        this._lightbox_legend.innerHTML = legend || '';
      };

      Lightbox.prototype.createNavDots = function (activeItem) {
        var _this = this;

        this._nav_dots.innerHTML = '';
        var group = this._current.group;

        this._groups.get(group).items.forEach(function (item) {
          var dot = document.createElement('li');
          dot.dataset['index'] = item.index.toString();

          if (item === activeItem) {
            dot.classList.add('active');
          }

          dot.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            _this.goTo(item);
          });

          _this._nav_dots.appendChild(dot);
        });
      };

      Lightbox.prototype.onResize = function () {
        if (this._image !== null) {
          this.setInnerBoundings();
        }
      };

      Lightbox.prototype.onKeyup = function (e) {
        e.preventDefault();

        if (this._current === null) {
          return;
        }

        var hasSiblings = this._groups.size(this._current.group) > 1;

        switch (e.key) {
          case 'ArrowLeft':
            if (hasSiblings) {
              this.prev();
            }

            break;

          case 'ArrowRight':
            if (hasSiblings) {
              this.next();
            }

            break;

          case 'Escape':
            this.hide();
            break;
        }
      };

      Lightbox.prototype.setInnerBoundings = function () {
        var _a = utils_1.getImageBoundings(this._image, this.options.inner_offset),
            width = _a.width,
            height = _a.height;

        this._lightbox_inner.style.width = width + 'px';
        this._lightbox_inner.style.height = height + 'px';
      };

      Lightbox.prototype.setCurrent = function (item) {
        this._current = item;
      };

      return Lightbox;
    }();

    exports.default = Lightbox;

    if (window && document) {
      window['Lightbox'] = Lightbox;
    }
  }, {
    "./utils": "utils.ts",
    "./LightboxGroup": "LightboxGroup.ts",
    "./LightboxItem": "LightboxItem.ts"
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
      var ws = new WebSocket(protocol + '://' + hostname + ':' + "39813" + '/');

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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37853" + '/');

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