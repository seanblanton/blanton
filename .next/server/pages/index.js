module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("apO0");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Qi1R");
/* harmony import */ var _data_site_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nKeF");
/* harmony import */ var _data_externalPosts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wI0e");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("m/eG");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("lQNR");
/* harmony import */ var _system_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("wvLi");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const IndexPage = ({
  posts
}) => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, __jsx(_system__WEBPACK_IMPORTED_MODULE_6__[/* Grid */ "e"], {
  columns: _system_atoms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].grid.columns,
  gap: _system_atoms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].grid.gap
}, __jsx(_system__WEBPACK_IMPORTED_MODULE_6__[/* GridItem */ "f"], {
  span: 5
}, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[/* Header */ "e"], null, _data_site_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].title, " \u2014\xA0", _data_site_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].role)), __jsx(_system__WEBPACK_IMPORTED_MODULE_6__[/* GridItem */ "f"], {
  span: _system_atoms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].grid.gridSection
}, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[/* PostList */ "g"], {
  data: posts
})), __jsx(_system__WEBPACK_IMPORTED_MODULE_6__[/* GridItem */ "f"], {
  span: _system_atoms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].grid.gridSection
}, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[/* About */ "a"], null)), __jsx(_system__WEBPACK_IMPORTED_MODULE_6__[/* GridItem */ "f"], {
  span: _system_atoms__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].grid.gridSection
}, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[/* BookList */ "b"], null)), __jsx(_system__WEBPACK_IMPORTED_MODULE_6__[/* GridItem */ "f"], {
  span: 6
}, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[/* Footer */ "c"], null))));

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
async function getStaticProps() {
  const internalPosts = Array.from(_utils_index_js__WEBPACK_IMPORTED_MODULE_2__[/* postsData */ "b"].values());
  const externalPosts = _data_externalPosts_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].map(post => {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric"
    };
    const formattedDate = new Date(post.date).toLocaleDateString("en-IN", options);
    return {
      frontMatter: _objectSpread(_objectSpread({}, post), {}, {
        date: formattedDate
      })
    };
  });
  const posts = [...internalPosts, ...externalPosts].sort((a, b) => {
    return Number(new Date(b.frontMatter.date).getTime() - Number(new Date(a.frontMatter.date).getTime()));
  }).filter(post => !post.frontMatter.private);
  return {
    props: {
      posts
    }
  };
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2reD":
/***/ (function(module, exports) {

module.exports = require("prism-react-renderer/themes/paleNight");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6ukF":
/***/ (function(module, exports) {

module.exports = require("prism-react-renderer");

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "G1t4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return components; });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lQNR");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const components = {
  a: props => __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* Link */ "l"], props),
  blockquote: props => __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* Blockquote */ "b"], props),
  h1: props => __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* H1 */ "g"], props),
  h2: props => __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* H2 */ "h"], props),
  h3: props => __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* H3 */ "i"], props),
  img: props => __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* Image */ "j"], props),
  li: props => __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* Li */ "k"], props),
  ol: props => __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* Ol */ "m"], props),
  p: props => __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* P */ "n"], props),
  code: props => __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* Code */ "c"], props),
  pre: props => __jsx(___WEBPACK_IMPORTED_MODULE_2__[/* Pre */ "o"], props)
};

const DesignSystemProvider = props => {
  const {
    children
  } = props;
  return __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__["MDXProvider"], {
    components: components
  }, children);
};

/* harmony default export */ __webpack_exports__["b"] = (DesignSystemProvider);

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "OU9i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useThemeContext; });

// UNUSED EXPORTS: ThemeContext

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./utils/useLocalStorage.js

function useLocalStorage(key, initialValue) {
  let value = initialValue;
  const {
    0: storedValue,
    1: setStoredValue
  } = Object(external_react_["useState"])(value);
  Object(external_react_["useEffect"])(() => {
    const item = window.localStorage.getItem(key);
    const itemToStore = item ? JSON.parse(item) : initialValue;
    setStoredValue(itemToStore);
  }, []);

  const setValue = value => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}
// CONCATENATED MODULE: ./components/system/ThemeProvider.tsx
var __jsx = external_react_default.a.createElement;


const DEFAULT_MODE = "dark";
const DEFAULT_THEME = "winter";
const ThemeContext = /*#__PURE__*/external_react_default.a.createContext({});

const ThemeProvider = ({
  children
}) => {
  const [mode, setMode] = useLocalStorage("mode", DEFAULT_MODE);
  const [theme, setTheme] = useLocalStorage("theme", DEFAULT_THEME);

  const toggleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  function toggleTheme(name) {
    setTheme(name);
  }

  const updateTheme = () => {
    const currentTheme = `${theme}-${mode}`;
    document.documentElement.className = currentTheme;
  };

  Object(external_react_["useEffect"])(() => {
    updateTheme();
  });
  return __jsx(ThemeContext.Provider, {
    value: {
      theme,
      mode,
      toggleTheme,
      toggleMode
    }
  }, children);
};

