/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3000/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _abai = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var Snap = __webpack_require__(8); // alert('test');


(function () {
  // svg
  var w = document.body.clientWidth,
      h = document.body.clientHeight;
  var paper = Snap(w, h);
  var cx = w / 2,
      cy = h / 2;
  var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
    fill: "none",
    stroke: "#fff",
    strokeWidth: 5
  }).toPattern(0, 0, 10, 10);
  var p2 = paper.text(0, 0, '0').attr({
    fill: "none",
    stroke: '#fff',
    strokeWidth: 1,
    fontSize: 5
  }).toPattern(0, 0, 10, 1);
  var word = paper.text(cx, cy, 'soz').attr({
    fill: p,
    fontSize: 60,
    class: 'qara'
  }); // Number

  var logo = paper.text(0, 0, 'QARA').attr({
    fontFamily: 'Monoton',
    fill: '#f00',
    fontSize: 30
  });
  console.log(logo.outerSVG());
  var number = paper.text(cx, cy, "45");
  number.attr({
    fontSize: 250,
    fill: p2,
    class: 'mdm'
  });
  var currentSoz = 0;
  var randomNumber = Math.floor(Math.random() * (46 - 1)) + 1;
  console.log(randomNumber);
  Snap.animate(45, randomNumber, function (value) {
    number.attr({
      text: Math.round(value)
    });
  }, (45 - randomNumber) * 50, function () {
    currentSoz = randomNumber;
    changeText(currentSoz - 1);
    document.body.classList.add('opened');
  });
  copyText();
  document.getElementById('open-nav').addEventListener('click', openNav);
  document.getElementById('info-btn').addEventListener('click', openNav);
  document.querySelector('.navigation').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      currentSoz = e.target.textContent;
      changeText(e.target.textContent - 1);
    }

    document.body.classList.remove('is-menu');
    e.preventDefault();
  });

  function openNav(e) {
    if (!document.body.classList.contains('is-menu')) {
      document.body.classList.add('is-menu');
    }

    e.preventDefault();
  }

  function copyText() {
    var btn = document.querySelector('.copy-btn');
    btn.addEventListener('click', function () {
      if (!btn.classList.contains('active')) {
        btn.classList.add('active');
      }

      var textarea = document.getElementById('text45');
      console.log(textarea.select);
      textarea.select();
      document.execCommand("Copy");
    });
  }

  function changeText(i) {
    document.getElementById('text45').textContent = _abai.default[i];
    document.querySelector('.dropdown').textContent = currentSoz;
  }

  logo.toDataURL("image/png", {
    callback: function callback(data) {
      alert('yes'); // Convert image to 'octet-stream' (Just a download, really)

      var image = data.replace("image/png", "image/octet-stream");
      window.location.href = image;
    }
  });
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js?parser=sugarss!./stylus.sss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js?parser=sugarss!./stylus.sss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "body,html{height:100%;overflow:hidden;font-family:Montserrat,serif}body,body>svg,html{margin:0;background-color:#000}.mdm{mix-blend-mode:normal;dominant-baseline:middle}.mdm,.qara{text-anchor:middle}.container{width:90%;margin:0 auto}@media (min-width:700px){.container{width:80%}}.cd-header{padding:10px 0;z-index:1;color:#fff;position:fixed;left:0;right:0;top:0;min-height:60px;display:flex;justify-content:center}.cd-header .logo{color:#fff;text-decoration:none;font-size:50px;font-family:Monoton;text-transform:uppercase}.cd-header .inner-header{position:absolute;left:5%;top:-100%;right:5%;display:flex;height:100%;transition-delay:.5s;transition:top .8s ease-in;align-items:center}@media (min-width:700px){.cd-header .inner-header{left:10%;right:10%}}.cd-header .inner-header .right-childs{margin-left:auto;display:flex;align-items:center}.cd-header .inner-header .dropdown{font-size:30px;color:#000}.copy-btn{background-color:#444;padding:4px 7px;color:#fff;border:none;border-radius:3px;cursor:copy;font-size:0}@media (min-width:700px){.copy-btn{font-size:18px;background-color:#e91e63}}.copy-btn.active{background-color:#ddd}@media (min-width:700px){.copy-btn svg{display:none}}.is-menu .copy-btn{visibility:hidden}.info-btn{color:dimgrey;margin-left:10px;display:inline-block;width:20px;height:20px;text-align:center;text-decoration:none;border-radius:50%;background-color:#fff}.filters{position:absolute;visibility:hidden}.cd-content{position:absolute;height:100vh;transform:translateY(100%);background-color:#ede7e6;color:#1a2e43;padding-top:60px;overflow:hidden;width:100%}.opened .cd-content{transition:transform .5s ease-out;transform:translateY(0)}.opened .cd-header .inner-header{top:0}.cd-content article{padding:10px 0;max-height:100vh;height:100%}@media (min-width:1000px){.cd-content article{width:60%;padding-top:30px}}.cd-content article textarea{width:100%;min-height:calc(100% - 100px);resize:none;border:none;background:transparent;font-family:Montserrat;font-size:1.3rem;overflow:auto}.navigation{position:absolute;top:0;left:0;background-color:#ccc;color:red;right:0;bottom:0;transform:translateX(-100%);display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:auto}.navigation .nav-menu{padding-top:100px;width:90%;column-count:2}@media (min-width:700px){.navigation .nav-menu{padding-top:20px;column-count:3;width:50%}}.navigation .nav-menu li{display:inline;line-height:1.5}@media (min-width:700px){.navigation .nav-menu li{display:block}}.navigation .nav-menu a{color:#000;cursor:pointer}.navigation .nav-menu a:before{content:\"# \"}.navigation .nav-menu a:after{display:none;content:\" qara soz\"}@media (min-width:700px){.navigation .nav-menu a:after{display:inline}}.navigation .info{max-width:80%}@media (min-width:1000px){.navigation .info{width:60%}}.is-menu .navigation{left:0;transform:translateX(0)}.info-text{color:#fff;background-color:red;display:inline-block;width:20px;height:20px;border-radius:50%;text-align:center;margin-right:7px;vertical-align:middle}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = ["Бұл жасқа келгенше жақсы өткіздік пе, жаман өткіздік пе, әйтеуір бірталай өмірімізді өткіздік: алыстық, жұлыстық, айтыстық, тартыстық - әурешілікті көре-көре келдік. Енді жер ортасы жасқа келдік: қажыдық, жалықтық; қылып жүрген ісіміздің баянсызын, байлаусызын көрдік, бәрі қоршылық екенін білдік. Ал, енді қалған өмірімізді қайтіп, не қылып өткіземіз? Соны таба алмай өзім де қайранмын. Ел бағу? Жоқ, елге бағым жоқ. Бағусыз дертке ұшырайын деген кісі бақпаса, не албыртқан, көңілі басылмаған жастар бағамын демесе, бізді құдай сақтасын! Мал бағу? Жоқ, баға алмаймын. Балалар өздеріне керегінше өздері бағар. Енді қартайғанда қызығын өзің түгел көре алмайтұғын, ұры, залым, тілемсектердің азығын бағып беремін деп, қалған аз ғана өмірімді қор қылар жайым жоқ. Ғылым бағу? Жоқ, ғылым бағарға да ғылым сөзін сөйлесер адам жоқ. Білгеніңді кімге үйретерсің, білмегеніңді кімнен сұрарсың? Елсіз-күнсізде кездемені жайып салып, қолына кезін алып отырғанның не пайдасы бар? Мұңдасып шер тарқатысар кісі болмаған соң, ғылым өзі - бір тез қартайтатұғын күйік. Софылық қылып, дін бағу? Жоқ, ол да болмайды, оған да тыныштық керек. Не көңілде, не көрген күніңде бір тыныштық жоқ, осы елге, осы жерде не қылған софылық? Балаларды бағу? Жоқ, баға алмаймын. Бағар едім, қалайша бағудың мәнісін де білмеймін, не болсын деп бағам, қай елге қосайын, қай харекетке қосайын? Балаларымның өзіне ілгері өмірінің, білімінің пайдасын тыныштықпенен керерлік орын тапқаным жоқ, қайда бар, не қыл дерімді біле алмай отырмын, не бол деп бағам? Оны да ермек қыла алмадым. Ақыры ойладым: осы ойыма келген нәрселерді қағазға жаза берейін, ақ қағаз бен қара сияны ермек қылайын, кімде-кім ішінен керекті сөз тапса, жазып алсын, я оқысын, керегі жоқ десе, өз сөзім өзімдікі дедім де, ақыры осыған байладым, енді мұнан басқа ешбір жұмысым жоқ.","Мен бала күнімде естуші едім, біздің қазақ сартты көрсе, күлуші еді «енеңді ұрайын, кең қолтық, шүлдіреген тәжік, Арқадан үй төбесіне саламын деп, қамыс артқан, бұтадан қорыққан, көз көргенде «әке-үке» десіп, шығып кетсе, қызын боқтасқан, «сарт-сұрт деген осы» деп. Ноғайды көрсе, оны да боқтап күлуші еді: «түйеден қорыққан ноғай, атқа мінсе - шаршап, жаяу жүрсе - демін алады, ноғай дегенше, ноқай десеңші, түкке ыңғайы келмейді, солдат ноғай, қашқын ноғай, башалшік ноғай» деп. Орысқа да күлуші еді: «ауылды көрсе шапқан, жаман сасыр бас орыс»\n\n  Орыс ойына келгенін қылады деген... не айтса соған нанады, «ұзын құлақты тауып бар депті» деп. Сонда мен ойлаушы едім: ей, құдай-ай, бізден басқа халықтың бәрі антұрған, жаман келеді екен, ең тәуір халық біз екенбіз деп, әлгі айтылмыш сөздерді бір үлкен қызық көріп, қуанып күлуші едім\n\n  Енді қарап тұрсам, сарттың екпеген егіні жоқ, шығармаған жемісі жоқ, саудагерінің жүрмеген жері жоқ, қылмаған шеберлігі жоқ. Өзіменен өзі әуре болып, біріменен бірі ешбір шаһары жауласпайды! Орысқа қарамай тұрғанда қазақтың өлісінің ахиреттігін, тірісінің киімін сол жеткізіп тұрды. Әке балаға қимайтұғын малыңды кірелеп сол айдап кетіп тұрды ғой. Орысқа қараған соң да, орыстың өнерлерін бізден олар көп үйреніп кетті. Үлкен байлар да, үлкен молдалар да, ептілік, қырмызылық, сыпайылық - бәрі соларда. Ноғайға қарасам, солдаттыққа да шыдайды, кедейлікке де шыдайды, қазаға да шыдайды, молда, медресе сақтап, дін күтуге де шыдайды. Еңбек қылып, мал табудың да жөнін солар біледі, салтанат, әсем де соларда. Оның малдыларына, құзғын тамағымыз үшін, біріміз жалшы, біріміз қош алушымыз. Біздің ең байымызды: «сәнің шақшы аяғың білән пышыратырға қойған идән түгіл, шық, сасық қазақ», - деп үйінен қуып шығарады. Оның бәрі - бірін-бірі қуып қорболмай, шаруа қуып, өнер тауып, мал тауып, зор болғандық әсері. Орысқа айтар сөз де жоқ, біз құлы, күңі құрлы да жоқпыз. Бағанағы мақтан, бағанағы қуанған, күлген сөздеріміз қайда?","Қазақтың бірінің біріне қаскүнем болмағынын, бірінің тілеуін бірі тілеспейтұғынының, рас сөзі аз болатұғынының, қызметке таласқыш болатұғынының, өздерінің жалқау болатұғынының себебі не? Һәмма ғаламға белгілі данышпандар әлдеқашан байқаған: әрбір жалқау кісі қорқақ, қайратсыз тартады; әрбір қайратсыз қорқақ, мақтаншақ келеді; әрбір мақтаншақ қорқақ, ақылсыз, надан келеді; әрбір ақылсыз надан, арсыз келеді; әрбір арсыз жалқаудан сұрамсақ, өзі тойымсыз, өнерсіз, ешкімге достығы жоқ жандар шығады.\n\n  Мұның бәрі төрт аяқты малды көбейтеміннен басқа ойының жоқтығынан, өзге егін, сауда, өнер, ғылым - солар секілді нәрселерге салынса, бұлай болмас еді. Әрбір мал іздеген малым көп болса, өзімдікі де, балаларым да малды болса екен дейді. Ол мал көбейсе, малшыларға бақтырмақ, өздері етке, қымызға тойып, сұлуды жайлап, жүйрікті байлап отырмақ. Қыстауы тарлық қылса, арызы жеткендік, сыйы өткендік, байлық қызметінен біреудің қыстауын сатып алмақ, ептеп алмақ, тартып алмақ. Ол қыстауынан айырылған және біреуге тиіспек, я болмаса орынсыздығынан елден кетпек - әр қазақтың ойы осы.\n\n  Осылар біріне бірі достық ойлай ала ма? Кедей көп болса, ақысы кем болар еді, малдан айырылғандар көбейсе, қыстауы босар еді деп, мен ананы кедей болса екен деп, ол мені кедей болса екен деп, әуелде ішімізбен қас сағындық. Әрі-беріден соң сыртымызға шықты, жауластық, дауластық, партияластық. Осындай қастарға сөзім өтімді болсын және де ептеп мал жиюға күшім жетімді болсын деп, қызметке болыстық, билікке таластық.\n\n  Сонан соң не момынның баласы бөтен жаққа шығып, еңбек қылып, мал іздемейді, егін, сауданың керегі жоқ болады. Өз басын өзі осындай таласпенен кісі көбейтеміз деп партия жиғандардың бүгін біреуіне, ертең біреуіне кезекпен сатады да жүреді. Ұрылар тыйылмайды. Ел тыныш болса, оның ұрлығын ешкім сүйемес еді. Ел екі жар болған соң, кім ант ішіп ақтап, арамдығын жақтап, сүйеймін десе, соған жақ болып сүйеніп, бұрынғыдан ұрлығын әлденеше есе асырады.\n\n  Елдегі жақсы адамдардың бәрінің үстінен бекер, өтірік «шапты, талады» деген әртүрлі уголовный іс көрсетіп, арыз береді. Оған дознание - тергеу шығарады. Өтірік көрмегенін көрдім деуші куәлар да әлдеқашан дайындап қойылған, бағанағы жақсы адам сайлауға жарамасы үшін. Ол адам басын құтқармақ үшін жамандарға жалынса, оның да адамдығының кеткені, егер жалынбаса, тергеулі, сотты адам болып, ешбір қызметке жарамай, басы қатерге түсіп өткені. Ол болыс болғандар өзі қулық, арамдықпенен болыстыққа жеткен соң, момынды қадірлемейді, өзіндей арам, қуларды қадірлейді, өзіме дос болып, жәрдемі тиеді деп, егер қас болса, бір түрлі өзіме де залал жасауға қолынан келеді деп.\n\n  Осы күнде қазақ ішінде «ісі білмес, кісі білер» деген мақал шықты. Оның мәнісі: «ісіңнің түзулігінен жетпессің, кісіңнің амалшы, айлалылығынан жетерсің» деген сөз. Үш жылға болыс сайланады. Әуелгі жылы «Сені біз сайламадық па?» деп елдің бұлданғандығымен күні өтеді. Екінші жылы кандидатпенен аңдысып күні өтеді. Үшінші жылы сайлауға жақындап қалып, тағы болыс болып қалуға болар ма екен деп күні өтеді. Енді несі қалды? Осы қазақ халқының осындай бұзықшылыққа тартып, жылдан жылға төмендеп бара жатқанын көрген соң, менің ойыма келеді: Халықтың болыстыққа сайлаймын деген кісісі пәлен қадәрлі орысша образование алған кісі болсын. Егер де орталарында ондай кісісі жоқ болса, яки бар болса да сайламаса, уезный начальник пенен военный губернатордың назначениесімен болады десе, бұл халыққа бек пайдалы болар еді. Оның себебі: әуелі - қызметқұмар қазақ балаларына образование беруге ол да - пайдалы іс, екінші - назначениемен болған болыстар халыққа міндетті болмас еді, ұлықтарға міндетті болар еді.\n\n  Уә және назначение қылғанда тергеуі, сұрауы барлығына қарамаса, өтірік арыз берушілер азаяр еді, бәлки жоғалар еді. Уә және әрбір болыс елде старшина басы бір би сайланғандық, бұл халыққа көп залал болғандығы көрініп, сыналып білінді. Бұл билік деген біздің қазақ ішінде әрбір сайланған кісінің қолынан келмейді. Бұған бұрынғы «Қасым ханның қасқа жолын, Есім ханның ескі жолын», Әз Тәуке ханның Күлтөбенің басындағы күнде кеңес болғанда «Жеті жарғысын» білмек керек. Әм, ол ескі сөздердің қайсысы заман өзгергендікпенен ескіріп, бұл жаңа заманға келіспейтұғын болса, оның орнына татымды толық билік шығарып, төлеу саларға жарарлық кісі болса керек еді, ондай кісі аз, яки тіпті жоқ.\n\n  Бұрынғы қазақ жайын жақсы білген адамдар айтыпты: «Би екеу болса, дау төртеу болады» деп. Оның мәнісі - тақ болмаса, жұп билер таласып, дау көбейте береді дегенмен айтылған сөз. Өйтіп би көбейткенше, әрбір болыс елден толымды-білімді үш-ақ кісі билікке жыл кесілмей сайланса, олар түссе, жаманшылығы әшкере білінгендікпенен түссе, әйтпесе түспесе.\n\n  Ол билерге даугер адамдар қалмай, екеуі екі кісіні билікке таңдап алып, үстіне біреуді посредникке сайлап алып, біте берсе; егер оған да ынтымақтаса алмаса, бағанағы үш бидің біреуін алып, яки жеребемен сайлап алып жүгінсе, сонда дау ұзамай, бітім болар еді.","Әрбір байқаған адам білсе керек: күлкі өзі бір мастық екенін, әрбір мас кісіден ғафил көп өтетұғынын да, әрбір мастың сөйлеген кезінде бас ауыртатұғынын. Бұлай болғанда, күлкіге салынған кісі не шаруадан, не ақылдан, не бір ұят келерлік істен құр, ғафил көп өткізіп отырса керек. Осындай ғафилдік көп өткізіп, өлмеген кісінің не дүниеде, не ахиретте басы бір ауырмай қалмаса керек.\n\nӘрбір уайым-қайғы ойлағыш кісі не дүние шаруасына, не ахирет шаруасына өзгеден жинақырақ болса керек. Әрбір жинақылықтың түбі кәніш болса керек. Енді олай болғанда, үнемі уайым-қайғыменен жүре аламыз ба? Үнемі күлмей жүруге жан шыдай ма екен? Жоқ, мен үнемі уайым-қайғыменен бол демеймін. Уайым-қайғысыздығыңа уайым-қайғы қыл дағы, сол уайым-қайғысыздықтан құтыларлық орынды харекет табу керек һәм қылу керек. Әрбір орынды мінез өзі де уайым-қайғыны азайтады, орынсыз күлкіменен азайтпа, орынды харекетпен азайт!\n\nШығар есігін таба алмай, уайым-қайғының ішіне кіріп алып, қамалып қалмақ, ол өзі де - бір антұрғандық. Және әрбір жаман кісінің қылығына күлсең, оған рахаттанып күлме, ыза болғаныңнан күл, ызалы күлкі - өзі де қайғы. Ондай күлкіге үнемі өзің де салынбассың, әрбір жақсы адамның жақсылық тапқанына рахаттанып күлсең, оның жақсылықты жақсылығынан тапқандығын ғибрат көріп күл. Әрбір ғибрат алмақтың өзі де мастыққа жібермей, уақытымен тоқтатады. Көп күлкінің бәрін де мақтағаным жоқ, оның ішінде бір күлкі бар-ау, құдай жаратқан орныменен іштен, көкіректен, жүректен келмейді, қолдан жасап, сыртыменен бет-аузын түзеп, бай-бай күлкінің әнін сәндеп, әдемішілік үшін күлетін бояма күлкі.\n\nАдам баласы жылап туады, кейіп өледі. Екі ортада, бұ дүниенің рахатының кайда екенін білмей, бірін-бірі аңдып, біріне-бірі мақтанып, есіл өмірді ескерусіз, босқа, жарамсыз қылықпен, қор етіп өткізеді де, таусылған күнде бір күндік өмірді бар малына сатып алуға таба алмайды.\n\nҚулық саумақ, көз сүзіп, тіленіп, адам саумақ - өнерсіз иттің ісі. Әуелі құдайға сыйынып, екінші өз қайратыңа сүйеніп, еңбегіңді сау, еңбек қылсаң, қара жер де береді, құр тастамайды.","Көкірек толған қайғы кісінің өзіне де билетпейді, бойды шымырлатып, буынды құртып, я көзден жас болып ағады, я тілден сөз болып ағады. Қазақтар: «Ә, құдай, жас баладай қайғысыз қыла гөр!» деп тілек тілегенін өзім көрдім. Онысы - жас баладан гөрі өзі есті кісі болып, ескермес нәрсесі жоқсып, қайғылы кісі болғансығаны. Қайғысы не десең, мақалдарынан танырсың: әуелі - «Түстік өмірің болса, күндік мал жи», «Өзіңде жоқ болса, әкең де жат», «Мал - адамның бауыр еті», «Малдының беті - жарық, малсыздың беті - шарық», «Ер азығы мен бөрі азығы жолда», «Ердің малы елде, еріккенде қолда», «Берген перде бұзар», «Алаған қолым - береген», «Мал тапқан ердің жазығы жоқ», «Байдан үмітсіз - құдайдан үмітсіз», «Қарның ашса, қаралы үйге шап», «Қайраны жоқ көлден без, қайыры жоқ елден без» деген осындай сөздері көп, есепсіз толып жатыр.\n\nБұл мақалдардан не шықты? Мағлұм болды: қазақ тыныштық үшін, ғылым үшін, білім үшін, әділет үшін қам жемейді екен, мал үшін қам жейді екен, бірақ ол малды қалайша табуды білмейді екен, бар білгені малдыларды алдап алмақ яки мақтап алмақ екен, бермесе оныменен жауласпақ екен. Малды болса, әкесін жаулауды да ұят көрмейді екен. Әйтеуір ұрлық, қулық-сұмдық, тіленшілік, соған ұқсаған қылықтың қайсысын болса да қылып жүріп, мал тапса, жазалы демесек керек екен.\n\nБұлардың жас баланың ақылынан несі артық? Бірақ, жас бала қызыл ошақтан қорқушы еді, бұлар тозақтан да қорықпайды екен. Жас бала ұялса, жерге ене жаздаушы еді, бұлар неден болса да ұялмайды екен. Сол ма артылғаны? Қолымыздағыны үлестіріп талатпасақ, біз де өзіндей болмасақ, безеді екен. Іздеген еліміз сол ма?","Қазақтың бір мақалы: «Өнер алды - бірлік, ырыс алды - тірлік» дейді. Бірлік қандай елде болады, қайтсе де тату болады - білмейді. Қазақ ойлайды: бірлік - ат ортақ, ас ортақ, киім ортақ, дәулет ортақ болса екен дейді. Олай болғанда байлықтан не пайда, кедейліктен не залал? Ағайын құрымай мал іздеп не керек? Жоқ, бірлік - ақылға бірлік, малға бірлік емес. Малыңды беріп отырсаң, атасы басқа, діні басқа, күні басқалар да жалданып бірлік қылады! Бірлік малға сатылса, антұрғандықтың басы осы. Ағайын алмай бірлік қылса керек, сонда әркім несібесін құдайдан тілейді, әйтпесе құдайдан тілемейді, шаруа іздемейді. Әуелі біріне-бірі пәле іздейді. Не түсін, не ажарын, не өкпесін бұлдап, ол болмаса, бір пәле салып, қорғалатып, әйтеуір бірін-бірі алдаудың амалын іздеседі. Мұның қай жерінен бірлік шықты\n\n«Ырыс алды - тірлік» дейді, ол қай тірлік? Ол осы жан кеудеден шықпағандық па? Жоқ, ондай тірлік итте де бар. Ондай тірлікті қымбат көріп, бұлдаған адам өлімді жау көріп, ахиретке дұшпан болады. Жанын қорғалатып, жаудан қашып, қорқақ атанып, еңбек қылудан, қызмет қылудан қашып, еріншек атанып, ез атанып, дүниеде әлгі айтылған ырысқа дұшпан болады. Ол айтқан тірлік олар емес. Көкірегі, көңілі тірі болса, соны айтады. Өзің тірі болсаң да, көкірегің өлі болса, ақыл табуға сөз ұға алмайсың. Адал еңбекпен ерінбей жүріп мал табуға жігер қыла алмайсың.\n\nКеселді жалқау, қылжақбас,\nӘзір тамақ, әзір ас,\nСыртың - пысық, ішің - лас,\nАртын ойлап ұялмас, -\n\nболып жүріп, тірімін деме, онан да Алла жіберген ақ бұйрықты өлімнің өзі артық.","Жас бала анадан туғанда екі түрлі мінезбен туады: біреуі - ішсем, жесем, ұйықтасам деп тұрады. Бұлар - тәннің құмары, бұлар болмаса, тән жанға қонақ үй бола алмайды. Һәм өзі өспейді, қуат таппайды. Біреуі - білсем екен демеклік. Не көрсе соған талпынып, жалтыр-жұлтыр еткен болса, оған қызығып, аузына салып, дәмін татып қарап, тамағына, бетіне басып қарап, сырнай-керней болса, дауысына ұмтылып, онан ержетіңкірегенде ит үрсе де, мал шуласа да, біреу күлсе де, біреу жыласа да тұра жүгіріп, «ол немене?», «бұл немене?» деп, «ол неге үйтеді?» деп, «бұл неге бүйтеді?» деп, көзі көрген, құлағы естігеннің бәрін сұрап, тыныштық көрмейді. Мұның бәрі - жан құмары, білсем екен, көрсем екен, үйренсем екен деген.\n\nДүниенің көрінген һәм көрінбеген сырын түгелдеп, ең болмаса денелеп білмесе, адамдықпен орны болмайды. Оны білмеген соң, ол жан адам жаны болмай, хайуан жаны болады. Әзелде құдай тағала хайуанның жанынан адамның жанын ірі жаратқан, сол әсерін көрсетіп жаратқаны. Сол қуат жетпеген, ми толмаған ессіз бала күндегі «бұл немене, ол немене?» деп, бір нәрсені сұрап білсем екен дегенде, ұйқы, тамақ та есімізден шығып кететұғын құмарымызды, ержеткен соң, ақыл кіргенде, орнын тауып ізденіп, кісісін тауып сұранып, ғылым тапқандардың жолына неге салмайды екеміз?\n\nСол өрістетіп, өрісімізді ұзартып, құмарланып жиған қазынамызды көбейтсек керек, бұл жанның тамағы еді. Тәннен жан артық еді, тәнді жанға бас ұрғызса керек еді. Жоқ, біз олай қылмадық, ұзақтай шулап, қарғадай барқылдап, ауылдағы боқтықтан ұзамадық. Жан бізді жас күнімізде билеп жүр екен. Ержеткен соң, күш енген соң, оған билетпедік. Жанды тәнге бас ұрғыздық, ешнәрсеге көңілменен қарамадық, көзбен де жақсы қарамадық, көңіл айтып тұрса, сенбедік. Көзбен көрген нәрсенің де сыртын көргенге-ақ тойдық. Сырын қалай болады деп көңілге салмадық, оны білмеген кісінің несі кетіпті дейміз. Біреу кеткенін айтса да, ұқпаймыз. Біреу ақыл айтса: «Ой, тәңірі-ай, кімнен кім артық дейсің!» - дейміз, артығын білмейміз, айтып тұрса ұқпаймыз.\n\nКөкіректе сәуле жоқ, көңілде сенім жоқ. Құр көзбенен көрген біздің хайуан малдан неміз артық? Қайта, бала күнімізде жақсы екенбіз. Білсек те, білмесек те, білсек екен деген адамның баласы екенбіз. Енді осы күнде хайуаннан да жаманбыз. Хайуан білмейді, білемін деп таласпайды. Біз түк білмейміз, біз де білеміз деп надандығымызды білімділікке бермей таласқанда, өлер-тірілерімізді білмей, күре тамырымызды адырайтып кетеміз.","Осы ақылды кім үйренеді, насихатты кім тыңдайды?\n\nБіреу - болыс, біреу - би. Олардың ақыл үйренейін, насихат тыңдайын деген ойы болса, ол орынға сайланып та жүрмес еді. Олар өздері де үздік кісіміз, өздеріміз біреуге үлгі беріп, ақыл айтарлықпыз деп сайланды. Өздері түзеліп жеткен, енді елді түзерлігі-ақ қалған. Ол не қылып тыңдасын және тыңдайын десе де, қолы тие ме? Басында өзіндік жұмысы бар: ұлығымызға жазалы болып қаламыз ба, елдегі бұзақыларымызды бүлдіріп аламыз ба, немесе халқымызды бүлдіріп аламыз ба, яки өзіміз шығымдап, шығынымызды толтыра алмай қаламыз ба? - деген ебіне қарай біреуді жетілтейін деп, біреуді құтылтайын деген бейнетінің бәрі басында, қолы тимейді.\n\nБайлар, олар өздері де бір күн болса да, дәулет қонып, дүниенің жарымы басында тұр. Өзінде жоқты малыменен сатып алады. Көңілдері көкте, көздері аспанда, адалдық, адамдық, ақыл, ғылым, білім - ешнәрсе малдан қымбат демейді. Мал болса, құдай тағаланы да паралап алса болады дейді. Оның діні, құдайы, халқы, жұрты, білімі, ұяты, ары, жақыны - бәрі мал. Сөзді қайтіп ұқсын, ұғайын десе де, қолы тие ме? Ол малды суармақ, тойғызбақ; саудасын жиғызбақ, күзеттірмек, бақтырмақ, ұры-бөрі, қыс, суық-сұғанақ - солардан сақтанбақ, солардан сақтарлық кісі таппақ. Оның бәрін жайғастырып, аяғын алып келіп мақтанға орналастырғанша қашан? Қолы тимейді.\n\nЕнді ұры-залым, сұм-сұрқия өздері де тыңдамайды. Онша-мұнша қой жүнді қоңыршалар күнін де көре алмай жүр. Аналар анадай болып тұрғанда, білім, ғылым, ақылды не қылсын? Және де білім, ғылым кедейге керегі жоқтай-ақ: «Бізді не қыласың, ана сөзді ұғарлықтарға айт!» дейді. Оның өзгеменен ісі жоқ, ана алдындағы үшеуіндей болған жанның ойында ешбір қайғысы, мұңы болмаса керек.","Осы мен өзім - қазақпын. Қазақты жақсы көрем бе, жек көрем бе? Егер жақсы көрсем, қылықтарын қостасам керек еді. Уә әрнешік бойларынан адам жақсы көрерлік, көңілге тиянақ қыларлық бір нәрсе тапсам керек еді. Соны не үміт үзбестікке, не онысы болмаса, мұнысы бар ғой деп, көңілге қуат қылуға жаратсам керек еді, ондайым жоқ. Егер жек көрсем, сөйлеспесем, мәжілістес, сырлас, кеңестес болмасам керек еді, тобына бармай, «не қылды, не болды?» демей жату керек еді, ол мүмкін болмаса, бұлардың ортасынан көшіп кету керек еді. Бұларды жөндеймін деуге, жөнделер, үйренер деген үмітім де жоқ. Бұлардың бірі де жоқ. Бұл қалай? Бұл айтқанның бірін тұтпай болмас еді.\n\nМен өзім тірі болсам да, анық тірі де емеспін! Әншейін осылардың ызасынан ба, өзіме-өзім ыза болғанымнан ба, яки бөтен бір себептен бе? - еш білмеймін. Сыртым сау болса да, ішім өліп қалыпты. Ашулансам, ызалана алмаймын. Күлсем, қуана алмаймын, сөйлегенім өз сөзім емес, күлгенім өз күлкім емес, бәрі де әлдекімдікі. Қайратты күнімде қазақты қиып бөтен жаққа кетпек түгіл, өзін жақсы көріп, үміт етіп жүріппін. Қашан әбден біліп, үмітімді үзген кезде, өзге жаққа барып, жатты өз қылып, үйір боларлық кайрат, жалын сөніп те қалған екен. Сол себептен бір жүрген қуыс кеудемін. Тегінде ойлаймын: бұ да жақсы, өлер кезде «әттегене-ай, сондай-сондай қызықтарым қалды-ау!» деп қайғылы болмай, алдыңғы тілеу болмаса, артқа алаң болмай өлуге.","Біреулер құдайдан бала тілейді. Ол баланы не қылады? Өлсем орнымды бассын дейді, артымнан құран оқысын дейді, қартайған күнімде асырасын дейді. Осыдан басқасы бар ма?\n\nБалам орнымды бассын демек не сөз? Өзіңнен қалған дүние иесіз қалар дейсің бе? Қалған дүниенің қамын сен жемек пе едің? Өліп бара жатқанда өзгеден қызғанып айтқаның ба? Өзгеге қимайтұғын сенің не қылған артықша орның бар еді? Баланың жақсысы - қызық, жаманы - күйік, не түрлі боларын біліп сұрадың? Дүниеде өзіңнің көрген қорлығың аз болды ма? Өзіңнің қылған иттігің аз болды ма? Енді бір бала туғызып, оны да ит қылуға, оған да қорлық көрсетуге мұнша неге құмар болдың?\n\nАртымнан балам құран оқысын десең, тірлікте өзіңнің жақсылық қылған кісің көп болса, кім құран оқымайды? Егер жаманшылықты көп қылған болсаң, балаңның оқыған құраны сені неге жеткізеді? Тірлікте өзіңе-өзің қылмаған істі, өлген соң саған балаң кәсіп қылып бере ала ма? Ахирет үшін бала тілегенің - балам жасында өлсін дегенің. Егерде ержетсін десең, өзі ержетіп, ата-анасын тұзақтан құтқарарлық бала қазақтан туа ма екен? Ондай баланы сендей әке, сенің еліңдей ел асырап өсірмек пе екен?\n\nҚартайғанда асырасын десең, о да - бір бос сөз. Әуелі - өзің қаруың қайтарлық қартаюға жетемісің, жоқ па? Екінші - балаң мейірімді болып, асырарлық болып туа ма, жоқ па? Үшінші - малың болса, кім асырамайды? Малың жоқ болса, қай асырау толымды болады? Баланың мал табарлық болары, мал шашарлық болары - ол да екі талай. Хош, құдай тағала бала берді, оны өзің жақсы асырай білесің бе? Білмейсің. Әуелі өз күнәңді өзің көтергеніңмен тұрмай, балаңның күнәсіне тағы да ортақ боласың. Әуелі балаңды өзің алдайсың: «Әне, оны берем, міне, мұны берем» деп. Басында балаңды алдағаныңа бір мәз боласың. Соңыра балаң алдамшы болса, кімнен көресің? «Боқта!» деп, біреуді боқтатып, «кәпір - қияңқы, осыған тимеңдерші!» деп, оны мазаттандырып, әбден тентектікке үйретіп қойып, сабаққа бергенде, молданың ең арзанын іздеп, хат таныса болады деп, қу, сұм бол деп, «пәленшенің баласы сені сыртыңнан сатып кетеді» деп, тірі жанға сендірмей жат мінез қылып, осы ма берген тәлімің? Осы баладан қайыр күтесің бе?\n\nЖәне мал тілейсіңдер, неге керек қылайын деп тілейсіңдер? Әуелі, құдайдан тілеймісің? Тілейсің. Құдай берді, бергенін алмайсың. Құдай тағала саған еңбек қылып мал табарлық қуат берді. Ол қуатты адал кәсіп қыларлық орынға жұмсаймысың? Жұмсамайсың. Ол қуатты орнын тауып сарып қыларды білерлік ғылым берді, оны оқымайсың. Ол ғылымды оқыса, ұғарлық ақыл берді, қайда жібергеніңді кім біледі?.. Ерінбей еңбек қылса, түңілмей іздесе, орнын тауып істесе, кім бай болмайды? Оның саған керегі жоқ. Сенікі - біреуден қорқытып алсаң, біреуден жалынып алсаң, біреуден алдап алсаң болғаны, іздегенің - сол.\n\nБұл - құдайдан тілеген емес. Бұл - абыройын, арын сатып, адам жаулағандық, тіленшілік. Хош, сүйтіп жүріп-ақ мал таптың, байыдың. Сол малды сарып қылып, ғылым табу керек. Өзің таба алмасаң, балаң тапсын. Ғылымсыз ахирет те жоқ, дүние де жоқ. Ғылымсыз оқыған намаз, тұтқан ораза, қылған хаж, ешбір ғибадат орнына бармайды. Ешбір қазақ көрмедім, малды иттікпен тапса да, адамшылықпен жұмсаған. Бәрі де иттікпен табады, иттікпен айрылады. Бейнет, күйігі, ызасы - сол үшеуінен басқа ешнәрсе бойында қалмайды. Барында баймын деп мақтанады. Жоғында «маған да баяғыда мал бітіп еді» деп мақтанады. Кедей болған соң, тағы қайыршылыққа түседі.","Осы елдің үнем қылып жүргені немене? Екі нәрсе. Әуелі - ұрлық, ұры ұрлықпен мал табам деп жүр. Мал иесі артылтып алып, тағы да байимын деп жүр. Ұлықтар алып берем деп, даугерді жеп, құтқарам деп ұрыны жеп жүр. Қарапайым жұрт ұрлық айтып мал алам деп, ұрыға атымды сатып пайдаланам деп, не өткізбесін арзанға түсіріп алам деп жүр. Екінші - бұзақылар біреудің ойында жоқ пәлені ойына салып, бүйтсең бек боласың, бүйтсең кеп боласың, бүйтсең кек аласың, мықты атанасың деп, ауқаттыларды азғырғалы әлек болып жүр. Кім азса, мен соған керек боламын деп, к...н қыздырып алып, өзін бір ғана азық қылайын деп жүр.\n\nҰлықтар пәлі-пәлі, бұл табылған ақыл деп, мен сені бүйтіп сүйеймін деп, ананы жеп, сені бүйтіп сүйеймін деп, мынаны жеп жүр. Қара халық менің сонша үйім бар, сонша ауыл-аймағыммен сойылыңды соғайын, дауыңды айтайын деп, қай көп бергенге партиялас боламын деп, құдайға жазып, жатпай-тұрмай салып жүріп басын, ауылын, қатын-баласын сатып жүр. Осы бір ұры, бұзақы жоғалса, жұртқа ой да түсер еді, шаруа да қылар еді. Бай барын бағып, кедей жоғын іздеп, ел секілденіп талапқа, тілеуге кірісер еді. Енді жұрттың бәрі осы екі бүлік іске ортақ, мұны кім түзейді? Анттың, серттің, адалдықтың, ұяттың бір тоқтаусыз кеткені ме? Ұрыны тыю да оңай болар еді, бірақ осы бұзақының тіліне еретұғын, азатұғын байларды кім тыяды?","Кімде-кім жақсы-жаман ғибадат қылып жүрсе, оны ол ғибадаттан тыюға аузымыз бармайды, әйтеуір жақсылыққа қылған ниеттің жамандығы жоқ қой дейміз. Ләкин, сондай адамдар толымды ғибадатқа ғылымы жетпесе де, қылса екен. Бірақ оның екі шарты бар, соны білсе екен. Әуелі - иманның иғтиқатын махкамлемек керек, екінші - үйреніп жеткенше осы да болады ғой демей, үйрене берсе керек. Кімде-кім үйреніп жетпей жатып, үйренгенін қойса, оны құдай ұрды, ғибадаты ғибадат болмайды. Уа-ләкин, кімде-кім иманның неше нәрсе бірлән кәмәләт табатұғынын білмей, қанша жерден бұзылатұғынын білмей, басына шалма орап, бірәдар атын көтеріп, оразашыл, намазшыл болып жүрген көңілге қалың бермей тұрып, жыртысын салғанға ұқсайды. Күзетшісіз, ескерусіз иман тұрмайды, ықыласыменен өзін-өзі аңдып, шын діни шыншылдап жаны ашып тұрмаса, салғырттың иманы бар деп болмайды.","Иман деген - алла табарака уа тағаланың шәриксиз, ғайыпсыз бірлігіне, барлығына уа әр түрлі бізге пайғамбарымыз саллалаһу ғалайһи уәссәлләм арқылы жіберген жарлығына, білдіргеніне мойын ұсынып, инанмақ. Енді бұл иман дерлік инануға екі түрлі нәрсе керек. Әуелі - не нәрсеге иман келтірсе, соның хақтығына ақылы бірлән дәлел жүргізерлік болып, ақылы дәлел - испат қыларға жараса, мұны якини иман десе керек. Екіншісі - кітаптан оқу бірлән яки молдалардан есту бірлән иман келтіріп, сол иман келтірген нәрсесіне соншалық берік боларға керек. Біреу өлтіремін деп қорқытса да, мың кісі мың түрлі іс көрсетсе де, соған айнып, көңілі қозғалмастай берік болу керек. Бұл иманды иман таклиди дейміз.\n\nЕнді мұндай иман сақтауға қорықпас жүрек, айнымас көңіл, босанбас буын керек екен. Якини иманы бар деуге ғылымы жоқ, таклиди иманы бар деуге беріктігі жоқ, я алдағанға, я азғырғанға, я бір пайдаланғанға қарап, ақты қара деп, я қараны ақ деп, өтірікті шын деп ант ететұғын кісіні не дейміз? Құдай тағала өзі сақтасын. Әрнешік білмек керек, жоғарғы жазылмыш екі түрліден басқа иман жоқ. Иманға қарсы келерлік орында ешбір пенде құдай тағала кеңшілігімен кешеді дағы демесін, оның үшін құдай тағаланың ғафуына яки пайғамбарымыздың шафағатына да сыймайды, мүмкін де емес. «Қылыш үстінде серт жоқ» деген, «құдай тағаланың кешпес күнәсі жоқ» деген жалған мақалды қуат көрген мұндай пенденің жүзі құрысын.","Тірі адамның жүректен аяулы жері бола ма? Біздің қазақтың жүректі кісі дегені - батыр кісі дегені. Онан басқа жүректің қасиеттерін анықтап біле алмайды. Рақымдылық, мейірбандылық, әртүрлі істе адам баласын өз бауырым деп, езіне ойлағандай оларға да болса игі еді демек, бұлар - жүрек ісі. Асықтық та - жүректің ісі. Тіл жүректің айтқанына көнсе, жалған шықпайды. Амалдың тілін алса, жүрек ұмыт қалады. Қазақтың «жүректісі» мақтауға сыймайды. Айтқанға көнгіш, уағдада тұрғыш, бойын жаманшылықтан тез жиып алғыш, көштің соңынан итше ере бермей, адасқан көптен атының басын бұрып алуға жараған, әділетті ақыл мойындаған нәрсеге, қиын да болса, мойындау, әділетті ақыл мойындамаған нәрсеге, оңай да болса, мойындамау - ерлік, батырлық осы болмаса, қазақтың айтқан батыры - әншейін жүректі емес, қасқыр жүректі деген сөз.\n\nҚазақ та адам баласы ғой, көбі ақылсыздығынан азбайды, ақылдың сөзін ұғып аларлық жүректе жігер, қайрат, байлаулылықтың жоқтығынан азады. Білімді білсе де, арсыз, қайратсыздығынан ескермей, ұстамай кетеді. Жаманшылыққа бір елігіп кеткен соң, бойын жиып алып кетерлік қайрат қазақта кем болады. Осы жұрттың көбінің айтып жүрген мықты жігіт, ер жігіт, пысық жігіт деп ат қойып жүрген кісілерінің бәрі - пәлеге, жаманшылыққа еліртпек үшін, бірін-бірі «айда, батырлап!» қыздырып алады да, артын ойлатпай, азғыратұғын сөздері. Әйтпесе құдайға терістіктен, не ар мен ұятқа терістіктен сілкініп, бойын жиып ала алмаған кісі, үнемі жаманшылыққа, мақтанға салынып, өз бойын өзі бір тексермей кеткен кісі, тәуір жігіт түгіл, әуелі адам ба өзі?","Ақылды кісі мен ақылсыз кісінің, менің білуімше, бір белгілі парқын көрдім.\n\nӘуелі - пенде адам болып жаратылған соң, дүниеде ешбір нәрсені қызық көрмей жүре алмайды. Сол қызықты нәрсесін іздеген кезі өмірінің ең қызықты уақыты болып ойында қалады. Сонда есті адам, орынды іске қызығып, құмарланып іздейді екен дағы, күнінде айтса құлақ, ойланса көңіл сүйсінгендей болады екен. Оған бұл өткен өмірдің өкініші де жоқ болады екен.\n\nЕсер кісі орнын таппай, не болса сол бір баянсыз, бағасыз нәрсеге қызығып, құмар болып, өмірінің қызықты, қымбатты шағын итқорлықпен өткізіп алады екен дағы, күнінде өкінгені пайда болмай-ды екен. Жастықта бұл қызықтан соң және бір қызық тауып алатын кісімсіп, жастығы тозбастай, буыны босамастай көріп жүріп, бірер қызықты қуғанда-ақ мойны қатып, буыны құрып, екінші талапқа қайрат қылуға жарамай қалады екен.\n\nҮшінші - әрбір нәрсеге қызықпақтық. Ол өзі бойға құмарлық пайда қылатын нәрсе екен. Әрбір құмарлық өзіне бір дерт болады екен, әртүрлі құмар болған нәрсеге жеткенде, яки әне-міне, жетер-жетпес болып жүргенде, бір түрлі мастық пайда болады екен.\n\nӘрбір мастық бойдан оғатты көп шығарып, ақылдың көзін байлап, төңіректегі қараушылардың көзін ашып, «ананы-мынаны» дегізіп, бойды сынататұғын нәрсе екен. Сол уақытта есті кісілер үлкен есі шықпай, ақылды қолдан жібермей, бойын сынатпай жүріп ізденеді екен. Есер кісілер ер-тоқымын тастап, бөркі түсіп қалып, етегі атының к...н жауып кетіп, екі көзі аспанда, жынды кісіше шаба беруді біледі екен, соны көрдім.\n\nЕгерде есті кісілердің қатарында болғың келсе, күнінде бір мәртебе, болмаса жұмасында бір, ең болмаса айында бір, өзіңнен өзің есеп ал! Сол алдыңғы есеп алғаннан бергі өмірді қалай өткіздің екен, не білімге, не ахиретке, не дүниеге жарамды, күнінде өзің өкінбестей қылықпен өткізіппісің? Жоқ, болмаса, не қылып өткізгеніңді өзің де білмей қалыппысың?","Қазақ құлшылығым құдайға лайық болса екен деп қам жемейді. Тек жұрт қылғанды біз де қылып, жығылып, тұрып жүрсек болғаны дейді. Саудагер несиесін жия келгенде «тапқаным осы, біттім деп, алсаң — ал, әйтпесе саған бола жерден мал қазам ба?» дейтұғыны болушы еді ғой. Құдай тағаланы дәл сол саудагердей қыламын дейді. Тілін жаттықтырып, дінін тазартып, ойланып, үйреніп әлек болмайды. «Білгенім осы, енді қартайғанда қайдан үйрене аламын» дейді. «Оқымадың демесе болады дағы, тілімнің келмегенін қайтушы еді» дейді. Оның тілі өзге жұрттан бөлекше жаратылып па?","Қайрат, ақыл, жүрек үшеуі өнерлерін айтысып, таласып келіп, ғылымға жүгініпті. Қайрат айтыпты: «Ей, ғылым, өзің де білесің ғой, дүниеде ешнәрсе менсіз кәмелетке жетпейтұғынын; әуелі, өзіңді білуге ерінбей-жалықпай үйрену керек, ол – менің ісім. Құдайға лайықты ғибадат қылып, ерінбей-жалықпай орнына келтірмек те – менің ісім. Дүниеге лайықты өнер, мал тауып, абұйыр мансапты еңбексіз табуға болады. Орынсыз, болымсыз нәрсеге үйір қылмай, бойды таза сақтайтұғын, күнәкәрліктен, көрсеқызар жеңілдіктен, нәфсі шайтанның азғыруынан құтқаратұғын, адасқан жолға бара жатқан бойды қайта жиғызып алатұғын мен емес пе? Осы екеуі маған қалай таласады?» – депті. Ақыл айтыпты: «Не дүниеге, не ахиретке не пайдалы болса, не залалды болса, білетұғын – мен, сенің сөзіңді ұғатұғын – мен, менсіз пайданы іздей алмайды екен, залалдан қаша алмайды екен, ғылымды ұғып үйрене алмайды екен, осы екеуі маған қалай таласады? Менсіз өздері неге жарайды?» – депті. Онан соң жүрек айтыпты: «Мен – адамның денесінің патшасымын, қан менен тарайды, жан менде мекен қылады, менсіз тірлік жоқ. Жұмсақ төсекте, жылы үйде тамағы тоқ жатқан кісіге төсексіз кедейдің, тоңып жүрген киімсіздің, тамақсыз аштың күй-жәйі қандай болып жатыр екен деп ойлатып, жанын ашытып, ұйқысын ашылтып, төсегінде дөңбекшітетұғын – мен. Үлкеннен ұят сақтап, кішіге рақым қылдыратұғын – мен, бірақ мені таза сақтай алмайды, ақырында қор болады. Мен таза болсам, адам баласын алаламаймын: жақсылыққа елжіреп еритұғын – мен, жаманшылықтан жиреніп тулап кететұғын – мен, әділет, нысап, ұят, рақым, мейірбаншылық дейтұғын нәрселердің бәрі менен шығады, менсіз осылардың көрген күні не? Осы екеуі маған қалай таласады?» – депті. Сонда ғылым бұл үшеуінің сөзін тыңдап болып, айтыпты: – Ей, қайрат, сенің айтқаныңның бәрі де рас. Ол айтқандарыңнан басқа да көп өнерлеріңнің бары рас, сенсіз ешнәрсенің болмайтұғыны да рас, бірақ қаруыңа қарай қаттылығың да мол, пайдаң да мол, бірақ залалың да мол, кейде жақсылықты берік ұстап, кейде жамандықты берік ұстап кетесің, соның жаман, – депті. -Ей, ақыл! Сенің айтқандарыңның бәрі де рас. Сенсіз ешнәрсе табылмайтұғыны да рас. Жаратқан тәңіріні де сен танытасың, жаралған екі дүниенің жайын да сен білесің. Бірақ сонымен тұрмайсың, амал да, айла да – бәрі сенен шығады. Жақсының, жаманның екеуінің де сүйенгені, сенгені – сен; екеуінің іздегенін тауып беріп жүрсің, соның жаман, – депті. – Сен үшеуіңнің басыңды қоспақ – менің ісім, – депті. Бірақ сонда билеуші, әмірші жүрек болса жарайды. Ақыл, сенің қырың көп, жүрек сенің ол көп қырыңа жүрмейді. Жақсылық айтқаныңа жаны-діні құмар болады. Көнбек түгіл қуанады. Жаманшылық айтқаныңа ермейді. Ермек түгіл жиреніп, үйден қуып шығарады. – Қайрат, сенің қаруың көп, күшің мол, сенің де еркіңе жібермейді. Орынды іске күшіңді аятпайды. Орынсыз жерге қолыңды босатпайды. Осы үшеуің басыңды қос, бәрін де жүрекке билет, – деп ұқтырып айтушының аты ғылым екен. Осы үшеуің бір кісіде менің айтқанымдай табылсаңдар, табанының топырағы көзге сүртерлік қасиетті адам – сол. Үшеуің ала болсаң, мен жүректі жақтадым. Құдайшылық сонда, қалпыңды таза сақта, құдай тағала қалпыңа әрдайым қарайды деп кітаптың айтқаны осы, — депті. Абайдың 17 Қарасөз","Адам баласына жыртықсыз, кірсіз, сыпайы киініп, һәм ол киімін былғап, былжыратып кимей, таза кимек - дұрыс іс. Ләкин өз дәулетінен артық киінбек, не киімі артық болмаса да, көңіліне қуат тұтып, тым айналдырмақ - кербездің ісі.\n\nКербездің екі түрлі қылығы болады: бірі бет-пішінін, мұртын, мүшесін, жүрісін, қас-қабағын қолдан түзетіп, шынтағын көтеріп, қолын тарақтап әуре болмақ. Біреуі атын, киімін «айран ішерім» деп, солардың арқасында сыпайы, жұғымды жігіт атанбаққа, өзінен ілгерілерге елеулі болып, өзі қатардағының ішін күйдіріп, өзінен кейіншілерге «әттең, дүние-ай, осылардың атындай ат мініп, киіміндей киім кигеннің не арманы бар екен?!» - дейтұғын болмаққа ойланбақ.\n\nМұның бәрі - масқаралық, ақымақтық. Мұны адам бір ойламасын, егерде бір ойласа, қайта адам болмағы - қиын іс. Кербез дегенді осындай кер, кердең немеден безіңдер деген сөзге ұқсатамын. Тегінде, адам баласы адам баласынан ақыл, ғылым, ар, мінез деген нәрселермен озбақ. Онан басқа нәрсеменен оздым ғой демектің бәрі де - ақымақтық.","Адам ата-анадан туғанда есті болмайды: естіп, көріп, ұстап, татып ескерсе, дүниедегі жақсы, жаманды таниды дағы, сондайдан білгені, көргені көп болған адам білімді болады. Естілердің айтқан сөздерін ескеріп жүрген кісі өзі де есті болады. Әрбір естілік жеке өзі іске жарамайды. Сол естілерден естіп, білген жақсы нәрселерді ескерсе, жаман дегеннен сақтанса, сонда іске жарайды, сонда адам десе болады. Мұндай сөзді есіткенде шайқақтап, шалықтанып не салбырап, салғырттанып есітсе, не есіткен жерде қайта қайырып сұрап ұғайын деп тұшынбаса, не сол жерде сөздің расына көзі жетсе де, шыға беріп қайта қалпына кетсе, естіп-есітпей не керек? Осындай сөз танымайтұғын елге сөз айтқанша, өзіңді танитұғын шошқаны баққан жақсы деп бір хакім айтқан екен, сол секілді сөз болады.","Тағдырдың жарлығын білесіздер - өзгерілмейді. Пендеде бір іс бар жалығу деген. Ол - тағдырда адаммен бірге жаратылған нәрсе, оны адам өзі тапқан емес. Оған егер бір еліксе, адам баласы құтылмағы қиын. Қайраттанып, сілкіп тастап кетсең де, ақырында тағы келіп жеңеді. Ақылы түгел, ойлы адамның баласы байқаса, осы адам баласының жалықпайтұғын нәрсесі бар ма екен? Тамақтан да, ойыннан да, күлкіден де, мақтаннан да, кербездіктен де, тойдан да, топтан да, қатыннан да көңіл, аз ба, көп пе, жалығады. Оның үшін бәрінің ғайыбын көреді, баянсызын біледі, көңілі бұрынғыдан да суый бастайды. Дүние бірқалыпты тұрмайды, адамның қуаты, ғұмыры бірқалыпты тұрмайды. Әрбір мақлұққа құдай тағала бірқалыпты тұрмақты берген жоқ. Енді көңіл қайдан бірқалыпты тұра алады?\n\nБірақ осы жалығу деген әрнені көрем деген, көп көрген, дәмін, бағасын, бәрінің де баянсызын біліп жеткен, ойлы адамнан шығады. Соншалық ғұмырының баянсызын, дүниенің әрбір қызығының акырының шолақтығын көрген-білгендер тіршіліктен де жалықса болады. Бұлай болғанда ақымақтық, қайғысыздық та бір ғанибет екен деп ойлаймын.","Аз ба, көп пе, адам баласы бір түрлі мақтаннан аман болмағы - қиын іс. Сол мақтан деген нәрсенің мен екі түрлісін байқадым: біреуінің атын үлкендік деп атаймын, біреуін мақтаншақтық деймін. Үлкендік - адам ішінен өзін-өзі бағалы есеп қылмақ. Яғни, надан атанбастығын, жеңіл атанбастығын, мақтаншақ атанбастығын, әдепсіз, арсыз, байлаусыз, пайдасыз, сұрамшақ, өсекші, өтірікші, алдамшы, кеселді - осындай жарамсыз қылықтардан сақтанып, сол мінездерді бойына қорлық біліп, өзін ондайлардан зор есептемек. Бұл мінез - ақылдылардың, арлылардың, артықтардың мінезі. Олар өзімді жақсы демесе, мейлі білсін, жаман дегізбесем екен деп азаптанады. Екінші, мақтаншақ деген біреуі «демесін» демейді, «десін» дейді. Бай десін, батыр десін, қу десін, пысық десін, әрдайым не түрлі болса да, «десін» деп азаптанып жүріп, «демесінді» ұмытып кетеді. Ұмытпақ түгіл, әуелі іс екен деп ескермейді. Мұндай мақтаншақтардың өзі үш түрлі болады. Біреуі жатқа мақтанарлық мақтанды іздейді. Ол - надан, ләкин надан да болса адам. Екіншісі өз елінің ішінде мақтанарлық мақтанды іздейді. Оның надандығы толық, адамдығы әбден толық емес. Үшіншісі өз үйіне келіп айтпаса, я ауылына ғана келіп айтпаса, өзге кісі қостамайтын мақтанды іздейді. Ол - наданның наданы, ләкин өзі адам емес.\n\nЖатқа мақталсам екен деген елім мақтаса екен дейді. Еліме мақталсам екен деген ағайыным мақтаса екен дейді. Ағайынның ішінде өзі мақтау іздеген өзімді өзім мақтап жетем дейді.","Дәл осы күнде қазақтың ішінде кімді жақсы көріп, кімді қадірлеймін деп ойладым.\n\nБайды қадірлейін десең, бай жоқ. Бай болса, өз басының, өз малының еркі өзінде болмас па еді? Ешбір байдың өз малының еркі өзінде жоқ. Кей бай өзі біреумен күш таластырамын деп, жүз кісіге қорғалауықтығынан жалынып, малын үлестіріп жүр. Ойлайды: жалынтып бердім деп, ақымақтығынан. Жоқ, өзі жалынып беріп жүр. Қайыр да емес, мырзалық та емес, өз елімен, өз жерімен ойраңдасып, ойсыздарға қойнын ашып, малын шашып жүр. Кей байлар, елдегі құттылар, сүттілер берекелесе алмаған соң, кеселді қулар көбейіп кетіп, көп қорқытып, іздеген нәрсесі жоқ, еріксіз кім болса соған жеміт болып жүр.\n\nМырзаларды қадірлейін десең, осы күнде анық мырза елде жоқ, мал бергіш мырза иттен көп. Біреу бір пайдама келтірем деп мырза болып жүр. Біреулер к...не құрым киізді тұзға малшып тыққан соң есі шығып, мырза болып, еріксіз кім болса соған талтайып емізіп жүр.\n\nБолыс пен биді құрметтейін десең, құдайдың өзі берген болыстық пен билік елде жоқ. Сатып алған, жалынып, бас ұрып алған болыстық пенен биліктің ешбір қасиеті жоқ.\n\nМықтыны құрметтейін десең, жаманшылыққа елдің бәрі мықты, жақсылыққа мықты кісі елде жоқ. Есті кісіні тауып құрметтейін десең, әділет, ұят, нысапқа есті кісі елде жоқ. Қулық, сұмдық, арамдық, амалға елдің бәрі де есті. Ғаріп-қасар бишараны құрметтейін десең, жатқан түйеге міне алмаса да, ол момындыққа есеп емес. Егер мінерлік жайы болса, бірдемені ептеп ілерлік те жайы бар.\n\nЕнді қалды қу мен сұм, олар өзі де қуартпай, суалтпай тыныштық көрер емес.\n\nЖә, кімді сүйдік, кімнің тілеуін тіледік? Өзі құрттанып шашылған болыс-билер тұра тұрсын. Енді, әлбәттә, амал жоқ, момындығынан «Ырыс баққан дау бақпас» деген мақалмен боламын деп, бергенінен жаға алмай, жарымын беріп, жарымын тыныштығымен баға алмай, ұры, залым, қуларға жеміт болып жүрген шын момын байларды аямасаң һәм соның тілеуін тілемесең болмайды. Сонан басқаны таба алмадым.","Біздің қазақты оңдырмай жүрген бір қуаныш, бір жұбаныш дегендер бар.\n\nОның қуанышы - елде бір жаманды тауып, я бір адамның бұл өзі қылмаған жаманшылығы шықса, қуанады. Айтады: құдай пәленшеден сақтасын, о да адаммын деп жүр ғой, оның қасында біз сәулелі кісінің бірі емеспіз бе, оған қарағанда мен таза кісі емеспін бе? - деп. Оған құдай тағала айтып па, пәленшеден тәуір болсаң болады деп? Я білгендер айтып па, әйтеуір өзіңнен наданшылығы асқан, я жаманшылығы артылған кісі табылса, сен жаманға қосылмайсың деп? Жаманға салысып жақсы бола ма? Жақсыға салысып жақсы болады дағы. Жүз ат бәйгеге қосылса, мен бәйге алдым деген сөз болса, алдыңда неше ат бар деп сұрар, артыңда неше ат бар еді деп сұрағанның несі сөз? Мен бес аттан, он аттан ілгері едім дегеннің несі қуаныш?\n\nЕнді жұбанышы - жалғыз біз бе, елдің бәрі де сүйтіп-ақ жүр ғой, көппен көрген ұлы той, көппен бірге болсақ болады да деген сөзді жұбаныш қылады. Оған құдай тағала айтып па, көптен қалмасаң болады деп. Көпке қаһарым жүрмейді деп. Көпке тұзағым жетпейді деп пе? Ғылым көпке келіп пе? Біреуден тарап па? Хикмет көптен тарай ма? Бірден тарай ма? Көпке қорлық жүрмей ме? Бір үйдің іші түгел ауырса, жеңіл тие ме? Жер білмеген көп адам адасып жүрсе, бір жер білетұғын кісінің керегі жоқ па екен? Көп кісі жолаушының бәрінің аты арығаны жақсы ма? Жоқ, жармысы арыса, жармысының күйлісі жақсы ма? Жұт келсе, елдің бәрінің түгел жұтағаны жақсы ма? Жарым-жартысы аман қалғаны жақсы ма? Осы көп ақымақтың бір ақымаққа несі жұбаныш? Тұқымымызбен аузымыз сасық болушы еді деген жаман күйеу қалыңдығын жеңіп пе? Көңілін сол сөзі разы қылуға жетіп пе? Ендеше, көбіңнен қалма, сен де аузыңды сасыта бер деп пе?!","Жер жүзінде екі мың миллионнан көп артық адам бар, екі миллиондай қазақ бар. Біздің қазақтың достығы, дұшпандығы, мақтаны, мықтылығы, мал іздеуі, өнер іздеуі, жұрт тануы ешбір халыққа ұқсамайды. Бірімізді біріміз аңдып, жаулап, ұрлап, кірпік қақтырмай отырғанымыз. Үш миллионнан халқы артық дүниеде бір қала да бар, дүниенің бас-аяғын үш айналып көрген кісі толып жатыр. Өстіп, жер жүзіндегі жұрттың қоры болып, бірімізді біріміз аңдып өтеміз бе? Жоқ, қазақ ортасында да ұрлық, өтірік, өсек, қастық қалып, өнерді, малды түзден, бөтен жақтан түзу жолмен іздеп, өрістерлік күн болар ма екен? Әй, не болсын!.. Жүз қараға екі жүз кісі сұғын қадап жүр ғой, бірін-бірі құртпай, құрымай тыныш таба ма?","Балаларды оқытқан да жақсы, бірақ құлшылық қыларлық қана, түркі танырлық қана таза оқыса болады. Оның үшін бұл жер дарулхарап, мұнда әуелі мал табу керек, онан соң араб, парсы керек. Қарны аш кісінің көңілінде ақыл, бойында ар, ғылымға құмарлық қайдан тұрсын? Ашап-ішімге малдың тапшылығы да ағайынның араздығына уә әртүрлі пәлеге, ұрлық, зорлық, қулық, сұмдық секілді нәрселерге үйірлендіруге себеп болатұғын нәрсе. Мал тапса, қарын тояды. Онан соң, білім түгіл өнер керек екен. Соны үйренейін не балама үйретейін деп ойына жақсы түседі. Орысша оқу керек, хикмет те, мал да, өнер де, ғылым да - бәрі орыста тұр. Зарарынан қашық болу, пайдасына ортақ болуға тілін, оқуын, ғылымын білмек керек. Оның себебі олар дүниенің тілін білді, мұндай болды. Сен оның тілін білсең, көкірек көзің ашылады. Әрбіреудің тілін, өнерін білген кісі оныменен бірдейлік дағуасына кіреді, аса арсыздана жалынбайды. Дінге де жақсы білгендік керек. Жорғалықпенен көңілін алсам екен деген надан әке-шешесін, ағайын-жұртын, дінін, адамшылығын жауырынынан бір қаққанға сатады. Тек майордың күлгені керек деп, к...і ашылса да, қам жемейді. Орыстың ғылымы, өнері - дүниенің кілті, оны білгенге дүние арзанырақ түседі. Ләкин осы күнде орыс ғылымын баласына үйреткен жандар соның қаруымен тағы қазақты аңдысам екен дейді. Жоқ, олай ниет керек емес. Малды қалай адал еңбек қылғанда табады екен, соны үйретейік, мұны көріп және үйренушілер көбейсе, ұлықсыған орыстардың жұртқа бірдей законы болмаса, законсыз қорлығына көнбес едік. Қазаққа күзетші болайын деп, біз де ел болып, жұрт білгенді біліп, халық қатарына қосылудың қамын жейік деп ниеттеніп үйрену керек. Қазір де орыстан оқыған балалардан артық жақсы кісі шыға алмай да тұр. Себебі: ата-анасы, ағайын-туғаны, бір жағынан, бұзып жатыр. Сүйтсе де, осы оқыған балалар - ана оқымаған қазақ балаларынан үздік, озық. Не қылса да сөзді ұқтырса болады оларға. Жақсы атаның балалары да көп оқыған жоқ, қайта, кедейдің балаларын орысқа қорлап берді. Олар осыдан артық қайда барсын? Және де кейбір қазақтар ағайынымен араздасқанда: «Сенің осы қорлығыңа көнгенше, баламды солдатқа беріп, басыма шаш, аузыма мұрт қойып кетпесем бе!» деуші еді. Осындай жаман сөзді, құдайдан қорықпай, пендеден ұялмай айтқан қазақтардың баласы оқығанменен не бола қойсын? Сонда да өзге қазақ балаларынан артық үйренгені немене, қай көп үйреніпті? Кірді, шықты, ілді, қайтты, түбегейлеп оқыған бала да жоқ. Әкесі ел ақшасымен оқығанға әрең оқытады, өз малын не қылып шығарсын? Турасын ойлағанда, балаңа қатын әперме, енші берме, барыңды салсаң да, балаңа орыстың ғылымын үйрет! Мына мен айтқан жол - мал аяр жол емес. Құдайдан қорық, пендеден ұял, балаң бала болсын десең - оқыт, мал аяма! Әйтпесе, бір ит қазақ болып қалған соң, саған рахат көрсете ме, өзі рахат көре ме, я жұртқа рахат көрсете ме?","Біздің қазақтың қосқан аты алдында келсе,күреске түсірген балуаны жықса, салған құсы алса, қосқан иті өзгеден озып барып ұстаса, есі шығып бір қуанады. Білмеймін, содан артық қуанышы бар ма екен? Әй, жоқ та шығар! Осы қуаныш бәрі де қазақ қарындастың ортасында бір хайуанның өнерінің артылғанына я бір бөтен адамның жыққанына мақтанарлық не орны бар? Ол озған, алған, жыққан өзі емес, яки баласы емес. Мұның бәрі - қазақтың қазақтан басқа жауы жоқ, биттей нәрсені бір үлкен іс қылған кісідей қуанған болып, ана өзгелерді ызаландырсам екен демек. Біреуді ызаландырмақ - шариғатта харам, шаруаға залал, ақылға теріс. Әншейін біреуді ыза қылмақтың несін дәулет біліп қуанады екен? Жә, болмаса, ана ыза болушы соншалық неге жер болып қалады екен?\n\nЖүйрік ат - кейде ол елде, кейде бұл елде болатұғын нәрсе, қыран құс та, жүйрік ит те - кейде оның қолына, кейде мұның қолына түсетұғын нәрсе. Күшті жігіт те үнемі бір елден шыға ма? Кейде ана елден, кейде мына елден шығады. Мұның бәрін адам өз өнеріменен жасаған жоқ. Бір озған, бір жыққан үнемі озып, үнемі жығып жүрмейді. Соның бәрін де біле тұра, жерге кіргендей болып я бір арамдығы, жамандығы шыққандай несіне ұялып, қорланады екен?\n\nЕнді осылардан білсеңіз болады: надан ел қуанбас нәрсеге қуанады һәм және қуанғанда не айтып, не қойғанын, не қылғанын өзі білмей, есі шығып, бір түрлі мастыққа кез болып кетеді. Һәм ұялғандары ұялмас нәрседен ұялады, ұяларлық нәрседен ұялмайды. Мұның бәрі - надандық, ақымақтықтың әсері. Бұларын айтсаң, кейбіреуі «рас, рас» деп ұйыған болады. Оған нанба, ертең ол да әлгілердің бірі болып кетеді. Көңілі, көзі жетіп тұрса да, хайуан секілді әуелгі әдетінен бойын тоқтата алмайды, бір тиянақсыздыққа түсіп кетеді, ешкім тоқтатып, ұқтырып болмайды. Не жаманшылық болса да бір әдет етсе, қазақ ол әдетінен еріксіз қорыққанда я өлгенде тоқтайды, болмаса ақылына жеңгізіп, мұным теріс екен деп біліп, ойланып өздігінен тоқтаған адамды көрмессің.","(Сократ хакімнің сөзі)\n\nБір күні Сократ хакім бір Аристодим деген ғалым шәкіртіне құдай табарака уа тағалаға құлшылық қылмақ турасында айтқан сөзі. Ол өзі құлшылық қылғандарға күлуші еді.\n\n- Әй, Аристодим, ешбір адам бар ма, сенің білуіңше, қылған өнерлері себепті адам таңырқауға лайықты? - деді.\n\nОл айтты:\n\nТолып жатыр, қазірет.\nБірінің атын аташы, - дейді.\n\nГомерге бәйітшілігі себепті, Софоклге трагедиясы себепті, яғни біреудің сыйпатына түспектік, Зевксиске суретшілігі себепті таңырқаймын, - деп, соған ұқсаған неше онан басқа өнерлері әшкере болған жандарды айтты.\n\nОлай болса, кім артықша ғажайыптануға лайықты: жансыз, ақылсыз, құр пішінді жасайтұғын суретші ме? Я жан иесі, ақыл иесі адамды жаратушы ма? - дейді. Соңғысы лайықты, - дейді, - бірақ ол жаратушы жаратты, өздігінен кез келіп, солай болып кетпей, басынан біліп істеген хикметімен болса, - дейді. Жә, пайдалы нәрсе дүниеде көп, бірінің пайдасы көрініп, білініп тұрады. Кейбірінің пайдасы анық білінбейді. Соның қайсысын хикмет көресің? - деді. Әрине, әшкере пайдаға бола жаратылғанын хикмет десек керек деймін, - дейді.\n\nЖә, олай болса, адамды жаратушы хауаси хамса заһри бергенде, тахқиқ ойлап, олардың пайдасының барлығы түгел оған мұқтаж боларлығын біліп бергендігі әшкере тұр ғой. Әуелі көзді көрсін деп беріпті, егер көз жоқ болса, дүниедегі көрікті нәрселердің көркінен қайтып ләззат алар едік? Ол көз өзі нәзіктігінен керегіне қарай ашып, жауып тұруы үшін қабақ беріпті. Желден, ұшқыннан қаға берсін болуы үшін кірпік беріпті. Маңдай теріні көзден қағып тұруға керек болғандығынан, басқа тағы керегі бар қылып қас беріпті. Құлақ болмаса, не қаңғыр, не дүңгір, дауыс, жақсы үн, күй, ән – ешбірінен ләззаттанып хабар ала алмас едік. Мұрын иіс білмесе, дүниеде не тәтті, не қатты не дәмдінің қайсысынан ләззат алар едік? Бұлардың бәрі біздің пайдамыз емес пе?\n\nКөзді, мұрынды ауызға жақын жаратыпты, ішіп-жеген асымыздың тазалығын көріп, иісін біліп, ішіп-жесін деп. Бізге керегі бар болса да, жиіркенерлік жері бар тесіктерді бұл бастағы ғазиз білімді жерімізден алыс апарып тесіпті, мұның бәрі хикметпен біліп істелгендігіне дәлел емес пе? - депті. Сонда Аристодим тахқиқ ойлап тексергенде, адамды жаратушы артық хикмет иесі екендігіне һәм махаббатыменен жаратқандығына шүбәсі қалмады. Олай болғанда және не ойлайсың, һәмма мақұлыхатты жас балаларына елжіретіп, үйірілтіп тұруын көргенде уа һәмма мақұлыхаттың өлімін жек көріп, тіршілікте көп қалмақшылығын тілеп, ижтиһад қылуын көргенде, өсіп-өнуінің қамында болудан басқа істі аз ойламақтары - бұларының бәрі жұрт болсын, өссін, өнсін үшін. Солардың бәрін жаратқанда көңілдерін солайша ынтықтандырып қойғандығы һәм мұның бәрі жақсы көргендігінен екенін білдірмей ме? - дейді.\n\nЕй, Аристодим! Қалайша сен бір өзіңнен, яғни адамнан басқада ақыл жоқ деп ойлайсың? - еді. - Адамның денесі өзің жүрген жердің бір битімдей құмына ұқсас емес пе? Денеңде болған дымдар жердегі сулардың бір тамшысындай емес пе? Жә, сен бұл ақылға қайдан ие болдың? Әрине, қайдан келсе де, жан деген нәрсе келді де, сонан соң ие болдың. Бұл ғаламды көрдің, өлшеуіне ақылың жетпейді, келісті көрімдігіне һәм қандай лайықты жарастықты законімен жаратылып, оның ешбірінің бұзылмайтұғынын көресің. Бұлардың бәріне таңғажайып қаласың һәм ақылың жетпейді, осылардың бәрі де кез келгендікпен бір нәрседен жаралған ба, яки бұлардың иесі бір өлшеусіз ұлы ақыл ма? Егер ақылменен болмаса, бұлайша бұл есебіне, өлшеуіне ой жетпейтұғын дүние әрбір түрлі керекке бола жаратылып һәм бір-біріне себеппен байланыстырылып, пенденің ақылына өлшеу бермейтұғын мықты көркем законге қаратылып жаратылды, - дейді.\n\nОл айтты:\n\nТахқиқ бұл айтқаныңның бәрі рас, жаратушы артық ақыл иесі екендігі мағлұм болды. Ол құдайдың ұлықтығына іңкәрім жоқ. Бірақ сондай ұлық құдай менің құлшылығыма не қылып мұқтаж болады? - деді.\n\nЕй, Аристодим! Қате айтасың. Мұқтаж болмағанда да, біреу сенің қамыңды жесе, сенің оған қарыздар екендігіңе де ұстаз керек пе? - деді.\n\nАристодим айтты:\n\nОл менің қамымды жейтұғынын мен қайдан білем? - деді.\n\nЖә, олай болса һәмма мақұлыққа да қара, өзіңе де қара, жанды бәрімізге де беріпті. Жанның жарығын бәрімізге де бірдей ұғарлық қылып беріп пе? Адам алдын, артын, осы күнін - үшеуін де тегіс ойлап тексереді. Хайуан артын, осы күнін де бұлдыр біледі, алдыңғы жағын тексермекке тіпті жоқ. Хайуанға берген денеге қара, адамға берген денеге қара. Адам екі аяғына басып тік тұрып, дүниені тегіс көрмекке, тегіс тексермекке лайықты һәм өзге хайуандарды құлданарлық, пайдасын көрерлік лайығы бар. Хайуанның бірі аяғына сеніп жүр, бір өзіңдей хайуанды құлданарлық лайығы жоқ. Адам өзі өзіне сенбесе, адамды да хайуан секілді қылып жаратса, ешнәрсеге жарамас еді. Хайуанға адамның ақылын берсе, мұнша шеберлік, мұнша даркарлік, бір-біріне ғылым үйретерлік шешендік салахият ол денеге лайықты келмейді. Қай өгіз шаһар жасап, құрал жасап, неше түрлі сайман жасап, сыпайылық шеберліктің үдесінен шығарлық қисыны бар? Бірақ адам баласы болмаса, бұл ғажайып ақылды және ғажайыппен жасаған денеге кіргізіп, мұнша салахият иесі қылғаны хиқметпенен өзге хайуанға сұлтан қылғандығына дәлел емес пе? Ол дәлел болса, адам баласын артық көріп, қамын әуелден алланың өзі ойлап жасағанына да дәлел емес пе? Енді адам баласының құлшылық қылмаққа қарыздар екені мағлұм болмай ма? - депті.\n\n","Ей, мұсылмандар! Біреу бай болса, біреу кедей болса, біреу ауру, біреу сау болса, біреу есті, біреу есер болса, біреудің көңілі жақсылыққа мейілді, біреудің көңілі жаманшылыққа мейілді - бұлар неліктен десе біреу, сіздер айтасыздар: құдай тағаланың жаратуынан яки бұйрығынша болған іс деп. Жә, олай болса, біз құдай тағаланы айыбы жоқ, міні жоқ, өзі әділ деп иман келтіріп едік. Енді құдай тағала бір антұрғанға еңбексіз мал береді екен. Бір құдайдан тілеп, адал еңбек қылып, пайда іздеген кісінің еңбегін жандырмай, қатын-баласын жөндеп асырарлық та қылмай, кедей қылады екен. Ешкімге залалсыз бір момынды ауру қылып, қор қылады екен. Қайда бір ұры, залымның денін сау қылады екен. Әке-шешесі бір екі баланың бірін есті, бірін есер қылады екен. Тамам жұртқа бұзық болма, түзік бол деп жарлық шашып, жол салады екен. Түзікті бейішке шығарамын деп, бұзықты тозаққа саламын деп айта тұра, пендесінің біреуін жақсылыққа мейілдендіріп, біреуін жаманшылыққа мейілдендіріп, өзі құдайлық құдіретімен біреуін жақсылыққа бұрып, біреуін жамандылыққа бұрып жіберіп тұрады екен. Осының бәрі құдай тағаланың айыпсыз, мінсіз ғафур рахимдығына, әділдігіне лайық келе ме? Жұрт та, мүлік те - бәрі құдайдың өзінікі. Бұл қылғанын не дей аламыз? Өз мүлкін өзі не қылса қыла береді. Оны айыпты болады дей алмаймыз десең, ол сөзің құдай тағаланың айыбы, міні жоқ емес, толып жатыр, бірақ айтуға бата алмаймыз дегенің емес пе? Олай болғанда, пенде өз тырысқандығыменен не табады? Бәрін қылушыға қылдырушы өзі екен. Пенде пендеге өкпелейтұғын ешнәрсе жоқ. Кім жақсылық, кім жамандық қылса дағы құдайдан келген жарлықты қылып жүр екен дейміз бе? Құдай тағала әрбір ақылы бар кісіге иман парыз, әрбір иманы бар кісіге ғибадат парыз деген екен. Және де әрбір рас іс ақылдан қорықпаса керек. Жә, біз енді ақылды еркіне жібермесек, құдай тағаланың ақылы бар кісіге иман парыз дегені қайда қалады? «Мені таныған ақылменен таныр» дегені қайда қалады? Дініміздің бір жасырын тұрған жалғаны жоқ болса, ақылды, оны ойлама дегенімізге пенде бола ма? Ақыл тоқтамаған соң, діннің өзі неден болады. Әуелі иманды түзетпей жатып, қылған ғибадат не болады? Жоқ, сен жақсылық, жамандықты жаратқан - құдай, бірақ қылдырған құдай емес, ауруды жаратқан - құдай, ауыртқан құдай емес, байлықты, кедейлікті жаратқан - құдай, бай қылған, кедей қылған құдай емес деп, нанып ұқсаң болар, әйтпесе - жоқ.","Біздің қазақтың мақалдарының көбінің іске татырлығы да бар, іске татымақ түгіл, не құдайшылыққа, не адамшылыққа жарамайтұғыны да бар.\n\nӘуелі «Жарлы болсаң, арлы болма» дейді. Ардан кеткен соң, тірі болып жүрген құрысын. Егер онысы жалға жүргеніңде жаныңды қинап еңбекпенен мал тап деген сөз болса, ол - ар кететұғын іс емес. Тыныш жатып, көзін сатып, біреуден тіленбей, жанын қарманып, адал еңбекпен мал іздемек - ол арлы адамның ісі.\n\n«Қалауын тапса, қар жанады», «Сұрауын тапса, адам баласының бермейтіні жоқ» деген - ең барып тұрған құдай ұрған сөз осы. Сұрауын табамын, қалауын табамын деп жүріп қорлықпенен өмір өткізгенше, малды не жерден сұрау керек, не аққан терден сұрау керек қой.\n\n«Атың шықпаса, жер өрте» дейді. Жер өртеп шығарған атыңның несі мұрат? «Жүз күн атан болғанша, бір күн бура бол» дейді. Тәңірге жазып, мінбей-түспей арып, шөмеңдеп диуаналықпен бір күн болған буралық неге жарайды?\n\n«Алтын көрсе, періште жолдан таяды» дейді. Періштеден садаға кеткір-ай! Періште алтынды не қылсын, өзінің көрсеқызар сұмдығын қостағалы айтқаны. «Ата-анадан мал тәтті, алтынды үйден жан тәтті» дейді. Ата-анасынан мал тәтті көрінетұғын антұрғанның тәтті дерлік не жаны бар. Бұлардың бәрінен де қымбат ата-анасын малға сатпақ ең арсыздың ісі емес пе? Ата-ана шамасы келсе, михнаттанып мал жиса да, дүниелік жиса да, артымда балаларыма қалсын дейді. Ол ата-ананы малға сатқан соң, құдайға дұшпандық іс емес пе? Осындай білместікпенен айтылған сөздеріне бек сақ болу керек.","Қырқын мінсе қыр артылмайтұғын осы бір «қырт мақтан» деген бір мақтан бар, сол неге керек, неге жарайды? Ол ар, есті білмейді, намысты білмейді, кең толғау, үлкен ой жоқ, не балуандығы жоқ, не батырлығы жоқ, не адамдығы жоқ, не ақылдылығы, арлылығы жоқ. Мойынын бұрып қойып: «Өй, тәңірі-ай, қойшы әрі, кімнен кім артық дейсің, кімнің басы кімнің қанжығасында жүр, ол менің қазаныма ас салып беріп жүр ме, мен онан сауын сауып отырмын ба?» - деп бұлғақтап, немесе: «аяғаным жаным ба? Өй, енесін ұрайын, өліп кетпей неге керек? Азар болса атылып, я осы үшін айдалып кетсем де көнгенім-ақ! Әйтеуір бір өлім бар ма?» - деп қалшылдайтұғын кісі көп қой.\n\nӨздерің көріп жүрсіңдер, осы айтқан сөз бойына лайық қазақ көрдіңдер ме? Өлімге шыдайтұғын қазақ көргенім жоқ, өлімге шыдамаймын деген де қазақ көргенім жоқ, кеңірдегін ғана көрсетеді-ау: «қиылып қана қалайын» деп. Егер осы сөз бойына лайық кісі көрінсе, ақылы жоқ болса да, қайратыменен-ақ кісі айдындыратұғын адам болғаны ғой! Егер шын айғайды көргенде, кірер жерін таба алмайтұғын дарақы, жұртты осы сөзімен айдындырамын, «мына кәпірден кісі шошитұғын екен» дегізіп айдындырайын деп айтып отырған құр домбытпасы болып, босқа қоқиып отырса, соны не дейміз? Ай, құдай-ай! Жанға мырзалық қылатұғын, ердің жадағайда-ақ сертке тұрғыштығы, малға мырзалығы, дүниені бір тиын есеп көрмейтұғын жомарттығы - әртүрлі белгісі бойынша тұрмас па еді? «Ұялмас бетке талмас жақ береді» деп, көп былжыраған арсыз, ұятсыздың бірі дағы.","Естіген нәрсені ұмытпастыққа төрт түрлі себеп бар: әуелі - көкірегі байлаулы берік болмақ керек; екінші — сол нәрсені естігенде я көргенде ғибрәтлану керек, көңілденіп, тұшынып, ынтамен ұғу керек; үшінші — сол нәрсені ішінен бірнеше уақыт қайтарып ойланып, көңілге бекіту керек; төртінші - ой кеселі нәрселерден қашық болу керек. Егер кез болып қалса, салынбау керек. Ой кеселдері: уайымсыз салғырттық, ойыншы-күлкішілдік, я бір қайғыға салыну, я бір нәрсеге құмарлық пайда болу секілді. Бұл төрт нәрсе - күллі ақыл мен ғылымды тоздыратұғын нәрселер.","Білім-ғылым үйренбекке талап қылушыларға әуелі білмек керек. Талаптың өзінің біраз шарттары бар. Оларды білмек керек, білмей іздегенмен табылмас.\n\nӘуелі - білім-ғылым табылса, ондай-мұндай іске жаратар едім деп, дүниенің бір қызықты нәрсесіне керек болар еді деп іздемекке керек. Оның үшін білім - ғылымның өзіне ғана құмар, ынтық болып, бір ғана білмектіктің өзін дәулет білсең және әр білмегеніңді білген уақытта көңілде бір рахат хұзур хасил болады. Сол рахат білгеніңді берік ұстап, білмегеніңді тағы да сондай білсем екен деп үміттенген құмар, махаббат пайда болады. Сонда әрбір естігеніңді, көргеніңді көңілің жақсы ұғып, анық өз суретімен ішке жайғастырып алады.\n\nЕгер дін көңілің өзге нәрседе болса, білім-ғылымды бір-ақ соған себеп қана қылмақ үшін үйренсең, ондай білімге көңіліңнің мейірімі асырап алған шешеңнің мейірімі секілді болады. Адамның көңілі шын мейірленсе, білім-ғылымның өзі де адамға мейірленіп, тезірек қолға түседі. Шала мейір шала байқайды.\n\nЕкінші - ғылымды үйренгенде, ақиқат мақсатпен білмек үшін үйренбек керек. Бахасқа бола үйренбе, азырақ бахас көңіліңді пысықтандырмақ үшін залал да емес, көбірек бахас адамды түземек түгіл, бұзады. Оның себебі әрбір бахасшыл адам хақты шығармақ үшін ғана бахас қылмайды, жеңбек үшін бахас қылады. Ондай бахас хусідшілікті зорайтады, адамшылықты зорайтпайды, бәлкім, азайтады. Және мақсаты ғылымдағы мақсат болмайды, адам баласын шатастырып, жалған сөзге жеңдірмекші болады. Мұндай қиял өзі де бұзықтарда болады. Жүз тура жолдағыларды шатастырушы кісі бір қисық жолдағы кісіні түзеткен кісіден садаға кетсін! Бахас - өзі де ғылымның бір жолы, бірақ оған хирслану жарамайды. Егер хирсланса, өз сөзімшіл ғурурлық, мақтаншақтық, хусідшілік бойын жеңсе, ондай адам бойына қорлық келтіретұғын өтіріктен де, өсектен де, ұрсып-төбелесуден де қашық болмайды.\n\nҮшінші - әрбір хақиқатқа тырысып ижтиһатыңмен көзің жетсе, соны тұт, өлсең айрылма! Егерде ондай білгендігің өзіңді жеңе алмаса, кімге пұл болады? Өзің құрметтемеген нәрсеге бөтеннен қайтіп құрмет күтесің?\n\nТөртінші - білім-ғылымды көбейтуге екі қару бар адамның ішінде: бірі - мұлахаза қылу, екіншісі - берік мұхафаза қылу. Бұл екі қуатты зорайту жаһатінде болу керек. Бұлар зораймай, ғылым зораймайды.\n\nБесінші - осы сөздің он тоғызыншы бабында жазылған ақыл кеселі деген төрт нәрсе бар. Содан қашық болу керек. Соның ішінде уайымсыз салғырттық деген бір нәрсе бар, зинһар, жаным, соған бек сақ бол, әсіресе, әуелі - құданың, екінші - халықтың, үшінші - дәулеттің, төртінші - ғибраттың, бесінші - ақылдың, ардың -бәрінің дұшпаны. Ол бар жерде бұлар болмайды.\n\nАлтыншы - ғылымды, ақылды сақтайтұғын мінез деген сауыты болады. Сол мінез бұзылмасын! Көрсеқызарлықпен, жеңілдікпен, я біреудің орынсыз сөзіне, я бір кез келген қызыққа шайқалып қала берсең, мінездің беріктігі бұзылады. Онан соң оқып үйреніп те пайда жоқ. Қоярға орны жоқ болған соң, оларды қайда сақтайсың? Қылам дегенін қыларлық, тұрам дегенінде тұрарлық мінезде азғырылмайтын ақылды, арды сақтарлық беріктігі, қайраты бар болсын! Бұл беріктік бір ақыл, ар үшін болсын!","Егерде мал керек болса, қолөнер үйренбек керек. Мал жұтайды, өнер жұтамайды. Алдау қоспай адал еңбегін сатқан қолөнерлі - қазақтың әулиесі сол. Бірақ құдай тағала қолына аз-маз өнер берген қазақтардың кеселдері болады.\n\nӘуелі — бұл ісімді ол ісімнен асырайын деп, артық ісмерлер іздеп жүріп, көріп, біраз істес болып, өнер арттырайын деп, түзден өнер іздемейді. Осы қолындағы аз-мұзына мақтанып, осы да болады деп, баяғы қазақтың талапсыздығына тартып, жатып алады.\n\nЕкінші - ерінбей істей беру керек қой. Бір-екі қара тапса, малға бөге қалған кісімсіп, «маған мал жоқ па?» дегендей қылып, еріншектік, салдау-салғырттыққа, кербездікке салынады.\n\nҮшінші - «дарқансың ғой, өнерлісің ғой, шырағым», немесе «ағеке, нең кетеді, осы ғанамды істеп бер!» дегенде «маған да біреу жалынарлыққа жеткен екенмін» деп мақтанып кетіп, пайдасыз алдауға, қу тілге алданып, өзінің уақытын өткізеді. Және анаған дүниенің қызығы алдауды білген дегізіп, көңілін де мақтандырып кетеді.\n\nТөртінші - тамыршылдау келеді. Бағанағы алдамшы шайтан тамыр болалық деп, бір болымсыз нәрсені берген болып, артынан үйтемін-бүйтемін, қарық қыламын дегенге мәз болып, тамырым, досым десе, мен де керектінің бірі болып қалыппын ғой деп, және жасынан іс істеп, үйден шықпағандық қылып, жоқ-барға тырысып, алдағанды білмей, дереу оның жетпегенін жеткіземін деп, тіпті жетпесе өзінен қосып, қылып бер дегенінің бәрін қылып беріп, күні өтіп, еңбек қылар уақытынан айрылып, «жоғары шыққа» қарық болып, тамақ, киім, борыш есінен шығып кетіп, енді олар қысқан күні біреудің малын бұлдап қарызға алады. Оны қылып берейін, мұны қылып берейін деп, соныменен табыс құралмай, борышы асып, дауға айналып, адамшылықтан айрылып, қор болып кетеді. Осы несі екен. Қазақтың баласының өзі алдағыш бола тұрып және өзі біреуге алдатқыш болатұғыны қалай?","Жұрттың бәрі біледі өлетұғынын және өлім үнемі қартайтып келмейтұғынын, бір алғанды қата жібермейтұғынын. Қазақ осыған да, амал жоқ, нанады, анық өз ойына, ақылына тексертіп нанбайды. Және һәмманы жаратқан құдай бар, ахиретте сұрау алады, жамандыққа жазғырады, жақсылыққа жарылғайды, жазғыруы да, жарылғауы да пенде ісіне ұқсамайды, бегірек есепсіз қинауы да бар, бегірек есепсіз жетістіруі де бар деп - бәріне сендік дейді. Жоқ, онысына мен сенбеймін? Олар сендім десе де, анық сенген кісіге уайым ойлап не керек? Осы екеуіне лайықты жақсылықты өздері де іздеп таба береді. Егерде осы екеуіне бұлдыр сеніп отырса, енді неге сендіре аламыз? Оны қайтіп түзете аламыз? Оларды мұсылман деп, қалайша иманы бар ғой дейміз?\n\nКімде-кім ахиретте де, дүниеде де қор болмаймын десе, білмек керек: еш адамның көңілінде екі қуаныш бірдей болмайды, екі ынтық құмарлық бірдей болмайды, екі қорқыныш, екі қайғы - олар да бірдей болмайды. Мұндай екі нәрсені бірдей болады деп айтуға мүмкін емес. Олай болғанда, қай адамның көңілінде дүние қайғысы, дүние қуанышы ахирет қайғысынан, ахирет қуанышынан артық болса - мұсылман емес. Енді ойлап қарай бер, біздің қазақ та мұсылман екен! Егерде екі нәрсе кез болса, бірі ахиретке керекті, бірі осы дүниеде керекті, бірін алса, бірі тимейтұғын болса, сонда біреу ахиретке керектіні алмай, екінші бір кез келгенде алармын деп, жоқ, егер кез болмайтұғын болса, кең құдай өзі кеңшілікпенен кешіреді дағы, мына кезі келіп тұрғанда мұны жіберіп болмас деп, дүниеге керектіні алса, енді ол кісі жанын берсе ахиретті дүниеге сатқаным жоқ деп, нануға бола ма?\n\nАдам баласына адам баласының бәрі - дос. Не үшін десең, дүниеде жүргенде туысың, өсуің, тоюың, ашығуың, қайғың, қазаң, дене бітімің, шыққан жерің, бармақ жерің - бәрі бірдей, ахиретке қарай өлуің, көрге кіруің, шіруің, көрден махшарда сұралуың - бәрі бірдей, екі дүниенің қайғысына, пәлесіне қаупің, екі дүниенің жақсылығына рахатың - бәрі бірдей екен. Бес күндік өмірің бар ма, жоқ па?.. Біріңе-бірің қонақ екенсің, өзің дүниеге де қонақ екенсің, біреудің білгендігіне білместігін таластырып, біреудің бағына, малына күндестік қылып, я көрсеқызарлық қылып, көз алартыспақ лайық па? Тілеуді құдайдан тілемей, пендеден тілеп, өз бетімен еңбегімді жандыр демей, пәленшенікін әпер демек - ол құдайға айтарлық сөз бе? Құдай біреу үшін біреуге жәбір қылуына не лайығы бар? Екі ауыз сөздің басын қосарлық не ақылы жоқ, не ғылымы жоқ бола тұра, өзімдікін жөн қыламын деп, құр «ой, тәңір-ай!» деп таласа бергеннің несі сөз? Оның несі адам?","Махшарға барғанда құдай тағала қажы, молда, сопы, жомарт, шейіт - соларды қатар қойып, сұрар дейді. Дүниеде ғиззат үшін, сый-құрмет алмақ үшін қажы болғанды, молда болғанды, сопы болғанды, жомарт болғанды, шейіт болғандарды бір бөлек қояр дейді. Ахиретке бола, бір ғана құдай тағаланың разылығын таппақ үшін болғандарды бір бөлек қояр дейді.\n\nДүние үшін болғандарға айтар дейді: «Сендер дүниеде қажеке, молдеке, сопеке, мырзеке, батыреке аталмақ үшін өнер қылып едіңдер, ол дүниең мұнда жоқ. Сендердің ол қызықты дүниең харап болған, сонымен қылған өнерлерің де бітті. Енді мұнда құрмет алмақ түгіл, сұрау беріңдер! Мал бердім, өмір бердім, не үшін сол малдарыңды, өмірлеріңді, бетіңе ахиретті ұстап, дін ниетің дүниеде тұрып, жұртты алдамақ үшін сарып қылдыңдар?» деп.\n\nАна шын ниетіменен орнын тауып, бір құдайдың разылығы үшін өнер қылғандарға айтар дейді: «Сендер бір ғана менің разылығымды іздеп малдарыңды, өмірлеріңді сарып қылып едіңдер, мен разы болдым. Сіздерге лайықты құрметті орным бар, дайын, кіріңдер! Һәм ол разылықтарыңнан басқа осы махшар ішінде, сендердің осы қылғаныңа өзі қылмаса да, іші еріп, ынтық болған достарың табылса, шафағат қылыңдар!» - деп айтар дейді.","Пайғамбарымыз салаллаһу ғалайһи уәссәлләмнің хадис шарифінде айтыпты: «мән лә хаяһүн уәлә иманун ләһу» деп, яғни кімнің ұяты жоқ болса, оның иманы да жоқ деген. Біздің қазақтың өзінің мақалы да бар: «ұят кімде болса, иман сонда» деген. Енді бұл сөзден білінді: ұят өзі иманның бір мүшесі екен. Олай болғанда білмек керек, ұят өзі қандай нәрсе? Бір ұят бар - надандықтың ұяты, жас бала сөз айтудан ұялған секілді, жақсы адамның алдына жазықсыз-ақ әншейін барып жолығысудан ұялған секілді. Не шариғатқа теріс, не ақылға теріс жазығы жоқ болса да, надандықтан бойын керістендіріп, шешілмегендік қылып, ұялмас нәрседен ұялған мұндай ұят шын ұялу емес - ақымақтық, жамандық.\n\nШын ұят сондай нәрсе, шариғатқа теріс, я ақылға теріс, я абиұрлы бойға теріс бір іс себепті болады. Мұндай ұят екі түрлі болады. Біреуі - ондай қылық өзіңнен шықпай-ақ, бір бөтен адамнан шыққанын көргенде, сен ұялып кетесің. Мұның себебі сол ұят істі қылған адамды есіркегендіктен болады. «Япырым-ай, мына байғұсқа не болады, енді мұның өзі не болады» дегендей, бір нәрсе іштен рахым секілді болып келіп, өзіңді қысып, қызартып кетеді. Біреуі сондай ұят, шариғатқа теріс, я ақылға, я абиұрлы бойға теріс, я адамшылыққа кесел қылық, қатеден яки нәпсіге еріп ғапылдықтан өз бойыңнан шыққандығынан болады. Мұндай ұят қылық қылғандығыңды бөтен кісі білмесе де, өз ақылың, өз нысабың өзіңді сөккен соң, іштен ұят келіп, өзіңе жаза тарттырады. Кірерге жер таба алмай, кісі бетіне қарай алмай, бір түрлі қысымға түсесің. Мұндай ұяты күшті адамдар ұйқыдан, тамақтан қалатұғыны да бар, хатта өзін-өзі өлтіретұғын кісілер де болады. Ұят деген - адамның өз бойындағы адамшылығы, иттігіңді ішіңнен өз мойныңа салып, сөгіс қылған қысымның аты. Ол уақытта тілге сөз де түспейді, көңілге ой да түспейді. Көзіңнің жасын, мұрныңның суын сүртіп алуға да қолың тимейді, бір ит боласың. Көзің кісі бетіне қарамақ түгіл, ешнәрсені көрмейді. Мұндайлыққа жетіп ұялған адамға өкпесі бар кісі кешпесе, яки оның үстіне тағы аямай өртендіріп сөз айтқан кісінің өзінің де адамшылығы жоқ десе болар.\n\nОсы күнде менің көрген кісілерім ұялмақ түгіл, қызармайды да. «Ол істен мен ұятты болдым дедім ғой, енді нең бар?» дейді. Я болмаса «Жә, жә, оған мен-ақ ұятты болайын, сен өзің де сүйтіп пе едің?» дейді. Немесе «пәленше де, түгенше де тірі жүр ғой, пәлен қылған, түген қылған, менікі оның қасында несі сөз, пәлендей, түгендей мәнісі бар емес пе еді?» деп, ұялтамын десең, жап-жай отырып дауын сабап отырады. Осыны ұялған кісі дейміз бе, ұялмаған кісі дейміз бе? Ұялған десек, хадис анау, жақсылардан қалған сөз анау. Осындай адамның иманы бар дейміз бе, жоқ дейміз бе?!","Адамның адамшылығы істі бастағандығынан білінеді, қалайша бітіргендігінен емес.\n\nКөңілдегі көрікті ой ауыздан шыққанда өңі қашады.\n\nХикмет сөздер өзімшіл наданға айтқанда, көңіл уанғаны да болады, өшкені де болады.\n\nКісіге біліміне қарай болыстық қыл; татымсызға қылған болыстық өзі адамды бұзады.\n\n\nӘкесінің баласы - адамның дұшпаны.\n\nАдамның баласы - бауырың.\n\nЕр артық сұраса да азға разы болады.\n\nЕз аз сұрар, артылтып берсең де разы болмас.\n\nӨзің үшін еңбек қылсаң, өзі үшін оттаған хайуанның бірі боласың; адамдықтың қарызы үшін еңбек қылсаң, Алланың сүйген құлының бірі боласың. Сократқа у ішкізген, Иоанна Аркті отқа өртеген, Ғайсаны дарға асқан, пайғамбарымызды түйенің жемтігіне көмген кім? Ол – көп, ендеше көпте ақыл жоқ. Ебін тап та, жөнге сал.\n\nАдам баласын заман өсіреді, кімде-кім жаман болса, оның замандасының бәрі виноват.\n\nМен егер закон қуаты қолымда бар кісі болсам, адам мінезін түзеп болмайды деген кісінің тілін кесер едім. Дүниеде жалғыз қалған адам – адамның өлгені. Қапашылықтың бәрі соның басында. Дүниеде бар жаман да көпте, бірақ қызық та, ермек те көпте. Бастапқыға кім шыдайды? Соңғыға кім азбайды?\n\nЖамандықты кім көрмейді? Үмітін үзбек – қайратсыздық. Дүниеде ешнәрседе баян жоқ екені рас, жамандық та қайдан баяндап қалады дейсің? Қары қалың, қатты қыстың артынан көгі мол жақсы жаз келмеуші ме еді?\n\nАшулы адамның сөзі аз болса, ыза, қуаты артында болғаны.\n\nҚуанбақтық пен бақ – мастықтың үлкені, мыңнан бір кісі-ақ к...н ашпайтұғын ақылы бойында қалады.\n\nЕгер ісім өнсін десең, ретін тап\n\nБиік мансап - биік жартас\n\nЕрінбей еңбектеп жылан да шығады,\n\nЕкпіндеп ұшып қыран да шығады;\n\nЖікшіл ел жетпей мақтайды,\n\nЖелөкпелер шын деп ойлайды.\n\nДүние - үлкен көл,\n\nЗаман - соққан жел,\n\nАлдыңғы толқын - ағалар,\n\nАртқы толқын - інілер,\n\nКезекпенен өлінер,\n\nБаяғыдай көрінер.\n\n\nБақпен асқан патшадан\n\nМимен асқан қара артық;\n\nСақалын сатқан кәріден\n\nЕңбегін сатқан бала артық.\n\n\nТоқ тіленші - адам сайтаны,\n\nХарекетсіз - сопы монтаны.\n\n\nЖаман дос - көлеңке:\n\nБасыңды күн шалса,\n\nҚашып құтыла алмайсың;\n\nБасыңды бұлт алса,\n\nІздеп таба алмайсың.\n\nДосы жоқпен сырлас,\n\nДосы көппен сыйлас;\n\nҚайғысыздан сақ бол,\n\nҚайғылыға жақ бол.\n\n\nҚайратсыз ашу - тұл,\n\nТұрлаусыз ғашық - тұл,\n\nШәкіртсіз ғалым - тұл.\n\n\nБағың өскенше тілеуіңді ел де тілейді, өзің де тілейсің, бағың өскен соң - өзің ғана тілейсің","Ей, жүрегімнің қуаты, перзентлерім! Сіздерге адам ұғылының мінездері туралы біраз сөз жазып ядкар қалдырайын. Ықыласпенен оқып, ұғып алыңыздар, оның үшін махаббатың төлеуі - махаббат. Әуелі адамның адамдығы ақыл, ғылым деген нәрселерменен. Мұның табылмақтығына себептер - әуелі хауас сәлим һәм тән саулық. Бұлар туысынан болады, қалмыс өзгелерінің бәрі жақсы ата, жақсы ана, жақсы құрбы, жақсы ұстаздан болады. Талап, ұғым махаббаттан шығады. Ғылым-білімге махаббаттандырмақ әлгі айтылған үшеуінен болады. Ғылым-білімді әуелі бастан бала өзі ізденіп таппайды. Басында зорлықпенен яки алдауменен үйір қылу керек, үйрене келе өзі іздегендей болғанша. Қашан бір бала ғылым, білімді махаббатпенен көксерлік болса, сонда ғана оның аты адам болады. Сонан соң ғана алла тағаланы танымақтық, өзін танымақтық, дүниені танымақтық, өз адамдығын бұзбай ғана жәліб мәнфағат дәфғы мұзарратларны айырмақлық секілді ғылым-білімді үйренсе, білер деп үміт қылмаққа болады. Болмаса жоқ, ең болмаса шала. Оның үшін көбінесе балаларды жасында ата-аналары қиянатшылыққа салындырып алады, соңынан моллаға берген болады, я ол балалары өздері барған болады - ешбір бәһра болмайды.\n\nОл қиянатшыл балалары талапқа да, ғылымға да, ұстазға да, хаттә иман иғтиқадқа да қиянатпенен болады. Бұл қиянатшылар - жарым адам, жарым молла, жарым мұсылман. Олардың адамдығының кәмәләт таппағы - қиынның қиыны. Себебі алла тағала езі - хақиқат, растықтың жолы. Қиянат - хақиқат пен растықтың дұшпаны. Дұшпаны арқылы шақыртқанға дос келе ме? Көңілде өзге махаббат тұрғанда, хақлықты таппайды. Адамның ғылымы, білімі хақиқатқа, растыққа құмар болып, әрнәрсенің түбін, хикметін білмекке ынтықтықпенен табылады. Ол - алланың ғылымы емес, һәмманы білетұғын ғылымға ынтықтық, өзі де адамға өзіндік ғылым береді. Оның үшін ол алланың өзіне ғашықтық. Ғылым - алланың бір сипаты, ол - хақиқат, оған ғашықтық өзі де хақлық һәм адамдық дүр. Болмаса мал таппақ, мақтан таппақ, ғиззат-құрмет таппақ секілді нәрселердің махаббатымен ғылым-білімнің хақиқаты табылмайды.\n\nМал, мақтан, ғиззат-құрмет адамды өзі іздеп тапса, адамдықты бұзбайды һәм көрік болады. Егерде адам өзі оларға табынып іздесе, тапса да, таппаса да адамдығы жоғалады. Енді хақиқат сүйіп, шынды білмек құмарың бар болса, адамдыққа лайықты ықыласты құлағыңды қой. Әуелі дін исламның жолындағы пенделер иманның хақиқаты не сөз екенін білсін. Иман дегеніміз бір ғана инанмақтық емес, сен алла тағаланың бірлігіне, уә құранның оның сөзі екендігіне, уә пайғамбарымыз Мұхаммед Мұстафа салаллаһу ғалайһи уәссәлләм оның тарапынан елші екендігіне инандың. Жә, не бітті? Сен алла тағалаға алла тағала үшін иман келтіремісің я өзің үшін иман келтіремісің? Сен иман келтірмесең де, алла тағалаға келер ешбір кемшілік жоқ еді. Өзің үшін иман келтірсең, жә инандың. Ол инанмақтығың құр ғана инанмақтықпен қалса, саған пайда бермейді. Оның үшін сен өзің инанмақтығыңнан пайда ала алмадың, пайдаланамын десең, пайда береді, кәміл иман болады. Пайданы қалайша алуды білмек керек. Сіз «Әмәнту биллаһи кәмаһуә би әсмайһи уасифатиһи» дедіңіз. Ол есім аллалар һәмма ол алла тағаланың фиғыл ғазимләрінің аттары, олардың мағынасын біл һәм сегіз сифат затиялары не деген сөз, кәміл үйрен. Өзіңді оның құлы біліп, өзіңе муслим ат қойып, тәслим болғаныңа раст боласың да. Өз пиғылдарыңды соған өз халіңше ұқсатуды шарт қыл. Алла тағалаға ұқсай алам ба деп, надандықпен ол сөзден жиіркенбе, ұқсамақ - дәл бірдейлік дағуасыменен емес, соның соңында болмақ. Оның үшін алла тағаланың сипаттары: Хаят, Ғылым, Құдірет, Басар, Сәмиғ, Ирада, Кәлам, Тәкин. Бұл сегізінен алла тағаладағыдай кәмәлат-ғазамат бірлән болмаса да, пендесінде де әрбірінен өз халінше бар қылып жаратыпты. Жә, біз өзіміздің бойымыздағы сегіз зәррә аттас сипатымызды ол алла тағаланың сегіз ұлығ сипатынан бас бұрғызып, өзге жолға салмақпенен біздің атымыз муслим бола ала ма? Болмаса керек. Жә, ол сегіз сипатына сипатымызды һәм ол аттары бірлән ағламланған фиғыл құдаға фиғлымызды ертпек неменен табылады, қалайша табылады, оны білмек керек. Ол - алла тағаланың заты, ешбір сипатқа мұқтаж емес, біздің ақылымыз мұқтаж, жоғарғы жазылмыш сипаттар бірлән тағрифлап танымаққа керек. Егерде ол сипаттар бірлән тағрифламасақ, бізге мағрифатулла қиын болады. Біз алла тағаланы өзінің білінгені қадар ғана білеміз, болмаса түгел білмекке мүмкін емес. Заты түгіл, хикметіне ешбір хакім ақыл ерістіре алмады. Алла тағала - өлшеусіз, біздің ақылымыз - өлшеулі. Өлшеулімен өлшеусізді білуге болмайды. Біз алла тағала «бір» дейміз, «бар» дейміз, ол «бір» демеклік те - ақылымызға ұғымның бір тиянағы үшін айтылған сөз. Болмаса ол «бір» демеклік те алла тағалаға лайықты келмейді. Оның үшін мүмкинаттың ішінде не нәрсенің ужуді бар болса, ол бірліктен құтылмайды. Әрбір хадиске айтылатұғын бір қадимге тағриф болмайды. Ол «бір» деген сөз ғаламның ішінде, ғалам алла тағаланың ішінде, құдай табарака уатағала кітаптарда сегіз субутия сипаттары бірлән, уә тоқсан тоғыз Әсмаи хұсналар бірлән білдірген. Бұлардың һәммасы алла тағаланың затия субутия уә фиғлия сипаттары дүр. Мен мұнда сіздерге төртеуін білдіремін. Оның екеуі - ғылым, құдірет. Сегіз сипаттан қалған алтауы - бұларға шарх. Ол алтауының бірі - хаят, яғни тірлік.\n\n\nАлланы бар дедік, бір дедік, ғылым, құдірет сипаты бірлән сипаттадық. Бұл бірлік, барлық ғылым, құдірет олула боларлық нәрселер ме? Әлбетте, ғылым құдіреті бар болады: хаяты - мағлұм, бірі - ирада, яғни қаламақ. Ғылым бар болса, қаламақ та бар. Ол еш нәрсеге харекет бермейді. Һәммаға харекет беретұғын өзі. Ол ирада ғылымының бір сипаты кәләм, яғни сөйлеуші деген, сөз қаріпсіз, дауыссыз болушы ма еді? Алланың сөзі - қаріпсіз, дауыссыз. Енді олай болса, айтқандай қылып білдіретұғын құдіреті және басар, сәмиғ, яғни көруші, есітуші деген. Алла тағаланың көрмегі, естімегі, біз секілді көзбенен, құлақпенен емес, көргендей, естігендей білетұғын ғылымның бір сипаты. Бірі - тәкуин, яғни барлыққа келтіруші деген сөз. Егер барлыққа келтірмегі бір өз алдына сипат болса, алла тағаланың сипаты өзіндей қадім, һәм әзали һәм әдәби болады да, һәмишә барлыққа келтіруден босанбаса, бір сипаты бір сипатынан үлкен я кіші болуға жарамайды. Олай болғанда ғылым, құдірет сипаттары секілді босанбай, һәр уақыт жаратуда болса, бір ықтиярсыздық шығады. Ол ықтиярсыздық алла тағалаға лайықты емес. Оның барлыққа келтірмегі - құдіретіне ғана бір шарх. Бұл ғылым, құдіретте ешбір ниһоятсіз, ғылымында ғафләт, құдіретінде епсіздік және нашарлық жоқ. Саниғын сұңғатына қарап білесіз. Бұл көзге көрілген, көңілге сезілген ғаламды қандай хикметпенен жарастырып, қандай құдіретпенен орналастырған, ешбір адам баласының ақылы жетпейді. Бірақ пендесінде ақыл - хүкімші, қайрат, қуат - қызмет қылушы еді. Соған қарап ойлайсың: алла тағаланың сипатында солай болмаққа тиіс. Бірақ әуелде айтқанымыз: ғылым, құдірет - біздің ұғуымызға ғана екі хисап болмаса, бір-ақ ғылымды құдірет болуға тиіс. Олай болмаса сипаттар өз орталарында бірі тәбиғ, бірі матбуғ болады ғой. Бұл болса, тариф раббыға жараспайды. Сегіз сипат қылып және ол сипаттар «Лағаиру уәлә һуә» болып, бұлай айтуда, бұлардан бір өз алдына жамағат яки жамиғат шығып кетеді. Бұл болса келіспейді. Егерде сипаттарды әрбірін басқа-басқа дегенде, көп нәрседен жиылып, иттифақпенен құдай болған болады. Бұлай деу батыл, бір ғана құдірет пендеде болған қуат; құдірет ғылым ақылдан басқа болатұғын, алла тағалада болған құдірет - ғылым һәм рахмет. Ол – рахмет сипаты, сегіз сипаттың ішінде жазылмаса да, алла тағаланың Рахман, Рахим, Ғафур, Уадуд, Хафиз, Сәттар, Раззақ, Нафиғ, Уәкил, Латиф деген есімдеріне бинаһи бір ұлығ сипатынан хиссаптауға жарайды. Бұл сөзіме нақлия дәлелім - жоғарыдағы жазылған алла тағаланың есімдері. Ғақлия дәлелім құдай тағала бұл ғаламды ақыл жетпейтін келісіммен жаратқан, онан басқа, бірінен бір пайда алатұғын қылып жаратыпты. Жансыз жаратқандарынан пайда алатұғын жан иесі хайуандарды жаратып, жанды хайуандардан пайдаланатұғын ақылды инсанды жаратыпты.\n\nХайуандарды асырайтұғын жансыздарды еті ауырмайтын қылып, жан иесі хайуандарды ақыл иесі адам баласы асырайтын қылып, һәм олардан махшарда сұрау бермейтұғын қылып, бұлардың һәммасынан пайда аларлық ақыл иесі қылып жаратқан. Адам баласынан махшарда сұрау алатұғын қылып жаратқандығында һәм ғадаләт һәм махаббат бар. Адам баласын құрт, құс, өзге хайуандар секілді тамақты өз басымен алғызбай, ыңғайлы екі қолды басқа қызмет еттіріп, аузына қолы ас бергенде, не ішіп, не жегенін білмей қалмасын деп, иісін алып ләззаттанғандай қылып, ауыз үстіне мұрынды қойып, оның үстінен тазалығын байқарлық екі көз беріп, ол көздерге нәзіктен, зарардан қорғап тұрарлық қабақ беріп, ол қабақтарды ашып-жауып тұрғанда қажалмасын деп кірпік жасап, маңдай тері тура көзге ақпасын деп, қаға беруге қас беріп, оның жүзіне көрік қылып, бірінің қолынан келместей істі көптесіп бітірмекке, біреуі ойын біреуіне ұқтырарлық тіліне сөз беріп жаратпақтығы махаббат емес пе? Кім өзіңе махаббат қылса, сен де оған махаббат қылмағың қарыз емес пе? Ақыл көзімен қара: күн қыздырып, теңізден бұлт шығарады екен, ол бұлттардан жаңбыр жауып, жер жүзінде неше түрлі дәндерді өсіріп, жемістерді өндіріп, көзге көрік, көңілге рахат гүл-бәйшешектерді, ағаш-жапырақтарды, қант қамыстарын өндіріп, неше түрлі нәбатәттәрді өстіріп, хайуандарды сақтатып, бұлақтар ағызып, өзен болып, өзендер ағып дария болып, хайуандарға, құсқа, малға сусын, балықтарға орын болып жатыр екен. Жер мақтасын, кендірін, жемісін, кенін, гүлдер гүлін, құстар жүнін, етін, жұмыртқасын; хайуандар етін, сүтін, күшін, көркін, терісін; сулар балығын, балықтар икрасын, хатта ара балын, балауызын, құрт жібегін - һәммасы адам баласының пайдасына жасалып, ешбірінде бұл менікі дерлік бір нәрсе жоқ, бәрі - адам баласына таусылмас азық.\n\nМиллион хикмет бірлән жасалған машина, фабрик адам баласының рахаты, пайдасы үшін жасалса, бұл жасаушы махаббат бірлән адам баласын сүйгендігі емес пе? Кім сені сүйсе, оны сүймектік қарыз емес пе? Адам баласы қанағатсыздықпенен бұл хайуандардың тұқымын құртып, алдыңғылар артқыларға жәбір қылмасын деп, малды адам баласының өзінің қызғанышына қорғалатып, өзге хайуандарды бірін ұшқыр қанатына, бірін күшті қуатына, бірін жүйрік аяғына сүйентіп, бірін биік жартасқа, бірін терең тұңғиыққа, қалың орманға қорғалатып, һәм әрбірін өсіп-өнбекке құмар қылып, жас күнінде, кішкене уақытында шафғат, сәхәріменен бастарын байлап, қамқор қылып қоймақтығы - адам баласына өсіп-өніп, теңдік алсын емес, бәлки, адам баласының үзілмес нәсіліне таусылмас азық болсын дегендік. Жә, бұл хикметтерінің һәммасын һәм мархамат, һәм ғадаләт заһир тұр екен. Біз ортамызда бұл мархамат, ғадаләтті иманның шартынан хисап қылмаймыз, оның үшін муслим болғанда, алла тағалаға тәслим болып, оның жолында болмақ едік, болғанымыз қайсы? Бұл екі ай мен күннен артық мағұлым тұрған жоқ па? Фиғылы құданың ешбірін де қарар қылмаймыз, өзгелерде болғанын жек көрмейміз, өзіміз тұтпаймыз, бұл қиянатшылық емес пе? Қиянатшылыққа бір қарар тұрған адам - я мұсылман емес, ең болмаса шала мұсылман. Алла табарака уатағаланың пенделеріне салған жолы қайсы? Оны көбі білмейді. «Тәфаккару фиғла иллаһи» деген хадис шарифтің «инналаһу йухиббул муқситин» деген аяттарға ешкімнің ықыласы, көңілі менен ғылымы жетіп құптағанын көргенім жоқ. «Әтәмурун әннәсә билбирри уәәхсәну инналаһу йухиббул мұхсин», «уәлләзинә әмәну уәғәмилу салихати улайна асхабул жәннәти һәм фиһа халидун» деген аяттар құранның іші толған ғамалус-салих не екенін білмейміз. «Уа әммәлзина амәну уәғамилус саликати фәйуәффиһим ужурәһум уаллаһу лә йүхиб-буз-залимин» аятына қарасаң, ғамалус-салих залықтықтың зидды болар. Олай болғанда ғадаләт рафғат болуға кімде-кімнің әділеті жоқ болса, оның хаясы жоқ, кімнің ұяты жоқ болса, оның иманы жоқ деген, пайғамбарымыздың салаллаһу ғалайһи уәссәлләмнің хадис шарифі «мән-лә хаяун лаһу» деген дәлел дүр. Енді белгілі, иман құр инанышпенен болмайды, ғадаләт уа рафғат бірлән болады. Ғамалус-салих ғадаләтті уә мархамәтті болмақ күллі тән бірлән қылған құлшылдықтардың ешбірі ғадаләтті, мархаматты бермейді. Көзің күнде көреді намаз оқушы, ораза тұтушылардың не халәттә екендіктерін, оған дәлел керек емес. Бәлки ғадаләт барша ізгіліктің анасы дүр. Ынсап, ұят - бұл ғадаләттен шығады. Оның үшін ғадаләті адамның көңіліне келеді: мен өз көңілімде халық менімен, сондай-мұндай қылықтарымен мұғамәла қылса екен деп ойлап тұрып, өзім сол халықтармен мұғамәла қылмағандығым жарамайды ғой деп, сол езі әділет те және нысап та емес пе? Ол һәмма жақсылықтың басы емес пе? Жә, олай хұлық пенен сол ойды ойлаған кісі халлақыны шүкірді неге ойламасын?\n\nШәкірліктен ғибадаттың бәрі туады. Енді зинһар ғадаләт, шапағаттан босанбаңдар. Егер босансаң, иман да, адамдық та һаммасы босанады. Аллаяр софының бір фәрдәдән жүз фәрдә бижай дегені басыңа келеді. Енді біздің бастағы тағриф бойынша құдай тағала ғылымды, рахымды, ғадаләтті, құдіретті еді. Сен де бұл ғылым, рахым, ғадаләт үш сипатпенен сипаттанбақ: ижтиһатің шарт еттің, мұсылман болдың һәм толық инсаниятың бар болады. Белгілі жәуанмәртлік үш хаслат бірлән болар деген, сиддиқ, кәрәм, ғақыл - бұл үшеуінен сиддиқ ғадаләт болар, кәрәм шафағат болар. Ғақыл мағалұм дүр, ғылымның бір аты екендігі. Бұлар әр адамның бойында алла табарака уатағала тәхмин бар қылып жаратқан. Бірақ оған рәуаж беріп гүлдендірмек, бәлки, адам өз халінше кәмәлатқа жеткізбек жәһәтінде болмақ. Бұлар - ез иждиһадің бірлән ниет халис бірлән ізденсең ғана берілетін нәрселер, болмаса жоқ. Бұл айтылмыш үш хасләттің иелерінің алды - пайғамбарлар, онан соң - әулиелер, онан соң - хакімдер, ең ақыры - кәміл мұсылмандар. Бұл үш түрлі фиғыл құданың соңында болмақ, өзін құл біліп, бұл фиғылдарға ғашық болып тұтпақты пайғамбарлар үйретті әулиелерге, әулиелер оқыды, ғашық болды. Бірақ, ухрауи пайдасын ғана күзетті. Ғашықтары сол халге жетті, дүниені, дүниедегі тиерлік пайдасын ұмытты. Бәлки, хисапқа алмады. Хакімдер дүниеде тиетін пайдасын сөйледі, ғибрәт көзімен қарағанда, екеуі де бірінен-бірі көп жырақ кетпейді. Оның үшін әрбірінің сөйлеуі, айтуы басқаша болса да, алла тағаланың сұңғатына қарап пікірлемектікті екеуі де айтты. Пікірленбек соңы ғибраттанбақ болса керек. Бұл ғақыл, ғылым - екеуі де өзін зорға есептемекті, залымдықты, адам өзіндей адамды алдамақты жек көреді. Бұл ғадаләт һәр екеуі де мархаматты, шапағатты болмақтықты айтып бұйырды, бұл рақым болса керек. Бірақ менің ойыма келеді, бұл екі таһифа әр кісі өздеріне бір түрлі нәпсісін фида қылушылар деп. Яғни, пенделіктің кәмәлаты әулиелікпен болатұғын болса, күллі адам тәркі дүние болып һу деп тариқатқа кірсе, дүние ойран болса керек. Бұлай болғанда малды кім бағады, дұшпанды кім тоқтатады, киімді кім тоқиды, астықты кім егеді, дүниедегі алланың пенделері үшін жаратқан қазыналарын кім іздейді? Хәрами, макруһи былай тұрсын, құдай тағаланың қуатыменен, ижтиһад ақылыңменен тауып, рахатын көрмегіне бола жаратқан, берген ниғметтеріне, онан көрмек хұзурға суық көзбен қарап, ескерусіз тастап кетпек ақылға, әдепке, ынсапқа дұрыс па?\n\nСахиб ниғметке шүкіршілігің жоқ болса, әдепсіздікпенен күнәкәр болмайсың ба? Екінші - бұл жолдағылар қор болып, дүниеде жоқ болып кету де хаупі бар, уә кәпірлерге жем болып кету де, қайсыбір сабырсызы жолынан тайып, сабырмен бір қарар тұрамын дегені болып кетселер де керек. Егерде бұл жол жарым-жартыларына ғана айтылған болса, жарым-жарты раст дүниеде бола ма? Рас болса, һәммаға бірдей раст болсын, алалаған раст бола ма, һәм ғадаләт бола ма? Олай болғанда, ол жұртта ғұмыр жоқ болса керек. Ғұмыр өзі - хақиқат. Қай жерде ғұмыр жоқ болса, онда кәмәлат жоқ. Бірақ әулиелердің де бәрі бірдей тәркі дүние емес еді, ғашәрән - мүбәшәрәдан қазірет Ғосман, Ғабдурахман бин Ғауф уа Сағид бин Әбудқас үшеуі де үлкен байлар еді. Бұл тәркі дүниелік: я дүние ләззатына алданып ижтиһадым шала қалады деп, бойына сенбегендік; я хирс дүниеліктен қауымның көңілін суытпақ үшін, ренжуге сабыр етіп, өзін фида қылып, мен жаныммен ұрыс қылғанда, халық ең болмаса нәпсісімен ұрыс қылып, һәуа һәуастан әрбір арзу нәпсіден суынып, ғадаләт, мархамат, махаббатына бір қарар болар ма екен деген үмітпенен болса керек. Олай болғанда о да жұртқа қылған артық махаббаттан хисап. Бірақ бұл жол - бек шетін, бек нәзік жол. Бұл жолда риясыз, жеңілдіксіз бір қарар тұрып іздеген ғана кісі істің кәмәлатына жетпек. Бұл заманда надир, бұған ғылымның да зоры, сиддиқ, қайраттың да зоры, махаббаттың халлақна да, уа халық ғаламға да бек зоры табылмақ керек. Бұлардың жиылмағы - қиынның қиыны, бәлки, фитнә болар.\n\nБасына һәм бір өзіне өзгешелік бермек - адам ұлын бір бұзатын іс. Әрбір наданның бір тариқатқа кірдік деп жүргені біз бұзылдық дегеніменен бір болады. Хакім, ғалым асылда бір сөз, бірақ Ғарафта басқалар дүр. Дүниеде ғылым заһири бар, олар айтылмыштарды жазылмыштар, оны нақлия деп те айтады. Бұл наклияға жүйріктер ғалым атанады. Құдай тәбәрака уа тағала ешбір нәрсені себепсіз жаратпаған, мұны ізерлеп тәффаккару фи әла-иллаһи деген хадиске бинаән бұл сүнғати құдадан ізерлеп, құмар болып ғибратланушыларға тыю жоқ, бәлки, сұнғатынан себебін білмекке құмарлықтан саниғ ғашықтық шығады. Құдай тәбәраканың затына пендесінің ақылы жетпесе, дәл сондай ғашықпын демек те орынсыз. Ғашық-мағшұғлыққа халик бірлән махлұқ ортасы мунәсибәтсіз, алла тағаланың пендесін махаббат уа мархамат бірлән жаратқанын біліп, махаббатына махаббатпенен ғана елжіремекті құдаға ғашық болды дейміз. Олай болғанда хикмет құдаға пенде өз ақылы жетерлік қадірін ғана білсем деген әрбір істің себебін іздеушілерге хакім ат қойды. Бұлар хақ бірлән батылды айырмаққа, себептерін білмекке тырысқандарыменен һәммасы адам баласының пайдасы үшін, ойын-күлкі түгіл, дүниедегі бүкіл ләззат бұларға екінші мәртабада қалып, бір ғана хақты таппақ, әрбір нәрсенің себебін таппақпенен ләззаттанады.\n\nАдаспай тура іздеген хакімдер болмаса, дүние ойран болар еді. Фиғыл пәнденің қазығы - осы жақсы хакімдер, әр нәрсе дүниеде бұлардың истихражы бірлән рауаж табады. Бұлардың ісінің көбі - дүние ісі, ләкин осы хакімдердің жасаған, таратқан істері. Әддүния мәзрәгәтул-ахирет дегендей, ахиретке егіндік болатын дүние сол. Әрбір ғалым - хакім емес, әрбір хакім - ғалым. Ғалымдарының нақлиясы бірлән мұсылман иман тақлиди кәсіп қылады. Хакімдердің ғақлияты бірлән жетсе, иман якини болады. Бұл хакімдерден мұрат - мұсылман хакімдері, болмаса ғайри діннің хакімдері - әгәрше фатлубни тәжиду-ни делінсе де, дүниенің һәм адам ұғлы өмірінің сырына жетсе де, діннің хақ мағрифатына жете алмағандар. Бұлардың көбі - иманның жеті шартынан, бір алланы танымақтан ғайри, яғни алтауына кімі күмәнді, кімі мүнкір болып, тахқиқлай алмағандар. Егер бұлар дін ұстазымыз емес болса да, дінде басшымыз құдайдың елшісі пайғамбарымыздың хадис шарифі, хайру н-нас мән йанфагу н-нас деген. Бұл хакімдер ұйқы, тыныштық, әуес-қызықтың бәрін қойып, адам баласына пайдалы іс шығармақлығына, яғни электрияны тауып, аспаннан жайды бұрып алып, дүниенің бір шетінен қазір жауап алып тұрып, от пен суға қайласын тауып, мың адам қыла алмастай қызметтер істетіп қойып тұрғандығы, уахсусан адам баласының ақыл-пікірін ұстартып, хақ пенен батылдықты айырмақты үйреткендігі - баршасы нафиғлық болған соң, біздің оларға міндеткерлігімізге дау жоқ.\n\nБұл заманның молдалары хакім атына дұшпан болады. Бұлары білімсіздік, бәлки, бұзық фиғыл, әл-инсан ғәдду ләма жәһилгә хисап. Олардың шәкірттерінің көбі біраз ғарап-парсыдан тіл үйренсе, бірлі-жарым болымсыз сөз бахас үйренсе, соған мәз болып, өзіне өзгешелік беремін деп әуре болып, жұртқа пайдасы тимек түгіл, түрлі-түрлі зарарлар хасил қылады «һай-һой!» менен, мақтанменен қауымды адастырып бітіреді. Бұлардың көбі әншейін жәһил түгіл, жәһиләләр кібік талап болса, қайда хақ сөздер келсе, қазір нысапқа қайтсын һәм ғибраттансын. Рас сөзге ор қазып, тор жасамақ не деген нысап, құр өзімшілдік һәм әр өзімшілдік - адам баласын бұзатын фиғыл. Растың бір аты - хақ, хақтың бір аты - алла, бұған қарсы қаруласқанша, мұны ұғып, ғадаләтпен тәптештеуге керек. Мұндай фиғылдардан күпір қаупі де бар. Және пайғамбарымыз салаллаһу ғалайһи уәссәлләм «ақыр заманда бір жылдық бір күн болар» дегенде сахаба-и кәрәмлар «бұл бір жылдық бір күнде намаз нешеу болар» деп сұрағанда: оның патуасын сол заманның ғалымдары білер деген сөзінен ғибратланып қарасаң, замана өзгеруімен қағидалар өзгерілмегін білдіргені мағлұм болады. Бұл күндегі тәхсилғулум ескі медреселер ғұрпында болып, бұл заманға пайдасы жоқ болды. Соған қарай Ғұсманияда мектеп харбия, мектеп рушдиялар салынып, жаңа низамға айналған. Мұндағылар ұзақ жылдар өмір өткізіп, ғылымды пайдасыз ұзақ бахастар бірлән күнін өткізіп, мағишат дүниеде надан бір ессіз адам болып шығады да, ешбір харекетке лайықты жоқ болған соң, адам аулауға, адам алдауға салынады. Көбінесе мұндай ессіздердің насихаты да тасирсіз болады.\n\nДүниенің мәғмурлығы бір түрлі ақылға нұр беріп тұратұғын нәрсе. Жоқшылықтың адамды хайуандандырып жіберетіні де болады. Бәлки, дүниенің ғылымын білмей қалмақтық — бір үлкен зарарлы надандық, ол құранда сөгілген; дүниеде кімде-кім өзіне өзгешелік бермек қасады бірлән малға махаббатын аударған дүние болмаса, ихсанда қолым қысқа болмасын деп һәм өзім біреуге тамғылы болмайын деп, малға махаббатын аудармай, ізгілікке бола халал кәсіп бірлән тапқан дүние емес.\n\nБіз ғылымды сатып, мал іздемек емеспіз. Мал бірлән ғылым кәсіп қылмақпыз. Өнер - өзі де мал, өнерді үйренбек - өзі де ихсан. Бірақ ол өнер ғадаләттан шықпасын, шарғыға муафих болсын. Адамға хәлінше ихсанды болмақ - қарыз іс. Бірақ өзгелердің ихсанына сүйенбек дұрыс емес. Моллалар тұра тұрсын, хусусан бұл заманның ишандарына бек сақ болыңдар. Олар - фитнә ғалым, бұлардан залалдан басқа ешнәрсе шықпайды. Өздері хүкім шариғатты таза білмейді, көбі надан болады. Онан асып өзін-өзі әһіл тариқат біліп және біреуді жеткізбек дағуасын қылады. Бұл іс олардың сыбағасы емес, бұлардың жеткізбегі мұхал, бұлар адам аздырушылар, хаттә дінге де залалды. Бұлардың сүйгені - надандар, сөйлегені - жалған, дәлелдері - тасбығы менен шалмалары, онан басқа ешнәрсе жоқ.\n\nЕнді біліңіздер, ей, перзенттер! Құдай тағаланың жолы деген жол алла тағаланың өзіндей ниһаятсыз болады. Оның ниһаятына ешкім жетпейді. Бірақ сол жолға жүруді өзіне шарт қылып кім қадам басты, ол таза мұсылман, толық адам делінеді. Дүниеде түпкі мақсатың өз пайдаң болса - өзің ниһаятлысың, ол жол құдайдың жолы емес. Ғаламнан жиылсын, маған құйылсын, отырған орныма ағып келе берсін деген ол не деген нысап? Не түрлі болса да, я дүниеңнен, я ақылыңнан, я малыңнан ғадаләт, шапағат секілді біреулерге жақсылық тигізбек мақсатың болса, ол жол - құданың жолы. Ол ниһаятсыз жол, сол ниһаятсыз жолға аяғыңды берік бастың, ниһаятсыз құдаға тағырып хасил болып хас езгу құлдарынан болмақ үміт бар, өзге жолда не үміт бар? Кейбіреулердің бар өнері, мақсаты киімін түзетпек, жүріс-тұрысын түзетпек болады да, мұнысын өзіне бар дәулет біледі. Бұл істерінің бәрі өзін көрсетпек, өзін-өзі базарға салып, бір ақылы көзіндегі ақымақтарға «бәрекелді» дегізбек. «Осындай болар ма едік» деп біреулер талаптанар, біреулер «осындай бола алмадық» деп күйінер, мұнан не пайда шықты? Сыртқа қасиет бітпейді, алла тағала қарайтұғын қалыбыңа, боямасыз ықыласыңа қасиет бітеді. Бұл айнаға табынғандардың ақылы қаншалық өсер дейсің? Ақыл өссе, ол түпсіз терең жақсылық сүймектікпен өсер.\n\nҚұдай тағала дүниені кәмалатты шеберлікпен жаратқан һәм адам баласын өссін-өнсін деп жаратқан. Сол өсіп-өну жолындағы адамның талап қылып ізденер қарызды ісінің алды - әуелі дос көбейтпек. Ол досын көбейтпектің табылмағы өзінің өзгелерге қолыңнан келгенінше достық мақамында болмақ. Кімге достығың болса, достық шақырады. Ең аяғы ешкімге қас сағынбастық һәм өзіне өзгешелік беремін деп, өзін тілмен я қылықпен артық көрсетпек мақсатынан аулақ болмақ.\n\nБұл өзін-өзі артық көрсетпек екі түрлі! Әуелгісі - әрбір жаманшылықтың жағасында тұрып адамның адамдығын бұзатын жаманшылықтан бойын жимақтық, бұл адамға нұр болады.\n\nЕкіншісі - өзін-өзі өзгешелікпен артық көрсетпек адамдықтың нұрын, гүлін бұзады.\n\nҮшіншісі - қастық қылмақ, қор тұтпақ, кемітпек. Олар дұшпандық шақырады.\n\nҺәм өзі өзгеше тұтатын демектің түбі - мақтан. Әрбір мақтан біреуден асамын деген күншілдік бітіреді де, күншілдік күншілдікті қозғайды. Бұл үш түрлі істің жоқтығы адамның көңіліне тыныштық береді. Әрбір көңіл тыныштығы көңілге талап салады.\n\nКүллі адам баласын қор қылатын үш нәрсе бар. Сонан қашпақ керек: әуелі - надандық, екіншісі - еріншектік, үшінші - залымдық деп білесің.\n\nНадандық - білім-ғылымның жоқтығы, дүниеде ешбір нәрсені оларсыз біліп болмайды.\n\nБілімсіздік хайуандық болады.\n\nЕріншектік - күллі дүниедегі өнердің дұшпаны. Талапсыздық, жігерсіздік, ұятсыздық, кедейлік - бәрі осыдан шығады.\n\nЗалымдық - адам баласының дұшпаны. Адам баласына дұшпан болса, адамнан бөлінеді, бір жыртқыш хайуан қисабына қосылады.\n\nБұлардың емі, халлақына махаббат, халық ғаламға шапқат, қайратты, тұрлаулы, ғадаләт ісінің алды-артын байқарлық білімі, ғылымы болсын... Ол білім, ғылымы құдаға мұқтәди болсын. Ғылым әуелі ғалами ғылымға мұқтәди болсын. Яғни құдай тағала бұл ғаламды жаратты, ерінбеді, келісімменен, хикметпенен кәмәлатты бір жолға салып жасады, сіздердің ісіңіз де бір жақсылық бина қылып, арқа сүйерлік шеберлікпенен болсын. Және құдай тағала әрне жаратты, бір түрлі пайдалы хикметі бар. Сенің де ісіңнен бір зарар шығып кеткендей болмай, көпке пайда боларлық бір үміті бар іс болсын. Бұларсыз іс іс емес. Бәлки, бұларсыз тағат тағат та емес.\n\nБелгілі, құдай тағала ешбір нәрсені хикметсіз жаратпады, ешбір нәрсеге хикметсіз тәклиф қылмады. Бәрінің хикметі бар, бәрінің себебі бар, біздің ғауам былай тұрсын, ғылымға махаббаты барларға себеп, парыздарды білмекке ижтиһад ләзім, сіздер әрбір ғамал қылсаңыз ізгілік деп қыласыз, ізгілікке бола қасд етіп, ниет етесіз. Ниет оның парызынан хисап, пайғамбарымыз салаллаһу ғалайһи уәссәлламнің хадис шарифі «иннама-л-ағмал, бин-ниет» деген. Енді ниет еттіңіз таһарат алмаққа, намаз оқымаққа, ораза тұтпаққа, бұл тағаттарды ниетіңіз заһирынан қалыпсыз ғибадатқа жетпегендігі кемшілік емес пе? Сіздің батиныңыз таза болмағы әуелі иман болып, бұл заһир ғибадатыңыз иманды болған соң ғана, парыз болған, сіздің заһирыңыздағы ғибадат -батиныңыздағы иманның көлеңкесі, һәм сол иманның нұрланып тұрмағына көрік үшін бұйырылған. Оның үшін ғұламалар иман екеу емес, біреу, бірақ ізгі тағатпенен нұрланады, тағат жоқ болса, күңгірттенеді, бәлки, сөну хаупі де бар деген. Егер надандар ол ғибадаттың ішкі сырын ескермей қылса, соны қылып жүріп, иманы сөнер деген.\n\nМенің хаупім бар, олар хас осы ғибадат екен, құданың бізге бұйырғаны, біз осыны қылсақ, мұсылмандық кәміл болады деп ойлайды. Ол ғибадат күзетшісі еді. Жә, күзетші күзеткен нәрсенің амандығын ойламай, бір ғана ояу тұрмағын қасд қылса, ол не күзет? Күзеткен нәрсесі қайда кетеді? Мақсат күзетілген нәрсенің амандығы, тазалығы емес пе? Ей, ишараттан хабарсыздар, қара! Бұл ғибадаттан бір үлкені - намаз, ол намаздан әуелі таһарат алмақ, онан соң намазға шұруғ қылмақ, ол таһараттың алды истинжа еді. Мұны бір берік ойлап тұр. Аяғы екі аяққа мәсіхпенен бітуші еді, бұлар һәммасы болмаса көбі ишарат еді. Истинжада к...іңізді жуа-сыз, сіздің к...іңіздің ешкімге керегі жоқ еді. Онымен сезімді тазалыққа иіргендігіңді кәміл ыхласыңды көрсетіп, ішімнің сафлығының соңында халық көрер, сыртымды да пәк етемін һәм көзге көрінбейтін ағзаларымды да пәк етемін, бұл пәктіктің үстінде аллаға дұға айтамын деп әзірленесіз.\n\nЕнді намаздың аты - салауат, дұға мағынасында деген:\n\nАяқта, мойында болған мәсхлар - ол жумақ емес, өздері де жуулы деп көрсеткен ишараты.\n\nНамаздан әуелі құлақ қақтыңыз - егер алла тағаланы жоғарыда деп, мәкән исфат етпесең де, бегірек созу әдепсіз болып, күнә дариясына ғарық болдым, яғни дүние әуесіне ғарық қылмай қолымнан тарт, яғни құтыларлық жәрдемдерінің ишараты*.\n\nОнан соң қиямда тұрып қол бағламақ - құл қожа алдында тұрмақ - бұқара патша алдында тұрғаннан артық алланың қадірлігіне өзінің ғажиздығына ыкрарының беріктігін көрсеткен ишараты.\n\nҚыбылаға қарамақ - әрине, құдай тағалаға ешбір орын мүмкін емес болса да, зиратын парыз еткен орынға жүзін қаратып, сондағы дұғадай қабылдыққа жақын болар ма екен деген ишараты.\n\nОнан соң қира әт, яғни сураһи фатиха оқисың, мұнда бірақ сөз ұзарады. Ол фатиха сүресінің мағыналарында көп сыр бар.\n\nРуқүғ бас ұрмақ - алдында құда хазірге ұқсас, ол да ишарат.\n\nСәжделер - әуелі жерден жаралғанына ықырары, екіншісі - және жерге қайтпағына ықырары, бас көтермек және тіріліп, сұрау бермегіне ықырарының ишараты.\n\nҚағадат ул-ахир - дұғаның ақырында аллаға тахият, одан тәшәһһуд, одан салауат, пайғамбарымыз саллаллаһу ғалайһи уәссәлләмге айтпақ үшін ең ақырғы сәлемменен тауысасыз, яғни алла тағаладан не тілеп дұға қылдыңыз. Ол дұға қазинасы күллі мұсылмандарды ортақтастырып, оларға да сәләмәтшілік тілеп һәм рахмет тілеп бітіресіз.\n\nЖә, бұл сөзден не ғибрәтлендік?","Рас, бұрынғы біздің ата-бабаларымыздың бұл замандағылардан білімі, күтімі, сыпайылығы, тазалығы төмен болған. Бірақ бұл замандағылардан артық екі мінезі бар екен. Ендігі жұрт ата-бабаларымыздың мінді ісін бір-бірлеп тастап келеміз, әлгі екі ғана тәуір ісін біржола жоғалтып алдық. Осы күнгілер өзге мінезге осы өрмелеп ілгері бара жатқанына қарай сол аталарымыздың екі ғана тәуір мінезін жоғалтпай тұрсақ, біз де ел қатарына кірер едік. Сол екі мінез жоқ болған соң, әлгі үйренген өнеріміздің бәрі де адамшылыққа ұқсамайды, шайтандыққа тартып барады. Жұрттықтан кетіп бара жатқанымыздың бір үлкен себебі сол көрінеді.\n\nОл екі мінезі қайсы десең, әуелі - ол заманда ел басы, топ басы деген кісілер болады екен. Көш-қонды болса, дау-жанжалды болса, билік соларда болады екен. Өзге қара жұрт жақсы-жаман өздерінің шаруасымен жүре береді екен. Ол ел басы мен топ басылары калай қылса, калай бітірсе, халықта оны сынамақ, бірден бірге жүргізбек болмайды екен. «Қой асығын қолыңа ал, қолайыңа жақса, сақа қой», «Бас-басыңа би болса, манар тауға сыймассың, басалқаңыз бар болса, жанған отқа күймессің» деп мақал айтып, тілеу қылып, екі тізгін, бір шылбырды бердік саған, берген соң, қайтып бұзылмақ түгіл, жетпегеніңді жетілтемін деп, жамандығын жасырып, жақсылығын асырамын деп тырысады екен. Оны зор тұтып, әулие тұтып, онан соң жақсылары да көп азбайды екен. Бәрі өз бауыры, бәрі өз малы болған соң, шыныменен жетесінде жоқ болмаса, солардың қамын жемей қайтеді?\n\nЕкінші мінезі - намысқорлық екен. Ат аталып, аруақ шақырылған жерде ағайынға өкпе, араздыққа қарамайды екен, жанын салысады екен. «Өзіне ар тұтқан жаттан зар тұтады» деп, «Аз араздықты қуған көп пайдасын кетірер» деп, «Ағайынның азары болса да, безері болмайды», «Алтау ала болса, ауыздағы кетеді, төртеу түгел болса, төбедегі келеді» десіп, «Жол қуған қазынаға жолығар, дау қуған пәлеге жолығар» десіп. Кәнеки, енді осы екі мінез қайда бар? Бұлар да арлылық, намыстылық, табандылықтан келеді. Бұлардан айырылдық. Ендігілердің достығы - пейіл емес, алдау, дұшпандығы - кейіс емес, не күндестік, не тыныш отыра алмағандық.","Зинһар, сендерден бір сұрайын деп жүрген ісім бар.\n\nОсы, біздің қазақтың өлген кісісінде жаманы жоқ, тірі кісісінің жамандаудан аманы жоқ болатұғыны қалай?\n\nҚайраты қайтқан шал мен жастың бәрі бітім қылады, шалдар өзді-өзі көп құрбыдан айрылып азайып отырса да, біріменен бірінің бітім қылмайтұғыны қалай?\n\nБір елдің ішінде жамағайынды кісі бірге туғандай көріп, іші елжіреп жақсы көріп тұрып, елге келсе, әрі-беріден соң қайта қашқандай қылатұғыны қалай?\n\nЖаттың бір тәуір кісісін көрсе, «жарықтық» деп жалбырап қалып, мақтай қалып, өз елінде сонан артық адам болса да танымайтұғыны қалай?\n\nБір жолаушы алыс жерге барса, барған еліне өз елін мақтаймын деп өтірікті сыбап-сыбап, қайтып келген соң сол барған, көрген елін, жерін мақтап, өтірікті сыбайтұғыны қалай?\n\nҚай қазақты көрсем де, баласы жасырақ болса, оның басынан пәрмене болып жүріп, ержеткен соң суық тартатұғыны қалай?\n\nБіреудің ағайыны торқалы той, топырақты өлімде, адалдық берекеде алысуға табылмай, барымта алалық, ұрлалық десе, табыла қоятыны қалай?\n\nБәйгеге ат қоссаң, атыңды тартыспайтұғын ағайын, атың келсе, бәйгесіне өкпелейтұғыны қалай?\n\nБаяғыда біреу біреуді пален жасымда келе жатқанда пәлен жерге жеткізіп салып еді деп, соны өлгенше айта жүруші еді. Осы күнде бұл жылғы берген ендігі жылға жарамайтұғыны қалай?\n\nБайдың баласы кедей болса, ұрлық қылуға арланбайды, байға кірісуге арланатұғыны қалай?\n\nЕкі жақсы бір елде сүйіскен достығында тұра алыспайды. Кейбір антұрғандардың тым-ақ тату бола қалатыны қалай?\n\nБіреуді досым деп ат беріп жүрсең, оған сенің бір дұшпаның келіп бір тай берсе, бұзыла қалатыны қалай?\n\nКүнде тілін алатұғын достан кейде бір тіл ала қойған дұшпанға кісінің өле жаздайтұғыны калай?\n\nКөп кісі досым жетілсе екен демейді, егерде жетілсе, бағанағы досына бір бітімі жоқ дұшпан сол болатұғыны қалай?\n\nКей жұрт ақыл айтарлық кісіні іздеп таба алмайды. Қылығының қылшығын танитұғын кісіден қашық жүретұғыны қалай?\n\nБіреу біреудікіне келгенде үйдегі малының бәрін де айдап келіп, өз үйіне кісі барғанда бар малын далаға айдап жіберетұғыны калай?\n\nТыныштық іздеп таба алмай жүрген жұрт тыныштық көрсе, сәтке тұрмай, тыныштықтан жалыға қалатұғыны қалай?\n\nЕлді пысық билегені несі? Пысықтың бәрі кедей келетұғыны несі?\n\nТоқал қатын өр келетұғыны несі? Кеселді кісі ер келетұғыны несі? Кедей кісінің кер келетұғыны несі?\n\nНәпсісін тыйып, бойын тоқтатқан кісінің жаман атанып, нәпсісі билеп, мақтанға еріп, пәле шығарған кісі мықты атанатұғыны несі?\n\nҚазақтың шын сөзге нанбай, құлақ та қоймай, тыңдауға қолы да тимей, пәлелі сөзге, өтірікке сүттей ұйып, бар шаруасы судай ақса да, соны әбден естіп ұқпай тынбайтұғыны қалай?","Қазаққа ақыл берем, түзеймін деп қам жеген адамға екі нәрсе керек.\n\nӘуелі - бек зор өкімет, жарлық қолында бар кісі керек. Үлкендерін қорқытып, жас балаларын еріксіз қолдарынан алып, медреселерге беріп, бірін ол жол, бірін бұл жолға салу керек, дүниеде көп есепсіз ғылымның жолдары бар, әрбір жолда үйретушілерге беріп сен бұл жолды үйрен, сен ол жолды үйрен деп жолға салып, мұндағы халыққа шығынын төлетіп жіберсе, хәтта қыздарды да ең болмаса мұсылман ғылымына жіберсе, жақсы дін танырлық қылып үйретсе, сонда сол жастар жетіп, бұл аталары қартайып сөзден қалғанда түзелсе болар еді.\n\nЕкінші - ол адам есепсіз бай боларға керек. Аталарын паралап, балаларын алып, бастапқы айтқандай жолға салып, тағлым берсе, сонда түзелер еді. Енді мұндай халықты еріксіз қорқытып көндірерлік күш-қуат ешкімге бітпейді. Ол баланы қазақтың бәрін паралап көндірерлік дәулет бір кісіге бітуге мүмкін де емес.\n\nҚазақты я қорқытпай, я параламай, ақылменен не жырлап, не сырлап айтқанменен ешнәрсеге көндіру мүмкін де емес. Етінен өткен, сүйегіне жеткен, атадан мирас алған, ананың сүтіменен біткен надандық әлдеқашан адамшылықтан кетірген. Өздерінің ырбаңы бар ма, пыш-пышы бар ма, гуілдегі бар ма, дүрілдегі бар ма - сонысынан дүниеде ешбір қызықты нәрсе бар деп ойламайды, ойласа да бұрыла алмайды, егер сөз айтсаң, түгел тыңдап тұра алмайды, не көңілі, не көзі алаңдап отырады. Енді не қылдық, не болдық!","Қазақтың жаманшылыққа үйір бола беретұғынының бір себебі - жұмысының жоқтығы. Егер егін салса, я саудаға салынса, қолы тиер ме еді? Ол ауылдан бұл ауылға, біреуден бір жылқының майын сұрап мініп, тамақ асырап, болмаса сөз аңдып, қулық, сұмдықпенен адам аздырмақ үшін, яки азғырушылардың кеңесіне кірмек үшін, пайдасыз, жұмыссыз қаңғырып жүруге құмар. Дүниелік керек болса, адал еңбекке салынып алған кісі ондай жүрісті иттей қорлық көрмей ме? Өзінің кәсібін тастап, кезегендікке салына ма? Малдылар малын өңкей малшыларға, бала-шағаға тапсырып, қолдағы құдай берген азды-көпті дәулеті қызықсыз көрініп, оның ұры-бөріге жем болып, қарға-жарға ұшырауына шыдайды. Пыш-пыш кеңестен қалып, бір ауылға барып, қулық, сұмдық жасап жүріп, тегін тамақ жеп, ыржыңдасуды қысыратуға шыдамайды. Не үшін десең, халыққа әдет жол болған соң, шаруаға пысық, мал бағуға, мал табуға пысық ол өнерлі кісіге қосылмайды, я өзі пәле шығаруға пысық, я сондайлардың сөзін «естігенім», «білгенім» деп елге жайып жүріп, ырбаңдауға пысық өнерлілерге қосылғандай көрінеді.\n\nСол үшін осы күнгі қазақтың іске жараймын дегені өзінің азды-көптісін біреуге қоса салып, «көре жүр, көздей жүр» деп басын босатып алып, сөз аңдып, тамақ аңдып, ел кезуге салынады.\n\nБұл күндегіге байлық та мақтан емес, ақыл, абұйыр да мақтан емес, арыз бере білу, алдай білу - мақтан. Бұл екеуі қолынан келген кісі салт атты, сабау қамшылы кедей де болса, аз да болса орны төрде, майлы атқа, майлы етке қолы жетеді. Желөкпелеу, мақтаншақ байларды: «сіз айтсаңыз, отқа түсуге бармын» деп желдендіріп алып, шаруасын қылмай-ақ, малын бақпай-ақ, содан алып киімін бүтейтіп киіп, тәуір атын мініп алып, қатарлы бір құрметке жетіп жүре береді.\n\nОл бай өз тыныштығын да білмейді, бос шығынданғанын да ескермейді. Бір кісімен сөйлессе, «мұны қайтеміз?» - деп бағанағы антұрғанмен ақылдасады. Ол сиырдың жорғасы секілденіп, қарайғанда жалғыз өзім болсам екен дейтұғын ниетімен және де ақылдасар досы көбейсе, қадірім кетіп қалады деп ойлап: «Ой, тәңір-ай, соны білмей тұрсыз ба? Ол ана қулық қой, бұл мына қулық қой» деп, «оған бүйдей салсаң болмай ма?» деп бар оңбаған жауапты үйретіп, амалшылықтың жолын үйретем деп, ол байдың өзін кісіге сенбейтұғын қылады. Және байдың өзіне де адам сенбейтұғын болады. Байдың өз жауабы, өз мінезі оңбай тұрған соң, бағанағы кісі бұзылса, әлгі антұрған бағанағы байға: «Мен айтпап па едім, оныкі қулық сөз деп, міне, көрдің бе?» - деп, екіншіде тырп етпейтұғын қылып алады. Ендігі жұрттың ақылы да, тілеуі де, харекеті де - осы.","Адам ұғылы екі нәрседен: бірі - тән, бірі - жан. Ол екеуінің орталарында болған нәрселердің қайсысы жибили, қайсысы кәсиби - оны білмек керек. Ішсем, жесем демектің басы - жибили, ұйықтамақ та соған ұқсайды. Аз ба, көп пе, білсем екен, көрсем екен деген арзу, бұлардың да басы - жибили. Ақыл, ғылым - бұлар - кәсиби. Көзбенен көріп, құлақпен естіп, қолмен ұстап, тілмен татып, мұрынмен иіскеп, тыстағы дүниеден хабар алады. Ол хабарлардың ұнамдысы ұнамды қалпыменен, ұнамсызы ұнамсыз қалпыменен, әрнешік өз суретіменен көңілге түседі. Ол көңілге түсіруші бағанағы бес нәрседен өткен соң, оларды жайғастырып көңілде суреттемек. Ол - жанның жибили қуаты дүр. Бір ұмытпастық жақсы нәрседен көңілге жақсы әсер хасил болып, жаман нәрседен көңілге жаман әсер хасил болу секілді нәрселер. Бұл қуаттар әуелде кішкене ғана болады. Ескеріп баққан адам үлкейтіп, ұлғайтып, ол қуаттардың қуатын зорайтады. Ескерусіз қалса, ол қуаттың қайсысы болса да жоғалады, тіпті жоғалмаса да, аз-мәз нәрсе болмаса, үлкен ешнәрсеге жарамайтын болады.\n\nКімде-кім сырттан естіп білу, көріп білу секілді нәрселерді көбейтіп алса, ол - көп жиғаны бар адам: сынап, орындысын, орынсызын - бәрін де бағанағы жиған нәрселерінен есеп қылып, қарап табады. Бұлай етіп бұл харекетке түсінген адамды ақылды дейміз. «Құдай тағала өзі ақыл бермеген соң қайтейік?» демек, «құдай тағала сеніменен мені бірдей жаратып па?» демек - құдай тағалаға жала жауып, өзін құтқармақ болғандығы. Бұл - ойсыз, өнерсіз надан адамның ісі. Оған құдай тағала көрме, есітпе, көрген, естіген нәрсеңді ескерме, есіңе сақтама деп пе? Ойын-күлкімен, ішпек-жемек, ұйықтамақпен, мақтанмен әуре бол да, ішіңдегі қазынаңды жоғалтып, хайуан бол деген жоқ.\n\nКейбіреулер айтады: «Ақыл жибили болмаса да, талап - жибили. Талап берген адам ақылды тапты, талабы жоқ кісі таба алмады», -дейді. О да бекер. Талап балада да бар, оған талас қылуға болмайды. Бағана айттық қой, қуаты басында кішкене болады, ескермесе жоғалып та кетеді, ескерсе, күтіп айналдырса, зораяды деп. Жан қуатыменен адам хасил кылған өнерлері де күнде тексерсең, күнде асады. Көп заман тексермесең, тауып алған өнеріңнің жоғалғандығын және өзіңнің ол мезгілдегіден бір басқа адам болып кеткеніңді білмей қаласың. Қай жоғалған өнер: «ал, мен жоғалдым» деп, хабар беріп жоғалады. Енді қусаң, бағанағы әуелгі табуыңнан қиынырақ тиеді.\n\nЖан қуаты дейтұғын қуат - бек көп нәрсе, бәрін мұнда жазарға уақыт сыйғызбайды. Бірақ әрбір өнердің тыстан тауып алып, ішке салғанын, соның тамырын берік ұстап тұруға жараушы еді. Көп заман ескермеген адамнан ол бағанағы өнердің өзінің ең қызықты, қымбатты жерлері жоғала бастайды. Онан соң көп заман өтсе, сол өнерді сақтайтұғын қуаттың өзі де жоғалады. Онан соң қайта кәсіп қылуға болмайды.\n\nБұл қуаттың ішінде үш артық қуат бар, зинһар, соны жоғалтып алу жарамас, ол жоғалса, адам ұғылы хайуан болды, адамшылықтан шықты.\n\nБіреуі орысша «подвижной элемент» деп аталады. Ол не нәрсе? Не көрдің, не есіттің, әрнешік білдің, соны тездікпенен ұғып, ұққандықпенен тұрмай, арты қайдан шығады, алды қайда барады, сол екі жағына да ақылды жіберіп қарамаққа тез қозғап жібереді. Егер бұл болмаса, көп білуге көп оқу оңды пайда да бермейді. Керекті уақытында ойламай, керекті уақытында қылмай, керекті уақытында айтпай, дәйім уақытынан кеш қалып, «Әй, әттеген-ай. Үйтуім екен, бүйтуім екен» деп, өмір бойы ғафил болып-ақ отырғаның.\n\nБіреуін орысша «сила притягательная однородного» дейді. Ол - бір нәрсені естіп, көріп білдің, хош келді, қазір соған ұқсағандарды тексересің. Түгел ұқсаған ба? Яки бір ғана жерден ұқсағандығы бар ма? Әрнешік сол іске бір келіскен жері бар нәрселердің бәрін ойлап, білгенін тексеріп, білмегенін сұрап, оқып, бөтеннен хабарланып білмей, тыншытпайды.\n\nҮшіншісі, орысша «впечатлительность сердца» дейді, яғни жүректі мақтаншақтық, пайдакүнемдік, жеңілдік, салғырттық - бұл төрт нәрсебірлән кірлетпей таза сақтаса, сонда сырттан ішке барған әр нәрсенің суреті жүректің айнасына анық рәушан болып түседі. Ондай нәрсе тұла бойыңа жайылады, тез ұмыттырмайды. Егерде бағанағы төрт нәрсемен жүректі кірлетіп алсаң, жүректің айнасы бұзылады, я қисық, я күңгірт көрсетеді. Енді ондай нәрседен оңды ұғым болмайды.\n\nӘрнешік тән қуатыменен сырттан тауып, сырттан сақтайсыз, оның аты дәулет еді. Оның да неше түрлі кеселі, кесепаты бар нәрселерін білмесең, сақтай алмаушы едің ғой. Соған ұқсаған іштегі жан қуатыменен жиған нәрсенің аты ақыл, ғылым еді ғой. Оның да неше түрлі кеселі, кесепаты тиер нәрселері бар. Оны білмесең, бақпасаң - айрыласың. Және әрбір жақсы нәрсенің өлшеуі бар, өлшеуінен асса - жарамайды. Өлшеуін білмек - бір үлкен керек іс. Ойланбақ жақсы, іске тіпті салынып кеткен кісі ойын байлай алмай, қияли болып та кеткені болады. Ішпек, жемек, кимек, күлмек, көңіл көтермек, құшпақ, сүймек, мал жимақ, мансап іздемек, айлалы болмақ, алданбастық - бұл нәрселердің бәрінің де өлшеуі бар. Өлшеуінен асырса, боғы шығады.\n\n«Ненің қызығын көп іздесең, соның күйігін бір тартасың» деген. Баз махфи олмая ол, мен айтқан үш қуаттың ішінде екеуі, яғни «сила притягательная однородного» бірлән «подвижной элемент» - бұл екеуі қосылып тұра тұрған нәрсе, күллі пайда да бұлардан шығады, уа күллі зарар да бұлардан шығады. Мансап сүйгіштік, мақтаншақтық, ашуланшақтық, өтірікшілік, осыған ұқсаған әрбір маскүнемдікке тартып, құмар қылып, ақылдан шығарып жіберетұғын нәрселер осы екеуінен болады. Бұларды түбегейлеткенде жақсы нәрселерді түбегейлетіп, жаман нәрселерден, яғни жоғарғы айтылмыш секілді адамшылықтан шығарып, құмарпаздыққа салып жіберетұғын нәрседен бойды ерте тыйып алуға керек. Пайда, залалды айыратұғын қуаттың аты ақыл еді ғой. Бір ақыл қуатыбірлән мұны тоқтатып болмайды. Һәм ақыл, һәм қайрат - екі мықты қуат қосылып тоқтатады. Ол екеуі кімде бар болса, бағанағы екі қуаттың екеуі де аз болса, яки бірі бар, бірі жоқ болса, бағанағы екі қуаттар - бір басы қатты асау ат, жүгенсіз тауға ұра ма, тасқа ұра ма, суға ұра ма, жарға ұра ма - құдай білсін, әйтеуір жолда көрген есті, ақылы дұрыс адамдар әлі де сұрамай да қалады. Сенде ерік жоқ. Екі етек жайылып, екі көзің аспанда, масқара болып кеткенің өлгеніңше.","Адам баласының ең жаманы - талапсыз. Талап қылушылар да неше түрлі болады. Һәм талаптың өзі де түрлі-түрлі. Һәм сол талаптардың қайсысының соңына түссе де, бірінен бірі өнерлі, тұрлаулырақ келеді. Уа, ләкин адам баласы я талапты, я талапсыз болсын, әйтеуір «бәрекелдіні» керек қылмайтұғыны болмайды. Әрнешік, орынсыз ба, орынды ма, «бәрекелді» деушіні көңіл іздеп тұрады. Адам баласы өзі қай жолда, қай майданда жүрсе, сол майдандағы кісімен сырлас болады. Оның үшін өзге жолдағылардан «бәрекелдіні» оңды күтпейді. Маған «бәрекелді» десе, осы өзімменен серіктес, сырлас осылар «бәрекелді» дер дейді.\n\nТалаптың ішінде адам баласы көбінесе басына қадір іздеп, сол талапта болады. Біреу мал қуып жатыр. Сараңдықпен, арамдықпен, әйтеуір мал тапсам, «Мал тапқан ердің жазығы жоқ» дейтұғын, «Малдының беті жарық» дейтұғын мақалға сеніп, халықтың түріне қарай, ит те болса, малдыны сөге алмайды деп, бұл мал һәм пайда, һәм қасиет болады бойыма дейді. Мұнысы рас, қазақтың өз құлқына қарағанда. Бірақ адамдыққа, ақылға қарағанда, қазақ түгіл, көңіл жиіркенетұғын іс. Осыған орай біреу ер атанамын, біреу қажеке атанамын, біреу молдеке атанамын, біреулер білгіш, қу, сұм атанамын деп, сол харекетте жүр. Әрқайсысы қазаққа яки бірі бар, бірі жоқ болса, бағанағы екі бұлдамақ та болып, басына «осыным бірсыпыра елеу азық болар» деген талаппенен қылып жүр. Мұнысы қазақтың тамырын ұстап-ұстап қарайды дағы, «мынаны алып келіп берсе, қымбат алғандай екен, осы күнде мына бір істің біраз пұлы бар екен» деп, қазақтың өз бетінен оқып, ізденген талап болмаса, кітап бетінен оқып іздеген талап емес. Оның үшін кітап сөзіменен ізденген талап болса, әуелі көкіректі тазалау керек дейді, онан соң ғибадат қыл дейді. Қазақтың бетіне қарап, содан оқыған болса, ол талабыңды қыла бер, көкіректі тым тазалаймын деме, оны кім көріп жатыр, ішінде қатпар көп болмаса, құт-берекеге жағымды болмайды дейді. Енді осыған қарап, қайдан оқып, біліп, ұмтылған талап екенін білерсің.","Құдай табарака уатағаланың барлығының үлкен дәлелі - неше мың жылдан бері әркім әртүрлі қылып сөйлесе де, бәрі де бір үлкен құдай бар деп келгендігі, уа һәм неше мың түрлі діннің бәрі де ғадаләт, махаббат құдайға лайықты дегендігі.\n\nБіз жаратушы емес, жаратқан көлеңкесіне қарай білетұғын пендеміз. Сол махаббат пен ғадаләтке қарай тартпақпыз, сол алланың хикметін біреуден біреу анығырақ сезбекпен артылады. Инандым, сендім демек инандырамын, сендіремін деген емес.\n\nАдамшылықтың алды - махаббат, ғадаләт, сезім. Бұлардың керек емес жері жоқ, кіріспейтұғын да жері жоқ. Ол - жаратқан тәңірінің ісі. Айғыр биеге ие болмақта да махаббат пен сезім бар. Бұл ғадаләт, махаббат сезім кімде көбірек болса, ол кісі - ғалым, сол - ғақил. Біз жанымыздан ғылым шығара алмаймыз, жаралып, жасалып қойған нәрселерді сезбекпіз, көзбен көріп, ақылмен біліп."]

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
(function() {
var fix = module.exports=0;

// Snap.svg 0.5.0
//
// Copyright (c) 2013 – 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2017-02-06

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.5.0 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

(function (glob) {
    var version = "0.5.0",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        fun = function () {},
        numsort = function (a, b) {
            return a - b;
        },
        current_event,
        stop,
        events = {n: {}},
        firstDefined = function () {
            for (var i = 0, ii = this.length; i < ii; i++) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        lastDefined = function () {
            var i = this.length;
            while (--i) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        objtos = Object.prototype.toString,
        Str = String,
        isArray = Array.isArray || function (ar) {
            return ar instanceof Array || objtos.call(ar) == "[object Array]";
        };
    /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     > Arguments

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/
        eve = function (name, scope) {
            var e = events,
                oldstop = stop,
                args = Array.prototype.slice.call(arguments, 2),
                listeners = eve.listeners(name),
                z = 0,
                f = false,
                l,
                indexed = [],
                queue = {},
                out = [],
                ce = current_event,
                errors = [];
            out.firstDefined = firstDefined;
            out.lastDefined = lastDefined;
            current_event = name;
            stop = 0;
            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
            indexed.sort(numsort);
            while (indexed[z] < 0) {
                l = queue[indexed[z++]];
                out.push(l.apply(scope, args));
                if (stop) {
                    stop = oldstop;
                    return out;
                }
            }
            for (i = 0; i < ii; i++) {
                l = listeners[i];
                if ("zIndex" in l) {
                    if (l.zIndex == indexed[z]) {
                        out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                        do {
                            z++;
                            l = queue[indexed[z]];
                            l && out.push(l.apply(scope, args));
                            if (stop) {
                                break;
                            }
                        } while (l)
                    } else {
                        queue[l.zIndex] = l;
                    }
                } else {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                }
            }
            stop = oldstop;
            current_event = ce;
            return out;
        };
        // Undocumented. Debug only.
        eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     > Arguments

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = isArray(name) ? name : name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    /*\
     * eve.separator
     [ method ]

     * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
     * here. Be aware that if you pass a string longer than one character it will be treated as
     * a list of characters.

     - separator (string) new separator. Empty string resets to default: `.` or `/`.
    \*/
    eve.separator = function (sep) {
        if (sep) {
            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
            sep = "[" + sep + "]";
            separator = new RegExp(sep);
        } else {
            separator = /[\.\/]/;
        }
    };
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     - name (array) if you don’t want to use separators, you can use array of strings
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        if (typeof f != "function") {
            return function () {};
        }
        var names = isArray(name) ? (isArray(name[0]) ? name : [name]) : Str(name).split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
                var names = isArray(name) ? name : Str(name).split(separator),
                    e = events,
                    exist;
                for (var i = 0, ii = names.length; i < ii; i++) {
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
                }
                e.f = e.f || [];
                for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
                    exist = true;
                    break;
                }
                !exist && e.f.push(f);
            }(names[i]));
        }
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     > Arguments
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var attrs = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     > Arguments
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        var cur = isArray(current_event) ? current_event.join(".") : current_event;
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        }
        return cur;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return isArray(current_event) ? current_event : current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = {n: {}};
            return;
        }
        var names = isArray(name) ? (isArray(name[0]) ? name : [name]) : Str(name).split(comaseparator);
        if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
                eve.off(names[i], f);
            }
            return;
        }
        names = isArray(name) ? name : Str(name).split(separator);
        var e,
            key,
            splice,
            i, ii, j, jj,
            cur = [events],
            inodes = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                        inodes.unshift({
                            n: e,
                            name: names[i]
                        });
                    }
                } else {
                    for (key in e) if (e[has](key)) {
                        splice.push(e[key]);
                        inodes.unshift({
                            n: e,
                            name: key
                        });
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        delete e.n[key].f;
                    }
                }
                e = e.n;
            }
        }
        // prune inner nodes in path
        prune: for (i = 0, ii = inodes.length; i < ii; i++) {
            e = inodes[i];
            for (key in e.n[e.name].f) {
                // not empty (has listeners)
                continue prune;
            }
            for (key in e.n[e.name].n) {
                // not empty (has children)
                continue prune;
            }
            // is empty
            delete e.n[e.name];
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function () {
            eve.off(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : ( true ? (!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = ((function() { return eve; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)))) : (glob.eve = eve));
})(this);

(function (glob, factory) {
    // AMD support
    if (true) {
        // Define as an anonymous module
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (eve) {
            return factory(glob, eve);
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports != "undefined") {
        // Next for Node.js or CommonJS
        var eve = require("eve");
        module.exports = factory(glob, eve);
    } else {
        // Browser globals (glob is window)
        // Snap adds itself to window
        factory(glob, glob.eve);
    }
}(window || this, function (window, eve) {

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var mina = (function (eve) {
    var animations = {},
    requestAnimFrame = window.requestAnimationFrame       ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame    ||
                       window.oRequestAnimationFrame      ||
                       window.msRequestAnimationFrame     ||
                       function (callback) {
                           setTimeout(callback, 16, new Date().getTime());
                           return true;
                       },
    requestID,
    isArray = Array.isArray || function (a) {
        return a instanceof Array ||
            Object.prototype.toString.call(a) == "[object Array]";
    },
    idgen = 0,
    idprefix = "M" + (+new Date).toString(36),
    ID = function () {
        return idprefix + (idgen++).toString(36);
    },
    diff = function (a, b, A, B) {
        if (isArray(a)) {
            res = [];
            for (var i = 0, ii = a.length; i < ii; i++) {
                res[i] = diff(a[i], b, A[i], B);
            }
            return res;
        }
        var dif = (A - a) / (B - b);
        return function (bb) {
            return a + dif * (bb - b);
        };
    },
    timer = Date.now || function () {
        return +new Date;
    },
    sta = function (val) {
        var a = this;
        if (val == null) {
            return a.s;
        }
        var ds = a.s - val;
        a.b += a.dur * ds;
        a.B += a.dur * ds;
        a.s = val;
    },
    speed = function (val) {
        var a = this;
        if (val == null) {
            return a.spd;
        }
        a.spd = val;
    },
    duration = function (val) {
        var a = this;
        if (val == null) {
            return a.dur;
        }
        a.s = a.s * val / a.dur;
        a.dur = val;
    },
    stopit = function () {
        var a = this;
        delete animations[a.id];
        a.update();
        eve("mina.stop." + a.id, a);
    },
    pause = function () {
        var a = this;
        if (a.pdif) {
            return;
        }
        delete animations[a.id];
        a.update();
        a.pdif = a.get() - a.b;
    },
    resume = function () {
        var a = this;
        if (!a.pdif) {
            return;
        }
        a.b = a.get() - a.pdif;
        delete a.pdif;
        animations[a.id] = a;
        frame();
    },
    update = function () {
        var a = this,
            res;
        if (isArray(a.start)) {
            res = [];
            for (var j = 0, jj = a.start.length; j < jj; j++) {
                res[j] = +a.start[j] +
                    (a.end[j] - a.start[j]) * a.easing(a.s);
            }
        } else {
            res = +a.start + (a.end - a.start) * a.easing(a.s);
        }
        a.set(res);
    },
    frame = function (timeStamp) {
        // Manual invokation?
        if (!timeStamp) {
            // Frame loop stopped?
            if (!requestID) {
                // Start frame loop...
                requestID = requestAnimFrame(frame);
            }
            return;
        }
        var len = 0;
        for (var i in animations) if (animations.hasOwnProperty(i)) {
            var a = animations[i],
                b = a.get(),
                res;
            len++;
            a.s = (b - a.b) / (a.dur / a.spd);
            if (a.s >= 1) {
                delete animations[i];
                a.s = 1;
                len--;
                (function (a) {
                    setTimeout(function () {
                        eve("mina.finish." + a.id, a);
                    });
                }(a));
            }
            a.update();
        }
        requestID = len ? requestAnimFrame(frame) : false;
    },
    /*\
     * mina
     [ method ]
     **
     * Generic animation of numbers
     **
     - a (number) start _slave_ number
     - A (number) end _slave_ number
     - b (number) start _master_ number (start time in general case)
     - B (number) end _master_ number (end time in general case)
     - get (function) getter of _master_ number (see @mina.time)
     - set (function) setter of _slave_ number
     - easing (function) #optional easing function, default is @mina.linear
     = (object) animation descriptor
     o {
     o         id (string) animation id,
     o         start (number) start _slave_ number,
     o         end (number) end _slave_ number,
     o         b (number) start _master_ number,
     o         s (number) animation status (0..1),
     o         dur (number) animation duration,
     o         spd (number) animation speed,
     o         get (function) getter of _master_ number (see @mina.time),
     o         set (function) setter of _slave_ number,
     o         easing (function) easing function, default is @mina.linear,
     o         status (function) status getter/setter,
     o         speed (function) speed getter/setter,
     o         duration (function) duration getter/setter,
     o         stop (function) animation stopper
     o         pause (function) pauses the animation
     o         resume (function) resumes the animation
     o         update (function) calles setter with the right value of the animation
     o }
    \*/
    mina = function (a, A, b, B, get, set, easing) {
        var anim = {
            id: ID(),
            start: a,
            end: A,
            b: b,
            s: 0,
            dur: B - b,
            spd: 1,
            get: get,
            set: set,
            easing: easing || mina.linear,
            status: sta,
            speed: speed,
            duration: duration,
            stop: stopit,
            pause: pause,
            resume: resume,
            update: update
        };
        animations[anim.id] = anim;
        var len = 0, i;
        for (i in animations) if (animations.hasOwnProperty(i)) {
            len++;
            if (len == 2) {
                break;
            }
        }
        len == 1 && frame();
        return anim;
    };
    /*\
     * mina.time
     [ method ]
     **
     * Returns the current time. Equivalent to:
     | function () {
     |     return (new Date).getTime();
     | }
    \*/
    mina.time = timer;
    /*\
     * mina.getById
     [ method ]
     **
     * Returns an animation by its id
     - id (string) animation's id
     = (object) See @mina
    \*/
    mina.getById = function (id) {
        return animations[id] || null;
    };

    /*\
     * mina.linear
     [ method ]
     **
     * Default linear easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.linear = function (n) {
        return n;
    };
    /*\
     * mina.easeout
     [ method ]
     **
     * Easeout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeout = function (n) {
        return Math.pow(n, 1.7);
    };
    /*\
     * mina.easein
     [ method ]
     **
     * Easein easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easein = function (n) {
        return Math.pow(n, .48);
    };
    /*\
     * mina.easeinout
     [ method ]
     **
     * Easeinout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeinout = function (n) {
        if (n == 1) {
            return 1;
        }
        if (n == 0) {
            return 0;
        }
        var q = .48 - n / 1.04,
            Q = Math.sqrt(.1734 + q * q),
            x = Q - q,
            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    };
    /*\
     * mina.backin
     [ method ]
     **
     * Backin easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backin = function (n) {
        if (n == 1) {
            return 1;
        }
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    };
    /*\
     * mina.backout
     [ method ]
     **
     * Backout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backout = function (n) {
        if (n == 0) {
            return 0;
        }
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    };
    /*\
     * mina.elastic
     [ method ]
     **
     * Elastic easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.elastic = function (n) {
        if (n == !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - .075) *
            (2 * Math.PI) / .3) + 1;
    };
    /*\
     * mina.bounce
     [ method ]
     **
     * Bounce easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.bounce = function (n) {
        var s = 7.5625,
            p = 2.75,
            l;
        if (n < 1 / p) {
            l = s * n * n;
        } else {
            if (n < 2 / p) {
                n -= 1.5 / p;
                l = s * n * n + .75;
            } else {
                if (n < 2.5 / p) {
                    n -= 2.25 / p;
                    l = s * n * n + .9375;
                } else {
                    n -= 2.625 / p;
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    };
    window.mina = mina;
    return mina;
})(typeof eve == "undefined" ? function () {} : eve);

// Copyright (c) 2013 - 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Snap = (function(root) {
Snap.version = "0.5.1";
/*\
 * Snap
 [ method ]
 **
 * Creates a drawing surface or wraps existing SVG element.
 **
 - width (number|string) width of surface
 - height (number|string) height of surface
 * or
 - DOM (SVGElement) element to be wrapped into Snap structure
 * or
 - array (array) array of elements (will return set of elements)
 * or
 - query (string) CSS query selector
 = (object) @Element
\*/
function Snap(w, h) {
    if (w) {
        if (w.nodeType) {
            return wrap(w);
        }
        if (is(w, "array") && Snap.set) {
            return Snap.set.apply(Snap, w);
        }
        if (w instanceof Element) {
            return w;
        }
        if (h == null) {
            // try {
                w = glob.doc.querySelector(String(w));
                return wrap(w);
            // } catch (e) {
                // return null;
            // }
        }
    }
    w = w == null ? "100%" : w;
    h = h == null ? "100%" : h;
    return new Paper(w, h);
}
Snap.toString = function () {
    return "Snap v" + this.version;
};
Snap._ = {};
var glob = {
    win: root.window,
    doc: root.window.document
};
Snap._.glob = glob;
var has = "hasOwnProperty",
    Str = String,
    toFloat = parseFloat,
    toInt = parseInt,
    math = Math,
    mmax = math.max,
    mmin = math.min,
    abs = math.abs,
    pow = math.pow,
    PI = math.PI,
    round = math.round,
    E = "",
    S = " ",
    objectToString = Object.prototype.toString,
    ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    separator = Snap._.separator = /[,\s]+/,
    whitespace = /[\s]/g,
    commaSpaces = /[\s]*,[\s]*/,
    hsrg = {hs: 1, rg: 1},
    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/ig,
    idgen = 0,
    idprefix = "S" + (+new Date).toString(36),
    ID = function (el) {
        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
    },
    xlink = "http://www.w3.org/1999/xlink",
    xmlns = "http://www.w3.org/2000/svg",
    hub = {},
    /*\
     * Snap.url
     [ method ]
     **
     * Wraps path into `"url('<path>')"`.
     - value (string) path
     = (string) wrapped path
    \*/
    URL = Snap.url = function (url) {
        return "url('#" + url + "')";
    };

function $(el, attr) {
    if (attr) {
        if (el == "#text") {
            el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
        }
        if (el == "#comment") {
            el = glob.doc.createComment(attr.text || attr["#text"] || "");
        }
        if (typeof el == "string") {
            el = $(el);
        }
        if (typeof attr == "string") {
            if (el.nodeType == 1) {
                if (attr.substring(0, 6) == "xlink:") {
                    return el.getAttributeNS(xlink, attr.substring(6));
                }
                if (attr.substring(0, 4) == "xml:") {
                    return el.getAttributeNS(xmlns, attr.substring(4));
                }
                return el.getAttribute(attr);
            } else if (attr == "text") {
                return el.nodeValue;
            } else {
                return null;
            }
        }
        if (el.nodeType == 1) {
            for (var key in attr) if (attr[has](key)) {
                var val = Str(attr[key]);
                if (val) {
                    if (key.substring(0, 6) == "xlink:") {
                        el.setAttributeNS(xlink, key.substring(6), val);
                    } else if (key.substring(0, 4) == "xml:") {
                        el.setAttributeNS(xmlns, key.substring(4), val);
                    } else {
                        el.setAttribute(key, val);
                    }
                } else {
                    el.removeAttribute(key);
                }
            }
        } else if ("text" in attr) {
            el.nodeValue = attr.text;
        }
    } else {
        el = glob.doc.createElementNS(xmlns, el);
    }
    return el;
}
Snap._.$ = $;
Snap._.id = ID;
function getAttrs(el) {
    var attrs = el.attributes,
        name,
        out = {};
    for (var i = 0; i < attrs.length; i++) {
        if (attrs[i].namespaceURI == xlink) {
            name = "xlink:";
        } else {
            name = "";
        }
        name += attrs[i].name;
        out[name] = attrs[i].textContent;
    }
    return out;
}
function is(o, type) {
    type = Str.prototype.toLowerCase.call(type);
    if (type == "finite") {
        return isFinite(o);
    }
    if (type == "array" &&
        (o instanceof Array || Array.isArray && Array.isArray(o))) {
        return true;
    }
    return  type == "null" && o === null ||
            type == typeof o && o !== null ||
            type == "object" && o === Object(o) ||
            objectToString.call(o).slice(8, -1).toLowerCase() == type;
}
/*\
 * Snap.format
 [ method ]
 **
 * Replaces construction of type `{<name>}` to the corresponding argument
 **
 - token (string) string to format
 - json (object) object which properties are used as a replacement
 = (string) formatted string
 > Usage
 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
 |     x: 10,
 |     y: 20,
 |     dim: {
 |         width: 40,
 |         height: 50,
 |         "negative width": -40
 |     }
 | }));
\*/
Snap.format = (function () {
    var tokenRegex = /\{([^\}]+)\}/g,
        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
        replacer = function (all, key, obj) {
            var res = obj;
            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                name = name || quotedName;
                if (res) {
                    if (name in res) {
                        res = res[name];
                    }
                    typeof res == "function" && isFunc && (res = res());
                }
            });
            res = (res == null || res == obj ? all : res) + "";
            return res;
        };
    return function (str, obj) {
        return Str(str).replace(tokenRegex, function (all, key) {
            return replacer(all, key, obj);
        });
    };
})();
function clone(obj) {
    if (typeof obj == "function" || Object(obj) !== obj) {
        return obj;
    }
    var res = new obj.constructor;
    for (var key in obj) if (obj[has](key)) {
        res[key] = clone(obj[key]);
    }
    return res;
}
Snap._.clone = clone;
function repush(array, item) {
    for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
        return array.push(array.splice(i, 1)[0]);
    }
}
function cacher(f, scope, postprocessor) {
    function newf() {
        var arg = Array.prototype.slice.call(arguments, 0),
            args = arg.join("\u2400"),
            cache = newf.cache = newf.cache || {},
            count = newf.count = newf.count || [];
        if (cache[has](args)) {
            repush(count, args);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        count.length >= 1e3 && delete cache[count.shift()];
        count.push(args);
        cache[args] = f.apply(scope, arg);
        return postprocessor ? postprocessor(cache[args]) : cache[args];
    }
    return newf;
}
Snap._.cacher = cacher;
function angle(x1, y1, x2, y2, x3, y3) {
    if (x3 == null) {
        var x = x1 - x2,
            y = y1 - y2;
        if (!x && !y) {
            return 0;
        }
        return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
    } else {
        return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
    }
}
function rad(deg) {
    return deg % 360 * PI / 180;
}
function deg(rad) {
    return rad * 180 / PI % 360;
}
function x_y() {
    return this.x + S + this.y;
}
function x_y_w_h() {
    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
}

/*\
 * Snap.rad
 [ method ]
 **
 * Transform angle to radians
 - deg (number) angle in degrees
 = (number) angle in radians
\*/
Snap.rad = rad;
/*\
 * Snap.deg
 [ method ]
 **
 * Transform angle to degrees
 - rad (number) angle in radians
 = (number) angle in degrees
\*/
Snap.deg = deg;
/*\
 * Snap.sin
 [ method ]
 **
 * Equivalent to `Math.sin()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) sin
\*/
Snap.sin = function (angle) {
    return math.sin(Snap.rad(angle));
};
/*\
 * Snap.tan
 [ method ]
 **
 * Equivalent to `Math.tan()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) tan
\*/
Snap.tan = function (angle) {
    return math.tan(Snap.rad(angle));
};
/*\
 * Snap.cos
 [ method ]
 **
 * Equivalent to `Math.cos()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) cos
\*/
Snap.cos = function (angle) {
    return math.cos(Snap.rad(angle));
};
/*\
 * Snap.asin
 [ method ]
 **
 * Equivalent to `Math.asin()` only works with degrees, not radians.
 - num (number) value
 = (number) asin in degrees
\*/
Snap.asin = function (num) {
    return Snap.deg(math.asin(num));
};
/*\
 * Snap.acos
 [ method ]
 **
 * Equivalent to `Math.acos()` only works with degrees, not radians.
 - num (number) value
 = (number) acos in degrees
\*/
Snap.acos = function (num) {
    return Snap.deg(math.acos(num));
};
/*\
 * Snap.atan
 [ method ]
 **
 * Equivalent to `Math.atan()` only works with degrees, not radians.
 - num (number) value
 = (number) atan in degrees
\*/
Snap.atan = function (num) {
    return Snap.deg(math.atan(num));
};
/*\
 * Snap.atan2
 [ method ]
 **
 * Equivalent to `Math.atan2()` only works with degrees, not radians.
 - num (number) value
 = (number) atan2 in degrees
\*/
Snap.atan2 = function (num) {
    return Snap.deg(math.atan2(num));
};
/*\
 * Snap.angle
 [ method ]
 **
 * Returns an angle between two or three points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 - x3 (number) #optional x coord of third point
 - y3 (number) #optional y coord of third point
 = (number) angle in degrees
\*/
Snap.angle = angle;
/*\
 * Snap.len
 [ method ]
 **
 * Returns distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len = function (x1, y1, x2, y2) {
    return Math.sqrt(Snap.len2(x1, y1, x2, y2));
};
/*\
 * Snap.len2
 [ method ]
 **
 * Returns squared distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len2 = function (x1, y1, x2, y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
};
/*\
 * Snap.closestPoint
 [ method ]
 **
 * Returns closest point to a given one on a given path.
 - path (Element) path element
 - x (number) x coord of a point
 - y (number) y coord of a point
 = (object) in format
 {
    x (number) x coord of the point on the path
    y (number) y coord of the point on the path
    length (number) length of the path to the point
    distance (number) distance from the given point to the path
 }
\*/
// Copied from http://bl.ocks.org/mbostock/8027637
Snap.closestPoint = function (path, x, y) {
    function distance2(p) {
        var dx = p.x - x,
            dy = p.y - y;
        return dx * dx + dy * dy;
    }
    var pathNode = path.node,
        pathLength = pathNode.getTotalLength(),
        precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
        best,
        bestLength,
        bestDistance = Infinity;

    // linear scan for coarse approximation
    for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
        if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
            best = scan;
            bestLength = scanLength;
            bestDistance = scanDistance;
        }
    }

    // binary search for precise estimate
    precision *= .5;
    while (precision > .5) {
        var before,
            after,
            beforeLength,
            afterLength,
            beforeDistance,
            afterDistance;
        if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
            best = before;
            bestLength = beforeLength;
            bestDistance = beforeDistance;
        } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
            best = after;
            bestLength = afterLength;
            bestDistance = afterDistance;
        } else {
            precision *= .5;
        }
    }

    best = {
        x: best.x,
        y: best.y,
        length: bestLength,
        distance: Math.sqrt(bestDistance)
    };
    return best;
}
/*\
 * Snap.is
 [ method ]
 **
 * Handy replacement for the `typeof` operator
 - o (…) any object or primitive
 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
 = (boolean) `true` if given value is of given type
\*/
Snap.is = is;
/*\
 * Snap.snapTo
 [ method ]
 **
 * Snaps given value to given grid
 - values (array|number) given array of values or step of the grid
 - value (number) value to adjust
 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
 = (number) adjusted value
\*/
Snap.snapTo = function (values, value, tolerance) {
    tolerance = is(tolerance, "finite") ? tolerance : 10;
    if (is(values, "array")) {
        var i = values.length;
        while (i--) if (abs(values[i] - value) <= tolerance) {
            return values[i];
        }
    } else {
        values = +values;
        var rem = value % values;
        if (rem < tolerance) {
            return value - rem;
        }
        if (rem > values - tolerance) {
            return value - rem + values;
        }
    }
    return value;
};
// Colour
/*\
 * Snap.getRGB
 [ method ]
 **
 * Parses color string as RGB object
 - color (string) color string in one of the following formats:
 # <ul>
 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
 # </ul>
 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) true if string can't be parsed
 o }
\*/
Snap.getRGB = cacher(function (colour) {
    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    if (colour == "none") {
        return {r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString};
    }
    !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
    if (!colour) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    var res,
        red,
        green,
        blue,
        opacity,
        t,
        values,
        rgb = colour.match(colourRegExp);
    if (rgb) {
        if (rgb[2]) {
            blue = toInt(rgb[2].substring(5), 16);
            green = toInt(rgb[2].substring(3, 5), 16);
            red = toInt(rgb[2].substring(1, 3), 16);
        }
        if (rgb[3]) {
            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
            green = toInt((t = rgb[3].charAt(2)) + t, 16);
            red = toInt((t = rgb[3].charAt(1)) + t, 16);
        }
        if (rgb[4]) {
            values = rgb[4].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red *= 2.55);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green *= 2.55);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue *= 2.55);
            rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
        }
        if (rgb[5]) {
            values = rgb[5].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsb2rgb(red, green, blue, opacity);
        }
        if (rgb[6]) {
            values = rgb[6].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsl2rgb(red, green, blue, opacity);
        }
        red = mmin(math.round(red), 255);
        green = mmin(math.round(green), 255);
        blue = mmin(math.round(blue), 255);
        opacity = mmin(mmax(opacity, 0), 1);
        rgb = {r: red, g: green, b: blue, toString: rgbtoString};
        rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
        rgb.opacity = is(opacity, "finite") ? opacity : 1;
        return rgb;
    }
    return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
}, Snap);
/*\
 * Snap.hsb
 [ method ]
 **
 * Converts HSB values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - b (number) value or brightness
 = (string) hex representation of the color
\*/
Snap.hsb = cacher(function (h, s, b) {
    return Snap.hsb2rgb(h, s, b).hex;
});
/*\
 * Snap.hsl
 [ method ]
 **
 * Converts HSL values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (string) hex representation of the color
\*/
Snap.hsl = cacher(function (h, s, l) {
    return Snap.hsl2rgb(h, s, l).hex;
});
/*\
 * Snap.rgb
 [ method ]
 **
 * Converts RGB values to a hex representation of the color
 - r (number) red
 - g (number) green
 - b (number) blue
 = (string) hex representation of the color
\*/
Snap.rgb = cacher(function (r, g, b, o) {
    if (is(o, "finite")) {
        var round = math.round;
        return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
    }
    return "#" + (16777216 | b | g << 8 | r << 16).toString(16).slice(1);
});
var toHex = function (color) {
    var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
        red = "rgb(255, 0, 0)";
    toHex = cacher(function (color) {
        if (color.toLowerCase() == "red") {
            return red;
        }
        i.style.color = red;
        i.style.color = color;
        var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
        return out == red ? null : out;
    });
    return toHex(color);
},
hsbtoString = function () {
    return "hsb(" + [this.h, this.s, this.b] + ")";
},
hsltoString = function () {
    return "hsl(" + [this.h, this.s, this.l] + ")";
},
rgbtoString = function () {
    return this.opacity == 1 || this.opacity == null ?
            this.hex :
            "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
},
prepareRGB = function (r, g, b) {
    if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
        b = r.b;
        g = r.g;
        r = r.r;
    }
    if (g == null && is(r, string)) {
        var clr = Snap.getRGB(r);
        r = clr.r;
        g = clr.g;
        b = clr.b;
    }
    if (r > 1 || g > 1 || b > 1) {
        r /= 255;
        g /= 255;
        b /= 255;
    }

    return [r, g, b];
},
packageRGB = function (r, g, b, o) {
    r = math.round(r * 255);
    g = math.round(g * 255);
    b = math.round(b * 255);
    var rgb = {
        r: r,
        g: g,
        b: b,
        opacity: is(o, "finite") ? o : 1,
        hex: Snap.rgb(r, g, b),
        toString: rgbtoString
    };
    is(o, "finite") && (rgb.opacity = o);
    return rgb;
};
/*\
 * Snap.color
 [ method ]
 **
 * Parses the color string and returns an object featuring the color's component values
 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
 = (object) Combined RGB/HSB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) `true` if string can't be parsed,
 o     h (number) hue,
 o     s (number) saturation,
 o     v (number) value (brightness),
 o     l (number) lightness
 o }
\*/
Snap.color = function (clr) {
    var rgb;
    if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
        rgb = Snap.hsb2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
        rgb = Snap.hsl2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else {
        if (is(clr, "string")) {
            clr = Snap.getRGB(clr);
        }
        if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
            rgb = Snap.rgb2hsl(clr);
            clr.h = rgb.h;
            clr.s = rgb.s;
            clr.l = rgb.l;
            rgb = Snap.rgb2hsb(clr);
            clr.v = rgb.b;
        } else {
            clr = {hex: "none"};
            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
            clr.error = 1;
        }
    }
    clr.toString = rgbtoString;
    return clr;
};
/*\
 * Snap.hsb2rgb
 [ method ]
 **
 * Converts HSB values to an RGB object
 - h (number) hue
 - s (number) saturation
 - v (number) value or brightness
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsb2rgb = function (h, s, v, o) {
    if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
        v = h.b;
        s = h.s;
        o = h.o;
        h = h.h;
    }
    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = v * s;
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = v - C;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.hsl2rgb
 [ method ]
 **
 * Converts HSL values to an RGB object
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsl2rgb = function (h, s, l, o) {
    if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
        l = h.l;
        s = h.s;
        h = h.h;
    }
    if (h > 1 || s > 1 || l > 1) {
        h /= 360;
        s /= 100;
        l /= 100;
    }
    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = 2 * s * (l < .5 ? l : 1 - l);
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = l - C / 2;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.rgb2hsb
 [ method ]
 **
 * Converts RGB values to an HSB object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSB object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     b (number) brightness
 o }
\*/
Snap.rgb2hsb = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, V, C;
    V = mmax(r, g, b);
    C = V - mmin(r, g, b);
    H = C == 0 ? null :
        V == r ? (g - b) / C :
        V == g ? (b - r) / C + 2 :
                 (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    S = C == 0 ? 0 : C / V;
    return {h: H, s: S, b: V, toString: hsbtoString};
};
/*\
 * Snap.rgb2hsl
 [ method ]
 **
 * Converts RGB values to an HSL object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSL object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     l (number) luminosity
 o }
\*/
Snap.rgb2hsl = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, L, M, m, C;
    M = mmax(r, g, b);
    m = mmin(r, g, b);
    C = M - m;
    H = C == 0 ? null :
        M == r ? (g - b) / C :
        M == g ? (b - r) / C + 2 :
                 (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    L = (M + m) / 2;
    S = C == 0 ? 0 :
         L < .5 ? C / (2 * L) :
                  C / (2 - 2 * L);
    return {h: H, s: S, l: L, toString: hsltoString};
};

// Transformations
/*\
 * Snap.parsePathString
 [ method ]
 **
 * Utility method
 **
 * Parses given path string into an array of arrays of path segments
 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
 = (array) array of segments
\*/
Snap.parsePathString = function (pathString) {
    if (!pathString) {
        return null;
    }
    var pth = Snap.path(pathString);
    if (pth.arr) {
        return Snap.path.clone(pth.arr);
    }

    var paramCounts = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0},
        data = [];
    if (is(pathString, "array") && is(pathString[0], "array")) { // rough assumption
        data = Snap.path.clone(pathString);
    }
    if (!data.length) {
        Str(pathString).replace(pathCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            if (name == "m" && params.length > 2) {
                data.push([b].concat(params.splice(0, 2)));
                name = "l";
                b = b == "m" ? "l" : "L";
            }
            if (name == "o" && params.length == 1) {
                data.push([b, params[0]]);
            }
            if (name == "r") {
                data.push([b].concat(params));
            } else while (params.length >= paramCounts[name]) {
                data.push([b].concat(params.splice(0, paramCounts[name])));
                if (!paramCounts[name]) {
                    break;
                }
            }
        });
    }
    data.toString = Snap.path.toString;
    pth.arr = Snap.path.clone(data);
    return data;
};
/*\
 * Snap.parseTransformString
 [ method ]
 **
 * Utility method
 **
 * Parses given transform string into an array of transformations
 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
 = (array) array of transformations
\*/
var parseTransformString = Snap.parseTransformString = function (TString) {
    if (!TString) {
        return null;
    }
    var paramCounts = {r: 3, s: 4, t: 2, m: 6},
        data = [];
    if (is(TString, "array") && is(TString[0], "array")) { // rough assumption
        data = Snap.path.clone(TString);
    }
    if (!data.length) {
        Str(TString).replace(tCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            data.push([b].concat(params));
        });
    }
    data.toString = Snap.path.toString;
    return data;
};
function svgTransform2string(tstr) {
    var res = [];
    tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
        params = params.split(/\s*,\s*|\s+/);
        if (name == "rotate" && params.length == 1) {
            params.push(0, 0);
        }
        if (name == "scale") {
            if (params.length > 2) {
                params = params.slice(0, 2);
            } else if (params.length == 2) {
                params.push(0, 0);
            }
            if (params.length == 1) {
                params.push(params[0], 0, 0);
            }
        }
        if (name == "skewX") {
            res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
        } else if (name == "skewY") {
            res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
        } else {
            res.push([name.charAt(0)].concat(params));
        }
        return all;
    });
    return res;
}
Snap._.svgTransform2string = svgTransform2string;
Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
function transform2matrix(tstr, bbox) {
    var tdata = parseTransformString(tstr),
        m = new Snap.Matrix;
    if (tdata) {
        for (var i = 0, ii = tdata.length; i < ii; i++) {
            var t = tdata[i],
                tlen = t.length,
                command = Str(t[0]).toLowerCase(),
                absolute = t[0] != command,
                inver = absolute ? m.invert() : 0,
                x1,
                y1,
                x2,
                y2,
                bb;
            if (command == "t" && tlen == 2){
                m.translate(t[1], 0);
            } else if (command == "t" && tlen == 3) {
                if (absolute) {
                    x1 = inver.x(0, 0);
                    y1 = inver.y(0, 0);
                    x2 = inver.x(t[1], t[2]);
                    y2 = inver.y(t[1], t[2]);
                    m.translate(x2 - x1, y2 - y1);
                } else {
                    m.translate(t[1], t[2]);
                }
            } else if (command == "r") {
                if (tlen == 2) {
                    bb = bb || bbox;
                    m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.rotate(t[1], x2, y2);
                    } else {
                        m.rotate(t[1], t[2], t[3]);
                    }
                }
            } else if (command == "s") {
                if (tlen == 2 || tlen == 3) {
                    bb = bb || bbox;
                    m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.scale(t[1], t[1], x2, y2);
                    } else {
                        m.scale(t[1], t[1], t[2], t[3]);
                    }
                } else if (tlen == 5) {
                    if (absolute) {
                        x2 = inver.x(t[3], t[4]);
                        y2 = inver.y(t[3], t[4]);
                        m.scale(t[1], t[2], x2, y2);
                    } else {
                        m.scale(t[1], t[2], t[3], t[4]);
                    }
                }
            } else if (command == "m" && tlen == 7) {
                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
            }
        }
    }
    return m;
}
Snap._.transform2matrix = transform2matrix;
Snap._unit2px = unit2px;
var contains = glob.doc.contains || glob.doc.compareDocumentPosition ?
    function (a, b) {
        var adown = a.nodeType == 9 ? a.documentElement : a,
            bup = b && b.parentNode;
            return a == bup || !!(bup && bup.nodeType == 1 && (
                adown.contains ?
                    adown.contains(bup) :
                    a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
            ));
    } :
    function (a, b) {
        if (b) {
            while (b) {
                b = b.parentNode;
                if (b == a) {
                    return true;
                }
            }
        }
        return false;
    };
function getSomeDefs(el) {
    var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) ||
            el.node.parentNode && wrap(el.node.parentNode) ||
            Snap.select("svg") ||
            Snap(0, 0),
        pdefs = p.select("defs"),
        defs  = pdefs == null ? false : pdefs.node;
    if (!defs) {
        defs = make("defs", p.node).node;
    }
    return defs;
}
function getSomeSVG(el) {
    return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
}
Snap._.getSomeDefs = getSomeDefs;
Snap._.getSomeSVG = getSomeSVG;
function unit2px(el, name, value) {
    var svg = getSomeSVG(el).node,
        out = {},
        mgr = svg.querySelector(".svg---mgr");
    if (!mgr) {
        mgr = $("rect");
        $(mgr, {x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none"});
        svg.appendChild(mgr);
    }
    function getW(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {width: val});
        try {
            return mgr.getBBox().width;
        } catch (e) {
            return 0;
        }
    }
    function getH(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {height: val});
        try {
            return mgr.getBBox().height;
        } catch (e) {
            return 0;
        }
    }
    function set(nam, f) {
        if (name == null) {
            out[nam] = f(el.attr(nam) || 0);
        } else if (nam == name) {
            out = f(value == null ? el.attr(nam) || 0 : value);
        }
    }
    switch (el.type) {
        case "rect":
            set("rx", getW);
            set("ry", getH);
        case "image":
            set("width", getW);
            set("height", getH);
        case "text":
            set("x", getW);
            set("y", getH);
        break;
        case "circle":
            set("cx", getW);
            set("cy", getH);
            set("r", getW);
        break;
        case "ellipse":
            set("cx", getW);
            set("cy", getH);
            set("rx", getW);
            set("ry", getH);
        break;
        case "line":
            set("x1", getW);
            set("x2", getW);
            set("y1", getH);
            set("y2", getH);
        break;
        case "marker":
            set("refX", getW);
            set("markerWidth", getW);
            set("refY", getH);
            set("markerHeight", getH);
        break;
        case "radialGradient":
            set("fx", getW);
            set("fy", getH);
        break;
        case "tspan":
            set("dx", getW);
            set("dy", getH);
        break;
        default:
            set(name, getW);
    }
    svg.removeChild(mgr);
    return out;
}
/*\
 * Snap.select
 [ method ]
 **
 * Wraps a DOM element specified by CSS selector as @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.select = function (query) {
    query = Str(query).replace(/([^\\]):/g, "$1\\:");
    return wrap(glob.doc.querySelector(query));
};
/*\
 * Snap.selectAll
 [ method ]
 **
 * Wraps DOM elements specified by CSS selector as set or array of @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.selectAll = function (query) {
    var nodelist = glob.doc.querySelectorAll(query),
        set = (Snap.set || Array)();
    for (var i = 0; i < nodelist.length; i++) {
        set.push(wrap(nodelist[i]));
    }
    return set;
};

function add2group(list) {
    if (!is(list, "array")) {
        list = Array.prototype.slice.call(arguments, 0);
    }
    var i = 0,
        j = 0,
        node = this.node;
    while (this[i]) delete this[i++];
    for (i = 0; i < list.length; i++) {
        if (list[i].type == "set") {
            list[i].forEach(function (el) {
                node.appendChild(el.node);
            });
        } else {
            node.appendChild(list[i].node);
        }
    }
    var children = node.childNodes;
    for (i = 0; i < children.length; i++) {
        this[j++] = wrap(children[i]);
    }
    return this;
}
// Hub garbage collector every 10s
setInterval(function () {
    for (var key in hub) if (hub[has](key)) {
        var el = hub[key],
            node = el.node;
        if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
            delete hub[key];
        }
    }
}, 1e4);
function Element(el) {
    if (el.snap in hub) {
        return hub[el.snap];
    }
    var svg;
    try {
        svg = el.ownerSVGElement;
    } catch(e) {}
    /*\
     * Element.node
     [ property (object) ]
     **
     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
     > Usage
     | // draw a circle at coordinate 10,10 with radius of 10
     | var c = paper.circle(10, 10, 10);
     | c.node.onclick = function () {
     |     c.attr("fill", "red");
     | };
    \*/
    this.node = el;
    if (svg) {
        this.paper = new Paper(svg);
    }
    /*\
     * Element.type
     [ property (string) ]
     **
     * SVG tag name of the given element.
    \*/
    this.type = el.tagName || el.nodeName;
    var id = this.id = ID(this);
    this.anims = {};
    this._ = {
        transform: []
    };
    el.snap = id;
    hub[id] = this;
    if (this.type == "g") {
        this.add = add2group;
    }
    if (this.type in {g: 1, mask: 1, pattern: 1, symbol: 1}) {
        for (var method in Paper.prototype) if (Paper.prototype[has](method)) {
            this[method] = Paper.prototype[method];
        }
    }
}
   /*\
     * Element.attr
     [ method ]
     **
     * Gets or sets given attributes of the element.
     **
     - params (object) contains key-value pairs of attributes you want to set
     * or
     - param (string) name of the attribute
     = (Element) the current element
     * or
     = (string) value of attribute
     > Usage
     | el.attr({
     |     fill: "#fc0",
     |     stroke: "#000",
     |     strokeWidth: 2, // CamelCase...
     |     "fill-opacity": 0.5, // or dash-separated names
     |     width: "*=2" // prefixed values
     | });
     | console.log(el.attr("fill")); // #fc0
     * Prefixed values in format `"+=10"` supported. All four operations
     * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
     * and `-`: `"+=2em"`.
    \*/
    Element.prototype.attr = function (params, value) {
        var el = this,
            node = el.node;
        if (!params) {
            if (node.nodeType != 1) {
                return {
                    text: node.nodeValue
                };
            }
            var attr = node.attributes,
                out = {};
            for (var i = 0, ii = attr.length; i < ii; i++) {
                out[attr[i].nodeName] = attr[i].nodeValue;
            }
            return out;
        }
        if (is(params, "string")) {
            if (arguments.length > 1) {
                var json = {};
                json[params] = value;
                params = json;
            } else {
                return eve("snap.util.getattr." + params, el).firstDefined();
            }
        }
        for (var att in params) {
            if (params[has](att)) {
                eve("snap.util.attr." + att, el, params[att]);
            }
        }
        return el;
    };
/*\
 * Snap.parse
 [ method ]
 **
 * Parses SVG fragment and converts it into a @Fragment
 **
 - svg (string) SVG string
 = (Fragment) the @Fragment
\*/
Snap.parse = function (svg) {
    var f = glob.doc.createDocumentFragment(),
        full = true,
        div = glob.doc.createElement("div");
    svg = Str(svg);
    if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
        svg = "<svg>" + svg + "</svg>";
        full = false;
    }
    div.innerHTML = svg;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
        if (full) {
            f = svg;
        } else {
            while (svg.firstChild) {
                f.appendChild(svg.firstChild);
            }
        }
    }
    return new Fragment(f);
};
function Fragment(frag) {
    this.node = frag;
}
/*\
 * Snap.fragment
 [ method ]
 **
 * Creates a DOM fragment from a given list of elements or strings
 **
 - varargs (…) SVG string
 = (Fragment) the @Fragment
\*/
Snap.fragment = function () {
    var args = Array.prototype.slice.call(arguments, 0),
        f = glob.doc.createDocumentFragment();
    for (var i = 0, ii = args.length; i < ii; i++) {
        var item = args[i];
        if (item.node && item.node.nodeType) {
            f.appendChild(item.node);
        }
        if (item.nodeType) {
            f.appendChild(item);
        }
        if (typeof item == "string") {
            f.appendChild(Snap.parse(item).node);
        }
    }
    return new Fragment(f);
};

function make(name, parent) {
    var res = $(name);
    parent.appendChild(res);
    var el = wrap(res);
    return el;
}
function Paper(w, h) {
    var res,
        desc,
        defs,
        proto = Paper.prototype;
    if (w && w.tagName && w.tagName.toLowerCase() == "svg") {
        if (w.snap in hub) {
            return hub[w.snap];
        }
        var doc = w.ownerDocument;
        res = new Element(w);
        desc = w.getElementsByTagName("desc")[0];
        defs = w.getElementsByTagName("defs")[0];
        if (!desc) {
            desc = $("desc");
            desc.appendChild(doc.createTextNode("Created with Snap"));
            res.node.appendChild(desc);
        }
        if (!defs) {
            defs = $("defs");
            res.node.appendChild(defs);
        }
        res.defs = defs;
        for (var key in proto) if (proto[has](key)) {
            res[key] = proto[key];
        }
        res.paper = res.root = res;
    } else {
        res = make("svg", glob.doc.body);
        $(res.node, {
            height: h,
            version: 1.1,
            width: w,
            xmlns: xmlns
        });
    }
    return res;
}
function wrap(dom) {
    if (!dom) {
        return dom;
    }
    if (dom instanceof Element || dom instanceof Fragment) {
        return dom;
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
        return new Paper(dom);
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
        return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
    }
    return new Element(dom);
}

Snap._.make = make;
Snap._.wrap = wrap;
/*\
 * Paper.el
 [ method ]
 **
 * Creates an element on paper with a given name and no attributes
 **
 - name (string) tag name
 - attr (object) attributes
 = (Element) the current element
 > Usage
 | var c = paper.circle(10, 10, 10); // is the same as...
 | var c = paper.el("circle").attr({
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
 | // and the same as
 | var c = paper.el("circle", {
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
\*/
Paper.prototype.el = function (name, attr) {
    var el = make(name, this.node);
    attr && el.attr(attr);
    return el;
};
/*\
 * Element.children
 [ method ]
 **
 * Returns array of all the children of the element.
 = (array) array of Elements
\*/
Element.prototype.children = function () {
    var out = [],
        ch = this.node.childNodes;
    for (var i = 0, ii = ch.length; i < ii; i++) {
        out[i] = Snap(ch[i]);
    }
    return out;
};
function jsonFiller(root, o) {
    for (var i = 0, ii = root.length; i < ii; i++) {
        var item = {
                type: root[i].type,
                attr: root[i].attr()
            },
            children = root[i].children();
        o.push(item);
        if (children.length) {
            jsonFiller(children, item.childNodes = []);
        }
    }
}
/*\
 * Element.toJSON
 [ method ]
 **
 * Returns object representation of the given element and all its children.
 = (object) in format
 o {
 o     type (string) this.type,
 o     attr (object) attributes map,
 o     childNodes (array) optional array of children in the same format
 o }
\*/
Element.prototype.toJSON = function () {
    var out = [];
    jsonFiller([this], out);
    return out[0];
};
// default
eve.on("snap.util.getattr", function () {
    var att = eve.nt();
    att = att.substring(att.lastIndexOf(".") + 1);
    var css = att.replace(/[A-Z]/g, function (letter) {
        return "-" + letter.toLowerCase();
    });
    if (cssAttr[has](css)) {
        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
    } else {
        return $(this.node, att);
    }
});
var cssAttr = {
    "alignment-baseline": 0,
    "baseline-shift": 0,
    "clip": 0,
    "clip-path": 0,
    "clip-rule": 0,
    "color": 0,
    "color-interpolation": 0,
    "color-interpolation-filters": 0,
    "color-profile": 0,
    "color-rendering": 0,
    "cursor": 0,
    "direction": 0,
    "display": 0,
    "dominant-baseline": 0,
    "enable-background": 0,
    "fill": 0,
    "fill-opacity": 0,
    "fill-rule": 0,
    "filter": 0,
    "flood-color": 0,
    "flood-opacity": 0,
    "font": 0,
    "font-family": 0,
    "font-size": 0,
    "font-size-adjust": 0,
    "font-stretch": 0,
    "font-style": 0,
    "font-variant": 0,
    "font-weight": 0,
    "glyph-orientation-horizontal": 0,
    "glyph-orientation-vertical": 0,
    "image-rendering": 0,
    "kerning": 0,
    "letter-spacing": 0,
    "lighting-color": 0,
    "marker": 0,
    "marker-end": 0,
    "marker-mid": 0,
    "marker-start": 0,
    "mask": 0,
    "opacity": 0,
    "overflow": 0,
    "pointer-events": 0,
    "shape-rendering": 0,
    "stop-color": 0,
    "stop-opacity": 0,
    "stroke": 0,
    "stroke-dasharray": 0,
    "stroke-dashoffset": 0,
    "stroke-linecap": 0,
    "stroke-linejoin": 0,
    "stroke-miterlimit": 0,
    "stroke-opacity": 0,
    "stroke-width": 0,
    "text-anchor": 0,
    "text-decoration": 0,
    "text-rendering": 0,
    "unicode-bidi": 0,
    "visibility": 0,
    "word-spacing": 0,
    "writing-mode": 0
};

eve.on("snap.util.attr", function (value) {
    var att = eve.nt(),
        attr = {};
    att = att.substring(att.lastIndexOf(".") + 1);
    attr[att] = value;
    var style = att.replace(/-(\w)/gi, function (all, letter) {
            return letter.toUpperCase();
        }),
        css = att.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
    if (cssAttr[has](css)) {
        this.node.style[style] = value == null ? E : value;
    } else {
        $(this.node, attr);
    }
});
(function (proto) {}(Paper.prototype));

// simple ajax
/*\
 * Snap.ajax
 [ method ]
 **
 * Simple implementation of Ajax
 **
 - url (string) URL
 - postData (object|string) data for post request
 - callback (function) callback
 - scope (object) #optional scope of callback
 * or
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
 = (XMLHttpRequest) the XMLHttpRequest object, just in case
\*/
Snap.ajax = function (url, postData, callback, scope){
    var req = new XMLHttpRequest,
        id = ID();
    if (req) {
        if (is(postData, "function")) {
            scope = callback;
            callback = postData;
            postData = null;
        } else if (is(postData, "object")) {
            var pd = [];
            for (var key in postData) if (postData.hasOwnProperty(key)) {
                pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
            }
            postData = pd.join("&");
        }
        req.open(postData ? "POST" : "GET", url, true);
        if (postData) {
            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        if (callback) {
            eve.once("snap.ajax." + id + ".0", callback);
            eve.once("snap.ajax." + id + ".200", callback);
            eve.once("snap.ajax." + id + ".304", callback);
        }
        req.onreadystatechange = function() {
            if (req.readyState != 4) return;
            eve("snap.ajax." + id + "." + req.status, scope, req);
        };
        if (req.readyState == 4) {
            return req;
        }
        req.send(postData);
        return req;
    }
};
/*\
 * Snap.load
 [ method ]
 **
 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
 **
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
\*/
Snap.load = function (url, callback, scope) {
    Snap.ajax(url, function (req) {
        var f = Snap.parse(req.responseText);
        scope ? callback.call(scope, f) : callback(f);
    });
};
var getOffset = function (elem) {
    var box = elem.getBoundingClientRect(),
        doc = elem.ownerDocument,
        body = doc.body,
        docElem = doc.documentElement,
        clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
        top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
        left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
    return {
        y: top,
        x: left
    };
};
/*\
 * Snap.getElementByPoint
 [ method ]
 **
 * Returns you topmost element under given point.
 **
 = (object) Snap element object
 - x (number) x coordinate from the top left corner of the window
 - y (number) y coordinate from the top left corner of the window
 > Usage
 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
\*/
Snap.getElementByPoint = function (x, y) {
    var paper = this,
        svg = paper.canvas,
        target = glob.doc.elementFromPoint(x, y);
    if (glob.win.opera && target.tagName == "svg") {
        var so = getOffset(target),
            sr = target.createSVGRect();
        sr.x = x - so.x;
        sr.y = y - so.y;
        sr.width = sr.height = 1;
        var hits = target.getIntersectionList(sr, null);
        if (hits.length) {
            target = hits[hits.length - 1];
        }
    }
    if (!target) {
        return null;
    }
    return wrap(target);
};
/*\
 * Snap.plugin
 [ method ]
 **
 * Let you write plugins. You pass in a function with five arguments, like this:
 | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
 |     Snap.newmethod = function () {};
 |     Element.prototype.newmethod = function () {};
 |     Paper.prototype.newmethod = function () {};
 | });
 * Inside the function you have access to all main objects (and their
 * prototypes). This allow you to extend anything you want.
 **
 - f (function) your plugin body
\*/
Snap.plugin = function (f) {
    f(Snap, Element, Paper, glob, Fragment);
};
glob.win.Snap = Snap;
return Snap;
}(window || this));

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        unit2px = Snap._unit2px,
        $ = Snap._.$,
        make = Snap._.make,
        getSomeDefs = Snap._.getSomeDefs,
        has = "hasOwnProperty",
        wrap = Snap._.wrap;
    /*\
     * Element.getBBox
     [ method ]
     **
     * Returns the bounding box descriptor for the given element
     **
     = (object) bounding box descriptor:
     o {
     o     cx: (number) x of the center,
     o     cy: (number) x of the center,
     o     h: (number) height,
     o     height: (number) height,
     o     path: (string) path command for the box,
     o     r0: (number) radius of a circle that fully encloses the box,
     o     r1: (number) radius of the smallest circle that can be enclosed,
     o     r2: (number) radius of the largest circle that can be enclosed,
     o     vb: (string) box as a viewbox command,
     o     w: (number) width,
     o     width: (number) width,
     o     x2: (number) x of the right side,
     o     x: (number) x of the left side,
     o     y2: (number) y of the bottom edge,
     o     y: (number) y of the top edge
     o }
    \*/
    elproto.getBBox = function (isWithoutTransform) {
        if (this.type == "tspan") {
            return Snap._.box(this.node.getClientRects().item(0));
        }
        if (!Snap.Matrix || !Snap.path) {
            return this.node.getBBox();
        }
        var el = this,
            m = new Snap.Matrix;
        if (el.removed) {
            return Snap._.box();
        }
        while (el.type == "use") {
            if (!isWithoutTransform) {
                m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
            }
            if (el.original) {
                el = el.original;
            } else {
                var href = el.attr("xlink:href");
                el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
            }
        }
        var _ = el._,
            pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
        try {
            if (isWithoutTransform) {
                _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
                return Snap._.box(_.bboxwt);
            } else {
                el.realPath = pathfinder(el);
                el.matrix = el.transform().localMatrix;
                _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
                return Snap._.box(_.bbox);
            }
        } catch (e) {
            // Firefox doesn’t give you bbox of hidden element
            return Snap._.box();
        }
    };
    var propString = function () {
        return this.string;
    };
    function extractTransform(el, tstr) {
        if (tstr == null) {
            var doReturn = true;
            if (el.type == "linearGradient" || el.type == "radialGradient") {
                tstr = el.node.getAttribute("gradientTransform");
            } else if (el.type == "pattern") {
                tstr = el.node.getAttribute("patternTransform");
            } else {
                tstr = el.node.getAttribute("transform");
            }
            if (!tstr) {
                return new Snap.Matrix;
            }
            tstr = Snap._.svgTransform2string(tstr);
        } else {
            if (!Snap._.rgTransform.test(tstr)) {
                tstr = Snap._.svgTransform2string(tstr);
            } else {
                tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
            }
            if (is(tstr, "array")) {
                tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
            }
            el._.transform = tstr;
        }
        var m = Snap._.transform2matrix(tstr, el.getBBox(1));
        if (doReturn) {
            return m;
        } else {
            el.matrix = m;
        }
    }
    /*\
     * Element.transform
     [ method ]
     **
     * Gets or sets transformation of the element
     **
     - tstr (string) transform string in Snap or SVG format
     = (Element) the current element
     * or
     = (object) transformation descriptor:
     o {
     o     string (string) transform string,
     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
     o     localMatrix (Matrix) matrix of transformations applied only to the element,
     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
     o     global (string) global transformation as string,
     o     local (string) local transformation as string,
     o     toString (function) returns `string` property
     o }
    \*/
    elproto.transform = function (tstr) {
        var _ = this._;
        if (tstr == null) {
            var papa = this,
                global = new Snap.Matrix(this.node.getCTM()),
                local = extractTransform(this),
                ms = [local],
                m = new Snap.Matrix,
                i,
                localString = local.toTransformString(),
                string = Str(local) == Str(this.matrix) ?
                            Str(_.transform) : localString;
            while (papa.type != "svg" && (papa = papa.parent())) {
                ms.push(extractTransform(papa));
            }
            i = ms.length;
            while (i--) {
                m.add(ms[i]);
            }
            return {
                string: string,
                globalMatrix: global,
                totalMatrix: m,
                localMatrix: local,
                diffMatrix: global.clone().add(local.invert()),
                global: global.toTransformString(),
                total: m.toTransformString(),
                local: localString,
                toString: propString
            };
        }
        if (tstr instanceof Snap.Matrix) {
            this.matrix = tstr;
            this._.transform = tstr.toTransformString();
        } else {
            extractTransform(this, tstr);
        }

        if (this.node) {
            if (this.type == "linearGradient" || this.type == "radialGradient") {
                $(this.node, {gradientTransform: this.matrix});
            } else if (this.type == "pattern") {
                $(this.node, {patternTransform: this.matrix});
            } else {
                $(this.node, {transform: this.matrix});
            }
        }

        return this;
    };
    /*\
     * Element.parent
     [ method ]
     **
     * Returns the element's parent
     **
     = (Element) the parent element
    \*/
    elproto.parent = function () {
        return wrap(this.node.parentNode);
    };
    /*\
     * Element.append
     [ method ]
     **
     * Appends the given element to current one
     **
     - el (Element|Set) element to append
     = (Element) the parent element
    \*/
    /*\
     * Element.add
     [ method ]
     **
     * See @Element.append
    \*/
    elproto.append = elproto.add = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this;
                el.forEach(function (el) {
                    it.add(el);
                });
                return this;
            }
            el = wrap(el);
            this.node.appendChild(el.node);
            el.paper = this.paper;
        }
        return this;
    };
    /*\
     * Element.appendTo
     [ method ]
     **
     * Appends the current element to the given one
     **
     - el (Element) parent element to append to
     = (Element) the child element
    \*/
    elproto.appendTo = function (el) {
        if (el) {
            el = wrap(el);
            el.append(this);
        }
        return this;
    };
    /*\
     * Element.prepend
     [ method ]
     **
     * Prepends the given element to the current one
     **
     - el (Element) element to prepend
     = (Element) the parent element
    \*/
    elproto.prepend = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this,
                    first;
                el.forEach(function (el) {
                    if (first) {
                        first.after(el);
                    } else {
                        it.prepend(el);
                    }
                    first = el;
                });
                return this;
            }
            el = wrap(el);
            var parent = el.parent();
            this.node.insertBefore(el.node, this.node.firstChild);
            this.add && this.add();
            el.paper = this.paper;
            this.parent() && this.parent().add();
            parent && parent.add();
        }
        return this;
    };
    /*\
     * Element.prependTo
     [ method ]
     **
     * Prepends the current element to the given one
     **
     - el (Element) parent element to prepend to
     = (Element) the child element
    \*/
    elproto.prependTo = function (el) {
        el = wrap(el);
        el.prepend(this);
        return this;
    };
    /*\
     * Element.before
     [ method ]
     **
     * Inserts given element before the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.before = function (el) {
        if (el.type == "set") {
            var it = this;
            el.forEach(function (el) {
                var parent = el.parent();
                it.node.parentNode.insertBefore(el.node, it.node);
                parent && parent.add();
            });
            this.parent().add();
            return this;
        }
        el = wrap(el);
        var parent = el.parent();
        this.node.parentNode.insertBefore(el.node, this.node);
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.after
     [ method ]
     **
     * Inserts given element after the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.after = function (el) {
        el = wrap(el);
        var parent = el.parent();
        if (this.node.nextSibling) {
            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
        } else {
            this.node.parentNode.appendChild(el.node);
        }
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.insertBefore
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertBefore = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.insertAfter
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertAfter = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.remove
     [ method ]
     **
     * Removes element from the DOM
     = (Element) the detached element
    \*/
    elproto.remove = function () {
        var parent = this.parent();
        this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.paper;
        this.removed = true;
        parent && parent.add();
        return this;
    };
    /*\
     * Element.select
     [ method ]
     **
     * Gathers the nested @Element matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Element) result of query selection
    \*/
    elproto.select = function (query) {
        return wrap(this.node.querySelector(query));
    };
    /*\
     * Element.selectAll
     [ method ]
     **
     * Gathers nested @Element objects matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Set|array) result of query selection
    \*/
    elproto.selectAll = function (query) {
        var nodelist = this.node.querySelectorAll(query),
            set = (Snap.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
        }
        return set;
    };
    /*\
     * Element.asPX
     [ method ]
     **
     * Returns given attribute of the element as a `px` value (not %, em, etc.)
     **
     - attr (string) attribute name
     - value (string) #optional attribute value
     = (Element) result of query selection
    \*/
    elproto.asPX = function (attr, value) {
        if (value == null) {
            value = this.attr(attr);
        }
        return +unit2px(this, attr, value);
    };
    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
    /*\
     * Element.use
     [ method ]
     **
     * Creates a `<use>` element linked to the current element
     **
     = (Element) the `<use>` element
    \*/
    elproto.use = function () {
        var use,
            id = this.node.id;
        if (!id) {
            id = this.id;
            $(this.node, {
                id: id
            });
        }
        if (this.type == "linearGradient" || this.type == "radialGradient" ||
            this.type == "pattern") {
            use = make(this.type, this.node.parentNode);
        } else {
            use = make("use", this.node.parentNode);
        }
        $(use.node, {
            "xlink:href": "#" + id
        });
        use.original = this;
        return use;
    };
    function fixids(el) {
        var els = el.selectAll("*"),
            it,
            url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
            ids = [],
            uses = {};
        function urltest(it, name) {
            var val = $(it.node, name);
            val = val && val.match(url);
            val = val && val[2];
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    var attr = {};
                    attr[name] = Snap.url(id);
                    $(it.node, attr);
                });
            }
        }
        function linktest(it) {
            var val = $(it.node, "xlink:href");
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    it.attr("xlink:href", "#" + id);
                });
            }
        }
        for (var i = 0, ii = els.length; i < ii; i++) {
            it = els[i];
            urltest(it, "fill");
            urltest(it, "stroke");
            urltest(it, "filter");
            urltest(it, "mask");
            urltest(it, "clip-path");
            linktest(it);
            var oldid = $(it.node, "id");
            if (oldid) {
                $(it.node, {id: it.id});
                ids.push({
                    old: oldid,
                    id: it.id
                });
            }
        }
        for (i = 0, ii = ids.length; i < ii; i++) {
            var fs = uses[ids[i].old];
            if (fs) {
                for (var j = 0, jj = fs.length; j < jj; j++) {
                    fs[j](ids[i].id);
                }
            }
        }
    }
    /*\
     * Element.clone
     [ method ]
     **
     * Creates a clone of the element and inserts it after the element
     **
     = (Element) the clone
    \*/
    elproto.clone = function () {
        var clone = wrap(this.node.cloneNode(true));
        if ($(clone.node, "id")) {
            $(clone.node, {id: clone.id});
        }
        fixids(clone);
        clone.insertAfter(this);
        return clone;
    };
    /*\
     * Element.toDefs
     [ method ]
     **
     * Moves element to the shared `<defs>` area
     **
     = (Element) the element
    \*/
    elproto.toDefs = function () {
        var defs = getSomeDefs(this);
        defs.appendChild(this.node);
        return this;
    };
    /*\
     * Element.toPattern
     [ method ]
     **
     * Creates a `<pattern>` element from the current element
     **
     * To create a pattern you have to specify the pattern rect:
     - x (string|number)
     - y (string|number)
     - width (string|number)
     - height (string|number)
     = (Element) the `<pattern>` element
     * You can use pattern later on as an argument for `fill` attribute:
     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
     |         fill: "none",
     |         stroke: "#bada55",
     |         strokeWidth: 5
     |     }).pattern(0, 0, 10, 10),
     |     c = paper.circle(200, 200, 100);
     | c.attr({
     |     fill: p
     | });
    \*/
    elproto.pattern = elproto.toPattern = function (x, y, width, height) {
        var p = make("pattern", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        $(p.node, {
            x: x,
            y: y,
            width: width,
            height: height,
            patternUnits: "userSpaceOnUse",
            id: p.id,
            viewBox: [x, y, width, height].join(" ")
        });
        p.node.appendChild(this.node);
        return p;
    };
// SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
// SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
    /*\
     * Element.marker
     [ method ]
     **
     * Creates a `<marker>` element from the current element
     **
     * To create a marker you have to specify the bounding rect and reference point:
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - refX (number)
     - refY (number)
     = (Element) the `<marker>` element
     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
    \*/
    // TODO add usage for markers
    elproto.marker = function (x, y, width, height, refX, refY) {
        var p = make("marker", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            refX = x.refX || x.cx;
            refY = x.refY || x.cy;
            x = x.x;
        }
        $(p.node, {
            viewBox: [x, y, width, height].join(" "),
            markerWidth: width,
            markerHeight: height,
            orient: "auto",
            refX: refX || 0,
            refY: refY || 0,
            id: p.id
        });
        p.node.appendChild(this.node);
        return p;
    };
    var eldata = {};
    /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value associated with given key. (Don’t confuse
     * with `data-` attributes)
     *
     * See also @Element.removeData
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .click(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/
    elproto.data = function (key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0){
            eve("snap.data.get." + this.id, this, data, null);
            return data;
        }
        if (arguments.length == 1) {
            if (Snap.is(key, "object")) {
                for (var i in key) if (key[has](i)) {
                    this.data(i, key[i]);
                }
                return this;
            }
            eve("snap.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        eve("snap.data.set." + this.id, this, value, key);
        return this;
    };
    /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     - key (string) #optional key
     = (object) @Element
    \*/
    elproto.removeData = function (key) {
        if (key == null) {
            eldata[this.id] = {};
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };
    /*\
     * Element.outerSVG
     [ method ]
     **
     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
     *
     * See also @Element.innerSVG
     = (string) SVG code for the element
    \*/
    /*\
     * Element.toString
     [ method ]
     **
     * See @Element.outerSVG
    \*/
    elproto.outerSVG = elproto.toString = toString(1);
    /*\
     * Element.innerSVG
     [ method ]
     **
     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
     = (string) SVG code for the element
    \*/
    elproto.innerSVG = toString();
    function toString(type) {
        return function () {
            var res = type ? "<" + this.type : "",
                attr = this.node.attributes,
                chld = this.node.childNodes;
            if (type) {
                for (var i = 0, ii = attr.length; i < ii; i++) {
                    res += " " + attr[i].name + '="' +
                            attr[i].value.replace(/"/g, '\\"') + '"';
                }
            }
            if (chld.length) {
                type && (res += ">");
                for (i = 0, ii = chld.length; i < ii; i++) {
                    if (chld[i].nodeType == 3) {
                        res += chld[i].nodeValue;
                    } else if (chld[i].nodeType == 1) {
                        res += wrap(chld[i]).toString();
                    }
                }
                type && (res += "</" + this.type + ">");
            } else {
                type && (res += "/>");
            }
            return res;
        };
    }
    elproto.toDataURL = function () {
        if (window && window.btoa) {
            var bb = this.getBBox(),
                svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                x: +bb.x.toFixed(3),
                y: +bb.y.toFixed(3),
                width: +bb.width.toFixed(3),
                height: +bb.height.toFixed(3),
                contents: this.outerSVG()
            });
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
        }
    };
    /*\
     * Fragment.select
     [ method ]
     **
     * See @Element.select
    \*/
    Fragment.prototype.select = elproto.select;
    /*\
     * Fragment.selectAll
     [ method ]
     **
     * See @Element.selectAll
    \*/
    Fragment.prototype.selectAll = elproto.selectAll;
});

// Copyright (c) 2016 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        has = "hasOwnProperty";
    function slice(from, to, f) {
        return function (arr) {
            var res = arr.slice(from, to);
            if (res.length == 1) {
                res = res[0];
            }
            return f ? f(res) : res;
        };
    }
    var Animation = function (attr, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        this.attr = attr;
        this.dur = ms;
        easing && (this.easing = easing);
        callback && (this.callback = callback);
    };
    Snap._.Animation = Animation;
    /*\
     * Snap.animation
     [ method ]
     **
     * Creates an animation object
     **
     - attr (object) attributes of final destination
     - duration (number) duration of the animation, in milliseconds
     - easing (function) #optional one of easing functions of @mina or custom one
     - callback (function) #optional callback function that fires when animation ends
     = (object) animation object
    \*/
    Snap.animation = function (attr, ms, easing, callback) {
        return new Animation(attr, ms, easing, callback);
    };
    /*\
     * Element.inAnim
     [ method ]
     **
     * Returns a set of animations that may be able to manipulate the current element
     **
     = (object) in format:
     o {
     o     anim (object) animation object,
     o     mina (object) @mina object,
     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
    \*/
    elproto.inAnim = function () {
        var el = this,
            res = [];
        for (var id in el.anims) if (el.anims[has](id)) {
            (function (a) {
                res.push({
                    anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function (val) {
                        return a.status(val);
                    },
                    stop: function () {
                        a.stop();
                    }
                });
            }(el.anims[id]));
        }
        return res;
    };
    /*\
     * Snap.animate
     [ method ]
     **
     * Runs generic animation of one number into another with a caring function
     **
     - from (number|array) number or array of numbers
     - to (number|array) number or array of numbers
     - setter (function) caring function that accepts one number argument
     - duration (number) duration, in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function to execute when animation ends
     = (object) animation object in @mina format
     o {
     o     id (string) animation id, consider it read-only,
     o     duration (function) gets or sets the duration of the animation,
     o     easing (function) easing,
     o     speed (function) gets or sets the speed of the animation,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
     | var rect = Snap().rect(0, 0, 10, 10);
     | Snap.animate(0, 10, function (val) {
     |     rect.attr({
     |         x: val
     |     });
     | }, 1000);
     | // in given context is equivalent to
     | rect.animate({x: 10}, 1000);
    \*/
    Snap.animate = function (from, to, setter, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        var now = mina.time(),
            anim = mina(from, to, now, now + ms, mina.time, setter, easing);
        callback && eve.once("mina.finish." + anim.id, callback);
        return anim;
    };
    /*\
     * Element.stop
     [ method ]
     **
     * Stops all the animations for the current element
     **
     = (Element) the current element
    \*/
    elproto.stop = function () {
        var anims = this.inAnim();
        for (var i = 0, ii = anims.length; i < ii; i++) {
            anims[i].stop();
        }
        return this;
    };
    /*\
     * Element.animate
     [ method ]
     **
     * Animates the given attributes of the element
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     = (Element) the current element
    \*/
    elproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = attrs.dur;
            attrs = attrs.attr;
        }
        var fkeys = [], tkeys = [], keys = {}, from, to, f, eq,
            el = this;
        for (var key in attrs) if (attrs[has](key)) {
            if (el.equal) {
                eq = el.equal(key, Str(attrs[key]));
                from = eq.from;
                to = eq.to;
                f = eq.f;
            } else {
                from = +el.attr(key);
                to = +attrs[key];
            }
            var len = is(from, "array") ? from.length : 1;
            keys[key] = slice(fkeys.length, fkeys.length + len, f);
            fkeys = fkeys.concat(from);
            tkeys = tkeys.concat(to);
        }
        var now = mina.time(),
            anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
                var attr = {};
                for (var key in keys) if (keys[has](key)) {
                    attr[key] = keys[key](val);
                }
                el.attr(attr);
            }, easing);
        el.anims[anim.id] = anim;
        anim._attrs = attrs;
        anim._callback = callback;
        eve("snap.animcreated." + el.id, anim);
        eve.once("mina.finish." + anim.id, function () {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
            callback && callback.call(el);
        });
        eve.once("mina.stop." + anim.id, function () {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
        });
        return el;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var objectToString = Object.prototype.toString,
        Str = String,
        math = Math,
        E = "";
    function Matrix(a, b, c, d, e, f) {
        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.e = a.e;
            this.f = a.f;
            return;
        }
        if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
        }
    }
    (function (matrixproto) {
        /*\
         * Matrix.add
         [ method ]
         **
         * Adds the given matrix to existing one
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        matrixproto.add = function (a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + b * this.c,
                bNew = a * this.b + b * this.d;
            this.e += e * this.a + f * this.c;
            this.f += e * this.b + f * this.d;
            this.c = c * this.a + d * this.c;
            this.d = c * this.b + d * this.d;

            this.a = aNew;
            this.b = bNew;
            return this;
        };
        /*\
         * Matrix.multLeft
         [ method ]
         **
         * Multiplies a passed affine transform to the left: M * this.
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        Matrix.prototype.multLeft = function (a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + c * this.b,
                cNew = a * this.c + c * this.d,
                eNew = a * this.e + c * this.f + e;
            this.b = b * this.a + d * this.b;
            this.d = b * this.c + d * this.d;
            this.f = b * this.e + d * this.f + f;

            this.a = aNew;
            this.c = cNew;
            this.e = eNew;
            return this;
        };
        /*\
         * Matrix.invert
         [ method ]
         **
         * Returns an inverted version of the matrix
         = (object) @Matrix
        \*/
        matrixproto.invert = function () {
            var me = this,
                x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };
        /*\
         * Matrix.clone
         [ method ]
         **
         * Returns a copy of the matrix
         = (object) @Matrix
        \*/
        matrixproto.clone = function () {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        /*\
         * Matrix.translate
         [ method ]
         **
         * Translate the matrix
         - x (number) horizontal offset distance
         - y (number) vertical offset distance
        \*/
        matrixproto.translate = function (x, y) {
            this.e += x * this.a + y * this.c;
            this.f += x * this.b + y * this.d;
            return this;
        };
        /*\
         * Matrix.scale
         [ method ]
         **
         * Scales the matrix
         - x (number) amount to be scaled, with `1` resulting in no change
         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
         - cx (number) #optional horizontal origin point from which to scale
         - cy (number) #optional vertical origin point from which to scale
         * Default cx, cy is the middle point of the element.
        \*/
        matrixproto.scale = function (x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.translate(cx, cy);
            this.a *= x;
            this.b *= x;
            this.c *= y;
            this.d *= y;
            (cx || cy) && this.translate(-cx, -cy);
            return this;
        };
        /*\
         * Matrix.rotate
         [ method ]
         **
         * Rotates the matrix
         - a (number) angle of rotation, in degrees
         - x (number) horizontal origin point from which to rotate
         - y (number) vertical origin point from which to rotate
        \*/
        matrixproto.rotate = function (a, x, y) {
            a = Snap.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math.cos(a).toFixed(9),
                sin = +math.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            return this.add(1, 0, 0, 1, -x, -y);
        };
        /*\
         * Matrix.skewX
         [ method ]
         **
         * Skews the matrix along the x-axis
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/
        matrixproto.skewX = function (x) {
            return this.skew(x, 0);
        };
        /*\
         * Matrix.skewY
         [ method ]
         **
         * Skews the matrix along the y-axis
         - y (number) Angle to skew along the y-axis (in degrees).
        \*/
        matrixproto.skewY = function (y) {
            return this.skew(0, y);
        };
        /*\
         * Matrix.skew
         [ method ]
         **
         * Skews the matrix
         - y (number) Angle to skew along the y-axis (in degrees).
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/
        matrixproto.skew = function (x, y) {
            x = x || 0;
            y = y || 0;
            x = Snap.rad(x);
            y = Snap.rad(y);
            var c = math.tan(x).toFixed(9);
            var b = math.tan(y).toFixed(9);
            return this.add(1, b, c, 1, 0, 0);
        };
        /*\
         * Matrix.x
         [ method ]
         **
         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
         - x (number)
         - y (number)
         = (number) x
        \*/
        matrixproto.x = function (x, y) {
            return x * this.a + y * this.c + this.e;
        };
        /*\
         * Matrix.y
         [ method ]
         **
         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
         - x (number)
         - y (number)
         = (number) y
        \*/
        matrixproto.y = function (x, y) {
            return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function (i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function () {
            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
        };
        matrixproto.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)];
        };
        function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
        }
        function normalize(a) {
            var mag = math.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
        }
        /*\
         * Matrix.determinant
         [ method ]
         **
         * Finds determinant of the given matrix.
         = (number) determinant
        \*/
        matrixproto.determinant = function () {
            return this.a * this.d - this.b * this.c;
        };
        /*\
         * Matrix.split
         [ method ]
         **
         * Splits matrix into primitive transformations
         = (object) in format:
         o dx (number) translation by x
         o dy (number) translation by y
         o scalex (number) scale by x
         o scaley (number) scale by y
         o shear (number) shear
         o rotate (number) rotation in deg
         o isSimple (boolean) could it be represented via simple transformations
        \*/
        matrixproto.split = function () {
            var out = {};
            // translation
            out.dx = this.e;
            out.dy = this.f;

            // scale and shear
            var row = [[this.a, this.b], [this.c, this.d]];
            out.scalex = math.sqrt(norm(row[0]));
            normalize(row[0]);

            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

            out.scaley = math.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;

            if (this.determinant() < 0) {
                out.scalex = -out.scalex;
            }

            // rotation
            var sin = row[0][1],
                cos = row[1][1];
            if (cos < 0) {
                out.rotate = Snap.deg(math.acos(cos));
                if (sin < 0) {
                    out.rotate = 360 - out.rotate;
                }
            } else {
                out.rotate = Snap.deg(math.asin(sin));
            }

            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
        };
        /*\
         * Matrix.toTransformString
         [ method ]
         **
         * Returns transform string that represents given matrix
         = (string) transform string
        \*/
        matrixproto.toTransformString = function (shorter) {
            var s = shorter || this.split();
            if (!+s.shear.toFixed(9)) {
                s.scalex = +s.scalex.toFixed(4);
                s.scaley = +s.scaley.toFixed(4);
                s.rotate = +s.rotate.toFixed(4);
                return  (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) +
                        (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E) +
                        (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E);
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
        };
    })(Matrix.prototype);
    /*\
     * Snap.Matrix
     [ method ]
     **
     * Matrix constructor, extend on your own risk.
     * To create matrices use @Snap.matrix.
    \*/
    Snap.Matrix = Matrix;
    /*\
     * Snap.matrix
     [ method ]
     **
     * Utility method
     **
     * Returns a matrix based on the given parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - svgMatrix (SVGMatrix)
     = (object) @Matrix
    \*/
    Snap.matrix = function (a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var has = "hasOwnProperty",
        make = Snap._.make,
        wrap = Snap._.wrap,
        is = Snap.is,
        getSomeDefs = Snap._.getSomeDefs,
        reURLValue = /^url\((['"]?)([^)]+)\1\)$/,
        $ = Snap._.$,
        URL = Snap.url,
        Str = String,
        separator = Snap._.separator,
        E = "";
    /*\
     * Snap.deurl
     [ method ]
     **
     * Unwraps path from `"url(<path>)"`.
     - value (string) url path
     = (string) unwrapped path
    \*/
    Snap.deurl = function (value) {
        var res = String(value).match(reURLValue);
        return res ? res[2] : value;
    }
    // Attributes event handlers
    eve.on("snap.util.attr.mask", function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value.type == "mask") {
                var mask = value;
            } else {
                mask = make("mask", getSomeDefs(this));
                mask.node.appendChild(value.node);
            }
            !mask.node.id && $(mask.node, {
                id: mask.id
            });
            $(this.node, {
                mask: URL(mask.id)
            });
        }
    });
    (function (clipIt) {
        eve.on("snap.util.attr.clip", clipIt);
        eve.on("snap.util.attr.clip-path", clipIt);
        eve.on("snap.util.attr.clipPath", clipIt);
    }(function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            var clip,
                node = value.node;
            while (node) {
                if (node.nodeName === "clipPath") {
                    clip = new Element(node);
                    break;
                }
                if (node.nodeName === "svg") {
                    clip = undefined;
                    break;
                }
                node = node.parentNode;
            }
            if (!clip) {
                clip = make("clipPath", getSomeDefs(this));
                clip.node.appendChild(value.node);
                !clip.node.id && $(clip.node, {
                    id: clip.id
                });
            }
            $(this.node, {
                "clip-path": URL(clip.node.id || clip.id)
            });
        }
    }));
    function fillStroke(name) {
        return function (value) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1 &&
                (value.node.firstChild.tagName == "radialGradient" ||
                value.node.firstChild.tagName == "linearGradient" ||
                value.node.firstChild.tagName == "pattern")) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value instanceof Element) {
                if (value.type == "radialGradient" || value.type == "linearGradient"
                   || value.type == "pattern") {
                    if (!value.node.id) {
                        $(value.node, {
                            id: value.id
                        });
                    }
                    var fill = URL(value.node.id);
                } else {
                    fill = value.attr(name);
                }
            } else {
                fill = Snap.color(value);
                if (fill.error) {
                    var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                    if (grad) {
                        if (!grad.node.id) {
                            $(grad.node, {
                                id: grad.id
                            });
                        }
                        fill = URL(grad.node.id);
                    } else {
                        fill = value;
                    }
                } else {
                    fill = Str(fill);
                }
            }
            var attrs = {};
            attrs[name] = fill;
            $(this.node, attrs);
            this.node.style[name] = E;
        };
    }
    eve.on("snap.util.attr.fill", fillStroke("fill"));
    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    eve.on("snap.util.grad.parse", function parseGrad(string) {
        string = Str(string);
        var tokens = string.match(gradrg);
        if (!tokens) {
            return null;
        }
        var type = tokens[1],
            params = tokens[2],
            stops = tokens[3];
        params = params.split(/\s*,\s*/).map(function (el) {
            return +el == el ? +el : el;
        });
        if (params.length == 1 && params[0] == 0) {
            params = [];
        }
        stops = stops.split("-");
        stops = stops.map(function (el) {
            el = el.split(":");
            var out = {
                color: el[0]
            };
            if (el[1]) {
                out.offset = parseFloat(el[1]);
            }
            return out;
        });
        var len = stops.length,
            start = 0,
            j = 0;
        function seed(i, end) {
            var step = (end - start) / (i - j);
            for (var k = j; k < i; k++) {
                stops[k].offset = +(+start + step * (k - j)).toFixed(2);
            }
            j = i;
            start = end;
        }
        len--;
        for (var i = 0; i < len; i++) if ("offset" in stops[i]) {
            seed(i, stops[i].offset);
        }
        stops[len].offset = stops[len].offset || 100;
        seed(len, stops[len].offset);
        return {
            type: type,
            params: params,
            stops: stops
        };
    });

    eve.on("snap.util.attr.d", function (value) {
        eve.stop();
        if (is(value, "array") && is(value[0], "array")) {
            value = Snap.path.toString.call(value);
        }
        value = Str(value);
        if (value.match(/[ruo]/i)) {
            value = Snap.path.toAbsolute(value);
        }
        $(this.node, {d: value});
    })(-1);
    eve.on("snap.util.attr.#text", function (value) {
        eve.stop();
        value = Str(value);
        var txt = glob.doc.createTextNode(value);
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
        this.node.appendChild(txt);
    })(-1);
    eve.on("snap.util.attr.path", function (value) {
        eve.stop();
        this.attr({d: value});
    })(-1);
    eve.on("snap.util.attr.class", function (value) {
        eve.stop();
        this.node.className.baseVal = value;
    })(-1);
    eve.on("snap.util.attr.viewBox", function (value) {
        var vb;
        if (is(value, "object") && "x" in value) {
            vb = [value.x, value.y, value.width, value.height].join(" ");
        } else if (is(value, "array")) {
            vb = value.join(" ");
        } else {
            vb = value;
        }
        $(this.node, {
            viewBox: vb
        });
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.transform", function (value) {
        this.transform(value);
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.r", function (value) {
        if (this.type == "rect") {
            eve.stop();
            $(this.node, {
                rx: value,
                ry: value
            });
        }
    })(-1);
    eve.on("snap.util.attr.textpath", function (value) {
        eve.stop();
        if (this.type == "text") {
            var id, tp, node;
            if (!value && this.textPath) {
                tp = this.textPath;
                while (tp.node.firstChild) {
                    this.node.appendChild(tp.node.firstChild);
                }
                tp.remove();
                delete this.textPath;
                return;
            }
            if (is(value, "string")) {
                var defs = getSomeDefs(this),
                    path = wrap(defs.parentNode).path(value);
                defs.appendChild(path.node);
                id = path.id;
                path.attr({id: id});
            } else {
                value = wrap(value);
                if (value instanceof Element) {
                    id = value.attr("id");
                    if (!id) {
                        id = value.id;
                        value.attr({id: id});
                    }
                }
            }
            if (id) {
                tp = this.textPath;
                node = this.node;
                if (tp) {
                    tp.attr({"xlink:href": "#" + id});
                } else {
                    tp = $("textPath", {
                        "xlink:href": "#" + id
                    });
                    while (node.firstChild) {
                        tp.appendChild(node.firstChild);
                    }
                    node.appendChild(tp);
                    this.textPath = wrap(tp);
                }
            }
        }
    })(-1);
    eve.on("snap.util.attr.text", function (value) {
        if (this.type == "text") {
            var i = 0,
                node = this.node,
                tuner = function (chunk) {
                    var out = $("tspan");
                    if (is(chunk, "array")) {
                        for (var i = 0; i < chunk.length; i++) {
                            out.appendChild(tuner(chunk[i]));
                        }
                    } else {
                        out.appendChild(glob.doc.createTextNode(chunk));
                    }
                    out.normalize && out.normalize();
                    return out;
                };
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
            var tuned = tuner(value);
            while (tuned.firstChild) {
                node.appendChild(tuned.firstChild);
            }
        }
        eve.stop();
    })(-1);
    function setFontSize(value) {
        eve.stop();
        if (value == +value) {
            value += "px";
        }
        this.node.style.fontSize = value;
    }
    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
    eve.on("snap.util.attr.font-size", setFontSize)(-1);


    eve.on("snap.util.getattr.transform", function () {
        eve.stop();
        return this.transform();
    })(-1);
    eve.on("snap.util.getattr.textpath", function () {
        eve.stop();
        return this.textPath;
    })(-1);
    // Markers
    (function () {
        function getter(end) {
            return function () {
                eve.stop();
                var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
                if (style == "none") {
                    return style;
                } else {
                    return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
                }
            };
        }
        function setter(end) {
            return function (value) {
                eve.stop();
                var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
                if (value == "" || !value) {
                    this.node.style[name] = "none";
                    return;
                }
                if (value.type == "marker") {
                    var id = value.node.id;
                    if (!id) {
                        $(value.node, {id: value.id});
                    }
                    this.node.style[name] = URL(id);
                    return;
                }
            };
        }
        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
    }());
    eve.on("snap.util.getattr.r", function () {
        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
            eve.stop();
            return $(this.node, "rx");
        }
    })(-1);
    function textExtract(node) {
        var out = [];
        var children = node.childNodes;
        for (var i = 0, ii = children.length; i < ii; i++) {
            var chi = children[i];
            if (chi.nodeType == 3) {
                out.push(chi.nodeValue);
            }
            if (chi.tagName == "tspan") {
                if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                    out.push(chi.firstChild.nodeValue);
                } else {
                    out.push(textExtract(chi));
                }
            }
        }
        return out;
    }
    eve.on("snap.util.getattr.text", function () {
        if (this.type == "text" || this.type == "tspan") {
            eve.stop();
            var out = textExtract(this.node);
            return out.length == 1 ? out[0] : out;
        }
    })(-1);
    eve.on("snap.util.getattr.#text", function () {
        return this.node.textContent;
    })(-1);
    eve.on("snap.util.getattr.fill", function (internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.fill", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.stroke", function (internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.stroke", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.viewBox", function () {
        eve.stop();
        var vb = $(this.node, "viewBox");
        if (vb) {
            vb = vb.split(separator);
            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.points", function () {
        var p = $(this.node, "points");
        eve.stop();
        if (p) {
            return p.split(separator);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.path", function () {
        var p = $(this.node, "d");
        eve.stop();
        return p;
    })(-1);
    eve.on("snap.util.getattr.class", function () {
        return this.node.className.baseVal;
    })(-1);
    function getFontSize() {
        eve.stop();
        return this.node.style.fontSize;
    }
    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var rgNotSpace = /\S+/g,
        rgBadSpace = /[\t\r\n\f]/g,
        rgTrim = /(^\s+|\s+$)/g,
        Str = String,
        elproto = Element.prototype;
    /*\
     * Element.addClass
     [ method ]
     **
     * Adds given class name or list of class names to the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.addClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;

        if (classes.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (!~pos) {
                    curClasses.push(clazz);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.removeClass
     [ method ]
     **
     * Removes given class name or list of class names from the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.removeClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        if (curClasses.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (~pos) {
                    curClasses.splice(pos, 1);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.hasClass
     [ method ]
     **
     * Checks if the element has a given class name in the list of class names applied to it.
     - value (string) class name
     **
     = (boolean) `true` if the element has given class
    \*/
    elproto.hasClass = function (value) {
        var elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [];
        return !!~curClasses.indexOf(value);
    };
    /*\
     * Element.toggleClass
     [ method ]
     **
     * Add or remove one or more classes from the element, depending on either
     * the class’s presence or the value of the `flag` argument.
     - value (string) class name or space separated list of class names
     - flag (boolean) value to determine whether the class should be added or removed
     **
     = (Element) original element.
    \*/
    elproto.toggleClass = function (value, flag) {
        if (flag != null) {
            if (flag) {
                return this.addClass(value);
            } else {
                return this.removeClass(value);
            }
        }
        var classes = (value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        j = 0;
        while (clazz = classes[j++]) {
            pos = curClasses.indexOf(clazz);
            if (~pos) {
                curClasses.splice(pos, 1);
            } else {
                curClasses.push(clazz);
            }
        }

        finalValue = curClasses.join(" ");
        if (className != finalValue) {
            elem.className.baseVal = finalValue;
        }
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var operators = {
            "+": function (x, y) {
                    return x + y;
                },
            "-": function (x, y) {
                    return x - y;
                },
            "/": function (x, y) {
                    return x / y;
                },
            "*": function (x, y) {
                    return x * y;
                }
        },
        Str = String,
        reUnit = /[a-z]+$/i,
        reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    eve.on("snap.util.attr", function (val) {
        var plus = Str(val).match(reAddon);
        if (plus) {
            var evnt = eve.nt(),
                name = evnt.substring(evnt.lastIndexOf(".") + 1),
                a = this.attr(name),
                atr = {};
            eve.stop();
            var unit = plus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[plus[1]];
            if (aUnit && aUnit == unit) {
                val = op(parseFloat(a), +plus[2]);
            } else {
                a = this.asPX(name);
                val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
            }
            if (isNaN(a) || isNaN(val)) {
                return;
            }
            atr[name] = val;
            this.attr(atr);
        }
    })(-10);
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this,
            bplus = Str(b).match(reAddon);
        if (bplus) {
            eve.stop();
            var unit = bplus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[bplus[1]];
            if (aUnit && aUnit == unit) {
                return {
                    from: parseFloat(a),
                    to: op(parseFloat(a), +bplus[2]),
                    f: getUnit(aUnit)
                };
            } else {
                a = this.asPX(name);
                return {
                    from: a,
                    to: op(a, this.asPX(name, bplus[2] + unit)),
                    f: getNumber
                };
            }
        }
    })(-10);
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var proto = Paper.prototype,
        is = Snap.is;
    /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - rx (number) #optional horizontal radius for rounded corners, default is 0
     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
     = (object) the `rect` element
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/
    proto.rect = function (x, y, w, h, rx, ry) {
        var attr;
        if (ry == null) {
            ry = rx;
        }
        if (is(x, "object") && x == "[object Object]") {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                width: w,
                height: h
            };
            if (rx != null) {
                attr.rx = rx;
                attr.ry = ry;
            }
        }
        return this.el("rect", attr);
    };
    /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) the `circle` element
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/
    proto.circle = function (cx, cy, r) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                r: r
            };
        }
        return this.el("circle", attr);
    };

    var preload = (function () {
        function onerror() {
            this.parentNode.removeChild(this);
        }
        return function (src, f) {
            var img = glob.doc.createElement("img"),
                body = glob.doc.body;
            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
            img.onload = function () {
                f.call(img);
                img.onload = img.onerror = null;
                body.removeChild(img);
            };
            img.onerror = onerror;
            body.appendChild(img);
            img.src = src;
        };
    }());

    /*\
     * Paper.image
     [ method ]
     **
     * Places an image on the surface
     **
     - src (string) URI of the source image
     - x (number) x offset position
     - y (number) y offset position
     - width (number) width of the image
     - height (number) height of the image
     = (object) the `image` element
     * or
     = (object) Snap element object with type `image`
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/
    proto.image = function (src, x, y, width, height) {
        var el = this.el("image");
        if (is(src, "object") && "src" in src) {
            el.attr(src);
        } else if (src != null) {
            var set = {
                "xlink:href": src,
                preserveAspectRatio: "none"
            };
            if (x != null && y != null) {
                set.x = x;
                set.y = y;
            }
            if (width != null && height != null) {
                set.width = width;
                set.height = height;
            } else {
                preload(src, function () {
                    Snap._.$(el.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    });
                });
            }
            Snap._.$(el.node, set);
        }
        return el;
    };
    /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) the `ellipse` element
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/
    proto.ellipse = function (cx, cy, rx, ry) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr ={
                cx: cx,
                cy: cy,
                rx: rx,
                ry: ry
            };
        }
        return this.el("ellipse", attr);
    };
    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
    /*\
     * Paper.path
     [ method ]
     **
     * Creates a `<path>` element using the given string as the path's definition
     - pathString (string) #optional path string in SVG format
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
     | "M10,20L30,40"
     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
    \*/
    proto.path = function (d) {
        var attr;
        if (is(d, "object") && !is(d, "array")) {
            attr = d;
        } else if (d) {
            attr = {d: d};
        }
        return this.el("path", attr);
    };
    /*\
     * Paper.g
     [ method ]
     **
     * Creates a group element
     **
     - varargs (…) #optional elements to nest within the group
     = (object) the `g` element
     **
     > Usage
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g(c2, c1); // note that the order of elements is different
     * or
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g();
     | g.add(c2, c1);
    \*/
    /*\
     * Paper.group
     [ method ]
     **
     * See @Paper.g
    \*/
    proto.group = proto.g = function (first) {
        var attr,
            el = this.el("g");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.svg
     [ method ]
     **
     * Creates a nested SVG element.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `svg` element
     **
    \*/
    proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
        var attrs = {};
        if (is(x, "object") && y == null) {
            attrs = x;
        } else {
            if (x != null) {
                attrs.x = x;
            }
            if (y != null) {
                attrs.y = y;
            }
            if (width != null) {
                attrs.width = width;
            }
            if (height != null) {
                attrs.height = height;
            }
            if (vbx != null && vby != null && vbw != null && vbh != null) {
                attrs.viewBox = [vbx, vby, vbw, vbh];
            }
        }
        return this.el("svg", attrs);
    };
    /*\
     * Paper.mask
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a mask.
     **
     = (object) the `mask` element
     **
    \*/
    proto.mask = function (first) {
        var attr,
            el = this.el("mask");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.ptrn
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `pattern` element
     **
    \*/
    proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
        if (is(x, "object")) {
            var attr = x;
        } else {
            attr = {patternUnits: "userSpaceOnUse"};
            if (x) {
                attr.x = x;
            }
            if (y) {
                attr.y = y;
            }
            if (width != null) {
                attr.width = width;
            }
            if (height != null) {
                attr.height = height;
            }
            if (vx != null && vy != null && vw != null && vh != null) {
                attr.viewBox = [vx, vy, vw, vh];
            } else {
                attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
            }
        }
        return this.el("pattern", attr);
    };
    /*\
     * Paper.use
     [ method ]
     **
     * Creates a <use> element.
     - id (string) @optional id of element to link
     * or
     - id (Element) @optional element to link
     **
     = (object) the `use` element
     **
    \*/
    proto.use = function (id) {
        if (id != null) {
            if (id instanceof Element) {
                if (!id.attr("id")) {
                    id.attr({id: Snap._.id(id)});
                }
                id = id.attr("id");
            }
            if (String(id).charAt() == "#") {
                id = id.substring(1);
            }
            return this.el("use", {"xlink:href": "#" + id});
        } else {
            return Element.prototype.use.call(this);
        }
    };
    /*\
     * Paper.symbol
     [ method ]
     **
     * Creates a <symbol> element.
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     = (object) the `symbol` element
     **
    \*/
    proto.symbol = function (vx, vy, vw, vh) {
        var attr = {};
        if (vx != null && vy != null && vw != null && vh != null) {
            attr.viewBox = [vx, vy, vw, vh];
        }

        return this.el("symbol", attr);
    };
    /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
     = (object) the `text` element
     **
     > Usage
     | var t1 = paper.text(50, 50, "Snap");
     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
     | // Text path usage
     | t1.attr({textpath: "M10,10L100,100"});
     | // or
     | var pth = paper.path("M10,10L100,100");
     | t1.attr({textpath: pth});
    \*/
    proto.text = function (x, y, text) {
        var attr = {};
        if (is(x, "object")) {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                text: text || ""
            };
        }
        return this.el("text", attr);
    };
    /*\
     * Paper.line
     [ method ]
     **
     * Draws a line
     **
     - x1 (number) x coordinate position of the start
     - y1 (number) y coordinate position of the start
     - x2 (number) x coordinate position of the end
     - y2 (number) y coordinate position of the end
     = (object) the `line` element
     **
     > Usage
     | var t1 = paper.line(50, 50, 100, 100);
    \*/
    proto.line = function (x1, y1, x2, y2) {
        var attr = {};
        if (is(x1, "object")) {
            attr = x1;
        } else if (x1 != null) {
            attr = {
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2
            };
        }
        return this.el("line", attr);
    };
    /*\
     * Paper.polyline
     [ method ]
     **
     * Draws a polyline
     **
     - points (array) array of points
     * or
     - varargs (…) points
     = (object) the `polyline` element
     **
     > Usage
     | var p1 = paper.polyline([10, 10, 100, 100]);
     | var p2 = paper.polyline(10, 10, 100, 100);
    \*/
    proto.polyline = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polyline", attr);
    };
    /*\
     * Paper.polygon
     [ method ]
     **
     * Draws a polygon. See @Paper.polyline
    \*/
    proto.polygon = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polygon", attr);
    };
    // gradients
    (function () {
        var $ = Snap._.$;
        // gradients' helpers
        /*\
         * Element.stops
         [ method ]
         **
         * Only for gradients!
         * Returns array of gradient stops elements.
         = (array) the stops array.
        \*/
        function Gstops() {
            return this.selectAll("stop");
        }
        /*\
         * Element.addStop
         [ method ]
         **
         * Only for gradients!
         * Adds another stop to the gradient.
         - color (string) stops color
         - offset (number) stops offset 0..100
         = (object) gradient element
        \*/
        function GaddStop(color, offset) {
            var stop = $("stop"),
                attr = {
                    offset: +offset + "%"
                };
            color = Snap.color(color);
            attr["stop-color"] = color.hex;
            if (color.opacity < 1) {
                attr["stop-opacity"] = color.opacity;
            }
            $(stop, attr);
            var stops = this.stops(),
                inserted;
            for (var i = 0; i < stops.length; i++) {
                var stopOffset = parseFloat(stops[i].attr("offset"));
                if (stopOffset > offset) {
                    this.node.insertBefore(stop, stops[i].node);
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                this.node.appendChild(stop);
            }
            return this;
        }
        function GgetBBox() {
            if (this.type == "linearGradient") {
                var x1 = $(this.node, "x1") || 0,
                    x2 = $(this.node, "x2") || 1,
                    y1 = $(this.node, "y1") || 0,
                    y2 = $(this.node, "y2") || 0;
                return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
            } else {
                var cx = this.node.cx || .5,
                    cy = this.node.cy || .5,
                    r = this.node.r || 0;
                return Snap._.box(cx - r, cy - r, r * 2, r * 2);
            }
        }
        /*\
         * Element.setStops
         [ method ]
         **
         * Only for gradients!
         * Updates stops of the gradient based on passed gradient descriptor. See @Ppaer.gradient
         - str (string) gradient descriptor part after `()`.
         = (object) gradient element
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         | g.setStops("#fff-#000-#f00-#fc0");
        \*/
        function GsetStops(str) {
            var grad = str,
                stops = this.stops();
            if (typeof str == "string") {
                grad = eve("snap.util.grad.parse", null, "l(0,0,0,1)" + str).firstDefined().stops;
            }
            if (!Snap.is(grad, "array")) {
                return;
            }
            for (var i = 0; i < stops.length; i++) {
                if (grad[i]) {
                    var color = Snap.color(grad[i].color),
                        attr = {"offset": grad[i].offset + "%"};
                    attr["stop-color"] = color.hex;
                    if (color.opacity < 1) {
                        attr["stop-opacity"] = color.opacity;
                    }
                    stops[i].attr(attr);
                } else {
                    stops[i].remove();
                }
            }
            for (i = stops.length; i < grad.length; i++) {
                this.addStop(grad[i].color, grad[i].offset);
            }
            return this;
        }
        function gradient(defs, str) {
            var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
                el;
            if (!grad) {
                return null;
            }
            grad.params.unshift(defs);
            if (grad.type.toLowerCase() == "l") {
                el = gradientLinear.apply(0, grad.params);
            } else {
                el = gradientRadial.apply(0, grad.params);
            }
            if (grad.type != grad.type.toLowerCase()) {
                $(el.node, {
                    gradientUnits: "userSpaceOnUse"
                });
            }
            var stops = grad.stops,
                len = stops.length;
            for (var i = 0; i < len; i++) {
                var stop = stops[i];
                el.addStop(stop.color, stop.offset);
            }
            return el;
        }
        function gradientLinear(defs, x1, y1, x2, y2) {
            var el = Snap._.make("linearGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            el.setStops = GsetStops;
            if (x1 != null) {
                $(el.node, {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                });
            }
            return el;
        }
        function gradientRadial(defs, cx, cy, r, fx, fy) {
            var el = Snap._.make("radialGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (cx != null) {
                $(el.node, {
                    cx: cx,
                    cy: cy,
                    r: r
                });
            }
            if (fx != null && fy != null) {
                $(el.node, {
                    fx: fx,
                    fy: fy
                });
            }
            return el;
        }
        /*\
         * Paper.gradient
         [ method ]
         **
         * Creates a gradient element
         **
         - gradient (string) gradient descriptor
         > Gradient Descriptor
         * The gradient descriptor is an expression formatted as
         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
         * either linear or radial.  The uppercase `L` or `R` letters
         * indicate absolute coordinates offset from the SVG surface.
         * Lowercase `l` or `r` letters indicate coordinates
         * calculated relative to the element to which the gradient is
         * applied.  Coordinates specify a linear gradient vector as
         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
         * `r` and optional `fx`, `fy` specifying a focal point away
         * from the center of the circle. Specify `<colors>` as a list
         * of dash-separated CSS color values.  Each color may be
         * followed by a custom offset value, separated with a colon
         * character.
         > Examples
         * Linear gradient, relative from top-left corner to bottom-right
         * corner, from black through red to white:
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         * Linear gradient, absolute from (0, 0) to (100, 100), from black
         * through red at 25% to white:
         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
         * Radial gradient, relative from the center of the element with radius
         * half the width, from black to white:
         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
         * To apply the gradient:
         | paper.circle(50, 50, 40).attr({
         |     fill: g
         | });
         = (object) the `gradient` element
        \*/
        proto.gradient = function (str) {
            return gradient(this.defs, str);
        };
        proto.gradientLinear = function (x1, y1, x2, y2) {
            return gradientLinear(this.defs, x1, y1, x2, y2);
        };
        proto.gradientRadial = function (cx, cy, r, fx, fy) {
            return gradientRadial(this.defs, cx, cy, r, fx, fy);
        };
        /*\
         * Paper.toString
         [ method ]
         **
         * Returns SVG code for the @Paper
         = (string) SVG code for the @Paper
        \*/
        proto.toString = function () {
            var doc = this.node.ownerDocument,
                f = doc.createDocumentFragment(),
                d = doc.createElement("div"),
                svg = this.node.cloneNode(true),
                res;
            f.appendChild(d);
            d.appendChild(svg);
            Snap._.$(svg, {xmlns: "http://www.w3.org/2000/svg"});
            res = d.innerHTML;
            f.removeChild(f.firstChild);
            return res;
        };
        /*\
         * Paper.toDataURL
         [ method ]
         **
         * Returns SVG code for the @Paper as Data URI string.
         = (string) Data URI string
        \*/
        proto.toDataURL = function () {
            if (window && window.btoa) {
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
            }
        };
        /*\
         * Paper.clear
         [ method ]
         **
         * Removes all child nodes of the paper, except <defs>.
        \*/
        proto.clear = function () {
            var node = this.node.firstChild,
                next;
            while (node) {
                next = node.nextSibling;
                if (node.tagName != "defs") {
                    node.parentNode.removeChild(node);
                } else {
                    proto.clear.call({node: node});
                }
                node = next;
            }
        };
    }());
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        is = Snap.is,
        clone = Snap._.clone,
        has = "hasOwnProperty",
        p2s = /,?([a-z]),?/gi,
        toFloat = parseFloat,
        math = Math,
        PI = math.PI,
        mmin = math.min,
        mmax = math.max,
        pow = math.pow,
        abs = math.abs;
    function paths(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
            p[ps].sleep = 100;
        } else {
            p[ps] = {
                sleep: 100
            };
        }
        setTimeout(function () {
            for (var key in p) if (p[has](key) && key != ps) {
                p[key].sleep--;
                !p[key].sleep && delete p[key];
            }
        });
        return p[ps];
    }
    function box(x, y, width, height) {
        if (x == null) {
            x = y = width = height = 0;
        }
        if (y == null) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        return {
            x: x,
            y: y,
            width: width,
            w: width,
            height: height,
            h: height,
            x2: x + width,
            y2: y + height,
            cx: x + width / 2,
            cy: y + height / 2,
            r1: math.min(width, height) / 2,
            r2: math.max(width, height) / 2,
            r0: math.sqrt(width * width + height * height) / 2,
            path: rectPath(x, y, width, height),
            vb: [x, y, width, height].join(" ")
        };
    }
    function toString() {
        return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
        var res = clone(pathArray);
        res.toString = toString;
        return res;
    }
    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y,
                getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
    }
    function getLengthFactory(istotal, subpath) {
        function O(val) {
            return +(+val).toFixed(3);
        }
        return Snap._.cacher(function (path, length, onlystart) {
            if (path instanceof Element) {
                path = path.attr("d");
            }
            path = path2curve(path);
            var x, y, p, l, sp = "", subpaths = {}, point,
                len = 0;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] == "M") {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += [
                                "C" + O(point.start.x),
                                O(point.start.y),
                                O(point.m.x),
                                O(point.m.y),
                                O(point.x),
                                O(point.y)
                            ];
                            if (onlystart) {return sp;}
                            subpaths.start = sp;
                            sp = [
                                "M" + O(point.x),
                                O(point.y) + "C" + O(point.n.x),
                                O(point.n.y),
                                O(point.end.x),
                                O(point.end.y),
                                O(p[5]),
                                O(p[6])
                            ].join();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return point;
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            return point;
        }, null, Snap._.clone);
    }
    var getTotalLength = getLengthFactory(1),
        getPointAtLength = getLengthFactory(),
        getSubpathsAtLength = getLengthFactory(0, 1);
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
            t13 = pow(t1, 3),
            t12 = pow(t1, 2),
            t2 = t * t,
            t3 = t2 * t,
            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
            ax = t1 * p1x + t * c1x,
            ay = t1 * p1y + t * c1y,
            cx = t1 * c2x + t * p2x,
            cy = t1 * c2y + t * p2y,
            alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI;
        // (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: {x: mx, y: my},
            n: {x: nx, y: ny},
            start: {x: ax, y: ay},
            end: {x: cx, y: cy},
            alpha: alpha
        };
    }
    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Snap.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(
            bbox.min.x,
            bbox.min.y,
            bbox.max.x - bbox.min.x,
            bbox.max.y - bbox.min.y
        );
    }
    function isPointInsideBBox(bbox, x, y) {
        return  x >= bbox.x &&
                x <= bbox.x + bbox.width &&
                y >= bbox.y &&
                y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
                || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
                || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2,
            n = 12,
            Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
            sum = 0;
        for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
        }
        return z2 * sum;
    }
    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
            step = t / 2,
            t2 = t - step,
            l,
            e = .01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (
            mmax(x1, x2) < mmin(x3, x4) ||
            mmin(x1, x2) > mmax(x3, x4) ||
            mmax(y1, y2) < mmin(y3, y4) ||
            mmin(y1, y2) > mmax(y3, y4)
        ) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (!denominator) {
            return;
        }
        var px = nx / denominator,
            py = ny / denominator,
            px2 = +px.toFixed(2),
            py2 = +py.toFixed(2);
        if (
            px2 < +mmin(x1, x2).toFixed(2) ||
            px2 > +mmax(x1, x2).toFixed(2) ||
            px2 < +mmin(x3, x4).toFixed(2) ||
            px2 > +mmax(x3, x4).toFixed(2) ||
            py2 < +mmin(y1, y2).toFixed(2) ||
            py2 > +mmax(y1, y2).toFixed(2) ||
            py2 < +mmin(y3, y4).toFixed(2) ||
            py2 > +mmax(y3, y4).toFixed(2)
        ) {
            return;
        }
        return {x: px, y: py};
    }
    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }
    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }
    function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1),
            bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1),
            l2 = bezlen.apply(0, bez2),
            n1 = ~~(l1 / 8),
            n2 = ~~(l2 / 8),
            dots1 = [],
            dots2 = [],
            xy = {},
            res = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
            dots1.push({x: p.x, y: p.y, t: i / n1});
        }
        for (i = 0; i < n2 + 1; i++) {
            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
            dots2.push({x: p.x, y: p.y, t: i / n2});
        }
        for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
                var di = dots1[i],
                    di1 = dots1[i + 1],
                    dj = dots2[j],
                    dj1 = dots2[j + 1],
                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                        if (justCount) {
                            res++;
                        } else {
                            res.push({
                                x: is.x,
                                y: is.y,
                                t1: t1,
                                t2: t2
                            });
                        }
                    }
                }
            }
        }
        return res;
    }
    function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
    }
    function pathIntersectionNumber(path1, path2) {
        return interPathHelper(path1, path2, 1);
    }
    function interPathHelper(path1, path2, justCount) {
        path1 = path2curve(path1);
        path2 = path2curve(path2);
        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
            res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] == "M") {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] == "C") {
                    bez1 = [x1, y1].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                    x1 = x1m;
                    y1 = y1m;
                }
                for (var j = 0, jj = path2.length; j < jj; j++) {
                    var pj = path2[j];
                    if (pj[0] == "M") {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] == "C") {
                            bez2 = [x2, y2].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res += intr;
                        } else {
                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res = res.concat(intr);
                        }
                    }
                }
            }
        }
        return res;
    }
    function isPointInsidePath(path, x, y) {
        var bbox = pathBBox(path);
        return isPointInsideBBox(bbox, x, y) &&
               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
    }
    function pathBBox(path) {
        var pth = paths(path);
        if (pth.bbox) {
            return clone(pth.bbox);
        }
        if (!path) {
            return box();
        }
        path = path2curve(path);
        var x = 0,
            y = 0,
            X = [],
            Y = [],
            p;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = p[1];
                y = p[2];
                X.push(x);
                Y.push(y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X.concat(dim.min.x, dim.max.x);
                Y = Y.concat(dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin.apply(0, X),
            ymin = mmin.apply(0, Y),
            xmax = mmax.apply(0, X),
            ymax = mmax.apply(0, Y),
            bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
        pth.bbox = clone(bb);
        return bb;
    }
    function rectPath(x, y, w, h, r) {
        if (r) {
            return [
                ["M", +x + +r, y],
                ["l", w - r * 2, 0],
                ["a", r, r, 0, 0, 1, r, r],
                ["l", 0, h - r * 2],
                ["a", r, r, 0, 0, 1, -r, r],
                ["l", r * 2 - w, 0],
                ["a", r, r, 0, 0, 1, -r, -r],
                ["l", 0, r * 2 - h],
                ["a", r, r, 0, 0, 1, r, -r],
                ["z"]
            ];
        }
        var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
        res.toString = toString;
        return res;
    }
    function ellipsePath(x, y, rx, ry, a) {
        if (a == null && ry == null) {
            ry = rx;
        }
        x = +x;
        y = +y;
        rx = +rx;
        ry = +ry;
        if (a != null) {
            var rad = Math.PI / 180,
                x1 = x + rx * Math.cos(-ry * rad),
                x2 = x + rx * Math.cos(-a * rad),
                y1 = y + rx * Math.sin(-ry * rad),
                y2 = y + rx * Math.sin(-a * rad),
                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
        } else {
            res = [
                ["M", x, y],
                ["m", 0, -ry],
                ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
                ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
                ["z"]
            ];
        }
        res.toString = toString;
        return res;
    }
    var unit2px = Snap._unit2px,
        getPath = {
        path: function (el) {
            return el.attr("path");
        },
        circle: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx, attr.cy, attr.r);
        },
        ellipse: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
        },
        rect: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
        },
        image: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
        },
        line: function (el) {
            return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
        },
        polyline: function (el) {
            return "M" + el.attr("points");
        },
        polygon: function (el) {
            return "M" + el.attr("points") + "z";
        },
        deflt: function (el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        }
    };
    function pathToRelative(pathArray) {
        var pth = paths(pathArray),
            lowerCase = String.prototype.toLowerCase;
        if (pth.rel) {
            return pathClone(pth.rel);
        }
        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push(["M", x, y]);
        }
        for (var i = start, ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
                r[0] = lowerCase.call(pa[0]);
                switch (r[0]) {
                    case "a":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] - x).toFixed(3);
                        r[7] = +(pa[7] - y).toFixed(3);
                        break;
                    case "v":
                        r[1] = +(pa[1] - y).toFixed(3);
                        break;
                    case "m":
                        mx = pa[1];
                        my = pa[2];
                    default:
                        for (var j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                        }
                }
            } else {
                r = res[i] = [];
                if (pa[0] == "m") {
                    mx = pa[1] + x;
                    my = pa[2] + y;
                }
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    res[i][k] = pa[k];
                }
            }
            var len = res[i].length;
            switch (res[i][0]) {
                case "z":
                    x = mx;
                    y = my;
                    break;
                case "h":
                    x += +res[i][len - 1];
                    break;
                case "v":
                    y += +res[i][len - 1];
                    break;
                default:
                    x += +res[i][len - 2];
                    y += +res[i][len - 1];
            }
        }
        res.toString = toString;
        pth.rel = pathClone(res);
        return res;
    }
    function pathToAbsolute(pathArray) {
        var pth = paths(pathArray);
        if (pth.abs) {
            return pathClone(pth.abs);
        }
        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) { // rough assumption
            pathArray = Snap.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0,
            pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
        }
        var crz = pathArray.length == 3 &&
            pathArray[0][0] == "M" &&
            pathArray[1][0].toUpperCase() == "R" &&
            pathArray[2][0].toUpperCase() == "Z";
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
                r[0] = pa0.toUpperCase();
                switch (r[0]) {
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +pa[6] + x;
                        r[7] = +pa[7] + y;
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "R":
                        var dots = [x, y].concat(pa.slice(1));
                        for (var j = 2, jj = dots.length; j < jj; j++) {
                            dots[j] = +dots[j] + x;
                            dots[++j] = +dots[j] + y;
                        }
                        res.pop();
                        res = res.concat(catmullRom2bezier(dots, crz));
                        break;
                    case "O":
                        res.pop();
                        dots = ellipsePath(x, y, pa[1], pa[2]);
                        dots.push(dots[0]);
                        res = res.concat(dots);
                        break;
                    case "U":
                        res.pop();
                        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                        r = ["U"].concat(res[res.length - 1].slice(-2));
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                }
            } else if (pa0 == "R") {
                dots = [x, y].concat(pa.slice(1));
                res.pop();
                res = res.concat(catmullRom2bezier(dots, crz));
                r = ["R"].concat(pa.slice(-2));
            } else if (pa0 == "O") {
                res.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res = res.concat(dots);
            } else if (pa0 == "U") {
                res.pop();
                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = ["U"].concat(res[res.length - 1].slice(-2));
            } else {
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
                switch (r[0]) {
                    case "Z":
                        x = +mx;
                        y = +my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
        }
        res.toString = toString;
        pth.abs = pathClone(res);
        return res;
    }
    function l2c(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
    }
    function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3,
            _23 = 2 / 3;
        return [
                _13 * x1 + _23 * ax,
                _13 * y1 + _23 * ay,
                _13 * x2 + _23 * ax,
                _13 * y2 + _23 * ay,
                x2,
                y2
            ];
    }
    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var _120 = PI * 120 / 180,
            rad = PI / 180 * (+angle || 0),
            res = [],
            xy,
            rotate = Snap._.cacher(function (x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad),
                    Y = x * math.sin(rad) + y * math.cos(rad);
                return {x: X, y: Y};
            });
        if (!rx || !ry) {
            return [x1, y1, x2, y2, x2, y2];
        }
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math.cos(PI / 180 * angle),
                sin = math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = x * x / (rx * rx) + y * y / (ry * ry);
            if (h > 1) {
                h = math.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) *
                    math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = math.cos(f1),
            s1 = math.sin(f1),
            c2 = math.cos(f2),
            s2 = math.sin(f2),
            t = math.tan(df / 4),
            hx = 4 / 3 * rx * t,
            hy = 4 / 3 * ry * t,
            m1 = [x1, y1],
            m2 = [x1 + hx * s1, y1 - hy * c1],
            m3 = [x2 + hx * s2, y2 - hy * c2],
            m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [m2, m3, m4].concat(res);
        } else {
            res = [m2, m3, m4].concat(res).join().split(",");
            var newres = [];
            for (var i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    }
    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
    }

    // Returns bounding box of cubic bezier curve.
    // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
    // Original version: NISHIO Hirokazu
    // Modifications: https://github.com/timo22345
    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
        var tvalues = [],
            bounds = [[], []],
            a, b, c, t, t1, t2, b2ac, sqrtb2ac;
        for (var i = 0; i < 2; ++i) {
            if (i == 0) {
                b = 6 * x0 - 12 * x1 + 6 * x2;
                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                c = 3 * x1 - 3 * x0;
            } else {
                b = 6 * y0 - 12 * y1 + 6 * y2;
                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                c = 3 * y1 - 3 * y0;
            }
            if (abs(a) < 1e-12) {
                if (abs(b) < 1e-12) {
                    continue;
                }
                t = -c / b;
                if (0 < t && t < 1) {
                    tvalues.push(t);
                }
                continue;
            }
            b2ac = b * b - 4 * c * a;
            sqrtb2ac = math.sqrt(b2ac);
            if (b2ac < 0) {
                continue;
            }
            t1 = (-b + sqrtb2ac) / (2 * a);
            if (0 < t1 && t1 < 1) {
                tvalues.push(t1);
            }
            t2 = (-b - sqrtb2ac) / (2 * a);
            if (0 < t2 && t2 < 1) {
                tvalues.push(t2);
            }
        }

        var x, y, j = tvalues.length,
            jlen = j,
            mt;
        while (j--) {
            t = tvalues[j];
            mt = 1 - t;
            bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
            bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
        }

        bounds[0][jlen] = x0;
        bounds[1][jlen] = y0;
        bounds[0][jlen + 1] = x3;
        bounds[1][jlen + 1] = y3;
        bounds[0].length = bounds[1].length = jlen + 2;


        return {
          min: {x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1])},
          max: {x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1])}
        };
    }

    function path2curve(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
            return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path),
            p2 = path2 && pathToAbsolute(path2),
            attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            processPath = function (path, d, pcom) {
                var nx, ny;
                if (!path) {
                    return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                }
                !(path[0] in {T: 1, Q: 1}) && (d.qx = d.qy = null);
                switch (path[0]) {
                    case "M":
                        d.X = path[1];
                        d.Y = path[2];
                        break;
                    case "A":
                        path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                        break;
                    case "S":
                        if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.
                            nx = d.x * 2 - d.bx;          // And reflect the previous
                            ny = d.y * 2 - d.by;          // command's control point relative to the current point.
                        }
                        else {                            // or some else or nothing
                            nx = d.x;
                            ny = d.y;
                        }
                        path = ["C", nx, ny].concat(path.slice(1));
                        break;
                    case "T":
                        if (pcom == "Q" || pcom == "T") { // In "T" case we have to take into account, if the previous command is Q/T.
                            d.qx = d.x * 2 - d.qx;        // And make a reflection similar
                            d.qy = d.y * 2 - d.qy;        // to case "S".
                        }
                        else {                            // or something else or nothing
                            d.qx = d.x;
                            d.qy = d.y;
                        }
                        path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                        break;
                    case "Q":
                        d.qx = path[1];
                        d.qy = path[2];
                        path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                        break;
                    case "L":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                        break;
                    case "H":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                        break;
                    case "V":
                        path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                        break;
                    case "Z":
                        path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                        break;
                }
                return path;
            },
            fixArc = function (pp, i) {
                if (pp[i].length > 7) {
                    pp[i].shift();
                    var pi = pp[i];
                    while (pi.length) {
                        pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                        p2 && (pcoms2[i] = "A"); // the same as above
                        pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                    }
                    pp.splice(i, 1);
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            fixM = function (path1, path2, a1, a2, i) {
                if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                    path2.splice(i, 0, ["M", a2.x, a2.y]);
                    a1.bx = 0;
                    a1.by = 0;
                    a1.x = path1[i][1];
                    a1.y = path1[i][2];
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            pcoms1 = [], // path commands of original path p
            pcoms2 = [], // path commands of original path p2
            pfirst = "", // temporary holder for original path command
            pcom = ""; // holder for previous path command of original path
        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] && (pfirst = p[i][0]); // save current path command

            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
            {
                pcoms1[i] = pfirst; // Save current path command
                i && ( pcom = pcoms1[i - 1]); // Get previous path command pcom
            }
            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path

            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

            if (p2) { // the same procedures is done to p2
                p2[i] && (pfirst = p2[i][0]);
                if (pfirst != "C") {
                    pcoms2[i] = pfirst;
                    i && (pcom = pcoms2[i - 1]);
                }
                p2[i] = processPath(p2[i], attrs2, pcom);

                if (pcoms2[i] != "A" && pfirst == "C") {
                    pcoms2[i] = "C";
                }

                fixArc(p2, i);
            }
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
                seg2 = p2 && p2[i],
                seglen = seg.length,
                seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
            pth.curve = pathClone(p);
        }
        return p2 ? [p, p2] : p;
    }
    function mapPath(path, matrix) {
        if (!matrix) {
            return path;
        }
        var x, y, i, j, ii, jj, pathi;
        path = path2curve(path);
        for (i = 0, ii = path.length; i < ii; i++) {
            pathi = path[i];
            for (j = 1, jj = pathi.length; j < jj; j += 2) {
                x = matrix.x(pathi[j], pathi[j + 1]);
                y = matrix.y(pathi[j], pathi[j + 1]);
                pathi[j] = x;
                pathi[j + 1] = y;
            }
        }
        return path;
    }

    // http://schepers.cc/getting-to-the-point
    function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [
                        {x: +crp[i - 2], y: +crp[i - 1]},
                        {x: +crp[i],     y: +crp[i + 1]},
                        {x: +crp[i + 2], y: +crp[i + 3]},
                        {x: +crp[i + 4], y: +crp[i + 5]}
                    ];
            if (z) {
                if (!i) {
                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
                } else if (iLen - 4 == i) {
                    p[3] = {x: +crp[0], y: +crp[1]};
                } else if (iLen - 2 == i) {
                    p[2] = {x: +crp[0], y: +crp[1]};
                    p[3] = {x: +crp[2], y: +crp[3]};
                }
            } else {
                if (iLen - 4 == i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = {x: +crp[i], y: +crp[i + 1]};
                }
            }
            d.push(["C",
                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
                  (p[1].y + 6*p[2].y - p[3].y) / 6,
                  p[2].x,
                  p[2].y
            ]);
        }

        return d;
    }

    // export
    Snap.path = paths;

    /*\
     * Snap.path.getTotalLength
     [ method ]
     **
     * Returns the length of the given path in pixels
     **
     - path (string) SVG path string
     **
     = (number) length
    \*/
    Snap.path.getTotalLength = getTotalLength;
    /*\
     * Snap.path.getPointAtLength
     [ method ]
     **
     * Returns the coordinates of the point located at the given length along the given path
     **
     - path (string) SVG path string
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    Snap.path.getPointAtLength = getPointAtLength;
    /*\
     * Snap.path.getSubpath
     [ method ]
     **
     * Returns the subpath of a given path between given start and end lengths
     **
     - path (string) SVG path string
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    Snap.path.getSubpath = function (path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };
    /*\
     * Element.getTotalLength
     [ method ]
     **
     * Returns the length of the path in pixels (only works for `path` elements)
     = (number) length
    \*/
    elproto.getTotalLength = function () {
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
    };
    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
    /*\
     * Element.getPointAtLength
     [ method ]
     **
     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
     **
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    elproto.getPointAtLength = function (length) {
        return getPointAtLength(this.attr("d"), length);
    };
    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
    /*\
     * Element.getSubpath
     [ method ]
     **
     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
     **
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    elproto.getSubpath = function (from, to) {
        return Snap.path.getSubpath(this.attr("d"), from, to);
    };
    Snap._.box = box;
    /*\
     * Snap.path.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Finds dot coordinates on the given cubic beziér curve at the given t
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point,
     o     y: (number) y coordinate of the point,
     o     m: {
     o         x: (number) x coordinate of the left anchor,
     o         y: (number) y coordinate of the left anchor
     o     },
     o     n: {
     o         x: (number) x coordinate of the right anchor,
     o         y: (number) y coordinate of the right anchor
     o     },
     o     start: {
     o         x: (number) x coordinate of the start of the curve,
     o         y: (number) y coordinate of the start of the curve
     o     },
     o     end: {
     o         x: (number) x coordinate of the end of the curve,
     o         y: (number) y coordinate of the end of the curve
     o     },
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/
    Snap.path.findDotsAtSegment = findDotsAtSegment;
    /*\
     * Snap.path.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given cubic beziér curve
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for beziér curve
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.bezierBBox = bezierBBox;
    /*\
     * Snap.path.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding box
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point is inside
    \*/
    Snap.path.isPointInsideBBox = isPointInsideBBox;
    Snap.closest = function (x, y, X, Y) {
        var r = 100,
            b = box(x - r / 2, y - r / 2, r, r),
            inside = [],
            getter = X[0].hasOwnProperty("x") ? function (i) {
                return {
                    x: X[i].x,
                    y: X[i].y
                };
            } : function (i) {
                return {
                    x: X[i],
                    y: Y[i]
                };
            },
            found = 0;
        while (r <= 1e6 && !found) {
            for (var i = 0, ii = X.length; i < ii; i++) {
                var xy = getter(i);
                if (isPointInsideBBox(b, xy.x, xy.y)) {
                    found++;
                    inside.push(xy);
                    break;
                }
            }
            if (!found) {
                r *= 2;
                b = box(x - r / 2, y - r / 2, r, r)
            }
        }
        if (r == 1e6) {
            return;
        }
        var len = Infinity,
            res;
        for (i = 0, ii = inside.length; i < ii; i++) {
            var l = Snap.len(x, y, inside[i].x, inside[i].y);
            if (len > l) {
                len = l;
                inside[i].len = l;
                res = inside[i];
            }
        }
        return res;
    };
    /*\
     * Snap.path.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if bounding boxes intersect
    \*/
    Snap.path.isBBoxIntersect = isBBoxIntersect;
    /*\
     * Snap.path.intersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point,
     o         y: (number) y coordinate of the point,
     o         t1: (number) t value for segment of path1,
     o         t2: (number) t value for segment of path2,
     o         segment1: (number) order number for segment of path1,
     o         segment2: (number) order number for segment of path2,
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/
    Snap.path.intersection = pathIntersection;
    Snap.path.intersectionNumber = pathIntersectionNumber;
    /*\
     * Snap.path.isPointInside
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     *
     * Note: fill mode doesn’t affect the result of this method.
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) `true` if point is inside the path
    \*/
    Snap.path.isPointInside = isPointInsidePath;
    /*\
     * Snap.path.getBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given path
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.getBBox = pathBBox;
    Snap.path.get = getPath;
    /*\
     * Snap.path.toRelative
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into relative values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toRelative = pathToRelative;
    /*\
     * Snap.path.toAbsolute
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into absolute values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toAbsolute = pathToAbsolute;
    /*\
     * Snap.path.toCubic
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic beziér curves
     - pathString (string|array) path string or array of segments
     = (array) array of segments
    \*/
    Snap.path.toCubic = path2curve;
    /*\
     * Snap.path.map
     [ method ]
     **
     * Transform the path string with the given matrix
     - path (string) path string
     - matrix (object) see @Matrix
     = (string) transformed path string
    \*/
    Snap.path.map = mapPath;
    Snap.path.toString = toString;
    Snap.path.clone = pathClone;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var mmax = Math.max,
        mmin = Math.min;

    // Set
    var Set = function (items) {
        this.items = [];
	this.bindings = {};
        this.length = 0;
        this.type = "set";
        if (items) {
            for (var i = 0, ii = items.length; i < ii; i++) {
                if (items[i]) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }
    },
    setproto = Set.prototype;
    /*\
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set
     = (object) original element
    \*/
    setproto.push = function () {
        var item,
            len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };
    /*\
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it
     = (object) element
    \*/
    setproto.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop();
    };
    /*\
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set
     *
     * If the function returns `false`, the loop stops running.
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    \*/
    setproto.forEach = function (callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    /*\
     * Set.animate
     [ method ]
     **
     * Animates each element in set in sync.
     *
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     * or
     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
     > Usage
     | // animate all elements in set to radius 10
     | set.animate({r: 10}, 500, mina.easein);
     | // or
     | // animate first element to radius 10, but second to radius 20 and in different time
     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
     = (Element) the current element
    \*/
    setproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Snap._.Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var args = arguments;
        if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
            var each = true;
        }
        var begin,
            handler = function () {
                if (begin) {
                    this.b = begin;
                } else {
                    begin = this.b;
                }
            },
            cb = 0,
            set = this,
            callbacker = callback && function () {
                if (++cb == set.length) {
                    callback.call(this);
                }
            };
        return this.forEach(function (el, i) {
            eve.once("snap.animcreated." + el.id, handler);
            if (each) {
                args[i] && el.animate.apply(el, args[i]);
            } else {
                el.animate(attrs, ms, easing, callbacker);
            }
        });
    };
    /*\
     * Set.remove
     [ method ]
     **
     * Removes all children of the set.
     *
     = (object) Set object
    \*/
    setproto.remove = function () {
        while (this.length) {
            this.pop().remove();
        }
        return this;
    };
    /*\
     * Set.bind
     [ method ]
     **
     * Specifies how to handle a specific attribute when applied
     * to a set.
     *
     **
     - attr (string) attribute name
     - callback (function) function to run
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     - eattr (string) attribute on the element to bind the attribute to
     = (object) Set object
    \*/
    setproto.bind = function (attr, a, b) {
        var data = {};
        if (typeof a == "function") {
            this.bindings[attr] = a;
        } else {
            var aname = b || attr;
            this.bindings[attr] = function (v) {
                data[aname] = v;
                a.attr(data);
            };
        }
        return this;
    };
    /*\
     * Set.attr
     [ method ]
     **
     * Equivalent of @Element.attr.
     = (object) Set object
    \*/
    setproto.attr = function (value) {
        var unbound = {};
        for (var k in value) {
            if (this.bindings[k]) {
                this.bindings[k](value[k]);
            } else {
                unbound[k] = value[k];
            }
        }
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            this.items[i].attr(unbound);
        }
        return this;
    };
    /*\
     * Set.clear
     [ method ]
     **
     * Removes all elements from the set
    \*/
    setproto.clear = function () {
        while (this.length) {
            this.pop();
        }
    };
    /*\
     * Set.splice
     [ method ]
     **
     * Removes range of elements from the set
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    \*/
    setproto.splice = function (index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [],
            todel = [],
            args = [],
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        var arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };
    /*\
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     - element (object) element to remove
     = (boolean) `true` if object was found and removed from the set
    \*/
    setproto.exclude = function (el) {
        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
            this.splice(i, 1);
            return true;
        }
        return false;
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Inserts set elements after given element.
     **
     - element (object) set will be inserted after this element
     = (object) Set object
    \*/
    setproto.insertAfter = function (el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    /*\
     * Set.getBBox
     [ method ]
     **
     * Union of all bboxes of the set. See @Element.getBBox.
     = (object) bounding box descriptor. See @Element.getBBox.
    \*/
    setproto.getBBox = function () {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) if (!this.items[i].removed) {
            var box = this.items[i].getBBox();
            x.push(box.x);
            y.push(box.y);
            x2.push(box.x + box.width);
            y2.push(box.y + box.height);
        }
        x = mmin.apply(0, x);
        y = mmin.apply(0, y);
        x2 = mmax.apply(0, x2);
        y2 = mmax.apply(0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y,
            cx: x + (x2 - x) / 2,
            cy: y + (y2 - y) / 2
        };
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Creates a clone of the set.
     **
     = (object) New Set object
    \*/
    setproto.clone = function (s) {
        s = new Set;
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function () {
        return "Snap\u2018s set";
    };
    setproto.type = "set";
    // export
    /*\
     * Snap.Set
     [ property ]
     **
     * Set constructor.
    \*/
    Snap.Set = Set;
    /*\
     * Snap.set
     [ method ]
     **
     * Creates a set and fills it with list of arguments.
     **
     = (object) New Set object
     | var r = paper.rect(0, 0, 10, 10),
     |     s1 = Snap.set(), // empty set
     |     s2 = Snap.set(r, paper.circle(100, 100, 20)); // prefilled set
    \*/
    Snap.set = function () {
        var set = new Set;
        if (arguments.length) {
            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
        }
        return set;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var names = {},
        reUnit = /[%a-z]+$/i,
        Str = String;
    names.stroke = names.fill = "colour";
    function getEmpty(item) {
        var l = item[0];
        switch (l.toLowerCase()) {
            case "t": return [l, 0, 0];
            case "m": return [l, 1, 0, 0, 1, 0, 0];
            case "r": if (item.length == 4) {
                return [l, 0, item[2], item[3]];
            } else {
                return [l, 0];
            }
            case "s": if (item.length == 5) {
                return [l, 1, 1, item[3], item[4]];
            } else if (item.length == 3) {
                return [l, 1, 1];
            } else {
                return [l, 1];
            }
        }
    }
    function equaliseTransform(t1, t2, getBBox) {
        t1 = t1 || new Snap.Matrix;
        t2 = t2 || new Snap.Matrix;
        t1 = Snap.parseTransformString(t1.toTransformString()) || [];
        t2 = Snap.parseTransformString(t2.toTransformString()) || [];
        var maxlength = Math.max(t1.length, t2.length),
            from = [],
            to = [],
            i = 0, j, jj,
            tt1, tt2;
        for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if (tt1[0] != tt2[0] ||
                tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) ||
                tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])
                ) {
                    t1 = Snap._.transform2matrix(t1, getBBox());
                    t2 = Snap._.transform2matrix(t2, getBBox());
                    from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
                    to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
                    break;
            }
            from[i] = [];
            to[i] = [];
            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
                j in tt1 && (from[i][j] = tt1[j]);
                j in tt2 && (to[i][j] = tt2[j]);
            }
        }
        return {
            from: path2array(from),
            to: path2array(to),
            f: getPath(from)
        };
    }
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    function getViewBox(val) {
        return val.join(" ");
    }
    function getColour(clr) {
        return Snap.rgb(clr[0], clr[1], clr[2], clr[3]);
    }
    function getPath(path) {
        var k = 0, i, ii, j, jj, out, a, b = [];
        for (i = 0, ii = path.length; i < ii; i++) {
            out = "[";
            a = ['"' + path[i][0] + '"'];
            for (j = 1, jj = path[i].length; j < jj; j++) {
                a[j] = "val[" + k++ + "]";
            }
            out += a + "]";
            b[i] = out;
        }
        return Function("val", "return Snap.path.toString.call([" + b + "])");
    }
    function path2array(path) {
        var out = [];
        for (var i = 0, ii = path.length; i < ii; i++) {
            for (var j = 1, jj = path[i].length; j < jj; j++) {
                out.push(path[i][j]);
            }
        }
        return out;
    }
    function isNumeric(obj) {
        return isFinite(obj);
    }
    function arrayEqual(arr1, arr2) {
        if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
            return false;
        }
        return arr1.toString() == arr2.toString();
    }
    Element.prototype.equal = function (name, b) {
        return eve("snap.util.equal", this, name, b).firstDefined();
    };
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this;
        if (names[name] == "colour") {
            A = Snap.color(a);
            B = Snap.color(b);
            return {
                from: [A.r, A.g, A.b, A.opacity],
                to: [B.r, B.g, B.b, B.opacity],
                f: getColour
            };
        }
        if (name == "viewBox") {
            A = this.attr(name).vb.split(" ").map(Number);
            B = b.split(" ").map(Number);
            return {
                from: A,
                to: B,
                f: getViewBox
            };
        }
        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
            if (typeof b == "string") {
                b = Str(b).replace(/\.{3}|\u2026/g, a);
            }
            a = this.matrix;
            if (!Snap._.rgTransform.test(b)) {
                b = Snap._.transform2matrix(Snap._.svgTransform2string(b), this.getBBox());
            } else {
                b = Snap._.transform2matrix(b, this.getBBox());
            }
            return equaliseTransform(a, b, function () {
                return el.getBBox(1);
            });
        }
        if (name == "d" || name == "path") {
            A = Snap.path.toCubic(a, b);
            return {
                from: path2array(A[0]),
                to: path2array(A[1]),
                f: getPath(A[0])
            };
        }
        if (name == "points") {
            A = Str(a).split(Snap._.separator);
            B = Str(b).split(Snap._.separator);
            return {
                from: A,
                to: B,
                f: function (val) { return val; }
            };
        }
        if (isNumeric(a) && isNumeric(b)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getNumber
            };
        }
        var aUnit = a.match(reUnit),
            bUnit = Str(b).match(reUnit);
        if (aUnit && arrayEqual(aUnit, bUnit)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getUnit(aUnit)
            };
        } else {
            return {
                from: this.asPX(name),
                to: this.asPX(name, b),
                f: getNumber
            };
        }
    });
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
    has = "hasOwnProperty",
    supportsTouch = "createTouch" in glob.doc,
    events = [
        "click", "dblclick", "mousedown", "mousemove", "mouseout",
        "mouseover", "mouseup", "touchstart", "touchmove", "touchend",
        "touchcancel"
    ],
    touchMap = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    },
    getScroll = function (xy, el) {
        var name = xy == "y" ? "scrollTop" : "scrollLeft",
            doc = el && el.node ? el.node.ownerDocument : glob.doc;
        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
    },
    preventDefault = function () {
        this.returnValue = false;
    },
    preventTouch = function () {
        return this.originalEvent.preventDefault();
    },
    stopPropagation = function () {
        this.cancelBubble = true;
    },
    stopTouch = function () {
        return this.originalEvent.stopPropagation();
    },
    addEvent = function (obj, type, fn, element) {
        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
            f = function (e) {
                var scrollY = getScroll("y", element),
                    scrollX = getScroll("x", element);
                if (supportsTouch && touchMap[has](type)) {
                    for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                        if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                            var olde = e;
                            e = e.targetTouches[i];
                            e.originalEvent = olde;
                            e.preventDefault = preventTouch;
                            e.stopPropagation = stopTouch;
                            break;
                        }
                    }
                }
                var x = e.clientX + scrollX,
                    y = e.clientY + scrollY;
                return fn.call(element, e, x, y);
            };

        if (type !== realName) {
            obj.addEventListener(type, f, false);
        }

        obj.addEventListener(realName, f, false);

        return function () {
            if (type !== realName) {
                obj.removeEventListener(type, f, false);
            }

            obj.removeEventListener(realName, f, false);
            return true;
        };
    },
    drag = [],
    dragMove = function (e) {
        var x = e.clientX,
            y = e.clientY,
            scrollY = getScroll("y"),
            scrollX = getScroll("x"),
            dragi,
            j = drag.length;
        while (j--) {
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches && e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }
            var node = dragi.el.node,
                o,
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;
            // glob.win.opera && parent.removeChild(node);
            // node.style.display = "none";
            // o = dragi.el.paper.getElementByPoint(x, y);
            // node.style.display = display;
            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    },
    dragUp = function (e) {
        Snap.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length,
            dragi;
        while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
            eve.off("snap.drag.*." + dragi.el.id);
        }
        drag = [];
    };
    /*\
     * Element.click
     [ method ]
     **
     * Adds a click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unclick
     [ method ]
     **
     * Removes a click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.dblclick
     [ method ]
     **
     * Adds a double click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.undblclick
     [ method ]
     **
     * Removes a double click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousedown
     [ method ]
     **
     * Adds a mousedown event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes a mousedown event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousemove
     [ method ]
     **
     * Adds a mousemove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes a mousemove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseout
     [ method ]
     **
     * Adds a mouseout event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes a mouseout event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseover
     [ method ]
     **
     * Adds a mouseover event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes a mouseover event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseup
     [ method ]
     **
     * Adds a mouseup event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes a mouseup event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchstart
     [ method ]
     **
     * Adds a touchstart event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes a touchstart event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchmove
     [ method ]
     **
     * Adds a touchmove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes a touchmove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchend
     [ method ]
     **
     * Adds a touchend event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchend
     [ method ]
     **
     * Removes a touchend event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds a touchcancel event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes a touchcancel event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    for (var i = events.length; i--;) {
        (function (eventName) {
            Snap[eventName] = elproto[eventName] = function (fn, scope) {
                if (Snap.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
                    });
                } else {
                    for (var i = 0, ii = this.events.length; i < ii; i++) if (this.events[i].name == eventName) {
                        try {
                            this.events[i].f.call(this);
                        } catch (e) {}
                    }
                }
                return this;
            };
            Snap["un" + eventName] =
            elproto["un" + eventName] = function (fn) {
                var events = this.events || [],
                    l = events.length;
                while (l--) if (events[l].name == eventName &&
                               (events[l].f == fn || !fn)) {
                    events[l].unbind();
                    events.splice(l, 1);
                    !events.length && delete this.events;
                    return this;
                }
                return this;
            };
        })(events[i]);
    }
    /*\
     * Element.hover
     [ method ]
     **
     * Adds hover event handlers to the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/
    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    /*\
     * Element.unhover
     [ method ]
     **
     * Removes hover event handlers from the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/
    elproto.unhover = function (f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
    /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for an element's drag gesture
     **
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start, 
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element 
     * `drag.over.<id>` fires as well.
     *
     * Start event and start handler are called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler are called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler are called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/
    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
        var el = this;
        if (!arguments.length) {
            var origTransform;
            return el.drag(function (dx, dy) {
                this.attr({
                    transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
                });
            }, function () {
                origTransform = this.transform().local;
            });
        }
        function start(e, x, y) {
            (e.originalEvent || e).preventDefault();
            el._drag.x = x;
            el._drag.y = y;
            el._drag.id = e.identifier;
            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
            drag.push({el: el, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
            onstart && eve.on("snap.drag.start." + el.id, onstart);
            onmove && eve.on("snap.drag.move." + el.id, onmove);
            onend && eve.on("snap.drag.end." + el.id, onend);
            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
        }
        function init(e, x, y) {
            eve("snap.draginit." + el.id, el, e, x, y);
        }
        eve.on("snap.draginit." + el.id, start);
        el._drag = {};
        draggable.push({el: el, start: start, init: init});
        el.mousedown(init);
        return el;
    };
    /*
     * Element.onDragOver
     [ method ]
     **
     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/
    // elproto.onDragOver = function (f) {
    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
    // };
    /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from the given element
    \*/
    elproto.undrag = function () {
        var i = draggable.length;
        while (i--) if (draggable[i].el == this) {
            this.unmousedown(draggable[i].init);
            draggable.splice(i, 1);
            eve.unbind("snap.drag.*." + this.id);
            eve.unbind("snap.draginit." + this.id);
        }
        !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        pproto = Paper.prototype,
        rgurl = /^\s*url\((.+)\)/,
        Str = String,
        $ = Snap._.$;
    Snap.filter = {};
    /*\
     * Paper.filter
     [ method ]
     **
     * Creates a `<filter>` element
     **
     - filstr (string) SVG fragment of filter provided as a string
     = (object) @Element
     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
     > Usage
     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    pproto.filter = function (filstr) {
        var paper = this;
        if (paper.type != "svg") {
            paper = paper.paper;
        }
        var f = Snap.parse(Str(filstr)),
            id = Snap._.id(),
            width = paper.node.offsetWidth,
            height = paper.node.offsetHeight,
            filter = $("filter");
        $(filter, {
            id: id,
            filterUnits: "userSpaceOnUse"
        });
        filter.appendChild(f.node);
        paper.defs.appendChild(filter);
        return new Element(filter);
    };

    eve.on("snap.util.getattr.filter", function () {
        eve.stop();
        var p = $(this.node, "filter");
        if (p) {
            var match = Str(p).match(rgurl);
            return match && Snap.select(match[1]);
        }
    });
    eve.on("snap.util.attr.filter", function (value) {
        if (value instanceof Element && value.type == "filter") {
            eve.stop();
            var id = value.node.id;
            if (!id) {
                $(value.node, {id: value.id});
                id = value.id;
            }
            $(this.node, {
                filter: Snap.url(id)
            });
        }
        if (!value || value == "none") {
            eve.stop();
            this.node.removeAttribute("filter");
        }
    });
    /*\
     * Snap.filter.blur
     [ method ]
     **
     * Returns an SVG markup string for the blur filter
     **
     - x (number) amount of horizontal blur, in pixels
     - y (number) #optional amount of vertical blur, in pixels
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.blur(5, 10)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.blur = function (x, y) {
        if (x == null) {
            x = 2;
        }
        var def = y == null ? x : [x, y];
        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
            def: def
        });
    };
    Snap.filter.blur.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.shadow
     [ method ]
     **
     * Returns an SVG markup string for the shadow filter
     **
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - blur (number) #optional amount of blur
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * which makes blur default to `4`. Or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - opacity (number) #optional `0..1` opacity of the shadow
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.shadow(0, 2, .3)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
        if (opacity == null) {
            if (color == null) {
                opacity = blur;
                blur = 4;
                color = "#000";
            } else {
                opacity = color;
                color = blur;
                blur = 4;
            }
        }
        if (blur == null) {
            blur = 4;
        }
        if (opacity == null) {
            opacity = 1;
        }
        if (dx == null) {
            dx = 0;
            dy = 2;
        }
        if (dy == null) {
            dy = dx;
        }
        color = Snap.color(color);
        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: color,
            dx: dx,
            dy: dy,
            blur: blur,
            opacity: opacity
        });
    };
    Snap.filter.shadow.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.grayscale
     [ method ]
     **
     * Returns an SVG markup string for the grayscale filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.grayscale = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: 0.2126 + 0.7874 * (1 - amount),
            b: 0.7152 - 0.7152 * (1 - amount),
            c: 0.0722 - 0.0722 * (1 - amount),
            d: 0.2126 - 0.2126 * (1 - amount),
            e: 0.7152 + 0.2848 * (1 - amount),
            f: 0.0722 - 0.0722 * (1 - amount),
            g: 0.2126 - 0.2126 * (1 - amount),
            h: 0.0722 + 0.9278 * (1 - amount)
        });
    };
    Snap.filter.grayscale.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.sepia
     [ method ]
     **
     * Returns an SVG markup string for the sepia filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.sepia = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: 0.393 + 0.607 * (1 - amount),
            b: 0.769 - 0.769 * (1 - amount),
            c: 0.189 - 0.189 * (1 - amount),
            d: 0.349 - 0.349 * (1 - amount),
            e: 0.686 + 0.314 * (1 - amount),
            f: 0.168 - 0.168 * (1 - amount),
            g: 0.272 - 0.272 * (1 - amount),
            h: 0.534 - 0.534 * (1 - amount),
            i: 0.131 + 0.869 * (1 - amount)
        });
    };
    Snap.filter.sepia.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.saturate
     [ method ]
     **
     * Returns an SVG markup string for the saturate filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.saturate = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - amount
        });
    };
    Snap.filter.saturate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.hueRotate
     [ method ]
     **
     * Returns an SVG markup string for the hue-rotate filter
     **
     - angle (number) angle of rotation
     = (string) filter representation
    \*/
    Snap.filter.hueRotate = function (angle) {
        angle = angle || 0;
        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: angle
        });
    };
    Snap.filter.hueRotate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.invert
     [ method ]
     **
     * Returns an SVG markup string for the invert filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.invert = function (amount) {
        if (amount == null) {
            amount = 1;
        }
//        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: 1 - amount
        });
    };
    Snap.filter.invert.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.brightness
     [ method ]
     **
     * Returns an SVG markup string for the brightness filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.brightness = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
            amount: amount
        });
    };
    Snap.filter.brightness.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.contrast
     [ method ]
     **
     * Returns an SVG markup string for the contrast filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.contrast = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: .5 - amount / 2
        });
    };
    Snap.filter.contrast.toString = function () {
        return this();
    };
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var box = Snap._.box,
        is = Snap.is,
        firstLetter = /^[^a-z]*([tbmlrc])/i,
        toString = function () {
            return "T" + this.dx + "," + this.dy;
        };
    /*\
     * Element.getAlign
     [ method ]
     **
     * Returns shift needed to align the element relatively to given element.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
     > Usage
     | el.transform(el.getAlign(el2, "top"));
     * or
     | var dy = el.getAlign(el2, "top").dy;
    \*/
    Element.prototype.getAlign = function (el, way) {
        if (way == null && is(el, "string")) {
            way = el;
            el = null;
        }
        el = el || this.paper;
        var bx = el.getBBox ? el.getBBox() : box(el),
            bb = this.getBBox(),
            out = {};
        way = way && way.match(firstLetter);
        way = way ? way[1].toLowerCase() : "c";
        switch (way) {
            case "t":
                out.dx = 0;
                out.dy = bx.y - bb.y;
            break;
            case "b":
                out.dx = 0;
                out.dy = bx.y2 - bb.y2;
            break;
            case "m":
                out.dx = 0;
                out.dy = bx.cy - bb.cy;
            break;
            case "l":
                out.dx = bx.x - bb.x;
                out.dy = 0;
            break;
            case "r":
                out.dx = bx.x2 - bb.x2;
                out.dy = 0;
            break;
            default:
                out.dx = bx.cx - bb.cx;
                out.dy = 0;
            break;
        }
        out.toString = toString;
        return out;
    };
    /*\
     * Element.align
     [ method ]
     **
     * Aligns the element relatively to given one via transformation.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object) this element
     > Usage
     | el.align(el2, "top");
     * or
     | el.align("middle");
    \*/
    Element.prototype.align = function (el, way) {
        return this.transform("..." + this.getAlign(el, way));
    };
});

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    // Colours are from https://www.materialui.co
    var red         = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
        pink        = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
        purple      = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
        deeppurple  = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
        indigo      = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
        blue        = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
        lightblue   = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
        cyan        = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
        teal        = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
        green       = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
        lightgreen  = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
        lime        = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
        yellow      = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
        amber       = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
        orange      = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
        deeporange  = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
        brown       = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
        grey        = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
        bluegrey    = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
    /*\
     * Snap.mui
     [ property ]
     **
     * Contain Material UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.mui.deeppurple, stroke: Snap.mui.amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.mui = {};
    /*\
     * Snap.flat
     [ property ]
     **
     * Contain Flat UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.flat.carrot, stroke: Snap.flat.wetasphalt});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.flat = {};
    function saveColor(colors) {
        colors = colors.split(/(?=#)/);
        var color = new String(colors[5]);
        color[50] = colors[0];
        color[100] = colors[1];
        color[200] = colors[2];
        color[300] = colors[3];
        color[400] = colors[4];
        color[500] = colors[5];
        color[600] = colors[6];
        color[700] = colors[7];
        color[800] = colors[8];
        color[900] = colors[9];
        if (colors[10]) {
            color.A100 = colors[10];
            color.A200 = colors[11];
            color.A400 = colors[12];
            color.A700 = colors[13];
        }
        return color;
    }
    Snap.mui.red = saveColor(red);
    Snap.mui.pink = saveColor(pink);
    Snap.mui.purple = saveColor(purple);
    Snap.mui.deeppurple = saveColor(deeppurple);
    Snap.mui.indigo = saveColor(indigo);
    Snap.mui.blue = saveColor(blue);
    Snap.mui.lightblue = saveColor(lightblue);
    Snap.mui.cyan = saveColor(cyan);
    Snap.mui.teal = saveColor(teal);
    Snap.mui.green = saveColor(green);
    Snap.mui.lightgreen = saveColor(lightgreen);
    Snap.mui.lime = saveColor(lime);
    Snap.mui.yellow = saveColor(yellow);
    Snap.mui.amber = saveColor(amber);
    Snap.mui.orange = saveColor(orange);
    Snap.mui.deeporange = saveColor(deeporange);
    Snap.mui.brown = saveColor(brown);
    Snap.mui.grey = saveColor(grey);
    Snap.mui.bluegrey = saveColor(bluegrey);
    Snap.flat.turquoise = "#1abc9c";
    Snap.flat.greensea = "#16a085";
    Snap.flat.sunflower = "#f1c40f";
    Snap.flat.orange = "#f39c12";
    Snap.flat.emerland = "#2ecc71";
    Snap.flat.nephritis = "#27ae60";
    Snap.flat.carrot = "#e67e22";
    Snap.flat.pumpkin = "#d35400";
    Snap.flat.peterriver = "#3498db";
    Snap.flat.belizehole = "#2980b9";
    Snap.flat.alizarin = "#e74c3c";
    Snap.flat.pomegranate = "#c0392b";
    Snap.flat.amethyst = "#9b59b6";
    Snap.flat.wisteria = "#8e44ad";
    Snap.flat.clouds = "#ecf0f1";
    Snap.flat.silver = "#bdc3c7";
    Snap.flat.wetasphalt = "#34495e";
    Snap.flat.midnightblue = "#2c3e50";
    Snap.flat.concrete = "#95a5a6";
    Snap.flat.asbestos = "#7f8c8d";
    /*\
     * Snap.importMUIColors
     [ method ]
     **
     * Imports Material UI colours into global object.
     | Snap.importMUIColors();
     | Snap().rect(0, 0, 10, 10).attr({fill: deeppurple, stroke: amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.importMUIColors = function () {
        for (var color in Snap.mui) {
            if (Snap.mui.hasOwnProperty(color)) {
                window[color] = Snap.mui[color];
            }
        }
    };
});

return Snap;
}));
}.call(window));

/***/ })
/******/ ]);