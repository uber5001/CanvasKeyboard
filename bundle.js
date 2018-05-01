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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/index.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    margin: 0;\r\n}\r\ncanvas {\r\n    display: block;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
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

/***/ "./src/Keyboard.js":
/*!*************************!*\
  !*** ./src/Keyboard.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
    'use strict';
    window.Keyboard = function() {
        var canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        var context = canvas.getContext('2d');
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            getCurrentKeyboard().resize();
        }
        window.addEventListener('resize',resize);
        var isMouseDown = false;
        var previousNote = 0;
        window.addEventListener('mousedown',function(e) {
            previousNote = pressNote(getCurrentKeyboard().hit(e.clientX,e.clientY));
            isMouseDown = true;
        });
        window.addEventListener('mousemove',function(e) {
            if (isMouseDown) {
                var currentNote = pressNote(getCurrentKeyboard().hit(e.clientX,e.clientY));
                if (currentNote != previousNote) {
                    releaseNote(previousNote);
                    previousNote = currentNote;
                }
            }
        });
        window.addEventListener('mouseup',function(e) {
            releaseNote(previousNote);
            previousNote = releaseNote(getCurrentKeyboard().hit(e.clientX,e.clientY));
            isMouseDown = false;
        });
		window.addEventListener('keydown', function(e) {
			var note = alphanumeric.hit(e.keyCode);
			if (note !== -1)
				pressNote(note);
		});
		window.addEventListener('keyup', function(e) {
			var note = alphanumeric.hit(e.keyCode);
			if (note !== -1)
				releaseNote(note);
		});
		var oldTouchNotes = [];
		function handleTouch(e) {
			e.preventDefault();
			var newTouchNotes = [];
			for (var touch in e.touches) {
				if (!isNaN(touch)) {
					var currentNote = pressNote(getCurrentKeyboard().hit(e.touches[touch].clientX,e.touches[touch].clientY));
					for (var note in oldTouchNotes) {
						if (oldTouchNotes[note] == currentNote) {
							oldTouchNotes.splice(note, 1);
						}
					}
					newTouchNotes.push(currentNote);
				}
			}
			for (note in oldTouchNotes) {
				releaseNote(oldTouchNotes[note]);
			}
			oldTouchNotes = newTouchNotes;
		}
		window.addEventListener('touchmove', handleTouch);
		window.addEventListener('touchstart', handleTouch);
		window.addEventListener('touchend', handleTouch);
		window.addEventListener('touchcancel', handleTouch);
        
        var currentKeyboard = 'isomorphic';
        
        function getCurrentKeyboard() {
            if (currentKeyboard == 'piano')
                return piano;
            else if (currentKeyboard == 'isomorphic')
                return isomorphic;
        }
        
        var piano = new function(){
            //All measurements are relative to
            //the size of 12 keys on a keyboard
            //I.E.: C thru B is length of 1.0f
            //Thanks to http://www.quadibloc.com/other/cnv05.htm for measurements
            var whiteWidths = [23,24,23,24,23,23,24];
            var blackWidths = [14,14,14,14,14,13,14,13,14,13,14,13];
            var whiteOffsets = [0];
            var blackOffsets = [0];
            for (var i in whiteWidths) {
                whiteWidths[i] /= 164;
                if (i != 0) {
                    whiteOffsets[i] = whiteOffsets[i-1] + whiteWidths[i-1];
                }
            }
            for (var i in blackWidths) {
                blackWidths[i] /= 164;
                if (i != 0) {
                    blackOffsets[i] = blackOffsets[i-1] + blackWidths[i-1];
                }
            }
            
            //offset of the keyboard from the center
            //measured in px
            //TODO: try to keep offsetY near 0.
            var offsetX = 0;
            var offsetY = 0;
            //size (pixels) of 12 key segment.
            var stretchX = 800;
            var stretchY = 400;
            //amount the upper rows are moved to
            //the right, and vice versa.
            //measured relative to 12 key segment
            //i.e.: skew=1; means one keyboard up
            //is one octave down.
            var skew = -1;
            //length of the black key relative to
            //the length of the white keys.
            //measured in percentile (0 to 1)
            var blackKeyLength = 0.6;
            //various key info 
            var keyInfo = [
                { name: "C",  color: "white", borderColor: "black", borderWidth: 2, nameColor: "black"},
                { name: "C#", color: "black", borderColor: "black", borderWidth: 2, nameColor: "white"},
                { name: "D",  color: "white", borderColor: "black", borderWidth: 2, nameColor: "black"},
                { name: "D#", color: "black", borderColor: "black", borderWidth: 2, nameColor: "white"},
                { name: "E",  color: "white", borderColor: "black", borderWidth: 2, nameColor: "black"},
                { name: "F",  color: "white", borderColor: "black", borderWidth: 2, nameColor: "black"},
                { name: "F#", color: "black", borderColor: "black", borderWidth: 2, nameColor: "white"},
                { name: "G",  color: "white", borderColor: "black", borderWidth: 2, nameColor: "black"},
                { name: "G#", color: "black", borderColor: "black", borderWidth: 2, nameColor: "white"},
                { name: "A",  color: "white", borderColor: "black", borderWidth: 2, nameColor: "black"},
                { name: "A#", color: "black", borderColor: "black", borderWidth: 2, nameColor: "white"},
                { name: "B",  color: "white", borderColor: "black", borderWidth: 2, nameColor: "black"}
            ]
            
            function drawKeyboard() {
                //only need to draw enough segments to fill the canvas.
                var currentOctave = 4;
                var top = -canvas.height/2;
                var bottom = -top;
                var currentOffsetY = offsetY;
                var currentOffsetX = offsetX;
                while (currentOffsetY < top) {
                    currentOffsetY+=stretchY;
                    currentOffsetX-=skew*stretchX;
                }
                while (currentOffsetY >= top) {
                    currentOffsetY-=stretchY;
                    currentOffsetX+=skew*stretchX;
                }
                while (currentOffsetY <= bottom) {
                    drawKeyboardRow(currentOffsetX,currentOffsetY+canvas.height/2,currentOctave);
                    currentOffsetY+=stretchY;
                    currentOffsetX-=skew*stretchX;
                }
            }
            /**
             * draws one row of the keyboard
             * at the given offset from the top center.
             */
            function drawKeyboardRow(x,y,o) {
                var currentOctave = o; //C4
                var left = -canvas.width/2;
                var right = -left;
                var currentOffset = x;
                while (currentOffset < left) {
                    currentOffset+=stretchX;
                    currentOctave++;
                }
                while (currentOffset >= left) {
                    currentOffset-=stretchX;
                    currentOctave--;
                }
                while (currentOffset <= right) {
                    drawKeyboardSegment(currentOffset+canvas.width/2,y,currentOctave)
                    currentOffset+=stretchX;
                    currentOctave++;
                }
                
            }
            /**
             * draws one 12-key segment of the keyboard
             * at the given offset from the top left corner
             */
            function drawKeyboardSegment(x,y,o) {
                //white notes broken into 7ths,
                //for each white key
                var keyValue = [0,2,4,5,7,9,11];
                for (var i = 0; i < 7; i++) {
                    var key = keyInfo[keyValue[i]];
                    var p = key.borderWidth/2;
                    context.beginPath();
                    context.rect(x+whiteOffsets[i]*stretchX+p, y+p, whiteWidths[i]*stretchX-2*p, stretchY-2*p);
                    context.fillStyle = key.color;
                    context.fill();
                    context.lineWidth = key.borderWidth;
                    context.strokeStyle = key.borderColor;
                    context.stroke();
                    context.font = Math.floor(stretchX/7/5)+'pt Calibri';
                    context.textBaseline = 'bottom';
                    context.textAlign = 'center';
                    context.fillStyle = key.borderColor;
                    context.fillText(key.name+o, x+(whiteOffsets[i]+whiteWidths[i]/2)*stretchX,y+stretchY);
                }
                //black keys broken into 12ths
                var blackWidth = stretchX/12;
                //and they have a unique height
                var blackHeight = stretchY*blackKeyLength;
                //but they only exist on certain 12ths:
                var isBlack = [0,1,0,1,0,0,1,0,1,0,1,0];
                //for every key on keyboard
                for (var i = 0; i < 12; i++) {
                    if (isBlack[i]) {
                        var key = keyInfo[i];
                        //draw the key
                        context.fillStyle = keyInfo[i].color;
                        context.fillRect(x+blackOffsets[i]*stretchX, y, blackWidths[i]*stretchX, blackHeight);
                        
                        context.font = Math.floor(stretchX/7/5)+'pt Calibri';
                        context.textBaseline = 'bottom';
                        context.textAlign = 'center';
                        context.fillStyle = key.nameColor;
                        context.fillText(key.name+o, x+(blackOffsets[i]+blackWidths[i]/2)*stretchX,y+blackHeight);
                    }
                }
            }
            
            function fixSkewRow() {
                var topOfSkewRow = -stretchY/2;
                while (offsetY > topOfSkewRow) {
                    offsetY -= stretchY;
                    offsetX += stretchX*skew;
                }
                while (offsetY <= topOfSkewRow) {
                    offsetY += stretchY;
                    offsetX -= stretchX*skew;
                }
            }
            
            function animate() {
                fixSkewRow();
                context.clearRect(0,0,canvas.width,canvas.height);
                drawKeyboard();
            }
            this.__animate = function() {
                animate();
            }
        }();
        
        var isomorphic = new function(){
            var offsetX = 400;
            var offsetY = 300;
            
            var ruleA = 2;
            var ruleB = -5;
            
            var isHorizontal = true;
            
            var stretchXY = 60;
            
            var drawList = [];
            
            var change = {};
            
            function fixKeyboard() {
                drawList = [];
                var currentX = 0;
                var currentY = 0;
                var currentMidiValue = 60; //C4
                var left = -canvas.width/2-stretchXY*.66;
                var right = -left;
                var top = -canvas.height/2-stretchXY*.66;
                var bottom = -top;
                left -= offsetX;
                right -= offsetX;
                top -= offsetY;
                bottom -= offsetY;
                
                if (isHorizontal) {
                    //fix vertically
                    var movement = 2*stretchXY*Math.sqrt(3)/2;
                    change = {
                        x: {
                            x: movement,
                            y: 0,
                            o: ruleA
                        },
                        y: {
                            x: movement*Math.cos(Math.PI/3),
                            y: movement*Math.sin(Math.PI/3),
                            o: ruleB
                        }
                    }
                    
                    
                    while (currentY < top) {
                        currentX += change.y.x;
                        currentY += change.y.y;
                        currentMidiValue += change.y.o;
                    }
                    while (currentY > top) {
                        currentX -= change.y.x;
                        currentY -= change.y.y;
                        currentMidiValue -= change.y.o;
                    }
                    
                    while (currentX < left) {
                        currentX += change.x.x;
                        currentY += change.x.y;
                        currentMidiValue += change.x.o;
                    }
                    while (currentX > left) {
                        currentX -= change.x.x;
                        currentY -= change.x.y;
                        currentMidiValue -= change.x.o;
                    }
                    //each row
                    var shiftLeftThisIteration = true;
                    while (currentY < movement+bottom) {
                        //each column in that row
                        var tempX = currentX;
                        var tempY = currentY;
                        var tempO = currentMidiValue;
                        while(tempX < movement+right) {
                            drawList.push( {
                                x: tempX,
                                y: tempY,
                                o: tempO
                            } );
                            tempX += change.x.x;
                            tempY += change.x.y;
                            tempO += change.x.o;
                        }
                        currentX += change.y.x;
                        currentY += change.y.y;
                        currentMidiValue += change.y.o;
                        if (shiftLeftThisIteration) {
                            currentX -= change.x.x;
                            currentY -= change.x.y;
                            currentMidiValue -= change.x.o;
                        }
                        shiftLeftThisIteration = !shiftLeftThisIteration;
                    }
                }
            }
            
            this.hit = function(x,y) {
                x -= canvas.width/2+offsetX;
                y -= canvas.height/2+offsetY;
                var currentX = 0;
                var currentY = 0;
                var currentMidiValue = 60;
                    while (currentY < y) {
                        currentX += change.y.x;
                        currentY += change.y.y;
                        currentMidiValue += change.y.o;
                    }
                    while (currentY > y) {
                        currentX -= change.y.x;
                        currentY -= change.y.y;
                        currentMidiValue -= change.y.o;
                    }
                    //row above or at cursor
                    
                    while (currentX < x) {
                        currentX += change.x.x;
                        currentY += change.x.y;
                        currentMidiValue += change.x.o;
                    }
                    while (currentX > x) {
                        currentX -= change.x.x;
                        currentY -= change.x.y;
                        currentMidiValue -= change.x.o;
                    }
                    var pt = [ //potential targets
                        {
                            x: currentX,
                            y: currentY,
                            o: currentMidiValue,
                            d: 0
                        },{
                            x: currentX + change.x.x,
                            y: currentY + change.x.y,
                            o: currentMidiValue + change.x.o,
                            d: 0
                        },{
                            x: currentX + change.y.x,
                            y: currentY + change.y.y,
                            o: currentMidiValue + change.y.o,
                            d: 0
                        },{
                            x: currentX - change.x.x,
                            y: currentY - change.x.y,
                            o: currentMidiValue - change.x.o,
                            d: 0
                        },{
                            x: currentX - change.y.x,
                            y: currentY - change.y.y,
                            o: currentMidiValue - change.y.o,
                            d: 0
                        },{
                            x: currentX - change.x.x + change.y.x,
                            y: currentY - change.x.y + change.y.y,
                            o: currentMidiValue - change.x.o + change.y.o,
                            d: 0
                        },{
                            x: currentX - change.y.x + change.x.x,
                            y: currentY - change.y.y + change.x.y,
                            o: currentMidiValue - change.y.o + change.x.o,
                            d: 0
                        }
                    ];
                    var closest = pt[0];
                    for (var i = 0; i < pt.length; i++) {
                        pt[i].d = Math.sqrt(Math.pow(pt[i].x-x,2)+Math.pow(pt[i].y-y,2));
                        if (pt[i].d < closest.d) closest = pt[i];
                    }
                return closest.o;
            }
            this.noteOn = function(o) {
                notesHeld[o] = true;
                repaint();
            }
            this.noteOff = function(o) {
                notesHeld[o] = false;
                repaint();
            }
            function drawKeyboard() {
                for (var i in drawList) {
                    var j = drawList[i];
                    drawKey(j.x,j.y,j.o);
                }
            }
            var noteStyles = [
                {
                    normal: {
                        backgroundColor: "cyan"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                },{
                    normal: {
                        backgroundColor: "#008888"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                },{
                    normal: {
                        backgroundColor: "cyan"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                },{
                    normal: {
                        backgroundColor: "#008888"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                },{
                    normal: {
                        backgroundColor: "cyan"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                },{
                    normal: {
                        backgroundColor: "cyan"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                },{
                    normal: {
                        backgroundColor: "#008888"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                },{
                    normal: {
                        backgroundColor: "cyan"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                },{
                    normal: {
                        backgroundColor: "#008888"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                },{
                    normal: {
                        backgroundColor: "cyan"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                },{
                    normal: {
                        backgroundColor: "#008888"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                },{
                    normal: {
                        backgroundColor: "cyan"
                    },
                    active: {
                        backgroundColor: "blue"
                    }
                }
            ];
            var notesHeld = [];
            function drawKey(x,y,o) {
                x = offsetX+x+canvas.width/2;
                y = offsetY+y+canvas.height/2;
                context.beginPath();
                pathHexagon(x,y,1);
                context.fillStyle = noteStyles[o%12].normal.backgroundColor;
                if (notesHeld[o] == true)
                    context.fillStyle = noteStyles[o%12].active.backgroundColor;
                context.strokeStyle = 'black';
                context.lineWidth = stretchXY/2;
                context.fill();
                context.beginPath();
                pathHexagon(x,y,.66);
                context.stroke();
                context.fill();
                context.fillStyle = "white";
                context.textBaseline = "middle";
                context.textAlign = "center";
                context.font = stretchXY*.8+'px Calibri';
                context.fillText(o, x, y);
            }
            
            function pathHexagon(x,y,scale) {
                var r = (isHorizontal ? 0 : Math.PI/2)+Math.PI/6;
                context.moveTo(x+scale*stretchXY*Math.cos(r),y+scale*stretchXY*Math.sin(r));
                for (var i = 0; i < 5; i++) {
                    r+=Math.PI/3;
                    context.lineTo(x+scale*stretchXY*Math.cos(r),y+scale*stretchXY*Math.sin(r));
                }
                context.closePath();
            }
            fixKeyboard();
			var paintQueued = false;
			var paintWaiting = false;
			var n = 0;
            function repaint() {
				if (paintQueued) {
					paintWaiting = true;
					return;
				}
				paintQueued = true;
                requestAnimationFrame(function() {
					console.log(++n);
					drawKeyboard();
					if (paintWaiting) {
						setTimeout(repaint,0);
						paintWaiting = false;
					}
					paintQueued = false;
				});
            }
            this.__animate = function() {
                drawKeyboard();
            }
            this.resize = function() {
                fixKeyboard();
                drawKeyboard();
            }
            
        }();
        
        var alphanumeric = new function() {
            //Keymap object is important here!
            this.hit = function(key) {
				if (Keymap[key] == undefined) return -1;
				return 45+2*Keymap[key].x-5*Keymap[key].y;
			}
        }
        
        
        function repaint() {
            requestAnimationFrame(function() {isomorphic.__animate();});
        }
        repaint();
        
        
        
        
        var notesPressed = [];
        for (var i =0; i < 128; i++) notesPressed.push(false);
        function pressNote(o) {
            if (!notesPressed[o]) {
                notesPressed[o] = true;
                getCurrentKeyboard().noteOn(o);
                listenerList[0].noteOn(o);
            }
            return o;
        }
        function releaseNote(o) {
            if (notesPressed[o]) {
                notesPressed[o] = false;
                getCurrentKeyboard().noteOff(o);
                listenerList[0].noteOff(o);
            }
            return o;
        }
        
        
        
        var listenerList = [];
        this.addNoteListener = function(listener) {
            listenerList.push(listener);
        }
        this.removeNoteListener = function(listener) {
            listenerList.splice(indexOf(listener),1);
        }
        resize();
    }

    var Keymap = {
        49 :{x: 0, y:0, k:"1"},
        50 :{x: 1, y:0, k:"2"},
        51 :{x: 2, y:0, k:"3"},
        52 :{x: 3, y:0, k:"4"},
        53 :{x: 4, y:0, k:"5"},
        54 :{x: 5, y:0, k:"6"},
        55 :{x: 6, y:0, k:"7"},
        56 :{x: 7, y:0, k:"8"},
        57 :{x: 8, y:0, k:"9"},
        48 :{x: 9, y:0, k:"0"},
        189:{x:10, y:0, k:"-"},
        187:{x:11, y:0, k:"="},
        
        81 :{x: 0, y:1, k:"q"},
        87 :{x: 1, y:1, k:"w"},
        69 :{x: 2, y:1, k:"e"},
        82 :{x: 3, y:1, k:"r"},
        84 :{x: 4, y:1, k:"t"},
        89 :{x: 5, y:1, k:"y"},
        85 :{x: 6, y:1, k:"u"},
        73 :{x: 7, y:1, k:"i"},
        79 :{x: 8, y:1, k:"o"},
        80 :{x: 9, y:1, k:"p"},
        219:{x:10, y:1, k:"["},
        221:{x:11, y:1, k:"]"},
                     
        65 :{x: 0, y:2, k:"a"},
        83 :{x: 1, y:2, k:"s"},
        68 :{x: 2, y:2, k:"d"},
        70 :{x: 3, y:2, k:"f"},
        71 :{x: 4, y:2, k:"g"},
        72 :{x: 5, y:2, k:"h"},
        74 :{x: 6, y:2, k:"j"},
        75 :{x: 7, y:2, k:"k"},
        76 :{x: 8, y:2, k:"l"},
        186:{x: 9, y:2, k:";"},
        222:{x:10, y:2, k:"'"},
                      
        90 :{x: 0, y:3, k:"z"},
        88 :{x: 1, y:3, k:"x"},
        67 :{x: 2, y:3, k:"c"},
        86 :{x: 3, y:3, k:"v"},
        66 :{x: 4, y:3, k:"b"},
        78 :{x: 5, y:3, k:"n"},
        77 :{x: 6, y:3, k:"m"},
        188:{x: 7, y:3, k:","},
        190:{x: 8, y:3, k:"."},
        191:{x: 9, y:3, k:"/"}
    }
})();


/***/ }),

/***/ "./src/Synthesizer.js":
/*!****************************!*\
  !*** ./src/Synthesizer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
    'use strict';
    window.Synthesizer = function() {
        var context = new AudioContext();
        var destination = context.destination;
		var gain = context.createGain();
		var filter = context.createBiquadFilter();
		gain.gain.value = .2;
		gain.connect(filter);
		filter.connect(context.destination);
        var channels = [];
        var type = "sawtooth";
        this.noteOn = function(note) {
            if (channels[note]) return;
            channels[note] = new adsr(context, .01, 2, .3, .3);
            channels[note].frequency.value = 440*Math.pow(2,(note-57)/12);
            channels[note].type = type;
            channels[note].connect(gain);
            channels[note].start(context.currentTime);
        }
        this.noteOff = function(note) {
            channels[note].stop(context.currentTime);
            channels[note] = false;
        }
    }
    function adsr(context,pa,pd,ps,pr) {
        var osc = context.createOscillator();
        var g1 = context.createGain();
        var g2 = context.createGain();
        var a = pa;
        var d = pd;
        var s = ps;
        var r = pr;
        osc.connect(g1);
        g1.connect(g2);
        //levels are 0 to 1
        g1.gain.setValueAtTime(0,0);
        g2.gain.setValueAtTime(1,0);
        
        
        //OSC Access
        Object.defineProperty(this, "type", {
            get : function(){return osc.type},
            set : function(val){osc.type = val}});
        Object.defineProperty(this, "playbackState", {get : function(){return osc.playbackState}});
        Object.defineProperty(this, "frequency", {get : function(){return osc.frequency}});
        Object.defineProperty(this, "detune", {get : function(){return osc.detune}});

        this.start = function(when) {
            g1.gain.setValueAtTime(0,when);
            g1.gain.linearRampToValueAtTime(1,when+a);
            g1.gain.linearRampToValueAtTime(s,when+a+d);
            osc.start(when);
        }
        this.stop = function(when) {
            g2.gain.setValueAtTime(1,when);
            g2.gain.linearRampToValueAtTime(0,when+r);
            osc.stop(when+r);
        }
        this.connect = function(val) {g2.connect(val)};
        this.disconnect = function() {g2.disconnect()};
        this.setWaveTable = function(waveTable) {osc.setWaveTable(waveTable);};
    }
    Object.defineProperty(adsr.prototype, "UNSCHEDULED_STATE", {get : function(){return 0}});
    Object.defineProperty(adsr.prototype, "SCHEDULED_STATE",   {get : function(){return 1}});
    Object.defineProperty(adsr.prototype, "PLAYING_STATE",     {get : function(){return 2}});
    Object.defineProperty(adsr.prototype, "FINISHED_STATE",    {get : function(){return 3}});
})();


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./index.css */ "./node_modules/css-loader/index.js!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard.js */ "./src/Keyboard.js");
/* harmony import */ var _Keyboard_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Keyboard_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Synthesizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Synthesizer.js */ "./src/Synthesizer.js");
/* harmony import */ var _Synthesizer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Synthesizer_js__WEBPACK_IMPORTED_MODULE_2__);




window.addEventListener('load', function() {
    var keyboard = new Keyboard();
    var synth = new Synthesizer();
    keyboard.addNoteListener(synth);
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map