/* harmony default export */ var system_ThemeProvider = __webpack_exports__["a"] = (ThemeProvider);
const useThemeContext = () => Object(external_react_["useContext"])(ThemeContext);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Qi1R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postsData; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs_readdir_recursive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Xx8f");
/* harmony import */ var fs_readdir_recursive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_readdir_recursive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_externalPosts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wI0e");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const POSTS_DIR = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(process.cwd(), "src/blog");
const filenames = fs_readdir_recursive__WEBPACK_IMPORTED_MODULE_1___default()(POSTS_DIR);
const formattedExternal = new Map(_data_externalPosts_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].map(post => {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  };
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", options);
  return {
    frontMatter: {
      title: post.title,
      date: formattedDate
    }
  };
}));
const postsData = new Map(filenames.map(filename => {
  const filePath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(POSTS_DIR, filename);
  const rawPost = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath, "utf8");
  const {
    content,
    data
  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(rawPost);
  const slug = filePath.replace(/^.*\/blog\//, "").replace(".mdx", "");
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  };
  const formattedDate = new Date(data.date).toLocaleDateString("en-IN", options);
  return {
    content,
    frontMatter: _objectSpread(_objectSpread({}, data), {}, {
      title: data.title,
      date: formattedDate
    }),
    slug,
    path: filePath
  };
}).map(entry => {
  const {
    slug
  } = entry;
  return [slug, entry];
}));
/* harmony default export */ __webpack_exports__["a"] = (postsData);

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "Xx8f":
/***/ (function(module, exports) {

module.exports = require("fs-readdir-recursive");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "apO0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lQNR");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_site_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nKeF");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("m/eG");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.main`
  margin: 0 auto;
  padding: ${_system__WEBPACK_IMPORTED_MODULE_2__[/* Atoms */ "a"].spacing.xlarge} ${_system__WEBPACK_IMPORTED_MODULE_2__[/* Atoms */ "a"].spacing.large};
  max-width: calc(var(--font-size) * 64);
  min-height: 100vh;
`;
const Header = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.main`
  display: flex;
  flex-direction: ${props => props.showTitle ? `row` : "row-reverse"};
  margin: 0 auto;
  min-height: 36px;
  justify-content: space-between;
`;
const Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.h2`
  font-size: ${_system__WEBPACK_IMPORTED_MODULE_2__[/* Atoms */ "a"].font.size.large};
  font-weight: ${_system__WEBPACK_IMPORTED_MODULE_2__[/* Atoms */ "a"].font.weight.semi};
  line-height: ${_system__WEBPACK_IMPORTED_MODULE_2__[/* Atoms */ "a"].font.lineHeight.body};
`;

const Layout = ({
  children,
  showTitle
}) => __jsx(Wrapper, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, _data_site_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].title, " \u2014\xA0", _data_site_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].role), __jsx("meta", {
  charSet: "utf-8"
}), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width"
}), __jsx("link", {
  rel: "preconnect",
  href: "https://fonts.gstatic.com"
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
  rel: "stylesheet"
}), __jsx("link", {
  rel: "icon",
  href: "favicon.svg",
  type: "image/svg+xml"
}), __jsx("link", {
  rel: "icon",
  href: "/favicon.png",
  type: "image/png"
})), __jsx(Header, {
  showTitle: showTitle
}, showTitle && __jsx(_system__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "l"], {
  href: "/"
}, __jsx(Title, null, " Sean Blanton ")), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[/* ThemeSettings */ "h"], null)), children);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "c2Xn":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set([width, width * 2, width * 3].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function callLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes
}) {
  if (unoptimized) {
    return {
      src
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  const srcSet = widths.map((w, i) => `${callLoader({
    src,
    quality,
    width: w
  })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ');

  if (!sizes && kind === 'w') {
    sizes = '100vw';
  }

  src = callLoader({
    src,
    quality,
    width: widths[last]
  });
  return {
    src,
    sizes,
    srcSet
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })));
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "lQNR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ atoms["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Blockquote; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ Code; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ Link; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ DesignSystemProvider["b" /* default */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Grid; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ GridItem; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ H1; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ H2; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ H3; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ Image; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ Li; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ Ol; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ P; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ Pre; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ ThemeProvider["a" /* default */]; });

// EXTERNAL MODULE: ./components/system/atoms.ts + 2 modules
var atoms = __webpack_require__("wvLi");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// CONCATENATED MODULE: ./components/system/Blockquote.tsx

var __jsx = external_react_default.a.createElement;


const Wrapper = styled_default.a.blockquote`
    position: relative;
    overflow: hidden;
    border-radius: ${atoms["a" /* default */].borderRadius.small};
    padding: ${atoms["a" /* default */].spacing.medium};
    line-height: ${atoms["a" /* default */].font.lineHeight.body};
    margin-top: ${atoms["a" /* default */].spacing.large};
    margin-bottom: ${atoms["a" /* default */].spacing.large};
    background-blend-mode: difference;
    & > :last-child {
      margin-bottom: unset !important;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: var(--text-color);
      opacity: 0.05;
    }
    }
`;
function Blockquote({
  children,
  id
}) {
  return __jsx(Wrapper, {
    id: id
  }, children);
}
// EXTERNAL MODULE: external "prism-react-renderer"
var external_prism_react_renderer_ = __webpack_require__("6ukF");
var external_prism_react_renderer_default = /*#__PURE__*/__webpack_require__.n(external_prism_react_renderer_);

// EXTERNAL MODULE: external "prism-react-renderer/themes/paleNight"
var paleNight_ = __webpack_require__("2reD");
var paleNight_default = /*#__PURE__*/__webpack_require__.n(paleNight_);

// CONCATENATED MODULE: ./components/system/Code.tsx

var Code_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Code_Wrapper = styled_default.a.pre`
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--accent-color);
    opacity: var(--accent-opacity);
    z-index: -1;
  }
`;
function Code(props) {
  const {
    children,
    className
  } = props;
  const language = className === null || className === void 0 ? void 0 : className.replace(/language-/, "");
  return Code_jsx(external_prism_react_renderer_default.a, _extends({}, external_prism_react_renderer_["defaultProps"], {
    theme: paleNight_default.a,
    code: children,
    language: language
  }), (_ref) => {
    let {
      className,
      style: {
        backgroundColor
      },
      tokens,
      getLineProps,
      getTokenProps
    } = _ref,
        otherStyles = _objectWithoutProperties(_ref.style, ["backgroundColor"]);

    return Code_jsx(Code_Wrapper, {
      className: className,
      style: _objectSpread(_objectSpread({
        backgroundColor: `transparent`
      }, otherStyles), {}, {
        borderRadius: atoms["a" /* default */].borderRadius.medium,
        padding: atoms["a" /* default */].spacing.medium
      })
    }, tokens.map((line, i) => Code_jsx("div", _extends({
      key: i
    }, getLineProps({
      line,
      key: i
    })), line.map((token, key) => Code_jsx("span", _extends({
      key: key
    }, getTokenProps({
      token,
      key
    })))))));
  });
}
// EXTERNAL MODULE: ./components/system/DesignSystemProvider.tsx
var DesignSystemProvider = __webpack_require__("G1t4");

