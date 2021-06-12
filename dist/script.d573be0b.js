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
})({"js/script.js":[function(require,module,exports) {
// ---------------scroll speed-------------
//-------------------------------------
function checkScroll() {
  if ($(window).scrollTop() >= 300) {
    $('.navbar').addClass('solid');
  } else {
    $('.navbar').removeClass('solid');
  }
}

$(document).ready(function () {
  checkScroll();
  $(window).scroll(checkScroll);
  $('.navbar-toggler').click(function () {
    if ($(window).scrollTop() <= 300) {
      $('nav.navbar').toggleClass('solid-toggle');
    }
  });
}); // hiding title when scroll

$(document).ready(function () {
  $(window).scroll(function () {
    $('.title').css('opacity', 1 - $(window).scrollTop() / 200);
  });
}); // remove attributes based on screen size

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('.navbar-toggler').addClass('collapsed');
  $('#navbarResponsive').removeClass('show');
  setTimeout(function () {
    $('nav.navbar').removeClass('solid-toggle');
  }, 400);
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 0); //scroll speed
}); // -------------LIGHTBOX IMAGE GALLARY--------------

$(document).ready(function () {
  lightbox.option({
    'resizeDuration': 600,
    'wrapAround': true,
    'imageFadeDuration': 600
  });
}); // -----------------CLIENTS CAROUSEL-----------------

$(document).ready(function () {
  //when document(DOM) loads completely
  $('#clients-carousel').owlCarousel({
    //owlCarousel settings
    autoplay: true,
    //set to false to turn off autoplay and only use nav
    autoplayHoverPause: true,
    //set to false to prevent pausing on hover
    loop: true,
    //set to false to stop carousel after all slides shown
    autoplayTimeout: 8000,
    //time between transitions
    smartSpeed: 1600,
    //transition speed
    dotsSpeed: 1000,
    //transition speed when using dots/buttons
    responsive: {
      //set number of items shown per screen width
      0: {
        items: 1 //0px width and up display 1 item

      },
      768: {
        items: 2 //768px width and up display 2 items

      }
    }
  });
});
/*========== MEET THE TEAM CAROUSEL ==========*/

$(document).ready(function () {
  //when document(DOM) loads completely
  $('#team-carousel').owlCarousel({
    //owlCarousel settings
    autoplay: true,
    //set to false to turn off autoplay and only use nav
    autoplayHoverPause: true,
    //set to false to prevent pausing on hover
    loop: true,
    //set to false to stop carousel after all slides shown
    autoplayTimeout: 8000,
    //time between transitions
    smartSpeed: 1200,
    //transition speed
    dotsSpeed: 1000,
    //transition speed when using dots/buttons
    responsive: {
      //set number of items shown per screen width
      0: {
        items: 1 //0px width and up display 1 item

      },
      768: {
        items: 2 //768px width and up display 2 items

      },
      992: {
        items: 3 //992px width and up display 3 items

      }
    }
  });
});
/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.top-scroll').fadeIn();
    } else {
      $('.top-scroll').fadeOut();
    }
  });
});
/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css

$(function () {
  // a self calling function
  function onScrollInit(items, trigger) {
    // a custom made function
    items.each(function () {
      //for every element in items run function
      var osElement = $(this),
          //set osElement to the current
      osAnimationClass = osElement.attr('data-animation'),
          //get value of attribute data-animation type
      osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time

      osElement.css({
        //change css of element
        '-webkit-animation-delay': osAnimationDelay,
        //for safari browsers
        '-moz-animation-delay': osAnimationDelay,
        //for mozilla browsers
        'animation-delay': osAnimationDelay //normal

      });
      var osTrigger = trigger ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

      osTrigger.waypoint(function () {
        //scroll upwards and downwards
        osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
      }, {
        triggerOnce: true,
        //only once this animation should happen
        offset: '70%' // animation should happen when the element is 70% below from the top of the browser window

      });
    });
  }

  onScrollInit($('.os-animation')); //function call with only items

  onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});
/*========== CONTACT FORM INPUT VALIDATION ==========*/
//Original Resource: https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form

$(function () {
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator
  $('#contact-form').validator(); // when the form is submitted

  $('#contact-form').on('submit', function (e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "contact/contact.php"; // POST values in the background the the script URL

      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function success(data) {
          // data = JSON object that contact.php returns
          // we recieve the type of the message: success x danger and apply it to the
          var messageAlert = 'alert-' + data.type;
          var messageText = data.message; // let's compose Bootstrap alert box HTML

          var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>'; // If we have messageAlert and messageText

          if (messageAlert && messageText) {
            // inject the alert to .messages div in our form
            $('#contact-form').find('.messages').html(alertBox); // empty the form

            $('#contact-form')[0].reset();
          }
        }
      });
      return false;
    }
  });
});
},{}],"../../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36389" + '/');

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
},{}]},{},["../../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map