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
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n#html {\n  background-color: #f4dc26;\n}\n\n.face {\n  margin: 0 auto;\n  width: 300px;\n  height: 300px;\n  transform: translateY(80px);\n}\n.nose {\n  position: relative;\n  top: 145px;\n  left: 50%;\n  width: 100px;\n  border: 10px solid;\n  margin-left: -10px;\n  z-index: 10;\n  width: 0px;\n  height: 0px;\n  border-top-color: black;\n  border-right-color: transparent;\n  border-bottom: none;\n  border-left-color: transparent;\n}\n\n.yuan {\n  position: absolute;\n  top: -16px;\n  left: -10px;\n  width: 20px;\n  height: 6px;\n  border-radius: 50%;\n  border-radius: 14px 14px 0 0;\n  background: black;\n}\n.eye {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  background-color: #232222;\n  border-radius: 50%;\n}\n\n.eye.right {\n  transform: translateX(-10px);\n}\n.eye.left {\n  transform: translateX(110px);\n}\n.shine {\n  position:absolute;\n  right: 10px; \n  top: 20px;\n  width: 40px;\n  height: 40px;\n  margin: 0 auto;\n  background-color: #FFF;\n  border-radius: 50%;\n}\n\n.shine.left {\n  transform: translateX(-40px);\n}\n\n.blink {\n  visibility: hidden;\n  position: absolute;\n  width: 100px;  \n  height: 50px;\n  border-radius: 50%;\n  border-top: 10px solid #232222;\n  top: 30px; left: -40px;\n}\n\n.blush {\n  position: absolute;\n  top: 0;\n  width: 80px;\n  height:80px;\n  border-radius: 50%;\n  margin: 120px; \n  background-color: #e92929;\n  opacity: 0.5;\n}\n\n.blush.left {\n  transform: translateX(-155px);\n}\n\n.blush.right {\n  transform: translateX(135px);\n}\n\n.mouth {\n  position: absolute;\n  top: 200px; \n  left: 90px;\n  width: 130px;  \n  height: 20px;\n  border-radius: 0% 0% 100% 100%;\n  border-bottom: 4px solid;\n}\n\n.face:hover > .blink {\n  visibility: visible;\n}\n.face:hover > .eye.right {\n  visibility: hidden;\n}\n@keyframes wave {\n  0%{\n    transform: rotate(0deg);\n  }\n  33%{\n    transform: rotate(5deg);\n  }\n  66%{\n    transform: rotate(-5deg);\n  }\n  100%{\n    transform: rotate(0deg);\n  }\n}\n.nose:hover{\n  transform-origin: center bottom;\n  animation: wave 300ms infinite linear;\n}\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 25,
  id: undefined,
  ui: {
    demo: document.querySelector('#demo'),
    style: document.querySelector('#style')
  },
  events: {
    "#btnPause": 'pause',
    "#btnPlay": 'play',
    "#btnSlow": 'slow',
    "#btnNormal": 'normal',
    "#btnFast": 'fast'
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.style.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.style.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    // window.clearInterval(id)
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 50;
    player.play();
  },
  norm: function norm() {
    player.pause();
    player.time = 25;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.ed1344b4.js.map