// CONCATENATED MODULE: ./components/system/Grid.tsx

var Grid_jsx = external_react_default.a.createElement;

const Container = styled_default.a.div`
	display: grid;
	${props => props.columns && `grid-template-columns: repeat(${props.columns}, 1fr);`}
	${props => props.gap && `grid-gap: ${props.gap};`}
`;
function Grid({
  className,
  children,
  columns,
  gap
}) {
  return Grid_jsx(Container, {
    className: className,
    gap: gap,
    columns: columns
  }, children);
}
// CONCATENATED MODULE: ./components/system/GridItem.tsx

var GridItem_jsx = external_react_default.a.createElement;

const GridItem_Container = styled_default.a.section`
  --grid-column-start: ${props => {
  var _props$start;

  return (_props$start = props.start) !== null && _props$start !== void 0 ? _props$start : `auto`;
}};
  --grid-column-end: ${props => props.span ? `span ${props.span}` : props.end};
  grid-column-start: var(--grid-column-start);
  grid-column-end: var(--grid-column-end);


  }
`;
function GridItem({
  children,
  start,
  end,
  span
}) {
  return GridItem_jsx(GridItem_Container, {
    start: start,
    end: end,
    span: span
  }, children);
}
// CONCATENATED MODULE: ./components/system/H1.tsx

var H1_jsx = external_react_default.a.createElement;


const H1_Wrapper = styled_default.a.h1`
	font-size: ${atoms["a" /* default */].font.size.xlarge};
	font-weight: ${atoms["a" /* default */].font.weight.bold};
	line-height: ${atoms["a" /* default */].font.lineHeight.header};
	margin-bottom: ${atoms["a" /* default */].spacing.xxlarge};
`;
function H1({
  children,
  id
}) {
  return H1_jsx(H1_Wrapper, {
    id: id
  }, children);
}
// CONCATENATED MODULE: ./components/system/H2.tsx

var H2_jsx = external_react_default.a.createElement;


const H2_Wrapper = styled_default.a.h2`
	font-size: ${atoms["a" /* default */].font.size.large};
	font-weight: ${atoms["a" /* default */].font.weight.semi};
	line-height: ${atoms["a" /* default */].font.lineHeight.header};
	padding-top: ${atoms["a" /* default */].spacing.medium};
	margin-bottom: ${atoms["a" /* default */].spacing.large};
`;
function H2({
  children,
  id
}) {
  return H2_jsx(H2_Wrapper, {
    id: id
  }, children);
}
// CONCATENATED MODULE: ./components/system/H3.tsx

var H3_jsx = external_react_default.a.createElement;


const H3_Container = styled_default.a.h3`
	font-size: ${atoms["a" /* default */].font.size.medium};
	font-weight: ${atoms["a" /* default */].font.weight.bold};
	line-height: ${atoms["a" /* default */].font.lineHeight.body};
	margin-bottom: ${atoms["a" /* default */].spacing.xxsmall};
`;
function H3({
  children,
  id
}) {
  return H3_jsx(H3_Container, {
    id: id
  }, children);
}
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./components/system/Image.tsx

var Image_jsx = external_react_default.a.createElement;



const Image_Container = styled_default.a.div`
	border-radius: ${atoms["a" /* default */].borderRadius.small};
	background: white;
`;
function Image({
  id,
  src,
  alt
}) {
  return Image_jsx(Image_Container, null, Image_jsx(image_default.a, {
    alt: alt,
    src: `/uploads/${src}`,
    height: 320,
    width: 900,
    id: id
  }));
}
// CONCATENATED MODULE: ./components/system/Li.tsx

var Li_jsx = external_react_default.a.createElement;


const Li_Container = styled_default.a.li`
	line-height: ${atoms["a" /* default */].font.lineHeight.body};
	margin-bottom: ${atoms["a" /* default */].spacing.xsmall};
`;
function Li({
  children,
  id
}) {
  return Li_jsx(Li_Container, {
    id: id
  }, children);
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/system/Link.tsx

var Link_jsx = external_react_default.a.createElement;


const Link_Wrapper = styled_default.a.span`
	display: inline;
	cursor: pointer;
	& a:hover {
		text-decoration: underline;
	}
`;
function Link({
  children,
  id,
  href
}) {
  const isExternal = href.startsWith("http");
  return Link_jsx(Link_Wrapper, {
    id: id
  }, isExternal ? Link_jsx("a", {
    href: href,
    target: "_blank"
  }, children) : Link_jsx(link_default.a, {
    href: href,
    passHref: true
  }, Link_jsx("a", {
    href: href
  }, children)));
}
// CONCATENATED MODULE: ./components/system/Ol.tsx

var Ol_jsx = external_react_default.a.createElement;


const Ol_Container = styled_default.a.ol`
	margin-bottom: ${atoms["a" /* default */].spacing.large};
`;
function Ol({
  children,
  id
}) {
  return Ol_jsx(Ol_Container, {
    id: id
  }, children);
}
// CONCATENATED MODULE: ./components/system/P.tsx

var P_jsx = external_react_default.a.createElement;


const P_Wrapper = styled_default.a.div`
  font-size: ${atoms["a" /* default */].font.size.medium};
  font-weight: ${atoms["a" /* default */].font.weight.normal};
  line-height: ${atoms["a" /* default */].font.lineHeight.body};
  margin-bottom: ${atoms["a" /* default */].spacing.large};
  & a {
    font-weight: ${atoms["a" /* default */].font.weight.bold};
  }
`;
function P({
  children,
  id
}) {
  return P_jsx(P_Wrapper, {
    id: id
  }, children);
}
// CONCATENATED MODULE: ./components/system/Pre.tsx

var Pre_jsx = external_react_default.a.createElement;


const Pre_Container = styled_default.a.pre`
	font-family: ${atoms["a" /* default */].font.family.mono};
	line-height: ${atoms["a" /* default */].font.lineHeight.body};
	white-space: pre;
	margin-bottom: ${atoms["a" /* default */].spacing.medium};

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
`;
function Pre({
  children,
  id
}) {
  return Pre_jsx(Pre_Container, {
    id: id
  }, children);
}
// EXTERNAL MODULE: ./components/system/ThemeProvider.tsx + 1 modules
var ThemeProvider = __webpack_require__("OU9i");

// CONCATENATED MODULE: ./components/system/index.ts


















/***/ }),

/***/ "m/eG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_About; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ components_BookList; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ Footer; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Header; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Layout["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ components_GridSection; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ components_PostList; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ ThemeSettings; });

// UNUSED EXPORTS: List, ListDetail, ListItem

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/system/index.ts + 13 modules
var system = __webpack_require__("lQNR");

// CONCATENATED MODULE: ./components/About.tsx
var __jsx = external_react_["createElement"];




const About = () => __jsx(components_GridSection, {
  title: "About"
}, __jsx(system["n" /* P */], null, "Hello there. I'm a Product Designer living in Seattle, Washington and working on elevating product quality on", " ", __jsx(system["l" /* Link */], {
  href: "http://www.facebook.com/business"
}, "Facebook Ads & Business Products"), ".", __jsx("br", null), __jsx("br", null), "Previously, I was leading a design team at Facebook building a React-based proprietary design tool that helped scale our design systems across the company.", __jsx("br", null), __jsx("br", null), "I spend my time thinking about scaling products, teams, systems, and people to their full potential."));

/* harmony default export */ var components_About = (About);
// CONCATENATED MODULE: ./data/booklist.js
/* harmony default export */ var booklist = ([{
  "title": "Thinking in Systems",
  "author": "Donella Meadows",
  "url": "https://www.goodreads.com/book/show/3828902-thinking-in-systems"
}, {
  "title": "Everything I Never Told You",
  "author": "Celeste Eg",
  "url": "https://www.goodreads.com/book/show/18693763-everything-i-never-told-you"
}, {
  "title": "The Moment of Lift: How Empowering Women Changes the World",
  "author": "Melinda Gates",
  "url": "https://www.goodreads.com/book/show/40776644-the-moment-of-lift"
}, {
  "title": "The Most Fun We Ever Had",
  "author": "Claire Lombardo",
  "url": "https://www.goodreads.com/book/show/41880044-the-most-fun-we-ever-had"
}, {
  "title": "Good Strategy Bad Strategy: The Difference and Why It Matters",
  "author": "Richard Rumelt",
  "url": "https://www.goodreads.com/book/show/11721966-good-strategy-bad-strategy"
}]);
// CONCATENATED MODULE: ./components/BookList.tsx
var BookList_jsx = external_react_["createElement"];





const BookList = () => BookList_jsx(components_GridSection, {
  title: "Bookshelf"
}, BookList_jsx(system["e" /* Grid */], null, BookList_jsx(system["n" /* P */], null, "I love to read in my free time. Here are a few things I\u2019ve read recently that have stuck with me:"), booklist.map(({
  title,
  author,
  url
}, i) => {
  return BookList_jsx("div", {
    key: i
  }, BookList_jsx(system["l" /* Link */], {
    href: url
  }, BookList_jsx(system["e" /* Grid */], null, BookList_jsx(system["i" /* H3 */], null, title), BookList_jsx(system["n" /* P */], null, "by ", author))));
})));

/* harmony default export */ var components_BookList = (BookList);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// EXTERNAL MODULE: ./data/site.js
var site = __webpack_require__("nKeF");

// CONCATENATED MODULE: ./components/Footer.tsx

var Footer_jsx = external_react_default.a.createElement;



const Section = styled_default.a.footer`
  padding: ${system["a" /* Atoms */].spacing.large} 0;
`;
function Footer() {
  return Footer_jsx(Section, null, Footer_jsx(system["n" /* P */], null, "Designed and built by me. Find me on", " ", Footer_jsx(system["l" /* Link */], {
    href: site["a" /* default */].twitter
  }, "Twitter"), " or", " ", Footer_jsx(system["l" /* Link */], {
    href: site["a" /* default */].github
  }, "Github"), "."));
}
// CONCATENATED MODULE: ./components/Header.tsx

var Header_jsx = external_react_default.a.createElement;


const Header_Section = styled_default.a.header`
  padding-top: ${system["a" /* Atoms */].spacing.xxlarge};
  margin-top: ${system["a" /* Atoms */].spacing.xlarge};
`;
function Header({
  children
}) {
  return Header_jsx(system["e" /* Grid */], {
    columns: 6,
    gap: system["a" /* Atoms */].grid.gap
  }, Header_jsx(system["f" /* GridItem */], {
    span: 5
  }, Header_jsx(Header_Section, null, Header_jsx(system["g" /* H1 */], null, children))));
}
// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__("apO0");

// CONCATENATED MODULE: ./components/GridSection.tsx

var GridSection_jsx = external_react_default.a.createElement;


const GridSection = ({
  children,
  title
}) => GridSection_jsx(system["e" /* Grid */], null, GridSection_jsx(system["h" /* H2 */], null, " ", title), children);

/* harmony default export */ var components_GridSection = (GridSection);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/ListItem.tsx
var ListItem_jsx = external_react_default.a.createElement;



const ListItem = ({
  data
}) => ListItem_jsx(link_default.a, {
  href: "/users/[id]",
  as: `/users/${data.id}`
}, ListItem_jsx("a", null, data.id, ": ", data.name));

/* harmony default export */ var components_ListItem = (ListItem);
// CONCATENATED MODULE: ./components/List.tsx
var List_jsx = external_react_["createElement"];



const List = ({
  items
}) => List_jsx("ul", null, items.map(item => List_jsx("li", {
  key: item.id
}, List_jsx(components_ListItem, {
  data: item
}))));

/* harmony default export */ var components_List = (List);
// CONCATENATED MODULE: ./components/ListDetail.tsx
var ListDetail_jsx = external_react_["createElement"];


const ListDetail = ({
  item: user
}) => ListDetail_jsx("div", null, ListDetail_jsx("h1", null, "Detail for ", user.name), ListDetail_jsx("p", null, "ID: ", user.id));

/* harmony default export */ var components_ListDetail = (ListDetail);
// CONCATENATED MODULE: ./components/PostList.tsx
var PostList_jsx = external_react_["createElement"];




const PostList = ({
  data: posts
}) => PostList_jsx(components_GridSection, {
  title: "Writing"
}, PostList_jsx(system["e" /* Grid */], null, posts.map(({
  slug,
  frontMatter: {
    title,
    excerpt,
    url
  }
}) => {
  if (url) {
    return PostList_jsx("div", {
      key: title
    }, PostList_jsx(system["l" /* Link */], {
      href: url
    }, PostList_jsx(system["e" /* Grid */], null, PostList_jsx(system["i" /* H3 */], null, title), PostList_jsx(system["n" /* P */], null, excerpt))));
  } else {
    return PostList_jsx("div", {
      key: slug
    }, PostList_jsx(system["l" /* Link */], {
      as: `/blog/${slug}`,
      href: `/blog/${slug}`
    }, PostList_jsx(system["e" /* Grid */], null, PostList_jsx(system["i" /* H3 */], null, " ", title), PostList_jsx(system["n" /* P */], null, excerpt))));
  }
})));

/* harmony default export */ var components_PostList = (PostList);
// EXTERNAL MODULE: ./components/system/ThemeProvider.tsx + 1 modules
var ThemeProvider = __webpack_require__("OU9i");

// CONCATENATED MODULE: ./components/system/Icon.tsx

var Icon_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ICONS = {
  flower: `M20.0644 4.91169L19.6148 7.27226L20.9658 5.28551C22.4253 3.13923 25.4776 2.85112 27.3129 4.68641C29.1482 6.5217 28.8601 9.57402 26.7138 11.0335L24.7253 12.3857L27.0883 11.9356C29.638 11.4499 32 13.4045 32 16C32 18.5955 29.638 20.5501 27.0883 20.0644L24.7264 19.6146L26.715 20.9668C28.8613 22.4262 29.1494 25.4786 27.3141 27.3139C25.4788 29.1491 22.4265 28.861 20.967 26.7148L19.6144 24.7257L20.0644 27.0883C20.5501 29.638 18.5955 32 16 32C13.4045 32 11.4499 29.638 11.9356 27.0883L12.3856 24.7257L11.033 26.7148C9.57354 28.861 6.52122 29.1491 4.68593 27.3139C2.85063 25.4786 3.13874 22.4262 5.28502 20.9668L7.27357 19.6146L4.91169 20.0644C2.36204 20.5501 0 18.5955 0 16C0 13.4045 2.36204 11.4499 4.91169 11.9356L7.27469 12.3857L5.28622 11.0335C3.13994 9.57402 2.85183 6.5217 4.68712 4.68641C6.52241 2.85112 9.57473 3.13923 11.0342 5.28551L12.3852 7.27225L11.9356 4.91169C11.4499 2.36204 13.4045 0 16 0C18.5955 0 20.5501 2.36204 20.0644 4.91169ZM17.4262 8.07371L18.0998 4.53747C18.3507 3.22027 17.3409 2 16 2C14.6591 2 13.6493 3.22027 13.9002 4.53747L14.5737 8.07338C15.5213 7.94801 16.479 7.94825 17.4262 8.07371ZM16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22ZM23.9263 17.4262L27.4625 18.0998C28.7797 18.3507 30 17.3409 30 16C30 14.6591 28.7797 13.6493 27.4625 13.9002L23.9266 14.5737C24.052 15.5213 24.0518 16.479 23.9263 17.4262ZM4.53747 18.0998L8.07371 17.4262C7.94825 16.479 7.94801 15.5213 8.07338 14.5737L4.53747 13.9002C3.22027 13.6493 2 14.6591 2 16C2 17.3409 3.22027 18.3507 4.53747 18.0998ZM18.0998 27.4625L17.4262 23.9263C16.479 24.0518 15.5213 24.052 14.5737 23.9266L13.9002 27.4625C13.6493 28.7797 14.6591 30 16 30C17.3409 30 18.3507 28.7797 18.0998 27.4625ZM20.5966 22.6133L22.6208 25.5901C23.3748 26.6989 24.9517 26.8478 25.8999 25.8996C26.848 24.9515 26.6992 23.3746 25.5904 22.6206L22.6138 20.5966C22.0325 21.3553 21.3551 22.0323 20.5966 22.6133ZM6.41084 9.37964L9.38763 11.4039C9.96867 10.6454 10.6457 9.968 11.4044 9.38664L9.38035 6.41013C8.62636 5.30132 7.04948 5.15248 6.10134 6.10063C5.15319 7.04877 5.30203 8.62565 6.41084 9.37964ZM22.6124 11.4039L25.5892 9.37964C26.698 8.62565 26.8468 7.04877 25.8987 6.10063C24.9505 5.15248 23.3736 5.30132 22.6196 6.41013L20.5956 9.38664C21.3543 9.968 22.0313 10.6454 22.6124 11.4039ZM9.37916 25.5901L11.4034 22.6133C10.6449 22.0323 9.96751 21.3553 9.38616 20.5966L6.40964 22.6206C5.30084 23.3746 5.15199 24.9515 6.10014 25.8996C7.04828 26.8478 8.62517 26.6989 9.37916 25.5901Z`,
  leaf: `M9.23042 0.354492L9.74209 1.88949C10.5971 4.45459 11.9185 7.61661 12.7412 9.49043L25.1647 3.83052L20.2134 17.0528C22.0233 17.8182 25.0914 19.0499 27.5825 19.8356L29.1539 20.3313L27.9887 21.4964C26.1005 23.3847 23.4398 24.5454 20.972 25.2443C18.9408 25.8196 16.9638 26.1033 15.5011 26.2036C15.5492 26.5744 15.6636 27.1182 15.9032 27.8777L16.305 29.1516L14.9695 29.1783C14.1833 29.194 13.3707 28.8454 12.6643 28.4361C11.9276 28.0094 11.1625 27.4304 10.436 26.8111C9.27264 25.8194 8.14768 24.672 7.31113 23.7443L2.02746 29.028L0.613247 27.6137L5.88432 22.3427C4.9757 21.5032 3.91041 20.441 2.97448 19.35C2.32658 18.5948 1.72086 17.8028 1.27172 17.0447C0.841184 16.318 0.472656 15.4893 0.472656 14.6941L0.472657 13.3066L1.78888 13.7454C2.56785 14.005 3.12765 14.1343 3.51158 14.1924C3.58554 12.6984 3.83585 10.6865 4.38164 8.62463C5.04718 6.11038 6.18336 3.40155 8.0863 1.49862L9.23042 0.354492ZM4.09023 14.2271C4.08925 14.2272 4.08817 14.2274 4.08699 14.2276C4.11133 14.2211 4.11564 14.2231 4.09023 14.2271ZM15.48 25.6562C15.4842 25.6326 15.4859 25.6366 15.4795 25.6592C15.4797 25.6581 15.4798 25.6571 15.48 25.6562ZM6.31505 9.13641C5.6929 11.4867 5.48708 13.7687 5.48708 15.1247V15.5389L5.19419 15.8318C4.92611 16.0999 4.58184 16.1742 4.40216 16.2026C4.17221 16.2389 3.90939 16.2422 3.61875 16.2182C3.45239 16.2044 3.26842 16.181 3.06539 16.1461C3.42767 16.7347 3.92357 17.3847 4.49247 18.0478C5.70701 19.4636 7.17533 20.8488 8.1523 21.6862L8.21189 21.7373L8.26279 21.797C9.05906 22.7319 10.3793 24.1347 11.7334 25.289C12.3642 25.8268 12.982 26.293 13.542 26.6317C13.5107 26.4278 13.4906 26.2432 13.4801 26.0763C13.4622 25.7911 13.4706 25.5329 13.5107 25.307C13.5425 25.1276 13.6218 24.7968 13.8809 24.5376L14.1656 24.2529L14.5681 24.2449C15.8896 24.2185 18.1203 23.9733 20.427 23.32C22.1555 22.8305 23.8642 22.1292 25.2606 21.1663C22.6072 20.2318 19.8014 19.0635 18.5409 18.5107L17.6741 18.1306L21.5975 7.65344L11.7422 12.1433L11.3281 11.2322C10.7297 9.9156 9.45472 6.969 8.43781 4.2067C7.47314 5.61872 6.78442 7.36324 6.31505 9.13641Z`,
  sun: `M16 24C20.4182 24 24 20.4182 24 16C24 11.5817 20.4182 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4182 11.5817 24 16 24ZM16 27C16.5523 27 17 27.4478 17 28V31C17 31.5522 16.5523 32 16 32C15.4477 32 15 31.5522 15 31V28C15 27.4478 15.4477 27 16 27ZM22.7622 25.7448L22.866 25.8924L24.366 28.4904C24.6422 28.9686 24.4782 29.5802 24 29.8564C23.5749 30.1019 23.0445 29.9996 22.7378 29.638L22.634 29.4904L21.134 26.8924C20.8578 26.414 21.0218 25.8024 21.5 25.5262C21.9251 25.2809 22.4555 25.383 22.7622 25.7448ZM10.5 25.5262C10.9783 25.8024 11.1422 26.414 10.866 26.8924L9.36604 29.4904C9.0899 29.9686 8.4783 30.1326 8.00002 29.8564C7.52172 29.5802 7.35784 28.9686 7.63398 28.4904L9.13398 25.8924C9.41012 25.414 10.0217 25.2502 10.5 25.5262ZM6.47372 21.5C6.74986 21.9782 6.586 22.5898 6.1077 22.866L3.50962 24.366C3.03132 24.6422 2.41974 24.4782 2.1436 24C1.86745 23.5218 2.03132 22.9102 2.50962 22.634L5.1077 21.134C5.586 20.8578 6.19758 21.0218 6.47372 21.5ZM25.5262 21.5C25.8024 21.0218 26.414 20.8578 26.8924 21.134L29.4904 22.634C29.9686 22.9102 30.1326 23.5218 29.8564 24C29.5802 24.4782 28.9686 24.6422 28.4904 24.366L25.8924 22.866C25.414 22.5898 25.2502 21.9782 25.5262 21.5ZM16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10ZM4 15C4.55228 15 5 15.4477 5 16C5 16.5523 4.55228 17 4 17H1C0.447716 17 0 16.5523 0 16C0 15.4477 0.447716 15 1 15H4ZM31 15C31.5522 15 32 15.4477 32 16C32 16.4909 31.6462 16.8992 31.1797 16.9839L31 17H28C27.4478 17 27 16.5523 27 16C27 15.5091 27.3538 15.1008 27.8203 15.0161L28 15H31ZM29.8564 8C30.1019 8.42516 29.9996 8.95562 29.638 9.26219L29.4904 9.36602L26.8924 10.866C26.414 11.1422 25.8024 10.9783 25.5262 10.5C25.2809 10.0748 25.383 9.54438 25.7448 9.23781L25.8924 9.13398L28.4904 7.63398C28.9686 7.35782 29.5802 7.5217 29.8564 8ZM3.50962 7.63398L6.1077 9.13398C6.586 9.41012 6.74986 10.0217 6.47372 10.5C6.19758 10.9783 5.586 11.1422 5.1077 10.866L2.50962 9.36602C2.03134 9.08988 1.86746 8.47828 2.1436 8C2.41974 7.5217 3.03134 7.35782 3.50962 7.63398ZM9.36602 2.50962L10.866 5.10768C11.1422 5.58598 10.9783 6.19758 10.5 6.47372C10.0217 6.74986 9.41012 6.58598 9.13398 6.10768L7.63398 3.50962C7.35784 3.03132 7.5217 2.41972 8 2.14358C8.4783 1.86744 9.08988 2.03132 9.36602 2.50962ZM24 2.14358C24.4252 2.38904 24.6019 2.89955 24.4419 3.34589L24.366 3.50962L22.866 6.10768C22.5898 6.58598 21.9784 6.74986 21.5 6.47372C21.0749 6.22824 20.8981 5.71775 21.0581 5.27141L21.134 5.10768L22.634 2.50962C22.9102 2.03132 23.5218 1.86744 24 2.14358ZM16 0C16.4909 0 16.8992 0.353751 16.9839 0.820249L17 1V4C17 4.55228 16.5523 5 16 5C15.5091 5 15.1008 4.64625 15.0161 4.17975L15 4V1C15 0.447716 15.4477 0 16 0Z`,
  snowflake: `M16.9456 0.888184H15.0566V4.19907L12.9279 2.07031L11.5137 3.48452L15.0566 7.02749V13.719L10.3213 8.98364V3.979H8.32127V6.98362L5.98413 4.64648L4.64844 5.98217L6.98801 8.32175H3.97852V10.3217H8.98798L13.7214 15.0552H7.02456L3.48452 11.5151L2.07031 12.9293L4.19614 15.0552H0.888672V16.9441L4.19714 16.9441L2.07031 19.0709L3.48452 20.4851L7.02554 16.9441L13.7238 16.9442L8.98922 21.6787H3.98047V23.6787H6.98922L4.65039 26.0175L5.98608 27.3532L8.32321 25.0161V28.0214H10.3232V23.016L15.0572 18.282L15.0569 24.974L11.5156 28.5153L12.9298 29.9295L15.0568 27.8025L15.0566 31.111H16.9456L16.9458 27.8039L19.0714 29.9295L20.4856 28.5153L16.9459 24.9756L16.9462 18.2838L21.6797 23.0172V28.0205H23.6797V25.0172L26.0156 27.3531L27.3513 26.0174L25.0116 23.6777H28.0224V21.6777H23.0115L18.2778 16.9441H24.9776L28.5182 20.4846L29.9324 19.0704L27.8061 16.9441H31.1135V15.0552H27.8061L29.9324 12.9288L28.5182 11.5146L24.9777 15.0552H18.2821L23.016 10.3213H28.0244V8.32125H25.016L27.3551 5.98217L26.0195 4.64648L23.6816 6.98432V3.97852H21.6816V8.98431L16.9456 13.7203V7.02255L20.4837 3.48452L19.0695 2.07031L16.9456 4.19414V0.888184Z`,
  "moon-filled": `M26.6468 27.9436C27.1246 27.5176 27.5764 27.0632 28 26.5832C28.1706 26.39 28.3366 26.1926 28.4976 25.9914C28.3326 25.997 28.1666 26 28 26C27.303 26 26.6178 25.949 25.9482 25.8508C19.1889 24.858 14 19.035 14 12C14 8.15866 15.5471 4.67864 18.0522 2.14908C18.6512 1.54418 19.305 0.993646 20.0056 0.505506C19.1472 0.28426 18.261 0.132451 17.3533 0.0564248C16.9072 0.0190595 16.4558 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C20.0884 32 23.8186 30.4666 26.6468 27.9436Z`,
  "moon-outline": `M26.6468 27.9436C27.1246 27.5176 27.5764 27.0632 28 26.5832C28.1706 26.39 28.3366 26.1926 28.4976 25.9914C28.3326 25.997 28.1666 26 28 26C27.303 26 26.6178 25.949 25.9482 25.8508C19.1889 24.858 14 19.035 14 12C14 8.15866 15.5471 4.67864 18.0522 2.14908C18.6512 1.54418 19.305 0.993646 20.0056 0.505506C19.1472 0.28426 18.261 0.132451 17.3533 0.0564248C16.9072 0.0190595 16.4558 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C20.0884 32 23.8186 30.4666 26.6468 27.9436ZM23.9948 27.4946C21.7274 29.075 18.9721 30 16 30C8.26802 30 2 23.732 2 16C2 8.43448 8.00102 2.27058 15.5027 2.00866C13.3121 4.74552 12 8.21946 12 12C12 19.4535 17.0966 25.7166 23.9948 27.4946Z`,
  toggle: `M16 29V16V3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29ZM4.71271 27.3401C7.60603 30.22 11.5951 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C11.5883 0 7.59358 1.78555 4.69918 4.67342C4.69058 4.682 4.682 4.69058 4.67342 4.69918C1.78556 7.59358 0 11.5883 0 16C0 20.414 1.78738 24.4105 4.67785 27.3053C4.68066 27.3081 4.68348 27.3109 4.68629 27.3137C4.69509 27.3225 4.70389 27.3313 4.71271 27.3401Z`
};
function Icon({
  color,
  size = 32,
  name,
  onClick,
  opacity = 1,
  rotation,
  onMouseOver,
  onMouseOut,
  style
}) {
  return Icon_jsx("svg", {
    style: _objectSpread({
      transform: `rotate(${rotation}deg)`,
      transition: `transform 200ms ease-in-out`
    }, style),
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: color,
    onClick: onClick,
    opacity: opacity,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut
  }, Icon_jsx("path", {
    d: ICONS[name]
  }));
}
// CONCATENATED MODULE: ./components/ModeSwitcher.tsx

var ModeSwitcher_jsx = external_react_default.a.createElement;


function ThemeSwitcher() {
  const {
    mode,
    toggleMode
  } = Object(ThemeProvider["b" /* useThemeContext */])();
  return ModeSwitcher_jsx(Icon, {
    name: "toggle",
    onClick: toggleMode,
    size: 24,
    rotation: mode === "dark" ? 180 : 0,
    color: "var(--text-color)",
    style: {
      cursor: "pointer"
    }
  });
}
// CONCATENATED MODULE: ./components/ThemeSettings.tsx

var ThemeSettings_jsx = external_react_default.a.createElement;



const Wrapper = styled_default.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > :not(:last-child) {
    margin-right: ${system["a" /* Atoms */].spacing.medium};
  }
`;
function ThemeSettings() {
  return ThemeSettings_jsx(Wrapper, null, ThemeSettings_jsx(ThemeSwitcher, null));
}
// CONCATENATED MODULE: ./components/index.tsx













/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nKeF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  "title": "Sean Blanton",
  "role": "Product Designer & Writer",
  "description": "Sean Blanton is a Product Designer living in Seattle, Washington building design systems and tools at Facebook",
  "twitter": "https://www.twitter.com/seancblanton",
  "github": "https://www.github.com/seanblanton"
});

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wI0e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  title: "Creating Stable Design Systems at Scale",
  date: "2020-07-20",
  url: 'https://medium.com/facebook-design-business-tools/creating-stable-design-systems-at-scale-daa68a3c6b14',
  excerpt: "Thinking about how scale influences complexity"
}]);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wvLi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./components/system/colors.ts
const colors = {
  red10: "#FAE3E3",
  red50: "#D20802",
  red90: "#590025",
  yellow10: "#EFE8D7",
  yellow50: "#F6D88A",
  yellow90: "#590025",
  blue10: "#EDF0F3",
  blue50: "#02394A",
  blue90: "#002A5A",
  teal50: "#164249",
  green90: "#123D37",
  white: "#FFFFFF"
};
/* harmony default export */ var system_colors = (colors);
// CONCATENATED MODULE: ./components/system/theme.ts

const spring = {
  background: {
    light: system_colors.red10,
    dark: system_colors.teal50
  },
  text: {
    primary: {
      light: system_colors.red90,
      dark: system_colors.white
    },
    secondary: {
      light: system_colors.red90,
      dark: system_colors.white
    },
    accent: {
      light: system_colors.red50,
      dark: system_colors.yellow10
    }
  }
};
const summer = {
  background: {
    light: system_colors.yellow10,
    dark: system_colors.green90
  },
  text: {
    primary: {
      light: system_colors.blue90,
      dark: system_colors.white
    },
    secondary: {
      light: system_colors.blue90,
      dark: system_colors.white
    },
    accent: {
      light: system_colors.red50,
      dark: system_colors.white
    }
  }
};
const autumn = {
  background: {
    light: system_colors.yellow10,
    dark: system_colors.red90
  },
  text: {
    primary: {
      light: system_colors.red90,
      dark: system_colors.white
    },
    secondary: {
      light: system_colors.red90,
      dark: system_colors.white
    },
    accent: {
      light: system_colors.red50,
      dark: system_colors.yellow10
    }
  }
};
const winter = {
  background: {
    light: system_colors.blue10,
    dark: system_colors.blue50
  },
  text: {
    primary: {
      light: system_colors.blue90,
      dark: system_colors.white
    },
    secondary: {
      light: system_colors.blue90,
      dark: system_colors.white
    },
    accent: {
      light: system_colors.red50,
      dark: system_colors.yellow10
    }
  }
};
/* harmony default export */ var theme = ({
  spring,
  summer,
  autumn,
  winter
});
// CONCATENATED MODULE: ./components/system/atoms.ts

const unit = 1.25;
const measure = {
  xs: "28ch",
  s: "45ch",
  m: "55ch",
  l: "65ch",
  xl: "75ch"
};
const scale = {
  xxsmall: 0.25,
  xsmall: 0.5,
  small: 0.75,
  medium: 1,
  large: 1.5,
  xlarge: 3,
  xxlarge: 4
};
/* harmony default export */ var atoms = __webpack_exports__["a"] = ({
  unit,
  breakpoints: {
    small: `24em`,
    medium: `40em`,
    large: "56em"
  },
  borderRadius: {
    small: `${scale.small}rem`,
    medium: `${scale.medium}rem`,
    large: `${scale.large}rem`,
    xlarge: `${scale.xlarge}rem`
  },
  font: {
    family: {
      sans: "Raleway, -apple-system, system-ui, BlinkMacSystemFont, sans-serif",
      mono: "Consolas, Monaco,'Lucida Console', 'Liberation Mono', 'Monaco', monospace"
    },
    lineHeight: {
      header: 1.15,
      body: 1.5
    },
    size: {
      small: `${scale.small}rem`,
      medium: `${scale.medium}rem`,
      large: `${scale.large}rem`,
      xlarge: `${scale.xlarge}rem`
    },
    weight: {
      normal: 400,
      semi: 600,
      bold: 700
    }
  },
  grid: {
    gap: `var(--grid-column-gap)`,
    columns: `var(--grid-template-columns)`,
    gridSection: `var(--grid-section)`
  },
  measure,
  scale,
  spacing: Object.assign({}, ...Object.keys(scale).map(n => ({
    [n]: `${unit * scale[n]}rem`
  }))),
  color: theme
});

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });