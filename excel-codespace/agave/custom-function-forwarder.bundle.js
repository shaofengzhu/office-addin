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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index-custom-function-forwarder.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@microsoft/load-themed-styles/lib-es6/index.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@microsoft/load-themed-styles/lib-es6/index.js ***!
  \**********************************************************************/
/*! exports provided: loadStyles, configureLoadStyles, configureRunMode, flush, loadTheme, clearStyles, detokenize, splitStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStyles", function() { return loadStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureLoadStyles", function() { return configureLoadStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureRunMode", function() { return configureRunMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return loadTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStyles", function() { return clearStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detokenize", function() { return detokenize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitStyles", function() { return splitStyles; });
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, state, { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, state, { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                typeof DEBUG !== 'undefined' &&
                DEBUG) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // eslint-disable-line @rushstack/no-null
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-0.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-0.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-0\"",
            src: "url('" + baseUrl + "fabric-icons-0-2a8db1f5.woff') format('woff')"
        },
        icons: {
            InternetSharing: '\uE704',
            Brightness: '\uE706',
            MapPin: '\uE707',
            Airplane: '\uE709',
            Tablet: '\uE70A',
            QuickNote: '\uE70B',
            Video: '\uE714',
            People: '\uE716',
            Phone: '\uE717',
            Pin: '\uE718',
            Shop: '\uE719',
            Stop: '\uE71A',
            Link: '\uE71B',
            AllApps: '\uE71D',
            Zoom: '\uE71E',
            ZoomOut: '\uE71F',
            Microphone: '\uE720',
            Camera: '\uE722',
            Attach: '\uE723',
            Send: '\uE724',
            FavoriteList: '\uE728',
            PageSolid: '\uE729',
            Forward: '\uE72A',
            Back: '\uE72B',
            Refresh: '\uE72C',
            Lock: '\uE72E',
            ReportHacked: '\uE730',
            EMI: '\uE731',
            MiniLink: '\uE732',
            Blocked: '\uE733',
            ReadingMode: '\uE736',
            Favicon: '\uE737',
            Remove: '\uE738',
            Checkbox: '\uE739',
            CheckboxComposite: '\uE73A',
            CheckboxFill: '\uE73B',
            CheckboxIndeterminate: '\uE73C',
            CheckboxCompositeReversed: '\uE73D',
            BackToWindow: '\uE73F',
            FullScreen: '\uE740',
            Print: '\uE749',
            Up: '\uE74A',
            Down: '\uE74B',
            OEM: '\uE74C',
            Save: '\uE74E',
            ReturnKey: '\uE751',
            Cloud: '\uE753',
            Flashlight: '\uE754',
            CommandPrompt: '\uE756',
            Sad: '\uE757',
            RealEstate: '\uE758',
            SIPMove: '\uE759',
            EraseTool: '\uE75C',
            GripperTool: '\uE75E',
            Dialpad: '\uE75F',
            PageLeft: '\uE760',
            PageRight: '\uE761',
            MultiSelect: '\uE762',
            KeyboardClassic: '\uE765',
            Play: '\uE768',
            Pause: '\uE769',
            InkingTool: '\uE76D',
            Emoji2: '\uE76E',
            GripperBarHorizontal: '\uE76F',
            System: '\uE770',
            Personalize: '\uE771',
            SearchAndApps: '\uE773',
            Globe: '\uE774',
            EaseOfAccess: '\uE776',
            ContactInfo: '\uE779',
            Unpin: '\uE77A',
            Contact: '\uE77B',
            Memo: '\uE77C',
            IncomingCall: '\uE77E',
            Paste: '\uE77F',
            WindowsLogo: '\uE782',
            Error: '\uE783',
            GripperBarVertical: '\uE784',
            Unlock: '\uE785',
            Slideshow: '\uE786',
            AutoEnhanceOn: '\uE78D',
            AutoEnhanceOff: '\uE78E',
            Color: '\uE790',
            SaveAs: '\uE792',
            Light: '\uE793',
            Filters: '\uE795',
            AspectRatio: '\uE799',
            Contrast: '\uE7A1',
            Redo: '\uE7A6',
            Crop: '\uE7A8',
            PhotoCollection: '\uE7AA',
            Album: '\uE7AB',
            Rotate: '\uE7AD',
            PanoIndicator: '\uE7B0',
            Translate: '\uE7B2',
            RedEye: '\uE7B3',
            ThumbnailView: '\uE7B6',
            Package: '\uE7B8',
            Telemarketer: '\uE7B9',
            Warning: '\uE7BA'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-0.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-1.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-1.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-1\"",
            src: "url('" + baseUrl + "fabric-icons-1-360e3054.woff') format('woff')"
        },
        icons: {
            Financial: '\uE7BB',
            Education: '\uE7BE',
            ShoppingCart: '\uE7BF',
            Train: '\uE7C0',
            Move: '\uE7C2',
            TouchPointer: '\uE7C9',
            Merge: '\uE7D5',
            TurnRight: '\uE7DB',
            Ferry: '\uE7E3',
            Highlight: '\uE7E6',
            PowerButton: '\uE7E8',
            Tab: '\uE7E9',
            Admin: '\uE7EF',
            TVMonitor: '\uE7F4',
            Speakers: '\uE7F5',
            Game: '\uE7FC',
            UnstackSelected: '\uE7FE',
            StackIndicator: '\uE7FF',
            Nav2DMapView: '\uE800',
            StreetsideSplitMinimize: '\uE802',
            Car: '\uE804',
            Bus: '\uE806',
            EatDrink: '\uE807',
            SeeDo: '\uE808',
            LocationCircle: '\uE80E',
            Home: '\uE80F',
            SwitcherStartEnd: '\uE810',
            ParkingLocation: '\uE811',
            IncidentTriangle: '\uE814',
            Touch: '\uE815',
            MapDirections: '\uE816',
            CaretHollow: '\uE817',
            CaretSolid: '\uE818',
            History: '\uE81C',
            Location: '\uE81D',
            MapLayers: '\uE81E',
            SearchNearby: '\uE820',
            Work: '\uE821',
            Recent: '\uE823',
            Hotel: '\uE824',
            Bank: '\uE825',
            LocationDot: '\uE827',
            Dictionary: '\uE82D',
            ChromeBack: '\uE830',
            FolderOpen: '\uE838',
            PinnedFill: '\uE842',
            RevToggleKey: '\uE845',
            USB: '\uE88E',
            Previous: '\uE892',
            Next: '\uE893',
            Sync: '\uE895',
            Help: '\uE897',
            Emoji: '\uE899',
            MailForward: '\uE89C',
            ClosePane: '\uE89F',
            OpenPane: '\uE8A0',
            PreviewLink: '\uE8A1',
            ZoomIn: '\uE8A3',
            Bookmarks: '\uE8A4',
            Document: '\uE8A5',
            ProtectedDocument: '\uE8A6',
            OpenInNewWindow: '\uE8A7',
            MailFill: '\uE8A8',
            ViewAll: '\uE8A9',
            Switch: '\uE8AB',
            Rename: '\uE8AC',
            Go: '\uE8AD',
            Remote: '\uE8AF',
            SelectAll: '\uE8B3',
            Orientation: '\uE8B4',
            Import: '\uE8B5',
            Picture: '\uE8B9',
            ChromeClose: '\uE8BB',
            ShowResults: '\uE8BC',
            Message: '\uE8BD',
            CalendarDay: '\uE8BF',
            CalendarWeek: '\uE8C0',
            MailReplyAll: '\uE8C2',
            Read: '\uE8C3',
            Cut: '\uE8C6',
            PaymentCard: '\uE8C7',
            Copy: '\uE8C8',
            Important: '\uE8C9',
            MailReply: '\uE8CA',
            GotoToday: '\uE8D1',
            Font: '\uE8D2',
            FontColor: '\uE8D3',
            FolderFill: '\uE8D5',
            Permissions: '\uE8D7',
            DisableUpdates: '\uE8D8',
            Unfavorite: '\uE8D9',
            Italic: '\uE8DB',
            Underline: '\uE8DC',
            Bold: '\uE8DD',
            MoveToFolder: '\uE8DE',
            Dislike: '\uE8E0',
            Like: '\uE8E1',
            AlignCenter: '\uE8E3',
            OpenFile: '\uE8E5',
            FontDecrease: '\uE8E7'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-1.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-10.js":
/*!**************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-10.js ***!
  \**************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-10\"",
            src: "url('" + baseUrl + "fabric-icons-10-1ca3e4a1.woff') format('woff')"
        },
        icons: {
            HighlightMappedShapes: '\uF2A1',
            TextCallout: '\uF2A2',
            IconSetsFlag: '\uF2A4',
            VisioLogo: '\uF2A7',
            VisioLogoFill: '\uF2A8',
            VisioDocument: '\uF2A9',
            TimelineProgress: '\uF2AA',
            TimelineDelivery: '\uF2AB',
            Backlog: '\uF2AC',
            TeamFavorite: '\uF2AD',
            TaskGroup: '\uF2AE',
            TaskGroupMirrored: '\uF2AF',
            ScopeTemplate: '\uF2B0',
            AssessmentGroupTemplate: '\uF2B1',
            NewTeamProject: '\uF2B2',
            CommentAdd: '\uF2B3',
            CommentNext: '\uF2B4',
            CommentPrevious: '\uF2B5',
            ShopServer: '\uF2B6',
            LocaleLanguage: '\uF2B7',
            QueryList: '\uF2B8',
            UserSync: '\uF2B9',
            UserPause: '\uF2BA',
            StreamingOff: '\uF2BB',
            ArrowTallUpLeft: '\uF2BD',
            ArrowTallUpRight: '\uF2BE',
            ArrowTallDownLeft: '\uF2BF',
            ArrowTallDownRight: '\uF2C0',
            FieldEmpty: '\uF2C1',
            FieldFilled: '\uF2C2',
            FieldChanged: '\uF2C3',
            FieldNotChanged: '\uF2C4',
            RingerOff: '\uF2C5',
            PlayResume: '\uF2C6',
            BulletedList2: '\uF2C7',
            BulletedList2Mirrored: '\uF2C8',
            ImageCrosshair: '\uF2C9',
            GitGraph: '\uF2CA',
            Repo: '\uF2CB',
            RepoSolid: '\uF2CC',
            FolderQuery: '\uF2CD',
            FolderList: '\uF2CE',
            FolderListMirrored: '\uF2CF',
            LocationOutline: '\uF2D0',
            POISolid: '\uF2D1',
            CalculatorNotEqualTo: '\uF2D2',
            BoxSubtractSolid: '\uF2D3',
            BoxAdditionSolid: '\uF2D4',
            BoxMultiplySolid: '\uF2D5',
            BoxPlaySolid: '\uF2D6',
            BoxCheckmarkSolid: '\uF2D7',
            CirclePauseSolid: '\uF2D8',
            CirclePause: '\uF2D9',
            MSNVideosSolid: '\uF2DA',
            CircleStopSolid: '\uF2DB',
            CircleStop: '\uF2DC',
            NavigateBack: '\uF2DD',
            NavigateBackMirrored: '\uF2DE',
            NavigateForward: '\uF2DF',
            NavigateForwardMirrored: '\uF2E0',
            UnknownSolid: '\uF2E1',
            UnknownMirroredSolid: '\uF2E2',
            CircleAddition: '\uF2E3',
            CircleAdditionSolid: '\uF2E4',
            FilePDB: '\uF2E5',
            FileTemplate: '\uF2E6',
            FileSQL: '\uF2E7',
            FileJAVA: '\uF2E8',
            FileASPX: '\uF2E9',
            FileCSS: '\uF2EA',
            FileSass: '\uF2EB',
            FileLess: '\uF2EC',
            FileHTML: '\uF2ED',
            JavaScriptLanguage: '\uF2EE',
            CSharpLanguage: '\uF2EF',
            CSharp: '\uF2F0',
            VisualBasicLanguage: '\uF2F1',
            VB: '\uF2F2',
            CPlusPlusLanguage: '\uF2F3',
            CPlusPlus: '\uF2F4',
            FSharpLanguage: '\uF2F5',
            FSharp: '\uF2F6',
            TypeScriptLanguage: '\uF2F7',
            PythonLanguage: '\uF2F8',
            PY: '\uF2F9',
            CoffeeScript: '\uF2FA',
            MarkDownLanguage: '\uF2FB',
            FullWidth: '\uF2FE',
            FullWidthEdit: '\uF2FF',
            Plug: '\uF300',
            PlugSolid: '\uF301',
            PlugConnected: '\uF302',
            PlugDisconnected: '\uF303',
            UnlockSolid: '\uF304',
            Variable: '\uF305',
            Parameter: '\uF306',
            CommentUrgent: '\uF307',
            Storyboard: '\uF308',
            DiffInline: '\uF309',
            DiffSideBySide: '\uF30A'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-10.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-11.js":
/*!**************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-11.js ***!
  \**************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-11\"",
            src: "url('" + baseUrl + "fabric-icons-11-93bad8ee.woff') format('woff')"
        },
        icons: {
            ImageDiff: '\uF30B',
            ImagePixel: '\uF30C',
            FileBug: '\uF30D',
            FileCode: '\uF30E',
            FileComment: '\uF30F',
            BusinessHoursSign: '\uF310',
            FileImage: '\uF311',
            FileSymlink: '\uF312',
            AutoFillTemplate: '\uF313',
            WorkItem: '\uF314',
            WorkItemBug: '\uF315',
            LogRemove: '\uF316',
            ColumnOptions: '\uF317',
            Packages: '\uF318',
            BuildIssue: '\uF319',
            AssessmentGroup: '\uF31A',
            VariableGroup: '\uF31B',
            FullHistory: '\uF31C',
            SingleColumnEdit: '\uF321',
            DoubleColumnEdit: '\uF322',
            TripleColumnEdit: '\uF323',
            ColumnLeftTwoThirdsEdit: '\uF324',
            ColumnRightTwoThirdsEdit: '\uF325',
            StreamLogo: '\uF329',
            PassiveAuthentication: '\uF32A',
            AlertSolid: '\uF331',
            MegaphoneSolid: '\uF332',
            TaskSolid: '\uF333',
            ConfigurationSolid: '\uF334',
            BugSolid: '\uF335',
            CrownSolid: '\uF336',
            Trophy2Solid: '\uF337',
            QuickNoteSolid: '\uF338',
            ConstructionConeSolid: '\uF339',
            PageListSolid: '\uF33A',
            PageListMirroredSolid: '\uF33B',
            StarburstSolid: '\uF33C',
            ReadingModeSolid: '\uF33D',
            SadSolid: '\uF33E',
            HealthSolid: '\uF33F',
            ShieldSolid: '\uF340',
            GiftBoxSolid: '\uF341',
            ShoppingCartSolid: '\uF342',
            MailSolid: '\uF343',
            ChatSolid: '\uF344',
            RibbonSolid: '\uF345',
            FinancialSolid: '\uF346',
            FinancialMirroredSolid: '\uF347',
            HeadsetSolid: '\uF348',
            PermissionsSolid: '\uF349',
            ParkingSolid: '\uF34A',
            ParkingMirroredSolid: '\uF34B',
            DiamondSolid: '\uF34C',
            AsteriskSolid: '\uF34D',
            OfflineStorageSolid: '\uF34E',
            BankSolid: '\uF34F',
            DecisionSolid: '\uF350',
            Parachute: '\uF351',
            ParachuteSolid: '\uF352',
            FiltersSolid: '\uF353',
            ColorSolid: '\uF354',
            ReviewSolid: '\uF355',
            ReviewRequestSolid: '\uF356',
            ReviewRequestMirroredSolid: '\uF357',
            ReviewResponseSolid: '\uF358',
            FeedbackRequestSolid: '\uF359',
            FeedbackRequestMirroredSolid: '\uF35A',
            FeedbackResponseSolid: '\uF35B',
            WorkItemBar: '\uF35C',
            WorkItemBarSolid: '\uF35D',
            Separator: '\uF35E',
            NavigateExternalInline: '\uF35F',
            PlanView: '\uF360',
            TimelineMatrixView: '\uF361',
            EngineeringGroup: '\uF362',
            ProjectCollection: '\uF363',
            CaretBottomRightCenter8: '\uF364',
            CaretBottomLeftCenter8: '\uF365',
            CaretTopRightCenter8: '\uF366',
            CaretTopLeftCenter8: '\uF367',
            DonutChart: '\uF368',
            ChevronUnfold10: '\uF369',
            ChevronFold10: '\uF36A',
            DoubleChevronDown8: '\uF36B',
            DoubleChevronUp8: '\uF36C',
            DoubleChevronLeft8: '\uF36D',
            DoubleChevronRight8: '\uF36E',
            ChevronDownEnd6: '\uF36F',
            ChevronUpEnd6: '\uF370',
            ChevronLeftEnd6: '\uF371',
            ChevronRightEnd6: '\uF372',
            ContextMenu: '\uF37C',
            AzureAPIManagement: '\uF37F',
            AzureServiceEndpoint: '\uF380',
            VSTSLogo: '\uF381',
            VSTSAltLogo1: '\uF382',
            VSTSAltLogo2: '\uF383',
            FileTypeSolution: '\uF387',
            WordLogoInverse16: '\uF390',
            WordLogo16: '\uF391'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-11.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-12.js":
/*!**************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-12.js ***!
  \**************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-12\"",
            src: "url('" + baseUrl + "fabric-icons-12-d9534567.woff') format('woff')"
        },
        icons: {
            WordLogoFill16: '\uF392',
            PowerPointLogoInverse16: '\uF393',
            PowerPointLogo16: '\uF394',
            PowerPointLogoFill16: '\uF395',
            ExcelLogoInverse16: '\uF396',
            ExcelLogo16: '\uF397',
            ExcelLogoFill16: '\uF398',
            OneNoteLogoInverse16: '\uF399',
            OneNoteLogo16: '\uF39A',
            OneNoteLogoFill16: '\uF39B',
            OutlookLogoInverse16: '\uF39C',
            OutlookLogo16: '\uF39D',
            OutlookLogoFill16: '\uF39E',
            PublisherLogoInverse16: '\uF39F',
            PublisherLogo16: '\uF3A0',
            PublisherLogoFill16: '\uF3A1',
            VisioLogoInverse16: '\uF3A2',
            VisioLogo16: '\uF3A3',
            VisioLogoFill16: '\uF3A4',
            TestBeaker: '\uF3A5',
            TestBeakerSolid: '\uF3A6',
            TestExploreSolid: '\uF3A7',
            TestAutoSolid: '\uF3A8',
            TestUserSolid: '\uF3A9',
            TestImpactSolid: '\uF3AA',
            TestPlan: '\uF3AB',
            TestStep: '\uF3AC',
            TestParameter: '\uF3AD',
            TestSuite: '\uF3AE',
            TestCase: '\uF3AF',
            Sprint: '\uF3B0',
            SignOut: '\uF3B1',
            TriggerApproval: '\uF3B2',
            Rocket: '\uF3B3',
            AzureKeyVault: '\uF3B4',
            Onboarding: '\uF3BA',
            Transition: '\uF3BC',
            LikeSolid: '\uF3BF',
            DislikeSolid: '\uF3C0',
            CRMCustomerInsightsApp: '\uF3C8',
            EditCreate: '\uF3C9',
            UnSetColor: '\uF3F9',
            DeclineCall: '\uF405',
            RectangularClipping: '\uF407',
            TeamsLogo16: '\uF40A',
            TeamsLogoFill16: '\uF40B',
            Spacer: '\uF40D',
            SkypeLogo16: '\uF40E',
            SkypeForBusinessLogo16: '\uF40F',
            SkypeForBusinessLogoFill16: '\uF410',
            FilterSolid: '\uF412',
            MailUndelivered: '\uF415',
            MailTentative: '\uF416',
            MailTentativeMirrored: '\uF417',
            MailReminder: '\uF418',
            ReceiptUndelivered: '\uF419',
            ReceiptTentative: '\uF41A',
            ReceiptTentativeMirrored: '\uF41B',
            Inbox: '\uF41C',
            IRMReply: '\uF41D',
            IRMReplyMirrored: '\uF41E',
            IRMForward: '\uF41F',
            IRMForwardMirrored: '\uF420',
            VoicemailIRM: '\uF421',
            EventAccepted: '\uF422',
            EventTentative: '\uF423',
            EventTentativeMirrored: '\uF424',
            EventDeclined: '\uF425',
            IDBadge: '\uF427',
            BackgroundColor: '\uF42B',
            OfficeFormsLogoInverse16: '\uF433',
            OfficeFormsLogo: '\uF434',
            OfficeFormsLogoFill: '\uF435',
            OfficeFormsLogo16: '\uF436',
            OfficeFormsLogoFill16: '\uF437',
            OfficeFormsLogoInverse24: '\uF43A',
            OfficeFormsLogo24: '\uF43B',
            OfficeFormsLogoFill24: '\uF43C',
            PageLock: '\uF43F',
            NotExecuted: '\uF440',
            NotImpactedSolid: '\uF441',
            FieldReadOnly: '\uF442',
            FieldRequired: '\uF443',
            BacklogBoard: '\uF444',
            ExternalBuild: '\uF445',
            ExternalTFVC: '\uF446',
            ExternalXAML: '\uF447',
            IssueSolid: '\uF448',
            DefectSolid: '\uF449',
            LadybugSolid: '\uF44A',
            NugetLogo: '\uF44C',
            TFVCLogo: '\uF44D',
            ProjectLogo32: '\uF47E',
            ProjectLogoFill32: '\uF47F',
            ProjectLogo16: '\uF480',
            ProjectLogoFill16: '\uF481',
            SwayLogo32: '\uF482',
            SwayLogoFill32: '\uF483',
            SwayLogo16: '\uF484',
            SwayLogoFill16: '\uF485'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-12.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-13.js":
/*!**************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-13.js ***!
  \**************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-13\"",
            src: "url('" + baseUrl + "fabric-icons-13-0b48c801.woff') format('woff')"
        },
        icons: {
            ClassNotebookLogo32: '\uF486',
            ClassNotebookLogoFill32: '\uF487',
            ClassNotebookLogo16: '\uF488',
            ClassNotebookLogoFill16: '\uF489',
            ClassNotebookLogoInverse32: '\uF48A',
            ClassNotebookLogoInverse16: '\uF48B',
            StaffNotebookLogo32: '\uF48C',
            StaffNotebookLogoFill32: '\uF48D',
            StaffNotebookLogo16: '\uF48E',
            StaffNotebookLogoFill16: '\uF48F',
            StaffNotebookLogoInverted32: '\uF490',
            StaffNotebookLogoInverted16: '\uF491',
            KaizalaLogo: '\uF492',
            TaskLogo: '\uF493',
            ProtectionCenterLogo32: '\uF494',
            GallatinLogo: '\uF496',
            Globe2: '\uF49A',
            Guitar: '\uF49B',
            Breakfast: '\uF49C',
            Brunch: '\uF49D',
            BeerMug: '\uF49E',
            Vacation: '\uF49F',
            Teeth: '\uF4A0',
            Taxi: '\uF4A1',
            Chopsticks: '\uF4A2',
            SyncOccurence: '\uF4A3',
            UnsyncOccurence: '\uF4A4',
            GIF: '\uF4A9',
            PrimaryCalendar: '\uF4AE',
            SearchCalendar: '\uF4AF',
            VideoOff: '\uF4B0',
            MicrosoftFlowLogo: '\uF4B1',
            BusinessCenterLogo: '\uF4B2',
            ToDoLogoBottom: '\uF4B3',
            ToDoLogoTop: '\uF4B4',
            EditSolid12: '\uF4B5',
            EditSolidMirrored12: '\uF4B6',
            UneditableSolid12: '\uF4B7',
            UneditableSolidMirrored12: '\uF4B8',
            UneditableMirrored: '\uF4B9',
            AdminALogo32: '\uF4BA',
            AdminALogoFill32: '\uF4BB',
            ToDoLogoInverse: '\uF4BC',
            Snooze: '\uF4BD',
            WaffleOffice365: '\uF4E0',
            ImageSearch: '\uF4E8',
            NewsSearch: '\uF4E9',
            VideoSearch: '\uF4EA',
            R: '\uF4EB',
            FontColorA: '\uF4EC',
            FontColorSwatch: '\uF4ED',
            LightWeight: '\uF4EE',
            NormalWeight: '\uF4EF',
            SemiboldWeight: '\uF4F0',
            GroupObject: '\uF4F1',
            UngroupObject: '\uF4F2',
            AlignHorizontalLeft: '\uF4F3',
            AlignHorizontalCenter: '\uF4F4',
            AlignHorizontalRight: '\uF4F5',
            AlignVerticalTop: '\uF4F6',
            AlignVerticalCenter: '\uF4F7',
            AlignVerticalBottom: '\uF4F8',
            HorizontalDistributeCenter: '\uF4F9',
            VerticalDistributeCenter: '\uF4FA',
            Ellipse: '\uF4FB',
            Line: '\uF4FC',
            Octagon: '\uF4FD',
            Hexagon: '\uF4FE',
            Pentagon: '\uF4FF',
            RightTriangle: '\uF500',
            HalfCircle: '\uF501',
            QuarterCircle: '\uF502',
            ThreeQuarterCircle: '\uF503',
            '6PointStar': '\uF504',
            '12PointStar': '\uF505',
            ArrangeBringToFront: '\uF506',
            ArrangeSendToBack: '\uF507',
            ArrangeSendBackward: '\uF508',
            ArrangeBringForward: '\uF509',
            BorderDash: '\uF50A',
            BorderDot: '\uF50B',
            LineStyle: '\uF50C',
            LineThickness: '\uF50D',
            WindowEdit: '\uF50E',
            HintText: '\uF50F',
            MediaAdd: '\uF510',
            AnchorLock: '\uF511',
            AutoHeight: '\uF512',
            ChartSeries: '\uF513',
            ChartXAngle: '\uF514',
            ChartYAngle: '\uF515',
            Combobox: '\uF516',
            LineSpacing: '\uF517',
            Padding: '\uF518',
            PaddingTop: '\uF519',
            PaddingBottom: '\uF51A',
            PaddingLeft: '\uF51B',
            PaddingRight: '\uF51C',
            NavigationFlipper: '\uF51D',
            AlignJustify: '\uF51E'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-13.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-14.js":
/*!**************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-14.js ***!
  \**************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-14\"",
            src: "url('" + baseUrl + "fabric-icons-14-9a8324a9.woff') format('woff')"
        },
        icons: {
            TextOverflow: '\uF51F',
            VisualsFolder: '\uF520',
            VisualsStore: '\uF521',
            PictureCenter: '\uF522',
            PictureFill: '\uF523',
            PicturePosition: '\uF524',
            PictureStretch: '\uF525',
            PictureTile: '\uF526',
            Slider: '\uF527',
            SliderHandleSize: '\uF528',
            DefaultRatio: '\uF529',
            NumberSequence: '\uF52A',
            GUID: '\uF52B',
            ReportAdd: '\uF52C',
            DashboardAdd: '\uF52D',
            MapPinSolid: '\uF52E',
            WebPublish: '\uF52F',
            PieSingleSolid: '\uF530',
            BlockedSolid: '\uF531',
            DrillDown: '\uF532',
            DrillDownSolid: '\uF533',
            DrillExpand: '\uF534',
            DrillShow: '\uF535',
            SpecialEvent: '\uF536',
            OneDriveFolder16: '\uF53B',
            FunctionalManagerDashboard: '\uF542',
            BIDashboard: '\uF543',
            CodeEdit: '\uF544',
            RenewalCurrent: '\uF545',
            RenewalFuture: '\uF546',
            SplitObject: '\uF547',
            BulkUpload: '\uF548',
            DownloadDocument: '\uF549',
            Flower: '\uF54E',
            WaitlistConfirm: '\uF550',
            WaitlistConfirmMirrored: '\uF551',
            LaptopSecure: '\uF552',
            DragObject: '\uF553',
            EntryView: '\uF554',
            EntryDecline: '\uF555',
            ContactCardSettings: '\uF556',
            ContactCardSettingsMirrored: '\uF557',
            CalendarSettings: '\uF558',
            CalendarSettingsMirrored: '\uF559',
            HardDriveLock: '\uF55A',
            HardDriveUnlock: '\uF55B',
            AccountManagement: '\uF55C',
            TransitionPop: '\uF5B2',
            TransitionPush: '\uF5B3',
            TransitionEffect: '\uF5B4',
            LookupEntities: '\uF5B5',
            ExploreData: '\uF5B6',
            AddBookmark: '\uF5B7',
            SearchBookmark: '\uF5B8',
            DrillThrough: '\uF5B9',
            MasterDatabase: '\uF5BA',
            CertifiedDatabase: '\uF5BB',
            MaximumValue: '\uF5BC',
            MinimumValue: '\uF5BD',
            VisualStudioIDELogo32: '\uF5D0',
            PasteAsText: '\uF5D5',
            PasteAsCode: '\uF5D6',
            BrowserTab: '\uF5D7',
            BrowserTabScreenshot: '\uF5D8',
            DesktopScreenshot: '\uF5D9',
            FileYML: '\uF5DA',
            ClipboardSolid: '\uF5DC',
            FabricUserFolder: '\uF5E5',
            FabricNetworkFolder: '\uF5E6',
            AnalyticsView: '\uF5F1',
            Video360Generic: '\uF609',
            Leave: '\uF627',
            Trending12: '\uF62D',
            Blocked12: '\uF62E',
            Warning12: '\uF62F',
            CheckedOutByOther12: '\uF630',
            CheckedOutByYou12: '\uF631',
            CircleShapeSolid: '\uF63C',
            SquareShapeSolid: '\uF63D',
            TriangleShapeSolid: '\uF63E',
            DropShapeSolid: '\uF63F',
            RectangleShapeSolid: '\uF640',
            ZoomToFit: '\uF649',
            InsertColumnsLeft: '\uF64A',
            InsertColumnsRight: '\uF64B',
            InsertRowsAbove: '\uF64C',
            InsertRowsBelow: '\uF64D',
            DeleteColumns: '\uF64E',
            DeleteRows: '\uF64F',
            DeleteRowsMirrored: '\uF650',
            DeleteTable: '\uF651',
            AccountBrowser: '\uF652',
            VersionControlPush: '\uF664',
            StackedColumnChart2: '\uF666',
            TripleColumnWide: '\uF66E',
            QuadColumn: '\uF66F',
            WhiteBoardApp16: '\uF673',
            WhiteBoardApp32: '\uF674',
            InsertSignatureLine: '\uF677',
            ArrangeByFrom: '\uF678'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-14.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-15.js":
/*!**************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-15.js ***!
  \**************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-15\"",
            src: "url('" + baseUrl + "fabric-icons-15-65272067.woff') format('woff')"
        },
        icons: {
            Phishing: '\uF679',
            CreateMailRule: '\uF67A',
            PublishCourse: '\uF699',
            DictionaryRemove: '\uF69A',
            UserRemove: '\uF69B',
            UserEvent: '\uF69C',
            Encryption: '\uF69D',
            PasswordField: '\uF6AA',
            OpenInNewTab: '\uF6AB',
            Hide3: '\uF6AC',
            VerifiedBrandSolid: '\uF6AD',
            MarkAsProtected: '\uF6AE',
            AuthenticatorApp: '\uF6B1',
            WebTemplate: '\uF6B2',
            DefenderTVM: '\uF6B3',
            MedalSolid: '\uF6B9',
            D365TalentLearn: '\uF6BB',
            D365TalentInsight: '\uF6BC',
            D365TalentHRCore: '\uF6BD',
            BacklogList: '\uF6BF',
            ButtonControl: '\uF6C0',
            TableGroup: '\uF6D9',
            MountainClimbing: '\uF6DB',
            TagUnknown: '\uF6DF',
            TagUnknownMirror: '\uF6E0',
            TagUnknown12: '\uF6E1',
            TagUnknown12Mirror: '\uF6E2',
            Link12: '\uF6E3',
            Presentation: '\uF6E4',
            Presentation12: '\uF6E5',
            Lock12: '\uF6E6',
            BuildDefinition: '\uF6E9',
            ReleaseDefinition: '\uF6EA',
            SaveTemplate: '\uF6EC',
            UserGauge: '\uF6ED',
            BlockedSiteSolid12: '\uF70A',
            TagSolid: '\uF70E',
            OfficeChat: '\uF70F',
            OfficeChatSolid: '\uF710',
            MailSchedule: '\uF72E',
            WarningSolid: '\uF736',
            Blocked2Solid: '\uF737',
            SkypeCircleArrow: '\uF747',
            SkypeArrow: '\uF748',
            SyncStatus: '\uF751',
            SyncStatusSolid: '\uF752',
            ProjectDocument: '\uF759',
            ToDoLogoOutline: '\uF75B',
            VisioOnlineLogoFill32: '\uF75F',
            VisioOnlineLogo32: '\uF760',
            VisioOnlineLogoCloud32: '\uF761',
            VisioDiagramSync: '\uF762',
            Event12: '\uF763',
            EventDateMissed12: '\uF764',
            UserOptional: '\uF767',
            ResponsesMenu: '\uF768',
            DoubleDownArrow: '\uF769',
            DistributeDown: '\uF76A',
            BookmarkReport: '\uF76B',
            FilterSettings: '\uF76C',
            GripperDotsVertical: '\uF772',
            MailAttached: '\uF774',
            AddIn: '\uF775',
            LinkedDatabase: '\uF779',
            PromotedDatabase: '\uF77D',
            BarChartVerticalFilter: '\uF77E',
            BarChartVerticalFilterSolid: '\uF77F',
            MicrosoftTranslatorLogo: '\uF782',
            ShowTimeAs: '\uF787',
            FileRequest: '\uF789',
            WorkItemAlert: '\uF78F',
            PowerBILogo16: '\uF790',
            PowerBILogoBackplate16: '\uF791',
            BulletedListText: '\uF792',
            BulletedListBullet: '\uF793',
            BulletedListTextMirrored: '\uF794',
            BulletedListBulletMirrored: '\uF795',
            NumberedListText: '\uF796',
            NumberedListNumber: '\uF797',
            NumberedListTextMirrored: '\uF798',
            NumberedListNumberMirrored: '\uF799',
            RemoveLinkChain: '\uF79A',
            RemoveLinkX: '\uF79B',
            FabricTextHighlight: '\uF79C',
            ClearFormattingA: '\uF79D',
            ClearFormattingEraser: '\uF79E',
            Photo2Fill: '\uF79F',
            IncreaseIndentText: '\uF7A0',
            IncreaseIndentArrow: '\uF7A1',
            DecreaseIndentText: '\uF7A2',
            DecreaseIndentArrow: '\uF7A3',
            IncreaseIndentTextMirrored: '\uF7A4',
            IncreaseIndentArrowMirrored: '\uF7A5',
            DecreaseIndentTextMirrored: '\uF7A6',
            DecreaseIndentArrowMirrored: '\uF7A7',
            CheckListText: '\uF7A8',
            CheckListCheck: '\uF7A9',
            CheckListTextMirrored: '\uF7AA',
            CheckListCheckMirrored: '\uF7AB',
            NumberSymbol: '\uF7AC'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-15.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-16.js":
/*!**************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-16.js ***!
  \**************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-16\"",
            src: "url('" + baseUrl + "fabric-icons-16-dff5b9a6.woff') format('woff')"
        },
        icons: {
            Coupon: '\uF7BC',
            VerifiedBrand: '\uF7BD',
            ReleaseGate: '\uF7BE',
            ReleaseGateCheck: '\uF7BF',
            ReleaseGateError: '\uF7C0',
            M365InvoicingLogo: '\uF7C1',
            FabricTextHighlightComposite: '\uF7DA',
            Dataflows: '\uF7DD',
            GenericScanFilled: '\uF7DE',
            DiagnosticDataBarTooltip: '\uF7DF',
            SaveToMobile: '\uF7E0',
            Orientation2: '\uF7E1',
            ScreenCast: '\uF7E2',
            ShowGrid: '\uF7E3',
            SnapToGrid: '\uF7E4',
            ContactList: '\uF7E5',
            NewMail: '\uF7EA',
            EyeShadow: '\uF7EB',
            FabricFolderConfirm: '\uF7FF',
            InformationBarriers: '\uF803',
            CommentActive: '\uF804',
            ColumnVerticalSectionEdit: '\uF806',
            WavingHand: '\uF807',
            ShakeDevice: '\uF80A',
            SmartGlassRemote: '\uF80B',
            Rotate90Clockwise: '\uF80D',
            Rotate90CounterClockwise: '\uF80E',
            CampaignTemplate: '\uF811',
            ChartTemplate: '\uF812',
            PageListFilter: '\uF813',
            SecondaryNav: '\uF814',
            ColumnVerticalSection: '\uF81E',
            SkypeCircleSlash: '\uF825',
            SkypeSlash: '\uF826',
            CustomizeToolbar: '\uF828',
            DuplicateRow: '\uF82A',
            RemoveFromTrash: '\uF82B',
            MailOptions: '\uF82C',
            Childof: '\uF82D',
            Footer: '\uF82E',
            Header: '\uF82F',
            BarChartVerticalFill: '\uF830',
            StackedColumnChart2Fill: '\uF831',
            PlainText: '\uF834',
            AccessibiltyChecker: '\uF835',
            DatabaseSync: '\uF842',
            ReservationOrders: '\uF845',
            TabOneColumn: '\uF849',
            TabTwoColumn: '\uF84A',
            TabThreeColumn: '\uF84B',
            MicrosoftTranslatorLogoGreen: '\uF852',
            MicrosoftTranslatorLogoBlue: '\uF853',
            InternalInvestigation: '\uF854',
            AppleTVPlay: '\uF859',
            AppleTVMonitor: '\uF85A',
            AppleTVMicrophone: '\uF85B',
            AppleTVMenu: '\uF85C',
            AddReaction: '\uF85D',
            DecreaseIndentLegacy: '\uE290',
            IncreaseIndentLegacy: '\uE291',
            SizeLegacy: '\uE2B2'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-16.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-2.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-2.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-2\"",
            src: "url('" + baseUrl + "fabric-icons-2-8820ef0b.woff') format('woff')"
        },
        icons: {
            FontIncrease: '\uE8E8',
            FontSize: '\uE8E9',
            CellPhone: '\uE8EA',
            RepeatOne: '\uE8ED',
            RepeatAll: '\uE8EE',
            Calculator: '\uE8EF',
            Library: '\uE8F1',
            PostUpdate: '\uE8F3',
            NewFolder: '\uE8F4',
            CalendarReply: '\uE8F5',
            UnsyncFolder: '\uE8F6',
            SyncFolder: '\uE8F7',
            BlockContact: '\uE8F8',
            Accept: '\uE8FB',
            BulletedList: '\uE8FD',
            Preview: '\uE8FF',
            News: '\uE900',
            Chat: '\uE901',
            Group: '\uE902',
            World: '\uE909',
            Comment: '\uE90A',
            DockLeft: '\uE90C',
            DockRight: '\uE90D',
            Repair: '\uE90F',
            Accounts: '\uE910',
            Street: '\uE913',
            RadioBullet: '\uE915',
            Stopwatch: '\uE916',
            Clock: '\uE917',
            WorldClock: '\uE918',
            AlarmClock: '\uE919',
            Photo: '\uE91B',
            ActionCenter: '\uE91C',
            Hospital: '\uE91D',
            Timer: '\uE91E',
            FullCircleMask: '\uE91F',
            LocationFill: '\uE920',
            ChromeMinimize: '\uE921',
            ChromeRestore: '\uE923',
            Annotation: '\uE924',
            Fingerprint: '\uE928',
            Handwriting: '\uE929',
            ChromeFullScreen: '\uE92D',
            Completed: '\uE930',
            Label: '\uE932',
            FlickDown: '\uE935',
            FlickUp: '\uE936',
            FlickLeft: '\uE937',
            FlickRight: '\uE938',
            MiniExpand: '\uE93A',
            MiniContract: '\uE93B',
            Streaming: '\uE93E',
            MusicInCollection: '\uE940',
            OneDriveLogo: '\uE941',
            CompassNW: '\uE942',
            Code: '\uE943',
            LightningBolt: '\uE945',
            CalculatorMultiply: '\uE947',
            CalculatorAddition: '\uE948',
            CalculatorSubtract: '\uE949',
            CalculatorPercentage: '\uE94C',
            CalculatorEqualTo: '\uE94E',
            PrintfaxPrinterFile: '\uE956',
            StorageOptical: '\uE958',
            Communications: '\uE95A',
            Headset: '\uE95B',
            Health: '\uE95E',
            FrontCamera: '\uE96B',
            ChevronUpSmall: '\uE96D',
            ChevronDownSmall: '\uE96E',
            ChevronLeftSmall: '\uE96F',
            ChevronRightSmall: '\uE970',
            ChevronUpMed: '\uE971',
            ChevronDownMed: '\uE972',
            ChevronLeftMed: '\uE973',
            ChevronRightMed: '\uE974',
            Devices2: '\uE975',
            PC1: '\uE977',
            PresenceChickletVideo: '\uE979',
            Reply: '\uE97A',
            HalfAlpha: '\uE97E',
            ConstructionCone: '\uE98F',
            DoubleChevronLeftMed: '\uE991',
            Volume0: '\uE992',
            Volume1: '\uE993',
            Volume2: '\uE994',
            Volume3: '\uE995',
            Chart: '\uE999',
            Robot: '\uE99A',
            Manufacturing: '\uE99C',
            LockSolid: '\uE9A2',
            FitPage: '\uE9A6',
            FitWidth: '\uE9A7',
            BidiLtr: '\uE9AA',
            BidiRtl: '\uE9AB',
            RightDoubleQuote: '\uE9B1',
            Sunny: '\uE9BD',
            CloudWeather: '\uE9BE',
            Cloudy: '\uE9BF',
            PartlyCloudyDay: '\uE9C0'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-2.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-3.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-3.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-3\"",
            src: "url('" + baseUrl + "fabric-icons-3-7c253e01.woff') format('woff')"
        },
        icons: {
            PartlyCloudyNight: '\uE9C1',
            ClearNight: '\uE9C2',
            RainShowersDay: '\uE9C3',
            Rain: '\uE9C4',
            Thunderstorms: '\uE9C6',
            RainSnow: '\uE9C7',
            Snow: '\uE9C8',
            BlowingSnow: '\uE9C9',
            Frigid: '\uE9CA',
            Fog: '\uE9CB',
            Squalls: '\uE9CC',
            Duststorm: '\uE9CD',
            Unknown: '\uE9CE',
            Precipitation: '\uE9CF',
            Ribbon: '\uE9D1',
            AreaChart: '\uE9D2',
            Assign: '\uE9D3',
            FlowChart: '\uE9D4',
            CheckList: '\uE9D5',
            Diagnostic: '\uE9D9',
            Generate: '\uE9DA',
            LineChart: '\uE9E6',
            Equalizer: '\uE9E9',
            BarChartHorizontal: '\uE9EB',
            BarChartVertical: '\uE9EC',
            Freezing: '\uE9EF',
            FunnelChart: '\uE9F1',
            Processing: '\uE9F5',
            Quantity: '\uE9F8',
            ReportDocument: '\uE9F9',
            StackColumnChart: '\uE9FC',
            SnowShowerDay: '\uE9FD',
            HailDay: '\uEA00',
            WorkFlow: '\uEA01',
            HourGlass: '\uEA03',
            StoreLogoMed20: '\uEA04',
            TimeSheet: '\uEA05',
            TriangleSolid: '\uEA08',
            UpgradeAnalysis: '\uEA0B',
            VideoSolid: '\uEA0C',
            RainShowersNight: '\uEA0F',
            SnowShowerNight: '\uEA11',
            Teamwork: '\uEA12',
            HailNight: '\uEA13',
            PeopleAdd: '\uEA15',
            Glasses: '\uEA16',
            DateTime2: '\uEA17',
            Shield: '\uEA18',
            Header1: '\uEA19',
            PageAdd: '\uEA1A',
            NumberedList: '\uEA1C',
            PowerBILogo: '\uEA1E',
            Info2: '\uEA1F',
            MusicInCollectionFill: '\uEA36',
            Asterisk: '\uEA38',
            ErrorBadge: '\uEA39',
            CircleFill: '\uEA3B',
            Record2: '\uEA3F',
            AllAppsMirrored: '\uEA40',
            BookmarksMirrored: '\uEA41',
            BulletedListMirrored: '\uEA42',
            CaretHollowMirrored: '\uEA45',
            CaretSolidMirrored: '\uEA46',
            ChromeBackMirrored: '\uEA47',
            ClosePaneMirrored: '\uEA49',
            DockLeftMirrored: '\uEA4C',
            DoubleChevronLeftMedMirrored: '\uEA4D',
            GoMirrored: '\uEA4F',
            HelpMirrored: '\uEA51',
            ImportMirrored: '\uEA52',
            ImportAllMirrored: '\uEA53',
            ListMirrored: '\uEA55',
            MailForwardMirrored: '\uEA56',
            MailReplyMirrored: '\uEA57',
            MailReplyAllMirrored: '\uEA58',
            MiniContractMirrored: '\uEA59',
            MiniExpandMirrored: '\uEA5A',
            OpenPaneMirrored: '\uEA5B',
            ParkingLocationMirrored: '\uEA5E',
            SendMirrored: '\uEA63',
            ShowResultsMirrored: '\uEA65',
            ThumbnailViewMirrored: '\uEA67',
            Media: '\uEA69',
            Devices3: '\uEA6C',
            Focus: '\uEA6F',
            VideoLightOff: '\uEA74',
            Lightbulb: '\uEA80',
            StatusTriangle: '\uEA82',
            VolumeDisabled: '\uEA85',
            Puzzle: '\uEA86',
            EmojiNeutral: '\uEA87',
            EmojiDisappointed: '\uEA88',
            HomeSolid: '\uEA8A',
            Ringer: '\uEA8F',
            PDF: '\uEA90',
            HeartBroken: '\uEA92',
            StoreLogo16: '\uEA96',
            MultiSelectMirrored: '\uEA98',
            Broom: '\uEA99',
            Cocktails: '\uEA9D'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-3.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-4.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-4.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-4\"",
            src: "url('" + baseUrl + "fabric-icons-4-15a649f8.woff') format('woff')"
        },
        icons: {
            Wines: '\uEABF',
            Articles: '\uEAC1',
            Cycling: '\uEAC7',
            DietPlanNotebook: '\uEAC8',
            Pill: '\uEACB',
            ExerciseTracker: '\uEACC',
            HandsFree: '\uEAD0',
            Medical: '\uEAD4',
            Running: '\uEADA',
            Weights: '\uEADB',
            Trackers: '\uEADF',
            AddNotes: '\uEAE3',
            AllCurrency: '\uEAE4',
            BarChart4: '\uEAE7',
            CirclePlus: '\uEAEE',
            Coffee: '\uEAEF',
            Cotton: '\uEAF3',
            Market: '\uEAFC',
            Money: '\uEAFD',
            PieDouble: '\uEB04',
            PieSingle: '\uEB05',
            RemoveFilter: '\uEB08',
            Savings: '\uEB0B',
            Sell: '\uEB0C',
            StockDown: '\uEB0F',
            StockUp: '\uEB11',
            Lamp: '\uEB19',
            Source: '\uEB1B',
            MSNVideos: '\uEB1C',
            Cricket: '\uEB1E',
            Golf: '\uEB1F',
            Baseball: '\uEB20',
            Soccer: '\uEB21',
            MoreSports: '\uEB22',
            AutoRacing: '\uEB24',
            CollegeHoops: '\uEB25',
            CollegeFootball: '\uEB26',
            ProFootball: '\uEB27',
            ProHockey: '\uEB28',
            Rugby: '\uEB2D',
            SubstitutionsIn: '\uEB31',
            Tennis: '\uEB33',
            Arrivals: '\uEB34',
            Design: '\uEB3C',
            Website: '\uEB41',
            Drop: '\uEB42',
            HistoricalWeather: '\uEB43',
            SkiResorts: '\uEB45',
            Snowflake: '\uEB46',
            BusSolid: '\uEB47',
            FerrySolid: '\uEB48',
            AirplaneSolid: '\uEB4C',
            TrainSolid: '\uEB4D',
            Ticket: '\uEB54',
            WifiWarning4: '\uEB63',
            Devices4: '\uEB66',
            AzureLogo: '\uEB6A',
            BingLogo: '\uEB6B',
            MSNLogo: '\uEB6C',
            OutlookLogoInverse: '\uEB6D',
            OfficeLogo: '\uEB6E',
            SkypeLogo: '\uEB6F',
            Door: '\uEB75',
            EditMirrored: '\uEB7E',
            GiftCard: '\uEB8E',
            DoubleBookmark: '\uEB8F',
            StatusErrorFull: '\uEB90',
            Certificate: '\uEB95',
            FastForward: '\uEB9D',
            Rewind: '\uEB9E',
            Photo2: '\uEB9F',
            OpenSource: '\uEBC2',
            Movers: '\uEBCD',
            CloudDownload: '\uEBD3',
            Family: '\uEBDA',
            WindDirection: '\uEBE6',
            Bug: '\uEBE8',
            SiteScan: '\uEBEC',
            BrowserScreenShot: '\uEBED',
            F12DevTools: '\uEBEE',
            CSS: '\uEBEF',
            JS: '\uEBF0',
            DeliveryTruck: '\uEBF4',
            ReminderPerson: '\uEBF7',
            ReminderGroup: '\uEBF8',
            TabletMode: '\uEBFC',
            Umbrella: '\uEC04',
            NetworkTower: '\uEC05',
            CityNext: '\uEC06',
            CityNext2: '\uEC07',
            Section: '\uEC0C',
            OneNoteLogoInverse: '\uEC0D',
            ToggleFilled: '\uEC11',
            ToggleBorder: '\uEC12',
            SliderThumb: '\uEC13',
            ToggleThumb: '\uEC14',
            Documentation: '\uEC17',
            Badge: '\uEC1B',
            Giftbox: '\uEC1F',
            VisualStudioLogo: '\uEC22'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-4.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-5.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-5.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-5\"",
            src: "url('" + baseUrl + "fabric-icons-5-f6de453a.woff') format('woff')"
        },
        icons: {
            HomeGroup: '\uEC26',
            ExcelLogoInverse: '\uEC28',
            WordLogoInverse: '\uEC29',
            PowerPointLogoInverse: '\uEC2A',
            Cafe: '\uEC32',
            SpeedHigh: '\uEC4A',
            Commitments: '\uEC4D',
            ThisPC: '\uEC4E',
            MusicNote: '\uEC4F',
            MicOff: '\uEC54',
            EdgeLogo: '\uEC60',
            CompletedSolid: '\uEC61',
            AlbumRemove: '\uEC62',
            MessageFill: '\uEC70',
            TabletSelected: '\uEC74',
            MobileSelected: '\uEC75',
            LaptopSelected: '\uEC76',
            TVMonitorSelected: '\uEC77',
            DeveloperTools: '\uEC7A',
            Shapes: '\uEC7C',
            InsertTextBox: '\uEC7D',
            LowerBrightness: '\uEC8A',
            WebComponents: '\uEC8B',
            OfflineStorage: '\uEC8C',
            DOM: '\uEC8D',
            CloudUpload: '\uEC8E',
            ScrollUpDown: '\uEC8F',
            DateTime: '\uEC92',
            Event: '\uECA3',
            Cake: '\uECA4',
            Org: '\uECA6',
            PartyLeader: '\uECA7',
            DRM: '\uECA8',
            CloudAdd: '\uECA9',
            AppIconDefault: '\uECAA',
            Photo2Add: '\uECAB',
            Photo2Remove: '\uECAC',
            POI: '\uECAF',
            AddTo: '\uECC8',
            RadioBtnOff: '\uECCA',
            RadioBtnOn: '\uECCB',
            ExploreContent: '\uECCD',
            Product: '\uECDC',
            ProgressLoopInner: '\uECDE',
            ProgressLoopOuter: '\uECDF',
            Blocked2: '\uECE4',
            FangBody: '\uECEB',
            PageHeader: '\uECEE',
            ChatInviteFriend: '\uECFE',
            Brush: '\uECFF',
            Shirt: '\uED00',
            Crown: '\uED01',
            Diamond: '\uED02',
            ScaleUp: '\uED09',
            QRCode: '\uED14',
            Feedback: '\uED15',
            SharepointLogoInverse: '\uED18',
            YammerLogo: '\uED19',
            Hide: '\uED1A',
            Uneditable: '\uED1D',
            ReturnToSession: '\uED24',
            OpenFolderHorizontal: '\uED25',
            CalendarMirrored: '\uED28',
            SwayLogoInverse: '\uED29',
            OutOfOffice: '\uED34',
            Trophy: '\uED3F',
            ReopenPages: '\uED50',
            EmojiTabSymbols: '\uED58',
            AADLogo: '\uED68',
            AccessLogo: '\uED69',
            AdminALogoInverse32: '\uED6A',
            AdminCLogoInverse32: '\uED6B',
            AdminDLogoInverse32: '\uED6C',
            AdminELogoInverse32: '\uED6D',
            AdminLLogoInverse32: '\uED6E',
            AdminMLogoInverse32: '\uED6F',
            AdminOLogoInverse32: '\uED70',
            AdminPLogoInverse32: '\uED71',
            AdminSLogoInverse32: '\uED72',
            AdminYLogoInverse32: '\uED73',
            DelveLogoInverse: '\uED76',
            ExchangeLogoInverse: '\uED78',
            LyncLogo: '\uED79',
            OfficeVideoLogoInverse: '\uED7A',
            SocialListeningLogo: '\uED7C',
            VisioLogoInverse: '\uED7D',
            Balloons: '\uED7E',
            Cat: '\uED7F',
            MailAlert: '\uED80',
            MailCheck: '\uED81',
            MailLowImportance: '\uED82',
            MailPause: '\uED83',
            MailRepeat: '\uED84',
            SecurityGroup: '\uED85',
            Table: '\uED86',
            VoicemailForward: '\uED87',
            VoicemailReply: '\uED88',
            Waffle: '\uED89',
            RemoveEvent: '\uED8A',
            EventInfo: '\uED8B'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-5.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-6.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-6.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-6\"",
            src: "url('" + baseUrl + "fabric-icons-6-32b702b9.woff') format('woff')"
        },
        icons: {
            ForwardEvent: '\uED8C',
            WipePhone: '\uED8D',
            AddOnlineMeeting: '\uED8E',
            JoinOnlineMeeting: '\uED8F',
            RemoveLink: '\uED90',
            PeopleBlock: '\uED91',
            PeopleRepeat: '\uED92',
            PeopleAlert: '\uED93',
            PeoplePause: '\uED94',
            TransferCall: '\uED95',
            AddPhone: '\uED96',
            UnknownCall: '\uED97',
            NoteReply: '\uED98',
            NoteForward: '\uED99',
            NotePinned: '\uED9A',
            RemoveOccurrence: '\uED9B',
            Timeline: '\uED9C',
            EditNote: '\uED9D',
            CircleHalfFull: '\uED9E',
            Room: '\uED9F',
            Unsubscribe: '\uEDA0',
            Subscribe: '\uEDA1',
            HardDrive: '\uEDA2',
            RecurringTask: '\uEDB2',
            TaskManager: '\uEDB7',
            TaskManagerMirrored: '\uEDB8',
            Combine: '\uEDBB',
            Split: '\uEDBC',
            DoubleChevronUp: '\uEDBD',
            DoubleChevronLeft: '\uEDBE',
            DoubleChevronRight: '\uEDBF',
            TextBox: '\uEDC2',
            TextField: '\uEDC3',
            NumberField: '\uEDC4',
            Dropdown: '\uEDC5',
            PenWorkspace: '\uEDC6',
            BookingsLogo: '\uEDC7',
            ClassNotebookLogoInverse: '\uEDC8',
            DelveAnalyticsLogo: '\uEDCA',
            DocsLogoInverse: '\uEDCB',
            Dynamics365Logo: '\uEDCC',
            DynamicSMBLogo: '\uEDCD',
            OfficeAssistantLogo: '\uEDCE',
            OfficeStoreLogo: '\uEDCF',
            OneNoteEduLogoInverse: '\uEDD0',
            PlannerLogo: '\uEDD1',
            PowerApps: '\uEDD2',
            Suitcase: '\uEDD3',
            ProjectLogoInverse: '\uEDD4',
            CaretLeft8: '\uEDD5',
            CaretRight8: '\uEDD6',
            CaretUp8: '\uEDD7',
            CaretDown8: '\uEDD8',
            CaretLeftSolid8: '\uEDD9',
            CaretRightSolid8: '\uEDDA',
            CaretUpSolid8: '\uEDDB',
            CaretDownSolid8: '\uEDDC',
            ClearFormatting: '\uEDDD',
            Superscript: '\uEDDE',
            Subscript: '\uEDDF',
            Strikethrough: '\uEDE0',
            Export: '\uEDE1',
            ExportMirrored: '\uEDE2',
            SingleBookmark: '\uEDFF',
            SingleBookmarkSolid: '\uEE00',
            DoubleChevronDown: '\uEE04',
            FollowUser: '\uEE05',
            ReplyAll: '\uEE0A',
            WorkforceManagement: '\uEE0F',
            RecruitmentManagement: '\uEE12',
            Questionnaire: '\uEE19',
            ManagerSelfService: '\uEE23',
            ProductRelease: '\uEE2E',
            ReplyMirrored: '\uEE35',
            ReplyAllMirrored: '\uEE36',
            Medal: '\uEE38',
            AddGroup: '\uEE3D',
            QuestionnaireMirrored: '\uEE4B',
            TemporaryUser: '\uEE58',
            CaretSolid16: '\uEE62',
            GroupedDescending: '\uEE66',
            GroupedAscending: '\uEE67',
            AwayStatus: '\uEE6A',
            MyMoviesTV: '\uEE6C',
            GenericScan: '\uEE6F',
            AustralianRules: '\uEE70',
            WifiEthernet: '\uEE77',
            TrackersMirrored: '\uEE92',
            DateTimeMirrored: '\uEE93',
            StopSolid: '\uEE95',
            DoubleChevronUp12: '\uEE96',
            DoubleChevronDown12: '\uEE97',
            DoubleChevronLeft12: '\uEE98',
            DoubleChevronRight12: '\uEE99',
            CalendarAgenda: '\uEE9A',
            AddEvent: '\uEEB5',
            AssetLibrary: '\uEEB6',
            DataConnectionLibrary: '\uEEB7',
            DocLibrary: '\uEEB8',
            FormLibrary: '\uEEB9'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-6.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-7.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-7.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-7\"",
            src: "url('" + baseUrl + "fabric-icons-7-bbebf62d.woff') format('woff')"
        },
        icons: {
            FormLibraryMirrored: '\uEEBA',
            ReportLibrary: '\uEEBB',
            ReportLibraryMirrored: '\uEEBC',
            ContactCard: '\uEEBD',
            CustomList: '\uEEBE',
            CustomListMirrored: '\uEEBF',
            IssueTracking: '\uEEC0',
            IssueTrackingMirrored: '\uEEC1',
            PictureLibrary: '\uEEC2',
            OfficeAddinsLogo: '\uEEC7',
            OfflineOneDriveParachute: '\uEEC8',
            OfflineOneDriveParachuteDisabled: '\uEEC9',
            TriangleSolidUp12: '\uEECC',
            TriangleSolidDown12: '\uEECD',
            TriangleSolidLeft12: '\uEECE',
            TriangleSolidRight12: '\uEECF',
            TriangleUp12: '\uEED0',
            TriangleDown12: '\uEED1',
            TriangleLeft12: '\uEED2',
            TriangleRight12: '\uEED3',
            ArrowUpRight8: '\uEED4',
            ArrowDownRight8: '\uEED5',
            DocumentSet: '\uEED6',
            DelveAnalytics: '\uEEEE',
            ArrowUpRightMirrored8: '\uEEEF',
            ArrowDownRightMirrored8: '\uEEF0',
            CompanyDirectory: '\uEF0D',
            OpenEnrollment: '\uEF1C',
            CompanyDirectoryMirrored: '\uEF2B',
            OneDriveAdd: '\uEF32',
            ProfileSearch: '\uEF35',
            Header2: '\uEF36',
            Header3: '\uEF37',
            Header4: '\uEF38',
            RingerSolid: '\uEF3A',
            Eyedropper: '\uEF3C',
            MarketDown: '\uEF42',
            CalendarWorkWeek: '\uEF51',
            SidePanel: '\uEF52',
            GlobeFavorite: '\uEF53',
            CaretTopLeftSolid8: '\uEF54',
            CaretTopRightSolid8: '\uEF55',
            ViewAll2: '\uEF56',
            DocumentReply: '\uEF57',
            PlayerSettings: '\uEF58',
            ReceiptForward: '\uEF59',
            ReceiptReply: '\uEF5A',
            ReceiptCheck: '\uEF5B',
            Fax: '\uEF5C',
            RecurringEvent: '\uEF5D',
            ReplyAlt: '\uEF5E',
            ReplyAllAlt: '\uEF5F',
            EditStyle: '\uEF60',
            EditMail: '\uEF61',
            Lifesaver: '\uEF62',
            LifesaverLock: '\uEF63',
            InboxCheck: '\uEF64',
            FolderSearch: '\uEF65',
            CollapseMenu: '\uEF66',
            ExpandMenu: '\uEF67',
            Boards: '\uEF68',
            SunAdd: '\uEF69',
            SunQuestionMark: '\uEF6A',
            LandscapeOrientation: '\uEF6B',
            DocumentSearch: '\uEF6C',
            PublicCalendar: '\uEF6D',
            PublicContactCard: '\uEF6E',
            PublicEmail: '\uEF6F',
            PublicFolder: '\uEF70',
            WordDocument: '\uEF71',
            PowerPointDocument: '\uEF72',
            ExcelDocument: '\uEF73',
            GroupedList: '\uEF74',
            ClassroomLogo: '\uEF75',
            Sections: '\uEF76',
            EditPhoto: '\uEF77',
            Starburst: '\uEF78',
            ShareiOS: '\uEF79',
            AirTickets: '\uEF7A',
            PencilReply: '\uEF7B',
            Tiles2: '\uEF7C',
            SkypeCircleCheck: '\uEF7D',
            SkypeCircleClock: '\uEF7E',
            SkypeCircleMinus: '\uEF7F',
            SkypeMessage: '\uEF83',
            ClosedCaption: '\uEF84',
            ATPLogo: '\uEF85',
            OfficeFormsLogoInverse: '\uEF86',
            RecycleBin: '\uEF87',
            EmptyRecycleBin: '\uEF88',
            Hide2: '\uEF89',
            Breadcrumb: '\uEF8C',
            BirthdayCake: '\uEF8D',
            TimeEntry: '\uEF95',
            CRMProcesses: '\uEFB1',
            PageEdit: '\uEFB6',
            PageArrowRight: '\uEFB8',
            PageRemove: '\uEFBA',
            Database: '\uEFC7',
            DataManagementSettings: '\uEFC8'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-7.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-8.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-8.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-8\"",
            src: "url('" + baseUrl + "fabric-icons-8-50fd817c.woff') format('woff')"
        },
        icons: {
            CRMServices: '\uEFD2',
            EditContact: '\uEFD3',
            ConnectContacts: '\uEFD4',
            AppIconDefaultAdd: '\uEFDA',
            AppIconDefaultList: '\uEFDE',
            ActivateOrders: '\uEFE0',
            DeactivateOrders: '\uEFE1',
            DocumentManagement: '\uEFFC',
            CRMReport: '\uEFFE',
            KnowledgeArticle: '\uF000',
            Relationship: '\uF003',
            HomeVerify: '\uF00E',
            ZipFolder: '\uF012',
            SurveyQuestions: '\uF01B',
            TextDocument: '\uF029',
            TextDocumentShared: '\uF02B',
            PageCheckedOut: '\uF02C',
            SaveAndClose: '\uF038',
            Script: '\uF03A',
            Archive: '\uF03F',
            ActivityFeed: '\uF056',
            Compare: '\uF057',
            EventDate: '\uF059',
            ArrowUpRight: '\uF069',
            CaretRight: '\uF06B',
            SetAction: '\uF071',
            CaretSolidLeft: '\uF08D',
            CaretSolidDown: '\uF08E',
            CaretSolidRight: '\uF08F',
            CaretSolidUp: '\uF090',
            PowerAppsLogo: '\uF091',
            PowerApps2Logo: '\uF092',
            SearchIssue: '\uF09A',
            SearchIssueMirrored: '\uF09B',
            FabricAssetLibrary: '\uF09C',
            FabricDataConnectionLibrary: '\uF09D',
            FabricDocLibrary: '\uF09E',
            FabricFormLibrary: '\uF09F',
            FabricFormLibraryMirrored: '\uF0A0',
            FabricReportLibrary: '\uF0A1',
            FabricReportLibraryMirrored: '\uF0A2',
            FabricPublicFolder: '\uF0A3',
            FabricFolderSearch: '\uF0A4',
            FabricMovetoFolder: '\uF0A5',
            FabricUnsyncFolder: '\uF0A6',
            FabricSyncFolder: '\uF0A7',
            FabricOpenFolderHorizontal: '\uF0A8',
            FabricFolder: '\uF0A9',
            FabricFolderFill: '\uF0AA',
            FabricNewFolder: '\uF0AB',
            FabricPictureLibrary: '\uF0AC',
            AddFavorite: '\uF0C8',
            AddFavoriteFill: '\uF0C9',
            BufferTimeBefore: '\uF0CF',
            BufferTimeAfter: '\uF0D0',
            BufferTimeBoth: '\uF0D1',
            PublishContent: '\uF0D4',
            ClipboardList: '\uF0E3',
            ClipboardListMirrored: '\uF0E4',
            CannedChat: '\uF0F2',
            SkypeForBusinessLogo: '\uF0FC',
            TabCenter: '\uF100',
            PageCheckedin: '\uF104',
            PageList: '\uF106',
            ReadOutLoud: '\uF112',
            CaretBottomLeftSolid8: '\uF121',
            CaretBottomRightSolid8: '\uF122',
            FolderHorizontal: '\uF12B',
            MicrosoftStaffhubLogo: '\uF130',
            GiftboxOpen: '\uF133',
            StatusCircleOuter: '\uF136',
            StatusCircleInner: '\uF137',
            StatusCircleRing: '\uF138',
            StatusTriangleOuter: '\uF139',
            StatusTriangleInner: '\uF13A',
            StatusTriangleExclamation: '\uF13B',
            StatusCircleExclamation: '\uF13C',
            StatusCircleErrorX: '\uF13D',
            StatusCircleInfo: '\uF13F',
            StatusCircleBlock: '\uF140',
            StatusCircleBlock2: '\uF141',
            StatusCircleQuestionMark: '\uF142',
            StatusCircleSync: '\uF143',
            Toll: '\uF160',
            ExploreContentSingle: '\uF164',
            CollapseContent: '\uF165',
            CollapseContentSingle: '\uF166',
            InfoSolid: '\uF167',
            ProgressRingDots: '\uF16A',
            CaloriesAdd: '\uF172',
            BranchFork: '\uF173',
            AddHome: '\uF17B',
            MobileReport: '\uF18A',
            ScaleVolume: '\uF18C',
            HardDriveGroup: '\uF18F',
            FastMode: '\uF19A',
            ToggleLeft: '\uF19E',
            ToggleRight: '\uF19F',
            TriangleShape: '\uF1A7',
            RectangleShape: '\uF1A9'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-8.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons-9.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons-9.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-9\"",
            src: "url('" + baseUrl + "fabric-icons-9-88060b8a.woff') format('woff')"
        },
        icons: {
            Trophy2: '\uF1AE',
            BucketColor: '\uF1B6',
            BucketColorFill: '\uF1B7',
            Taskboard: '\uF1C2',
            SingleColumn: '\uF1D3',
            DoubleColumn: '\uF1D4',
            TripleColumn: '\uF1D5',
            ColumnLeftTwoThirds: '\uF1D6',
            ColumnRightTwoThirds: '\uF1D7',
            AccessLogoFill: '\uF1DB',
            AnalyticsLogo: '\uF1DE',
            AnalyticsQuery: '\uF1DF',
            NewAnalyticsQuery: '\uF1E0',
            AnalyticsReport: '\uF1E1',
            WordLogo: '\uF1E3',
            WordLogoFill: '\uF1E4',
            ExcelLogo: '\uF1E5',
            ExcelLogoFill: '\uF1E6',
            OneNoteLogo: '\uF1E7',
            OneNoteLogoFill: '\uF1E8',
            OutlookLogo: '\uF1E9',
            OutlookLogoFill: '\uF1EA',
            PowerPointLogo: '\uF1EB',
            PowerPointLogoFill: '\uF1EC',
            PublisherLogo: '\uF1ED',
            PublisherLogoFill: '\uF1EE',
            ScheduleEventAction: '\uF1EF',
            FlameSolid: '\uF1F3',
            ServerProcesses: '\uF1FE',
            Server: '\uF201',
            SaveAll: '\uF203',
            LinkedInLogo: '\uF20A',
            Decimals: '\uF218',
            SidePanelMirrored: '\uF221',
            ProtectRestrict: '\uF22A',
            Blog: '\uF22B',
            UnknownMirrored: '\uF22E',
            PublicContactCardMirrored: '\uF230',
            GridViewSmall: '\uF232',
            GridViewMedium: '\uF233',
            GridViewLarge: '\uF234',
            Step: '\uF241',
            StepInsert: '\uF242',
            StepShared: '\uF243',
            StepSharedAdd: '\uF244',
            StepSharedInsert: '\uF245',
            ViewDashboard: '\uF246',
            ViewList: '\uF247',
            ViewListGroup: '\uF248',
            ViewListTree: '\uF249',
            TriggerAuto: '\uF24A',
            TriggerUser: '\uF24B',
            PivotChart: '\uF24C',
            StackedBarChart: '\uF24D',
            StackedLineChart: '\uF24E',
            BuildQueue: '\uF24F',
            BuildQueueNew: '\uF250',
            UserFollowed: '\uF25C',
            ContactLink: '\uF25F',
            Stack: '\uF26F',
            Bullseye: '\uF272',
            VennDiagram: '\uF273',
            FiveTileGrid: '\uF274',
            FocalPoint: '\uF277',
            RingerRemove: '\uF279',
            TeamsLogoInverse: '\uF27A',
            TeamsLogo: '\uF27B',
            TeamsLogoFill: '\uF27C',
            SkypeForBusinessLogoFill: '\uF27D',
            SharepointLogo: '\uF27E',
            SharepointLogoFill: '\uF27F',
            DelveLogo: '\uF280',
            DelveLogoFill: '\uF281',
            OfficeVideoLogo: '\uF282',
            OfficeVideoLogoFill: '\uF283',
            ExchangeLogo: '\uF284',
            ExchangeLogoFill: '\uF285',
            Signin: '\uF286',
            DocumentApproval: '\uF28B',
            CloneToDesktop: '\uF28C',
            InstallToDrive: '\uF28D',
            Blur: '\uF28E',
            Build: '\uF28F',
            ProcessMetaTask: '\uF290',
            BranchFork2: '\uF291',
            BranchLocked: '\uF292',
            BranchCommit: '\uF293',
            BranchCompare: '\uF294',
            BranchMerge: '\uF295',
            BranchPullRequest: '\uF296',
            BranchSearch: '\uF297',
            BranchShelveset: '\uF298',
            RawSource: '\uF299',
            MergeDuplicate: '\uF29A',
            RowsGroup: '\uF29B',
            RowsChild: '\uF29C',
            Deploy: '\uF29D',
            Redeploy: '\uF29E',
            ServerEnviroment: '\uF29F',
            VisioDiagram: '\uF2A0'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons-9.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/fabric-icons.js":
/*!***********************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/fabric-icons.js ***!
  \***********************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons\"",
            src: "url('" + baseUrl + "fabric-icons-a13498cf.woff') format('woff')"
        },
        icons: {
            GlobalNavButton: '\uE700',
            ChevronDown: '\uE70D',
            ChevronUp: '\uE70E',
            Edit: '\uE70F',
            Add: '\uE710',
            Cancel: '\uE711',
            More: '\uE712',
            Settings: '\uE713',
            Mail: '\uE715',
            Filter: '\uE71C',
            Search: '\uE721',
            Share: '\uE72D',
            BlockedSite: '\uE72F',
            FavoriteStar: '\uE734',
            FavoriteStarFill: '\uE735',
            CheckMark: '\uE73E',
            Delete: '\uE74D',
            ChevronLeft: '\uE76B',
            ChevronRight: '\uE76C',
            Calendar: '\uE787',
            Megaphone: '\uE789',
            Undo: '\uE7A7',
            Flag: '\uE7C1',
            Page: '\uE7C3',
            Pinned: '\uE840',
            View: '\uE890',
            Clear: '\uE894',
            Download: '\uE896',
            Upload: '\uE898',
            Folder: '\uE8B7',
            Sort: '\uE8CB',
            AlignRight: '\uE8E2',
            AlignLeft: '\uE8E4',
            Tag: '\uE8EC',
            AddFriend: '\uE8FA',
            Info: '\uE946',
            SortLines: '\uE9D0',
            List: '\uEA37',
            CircleRing: '\uEA3A',
            Heart: '\uEB51',
            HeartFill: '\uEB52',
            Tiles: '\uECA5',
            Embed: '\uECCE',
            Glimmer: '\uECF4',
            Ascending: '\uEDC0',
            Descending: '\uEDC1',
            SortUp: '\uEE68',
            SortDown: '\uEE69',
            SyncToPC: '\uEE6E',
            LargeGrid: '\uEECB',
            SkypeCheck: '\uEF80',
            SkypeClock: '\uEF81',
            SkypeMinus: '\uEF82',
            ClearFilter: '\uEF8F',
            Flow: '\uEF90',
            StatusCircleCheckmark: '\uF13E',
            MoreVertical: '\uF2BC'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}
//# sourceMappingURL=fabric-icons.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/iconAliases.js":
/*!**********************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/iconAliases.js ***!
  \**********************************************************/
/*! exports provided: registerIconAliases, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIconAliases", function() { return registerIconAliases; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");

var registerIconAliases = function () {
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIconAlias"])('trash', 'delete');
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIconAlias"])('onedrive', 'onedrivelogo');
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIconAlias"])('alertsolid12', 'eventdatemissed12');
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIconAlias"])('sixpointstar', '6pointstar');
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIconAlias"])('twelvepointstar', '12pointstar');
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIconAlias"])('toggleon', 'toggleleft');
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIconAlias"])('toggleoff', 'toggleright');
};
/* harmony default export */ __webpack_exports__["default"] = (registerIconAliases);
//# sourceMappingURL=iconAliases.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/index.js":
/*!****************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/index.js ***!
  \****************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _fabric_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fabric-icons */ "../node_modules/@uifabric/icons/lib/fabric-icons.js");
/* harmony import */ var _fabric_icons_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fabric-icons-0 */ "../node_modules/@uifabric/icons/lib/fabric-icons-0.js");
/* harmony import */ var _fabric_icons_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fabric-icons-1 */ "../node_modules/@uifabric/icons/lib/fabric-icons-1.js");
/* harmony import */ var _fabric_icons_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fabric-icons-2 */ "../node_modules/@uifabric/icons/lib/fabric-icons-2.js");
/* harmony import */ var _fabric_icons_3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fabric-icons-3 */ "../node_modules/@uifabric/icons/lib/fabric-icons-3.js");
/* harmony import */ var _fabric_icons_4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fabric-icons-4 */ "../node_modules/@uifabric/icons/lib/fabric-icons-4.js");
/* harmony import */ var _fabric_icons_5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fabric-icons-5 */ "../node_modules/@uifabric/icons/lib/fabric-icons-5.js");
/* harmony import */ var _fabric_icons_6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fabric-icons-6 */ "../node_modules/@uifabric/icons/lib/fabric-icons-6.js");
/* harmony import */ var _fabric_icons_7__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fabric-icons-7 */ "../node_modules/@uifabric/icons/lib/fabric-icons-7.js");
/* harmony import */ var _fabric_icons_8__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fabric-icons-8 */ "../node_modules/@uifabric/icons/lib/fabric-icons-8.js");
/* harmony import */ var _fabric_icons_9__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fabric-icons-9 */ "../node_modules/@uifabric/icons/lib/fabric-icons-9.js");
/* harmony import */ var _fabric_icons_10__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fabric-icons-10 */ "../node_modules/@uifabric/icons/lib/fabric-icons-10.js");
/* harmony import */ var _fabric_icons_11__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fabric-icons-11 */ "../node_modules/@uifabric/icons/lib/fabric-icons-11.js");
/* harmony import */ var _fabric_icons_12__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fabric-icons-12 */ "../node_modules/@uifabric/icons/lib/fabric-icons-12.js");
/* harmony import */ var _fabric_icons_13__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fabric-icons-13 */ "../node_modules/@uifabric/icons/lib/fabric-icons-13.js");
/* harmony import */ var _fabric_icons_14__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fabric-icons-14 */ "../node_modules/@uifabric/icons/lib/fabric-icons-14.js");
/* harmony import */ var _fabric_icons_15__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fabric-icons-15 */ "../node_modules/@uifabric/icons/lib/fabric-icons-15.js");
/* harmony import */ var _fabric_icons_16__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fabric-icons-16 */ "../node_modules/@uifabric/icons/lib/fabric-icons-16.js");
/* harmony import */ var _iconAliases__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./iconAliases */ "../node_modules/@uifabric/icons/lib/iconAliases.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./version */ "../node_modules/@uifabric/icons/lib/version.js");



















var DEFAULT_BASE_URL = 'https://spoprod-a.akamaihd.net/files/fabric/assets/icons/';
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = DEFAULT_BASE_URL; }
    [_fabric_icons__WEBPACK_IMPORTED_MODULE_0__["initializeIcons"], _fabric_icons_0__WEBPACK_IMPORTED_MODULE_1__["initializeIcons"], _fabric_icons_1__WEBPACK_IMPORTED_MODULE_2__["initializeIcons"], _fabric_icons_2__WEBPACK_IMPORTED_MODULE_3__["initializeIcons"], _fabric_icons_3__WEBPACK_IMPORTED_MODULE_4__["initializeIcons"], _fabric_icons_4__WEBPACK_IMPORTED_MODULE_5__["initializeIcons"], _fabric_icons_5__WEBPACK_IMPORTED_MODULE_6__["initializeIcons"], _fabric_icons_6__WEBPACK_IMPORTED_MODULE_7__["initializeIcons"], _fabric_icons_7__WEBPACK_IMPORTED_MODULE_8__["initializeIcons"], _fabric_icons_8__WEBPACK_IMPORTED_MODULE_9__["initializeIcons"], _fabric_icons_9__WEBPACK_IMPORTED_MODULE_10__["initializeIcons"], _fabric_icons_10__WEBPACK_IMPORTED_MODULE_11__["initializeIcons"], _fabric_icons_11__WEBPACK_IMPORTED_MODULE_12__["initializeIcons"], _fabric_icons_12__WEBPACK_IMPORTED_MODULE_13__["initializeIcons"], _fabric_icons_13__WEBPACK_IMPORTED_MODULE_14__["initializeIcons"], _fabric_icons_14__WEBPACK_IMPORTED_MODULE_15__["initializeIcons"], _fabric_icons_15__WEBPACK_IMPORTED_MODULE_16__["initializeIcons"], _fabric_icons_16__WEBPACK_IMPORTED_MODULE_17__["initializeIcons"]].forEach(function (initialize) { return initialize(baseUrl, options); });
    Object(_iconAliases__WEBPACK_IMPORTED_MODULE_18__["registerIconAliases"])();
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@uifabric/icons/lib/version.js":
/*!******************************************************!*\
  !*** ../node_modules/@uifabric/icons/lib/version.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "../node_modules/@uifabric/set-version/lib/index.js");
// @uifabric/icons@6.5.4
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/icons', '6.5.4');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/Stylesheet.js":
/*!****************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/Stylesheet.js ***!
  \****************************************************************/
/*! exports provided: InjectionMode, Stylesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return InjectionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return Stylesheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

var InjectionMode = {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    none: 0,
    /**
     * Inserts rules using the insertRule api.
     */
    insertNode: 1,
    /**
     * Appends rules using appendChild.
     */
    appendChild: 2
};
var STYLESHEET_SETTING = '__stylesheet__';
// tslint:disable-next-line:no-any
var _global = {};
// Grab window.
try {
    _global = window;
}
catch (_a) {
    /* leave as blank object */
}
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config) {
        this._rules = [];
        this._preservedRules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._keyToClassName = {};
        this._onResetCallbacks = [];
        // tslint:disable-next-line:no-any
        this._classNameToArgs = {};
        this._config = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ injectionMode: InjectionMode.insertNode, defaultPrefix: 'css', namespace: undefined, cspSettings: undefined }, config);
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        // tslint:disable-next-line:no-any
        _stylesheet = _global[STYLESHEET_SETTING];
        if (!_stylesheet || (_stylesheet._lastStyleElement && _stylesheet._lastStyleElement.ownerDocument !== document)) {
            // tslint:disable-next-line:no-string-literal
            var fabricConfig = (_global && _global['FabricConfig']) || {};
            _stylesheet = _global[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._config, config);
    };
    /**
     * Configures a reset callback.
     *
     * @param callback - A callback which will be called when the Stylesheet is reset.
     */
    Stylesheet.prototype.onReset = function (callback) {
        this._onResetCallbacks.push(callback);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var namespace = this._config.namespace;
        var prefix = displayName || this._config.defaultPrefix;
        return "" + (namespace ? namespace + '-' : '') + prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.args;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.rules;
    };
    /**
     * Inserts a css rule into the stylesheet.
     * @param preserve - Preserves the rule beyond a reset boundary.
     */
    Stylesheet.prototype.insertRule = function (rule, preserve) {
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== InjectionMode.none ? this._getStyleElement() : undefined;
        if (preserve) {
            this._preservedRules.push(rule);
        }
        if (element) {
            switch (this._config.injectionMode) {
                case InjectionMode.insertNode:
                    var sheet = element.sheet;
                    try {
                        sheet.insertRule(rule, sheet.cssRules.length);
                    }
                    catch (e) {
                        // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
                        // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
                        // which could be slower and bulkier.
                    }
                    break;
                case InjectionMode.appendChild:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        if (this._config.onInsertRule) {
            this._config.onInsertRule(rule);
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function (includePreservedRules) {
        return (includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('') + this._rulesToInsert.join('');
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        this._onResetCallbacks.forEach(function (callback) { return callback(); });
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = this._createStyleElement();
            // Reset the style element on the next frame.
            window.requestAnimationFrame(function () {
                _this._styleElement = undefined;
            });
        }
        return this._styleElement;
    };
    Stylesheet.prototype._createStyleElement = function () {
        var styleElement = document.createElement('style');
        styleElement.setAttribute('data-merge-styles', 'true');
        styleElement.type = 'text/css';
        var cspSettings = this._config.cspSettings;
        if (cspSettings) {
            if (cspSettings.nonce) {
                styleElement.setAttribute('nonce', cspSettings.nonce);
            }
        }
        if (this._lastStyleElement && this._lastStyleElement.nextElementSibling) {
            document.head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
        }
        else {
            document.head.appendChild(styleElement);
        }
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    return Stylesheet;
}());

//# sourceMappingURL=Stylesheet.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/concatStyleSets.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/concatStyleSets.js ***!
  \*********************************************************************/
/*! exports provided: concatStyleSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return concatStyleSets; });
/**
 * Combine a set of styles together (but does not register css classes).
 * @param styleSets - One or more stylesets to be merged (each param can also be falsy).
 */
function concatStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    if (styleSets && styleSets.length === 1 && styleSets[0] && !styleSets[0].subComponentStyles) {
        return styleSets[0];
    }
    var mergedSet = {};
    // We process sub component styles in two phases. First we collect them, then we combine them into 1 style function.
    var workingSubcomponentStyles = {};
    for (var _a = 0, styleSets_1 = styleSets; _a < styleSets_1.length; _a++) {
        var currentSet = styleSets_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    if (prop === 'subComponentStyles' && currentSet.subComponentStyles !== undefined) {
                        // subcomponent styles - style functions or objects
                        var currentComponentStyles = currentSet.subComponentStyles;
                        for (var subCompProp in currentComponentStyles) {
                            if (currentComponentStyles.hasOwnProperty(subCompProp)) {
                                if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                                    workingSubcomponentStyles[subCompProp].push(currentComponentStyles[subCompProp]);
                                }
                                else {
                                    workingSubcomponentStyles[subCompProp] = [currentComponentStyles[subCompProp]];
                                }
                            }
                        }
                        continue;
                    }
                    // the as any casts below is a workaround for ts 2.8.
                    // todo: remove cast to any in ts 2.9.
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = (Array.isArray(mergedValue) ? mergedValue : [mergedValue]).concat((Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    if (Object.keys(workingSubcomponentStyles).length > 0) {
        mergedSet.subComponentStyles = {};
        var mergedSubStyles = mergedSet.subComponentStyles;
        var _loop_1 = function (subCompProp) {
            if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                var workingSet_1 = workingSubcomponentStyles[subCompProp];
                mergedSubStyles[subCompProp] = function (styleProps) {
                    return concatStyleSets.apply(void 0, workingSet_1.map(function (styleFunctionOrObject) {
                        return typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject;
                    }));
                };
            }
        };
        // now we process the subcomponent styles if there are any
        for (var subCompProp in workingSubcomponentStyles) {
            _loop_1(subCompProp);
        }
    }
    return mergedSet;
}
//# sourceMappingURL=concatStyleSets.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/extractStyleParts.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/extractStyleParts.js ***!
  \***********************************************************************/
/*! exports provided: extractStyleParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractStyleParts", function() { return extractStyleParts; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheet */ "../node_modules/@uifabric/merge-styles/lib/Stylesheet.js");

/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects
    };
}
//# sourceMappingURL=extractStyleParts.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/fontFace.js":
/*!**************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/fontFace.js ***!
  \**************************************************************/
/*! exports provided: fontFace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return fontFace; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheet */ "../node_modules/@uifabric/merge-styles/lib/Stylesheet.js");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleToClassName */ "../node_modules/@uifabric/merge-styles/lib/styleToClassName.js");


/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance().insertRule("@font-face{" + Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_1__["serializeRuleEntries"])(font) + "}", true);
}
//# sourceMappingURL=fontFace.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/getVendorSettings.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/getVendorSettings.js ***!
  \***********************************************************************/
/*! exports provided: getVendorSettings, setVendorSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorSettings", function() { return getVendorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVendorSettings", function() { return setVendorSettings; });
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent)))
            };
        }
    }
    return _vendorSettings;
}
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}
//# sourceMappingURL=getVendorSettings.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/index.js ***!
  \***********************************************************/
/*! exports provided: mergeStyles, mergeStyleSets, concatStyleSets, fontFace, keyframes, InjectionMode, Stylesheet, setRTL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mergeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeStyles */ "../node_modules/@uifabric/merge-styles/lib/mergeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _mergeStyles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"]; });

/* harmony import */ var _mergeStyleSets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeStyleSets */ "../node_modules/@uifabric/merge-styles/lib/mergeStyleSets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _mergeStyleSets__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"]; });

/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concatStyleSets */ "../node_modules/@uifabric/merge-styles/lib/concatStyleSets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _concatStyleSets__WEBPACK_IMPORTED_MODULE_2__["concatStyleSets"]; });

/* harmony import */ var _fontFace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fontFace */ "../node_modules/@uifabric/merge-styles/lib/fontFace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _fontFace__WEBPACK_IMPORTED_MODULE_3__["fontFace"]; });

/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keyframes */ "../node_modules/@uifabric/merge-styles/lib/keyframes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _keyframes__WEBPACK_IMPORTED_MODULE_4__["keyframes"]; });

/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Stylesheet */ "../node_modules/@uifabric/merge-styles/lib/Stylesheet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _Stylesheet__WEBPACK_IMPORTED_MODULE_5__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _Stylesheet__WEBPACK_IMPORTED_MODULE_5__["Stylesheet"]; });

/* harmony import */ var _transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transforms/rtlifyRules */ "../node_modules/@uifabric/merge-styles/lib/transforms/rtlifyRules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return _transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_6__["setRTL"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./version */ "../node_modules/@uifabric/merge-styles/lib/version.js");








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/keyframes.js":
/*!***************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/keyframes.js ***!
  \***************************************************************/
/*! exports provided: keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheet */ "../node_modules/@uifabric/merge-styles/lib/Stylesheet.js");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleToClassName */ "../node_modules/@uifabric/merge-styles/lib/styleToClassName.js");


/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_1__["serializeRuleEntries"])(timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}", true);
    stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
    return name;
}
//# sourceMappingURL=keyframes.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/mergeStyleSets.js":
/*!********************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/mergeStyleSets.js ***!
  \********************************************************************/
/*! exports provided: mergeStyleSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return mergeStyleSets; });
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractStyleParts */ "../node_modules/@uifabric/merge-styles/lib/extractStyleParts.js");
/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concatStyleSets */ "../node_modules/@uifabric/merge-styles/lib/concatStyleSets.js");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleToClassName */ "../node_modules/@uifabric/merge-styles/lib/styleToClassName.js");



/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 */
function mergeStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var classNameSet = { subComponentStyles: {} };
    var classMap = {};
    var styleSet = styleSets[0];
    if (!styleSet && styleSets.length <= 1) {
        return { subComponentStyles: {} };
    }
    var concatenatedStyleSet = 
    // we have guarded against falsey values just above.
    styleSet;
    concatenatedStyleSet = _concatStyleSets__WEBPACK_IMPORTED_MODULE_1__["concatStyleSets"].apply(void 0, styleSets);
    var registrations = [];
    for (var styleSetArea in concatenatedStyleSet) {
        if (concatenatedStyleSet.hasOwnProperty(styleSetArea)) {
            if (styleSetArea === 'subComponentStyles') {
                classNameSet.subComponentStyles = concatenatedStyleSet.subComponentStyles || {};
                continue;
            }
            var styles = concatenatedStyleSet[styleSetArea];
            var _a = Object(_extractStyleParts__WEBPACK_IMPORTED_MODULE_0__["extractStyleParts"])(styles), classes = _a.classes, objects = _a.objects;
            var registration = Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__["styleToRegistration"])({ displayName: styleSetArea }, objects);
            registrations.push(registration);
            if (registration) {
                classMap[styleSetArea] = registration.className;
                // as any cast not needed in ts >=2.9
                classNameSet[styleSetArea] = classes.concat([registration.className]).join(' ');
            }
        }
    }
    for (var _b = 0, registrations_1 = registrations; _b < registrations_1.length; _b++) {
        var registration = registrations_1[_b];
        if (registration) {
            Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__["applyRegistration"])(registration, classMap);
        }
    }
    return classNameSet;
}
//# sourceMappingURL=mergeStyleSets.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/mergeStyles.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/mergeStyles.js ***!
  \*****************************************************************/
/*! exports provided: mergeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return mergeStyles; });
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleToClassName */ "../node_modules/@uifabric/merge-styles/lib/styleToClassName.js");
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractStyleParts */ "../node_modules/@uifabric/merge-styles/lib/extractStyleParts.js");


/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = Object(_extractStyleParts__WEBPACK_IMPORTED_MODULE_1__["extractStyleParts"])(args), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push(Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_0__["styleToClassName"])(objects));
    }
    return classes.join(' ');
}
//# sourceMappingURL=mergeStyles.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/styleToClassName.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/styleToClassName.js ***!
  \**********************************************************************/
/*! exports provided: serializeRuleEntries, styleToRegistration, applyRegistration, styleToClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeRuleEntries", function() { return serializeRuleEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToRegistration", function() { return styleToRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyRegistration", function() { return applyRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToClassName", function() { return styleToClassName; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheet */ "../node_modules/@uifabric/merge-styles/lib/Stylesheet.js");
/* harmony import */ var _transforms_kebabRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transforms/kebabRules */ "../node_modules/@uifabric/merge-styles/lib/transforms/kebabRules.js");
/* harmony import */ var _transforms_prefixRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transforms/prefixRules */ "../node_modules/@uifabric/merge-styles/lib/transforms/prefixRules.js");
/* harmony import */ var _transforms_provideUnits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transforms/provideUnits */ "../node_modules/@uifabric/merge-styles/lib/transforms/provideUnits.js");
/* harmony import */ var _transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transforms/rtlifyRules */ "../node_modules/@uifabric/merge-styles/lib/transforms/rtlifyRules.js");





var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
var globalSelectorRegExp = /\:global\((.+?)\)/g;
/**
 * Finds comma separated selectors in a :global() e.g. ":global(.class1, .class2, .class3)"
 * and wraps them each in their own global ":global(.class1), :global(.class2), :global(.class3)"
 *
 * @param selectorWithGlobals The selector to process
 * @returns The updated selector
 */
function expandCommaSeparatedGlobals(selectorWithGlobals) {
    // We the selector does not have a :global() we can shortcut
    if (!globalSelectorRegExp.test(selectorWithGlobals)) {
        return selectorWithGlobals;
    }
    var replacementInfo = [];
    var findGlobal = /\:global\((.+?)\)/g;
    var match = null;
    // Create a result list for global selectors so we can replace them.
    while ((match = findGlobal.exec(selectorWithGlobals))) {
        // Only if the found selector is a comma separated list we'll process it.
        if (match[1].indexOf(',') > -1) {
            replacementInfo.push([
                match.index,
                match.index + match[0].length,
                // Wrap each of the found selectors in :global()
                match[1]
                    .split(',')
                    .map(function (v) { return ":global(" + v.trim() + ")"; })
                    .join(', ')
            ]);
        }
    }
    // Replace the found selectors with their wrapped variants in reverse order
    return replacementInfo.reverse().reduce(function (selector, _a) {
        var matchIndex = _a[0], matchEndIndex = _a[1], replacement = _a[2];
        var prefix = selector.slice(0, matchIndex);
        var suffix = selector.slice(matchEndIndex);
        return prefix + replacement + suffix;
    }, selectorWithGlobals);
}
function expandSelector(newSelector, currentSelector) {
    if (newSelector.indexOf(':global(') >= 0) {
        return newSelector.replace(globalSelectorRegExp, '$1');
    }
    else if (newSelector.indexOf(':') === 0) {
        return currentSelector + newSelector;
    }
    else if (newSelector.indexOf('&') < 0) {
        return currentSelector + ' ' + newSelector;
    }
    return newSelector;
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            // tslint:disable-next-line:no-any
            for (var prop in arg) {
                if (prop === 'selectors') {
                    // tslint:disable-next-line:no-any
                    var selectors = arg.selectors;
                    for (var newSelector in selectors) {
                        if (selectors.hasOwnProperty(newSelector)) {
                            var selectorValue = selectors[newSelector];
                            if (newSelector.indexOf('@') === 0) {
                                newSelector = newSelector + '{' + currentSelector;
                                extractRules([selectorValue], rules, newSelector);
                            }
                            else if (newSelector.indexOf(',') > -1) {
                                var commaSeparatedSelectors = expandCommaSeparatedGlobals(newSelector)
                                    .split(/,/g)
                                    .map(function (s) { return s.trim(); });
                                extractRules([selectorValue], rules, commaSeparatedSelectors
                                    .map(function (commaSeparatedSelector) { return expandSelector(commaSeparatedSelector, currentSelector); })
                                    .join(', '));
                            }
                            else {
                                extractRules([selectorValue], rules, expandSelector(newSelector, currentSelector));
                            }
                        }
                    }
                }
                else {
                    if (arg[prop] !== undefined) {
                        // Else, add the rule to the currentSelector.
                        if (prop === 'margin' || prop === 'padding') {
                            // tslint:disable-next-line:no-any
                            expandQuads(currentRules, prop, arg[prop]);
                        }
                        else {
                            // tslint:disable-next-line:no-any
                            currentRules[prop] = arg[prop];
                        }
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = typeof value === 'string' ? value.split(' ') : [value];
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(rules) {
    var serialized = [];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function serializeRuleEntries(ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        Object(_transforms_kebabRules__WEBPACK_IMPORTED_MODULE_1__["kebabRules"])(allEntries, i);
        Object(_transforms_provideUnits__WEBPACK_IMPORTED_MODULE_3__["provideUnits"])(allEntries, i);
        Object(_transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_4__["rtlifyRules"])(allEntries, i);
        Object(_transforms_prefixRules__WEBPACK_IMPORTED_MODULE_2__["prefixRules"])(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
function styleToRegistration() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(rules);
    if (key) {
        var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
}
function applyRegistration(registration, classMap) {
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                // Fix selector using map.
                selector = selector.replace(/(&)|\$([\w-]+)\b/g, function (match, amp, cn) {
                    if (amp) {
                        return '.' + registration.className;
                    }
                    else if (cn) {
                        return '.' + ((classMap && classMap[cn]) || cn);
                    }
                    return '';
                });
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + (selector.indexOf('@') === 0 ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
function styleToClassName() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, args);
    if (registration) {
        applyRegistration(registration);
        return registration.className;
    }
    return '';
}
//# sourceMappingURL=styleToClassName.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/transforms/kebabRules.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/transforms/kebabRules.js ***!
  \***************************************************************************/
/*! exports provided: kebabRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabRules", function() { return kebabRules; });
var rules = {
    MozOsxFontSmoothing: '-moz-osx-font-smoothing',
    MsHighContrastAdjust: '-ms-high-contrast-adjust',
    WebkitFontSmoothing: '-webkit-font-smoothing',
    WebkitOverflowScrolling: '-webkit-overflow-scrolling',
    WebkitTapHighlightColor: '-webkit-tap-highlight-color',
    alignContent: 'align-content',
    alignItems: 'align-items',
    alignSelf: 'align-self',
    animation: 'animation',
    animationDelay: 'animation-delay',
    animationDirection: 'animation-direction',
    animationDuration: 'animation-duration',
    animationFillMode: 'animation-fill-mode',
    animationIterationCount: 'animation-iteration-count',
    animationName: 'animation-name',
    animationTimingFunction: 'animation-timing-function',
    background: 'background',
    backgroundClip: 'background-clip',
    backgroundColor: 'background-color',
    backgroundImage: 'background-image',
    backgroundPosition: 'background-position',
    border: 'border',
    borderBottom: 'border-bottom',
    borderBottomColor: 'border-bottom-color',
    borderBottomStyle: 'border-bottom-style',
    borderBottomWidth: 'border-bottom-width',
    borderCollapse: 'border-collapse',
    borderColor: 'border-color',
    borderLeft: 'border-left',
    borderRadius: 'border-radius',
    borderRight: 'border-right',
    borderStyle: 'border-style',
    borderTop: 'border-top',
    borderTopColor: 'border-top-color',
    borderTopLeftRadius: 'border-top-left-radius',
    borderTopRightRadius: 'border-top-right-radius',
    borderTopStyle: 'border-top-style',
    borderTopWidth: 'border-top-width',
    borderWidth: 'border-width',
    bordercolor: 'bordercolor',
    bottom: 'bottom',
    boxShadow: 'box-shadow',
    boxSizing: 'box-sizing',
    clear: 'clear',
    color: 'color',
    content: 'content',
    cursor: 'cursor',
    display: 'display',
    fill: 'fill',
    flex: 'flex',
    flexBasis: 'flex-basis',
    flexDirection: 'flex-direction',
    flexGrow: 'flex-grow',
    flexShrink: 'flex-shrink',
    flexWrap: 'flex-wrap',
    float: 'float',
    font: 'font',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontStyle: 'font-style',
    fontWeight: 'font-weight',
    height: 'height',
    justifyContent: 'justify-content',
    left: 'left',
    lineHeight: 'line-height',
    listStyle: 'list-style',
    listStyleType: 'list-style-type',
    marginBottom: 'margin-bottom',
    marginLeft: 'margin-left',
    marginRight: 'margin-right',
    marginTop: 'margin-top',
    maxHeight: 'max-height',
    maxWidth: 'max-width',
    minHeight: 'min-height',
    minWidth: 'min-width',
    mozOsxFontSmoothing: 'moz-osx-font-smoothing',
    objectFit: 'object-fit',
    opacity: 'opacity',
    order: 'order',
    outline: 'outline',
    outlineColor: 'outline-color',
    outlineOffset: 'outline-offset',
    overflow: 'overflow',
    overflowWrap: 'overflow-wrap',
    overflowX: 'overflow-x',
    overflowY: 'overflow-y',
    paddingBottom: 'padding-bottom',
    paddingLeft: 'padding-left',
    paddingRight: 'padding-right',
    paddingTop: 'padding-top',
    perspective: 'perspective',
    pointerEvents: 'pointer-events',
    position: 'position',
    resize: 'resize',
    right: 'right',
    speak: 'speak',
    src: 'src',
    tableLayout: 'table-layout',
    textAlign: 'text-align',
    textDecoration: 'text-decoration',
    textOverflow: 'text-overflow',
    textTransform: 'text-transform',
    top: 'top',
    transform: 'transform',
    transformOrigin: 'transform-origin',
    transition: 'transition',
    transitionDelay: 'transition-delay',
    transitionDuration: 'transition-duration',
    transitionProperty: 'transition-property',
    transitionTimingFunction: 'transition-timing-function',
    userSelect: 'user-select',
    verticalAlign: 'vertical-align',
    visibility: 'visibility',
    webkitFontSmoothing: 'webkit-font-smoothing',
    whiteSpace: 'white-space',
    width: 'width',
    wordBreak: 'word-break',
    wordWrap: 'word-wrap',
    zIndex: 'z-index'
};
function kebabRules(rulePairs, index) {
    var rule = rulePairs[index];
    rulePairs[index] = rules[rule] = rules[rule] || rule.replace(/([A-Z])/g, '-$1').toLowerCase();
}
//# sourceMappingURL=kebabRules.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/transforms/prefixRules.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/transforms/prefixRules.js ***!
  \****************************************************************************/
/*! exports provided: prefixRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixRules", function() { return prefixRules; });
/* harmony import */ var _getVendorSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getVendorSettings */ "../node_modules/@uifabric/merge-styles/lib/getVendorSettings.js");

var autoPrefixNames = {
    'user-select': 1
};
function prefixRules(rulePairs, index) {
    var vendorSettings = Object(_getVendorSettings__WEBPACK_IMPORTED_MODULE_0__["getVendorSettings"])();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}
//# sourceMappingURL=prefixRules.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/transforms/provideUnits.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/transforms/provideUnits.js ***!
  \*****************************************************************************/
/*! exports provided: provideUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideUnits", function() { return provideUnits; });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex-basis',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom'
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var unit = NON_PIXEL_NUMBER_PROPS.indexOf(name) === -1 ? 'px' : '';
        rulePairs[index + 1] = "" + value + unit;
    }
}
//# sourceMappingURL=provideUnits.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/transforms/rtlifyRules.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/transforms/rtlifyRules.js ***!
  \****************************************************************************/
/*! exports provided: setRTL, getRTL, rtlifyRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return setRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return getRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtlifyRules", function() { return rtlifyRules; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Stylesheet */ "../node_modules/@uifabric/merge-styles/lib/Stylesheet.js");

var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {},
    _a[LEFT] = RIGHT,
    _a[RIGHT] = LEFT,
    _a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize'
};
var _rtl = getRTL();
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance().resetKeys();
        _rtl = isRTL;
    }
}
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl = typeof document !== 'undefined' && !!document.documentElement && document.documentElement.getAttribute('dir') === 'rtl';
    }
    return _rtl;
}
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(rulePairs, index) {
    if (getRTL()) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}
var _a;
//# sourceMappingURL=rtlifyRules.js.map

/***/ }),

/***/ "../node_modules/@uifabric/merge-styles/lib/version.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/merge-styles/lib/version.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "../node_modules/@uifabric/set-version/lib/index.js");
// @uifabric/merge-styles@6.19.3
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/merge-styles', '6.19.3');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "../node_modules/@uifabric/set-version/lib/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/@uifabric/set-version/lib/index.js ***!
  \**********************************************************/
/*! exports provided: setVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setVersion */ "../node_modules/@uifabric/set-version/lib/setVersion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return _setVersion__WEBPACK_IMPORTED_MODULE_0__["setVersion"]; });



Object(_setVersion__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/set-version', '6.0.0');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@uifabric/set-version/lib/setVersion.js":
/*!***************************************************************!*\
  !*** ../node_modules/@uifabric/set-version/lib/setVersion.js ***!
  \***************************************************************/
/*! exports provided: setVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return setVersion; });
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
function setVersion(packageName, packageVersion) {
    if (typeof window !== 'undefined') {
        // tslint:disable-next-line:no-any
        var packages = (window.__packages__ = window.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}
//# sourceMappingURL=setVersion.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/MergeStyles.js":
/*!************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/MergeStyles.js ***!
  \************************************************************/
/*! exports provided: InjectionMode, Stylesheet, concatStyleSets, fontFace, keyframes, mergeStyleSets, mergeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["fontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"]; });


//# sourceMappingURL=MergeStyles.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/classNames/AnimationClassNames.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/classNames/AnimationClassNames.js ***!
  \*******************************************************************************/
/*! exports provided: AnimationClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return AnimationClassNames; });
/* harmony import */ var _utilities_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index */ "../node_modules/@uifabric/styling/lib/utilities/index.js");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index */ "../node_modules/@uifabric/styling/lib/styles/index.js");


/**
 * {@docCategory AnimationClassNames}
 */
var AnimationClassNames = Object(_utilities_index__WEBPACK_IMPORTED_MODULE_0__["buildClassMap"])(_styles_index__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"]);
//# sourceMappingURL=AnimationClassNames.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/classNames/ColorClassNames.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/classNames/ColorClassNames.js ***!
  \***************************************************************************/
/*! exports provided: ColorClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return ColorClassNames; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony import */ var _styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/DefaultPalette */ "../node_modules/@uifabric/styling/lib/styles/DefaultPalette.js");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index */ "../node_modules/@uifabric/styling/lib/styles/index.js");



var ColorClassNames = {};
for (var colorName in _styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]) {
    if (_styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"].hasOwnProperty(colorName)) {
        // Foreground color
        _defineGetter(ColorClassNames, colorName, '', false, 'color');
        // Hover color
        _defineGetter(ColorClassNames, colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(ColorClassNames, colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(ColorClassNames, colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(ColorClassNames, colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(ColorClassNames, colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            // tslint:disable-next-line:no-any
            var style = (_a = {}, _a[cssProperty] = Object(_styles_index__WEBPACK_IMPORTED_MODULE_2__["getTheme"])().palette[colorName], _a);
            return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"])(isHover ? { selectors: { ':hover': style } } : style).toString();
            var _a;
        },
        enumerable: true,
        configurable: true
    });
}
//# sourceMappingURL=ColorClassNames.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/classNames/FontClassNames.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/classNames/FontClassNames.js ***!
  \**************************************************************************/
/*! exports provided: FontClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return FontClassNames; });
/* harmony import */ var _utilities_buildClassMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/buildClassMap */ "../node_modules/@uifabric/styling/lib/utilities/buildClassMap.js");
/* harmony import */ var _styles_DefaultFontStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/DefaultFontStyles */ "../node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js");


/**
 * {@docCategory FontClassNames}
 */
var FontClassNames = Object(_utilities_buildClassMap__WEBPACK_IMPORTED_MODULE_0__["buildClassMap"])(_styles_DefaultFontStyles__WEBPACK_IMPORTED_MODULE_1__["DefaultFontStyles"]);
//# sourceMappingURL=FontClassNames.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/classNames/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/classNames/index.js ***!
  \*****************************************************************/
/*! exports provided: AnimationClassNames, FontClassNames, ColorClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimationClassNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationClassNames */ "../node_modules/@uifabric/styling/lib/classNames/AnimationClassNames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return _AnimationClassNames__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"]; });

/* harmony import */ var _FontClassNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FontClassNames */ "../node_modules/@uifabric/styling/lib/classNames/FontClassNames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return _FontClassNames__WEBPACK_IMPORTED_MODULE_1__["FontClassNames"]; });

/* harmony import */ var _ColorClassNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorClassNames */ "../node_modules/@uifabric/styling/lib/classNames/ColorClassNames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return _ColorClassNames__WEBPACK_IMPORTED_MODULE_2__["ColorClassNames"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/index.js":
/*!******************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/index.js ***!
  \******************************************************/
/*! exports provided: AnimationClassNames, FontClassNames, ColorClassNames, AnimationStyles, AnimationVariables, DefaultPalette, DefaultFontStyles, registerDefaultFontFaces, FontSizes, FontWeights, IconFontSizes, createFontStyles, getFocusStyle, focusClear, getFocusOutlineStyle, hiddenContentStyle, PulsingBeaconAnimationStyles, getGlobalClassNames, getThemedContext, ThemeSettingName, getTheme, loadTheme, createTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinUhfMobile, getScreenSelector, normalize, noWrap, getFadedOverflowStyle, getPlaceholderStyles, ZIndexes, buildClassMap, getIcon, registerIcons, registerIconAlias, unregisterIcons, setIconOptions, getIconClassName, InjectionMode, Stylesheet, concatStyleSets, fontFace, keyframes, mergeStyleSets, mergeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classNames_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classNames/index */ "../node_modules/@uifabric/styling/lib/classNames/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return _classNames_index__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return _classNames_index__WEBPACK_IMPORTED_MODULE_0__["FontClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return _classNames_index__WEBPACK_IMPORTED_MODULE_0__["ColorClassNames"]; });

/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index */ "../node_modules/@uifabric/styling/lib/styles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["registerDefaultFontFaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["createFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["focusClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusOutlineStyle", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getFocusOutlineStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["hiddenContentStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["PulsingBeaconAnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getThemedContext", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getThemedContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["loadTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["createTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["registerOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["removeOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelectorWhite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelectorBlack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinUhfMobile", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinUhfMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getScreenSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["noWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFadedOverflowStyle", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getFadedOverflowStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlaceholderStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getPlaceholderStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ZIndexes"]; });

/* harmony import */ var _utilities_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/index */ "../node_modules/@uifabric/styling/lib/utilities/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["buildClassMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["registerIconAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unregisterIcons", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["unregisterIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["setIconOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["getIconClassName"]; });

/* harmony import */ var _MergeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MergeStyles */ "../node_modules/@uifabric/styling/lib/MergeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["Stylesheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["concatStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["fontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["mergeStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["mergeStyles"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version */ "../node_modules/@uifabric/styling/lib/version.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/AnimationStyles.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/AnimationStyles.js ***!
  \***********************************************************************/
/*! exports provided: AnimationVariables, AnimationStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return AnimationVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return AnimationStyles; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");

/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 0 },
    to: { opacity: 1 }
});
var FADE_OUT = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 1 },
    to: { opacity: 0 }
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_DOWN98 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' }
});
var SCALE_DOWN100 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_UP103 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' }
});
var ROTATE90 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' }
});
var ROTATE_N90 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' }
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
var AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
var AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2)
    // expandCollapse 100/200/400, delay 100/200
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both'
    };
}
function _createSlideInX(fromX) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(" + fromX + "px,0,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideInY(fromY) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0," + fromY + "px,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideOutX(toX) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" }
    });
}
function _createSlideOutY(toY) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" }
    });
}
//# sourceMappingURL=AnimationStyles.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/CommonStyles.js":
/*!********************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/CommonStyles.js ***!
  \********************************************************************/
/*! exports provided: HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinUhfMobile, getScreenSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return HighContrastSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return HighContrastSelectorWhite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return HighContrastSelectorBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return ScreenWidthMinSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return ScreenWidthMinMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return ScreenWidthMinLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return ScreenWidthMinXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return ScreenWidthMinXXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return ScreenWidthMinXXXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return ScreenWidthMaxSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return ScreenWidthMaxMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return ScreenWidthMaxLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return ScreenWidthMaxXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return ScreenWidthMaxXXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinUhfMobile", function() { return ScreenWidthMinUhfMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return getScreenSelector; });
var HighContrastSelector = '@media screen and (-ms-high-contrast: active)';
var HighContrastSelectorWhite = '@media screen and (-ms-high-contrast: black-on-white)';
var HighContrastSelectorBlack = '@media screen and (-ms-high-contrast: white-on-black)';
var ScreenWidthMinSmall = 320;
var ScreenWidthMinMedium = 480;
var ScreenWidthMinLarge = 640;
var ScreenWidthMinXLarge = 1024;
var ScreenWidthMinXXLarge = 1366;
var ScreenWidthMinXXXLarge = 1920;
var ScreenWidthMaxSmall = ScreenWidthMinMedium - 1;
var ScreenWidthMaxMedium = ScreenWidthMinLarge - 1;
var ScreenWidthMaxLarge = ScreenWidthMinXLarge - 1;
var ScreenWidthMaxXLarge = ScreenWidthMinXXLarge - 1;
var ScreenWidthMaxXXLarge = ScreenWidthMinXXXLarge - 1;
var ScreenWidthMinUhfMobile = 768;
function getScreenSelector(min, max) {
    return "@media only screen and (min-width: " + min + "px) and (max-width: " + max + "px)";
}
//# sourceMappingURL=CommonStyles.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/DefaultEffects.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/DefaultEffects.js ***!
  \**********************************************************************/
/*! exports provided: DefaultEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEffects", function() { return DefaultEffects; });
var DefaultEffects = {
    // commented values are the defaults for Fluent
    elevation4: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation8: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation16: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation64: '0 0 5px 0 rgba(0,0,0,.4)',
    roundedCorner2: '0px' // 2
};
//# sourceMappingURL=DefaultEffects.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js ***!
  \*************************************************************************/
/*! exports provided: DefaultFontStyles, registerDefaultFontFaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return DefaultFontStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return registerDefaultFontFaces; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts */ "../node_modules/@uifabric/styling/lib/styles/fonts.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/utilities */ "../node_modules/@uifabric/utilities/lib/index.js");



// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
var DefaultFontStyles = Object(_fonts__WEBPACK_IMPORTED_MODULE_1__["createFontStyles"])(Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__["getLanguage"])());
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["fontFace"])({
        fontFamily: fontFamily,
        src: localFontSrc + ("url('" + url + ".woff2') format('woff2'),") + ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal'
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold, localFontName && localFontName + ' SemiBold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontFamilies"].Selawik, 'selawik', 'selawik');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var win = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__["getWindow"])();
    // tslint:disable-next-line:no-string-literal no-any
    var fabricConfig = win ? win['FabricConfig'] : undefined;
    return fabricConfig && fabricConfig.fontBaseUrl !== undefined ? fabricConfig.fontBaseUrl : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());
//# sourceMappingURL=DefaultFontStyles.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/DefaultPalette.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/DefaultPalette.js ***!
  \**********************************************************************/
/*! exports provided: DefaultPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return DefaultPalette; });
// When adding or removing a color, make sure you keep this consistent with IColorClassNames by adding the color variants.
var DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#212121',
    neutralPrimary: '#333333',
    neutralPrimaryAlt: '#3c3c3c',
    neutralSecondary: '#666666',
    neutralSecondaryAlt: '#767676',
    neutralTertiary: '#a6a6a6',
    neutralTertiaryAlt: '#c8c8c8',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralLight: '#eaeaea',
    neutralLighter: '#f4f4f4',
    neutralLighterAlt: '#f8f8f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellowDark: '#d29200',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a80000',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a'
};
//# sourceMappingURL=DefaultPalette.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/DefaultSpacing.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/DefaultSpacing.js ***!
  \**********************************************************************/
/*! exports provided: DefaultSpacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSpacing", function() { return DefaultSpacing; });
var DefaultSpacing = {
    s2: '4px',
    s1: '8px',
    m: '16px',
    l1: '20px',
    l2: '32px'
};
//# sourceMappingURL=DefaultSpacing.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/GeneralStyles.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/GeneralStyles.js ***!
  \*********************************************************************/
/*! exports provided: normalize, noWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return noWrap; });
// This file mimics styles and mixins from _General.Mixins.scss
var normalize = {
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
};
var noWrap = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};
//# sourceMappingURL=GeneralStyles.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/PulsingBeaconAnimationStyles.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/PulsingBeaconAnimationStyles.js ***!
  \************************************************************************************/
/*! exports provided: PulsingBeaconAnimationStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return PulsingBeaconAnimationStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");


var DEFAULT_DURATION = '14s';
var DEFAULT_DELAY = '2s';
var DEFAULT_ITERATION_COUNT = '1';
function _continuousPulseStepOne(beaconColorOne, innerDimension) {
    return {
        borderColor: beaconColorOne,
        borderWidth: '0px',
        width: innerDimension,
        height: innerDimension
    };
}
function _continuousPulseStepTwo(borderWidth) {
    return {
        opacity: 1,
        borderWidth: borderWidth
    };
}
function _continuousPulseStepThree() {
    return {
        opacity: 1
    };
}
function _continuousPulseStepFour(beaconColorTwo, outerDimension) {
    return {
        borderWidth: '0',
        width: outerDimension,
        height: outerDimension,
        opacity: 0,
        borderColor: beaconColorTwo
    };
}
function _continuousPulseStepFive(beaconColorOne, innerDimension) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _continuousPulseStepOne(beaconColorOne, innerDimension), {
        opacity: 0
    });
}
function _continuousPulseAnimationDouble(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["keyframes"])({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '1.42%': _continuousPulseStepTwo(borderWidth),
        '3.57%': _continuousPulseStepThree(),
        '7.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '8%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '29.99%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '30%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '31.42%': _continuousPulseStepTwo(borderWidth),
        '33.57%': _continuousPulseStepThree(),
        '37.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '38%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.42%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.43': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '81.85': _continuousPulseStepTwo(borderWidth),
        '83.42': _continuousPulseStepThree(),
        '87%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {}
    });
}
function _continuousPulseAnimationSingle(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["keyframes"])({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '14.2%': _continuousPulseStepTwo(borderWidth),
        '35.7%': _continuousPulseStepThree(),
        '71.4%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {}
    });
}
function _createDefaultAnimation(animationName, delayLength) {
    return {
        animationName: animationName,
        animationIterationCount: DEFAULT_ITERATION_COUNT,
        animationDuration: DEFAULT_DURATION,
        animationDelay: delayLength || DEFAULT_DELAY
    };
}
var PulsingBeaconAnimationStyles = {
    continuousPulseAnimationDouble: _continuousPulseAnimationDouble,
    continuousPulseAnimationSingle: _continuousPulseAnimationSingle,
    createDefaultAnimation: _createDefaultAnimation
};
//# sourceMappingURL=PulsingBeaconAnimationStyles.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/fonts.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/fonts.js ***!
  \*************************************************************/
/*! exports provided: LocalizedFontNames, LocalizedFontFamilies, FontSizes, FontWeights, IconFontSizes, createFontStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontNames", function() { return LocalizedFontNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontFamilies", function() { return LocalizedFontFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return FontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return FontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return IconFontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return createFontStyles; });
// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
})(LocalizedFontNames || (LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
})(LocalizedFontFamilies || (LocalizedFontFamilies = {}));
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '" + LocalizedFontNames.WestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    ar: LocalizedFontFamilies.Arabic,
    bg: LocalizedFontFamilies.Cyrillic,
    cs: LocalizedFontFamilies.EastEuropean,
    el: LocalizedFontFamilies.Greek,
    et: LocalizedFontFamilies.EastEuropean,
    he: LocalizedFontFamilies.Hebrew,
    hi: LocalizedFontFamilies.Hindi,
    hr: LocalizedFontFamilies.EastEuropean,
    hu: LocalizedFontFamilies.EastEuropean,
    ja: LocalizedFontFamilies.Japanese,
    kk: LocalizedFontFamilies.EastEuropean,
    ko: LocalizedFontFamilies.Korean,
    lt: LocalizedFontFamilies.EastEuropean,
    lv: LocalizedFontFamilies.EastEuropean,
    pl: LocalizedFontFamilies.EastEuropean,
    ru: LocalizedFontFamilies.Cyrillic,
    sk: LocalizedFontFamilies.EastEuropean,
    'sr-latn': LocalizedFontFamilies.EastEuropean,
    th: LocalizedFontFamilies.Thai,
    tr: LocalizedFontFamilies.EastEuropean,
    uk: LocalizedFontFamilies.Cyrillic,
    vi: LocalizedFontFamilies.Vietnamese,
    'zh-hans': LocalizedFontFamilies.ChineseSimplified,
    'zh-hant': LocalizedFontFamilies.ChineseTraditional
};
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.mini = '10px';
    FontSizes.xSmall = '11px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '13px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '15px';
    FontSizes.icon = '16px';
    FontSizes.large = '17px';
    FontSizes.xLarge = '21px';
    FontSizes.xLargePlus = '21px';
    FontSizes.xxLarge = '28px';
    FontSizes.xxLargePlus = '28px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '72px';
})(FontSizes || (FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights || (FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes || (IconFontSizes = {}));
function _fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + FontFamilyFallbacks;
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var semilightFontFamilyWithFallback = fontFamilyWithFallback;
    // Chrome has a bug where it does not render Segoe UI Semilight correctly, so we force the webfont to be used in that case
    if (localizedFont === defaultFontFamily) {
        semilightFontFamilyWithFallback = _fontFamilyWithFallbacks(LocalizedFontFamilies.WestEuropean);
    }
    var fontStyles = {
        tiny: _createFont(FontSizes.mini, FontWeights.semibold, fontFamilyWithFallback),
        xSmall: _createFont(FontSizes.xSmall, FontWeights.regular, fontFamilyWithFallback),
        small: _createFont(FontSizes.small, FontWeights.regular, fontFamilyWithFallback),
        smallPlus: _createFont(FontSizes.smallPlus, FontWeights.regular, fontFamilyWithFallback),
        medium: _createFont(FontSizes.medium, FontWeights.regular, fontFamilyWithFallback),
        mediumPlus: _createFont(FontSizes.mediumPlus, FontWeights.regular, fontFamilyWithFallback),
        large: _createFont(FontSizes.large, FontWeights.semilight, semilightFontFamilyWithFallback),
        xLarge: _createFont(FontSizes.xLarge, FontWeights.light, fontFamilyWithFallback),
        xLargePlus: _createFont(FontSizes.xLargePlus, FontWeights.light, fontFamilyWithFallback),
        xxLarge: _createFont(FontSizes.xxLarge, FontWeights.light, fontFamilyWithFallback),
        xxLargePlus: _createFont(FontSizes.xxLargePlus, FontWeights.light, fontFamilyWithFallback),
        superLarge: _createFont(FontSizes.superLarge, FontWeights.light, fontFamilyWithFallback),
        mega: _createFont(FontSizes.mega, FontWeights.light, fontFamilyWithFallback)
    };
    return fontStyles;
}
/**
 * If there is a localized font for this language, return that. Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // tslint:disable-next-line:no-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight
    };
}
//# sourceMappingURL=fonts.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/getFadedOverflowStyle.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/getFadedOverflowStyle.js ***!
  \*****************************************************************************/
/*! exports provided: getFadedOverflowStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFadedOverflowStyle", function() { return getFadedOverflowStyle; });
var DEFAULT_HEIGHT = '50%';
var DEFAULT_WIDTH = 20;
/**
 * - Generates a style used to fade out an overflowing content by defining a style for an :after pseudo element.
 * - Apply it to the :after selector for all combination of states the parent of content might have (normal, hover, selected, focus).
 * - Requires the target to have position set to relative and overflow set to hidden.
 *
 * @example
 * ```tsx
 * // Assuming the following DOM structure and the different background colors coming from the parent holding the content.
 * <div className={classNames.parent}>
 *   <span className={classNames.content}>Overflown Content</span>
 * </div>
 * ```
 * ```ts
 * // This is how the style set would look in Component.styles.ts
 * const { bodyBackground } = theme.semanticColors;
 * const { neutralLighter } = theme.palette;
 *
 * // The second argument of getFadedOverflowStyle function is a string representing a key of ISemanticColors or IPalette.
 *
 * const styles = {
 *   parent: [
 *     backgroundColor: bodyBackground,
 *     selectors: {
 *       '&:hover: {
 *         backgroundColor: neutralLighter
 *       },
 *       '$content:after': {
 *         ...getFadedOverflowStyle(theme, 'bodyBackground')
 *       },
 *       '&:hover $content:after': {
 *         ...getFadedOverflowStyle(theme, 'neutralLighter')
 *       }
 *     }
 *   ],
 *   content: [
 *     width: '100%',
 *     display: 'inline-block',
 *     position: 'relative',
 *     overflow: 'hidden'
 *   ]
 * }
 * ```
 * @param theme - The theme object to use.
 * @param color - The background color to fade out to. Accepts only keys of ISemanticColors or IPalette. Defaults to 'bodyBackground'.
 * @param direction - The direction of the overflow. Defaults to horizontal.
 * @param width - The width of the fading overflow. Vertical direction defaults it to 100% vs 20px when horizontal.
 * @param height - The Height of the fading overflow. Vertical direction defaults it to 50% vs 100% when horizontal.
 * @returns The style object.
 */
function getFadedOverflowStyle(theme, color, direction, width, height) {
    if (color === void 0) { color = 'bodyBackground'; }
    if (direction === void 0) { direction = 'horizontal'; }
    if (width === void 0) { width = getDefaultValue('width', direction); }
    if (height === void 0) { height = getDefaultValue('height', direction); }
    // Get the color value string from the theme semanticColors or palette.
    var colorValue = theme.semanticColors[color] || theme.palette[color];
    // Get the red, green, blue values of the colorValue.
    var rgbColor = color2rgb(colorValue);
    // Apply opacity 0 to serve as a start color of the gradient.
    var rgba = "rgba(" + rgbColor.r + ", " + rgbColor.g + ", " + rgbColor.b + ", 0)";
    // Get the direction of the gradient.
    var gradientDirection = direction === 'vertical' ? 'to bottom' : 'to right'; // mergeStyles take care of RTL direction.
    return {
        content: '""',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: width,
        height: height,
        pointerEvents: 'none',
        backgroundImage: "linear-gradient(" + gradientDirection + ", " + rgba + " 0%, " + colorValue + " 100%)"
    };
}
// TODO consider moving this to a separate module along with some more color functions from OUFR/utilities.
/**
 * Helper function to convert a string hex color to an RGB object.
 *
 * @param colorValue - Color to be converted from hex to rgba.
 */
function color2rgb(colorValue) {
    if (colorValue[0] === '#') {
        // If it's a hex code
        return {
            r: parseInt(colorValue.slice(1, 3), 16),
            g: parseInt(colorValue.slice(3, 5), 16),
            b: parseInt(colorValue.slice(5, 7), 16)
        };
    }
    else if (colorValue.indexOf('rgba(') === 0) {
        // If it's an rgba color string
        colorValue = colorValue.match(/rgba\(([^)]+)\)/)[1];
        var parts = colorValue.split(/ *, */).map(Number);
        return {
            r: parts[0],
            g: parts[1],
            b: parts[2]
        };
    }
    // The only remaining possibility is transparent.
    return {
        r: 255,
        g: 255,
        b: 255
    };
}
/**
 * Helper function to get the default values for parameters of main function.
 *
 * @param style - Which style to get the default value for.
 * @param direction - What direction to take into consideration.
 */
function getDefaultValue(style, direction) {
    if (style === 'width') {
        return direction === 'horizontal' ? DEFAULT_WIDTH : '100%';
    }
    else {
        return direction === 'vertical' ? DEFAULT_HEIGHT : '100%';
    }
}
//# sourceMappingURL=getFadedOverflowStyle.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/getFocusStyle.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/getFocusStyle.js ***!
  \*********************************************************************/
/*! exports provided: getFocusStyle, focusClear, getFocusOutlineStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return getFocusStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return focusClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusOutlineStyle", function() { return getFocusOutlineStyle; });
/* harmony import */ var _CommonStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonStyles */ "../node_modules/@uifabric/styling/lib/styles/CommonStyles.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "../node_modules/@uifabric/utilities/lib/index.js");
/* harmony import */ var _zIndexes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zIndexes */ "../node_modules/@uifabric/styling/lib/styles/zIndexes.js");



function getFocusStyle(theme, insetOrOptions, position, highContrastStyle, borderColor, outlineColor, isFocusedOnly) {
    if (typeof insetOrOptions === 'number' || !insetOrOptions) {
        return _getFocusStyleInternal(theme, { inset: insetOrOptions, position: position, highContrastStyle: highContrastStyle, borderColor: borderColor, outlineColor: outlineColor, isFocusedOnly: isFocusedOnly });
    }
    else {
        return _getFocusStyleInternal(theme, insetOrOptions);
    }
}
function _getFocusStyleInternal(theme, options) {
    if (options === void 0) { options = {}; }
    var _a = options.inset, inset = _a === void 0 ? 0 : _a, _b = options.width, width = _b === void 0 ? 1 : _b, _c = options.position, position = _c === void 0 ? 'relative' : _c, highContrastStyle = options.highContrastStyle, _d = options.borderColor, borderColor = _d === void 0 ? theme.palette.white : _d, _e = options.outlineColor, outlineColor = _e === void 0 ? theme.palette.neutralSecondary : _e, _f = options.isFocusedOnly, isFocusedOnly = _f === void 0 ? true : _f;
    return {
        // Clear browser-specific focus styles and use 'transparent' as placeholder for focus style.
        outline: 'transparent',
        // Requirement because pseudo-element is absolutely positioned.
        position: position,
        selectors: (_g = {
                // Clear the focus border in Firefox.
                // Reference: http://stackoverflow.com/a/199319/1436671
                '::-moz-focus-inner': {
                    border: '0'
                }
            },
            // When the element that uses this mixin is in a :focus state, add a pseudo-element to
            // create a border.
            _g["." + _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &" + (isFocusedOnly ? ':focus' : '') + ":after"] = {
                content: '""',
                position: 'absolute',
                left: inset + 1,
                top: inset + 1,
                bottom: inset + 1,
                right: inset + 1,
                border: width + "px solid " + borderColor,
                outline: width + "px solid " + outlineColor,
                zIndex: _zIndexes__WEBPACK_IMPORTED_MODULE_2__["ZIndexes"].FocusStyle,
                selectors: (_h = {},
                    _h[_CommonStyles__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = highContrastStyle,
                    _h)
            },
            _g)
    };
    var _g, _h;
}
/**
 * Generates style to clear browser specific focus styles.
 */
function focusClear() {
    return {
        selectors: {
            '&::-moz-focus-inner': {
                // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
                border: 0
            },
            '&': {
                // Clear browser specific focus styles and use transparent as placeholder for focus style
                outline: 'transparent'
            }
        }
    };
}
/**
 * Generates a style which can be used to set a border on focus.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border (default 0)
 * @param width - The border width in pixels (default 1)
 * @param color - Color of the outline (default `theme.palette.neutralSecondary`)
 * @returns The style object.
 */
function getFocusOutlineStyle(theme, inset, width, color) {
    if (inset === void 0) { inset = 0; }
    if (width === void 0) { width = 1; }
    return {
        selectors: (_a = {},
            _a[":global(" + _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + ") &:focus"] = {
                outline: width + " solid " + (color || theme.palette.neutralSecondary),
                outlineOffset: -inset + "px"
            },
            _a)
    };
    var _a;
}
//# sourceMappingURL=getFocusStyle.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/getGlobalClassNames.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/getGlobalClassNames.js ***!
  \***************************************************************************/
/*! exports provided: getGlobalClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return getGlobalClassNames; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "../node_modules/@uifabric/utilities/lib/index.js");


/**
 * Internal memoized function which simply takes in the class map and the
 * disable boolean. These immutable values can be memoized.
 */
var _getGlobalClassNames = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (classNames, disableGlobalClassNames) {
    var styleSheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    if (disableGlobalClassNames) {
        // disable global classnames
        return Object.keys(classNames).reduce(function (acc, className) {
            acc[className] = styleSheet.getClassName(classNames[className]);
            return acc;
        }, {});
    }
    // use global classnames
    return classNames;
});
/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 * Note that calls to this function are memoized.
 *
 * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
 * the same instance on each call to benefit from memoization.
 * @param theme - The theme to check the flag on
 * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
 */
function getGlobalClassNames(classNames, theme, disableGlobalClassNames) {
    return _getGlobalClassNames(classNames, disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames);
}
//# sourceMappingURL=getGlobalClassNames.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/getPlaceholderStyles.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/getPlaceholderStyles.js ***!
  \****************************************************************************/
/*! exports provided: getPlaceholderStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaceholderStyles", function() { return getPlaceholderStyles; });
/**
 * Generates placeholder style for each of the browsers supported by office-ui-fabric-react.
 * @param styles - The style to use.
 * @returns The placeholder style object for each browser depending on the placeholder directive it uses.
 */
function getPlaceholderStyles(styles) {
    return {
        selectors: {
            '::placeholder': styles,
            ':-ms-input-placeholder': styles,
            '::-ms-input-placeholder': styles // Edge
        }
    };
}
//# sourceMappingURL=getPlaceholderStyles.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/hiddenContentStyle.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/hiddenContentStyle.js ***!
  \**************************************************************************/
/*! exports provided: hiddenContentStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return hiddenContentStyle; });
var hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden'
};
//# sourceMappingURL=hiddenContentStyle.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/index.js ***!
  \*************************************************************/
/*! exports provided: AnimationStyles, AnimationVariables, DefaultPalette, DefaultFontStyles, registerDefaultFontFaces, FontSizes, FontWeights, IconFontSizes, createFontStyles, getFocusStyle, focusClear, getFocusOutlineStyle, hiddenContentStyle, PulsingBeaconAnimationStyles, getGlobalClassNames, getThemedContext, ThemeSettingName, getTheme, loadTheme, createTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinUhfMobile, getScreenSelector, normalize, noWrap, getFadedOverflowStyle, getPlaceholderStyles, ZIndexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationStyles */ "../node_modules/@uifabric/styling/lib/styles/AnimationStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__["AnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"]; });

/* harmony import */ var _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultPalette */ "../node_modules/@uifabric/styling/lib/styles/DefaultPalette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });

/* harmony import */ var _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultFontStyles */ "../node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["registerDefaultFontFaces"]; });

/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts */ "../node_modules/@uifabric/styling/lib/styles/fonts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _fonts__WEBPACK_IMPORTED_MODULE_3__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _fonts__WEBPACK_IMPORTED_MODULE_3__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _fonts__WEBPACK_IMPORTED_MODULE_3__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _fonts__WEBPACK_IMPORTED_MODULE_3__["createFontStyles"]; });

/* harmony import */ var _getFocusStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getFocusStyle */ "../node_modules/@uifabric/styling/lib/styles/getFocusStyle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return _getFocusStyle__WEBPACK_IMPORTED_MODULE_4__["getFocusStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return _getFocusStyle__WEBPACK_IMPORTED_MODULE_4__["focusClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusOutlineStyle", function() { return _getFocusStyle__WEBPACK_IMPORTED_MODULE_4__["getFocusOutlineStyle"]; });

/* harmony import */ var _hiddenContentStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hiddenContentStyle */ "../node_modules/@uifabric/styling/lib/styles/hiddenContentStyle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return _hiddenContentStyle__WEBPACK_IMPORTED_MODULE_5__["hiddenContentStyle"]; });

/* harmony import */ var _PulsingBeaconAnimationStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PulsingBeaconAnimationStyles */ "../node_modules/@uifabric/styling/lib/styles/PulsingBeaconAnimationStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return _PulsingBeaconAnimationStyles__WEBPACK_IMPORTED_MODULE_6__["PulsingBeaconAnimationStyles"]; });

/* harmony import */ var _getGlobalClassNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getGlobalClassNames */ "../node_modules/@uifabric/styling/lib/styles/getGlobalClassNames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return _getGlobalClassNames__WEBPACK_IMPORTED_MODULE_7__["getGlobalClassNames"]; });

/* harmony import */ var _scheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scheme */ "../node_modules/@uifabric/styling/lib/styles/scheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getThemedContext", function() { return _scheme__WEBPACK_IMPORTED_MODULE_8__["getThemedContext"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme */ "../node_modules/@uifabric/styling/lib/styles/theme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return _theme__WEBPACK_IMPORTED_MODULE_9__["ThemeSettingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return _theme__WEBPACK_IMPORTED_MODULE_9__["getTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return _theme__WEBPACK_IMPORTED_MODULE_9__["loadTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _theme__WEBPACK_IMPORTED_MODULE_9__["createTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return _theme__WEBPACK_IMPORTED_MODULE_9__["registerOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return _theme__WEBPACK_IMPORTED_MODULE_9__["removeOnThemeChangeCallback"]; });

/* harmony import */ var _CommonStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CommonStyles */ "../node_modules/@uifabric/styling/lib/styles/CommonStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["HighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["HighContrastSelectorWhite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["HighContrastSelectorBlack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMinSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMinMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMinLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMinXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMinXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMinXXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMaxSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMaxMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMaxLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMaxXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMaxXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinUhfMobile", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["ScreenWidthMinUhfMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_10__["getScreenSelector"]; });

/* harmony import */ var _GeneralStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GeneralStyles */ "../node_modules/@uifabric/styling/lib/styles/GeneralStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _GeneralStyles__WEBPACK_IMPORTED_MODULE_11__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return _GeneralStyles__WEBPACK_IMPORTED_MODULE_11__["noWrap"]; });

/* harmony import */ var _getFadedOverflowStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getFadedOverflowStyle */ "../node_modules/@uifabric/styling/lib/styles/getFadedOverflowStyle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFadedOverflowStyle", function() { return _getFadedOverflowStyle__WEBPACK_IMPORTED_MODULE_12__["getFadedOverflowStyle"]; });

/* harmony import */ var _getPlaceholderStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getPlaceholderStyles */ "../node_modules/@uifabric/styling/lib/styles/getPlaceholderStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlaceholderStyles", function() { return _getPlaceholderStyles__WEBPACK_IMPORTED_MODULE_13__["getPlaceholderStyles"]; });

/* harmony import */ var _zIndexes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./zIndexes */ "../node_modules/@uifabric/styling/lib/styles/zIndexes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return _zIndexes__WEBPACK_IMPORTED_MODULE_14__["ZIndexes"]; });
















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/scheme.js":
/*!**************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/scheme.js ***!
  \**************************************************************/
/*! exports provided: getThemedContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemedContext", function() { return getThemedContext; });
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "../node_modules/@uifabric/utilities/lib/index.js");

/**
 * @internal
 * This function is still in experimental phase in support of Foundation experimental development. Its API signature and existence
 * are subject to change.
 *
 * Modify context to activate the specified scheme or theme. For schemes, look in context (if available) and fall back to global
 * Customizations. If both scheme and theme are specified, scheme will be looked up in theme. In this case, scheme must be
 * present in theme arg, otherwise new context will default to theme arg (there is no fallback to settings to look up scheme.)
 *
 * @param context - Context in which to get schemed customizations.
 * @param scheme - Scheme to get customizations for from theme arg (if supplied) OR from context and global settings.
 * @param theme - Theme to merge into context.
 * @returns modified schemed context if scheme is valid and not already applied, unmodified context otherwise.
 */
function getThemedContext(context, scheme, theme) {
    var newContext = context;
    var newSettings;
    // Only fall back to context and customizations when theme arg is not provided.
    var schemeSource = theme || _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Customizations"].getSettings(['theme'], undefined, context.customizations).theme;
    if (theme) {
        newSettings = { theme: theme };
    }
    var schemeTheme = scheme && schemeSource && schemeSource.schemes && schemeSource.schemes[scheme];
    // These first two checks are logically redundant but TS doesn't infer schemeSource.schemes is defined when schemeTheme is defined.
    if (schemeSource && schemeTheme && schemeSource !== schemeTheme) {
        newSettings = { theme: schemeTheme };
        newSettings.theme.schemes = schemeSource.schemes;
    }
    if (newSettings) {
        newContext = {
            customizations: {
                settings: Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["mergeSettings"])(context.customizations.settings, newSettings),
                scopedSettings: context.customizations.scopedSettings
            }
        };
    }
    return newContext;
}
//# sourceMappingURL=scheme.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/theme.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/theme.js ***!
  \*************************************************************/
/*! exports provided: ThemeSettingName, getTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, loadTheme, createTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return ThemeSettingName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return registerOnThemeChangeCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return removeOnThemeChangeCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return loadTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return createTheme; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "../node_modules/@uifabric/utilities/lib/index.js");
/* harmony import */ var _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultFontStyles */ "../node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js");
/* harmony import */ var _DefaultPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultPalette */ "../node_modules/@uifabric/styling/lib/styles/DefaultPalette.js");
/* harmony import */ var _DefaultSpacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultSpacing */ "../node_modules/@uifabric/styling/lib/styles/DefaultSpacing.js");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "../node_modules/@microsoft/load-themed-styles/lib-es6/index.js");
/* harmony import */ var _DefaultEffects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DefaultEffects */ "../node_modules/@uifabric/styling/lib/styles/DefaultEffects.js");







var _theme = createTheme({
    palette: _DefaultPalette__WEBPACK_IMPORTED_MODULE_3__["DefaultPalette"],
    semanticColors: _makeSemanticColorsFromPalette(_DefaultPalette__WEBPACK_IMPORTED_MODULE_3__["DefaultPalette"], false, false),
    fonts: _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"],
    isInverted: false,
    disableGlobalClassNames: false
});
var _onThemeChangeCallbacks = [];
var ThemeSettingName = 'theme';
if (!_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Customizations"].getSettings([ThemeSettingName]).theme) {
    var win = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getWindow"])();
    // tslint:disable:no-string-literal no-any
    if (win && win['FabricConfig'] && win['FabricConfig'].theme) {
        _theme = createTheme(win['FabricConfig'].theme);
    }
    // tslint:enable:no-string-literal no-any
    // Set the default theme.
    _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Customizations"].applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
}
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = createTheme({}, depComments);
    }
    return _theme;
}
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function loadTheme(theme, depComments) {
    if (depComments === void 0) { depComments = false; }
    _theme = createTheme(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_5__["loadTheme"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _theme.palette, _theme.semanticColors, _theme.effects, _loadFonts(_theme)));
    _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Customizations"].applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
    var _a;
}
/**
 * Loads font variables into a JSON object.
 * @param theme - The theme object
 */
function _loadFonts(theme) {
    var lines = {};
    for (var _i = 0, _a = Object.keys(theme.fonts); _i < _a.length; _i++) {
        var fontName = _a[_i];
        var font = theme.fonts[fontName];
        for (var _b = 0, _c = Object.keys(font); _b < _c.length; _b++) {
            var propName = _c[_b];
            var name_1 = fontName + propName.charAt(0).toUpperCase() + propName.slice(1);
            var value = font[propName];
            if (propName === 'fontSize' && typeof value === 'number') {
                value = value + 'px';
            }
            lines[name_1] = value;
        }
    }
    return lines;
}
/**
 * Creates a custom theme definition which can be used with the Customizer.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (depComments === void 0) { depComments = false; }
    var newPalette = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _DefaultPalette__WEBPACK_IMPORTED_MODULE_3__["DefaultPalette"], theme.palette);
    if (!theme.palette || !theme.palette.accent) {
        newPalette.accent = newPalette.themePrimary;
    }
    // mix in custom overrides with good slots first, since custom overrides might be used in fixing deprecated slots
    var newSemanticColors = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _makeSemanticColorsFromPalette(newPalette, !!theme.isInverted, depComments), theme.semanticColors);
    var defaultFontStyles = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"]);
    if (theme.defaultFontStyle) {
        for (var _i = 0, _a = Object.keys(defaultFontStyles); _i < _a.length; _i++) {
            var fontStyle = _a[_i];
            defaultFontStyles[fontStyle] = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, defaultFontStyles[fontStyle], theme.defaultFontStyle);
        }
    }
    if (theme.fonts) {
        for (var _b = 0, _c = Object.keys(theme.fonts); _b < _c.length; _b++) {
            var fontStyle = _c[_b];
            defaultFontStyles[fontStyle] = Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, defaultFontStyles[fontStyle], theme.fonts[fontStyle]);
        }
    }
    return {
        palette: newPalette,
        fonts: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultFontStyles),
        semanticColors: newSemanticColors,
        isInverted: !!theme.isInverted,
        disableGlobalClassNames: !!theme.disableGlobalClassNames,
        spacing: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _DefaultSpacing__WEBPACK_IMPORTED_MODULE_4__["DefaultSpacing"], theme.spacing),
        effects: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _DefaultEffects__WEBPACK_IMPORTED_MODULE_6__["DefaultEffects"], theme.effects)
    };
}
/**
 * Helper to pull a given property name from a given set of sources, in order, if available. Otherwise returns the property name.
 */
function _expandFrom(propertyName) {
    var maps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        maps[_i - 1] = arguments[_i];
    }
    if (propertyName) {
        for (var _a = 0, maps_1 = maps; _a < maps_1.length; _a++) {
            var map = maps_1[_a];
            if (map[propertyName]) {
                return map[propertyName];
            }
        }
    }
    return propertyName;
}
// Generates all the semantic slot colors based on the Fabric palette.
// We'll use these as fallbacks for semantic slots that the passed in theme did not define.
function _makeSemanticColorsFromPalette(p, isInverted, depComments) {
    var toReturn = {
        bodyBackground: p.white,
        bodyStandoutBackground: p.neutralLighterAlt,
        bodyFrameBackground: p.white,
        bodyFrameDivider: p.neutralLight,
        bodyText: p.neutralPrimary,
        bodyTextChecked: p.black,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralLight,
        disabledBackground: p.neutralLighter,
        disabledText: p.neutralTertiary,
        disabledBodyText: p.neutralTertiary,
        disabledSubtext: p.neutralQuaternary,
        disabledBodySubtext: p.neutralTertiaryAlt,
        focusBorder: p.neutralSecondary,
        variantBorder: p.neutralLight,
        variantBorderHovered: p.neutralTertiary,
        defaultStateBackground: p.neutralLighterAlt,
        errorText: !isInverted ? p.redDark : '#ff5f5f',
        warningText: !isInverted ? '#333333' : '#ffffff',
        successText: !isInverted ? '#107C10' : '#92c353',
        errorBackground: !isInverted ? 'rgba(232, 17, 35, .2)' : 'rgba(232, 17, 35, .5)',
        blockingBackground: !isInverted ? 'rgba(234, 67, 0, .2)' : 'rgba(234, 67, 0, .5)',
        warningBackground: !isInverted ? 'rgba(255, 185, 0, .2)' : 'rgba(255, 251, 0, .6)',
        warningHighlight: !isInverted ? '#ffb900' : '#fff100',
        successBackground: !isInverted ? 'rgba(186, 216, 10, .2)' : 'rgba(186, 216, 10, .4)',
        inputBorder: p.neutralTertiary,
        inputBorderHovered: p.neutralPrimary,
        inputBackground: p.white,
        inputBackgroundChecked: p.themePrimary,
        inputBackgroundCheckedHovered: p.themeDarkAlt,
        inputForegroundChecked: p.white,
        inputFocusBorderAlt: p.themePrimary,
        smallInputBorder: p.neutralSecondary,
        inputText: p.neutralPrimary,
        inputTextHovered: p.neutralDark,
        inputPlaceholderText: p.neutralSecondary,
        buttonBackground: p.neutralLighter,
        buttonBackgroundChecked: p.neutralTertiaryAlt,
        buttonBackgroundHovered: p.neutralLight,
        buttonBackgroundCheckedHovered: p.neutralLight,
        buttonBackgroundPressed: p.neutralLight,
        buttonBackgroundDisabled: p.neutralLighter,
        buttonBorder: 'transparent',
        buttonText: p.neutralPrimary,
        buttonTextHovered: p.neutralDark,
        buttonTextChecked: p.neutralDark,
        buttonTextCheckedHovered: p.black,
        buttonTextPressed: p.neutralDark,
        buttonTextDisabled: p.neutralTertiary,
        buttonBorderDisabled: 'transparent',
        primaryButtonBackground: p.themePrimary,
        primaryButtonBackgroundHovered: p.themeDarkAlt,
        primaryButtonBackgroundPressed: p.themeDark,
        primaryButtonBackgroundDisabled: p.neutralLighter,
        primaryButtonBorder: 'transparent',
        primaryButtonText: p.white,
        primaryButtonTextHovered: p.white,
        primaryButtonTextPressed: p.white,
        primaryButtonTextDisabled: p.neutralQuaternary,
        accentButtonBackground: p.accent,
        accentButtonText: p.white,
        menuBackground: p.white,
        menuDivider: p.neutralTertiaryAlt,
        menuIcon: p.themePrimary,
        menuHeader: p.themePrimary,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundPressed: p.neutralLight,
        menuItemText: p.neutralPrimary,
        menuItemTextHovered: p.neutralDark,
        listBackground: p.white,
        listText: p.neutralPrimary,
        listItemBackgroundHovered: p.neutralLighter,
        listItemBackgroundChecked: p.neutralLight,
        listItemBackgroundCheckedHovered: p.neutralQuaternaryAlt,
        listHeaderBackgroundHovered: p.neutralLighter,
        listHeaderBackgroundPressed: p.neutralLight,
        actionLink: p.neutralPrimary,
        actionLinkHovered: p.neutralDark,
        link: p.themePrimary,
        linkHovered: p.themeDarker,
        // Deprecated slots, second pass by _fixDeprecatedSlots() later for self-referential slots
        listTextColor: '',
        menuItemBackgroundChecked: p.neutralLight
    };
    return _fixDeprecatedSlots(toReturn, depComments);
}
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    return s;
}
var _a;
//# sourceMappingURL=theme.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/styles/zIndexes.js":
/*!****************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/styles/zIndexes.js ***!
  \****************************************************************/
/*! exports provided: ZIndexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return ZIndexes; });
var ZIndexes;
(function (ZIndexes) {
    ZIndexes.Nav = 1;
    /**
     * @deprecated ScrollablePane
     */
    ZIndexes.ScrollablePane = 1;
    ZIndexes.FocusStyle = 1;
    ZIndexes.Coachmark = 1000;
    ZIndexes.Layer = 1000000;
    ZIndexes.KeytipLayer = 1000001;
})(ZIndexes || (ZIndexes = {}));
//# sourceMappingURL=zIndexes.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/utilities/buildClassMap.js":
/*!************************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/utilities/buildClassMap.js ***!
  \************************************************************************/
/*! exports provided: buildClassMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return buildClassMap; });
/* harmony import */ var _MergeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MergeStyles */ "../node_modules/@uifabric/styling/lib/MergeStyles.js");

/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    var classes = {};
    var _loop_1 = function (styleName) {
        if (styles.hasOwnProperty(styleName)) {
            var className_1;
            Object.defineProperty(classes, styleName, {
                get: function () {
                    if (className_1 === undefined) {
                        // tslint:disable-next-line:no-any
                        className_1 = Object(_MergeStyles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"])(styles[styleName]).toString();
                    }
                    return className_1;
                },
                enumerable: true,
                configurable: true
            });
        }
    };
    for (var styleName in styles) {
        _loop_1(styleName);
    }
    return classes;
}
//# sourceMappingURL=buildClassMap.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/utilities/getIconClassName.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/utilities/getIconClassName.js ***!
  \***************************************************************************/
/*! exports provided: getIconClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return getIconClassName; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "../node_modules/@uifabric/styling/lib/utilities/icons.js");


var defaultIconStyles = {
    display: 'inline-block'
};
/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
function getIconClassName(name) {
    var className = '';
    var icon = Object(_icons__WEBPACK_IMPORTED_MODULE_1__["getIcon"])(name);
    if (icon) {
        className = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"])(icon.subset.className, defaultIconStyles, {
            selectors: {
                '::before': {
                    content: "\"" + icon.code + "\""
                }
            }
        });
    }
    return className;
}
//# sourceMappingURL=getIconClassName.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/utilities/icons.js":
/*!****************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/utilities/icons.js ***!
  \****************************************************************/
/*! exports provided: registerIcons, unregisterIcons, registerIconAlias, getIcon, setIconOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return registerIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterIcons", function() { return unregisterIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return registerIconAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return getIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return setIconOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "../node_modules/@uifabric/utilities/lib/index.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");



var ICON_SETTING_NAME = 'icons';
var _iconSettings = _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["GlobalSettings"].getValue(ICON_SETTING_NAME, {
    __options: {
        disableWarnings: false,
        warnOnMissingIcons: true
    },
    __remapped: {}
});
// Reset icon registration on stylesheet resets.
var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["Stylesheet"].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () {
        for (var name_1 in _iconSettings) {
            if (_iconSettings.hasOwnProperty(name_1) && !!_iconSettings[name_1].subset) {
                _iconSettings[name_1].subset.className = undefined;
            }
        }
    });
}
/**
 * Normalizes an icon name for consistent mapping.
 * Current implementation is to convert the icon name to lower case.
 *
 * @param name - Icon name to normalize.
 * @returns {string} Normalized icon name to use for indexing and mapping.
 */
var normalizeIconName = function (name) { return name.toLowerCase(); };
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
function registerIcons(iconSubset, options) {
    var subset = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, iconSubset, { isRegistered: false, className: undefined });
    var icons = iconSubset.icons;
    // Grab options, optionally mix user provided ones on top.
    options = options ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _iconSettings.__options, options) : _iconSettings.__options;
    for (var iconName in icons) {
        if (icons.hasOwnProperty(iconName)) {
            var code = icons[iconName];
            var normalizedIconName = normalizeIconName(iconName);
            if (_iconSettings[normalizedIconName]) {
                _warnDuplicateIcon(iconName);
            }
            else {
                _iconSettings[normalizedIconName] = {
                    code: code,
                    subset: subset
                };
            }
        }
    }
}
/**
 * Unregisters icons by name.
 *
 * @param iconNames - List of icons to unregister.
 */
function unregisterIcons(iconNames) {
    var options = _iconSettings.__options;
    var _loop_1 = function (iconName) {
        var normalizedIconName = normalizeIconName(iconName);
        if (_iconSettings[normalizedIconName]) {
            delete _iconSettings[normalizedIconName];
        }
        else {
            // Warn that we are trying to delete an icon that doesn't exist
            if (!options.disableWarnings) {
                Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warn"])("The icon \"" + iconName + "\" tried to unregister but was not registered.");
            }
        }
        // Delete any aliases for this iconName
        if (_iconSettings.__remapped[normalizedIconName]) {
            delete _iconSettings.__remapped[normalizedIconName];
        }
        // Delete any items that were an alias for this iconName
        Object.keys(_iconSettings.__remapped).forEach(function (key) {
            if (_iconSettings.__remapped[key] === normalizedIconName) {
                delete _iconSettings.__remapped[key];
            }
        });
    };
    for (var _i = 0, iconNames_1 = iconNames; _i < iconNames_1.length; _i++) {
        var iconName = iconNames_1[_i];
        _loop_1(iconName);
    }
}
/**
 * Remaps one icon name to another.
 */
function registerIconAlias(iconName, mappedToName) {
    _iconSettings.__remapped[normalizeIconName(iconName)] = normalizeIconName(mappedToName);
}
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
function getIcon(name) {
    var icon = undefined;
    var options = _iconSettings.__options;
    name = name ? normalizeIconName(name) : '';
    name = _iconSettings.__remapped[name] || name;
    if (name) {
        icon = _iconSettings[name];
        if (icon) {
            var subset = icon.subset;
            if (subset && subset.fontFace) {
                if (!subset.isRegistered) {
                    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["fontFace"])(subset.fontFace);
                    subset.isRegistered = true;
                }
                if (!subset.className) {
                    subset.className = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["mergeStyles"])(subset.style, {
                        fontFamily: subset.fontFace.fontFamily,
                        fontWeight: subset.fontFace.fontWeight || 'normal',
                        fontStyle: subset.fontFace.fontStyle || 'normal'
                    });
                }
            }
        }
        else {
            if (!options.disableWarnings && options.warnOnMissingIcons) {
                Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warn"])("The icon \"" + name + "\" was used but not registered. See http://aka.ms/fabric-icon-usage for more information.");
            }
        }
    }
    return icon;
}
/**
 * Sets the icon options.
 *
 * @public
 */
function setIconOptions(options) {
    _iconSettings.__options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _iconSettings.__options, options);
}
var _missingIcons = [];
var _missingIconsTimer = undefined;
function _warnDuplicateIcon(iconName) {
    var options = _iconSettings.__options;
    var warningDelay = 2000;
    var maxIconsInMessage = 10;
    if (!options.disableWarnings) {
        _missingIcons.push(iconName);
        if (_missingIconsTimer === undefined) {
            _missingIconsTimer = setTimeout(function () {
                Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warn"])("Some icons were re-registered. Applications should only call registerIcons for any given " +
                    "icon once. Redefining what an icon is may have unintended consequences. Duplicates " +
                    "include: \n" +
                    _missingIcons.slice(0, maxIconsInMessage).join(', ') +
                    (_missingIcons.length > maxIconsInMessage ? " (+ " + (_missingIcons.length - maxIconsInMessage) + " more)" : ''));
                _missingIconsTimer = undefined;
                _missingIcons = [];
            }, warningDelay);
        }
    }
}
//# sourceMappingURL=icons.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/utilities/index.js":
/*!****************************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/utilities/index.js ***!
  \****************************************************************/
/*! exports provided: buildClassMap, getIcon, registerIcons, registerIconAlias, unregisterIcons, setIconOptions, getIconClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buildClassMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildClassMap */ "../node_modules/@uifabric/styling/lib/utilities/buildClassMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return _buildClassMap__WEBPACK_IMPORTED_MODULE_0__["buildClassMap"]; });

/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "../node_modules/@uifabric/styling/lib/utilities/icons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["registerIconAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unregisterIcons", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["unregisterIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["setIconOptions"]; });

/* harmony import */ var _getIconClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getIconClassName */ "../node_modules/@uifabric/styling/lib/utilities/getIconClassName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return _getIconClassName__WEBPACK_IMPORTED_MODULE_2__["getIconClassName"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@uifabric/styling/lib/version.js":
/*!********************************************************!*\
  !*** ../node_modules/@uifabric/styling/lib/version.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "../node_modules/@uifabric/set-version/lib/index.js");
// @uifabric/styling@6.50.6
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/styling', '6.50.6');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/Async.js":
/*!********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/Async.js ***!
  \********************************************************/
/*! exports provided: Async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js");

/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () {
            /* do nothing */
        };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            delete this._timeoutIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @param targetElement - Optional target element to use for identifying the correct window.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback, targetElement) {
        var _this = this;
        var immediateId = 0;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = win.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     * @param targetElement - Optional target element to use for identifying the correct window.
     */
    Async.prototype.clearImmediate = function (id, targetElement) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (this._immediateIds && this._immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            win.clearTimeout(id);
            delete this._immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = new Date().getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            /* tslint:disable:no-any */
            noOpFunction.flush = (function () { return null; });
            /* tslint:enable:no-any */
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = new Date().getTime();
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = new Date().getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(new Date().getTime());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(new Date().getTime());
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback, targetElement) {
        var _this = this;
        var animationFrameId = 0;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = win.requestAnimationFrame
                ? win.requestAnimationFrame(animationFrameCallback)
                : win.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id, targetElement) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(targetElement);
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            win.cancelAnimationFrame ? win.cancelAnimationFrame(id) : win.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete this._animationFrameIds[id];
        }
    };
    // tslint:disable-next-line:no-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());

//# sourceMappingURL=Async.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/AutoScroll.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/AutoScroll.js ***!
  \*************************************************************/
/*! exports provided: AutoScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return AutoScroll; });
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventGroup */ "../node_modules/@uifabric/utilities/lib/EventGroup.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "../node_modules/@uifabric/utilities/lib/scroll.js");
/* harmony import */ var _dom_getRect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/getRect */ "../node_modules/@uifabric/utilities/lib/dom/getRect.js");



var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER_HEIGHT = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 * {@docCategory AutoScroll}
 */
var AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new _EventGroup__WEBPACK_IMPORTED_MODULE_0__["EventGroup"](this);
        this._scrollableParent = Object(_scroll__WEBPACK_IMPORTED_MODULE_1__["findScrollableParent"])(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = Object(_dom_getRect__WEBPACK_IMPORTED_MODULE_2__["getRect"])(this._scrollableParent);
        // tslint:disable-next-line:no-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev.clientY);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev.touches[0].clientY);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (clientY) {
        if (!this._scrollRect) {
            return;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
        if (clientY < scrollRectTop + SCROLL_GUTTER_HEIGHT) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
        }
        else if (clientY > scrollClientBottom) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());

//# sourceMappingURL=AutoScroll.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/BaseComponent.js":
/*!****************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/BaseComponent.js ***!
  \****************************************************************/
/*! exports provided: BaseComponent, nullRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullRender", function() { return nullRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Async */ "../node_modules/@uifabric/utilities/lib/Async.js");
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventGroup */ "../node_modules/@uifabric/utilities/lib/EventGroup.js");
/* harmony import */ var _warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warn/warnConditionallyRequiredProps */ "../node_modules/@uifabric/utilities/lib/warn/warnConditionallyRequiredProps.js");
/* harmony import */ var _warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warn/warnMutuallyExclusive */ "../node_modules/@uifabric/utilities/lib/warn/warnMutuallyExclusive.js");
/* harmony import */ var _warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warn/warnDeprecations */ "../node_modules/@uifabric/utilities/lib/warn/warnDeprecations.js");
/* harmony import */ var _initializeFocusRects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./initializeFocusRects */ "../node_modules/@uifabric/utilities/lib/initializeFocusRects.js");
/* harmony import */ var _initializeDir__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./initializeDir */ "../node_modules/@uifabric/utilities/lib/initializeDir.js");









/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 * {@docCategory BaseComponent}
 */
var BaseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseComponent, _super);
    // tslint:enable:variable-name
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // tslint:disable-next-line:no-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Ensure basic assumptions about the environment.
        Object(_initializeFocusRects__WEBPACK_IMPORTED_MODULE_7__["initializeFocusRects"])();
        Object(_initializeDir__WEBPACK_IMPORTED_MODULE_8__["initializeDir"])();
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'render',
            'componentDidUpdate',
            'componentWillUnmount'
        ]);
        return _this;
    }
    /**
     * When the component receives props, make sure the componentRef is updated.
     */
    BaseComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._updateComponentRef(prevProps, this.props);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._setComponentRef(this.props.componentRef, this);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        this._setComponentRef(this.props.componentRef, null);
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = funcNameRegex.exec(this.constructor.toString());
                this.__className = results && results.length > 1 ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new _Async__WEBPACK_IMPORTED_MODULE_2__["Async"](this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new _EventGroup__WEBPACK_IMPORTED_MODULE_3__["EventGroup"](this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from React.createRef.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            // tslint:disable-next-line:no-any
            this.__resolves[refName] = function (ref) {
                // tslint:disable-next-line:no-any
                return (_this[refName] = ref);
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        // currentProps *should* always be defined, but verify that just in case a subclass is manually
        // calling a lifecycle method with no parameters (which has happened) or other odd usage.
        if (currentProps && newProps && currentProps.componentRef !== newProps.componentRef) {
            this._setComponentRef(currentProps.componentRef, null);
            this._setComponentRef(newProps.componentRef, this);
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        Object(_warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_6__["warnDeprecations"])(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        Object(_warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_5__["warnMutuallyExclusive"])(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        Object(_warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_4__["warnConditionallyRequiredProps"])(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    BaseComponent.prototype._setComponentRef = function (ref, value) {
        if (!this._skipComponentRefResolution && ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            if (typeof ref === 'object') {
                // tslint:disable:no-any
                ref.current = value;
            }
        }
    };
    return BaseComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
function _makeSafe(obj, prototype, methodName) {
    // tslint:disable:no-any
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    // tslint:enable:no-any
    if (classMethod || prototypeMethod) {
        // tslint:disable-next-line:no-any
        obj[methodName] = function () {
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, arguments);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, arguments);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() {
    return null;
}
//# sourceMappingURL=BaseComponent.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/Context.js":
/*!**********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/Context.js ***!
  \**********************************************************/
/*! exports provided: provideContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideContext", function() { return provideContext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @deprecated This function uses the legacy context API, which is deprecated and should not be
 * used in new code. Please migrate to the new context API. https://reactjs.org/docs/context.html
 */
function provideContext(contextTypes, mapPropsToContext) {
    var Provider = /** @class */ (function (_super) {
        tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Provider, _super);
        function Provider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Provider.prototype.getChildContext = function () {
            return mapPropsToContext(this.props);
        };
        Provider.prototype.render = function () {
            return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
        };
        Provider.childContextTypes = contextTypes;
        return Provider;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
    return Provider;
}
//# sourceMappingURL=Context.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/DelayedRender.js":
/*!****************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/DelayedRender.js ***!
  \****************************************************************/
/*! exports provided: DelayedRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayedRender", function() { return DelayedRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 * {@docCategory DelayedRender}
 */
var DelayedRender = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = setTimeout(function () {
            _this.setState({
                isRendered: true
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0
    };
    return DelayedRender;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=DelayedRender.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/EventGroup.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/EventGroup.js ***!
  \*************************************************************/
/*! exports provided: EventGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return EventGroup; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "../node_modules/@uifabric/utilities/lib/object.js");
/* tslint:disable:no-string-literal */

/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 * {@docCategory EventGroup}
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    // tslint:disable-next-line:no-any
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (
    // tslint:disable-next-line:no-any
    target, eventName, 
    // tslint:disable-next-line:no-any
    eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (typeof document !== 'undefined' && document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                Object(_object__WEBPACK_IMPORTED_MODULE_0__["assign"])(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
                // tslint:disable-next-line:no-any
            }
            else if (typeof document !== 'undefined' && document['createEventObject']) {
                // IE8
                // tslint:disable-next-line:no-any
                var evObj = document['createEventObject'](eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    // tslint:disable-next-line:no-any
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    // tslint:disable-next-line:no-any
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    // tslint:disable-next-line:no-any
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return !!target && (!!target.addEventListener || (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.on = function (target, eventName, callback, options) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, options);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                options: options
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] =
                events[eventName] ||
                    {
                        count: 0
                    };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                // tslint:disable-next-line:no-any
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        /* ErrorHelper.log(e); */
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    /* tslint:disable:ban-native-functions */
                    target.addEventListener(eventName, processElementEvent, options);
                    /* tslint:enable:ban-native-functions */
                }
                else if (target.attachEvent) {
                    // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                // tslint:disable-next-line:no-any
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    // tslint:disable-next-line:no-any
    EventGroup.prototype.off = function (target, eventName, callback, options) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof options !== 'boolean' || options === eventRecord.options)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.options);
                    }
                    else if (eventRecord.target.detachEvent) {
                        // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    // tslint:disable-next-line:no-inferrable-types
    EventGroup._uniqueId = 0;
    return EventGroup;
}());

//# sourceMappingURL=EventGroup.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/FabricPerformance.js":
/*!********************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/FabricPerformance.js ***!
  \********************************************************************/
/*! exports provided: FabricPerformance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricPerformance", function() { return FabricPerformance; });
var now = function () { return (typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now()); };
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 * {@docCategory FabricPerformance}
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (FabricPerformance._timeoutId) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: []
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());

//# sourceMappingURL=FabricPerformance.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/GlobalSettings.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/GlobalSettings.js ***!
  \*****************************************************************/
/*! exports provided: GlobalSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function() { return GlobalSettings; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js");

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
// tslint:disable:no-any
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
var _counter = 0;
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 * {@docCategory GlobalSettings}
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        var globalSettings = _getGlobalSettings();
        if (globalSettings[key] === undefined) {
            globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var globalSettings = _getGlobalSettings();
        var callbacks = globalSettings[CALLBACK_STATE_PROP_NAME];
        var oldValue = globalSettings[key];
        if (value !== oldValue) {
            globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key
            };
            for (var id in callbacks) {
                if (callbacks.hasOwnProperty(id)) {
                    callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        var callbacks = _getCallbacks();
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        var callbacks = _getCallbacks();
        delete callbacks[cb.__id__];
    };
    return GlobalSettings;
}());

function _getGlobalSettings() {
    var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var globalObj = win || {};
    if (!globalObj[GLOBAL_SETTINGS_PROP_NAME]) {
        globalObj[GLOBAL_SETTINGS_PROP_NAME] = (_a = {},
            _a[CALLBACK_STATE_PROP_NAME] = {},
            _a);
    }
    return globalObj[GLOBAL_SETTINGS_PROP_NAME];
    var _a;
}
function _getCallbacks() {
    var globalSettings = _getGlobalSettings();
    return globalSettings[CALLBACK_STATE_PROP_NAME];
}
//# sourceMappingURL=GlobalSettings.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/KeyCodes.js":
/*!***********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/KeyCodes.js ***!
  \***********************************************************/
/*! exports provided: KeyCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return KeyCodes; });
/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 * {@docCategory KeyCodes}
 */
var KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222
};
//# sourceMappingURL=KeyCodes.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/Rectangle.js":
/*!************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/Rectangle.js ***!
  \************************************************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/**
 * Rectangle helper class.
 *
 * @public
 * {@docCategory Rectangle}
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // I'm fixing it to 4 decimal places because it allows enough precision and will handle cases when something should be rounded,
        // like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());

//# sourceMappingURL=Rectangle.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/appendFunction.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/appendFunction.js ***!
  \*****************************************************************/
/*! exports provided: appendFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFunction", function() { return appendFunction; });
// tslint:disable:no-any
/**
 * Returns a single function which will call each of the given functions in the context of the
 * parent.
 */
function appendFunction(parent) {
    var functions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        functions[_i - 1] = arguments[_i];
    }
    if (functions.length < 2) {
        return functions[0];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        functions.forEach(function (f) { return f && f.apply(parent, args); });
    };
}
//# sourceMappingURL=appendFunction.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/aria.js":
/*!*******************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/aria.js ***!
  \*******************************************************/
/*! exports provided: mergeAriaAttributeValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAriaAttributeValues", function() { return mergeAriaAttributeValues; });
/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * @param ariaAttributes - ARIA attributes to merge
 */
function mergeAriaAttributeValues() {
    var ariaAttributes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ariaAttributes[_i] = arguments[_i];
    }
    var mergedAttribute = ariaAttributes
        .filter(function (arg) { return arg; })
        .join(' ')
        .trim();
    return mergedAttribute === '' ? undefined : mergedAttribute;
}
//# sourceMappingURL=aria.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/array.js":
/*!********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/array.js ***!
  \********************************************************/
/*! exports provided: findIndex, find, createArray, toMatrix, removeIndex, replaceElement, addElementAtIndex, flatten, arraysEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return createArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMatrix", function() { return toMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIndex", function() { return removeIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return replaceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addElementAtIndex", function() { return addElementAtIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return arraysEqual; });
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 */
function findIndex(array, cb) {
    var index = -1;
    for (var i = 0; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=array.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/asAsync.js":
/*!**********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/asAsync.js ***!
  \**********************************************************/
/*! exports provided: asAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asAsync", function() { return asAsync; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * asAsync - a HOC for async loading components.
 *
 * Usage:
 *
 * const AsyncDialog = asAsync({
 *   load: () => import('Dialog').then(result => result.default),
 * });
 *
 * React.render(domElement, <AsyncDialog asyncPlaceholder={ () => <Spinner/> } { ...dialogProps } />);
 *
 * Note the `asyncPlaceholder` prop will be respected when rendering the async component and it hasn't
 * been loaded yet.
 */


/**
 * If possible, use a WeakMap to maintain a cache of loaded components.
 * This can be used to synchronously render components that have already been loaded,
 * rather than having to wait for at least one async tick.
 */
var _syncModuleCache = typeof WeakMap !== 'undefined'
    ? // tslint:disable-next-line:no-any
        new WeakMap()
    : undefined;
/**
 * Produces a component which internally loads the target component before first mount.
 * The component passes all props through to the loaded component.
 *
 * This overload accepts a module with a default export for the component.
 */
function asAsync(options) {
    var Async = /** @class */ (function (_super) {
        tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Async, _super);
        function Async() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                Component: _syncModuleCache ? _syncModuleCache.get(options.load) : undefined
            };
            return _this;
        }
        Async.prototype.render = function () {
            // Typescript issue: the rest can't be pulled without the any cast, as TypeScript fails with rest on generics.
            // tslint:disable-next-line:no-any
            var _a = this.props, forwardedRef = _a.forwardedRef, Placeholder = _a.asyncPlaceholder, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["forwardedRef", "asyncPlaceholder"]);
            var Component = this.state.Component;
            return Component ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: forwardedRef }, rest)) : Placeholder ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Placeholder, null) : null;
        };
        Async.prototype.componentDidMount = function () {
            var _this = this;
            var Component = this.state.Component;
            if (!Component) {
                options
                    .load()
                    .then(function (LoadedComponent) {
                    if (LoadedComponent) {
                        // Cache component for future reference.
                        _syncModuleCache && _syncModuleCache.set(options.load, LoadedComponent);
                        // Set state.
                        _this.setState({
                            Component: LoadedComponent
                        }, options.onLoad);
                    }
                })
                    .catch(options.onError);
            }
        };
        return Async;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
    return react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Async, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { forwardedRef: ref }))); });
}
//# sourceMappingURL=asAsync.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/assertNever.js":
/*!**************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/assertNever.js ***!
  \**************************************************************/
/*! exports provided: assertNever */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return assertNever; });
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}
//# sourceMappingURL=assertNever.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/autobind.js":
/*!***********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/autobind.js ***!
  \***********************************************************/
/*! exports provided: autobind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return autobind; });
/**
 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
 * so that they can be used in scenarios that simply require a function callback.
 * @deprecated This has been deprecated in favor of using arrow function properties
 */
function autobind(
// tslint:disable-next-line:no-any
target, key, descriptor) {
    var fn = descriptor.value;
    var defining = false;
    return {
        configurable: true,
        get: function () {
            if (defining || (fn && this === fn.prototype) || this.hasOwnProperty(key)) {
                return fn;
            }
            // Bind method only once, and update the property to return the bound value from now on
            var fnBound = fn && fn.bind(this);
            defining = true;
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: fnBound
            });
            defining = false;
            return fnBound;
        },
        // tslint:disable-next-line:no-any
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}
//# sourceMappingURL=autobind.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/classNamesFunction.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/classNamesFunction.js ***!
  \*********************************************************************/
/*! exports provided: classNamesFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesFunction", function() { return classNamesFunction; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");

var MAX_CACHE_COUNT = 50;
var _memoizedClassNames = 0;
var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () { return _memoizedClassNames++; });
}
// Note that because of the caching nature within the classNames memoization,
// I've disabled this rule to simply be able to work with any types.
// tslint:disable:no-any
// This represents a prop we attach to each Map to indicate the cached return value
// associated with the graph node.
var RetVal = '__retval__';
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 *
 * Note that the props you pass in on every render should be in the same order and
 * immutable (numbers, strings, and booleans). This will allow the results to be memoized. Violating
 * these will cause extra recalcs to occur.
 */
function classNamesFunction(options) {
    // We build a trie where each node is a Map. The map entry key represents an argument
    // value, and the entry value is another node (Map). Each node has a `__retval__`
    // property which is used to hold the cached response.
    if (options === void 0) { options = {}; }
    // To derive the response, we can simply ensure the arguments are added or already
    // exist in the trie. At the last node, if there is a `__retval__` we return that. Otherwise
    // we call the `getStyles` api to evaluate, cache on the property, and return that.
    var map = new Map();
    var resultCount = 0;
    var currentMemoizedClassNames = _memoizedClassNames;
    var getClassNames = function (styleFunctionOrObject, styleProps) {
        if (styleProps === void 0) { styleProps = {}; }
        var current = map;
        var disableCaching = options.disableCaching;
        // On reset of our stylesheet, reset memoized cache.
        if (currentMemoizedClassNames !== _memoizedClassNames) {
            currentMemoizedClassNames = _memoizedClassNames;
            map = new Map();
            resultCount = 0;
        }
        if (!options.disableCaching) {
            current = _traverseMap(map, styleFunctionOrObject);
            current = _traverseMap(current, styleProps);
        }
        if (disableCaching || !current[RetVal]) {
            if (styleFunctionOrObject === undefined) {
                current[RetVal] = {};
            }
            else {
                current[RetVal] = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyleSets"])(typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject);
            }
            if (!disableCaching) {
                resultCount++;
            }
        }
        if (resultCount > MAX_CACHE_COUNT) {
            map.clear();
            resultCount = 0;
            // Mutate the options passed in, that's all we can do.
            options.disableCaching = true;
            // Note: this code is great for debugging problems with styles being recaculated, but commenting it out
            // to avoid confusing consumers.
            // if (process.env.NODE_ENV !== 'production') {
            //  console.log('Styles are being recalculated far too frequently. Something is mutating the class over and over.');
            //  // tslint:disable-next-line:no-console
            //  console.trace();
            // }
        }
        // Note: the RetVal is an attached property on the Map; not a key in the Map. We use this attached property to
        // cache the return value for this branch of the graph.
        return current[RetVal];
    };
    return getClassNames;
}
function _derive(obj) {
    return typeof obj === 'function' ? obj(this) : obj;
}
function _traverseEdge(current, value) {
    value = _normalizeValue(value);
    if (!current.has(value)) {
        current.set(value, new Map());
    }
    return current.get(value);
}
function _traverseMap(current, inputs) {
    // The styled helper will generate the styles function and will attach the cached
    // inputs (consisting of the default styles, customzied styles, and user provided styles.)
    // These should be used as cache keys for deriving the memoized value.
    if (typeof inputs === 'function' && inputs.__cachedInputs__) {
        for (var _i = 0, _a = inputs.__cachedInputs__; _i < _a.length; _i++) {
            var input = _a[_i];
            current = _traverseEdge(current, input);
        }
    }
    else if (typeof inputs === 'object') {
        for (var propName in inputs) {
            if (inputs.hasOwnProperty(propName)) {
                current = _traverseEdge(current, inputs[propName]);
            }
        }
    }
    return current;
}
function _normalizeValue(value) {
    switch (value) {
        case undefined:
            return '__undefined__';
        case null:
            return '__null__';
        default:
            return value;
    }
}
//# sourceMappingURL=classNamesFunction.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/createRef.js":
/*!************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/createRef.js ***!
  \************************************************************/
/*! exports provided: createRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/**
 * @deprecated Use React.createRef.
 * May be removed in 6 months (Jan '19).
 */
function createRef() {
    var refObject = (function (element) {
        refObject.current = element;
    });
    // This getter is here to support the deprecated value prop on the refObject.
    Object.defineProperty(refObject, 'value', {
        get: function () {
            return refObject.current;
        }
    });
    refObject.current = null;
    return refObject;
}
//# sourceMappingURL=createRef.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/css.js":
/*!******************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/css.js ***!
  \******************************************************/
/*! exports provided: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
            else {
                // tslint:disable-next-line:no-any
                for (var key in arg) {
                    // tslint:disable-next-line:no-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
//# sourceMappingURL=css.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/customizations/Customizations.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/customizations/Customizations.js ***!
  \********************************************************************************/
/*! exports provided: Customizations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customizations", function() { return Customizations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalSettings */ "../node_modules/@uifabric/utilities/lib/GlobalSettings.js");


var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var _allSettings = _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__["GlobalSettings"].getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false
});
var _events = [];
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    /** Apply global Customization settings.
     * @example Customizations.applySettings(\{ theme: \{...\} \});
     */
    Customizations.applySettings = function (settings) {
        _allSettings.settings = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _allSettings.settings, settings);
        Customizations._raiseChange();
    };
    /** Apply Customizations to a particular named scope, like a component.
     * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
     */
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _allSettings.scopedSettings[scopeName], settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings
    // tslint:disable-next-line:no-any
    ) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    /** Used to run some code that sets Customizations without triggering an update until the end.
     * Useful for applying Customizations that don't affect anything currently rendered, or for
     * applying many customizations at once.
     * @param suppressUpdate - Do not raise the change event at the end, preventing all updates
     */
    Customizations.applyBatchedUpdates = function (code, suppressUpdate) {
        Customizations._suppressUpdates = true;
        try {
            code();
        }
        catch ( /* do nothing */_a) { /* do nothing */ }
        Customizations._suppressUpdates = false;
        if (!suppressUpdate) {
            Customizations._raiseChange();
        }
    };
    Customizations.observe = function (onChange) {
        _events.push(onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events = _events.filter(function (cb) { return cb !== onChange; });
    };
    Customizations._raiseChange = function () {
        if (!Customizations._suppressUpdates) {
            _events.forEach(function (cb) { return cb(); });
        }
    };
    return Customizations;
}());

//# sourceMappingURL=Customizations.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/customizations/Customizer.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/customizations/Customizer.js ***!
  \****************************************************************************/
/*! exports provided: Customizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customizer", function() { return Customizer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customizations */ "../node_modules/@uifabric/utilities/lib/customizations/Customizations.js");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomizerContext */ "../node_modules/@uifabric/utilities/lib/customizations/CustomizerContext.js");
/* harmony import */ var _mergeCustomizations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeCustomizations */ "../node_modules/@uifabric/utilities/lib/customizations/mergeCustomizations.js");





/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator, or use the styled HOC. This enables
 * injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 */
var Customizer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Customizer, _super);
    function Customizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onCustomizationChange = function () { return _this.forceUpdate(); };
        return _this;
    }
    Customizer.prototype.componentDidMount = function () {
        _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].observe(this._onCustomizationChange);
    };
    Customizer.prototype.componentWillUnmount = function () {
        _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].unobserve(this._onCustomizationChange);
    };
    Customizer.prototype.render = function () {
        var _this = this;
        var contextTransform = this.props.contextTransform;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_3__["CustomizerContext"].Consumer, null, function (parentContext) {
            var newContext = Object(_mergeCustomizations__WEBPACK_IMPORTED_MODULE_4__["mergeCustomizations"])(_this.props, parentContext);
            if (contextTransform) {
                newContext = contextTransform(newContext);
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_3__["CustomizerContext"].Provider, { value: newContext }, _this.props.children);
        }));
    };
    return Customizer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Customizer.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/customizations/CustomizerContext.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/customizations/CustomizerContext.js ***!
  \***********************************************************************************/
/*! exports provided: CustomizerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerContext", function() { return CustomizerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CustomizerContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    customizations: {
        inCustomizerContext: false,
        settings: {},
        scopedSettings: {}
    }
});
//# sourceMappingURL=CustomizerContext.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/customizations/customizable.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/customizations/customizable.js ***!
  \******************************************************************************/
/*! exports provided: customizable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customizable", function() { return customizable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customizations */ "../node_modules/@uifabric/utilities/lib/customizations/Customizations.js");
/* harmony import */ var _hoistStatics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hoistStatics */ "../node_modules/@uifabric/utilities/lib/hoistStatics.js");
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomizerContext */ "../node_modules/@uifabric/utilities/lib/customizations/CustomizerContext.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");






function customizable(scope, fields, concatStyles
// tslint:disable-next-line:no-any
) {
    // tslint:disable-next-line:no-shadowed-variable
    return function customizableFactory(
    // tslint:disable-next-line:no-any
    ComposedComponent
    // tslint:disable-next-line:no-any
    ) {
        var resultClass = (_a = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ComponentWithInjectedProps, _super);
                // tslint:disable-next-line:no-any
                function ComponentWithInjectedProps(props) {
                    var _this = _super.call(this, props) || this;
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var _this = this;
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CustomizerContext__WEBPACK_IMPORTED_MODULE_4__["CustomizerContext"].Consumer, null, function (context) {
                        var defaultProps = _Customizations__WEBPACK_IMPORTED_MODULE_2__["Customizations"].getSettings(fields, scope, context.customizations);
                        // tslint:disable-next-line:no-any
                        var componentProps = _this.props;
                        // If defaultProps.styles is a function, evaluate it before calling concatStyleSets
                        if (defaultProps.styles && typeof defaultProps.styles === 'function') {
                            defaultProps.styles = defaultProps.styles(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultProps, componentProps));
                        }
                        // If concatStyles is true and custom styles have been defined compute those styles
                        if (concatStyles && (defaultProps.styles || componentProps.styles)) {
                            var mergedStyles = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_5__["concatStyleSets"])(defaultProps.styles, componentProps.styles);
                            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultProps, componentProps, { styles: mergedStyles }));
                        }
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultProps, componentProps));
                    }));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(react__WEBPACK_IMPORTED_MODULE_1__["Component"])),
            _a.displayName = 'Customized' + scope,
            _a);
        return Object(_hoistStatics__WEBPACK_IMPORTED_MODULE_3__["hoistStatics"])(ComposedComponent, resultClass);
        var _a;
    };
}
//# sourceMappingURL=customizable.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/customizations/mergeCustomizations.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/customizations/mergeCustomizations.js ***!
  \*************************************************************************************/
/*! exports provided: mergeCustomizations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCustomizations", function() { return mergeCustomizations; });
/* harmony import */ var _mergeSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeSettings */ "../node_modules/@uifabric/utilities/lib/customizations/mergeSettings.js");

/**
 * Merge props and customizations giving priority to props over context.
 * NOTE: This function will always perform multiple merge operations. Use with caution.
 * @param props - New settings to merge in.
 * @param parentContext - Context containing current settings.
 * @returns Merged customizations.
 */
function mergeCustomizations(props, parentContext) {
    var _a = (parentContext || {}).customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
    return {
        customizations: {
            settings: Object(_mergeSettings__WEBPACK_IMPORTED_MODULE_0__["mergeSettings"])(customizations.settings, props.settings),
            scopedSettings: Object(_mergeSettings__WEBPACK_IMPORTED_MODULE_0__["mergeScopedSettings"])(customizations.scopedSettings, props.scopedSettings),
            inCustomizerContext: true
        }
    };
}
//# sourceMappingURL=mergeCustomizations.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/customizations/mergeSettings.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/customizations/mergeSettings.js ***!
  \*******************************************************************************/
/*! exports provided: mergeSettings, mergeScopedSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSettings", function() { return mergeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeScopedSettings", function() { return mergeScopedSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */
function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function _isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function _settingsMergeWith(newSettings) {
    return function (settings) { return (newSettings ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, settings, newSettings) : settings); };
}
function _scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, oldScopedSettings[scopeName], scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}
//# sourceMappingURL=mergeSettings.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom.js":
/*!******************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom.js ***!
  \******************************************************/
/*! exports provided: elementContains, elementContainsAttribute, findElementRecursive, getChildren, getDocument, getParent, getRect, getVirtualParent, getWindow, isVirtualElement, on, portalContainsElement, raiseClick, DATA_PORTAL_ATTRIBUTE, setPortalAttribute, setVirtualParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_elementContains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/elementContains */ "../node_modules/@uifabric/utilities/lib/dom/elementContains.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _dom_elementContains__WEBPACK_IMPORTED_MODULE_0__["elementContains"]; });

/* harmony import */ var _dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/elementContainsAttribute */ "../node_modules/@uifabric/utilities/lib/dom/elementContainsAttribute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_1__["elementContainsAttribute"]; });

/* harmony import */ var _dom_findElementRecursive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/findElementRecursive */ "../node_modules/@uifabric/utilities/lib/dom/findElementRecursive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _dom_findElementRecursive__WEBPACK_IMPORTED_MODULE_2__["findElementRecursive"]; });

/* harmony import */ var _dom_getChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/getChildren */ "../node_modules/@uifabric/utilities/lib/dom/getChildren.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _dom_getChildren__WEBPACK_IMPORTED_MODULE_3__["getChildren"]; });

/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/getDocument */ "../node_modules/@uifabric/utilities/lib/dom/getDocument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return _dom_getDocument__WEBPACK_IMPORTED_MODULE_4__["getDocument"]; });

/* harmony import */ var _dom_getParent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/getParent */ "../node_modules/@uifabric/utilities/lib/dom/getParent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _dom_getParent__WEBPACK_IMPORTED_MODULE_5__["getParent"]; });

/* harmony import */ var _dom_getRect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/getRect */ "../node_modules/@uifabric/utilities/lib/dom/getRect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return _dom_getRect__WEBPACK_IMPORTED_MODULE_6__["getRect"]; });

/* harmony import */ var _dom_getVirtualParent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/getVirtualParent */ "../node_modules/@uifabric/utilities/lib/dom/getVirtualParent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _dom_getVirtualParent__WEBPACK_IMPORTED_MODULE_7__["getVirtualParent"]; });

/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/getWindow */ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return _dom_getWindow__WEBPACK_IMPORTED_MODULE_8__["getWindow"]; });

/* harmony import */ var _dom_isVirtualElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/isVirtualElement */ "../node_modules/@uifabric/utilities/lib/dom/isVirtualElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return _dom_isVirtualElement__WEBPACK_IMPORTED_MODULE_9__["isVirtualElement"]; });

/* harmony import */ var _dom_on__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/on */ "../node_modules/@uifabric/utilities/lib/dom/on.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _dom_on__WEBPACK_IMPORTED_MODULE_10__["on"]; });

/* harmony import */ var _dom_portalContainsElement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom/portalContainsElement */ "../node_modules/@uifabric/utilities/lib/dom/portalContainsElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return _dom_portalContainsElement__WEBPACK_IMPORTED_MODULE_11__["portalContainsElement"]; });

/* harmony import */ var _dom_raiseClick__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom/raiseClick */ "../node_modules/@uifabric/utilities/lib/dom/raiseClick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raiseClick", function() { return _dom_raiseClick__WEBPACK_IMPORTED_MODULE_12__["raiseClick"]; });

/* harmony import */ var _dom_setPortalAttribute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dom/setPortalAttribute */ "../node_modules/@uifabric/utilities/lib/dom/setPortalAttribute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return _dom_setPortalAttribute__WEBPACK_IMPORTED_MODULE_13__["DATA_PORTAL_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return _dom_setPortalAttribute__WEBPACK_IMPORTED_MODULE_13__["setPortalAttribute"]; });

/* harmony import */ var _dom_setVirtualParent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dom/setVirtualParent */ "../node_modules/@uifabric/utilities/lib/dom/setVirtualParent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _dom_setVirtualParent__WEBPACK_IMPORTED_MODULE_14__["setVirtualParent"]; });
















//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/elementContains.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/elementContains.js ***!
  \**********************************************************************/
/*! exports provided: elementContains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return elementContains; });
/* harmony import */ var _getParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParent */ "../node_modules/@uifabric/utilities/lib/dom/getParent.js");

/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            isContained = false;
            while (child) {
                var nextParent = Object(_getParent__WEBPACK_IMPORTED_MODULE_0__["getParent"])(child);
                if (nextParent === parent) {
                    isContained = true;
                    break;
                }
                child = nextParent;
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
//# sourceMappingURL=elementContains.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/elementContainsAttribute.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/elementContainsAttribute.js ***!
  \*******************************************************************************/
/*! exports provided: elementContainsAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return elementContainsAttribute; });
/* harmony import */ var _findElementRecursive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElementRecursive */ "../node_modules/@uifabric/utilities/lib/dom/findElementRecursive.js");

/**
 * Determines if an element, or any of its ancestors, contain the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = Object(_findElementRecursive__WEBPACK_IMPORTED_MODULE_0__["findElementRecursive"])(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}
//# sourceMappingURL=elementContainsAttribute.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/findElementRecursive.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/findElementRecursive.js ***!
  \***************************************************************************/
/*! exports provided: findElementRecursive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return findElementRecursive; });
/* harmony import */ var _getParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParent */ "../node_modules/@uifabric/utilities/lib/dom/getParent.js");

/**
 * Finds the first parent element where the matchFunction returns true
 * @param element - element to start searching at
 * @param matchFunction - the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive(Object(_getParent__WEBPACK_IMPORTED_MODULE_0__["getParent"])(element), matchFunction);
}
//# sourceMappingURL=findElementRecursive.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/getChildren.js":
/*!******************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/getChildren.js ***!
  \******************************************************************/
/*! exports provided: getChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return getChildren; });
/* harmony import */ var _isVirtualElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isVirtualElement */ "../node_modules/@uifabric/utilities/lib/dom/isVirtualElement.js");

/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent - The element to get the children of.
 * @param allowVirtualChildren - true if the method should enumerate virtual child elements.
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && Object(_isVirtualElement__WEBPACK_IMPORTED_MODULE_0__["isVirtualElement"])(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}
//# sourceMappingURL=getChildren.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/getDocument.js":
/*!******************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/getDocument.js ***!
  \******************************************************************/
/*! exports provided: getDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
/* harmony import */ var _setSSR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setSSR */ "../node_modules/@uifabric/utilities/lib/dom/setSSR.js");

/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth. Also note that the SSR flag is used to test ssr scenarios even if
 * document is defined (from JSDOM for example.)
 *
 * @public
 */
function getDocument(rootElement) {
    if (_setSSR__WEBPACK_IMPORTED_MODULE_0__["_isSSR"] || typeof document === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument ? el.ownerDocument : document;
    }
}
//# sourceMappingURL=getDocument.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/getParent.js":
/*!****************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/getParent.js ***!
  \****************************************************************/
/*! exports provided: getParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return getParent; });
/* harmony import */ var _getVirtualParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVirtualParent */ "../node_modules/@uifabric/utilities/lib/dom/getVirtualParent.js");

/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return child && ((allowVirtualParents && Object(_getVirtualParent__WEBPACK_IMPORTED_MODULE_0__["getVirtualParent"])(child)) || (child.parentNode && child.parentNode));
}
//# sourceMappingURL=getParent.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/getRect.js":
/*!**************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/getRect.js ***!
  \**************************************************************/
/*! exports provided: getRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return getRect; });
/**
 * Helper to get bounding client rect. Passing in window will get the window size.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
//# sourceMappingURL=getRect.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/getVirtualParent.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/getVirtualParent.js ***!
  \***********************************************************************/
/*! exports provided: getVirtualParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return getVirtualParent; });
/* harmony import */ var _isVirtualElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isVirtualElement */ "../node_modules/@uifabric/utilities/lib/dom/isVirtualElement.js");

/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && Object(_isVirtualElement__WEBPACK_IMPORTED_MODULE_0__["isVirtualElement"])(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
//# sourceMappingURL=getVirtualParent.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js":
/*!****************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/getWindow.js ***!
  \****************************************************************/
/*! exports provided: getWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony import */ var _setSSR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setSSR */ "../node_modules/@uifabric/utilities/lib/dom/setSSR.js");

var _window = undefined;
// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
    _window = window;
}
catch (e) {
    /* no-op */
}
/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_setSSR__WEBPACK_IMPORTED_MODULE_0__["_isSSR"] || typeof _window === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : _window;
    }
}
//# sourceMappingURL=getWindow.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/isVirtualElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/isVirtualElement.js ***!
  \***********************************************************************/
/*! exports provided: isVirtualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return isVirtualElement; });
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}
//# sourceMappingURL=isVirtualElement.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/on.js":
/*!*********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/on.js ***!
  \*********************************************************/
/*! exports provided: on */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
function on(element, eventName, callback, options) {
    element.addEventListener(eventName, callback, options);
    return function () { return element.removeEventListener(eventName, callback, options); };
}
//# sourceMappingURL=on.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/portalContainsElement.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/portalContainsElement.js ***!
  \****************************************************************************/
/*! exports provided: portalContainsElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return portalContainsElement; });
/* harmony import */ var _findElementRecursive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElementRecursive */ "../node_modules/@uifabric/utilities/lib/dom/findElementRecursive.js");
/* harmony import */ var _setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPortalAttribute */ "../node_modules/@uifabric/utilities/lib/dom/setPortalAttribute.js");


/**
 * Determine whether a target is within a portal from perspective of root or optional parent.
 * This function only works against portal components that use the setPortalAttribute function.
 * If both parent and child are within the same portal this function will return false.
 * @param target - Element to query portal containment status of.
 * @param parent - Optional parent perspective. Search for containing portal stops at parent (or root if parent is undefined or invalid.)
 */
function portalContainsElement(target, parent) {
    var elementMatch = Object(_findElementRecursive__WEBPACK_IMPORTED_MODULE_0__["findElementRecursive"])(target, function (testElement) { return parent === testElement || testElement.hasAttribute(_setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__["DATA_PORTAL_ATTRIBUTE"]); });
    return elementMatch !== null && elementMatch.hasAttribute(_setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__["DATA_PORTAL_ATTRIBUTE"]);
}
//# sourceMappingURL=portalContainsElement.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/raiseClick.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/raiseClick.js ***!
  \*****************************************************************/
/*! exports provided: raiseClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raiseClick", function() { return raiseClick; });
/** Raises a click event. */
function raiseClick(target) {
    var event = createNewEvent('MouseEvents');
    event.initEvent('click', true, true);
    target.dispatchEvent(event);
}
function createNewEvent(eventName) {
    var event;
    if (typeof Event === 'function') {
        // Chrome, Opera, Firefox
        event = new Event(eventName);
    }
    else {
        // IE
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    }
    return event;
}
//# sourceMappingURL=raiseClick.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/setPortalAttribute.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/setPortalAttribute.js ***!
  \*************************************************************************/
/*! exports provided: DATA_PORTAL_ATTRIBUTE, setPortalAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return DATA_PORTAL_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return setPortalAttribute; });
var DATA_PORTAL_ATTRIBUTE = 'data-portal-element';
/**
 * Identify element as a portal by setting an attribute.
 * @param element - Element to mark as a portal.
 */
function setPortalAttribute(element) {
    element.setAttribute(DATA_PORTAL_ATTRIBUTE, 'true');
}
//# sourceMappingURL=setPortalAttribute.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/setSSR.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/setSSR.js ***!
  \*************************************************************/
/*! exports provided: _isSSR, setSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isSSR", function() { return _isSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSSR", function() { return setSSR; });
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
//# sourceMappingURL=setSSR.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/dom/setVirtualParent.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/dom/setVirtualParent.js ***!
  \***********************************************************************/
/*! exports provided: setVirtualParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return setVirtualParent; });
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: []
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: []
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
//# sourceMappingURL=setVirtualParent.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/extendComponent.js":
/*!******************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/extendComponent.js ***!
  \******************************************************************/
/*! exports provided: extendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendComponent", function() { return extendComponent; });
/* harmony import */ var _appendFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendFunction */ "../node_modules/@uifabric/utilities/lib/appendFunction.js");

/**
 * Extends a component's lifetime methods by appending new functions to the existing lifetime functions.
 */
function extendComponent(parent, methods) {
    for (var name_1 in methods) {
        if (methods.hasOwnProperty(name_1)) {
            // tslint:disable-next-line:no-any
            parent[name_1] = Object(_appendFunction__WEBPACK_IMPORTED_MODULE_0__["appendFunction"])(parent, parent[name_1], methods[name_1]);
        }
    }
}
//# sourceMappingURL=extendComponent.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/focus.js":
/*!********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/focus.js ***!
  \********************************************************/
/*! exports provided: getFirstFocusable, getLastFocusable, getFirstTabbable, getLastTabbable, focusFirstChild, getPreviousElement, getNextElement, isElementVisible, isElementTabbable, isElementFocusZone, isElementFocusSubZone, doesElementContainFocus, shouldWrapFocus, focusAsync, getFocusableByIndexPath, getElementIndexPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstFocusable", function() { return getFirstFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastFocusable", function() { return getLastFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstTabbable", function() { return getFirstTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastTabbable", function() { return getLastTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusFirstChild", function() { return focusFirstChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousElement", function() { return getPreviousElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextElement", function() { return getNextElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementVisible", function() { return isElementVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementTabbable", function() { return isElementTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementFocusZone", function() { return isElementFocusZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementFocusSubZone", function() { return isElementFocusSubZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return doesElementContainFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldWrapFocus", function() { return shouldWrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusAsync", function() { return focusAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusableByIndexPath", function() { return getFocusableByIndexPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementIndexPath", function() { return getElementIndexPath; });
/* harmony import */ var _dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/elementContainsAttribute */ "../node_modules/@uifabric/utilities/lib/dom/elementContainsAttribute.js");
/* harmony import */ var _dom_elementContains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/elementContains */ "../node_modules/@uifabric/utilities/lib/dom/elementContains.js");
/* harmony import */ var _dom_getParent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/getParent */ "../node_modules/@uifabric/utilities/lib/dom/getParent.js");
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/getWindow */ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js");
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/getDocument */ "../node_modules/@uifabric/utilities/lib/dom/getDocument.js");





var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones);
}
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones);
}
/**
 * Gets the first tabbable element.
 * The difference between focusable and tabbable is that tabbable elements are focusable elements that also have tabIndex != -1.
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues forward.  Typical use passes rootElement.firstChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getFirstTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getNextElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Gets the last tabbable element.
 * The difference between focusable and tabbable is that tabbable elements are focusable elements that also have tabIndex != -1.
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues in reverse.  Typical use passes rootElement.lastChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getPreviousElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && isElementTabbable(childMatch, true)) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 * @param checkNode - Include currentElement in search when true.
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // tslint:disable-next-line:no-any
        element.isVisible === true); // used as a workaround for testing.
}
/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key, meaning tabIndex != -1.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA' ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet);
    return checkTabIndex ? tabIndex !== -1 && result : result;
}
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_4__["getDocument"])(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && Object(_dom_elementContains__WEBPACK_IMPORTED_MODULE_1__["elementContains"])(element, currentActiveElement)) {
        return true;
    }
    return false;
}
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return Object(_dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_0__["elementContainsAttribute"])(element, noWrapDataAttribute) === 'true' ? false : true;
}
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element - The element to focus
 */
function focusAsync(element) {
    if (element) {
        // An element was already queued to be focused, so replace that one with the new element
        if (targetToFocusOnNextRepaint) {
            targetToFocusOnNextRepaint = element;
            return;
        }
        targetToFocusOnNextRepaint = element;
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_3__["getWindow"])(element);
        if (win) {
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            win.requestAnimationFrame(function () {
                targetToFocusOnNextRepaint && targetToFocusOnNextRepaint.focus();
                // We are done focusing for this frame, so reset the queued focus element
                targetToFocusOnNextRepaint = undefined;
            });
        }
    }
}
/**
 * Finds the closest focusable element via an index path from a parent. See
 * `getElementIndexPath` for getting an index path from an element to a child.
 */
function getFocusableByIndexPath(parent, path) {
    var element = parent;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var index = path_1[_i];
        var nextChild = element.children[Math.min(index, element.children.length - 1)];
        if (!nextChild) {
            break;
        }
        element = nextChild;
    }
    element =
        isElementTabbable(element) && isElementVisible(element)
            ? element
            : getNextElement(parent, element, true) || getPreviousElement(parent, element);
    return element;
}
/**
 * Finds the element index path from a parent element to a child element.
 *
 * If you had this node structure: "A has children [B, C] and C has child D",
 * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
 */
function getElementIndexPath(fromElement, toElement) {
    var path = [];
    while (toElement && fromElement && toElement !== fromElement) {
        var parent_1 = Object(_dom_getParent__WEBPACK_IMPORTED_MODULE_2__["getParent"])(toElement, true);
        if (parent_1 === null) {
            return [];
        }
        path.unshift(Array.prototype.indexOf.call(parent_1.children, toElement));
        toElement = parent_1;
    }
    return path;
}
//# sourceMappingURL=focus.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/hoist.js":
/*!********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/hoist.js ***!
  \********************************************************/
/*! exports provided: hoistMethods, unhoistMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistMethods", function() { return hoistMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unhoistMethods", function() { return unhoistMethods; });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'getSnapshotBeforeUpdate',
    'UNSAFE_componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
function hoistMethods(
// tslint:disable-next-line:no-any
destination, 
// tslint:disable-next-line:no-any
source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            /* tslint:disable:no-function-expression */
            destination[methodName] = function () {
                source[methodName].apply(source, arguments);
            };
            /* tslint:enable */
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// tslint:disable-next-line:no-any
function unhoistMethods(source, methodNames) {
    methodNames.forEach(function (methodName) { return delete source[methodName]; });
}
//# sourceMappingURL=hoist.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/hoistStatics.js":
/*!***************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/hoistStatics.js ***!
  \***************************************************************/
/*! exports provided: hoistStatics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return hoistStatics; });
/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // tslint:disable-next-line:no-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}
//# sourceMappingURL=hoistStatics.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/index.js":
/*!********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/index.js ***!
  \********************************************************/
/*! exports provided: Async, AutoScroll, BaseComponent, nullRender, provideContext, DelayedRender, EventGroup, FabricPerformance, GlobalSettings, KeyCodes, Rectangle, appendFunction, mergeAriaAttributeValues, findIndex, find, createArray, toMatrix, removeIndex, replaceElement, addElementAtIndex, flatten, arraysEqual, asAsync, assertNever, autobind, classNamesFunction, createRef, css, Customizations, Customizer, CustomizerContext, customizable, mergeCustomizations, mergeSettings, mergeScopedSettings, elementContains, elementContainsAttribute, findElementRecursive, getChildren, getDocument, getParent, getRect, getVirtualParent, getWindow, isVirtualElement, on, portalContainsElement, raiseClick, DATA_PORTAL_ATTRIBUTE, setPortalAttribute, setVirtualParent, extendComponent, getFirstFocusable, getLastFocusable, getFirstTabbable, getLastTabbable, focusFirstChild, getPreviousElement, getNextElement, isElementVisible, isElementTabbable, isElementFocusZone, isElementFocusSubZone, doesElementContainFocus, shouldWrapFocus, focusAsync, getFocusableByIndexPath, getElementIndexPath, hoistMethods, unhoistMethods, hoistStatics, initializeComponentRef, IsFocusVisibleClassName, initializeFocusRects, getInitials, isDirectionalKeyCode, addDirectionalKeyCode, getLanguage, setLanguage, getDistanceBetweenPoints, fitContentToBounds, calculatePrecision, precisionRound, setMemoizeWeakMap, resetMemoizations, memoize, memoizeFunction, merge, isIOS, shallowCompare, assign, filteredAssign, getId, resetIds, mapEnumByName, values, isMac, hasHorizontalOverflow, hasVerticalOverflow, hasOverflow, baseElementEvents, baseElementProperties, htmlElementProperties, labelProperties, audioProperties, videoProperties, olProperties, liProperties, anchorProperties, buttonProperties, inputProperties, textAreaProperties, selectProperties, optionProperties, tableProperties, trProperties, thProperties, tdProperties, colGroupProperties, colProperties, formProperties, iframeProperties, imgProperties, imageProperties, divProperties, getNativeProps, getResourceUrl, setBaseUrl, getRTL, setRTL, getRTLSafeKeyCode, safeRequestAnimationFrame, safeSetTimeout, DATA_IS_SCROLLABLE_ATTRIBUTE, allowScrollOnElement, disableBodyScroll, enableBodyScroll, getScrollbarWidth, findScrollableParent, SELECTION_CHANGE, SelectionMode, SelectionDirection, Selection, format, styled, warn, setWarningCallback, warnConditionallyRequiredProps, warnDeprecations, warnMutuallyExclusive, setFocusVisibility, setSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Async */ "../node_modules/@uifabric/utilities/lib/Async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return _Async__WEBPACK_IMPORTED_MODULE_0__["Async"]; });

/* harmony import */ var _AutoScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoScroll */ "../node_modules/@uifabric/utilities/lib/AutoScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return _AutoScroll__WEBPACK_IMPORTED_MODULE_1__["AutoScroll"]; });

/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseComponent */ "../node_modules/@uifabric/utilities/lib/BaseComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return _BaseComponent__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nullRender", function() { return _BaseComponent__WEBPACK_IMPORTED_MODULE_2__["nullRender"]; });

/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context */ "../node_modules/@uifabric/utilities/lib/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provideContext", function() { return _Context__WEBPACK_IMPORTED_MODULE_3__["provideContext"]; });

/* harmony import */ var _DelayedRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DelayedRender */ "../node_modules/@uifabric/utilities/lib/DelayedRender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelayedRender", function() { return _DelayedRender__WEBPACK_IMPORTED_MODULE_4__["DelayedRender"]; });

/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventGroup */ "../node_modules/@uifabric/utilities/lib/EventGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return _EventGroup__WEBPACK_IMPORTED_MODULE_5__["EventGroup"]; });

/* harmony import */ var _FabricPerformance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FabricPerformance */ "../node_modules/@uifabric/utilities/lib/FabricPerformance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabricPerformance", function() { return _FabricPerformance__WEBPACK_IMPORTED_MODULE_6__["FabricPerformance"]; });

/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GlobalSettings */ "../node_modules/@uifabric/utilities/lib/GlobalSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function() { return _GlobalSettings__WEBPACK_IMPORTED_MODULE_7__["GlobalSettings"]; });

/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KeyCodes */ "../node_modules/@uifabric/utilities/lib/KeyCodes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return _KeyCodes__WEBPACK_IMPORTED_MODULE_8__["KeyCodes"]; });

/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Rectangle */ "../node_modules/@uifabric/utilities/lib/Rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_9__["Rectangle"]; });

/* harmony import */ var _appendFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appendFunction */ "../node_modules/@uifabric/utilities/lib/appendFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendFunction", function() { return _appendFunction__WEBPACK_IMPORTED_MODULE_10__["appendFunction"]; });

/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aria */ "../node_modules/@uifabric/utilities/lib/aria.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeAriaAttributeValues", function() { return _aria__WEBPACK_IMPORTED_MODULE_11__["mergeAriaAttributeValues"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array */ "../node_modules/@uifabric/utilities/lib/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_12__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _array__WEBPACK_IMPORTED_MODULE_12__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return _array__WEBPACK_IMPORTED_MODULE_12__["createArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMatrix", function() { return _array__WEBPACK_IMPORTED_MODULE_12__["toMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_12__["removeIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return _array__WEBPACK_IMPORTED_MODULE_12__["replaceElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addElementAtIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_12__["addElementAtIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _array__WEBPACK_IMPORTED_MODULE_12__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return _array__WEBPACK_IMPORTED_MODULE_12__["arraysEqual"]; });

/* harmony import */ var _asAsync__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./asAsync */ "../node_modules/@uifabric/utilities/lib/asAsync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asAsync", function() { return _asAsync__WEBPACK_IMPORTED_MODULE_13__["asAsync"]; });

/* harmony import */ var _assertNever__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assertNever */ "../node_modules/@uifabric/utilities/lib/assertNever.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return _assertNever__WEBPACK_IMPORTED_MODULE_14__["assertNever"]; });

/* harmony import */ var _autobind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./autobind */ "../node_modules/@uifabric/utilities/lib/autobind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return _autobind__WEBPACK_IMPORTED_MODULE_15__["autobind"]; });

/* harmony import */ var _classNamesFunction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./classNamesFunction */ "../node_modules/@uifabric/utilities/lib/classNamesFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNamesFunction", function() { return _classNamesFunction__WEBPACK_IMPORTED_MODULE_16__["classNamesFunction"]; });

/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./createRef */ "../node_modules/@uifabric/utilities/lib/createRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return _createRef__WEBPACK_IMPORTED_MODULE_17__["createRef"]; });

/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./css */ "../node_modules/@uifabric/utilities/lib/css.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css__WEBPACK_IMPORTED_MODULE_18__["css"]; });

/* harmony import */ var _customizations_Customizations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customizations/Customizations */ "../node_modules/@uifabric/utilities/lib/customizations/Customizations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizations", function() { return _customizations_Customizations__WEBPACK_IMPORTED_MODULE_19__["Customizations"]; });

/* harmony import */ var _customizations_Customizer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./customizations/Customizer */ "../node_modules/@uifabric/utilities/lib/customizations/Customizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizer", function() { return _customizations_Customizer__WEBPACK_IMPORTED_MODULE_20__["Customizer"]; });

/* harmony import */ var _customizations_CustomizerContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./customizations/CustomizerContext */ "../node_modules/@uifabric/utilities/lib/customizations/CustomizerContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizerContext", function() { return _customizations_CustomizerContext__WEBPACK_IMPORTED_MODULE_21__["CustomizerContext"]; });

/* harmony import */ var _customizations_customizable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./customizations/customizable */ "../node_modules/@uifabric/utilities/lib/customizations/customizable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customizable", function() { return _customizations_customizable__WEBPACK_IMPORTED_MODULE_22__["customizable"]; });

/* harmony import */ var _customizations_mergeCustomizations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./customizations/mergeCustomizations */ "../node_modules/@uifabric/utilities/lib/customizations/mergeCustomizations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeCustomizations", function() { return _customizations_mergeCustomizations__WEBPACK_IMPORTED_MODULE_23__["mergeCustomizations"]; });

/* harmony import */ var _customizations_mergeSettings__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./customizations/mergeSettings */ "../node_modules/@uifabric/utilities/lib/customizations/mergeSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeSettings", function() { return _customizations_mergeSettings__WEBPACK_IMPORTED_MODULE_24__["mergeSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeScopedSettings", function() { return _customizations_mergeSettings__WEBPACK_IMPORTED_MODULE_24__["mergeScopedSettings"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dom */ "../node_modules/@uifabric/utilities/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["elementContains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["elementContainsAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["findElementRecursive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getVirtualParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["getWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["isVirtualElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["on"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["portalContainsElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raiseClick", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["raiseClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["DATA_PORTAL_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["setPortalAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_25__["setVirtualParent"]; });

/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./extendComponent */ "../node_modules/@uifabric/utilities/lib/extendComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendComponent", function() { return _extendComponent__WEBPACK_IMPORTED_MODULE_26__["extendComponent"]; });

/* harmony import */ var _focus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./focus */ "../node_modules/@uifabric/utilities/lib/focus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstFocusable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getFirstFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastFocusable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getLastFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getFirstTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getLastTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusFirstChild", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["focusFirstChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPreviousElement", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getPreviousElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextElement", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getNextElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementVisible", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusZone", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementFocusZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusSubZone", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["isElementFocusSubZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["doesElementContainFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shouldWrapFocus", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["shouldWrapFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusAsync", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["focusAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusableByIndexPath", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getFocusableByIndexPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementIndexPath", function() { return _focus__WEBPACK_IMPORTED_MODULE_27__["getElementIndexPath"]; });

/* harmony import */ var _hoist__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./hoist */ "../node_modules/@uifabric/utilities/lib/hoist.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistMethods", function() { return _hoist__WEBPACK_IMPORTED_MODULE_28__["hoistMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unhoistMethods", function() { return _hoist__WEBPACK_IMPORTED_MODULE_28__["unhoistMethods"]; });

/* harmony import */ var _hoistStatics__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./hoistStatics */ "../node_modules/@uifabric/utilities/lib/hoistStatics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return _hoistStatics__WEBPACK_IMPORTED_MODULE_29__["hoistStatics"]; });

/* harmony import */ var _initializeComponentRef__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./initializeComponentRef */ "../node_modules/@uifabric/utilities/lib/initializeComponentRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeComponentRef", function() { return _initializeComponentRef__WEBPACK_IMPORTED_MODULE_30__["initializeComponentRef"]; });

/* harmony import */ var _initializeFocusRects__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./initializeFocusRects */ "../node_modules/@uifabric/utilities/lib/initializeFocusRects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsFocusVisibleClassName", function() { return _initializeFocusRects__WEBPACK_IMPORTED_MODULE_31__["IsFocusVisibleClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeFocusRects", function() { return _initializeFocusRects__WEBPACK_IMPORTED_MODULE_31__["initializeFocusRects"]; });

/* harmony import */ var _initials__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./initials */ "../node_modules/@uifabric/utilities/lib/initials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitials", function() { return _initials__WEBPACK_IMPORTED_MODULE_32__["getInitials"]; });

/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./keyboard */ "../node_modules/@uifabric/utilities/lib/keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirectionalKeyCode", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_33__["isDirectionalKeyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDirectionalKeyCode", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_33__["addDirectionalKeyCode"]; });

/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./language */ "../node_modules/@uifabric/utilities/lib/language.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return _language__WEBPACK_IMPORTED_MODULE_34__["getLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return _language__WEBPACK_IMPORTED_MODULE_34__["setLanguage"]; });

/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./math */ "../node_modules/@uifabric/utilities/lib/math.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenPoints", function() { return _math__WEBPACK_IMPORTED_MODULE_35__["getDistanceBetweenPoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fitContentToBounds", function() { return _math__WEBPACK_IMPORTED_MODULE_35__["fitContentToBounds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculatePrecision", function() { return _math__WEBPACK_IMPORTED_MODULE_35__["calculatePrecision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _math__WEBPACK_IMPORTED_MODULE_35__["precisionRound"]; });

/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./memoize */ "../node_modules/@uifabric/utilities/lib/memoize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMemoizeWeakMap", function() { return _memoize__WEBPACK_IMPORTED_MODULE_36__["setMemoizeWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetMemoizations", function() { return _memoize__WEBPACK_IMPORTED_MODULE_36__["resetMemoizations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _memoize__WEBPACK_IMPORTED_MODULE_36__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoizeFunction", function() { return _memoize__WEBPACK_IMPORTED_MODULE_36__["memoizeFunction"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./merge */ "../node_modules/@uifabric/utilities/lib/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_37__["merge"]; });

/* harmony import */ var _mobileDetector__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./mobileDetector */ "../node_modules/@uifabric/utilities/lib/mobileDetector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return _mobileDetector__WEBPACK_IMPORTED_MODULE_38__["isIOS"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./object */ "../node_modules/@uifabric/utilities/lib/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return _object__WEBPACK_IMPORTED_MODULE_39__["shallowCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _object__WEBPACK_IMPORTED_MODULE_39__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filteredAssign", function() { return _object__WEBPACK_IMPORTED_MODULE_39__["filteredAssign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return _object__WEBPACK_IMPORTED_MODULE_39__["getId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIds", function() { return _object__WEBPACK_IMPORTED_MODULE_39__["resetIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapEnumByName", function() { return _object__WEBPACK_IMPORTED_MODULE_39__["mapEnumByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _object__WEBPACK_IMPORTED_MODULE_39__["values"]; });

/* harmony import */ var _osDetector__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./osDetector */ "../node_modules/@uifabric/utilities/lib/osDetector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return _osDetector__WEBPACK_IMPORTED_MODULE_40__["isMac"]; });

/* harmony import */ var _overflow__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./overflow */ "../node_modules/@uifabric/utilities/lib/overflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_41__["hasHorizontalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_41__["hasVerticalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_41__["hasOverflow"]; });

/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./properties */ "../node_modules/@uifabric/utilities/lib/properties.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementEvents", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["baseElementEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["baseElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlElementProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["htmlElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "labelProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["labelProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["audioProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "videoProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["videoProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "olProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["olProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "liProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["liProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anchorProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["anchorProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["buttonProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["inputProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textAreaProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["textAreaProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["selectProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["optionProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["tableProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["trProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["thProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tdProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["tdProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colGroupProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["colGroupProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["colProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["formProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iframeProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["iframeProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imgProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["imgProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["imageProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "divProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["divProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNativeProps", function() { return _properties__WEBPACK_IMPORTED_MODULE_42__["getNativeProps"]; });

/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./resources */ "../node_modules/@uifabric/utilities/lib/resources.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResourceUrl", function() { return _resources__WEBPACK_IMPORTED_MODULE_43__["getResourceUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return _resources__WEBPACK_IMPORTED_MODULE_43__["setBaseUrl"]; });

/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./rtl */ "../node_modules/@uifabric/utilities/lib/rtl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return _rtl__WEBPACK_IMPORTED_MODULE_44__["getRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return _rtl__WEBPACK_IMPORTED_MODULE_44__["setRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTLSafeKeyCode", function() { return _rtl__WEBPACK_IMPORTED_MODULE_44__["getRTLSafeKeyCode"]; });

/* harmony import */ var _safeRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./safeRequestAnimationFrame */ "../node_modules/@uifabric/utilities/lib/safeRequestAnimationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeRequestAnimationFrame", function() { return _safeRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_45__["safeRequestAnimationFrame"]; });

/* harmony import */ var _safeSetTimeout__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./safeSetTimeout */ "../node_modules/@uifabric/utilities/lib/safeSetTimeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeSetTimeout", function() { return _safeSetTimeout__WEBPACK_IMPORTED_MODULE_46__["safeSetTimeout"]; });

/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./scroll */ "../node_modules/@uifabric/utilities/lib/scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_IS_SCROLLABLE_ATTRIBUTE", function() { return _scroll__WEBPACK_IMPORTED_MODULE_47__["DATA_IS_SCROLLABLE_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allowScrollOnElement", function() { return _scroll__WEBPACK_IMPORTED_MODULE_47__["allowScrollOnElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return _scroll__WEBPACK_IMPORTED_MODULE_47__["disableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return _scroll__WEBPACK_IMPORTED_MODULE_47__["enableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return _scroll__WEBPACK_IMPORTED_MODULE_47__["getScrollbarWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return _scroll__WEBPACK_IMPORTED_MODULE_47__["findScrollableParent"]; });

/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./selection/index */ "../node_modules/@uifabric/utilities/lib/selection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_48__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_48__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_48__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_48__["Selection"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./string */ "../node_modules/@uifabric/utilities/lib/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _string__WEBPACK_IMPORTED_MODULE_49__["format"]; });

/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./styled */ "../node_modules/@uifabric/utilities/lib/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_50__["styled"]; });

/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./warn */ "../node_modules/@uifabric/utilities/lib/warn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _warn__WEBPACK_IMPORTED_MODULE_51__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return _warn__WEBPACK_IMPORTED_MODULE_51__["setWarningCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return _warn__WEBPACK_IMPORTED_MODULE_51__["warnConditionallyRequiredProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return _warn__WEBPACK_IMPORTED_MODULE_51__["warnDeprecations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return _warn__WEBPACK_IMPORTED_MODULE_51__["warnMutuallyExclusive"]; });

/* harmony import */ var _setFocusVisibility__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./setFocusVisibility */ "../node_modules/@uifabric/utilities/lib/setFocusVisibility.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFocusVisibility", function() { return _setFocusVisibility__WEBPACK_IMPORTED_MODULE_52__["setFocusVisibility"]; });

/* harmony import */ var _dom_setSSR__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./dom/setSSR */ "../node_modules/@uifabric/utilities/lib/dom/setSSR.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSSR", function() { return _dom_setSSR__WEBPACK_IMPORTED_MODULE_53__["setSSR"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./version */ "../node_modules/@uifabric/utilities/lib/version.js");























































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/initializeComponentRef.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/initializeComponentRef.js ***!
  \*************************************************************************/
/*! exports provided: initializeComponentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeComponentRef", function() { return initializeComponentRef; });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendComponent */ "../node_modules/@uifabric/utilities/lib/extendComponent.js");

/**
 * Helper to manage componentRef resolution. Internally appends logic to
 * lifetime methods to resolve componentRef to the passed in object.
 *
 * Usage: call initializeComponentRef(this) in the constructor,
 */
function initializeComponentRef(obj) {
    Object(_extendComponent__WEBPACK_IMPORTED_MODULE_0__["extendComponent"])(obj, {
        componentDidMount: _onMount,
        componentDidUpdate: _onUpdate,
        componentWillUnmount: _onUnmount
    });
}
function _onMount() {
    _setComponentRef(this.props.componentRef, this);
}
function _onUpdate(prevProps) {
    if (prevProps.componentRef !== this.props.componentRef) {
        // tslint:disable-next-line:no-any
        _setComponentRef(prevProps.componentRef, null);
        _setComponentRef(this.props.componentRef, this);
    }
}
function _onUnmount() {
    _setComponentRef(this.props.componentRef, null);
}
function _setComponentRef(componentRef, value) {
    if (componentRef) {
        if (typeof componentRef === 'object') {
            componentRef.current = value;
        }
        else if (typeof componentRef === 'function') {
            componentRef(value);
        }
    }
}
//# sourceMappingURL=initializeComponentRef.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/initializeDir.js":
/*!****************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/initializeDir.js ***!
  \****************************************************************/
/*! exports provided: initializeDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeDir", function() { return initializeDir; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js");

function initializeDir(win) {
    var w = (win || Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])());
    if (w && !w.__hasInitializedDir__) {
        w.__hasInitializedDir__ = true;
        // Ensure that the documentElement has a 'dir' attribute.
        var documentElement = w.document.documentElement;
        if (!documentElement.hasAttribute('dir')) {
            documentElement.setAttribute('dir', 'ltr');
        }
    }
}
//# sourceMappingURL=initializeDir.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/initializeFocusRects.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/initializeFocusRects.js ***!
  \***********************************************************************/
/*! exports provided: IsFocusVisibleClassName, initializeFocusRects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFocusVisibleClassName", function() { return IsFocusVisibleClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeFocusRects", function() { return initializeFocusRects; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ "../node_modules/@uifabric/utilities/lib/keyboard.js");


var IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body.
 * 3. When the user clicks a mouse button, we remove the classname if it exists.
 *
 * This logic allows components on the page to conditionally render focus treatments only
 * if the global classname exists, which simplifies logic overall.
 *
 * @param window - the window used to add the event listeners
 */
function initializeFocusRects(window) {
    var win = (window || Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])());
    if (win && !win.__hasInitializeFocusRects__) {
        win.__hasInitializeFocusRects__ = true;
        win.addEventListener('mousedown', _onMouseDown, true);
        win.addEventListener('keydown', _onKeyDown, true);
    }
}
function _onMouseDown(ev) {
    var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (classList.contains(IsFocusVisibleClassName)) {
            classList.remove(IsFocusVisibleClassName);
        }
    }
}
function _onKeyDown(ev) {
    var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (Object(_keyboard__WEBPACK_IMPORTED_MODULE_1__["isDirectionalKeyCode"])(ev.which) && !classList.contains(IsFocusVisibleClassName)) {
            classList.add(IsFocusVisibleClassName);
        }
    }
}
//# sourceMappingURL=initializeFocusRects.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/initials.js":
/*!***********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/initials.js ***!
  \***********************************************************/
/*! exports provided: getInitials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitials", function() { return getInitials; });
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
 */
/* tslint:disable:max-line-length */
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
/* tslint:enable:max-line-length */
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl, allowPhoneInitials) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) || (!allowPhoneInitials && PHONENUMBER_REGEX.test(displayName))) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}
//# sourceMappingURL=initials.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/keyboard.js":
/*!***********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/keyboard.js ***!
  \***********************************************************/
/*! exports provided: isDirectionalKeyCode, addDirectionalKeyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirectionalKeyCode", function() { return isDirectionalKeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDirectionalKeyCode", function() { return addDirectionalKeyCode; });
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyCodes */ "../node_modules/@uifabric/utilities/lib/KeyCodes.js");

var DirectionalKeyCodes = (_a = {},
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].up] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].down] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].left] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].right] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].home] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].end] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].tab] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].pageUp] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].pageDown] = 1,
    _a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}
var _a;
//# sourceMappingURL=keyboard.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/language.js":
/*!***********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/language.js ***!
  \***********************************************************/
/*! exports provided: getLanguage, setLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return getLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return setLanguage; });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getDocument */ "../node_modules/@uifabric/utilities/lib/dom/getDocument.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "../node_modules/@uifabric/utilities/lib/localStorage.js");


// Default to undefined so that we initialize on first read.
var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 *
 * @public
 */
function getLanguage() {
    if (_language === undefined) {
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        var savedLanguage = Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["getItem"])('language');
        if (savedLanguage !== null) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 *
 * @public
 */
function setLanguage(language, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    if (!avoidPersisting) {
        Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["setItem"])('language', language);
    }
    _language = language;
}
//# sourceMappingURL=language.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/localStorage.js":
/*!***************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/localStorage.js ***!
  \***************************************************************/
/*! exports provided: getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js");

/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        result = win ? win.localStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        win && win.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
//# sourceMappingURL=localStorage.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/math.js":
/*!*******************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/math.js ***!
  \*******************************************************/
/*! exports provided: getDistanceBetweenPoints, fitContentToBounds, calculatePrecision, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenPoints", function() { return getDistanceBetweenPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitContentToBounds", function() { return fitContentToBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePrecision", function() { return calculatePrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return precisionRound; });
/**
 * Determines the distance between two points.
 *
 * @public
 */
function getDistanceBetweenPoints(point1, point2) {
    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    return distance;
}
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options - the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale
    };
}
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value - the value to determine the precision of
 */
function calculatePrecision(value) {
    /**
     * Group 1:
     * [1-9]([0]+$) matches trailing zeros
     * Group 2:
     * \.([0-9]*) matches all digits after a decimal point.
     */
    var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));
    if (!groups) {
        return 0;
    }
    if (groups[1]) {
        return -groups[1].length;
    }
    if (groups[2]) {
        return groups[2].length;
    }
    return 0;
}
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value - The value that is being rounded.
 * @param precision - The number of decimal places to round the number to
 */
function precisionRound(value, precision, base) {
    if (base === void 0) { base = 10; }
    var exp = Math.pow(base, precision);
    return Math.round(value * exp) / exp;
}
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/memoize.js":
/*!**********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/memoize.js ***!
  \**********************************************************/
/*! exports provided: setMemoizeWeakMap, resetMemoizations, memoize, memoizeFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMemoizeWeakMap", function() { return setMemoizeWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetMemoizations", function() { return resetMemoizations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeFunction", function() { return memoizeFunction; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");

var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
if (stylesheet && stylesheet.onReset) {
    _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance().onReset(resetMemoizations);
}
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        }
    };
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    // tslint:disable-next-line:no-function-expression
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined || localResetCounter !== _resetCounter || (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        return currentNode.value;
    };
}
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object' || typeof val === 'function') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null
    };
}
//# sourceMappingURL=memoize.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/merge.js":
/*!********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/merge.js ***!
  \********************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        _merge(target || {}, arg);
    }
    return target;
}
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// tslint:disable-next-line:no-any
function _merge(target, source, circularReferences) {
    if (circularReferences === void 0) { circularReferences = []; }
    circularReferences.push(source);
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            var value = source[name_1];
            if (typeof value === 'object') {
                var isCircularReference = circularReferences.indexOf(value) > -1;
                // tslint:disable-next-line:no-any
                target[name_1] = isCircularReference ? value : _merge(target[name_1] || {}, value, circularReferences);
            }
            else {
                target[name_1] = value;
            }
        }
    }
    circularReferences.pop();
    return target;
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/mobileDetector.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/mobileDetector.js ***!
  \*****************************************************************/
/*! exports provided: isIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/**
 * Returns true if and only if the user is on a iOS device.
 * Used to determine whether iOS-specific behavior should be applied.
 */
var isIOS = function () {
    if (!window || !window.navigator || !window.navigator.userAgent) {
        return false;
    }
    return /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
};
//# sourceMappingURL=mobileDetector.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/object.js":
/*!*********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/object.js ***!
  \*********************************************************/
/*! exports provided: shallowCompare, assign, filteredAssign, getId, resetIds, mapEnumByName, values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return shallowCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredAssign", function() { return filteredAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIds", function() { return resetIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEnumByName", function() { return mapEnumByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/getWindow */ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js");


// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// tslint:disable-next-line:no-any
var _global = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_1__["getWindow"])() || {};
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
// tslint:disable-next-line:no-any
function checkProperties(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Compares a to b and b to a.
 *
 * @public
 */
function shallowCompare(a, b) {
    return checkProperties(a, b) && checkProperties(b, a);
}
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
// Configure ids to reset on stylesheet resets.
var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(resetIds);
}
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix || DEFAULT_ID_STRING) + index;
}
/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
function resetIds(counter) {
    if (counter === void 0) { counter = 0; }
    _global[CURRENT_ID_PROPERTY] = counter;
}
/* Takes an enum and iterates over each value of the enum (as a string), running the callback on each, returning a mapped array.
 * The callback takes as a first parameter the string that represents the name of the entry, and the second parameter is the
 * value of that entry, which is the value you'd normally use when using the enum (usually a number).
 * */
function mapEnumByName(
// tslint:disable-next-line:no-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum)
        .map(function (p) {
        // map on each property name as a string
        if (String(Number(p)) !== p) {
            // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
    })
        .filter(function (v) { return !!v; }); // only return elements with values
}
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// tslint:disable-next-line:no-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}
//# sourceMappingURL=object.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/osDetector.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/osDetector.js ***!
  \*************************************************************/
/*! exports provided: isMac */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return isMac; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js");

var isMacResult;
/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */
function isMac(reset) {
    if (typeof isMacResult === 'undefined' || reset) {
        var win = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        var userAgent = win && win.navigator.userAgent;
        isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
    }
    return !!isMacResult;
}
//# sourceMappingURL=osDetector.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/overflow.js":
/*!***********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/overflow.js ***!
  \***********************************************************/
/*! exports provided: hasHorizontalOverflow, hasVerticalOverflow, hasOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalOverflow", function() { return hasHorizontalOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOverflow", function() { return hasVerticalOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOverflow", function() { return hasOverflow; });
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}
//# sourceMappingURL=overflow.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/properties.js":
/*!*************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/properties.js ***!
  \*************************************************************/
/*! exports provided: baseElementEvents, baseElementProperties, htmlElementProperties, labelProperties, audioProperties, videoProperties, olProperties, liProperties, anchorProperties, buttonProperties, inputProperties, textAreaProperties, selectProperties, optionProperties, tableProperties, trProperties, thProperties, tdProperties, colGroupProperties, colProperties, formProperties, iframeProperties, imgProperties, imageProperties, divProperties, getNativeProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseElementEvents", function() { return baseElementEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseElementProperties", function() { return baseElementProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlElementProperties", function() { return htmlElementProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelProperties", function() { return labelProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioProperties", function() { return audioProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoProperties", function() { return videoProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "olProperties", function() { return olProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liProperties", function() { return liProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anchorProperties", function() { return anchorProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonProperties", function() { return buttonProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputProperties", function() { return inputProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAreaProperties", function() { return textAreaProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProperties", function() { return selectProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionProperties", function() { return optionProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableProperties", function() { return tableProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trProperties", function() { return trProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thProperties", function() { return thProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tdProperties", function() { return tdProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colGroupProperties", function() { return colGroupProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colProperties", function() { return colProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formProperties", function() { return formProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iframeProperties", function() { return iframeProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgProperties", function() { return imgProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageProperties", function() { return imageProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divProperties", function() { return divProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNativeProps", function() { return getNativeProps; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "../node_modules/@uifabric/utilities/lib/object.js");

/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
var baseElementEvents = [
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture'
];
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
var baseElementProperties = [
    'accessKey',
    'children',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'htmlFor',
    'id',
    'lang',
    'role',
    'style',
    'tabIndex',
    'title',
    'translate',
    'spellCheck',
    'name' // global
];
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
var htmlElementProperties = baseElementProperties.concat(baseElementEvents);
/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
var labelProperties = htmlElementProperties.concat([
    'form' // button, fieldset, input, label, meter, object, output, select, textarea
]);
/**
 * An array of AUDIO tag properties and events.
 *
 * @public
 */
var audioProperties = htmlElementProperties.concat([
    'height',
    'loop',
    'muted',
    'preload',
    'src',
    'width' // canvas, embed, iframe, img, input, object, video
]);
/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */
var videoProperties = audioProperties.concat([
    'poster' // video
]);
/**
 * An array of OL tag properties and events.
 *
 * @public
 */
var olProperties = htmlElementProperties.concat([
    'start' // ol
]);
/**
 * An array of LI tag properties and events.
 *
 * @public
 */
var liProperties = htmlElementProperties.concat([
    'value' // button, input, li, option, meter, progress, param
]);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
var anchorProperties = htmlElementProperties.concat([
    'download',
    'href',
    'hrefLang',
    'media',
    'rel',
    'target',
    'type' // a, button, input, link, menu, object, script, source, style
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
var buttonProperties = htmlElementProperties.concat([
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value' // button, input, li, option, meter, progress, param,
]);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
var inputProperties = buttonProperties.concat([
    'accept',
    'alt',
    'autoComplete',
    'checked',
    'dirname',
    'form',
    'height',
    'inputMode',
    'list',
    'max',
    'maxLength',
    'min',
    'multiple',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'src',
    'step',
    'size',
    'type',
    'value',
    'width' // canvas, embed, iframe, img, input, object, video
]);
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
var textAreaProperties = buttonProperties.concat([
    'cols',
    'dirname',
    'form',
    'maxLength',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'wrap' // textarea
]);
/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */
var selectProperties = buttonProperties.concat([
    'form',
    'multiple',
    'required' // input, select, textarea
]);
var optionProperties = htmlElementProperties.concat([
    'selected',
    'value' // button, input, li, option, meter, progress, param
]);
/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */
var tableProperties = htmlElementProperties.concat([
    'cellPadding',
    'cellSpacing' // table
]);
/**
 * An array of TR tag properties and events.
 *
 * @public
 */
var trProperties = htmlElementProperties;
/**
 * An array of TH tag properties and events.
 *
 * @public
 */
var thProperties = htmlElementProperties.concat([
    'rowSpan',
    'scope' // th
]);
/**
 * An array of TD tag properties and events.
 *
 * @public
 */
var tdProperties = htmlElementProperties.concat([
    'colSpan',
    'headers',
    'rowSpan',
    'scope' // th
]);
var colGroupProperties = htmlElementProperties.concat([
    'span' // col, colgroup
]);
var colProperties = htmlElementProperties.concat([
    'span' // col, colgroup
]);
/**
 * An array of FORM tag properties and events.
 *
 * @public
 */
var formProperties = htmlElementProperties.concat([
    'acceptCharset',
    'action',
    'encType',
    'encType',
    'method',
    'noValidate',
    'target' // form
]);
/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */
var iframeProperties = htmlElementProperties.concat([
    'allow',
    'allowFullScreen',
    'allowPaymentRequest',
    'allowTransparency',
    'csp',
    'height',
    'importance',
    'referrerPolicy',
    'sandbox',
    'src',
    'srcDoc',
    'width' // canvas, embed, iframe, img, input, object, video,
]);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
var imgProperties = htmlElementProperties.concat([
    'alt',
    'crossOrigin',
    'height',
    'src',
    'srcSet',
    'useMap',
    'width' // canvas, embed, iframe, img, input, object, video
]);
/**
 * @deprecated Use imgProperties for img elements.
 */
var imageProperties = imgProperties;
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
var divProperties = htmlElementProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
function getNativeProps(props, allowedPropNames, excludedPropNames) {
    return Object(_object__WEBPACK_IMPORTED_MODULE_0__["filteredAssign"])(function (propName) {
        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) &&
            (propName.indexOf('data-') === 0 || propName.indexOf('aria-') === 0 || allowedPropNames.indexOf(propName) >= 0));
    }, {}, props);
}
//# sourceMappingURL=properties.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/resources.js":
/*!************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/resources.js ***!
  \************************************************************/
/*! exports provided: getResourceUrl, setBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceUrl", function() { return getResourceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return setBaseUrl; });
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}
//# sourceMappingURL=resources.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/rtl.js":
/*!******************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/rtl.js ***!
  \******************************************************/
/*! exports provided: getRTL, setRTL, getRTLSafeKeyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return getRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return setRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTLSafeKeyCode", function() { return getRTLSafeKeyCode; });
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyCodes */ "../node_modules/@uifabric/utilities/lib/KeyCodes.js");
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/getDocument */ "../node_modules/@uifabric/utilities/lib/dom/getDocument.js");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionStorage */ "../node_modules/@uifabric/utilities/lib/sessionStorage.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");




var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL() {
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_2__["getItem"])(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__["getDocument"])();
        if (_isRTL === undefined && doc) {
            _isRTL = ((doc.body && doc.body.getAttribute('dir')) || doc.documentElement.getAttribute('dir')) === 'rtl';
            Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_3__["setRTL"])(_isRTL);
        }
    }
    return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__["getDocument"])();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_2__["setItem"])(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_3__["setRTL"])(_isRTL);
}
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key) {
    if (getRTL()) {
        if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].left) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].right;
        }
        else if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].right) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"].left;
        }
    }
    return key;
}
//# sourceMappingURL=rtl.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/safeRequestAnimationFrame.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/safeRequestAnimationFrame.js ***!
  \****************************************************************************/
/*! exports provided: safeRequestAnimationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeRequestAnimationFrame", function() { return safeRequestAnimationFrame; });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendComponent */ "../node_modules/@uifabric/utilities/lib/extendComponent.js");

/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to RAF. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
var safeRequestAnimationFrame = function (component) {
    var activeTimeouts;
    return function (cb) {
        if (!activeTimeouts) {
            activeTimeouts = new Set();
            Object(_extendComponent__WEBPACK_IMPORTED_MODULE_0__["extendComponent"])(component, {
                componentWillUnmount: function () {
                    activeTimeouts.forEach(function (id) { return cancelAnimationFrame(id); });
                }
            });
        }
        var timeoutId = requestAnimationFrame(function () {
            activeTimeouts.delete(timeoutId);
            cb();
        });
        activeTimeouts.add(timeoutId);
    };
};
//# sourceMappingURL=safeRequestAnimationFrame.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/safeSetTimeout.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/safeSetTimeout.js ***!
  \*****************************************************************/
/*! exports provided: safeSetTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeSetTimeout", function() { return safeSetTimeout; });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendComponent */ "../node_modules/@uifabric/utilities/lib/extendComponent.js");

/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to setTimeout. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
var safeSetTimeout = function (component) {
    var activeTimeouts;
    return function (cb, duration) {
        if (!activeTimeouts) {
            activeTimeouts = new Set();
            Object(_extendComponent__WEBPACK_IMPORTED_MODULE_0__["extendComponent"])(component, {
                componentWillUnmount: function () {
                    activeTimeouts.forEach(function (id) { return clearTimeout(id); });
                }
            });
        }
        var timeoutId = setTimeout(function () {
            activeTimeouts.delete(timeoutId);
            cb();
        }, duration);
        activeTimeouts.add(timeoutId);
    };
};
//# sourceMappingURL=safeSetTimeout.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/scroll.js":
/*!*********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/scroll.js ***!
  \*********************************************************/
/*! exports provided: DATA_IS_SCROLLABLE_ATTRIBUTE, allowScrollOnElement, disableBodyScroll, enableBodyScroll, getScrollbarWidth, findScrollableParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_IS_SCROLLABLE_ATTRIBUTE", function() { return DATA_IS_SCROLLABLE_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowScrollOnElement", function() { return allowScrollOnElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return disableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return enableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return getScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return findScrollableParent; });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getDocument */ "../node_modules/@uifabric/utilities/lib/dom/getDocument.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/getWindow */ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js");



var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])({
    overflow: 'hidden !important'
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Allows the user to scroll within a element,
 * while preventing the user from scrolling the body
 */
var allowScrollOnElement = function (element, events) {
    if (!element) {
        return;
    }
    var _previousClientY = 0;
    var _element = null;
    // remember the clientY for future calls of _preventOverscrolling
    var _saveClientY = function (event) {
        if (event.targetTouches.length === 1) {
            _previousClientY = event.targetTouches[0].clientY;
        }
    };
    // prevent the body from scrolling when the user attempts
    // to scroll past the top or bottom of the element
    var _preventOverscrolling = function (event) {
        // only respond to a single-finger touch
        if (event.targetTouches.length !== 1) {
            return;
        }
        // prevent the body touchmove handler from firing
        // so that scrolling is allowed within the element
        event.stopPropagation();
        if (!_element) {
            return;
        }
        var clientY = event.targetTouches[0].clientY - _previousClientY;
        var scrollableParent = findScrollableParent(event.target);
        if (scrollableParent) {
            _element = scrollableParent;
        }
        // if the element is scrolled to the top,
        // prevent the user from scrolling up
        if (_element.scrollTop === 0 && clientY > 0) {
            event.preventDefault();
        }
        // if the element is scrolled to the bottom,
        // prevent the user from scrolling down
        if (_element.scrollHeight - _element.scrollTop <= _element.clientHeight && clientY < 0) {
            event.preventDefault();
        }
    };
    events.on(element, 'touchstart', _saveClientY, { passive: false });
    events.on(element, 'touchmove', _preventOverscrolling, { passive: false });
    _element = element;
};
var _disableIosBodyScroll = function (event) {
    event.preventDefault();
};
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
        doc.body.addEventListener('touchmove', _disableIosBodyScroll, { passive: false, capture: false });
    }
    _bodyScrollDisabledCount++;
}
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
            doc.body.removeEventListener('touchmove', _disableIosBodyScroll);
        }
        _bodyScrollDisabledCount--;
    }
}
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    var doc = Object(_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__["getDocument"])(startingElement);
    // First do a quick scan for the scrollable attribute.
    while (el && el !== doc.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== doc.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === doc.body) {
        // tslint:disable-next-line:no-any
        el = Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_2__["getWindow"])(startingElement);
    }
    return el;
}
//# sourceMappingURL=scroll.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/selection/Selection.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/selection/Selection.js ***!
  \**********************************************************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _Selection_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selection.types */ "../node_modules/@uifabric/utilities/lib/selection/Selection.types.js");
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventGroup */ "../node_modules/@uifabric/utilities/lib/EventGroup.js");


/**
 * {@docCategory Selection}
 */
var Selection = /** @class */ (function () {
    function Selection(options) {
        if (options === void 0) { options = {}; }
        var onSelectionChanged = options.onSelectionChanged, getKey = options.getKey, _a = options.canSelectItem, canSelectItem = _a === void 0 ? function (item) { return true; } : _a, _b = options.selectionMode, selectionMode = _b === void 0 ? _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].multiple : _b;
        this.mode = selectionMode;
        this._getKey = getKey || defaultGetKey;
        this._changeEventSuppressionCount = 0;
        this._exemptedCount = 0;
        this._anchoredIndex = 0;
        this._unselectableCount = 0;
        this._onSelectionChanged = onSelectionChanged;
        this._canSelectItem = canSelectItem;
        this._isModal = false;
        this.setItems([], true);
        this.count = this.getSelectedCount();
    }
    Selection.prototype.canSelectItem = function (item, index) {
        if (typeof index === 'number' && index < 0) {
            return false;
        }
        return this._canSelectItem(item, index);
    };
    Selection.prototype.getKey = function (item, index) {
        var key = this._getKey(item, index);
        return typeof key === 'number' || key ? "" + key : '';
    };
    Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
        this._changeEventSuppressionCount += isEnabled ? -1 : 1;
        if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
            this._hasChanged = false;
            if (!suppressChange) {
                this._change();
            }
        }
    };
    Selection.prototype.isModal = function () {
        return this._isModal;
    };
    Selection.prototype.setModal = function (isModal) {
        if (this._isModal !== isModal) {
            this.setChangeEvents(false);
            this._isModal = isModal;
            if (!isModal) {
                this.setAllSelected(false);
            }
            this._change();
            this.setChangeEvents(true);
        }
    };
    /**
     * Selection needs the items, call this method to set them. If the set
     * of items is the same, this will re-evaluate selection and index maps.
     * Otherwise, shouldClear should be set to true, so that selection is
     * cleared.
     */
    Selection.prototype.setItems = function (items, shouldClear) {
        if (shouldClear === void 0) { shouldClear = true; }
        var newKeyToIndexMap = {};
        var newUnselectableIndices = {};
        var hasSelectionChanged = false;
        this.setChangeEvents(false);
        // Reset the unselectable count.
        this._unselectableCount = 0;
        // Build lookup table for quick selection evaluation.
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item) {
                var key = this.getKey(item, i);
                if (key) {
                    newKeyToIndexMap[key] = i;
                }
            }
            newUnselectableIndices[i] = item && !this.canSelectItem(item);
            if (newUnselectableIndices[i]) {
                this._unselectableCount++;
            }
        }
        if (shouldClear || items.length === 0) {
            this._setAllSelected(false, true);
        }
        // Check the exemption list for discrepencies.
        var newExemptedIndicies = {};
        var newExemptedCount = 0;
        for (var indexProperty in this._exemptedIndices) {
            if (this._exemptedIndices.hasOwnProperty(indexProperty)) {
                var index = Number(indexProperty);
                var item = this._items[index];
                var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
                var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;
                if (newIndex === undefined) {
                    // The item has likely been replaced or removed.
                    hasSelectionChanged = true;
                }
                else {
                    // We know the new index of the item. update the existing exemption table.
                    newExemptedIndicies[newIndex] = true;
                    newExemptedCount++;
                    hasSelectionChanged = hasSelectionChanged || newIndex !== index;
                }
            }
        }
        if (this._items && this._exemptedCount === 0 && items.length !== this._items.length && this._isAllSelected) {
            // If everything was selected but the number of items has changed, selection has changed.
            hasSelectionChanged = true;
        }
        this._exemptedIndices = newExemptedIndicies;
        this._exemptedCount = newExemptedCount;
        this._keyToIndexMap = newKeyToIndexMap;
        this._unselectableIndices = newUnselectableIndices;
        this._items = items;
        this._selectedItems = null;
        if (hasSelectionChanged) {
            this._updateCount();
            this._change();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.getItems = function () {
        return this._items;
    };
    Selection.prototype.getSelection = function () {
        if (!this._selectedItems) {
            this._selectedItems = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedItems.push(items[i]);
                    }
                }
            }
        }
        return this._selectedItems;
    };
    Selection.prototype.getSelectedCount = function () {
        return this._isAllSelected ? this._items.length - this._exemptedCount - this._unselectableCount : this._exemptedCount;
    };
    Selection.prototype.getSelectedIndices = function () {
        if (!this._selectedIndices) {
            this._selectedIndices = [];
            var items = this._items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (this.isIndexSelected(i)) {
                        this._selectedIndices.push(i);
                    }
                }
            }
        }
        return this._selectedIndices;
    };
    Selection.prototype.isRangeSelected = function (fromIndex, count) {
        if (count === 0) {
            return false;
        }
        var endIndex = fromIndex + count;
        for (var i = fromIndex; i < endIndex; i++) {
            if (!this.isIndexSelected(i)) {
                return false;
            }
        }
        return true;
    };
    Selection.prototype.isAllSelected = function () {
        var selectableCount = this._items.length - this._unselectableCount;
        // In single mode, we can only have a max of 1 item.
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single) {
            selectableCount = Math.min(selectableCount, 1);
        }
        return ((this.count > 0 && (this._isAllSelected && this._exemptedCount === 0)) ||
            (!this._isAllSelected && this._exemptedCount === selectableCount && selectableCount > 0));
    };
    Selection.prototype.isKeySelected = function (key) {
        var index = this._keyToIndexMap[key];
        return this.isIndexSelected(index);
    };
    Selection.prototype.isIndexSelected = function (index) {
        return !!((this.count > 0 && (this._isAllSelected && !this._exemptedIndices[index] && !this._unselectableIndices[index])) ||
            (!this._isAllSelected && this._exemptedIndices[index]));
    };
    Selection.prototype.setAllSelected = function (isAllSelected) {
        if (isAllSelected && this.mode !== _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].multiple) {
            return;
        }
        var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
        var index = this._keyToIndexMap[key];
        if (index >= 0) {
            this.setIndexSelected(index, isSelected, shouldAnchor);
        }
    };
    Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].none) {
            return;
        }
        // Clamp the index.
        index = Math.min(Math.max(0, index), this._items.length - 1);
        // No-op on out of bounds selections.
        if (index < 0 || index >= this._items.length) {
            return;
        }
        this.setChangeEvents(false);
        var isExempt = this._exemptedIndices[index];
        var canSelect = !this._unselectableIndices[index];
        if (canSelect) {
            if (isSelected && this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single) {
                // If this is single-select, the previous selection should be removed.
                this._setAllSelected(false, true);
            }
            // Determine if we need to remove the exemption.
            if (isExempt && ((isSelected && this._isAllSelected) || (!isSelected && !this._isAllSelected))) {
                delete this._exemptedIndices[index];
                this._exemptedCount--;
            }
            // Determine if we need to add the exemption.
            if (!isExempt && ((isSelected && !this._isAllSelected) || (!isSelected && this._isAllSelected))) {
                this._exemptedIndices[index] = true;
                this._exemptedCount++;
            }
            if (shouldAnchor) {
                this._anchoredIndex = index;
            }
        }
        this._updateCount();
        this.setChangeEvents(true);
    };
    Selection.prototype.selectToKey = function (key, clearSelection) {
        this.selectToIndex(this._keyToIndexMap[key], clearSelection);
    };
    Selection.prototype.selectToIndex = function (index, clearSelection) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].none) {
            return;
        }
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single) {
            this.setIndexSelected(index, true, true);
            return;
        }
        var anchorIndex = this._anchoredIndex || 0;
        var startIndex = Math.min(index, anchorIndex);
        var endIndex = Math.max(index, anchorIndex);
        this.setChangeEvents(false);
        if (clearSelection) {
            this._setAllSelected(false, true);
        }
        for (; startIndex <= endIndex; startIndex++) {
            this.setIndexSelected(startIndex, true, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.toggleAllSelected = function () {
        this.setAllSelected(!this.isAllSelected());
    };
    Selection.prototype.toggleKeySelected = function (key) {
        this.setKeySelected(key, !this.isKeySelected(key), true);
    };
    Selection.prototype.toggleIndexSelected = function (index) {
        this.setIndexSelected(index, !this.isIndexSelected(index), true);
    };
    Selection.prototype.toggleRangeSelected = function (fromIndex, count) {
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].none) {
            return;
        }
        var isRangeSelected = this.isRangeSelected(fromIndex, count);
        var endIndex = fromIndex + count;
        if (this.mode === _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].single && count > 1) {
            return;
        }
        this.setChangeEvents(false);
        for (var i = fromIndex; i < endIndex; i++) {
            this.setIndexSelected(i, !isRangeSelected, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._updateCount = function (preserveModalState) {
        if (preserveModalState === void 0) { preserveModalState = false; }
        var count = this.getSelectedCount();
        if (count !== this.count) {
            this.count = count;
            this._change();
        }
        if (!this.count && !preserveModalState) {
            this.setModal(false);
        }
    };
    Selection.prototype._setAllSelected = function (isAllSelected, preserveModalState) {
        if (preserveModalState === void 0) { preserveModalState = false; }
        if (isAllSelected && this.mode !== _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"].multiple) {
            return;
        }
        var selectableCount = this._items ? this._items.length - this._unselectableCount : 0;
        this.setChangeEvents(false);
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            if (isAllSelected !== this._isAllSelected || this._exemptedCount > 0) {
                this._exemptedCount = 0;
                this._isAllSelected = isAllSelected;
                this._change();
            }
            this._updateCount(preserveModalState);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._change = function () {
        if (this._changeEventSuppressionCount === 0) {
            this._selectedItems = null;
            this._selectedIndices = undefined;
            _EventGroup__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]);
            if (this._onSelectionChanged) {
                this._onSelectionChanged();
            }
        }
        else {
            this._hasChanged = true;
        }
    };
    return Selection;
}());

function defaultGetKey(item, index) {
    return item && item.key ? item.key : "" + index;
}
//# sourceMappingURL=Selection.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/selection/Selection.types.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/selection/Selection.types.js ***!
  \****************************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionMode, SelectionDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return SELECTION_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return SelectionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return SelectionDirection; });
var SELECTION_CHANGE = 'change';
/**
 * {@docCategory Selection}
 */
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["none"] = 0] = "none";
    SelectionMode[SelectionMode["single"] = 1] = "single";
    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
})(SelectionMode || (SelectionMode = {}));
/**
 * {@docCategory Selection}
 */
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
})(SelectionDirection || (SelectionDirection = {}));
//# sourceMappingURL=Selection.types.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/selection/index.js":
/*!******************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/selection/index.js ***!
  \******************************************************************/
/*! exports provided: SELECTION_CHANGE, SelectionMode, SelectionDirection, Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Selection_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selection.types */ "../node_modules/@uifabric/utilities/lib/selection/Selection.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _Selection_types__WEBPACK_IMPORTED_MODULE_0__["SelectionDirection"]; });

/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selection */ "../node_modules/@uifabric/utilities/lib/selection/Selection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _Selection__WEBPACK_IMPORTED_MODULE_1__["Selection"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/sessionStorage.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/sessionStorage.js ***!
  \*****************************************************************/
/*! exports provided: getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.sessionStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    try {
        window.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
//# sourceMappingURL=sessionStorage.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/setFocusVisibility.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/setFocusVisibility.js ***!
  \*********************************************************************/
/*! exports provided: IsFocusVisibleClassName, setFocusVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFocusVisibleClassName", function() { return IsFocusVisibleClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFocusVisibility", function() { return setFocusVisibility; });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ "../node_modules/@uifabric/utilities/lib/dom/getWindow.js");

var IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
/**
 * Sets the visibility of focus styling.
 * By default, focus styling (the box surrounding a focused Button, for example) only show up when navigational
 * keypresses occur (through TAB, arrows, pgup/down, home and end), and are hidden when mouse interactions occur.
 * This API provides an imperative way to turn them on/off.
 * A use case might be when you have a keypress like ctrl-f6 navigate to a particular region on the page, and want focus to show up.
 *
 * @param enabled - whether to remove or add focus
 * @param target - optional target
 */
function setFocusVisibility(enabled, target) {
    var win = target ? Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(target) : Object(_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (win) {
        var classList = win.document.body.classList;
        if (enabled) {
            classList.add(IsFocusVisibleClassName);
        }
        else {
            classList.remove(IsFocusVisibleClassName);
        }
    }
}
//# sourceMappingURL=setFocusVisibility.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/string.js":
/*!*********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/string.js ***!
  \*********************************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * @example
 * ```tsx
 * "I love {0} every {1}".format("CXP")
 * ```
 * will result in a Debug Exception.
 *
 * @public
 */
// tslint:disable-next-line:no-any
function format(s) {
    'use strict';
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replace_func(match) {
        // looks up in the args
        // tslint:disable-next-line:no-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return s.replace(FORMAT_REGEX, replace_func);
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/styled.js":
/*!*********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/styled.js ***!
  \*********************************************************/
/*! exports provided: styled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/merge-styles */ "../node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony import */ var _customizations_Customizations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customizations/Customizations */ "../node_modules/@uifabric/utilities/lib/customizations/Customizations.js");
/* harmony import */ var _customizations_CustomizerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customizations/CustomizerContext */ "../node_modules/@uifabric/utilities/lib/customizations/CustomizerContext.js");





var DefaultFields = ['theme', 'styles'];
/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets.
 *
 * @example
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   props => ({ root: { background: 'red' }})
 * );
 * ```
 * @param Component - The unstyled base component to render, which receives styles.
 * @param baseStyles - The styles which should be curried with the component.
 * @param getProps - A helper which provides default props.
 * @param customizable - An object which defines which props can be customized using the Customizer.
 * @param pure - A boolean indicating if the component should avoid re-rendering when props haven't changed.
 * Note that pure should not be used on components which allow children, or take in complex objects or
 * arrays as props which could mutate on every render.
 */
function styled(Component, baseStyles, getProps, customizable, pure) {
    customizable = customizable || { scope: '', fields: undefined };
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
    var ParentComponent = pure ? react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] : react__WEBPACK_IMPORTED_MODULE_1__["Component"];
    var Wrapped = /** @class */ (function (_super) {
        tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Wrapped, _super);
        function Wrapped() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._inCustomizerContext = false;
            _this._renderContent = function (context) {
                _this._inCustomizerContext = !!context.customizations.inCustomizerContext;
                var settings = _customizations_Customizations__WEBPACK_IMPORTED_MODULE_3__["Customizations"].getSettings(fields, scope, context.customizations);
                var customizedStyles = settings.styles, dir = settings.dir, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](settings, ["styles", "dir"]);
                var additionalProps = getProps ? getProps(_this.props) : undefined;
                _this._updateStyles(customizedStyles);
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rest, additionalProps, _this.props, { styles: _this._styles }));
            };
            _this._onSettingsChanged = function () { return _this.forceUpdate(); };
            return _this;
        }
        Wrapped.prototype.render = function () {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_customizations_CustomizerContext__WEBPACK_IMPORTED_MODULE_4__["CustomizerContext"].Consumer, null, this._renderContent);
        };
        Wrapped.prototype.componentDidMount = function () {
            if (!this._inCustomizerContext) {
                _customizations_Customizations__WEBPACK_IMPORTED_MODULE_3__["Customizations"].observe(this._onSettingsChanged);
            }
        };
        Wrapped.prototype.componentWillUnmount = function () {
            if (!this._inCustomizerContext) {
                _customizations_Customizations__WEBPACK_IMPORTED_MODULE_3__["Customizations"].unobserve(this._onSettingsChanged);
            }
        };
        Wrapped.prototype._updateStyles = function (customizedStyles) {
            var _this = this;
            // tslint:disable-next-line:no-any
            if (!this._styles || customizedStyles !== this._styles.__cachedInputs__[1] || !!this.props.styles) {
                // Cache the customized styles.
                // this._customizedStyles = customizedStyles;
                // Using styled components as the Component arg will result in nested styling arrays.
                this._styles = function (styleProps) { return _resolve(styleProps, baseStyles, customizedStyles, _this.props.styles); };
                // The __cachedInputs__ array is attached to the function and consumed by the
                // classNamesFunction as a list of keys to include for memoizing classnames.
                // tslint:disable-next-line:no-any
                this._styles.__cachedInputs__ = [baseStyles, customizedStyles, this.props.styles];
            }
        };
        // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
        // able to drop IE 11 support and compile with ES6 libs
        // tslint:disable-next-line:no-any
        Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
        return Wrapped;
    }(ParentComponent));
    // This preserves backwards compatibility.
    // tslint:disable-next-line:no-any
    return Wrapped;
}
function _resolve(styleProps) {
    var allStyles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allStyles[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
        var styles = allStyles_1[_a];
        if (styles) {
            result.push(typeof styles === 'function' ? styles(styleProps) : styles);
        }
    }
    if (result.length === 1) {
        return result[0];
    }
    else if (result.length) {
        // cliffkoh: I cannot figure out how to avoid the cast to any here.
        // It is something to do with the use of Omit in IStyleSet.
        // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
        // the official version).
        // tslint:disable-next-line:no-any
        return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["concatStyleSets"].apply(void 0, result);
    }
    return {};
}
//# sourceMappingURL=styled.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/version.js":
/*!**********************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/version.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "../node_modules/@uifabric/set-version/lib/index.js");
// @uifabric/utilities@6.45.1
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('@uifabric/utilities', '6.45.1');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/warn.js":
/*!*******************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/warn.js ***!
  \*******************************************************/
/*! exports provided: warn, setWarningCallback, warnConditionallyRequiredProps, warnDeprecations, warnMutuallyExclusive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warn_warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn/warn */ "../node_modules/@uifabric/utilities/lib/warn/warn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _warn_warn__WEBPACK_IMPORTED_MODULE_0__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return _warn_warn__WEBPACK_IMPORTED_MODULE_0__["setWarningCallback"]; });

/* harmony import */ var _warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warn/warnConditionallyRequiredProps */ "../node_modules/@uifabric/utilities/lib/warn/warnConditionallyRequiredProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return _warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_1__["warnConditionallyRequiredProps"]; });

/* harmony import */ var _warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warn/warnDeprecations */ "../node_modules/@uifabric/utilities/lib/warn/warnDeprecations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return _warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"]; });

/* harmony import */ var _warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warn/warnMutuallyExclusive */ "../node_modules/@uifabric/utilities/lib/warn/warnMutuallyExclusive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return _warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_3__["warnMutuallyExclusive"]; });





//# sourceMappingURL=warn.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/warn/warn.js":
/*!************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/warn/warn.js ***!
  \************************************************************/
/*! exports provided: warn, setWarningCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return setWarningCallback; });
var _warningCallback = undefined;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback && "development" !== 'production') {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}
//# sourceMappingURL=warn.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/warn/warnConditionallyRequiredProps.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/warn/warnConditionallyRequiredProps.js ***!
  \**************************************************************************************/
/*! exports provided: warnConditionallyRequiredProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return warnConditionallyRequiredProps; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "../node_modules/@uifabric/utilities/lib/warn/warn.js");

/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true && "development" !== 'production') {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}
//# sourceMappingURL=warnConditionallyRequiredProps.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/warn/warnDeprecations.js":
/*!************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/warn/warnDeprecations.js ***!
  \************************************************************************/
/*! exports provided: warnDeprecations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return warnDeprecations; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "../node_modules/@uifabric/utilities/lib/warn/warn.js");

/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    if (true) {
        for (var propName in deprecationMap) {
            if (props && propName in props) {
                var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
                var replacementPropName = deprecationMap[propName];
                if (replacementPropName) {
                    deprecationMessage += " Use '" + replacementPropName + "' instead.";
                }
                Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])(deprecationMessage);
            }
        }
    }
}
//# sourceMappingURL=warnDeprecations.js.map

/***/ }),

/***/ "../node_modules/@uifabric/utilities/lib/warn/warnMutuallyExclusive.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@uifabric/utilities/lib/warn/warnMutuallyExclusive.js ***!
  \*****************************************************************************/
/*! exports provided: warnMutuallyExclusive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return warnMutuallyExclusive; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "../node_modules/@uifabric/utilities/lib/warn/warn.js");

/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    if (true) {
        for (var propName in exclusiveMap) {
            if (props && props[propName] !== undefined) {
                var propInExclusiveMapValue = exclusiveMap[propName];
                if (propInExclusiveMapValue && props[propInExclusiveMapValue] !== undefined) {
                    Object(_warn__WEBPACK_IMPORTED_MODULE_0__["warn"])(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. Use one or the other.");
                }
            }
        }
    }
}
//# sourceMappingURL=warnMutuallyExclusive.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/Icon.js":
/*!**********************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/Icon.js ***!
  \**********************************************************/
/*! exports provided: Icon, IconBase, IconType, getIconContent, FontIcon, getFontIcon, ImageIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Icon/index */ "../node_modules/office-ui-fabric-react/lib/components/Icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["IconBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["IconType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconContent", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["getIconContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontIcon", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["FontIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFontIcon", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["getFontIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageIcon", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["ImageIcon"]; });


//# sourceMappingURL=Icon.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/Icons.js":
/*!***********************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/Icons.js ***!
  \***********************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/icons */ "../node_modules/@uifabric/icons/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return _uifabric_icons__WEBPACK_IMPORTED_MODULE_0__["initializeIcons"]; });


//# sourceMappingURL=Icons.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/Label.js":
/*!***********************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/Label.js ***!
  \***********************************************************/
/*! exports provided: LabelBase, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Label_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Label/index */ "../node_modules/office-ui-fabric-react/lib/components/Label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelBase", function() { return _components_Label_index__WEBPACK_IMPORTED_MODULE_0__["LabelBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _components_Label_index__WEBPACK_IMPORTED_MODULE_0__["Label"]; });


//# sourceMappingURL=Label.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/Styling.js":
/*!*************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/Styling.js ***!
  \*************************************************************/
/*! exports provided: AnimationClassNames, FontClassNames, ColorClassNames, AnimationStyles, AnimationVariables, DefaultPalette, DefaultFontStyles, registerDefaultFontFaces, FontSizes, FontWeights, IconFontSizes, createFontStyles, getFocusStyle, focusClear, getFocusOutlineStyle, hiddenContentStyle, PulsingBeaconAnimationStyles, getGlobalClassNames, getThemedContext, ThemeSettingName, getTheme, loadTheme, createTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinUhfMobile, getScreenSelector, normalize, noWrap, getFadedOverflowStyle, getPlaceholderStyles, ZIndexes, buildClassMap, getIcon, registerIcons, registerIconAlias, unregisterIcons, setIconOptions, getIconClassName, InjectionMode, Stylesheet, concatStyleSets, fontFace, keyframes, mergeStyleSets, mergeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "../node_modules/office-ui-fabric-react/lib/version.js");
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/styling */ "../node_modules/@uifabric/styling/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["AnimationClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["FontClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ColorClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["registerDefaultFontFaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["createFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["focusClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusOutlineStyle", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["getFocusOutlineStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["hiddenContentStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["PulsingBeaconAnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getThemedContext", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["getThemedContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["getTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["loadTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["createTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["registerOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["removeOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelectorWhite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelectorBlack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinUhfMobile", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinUhfMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["getScreenSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["noWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFadedOverflowStyle", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["getFadedOverflowStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlaceholderStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["getPlaceholderStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["ZIndexes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["buildClassMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["registerIconAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unregisterIcons", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["unregisterIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["setIconOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["getIconClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["Stylesheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["concatStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["fontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"]; });



//# sourceMappingURL=Styling.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/TextField.js":
/*!***************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/TextField.js ***!
  \***************************************************************/
/*! exports provided: TextField, TextFieldBase, DEFAULT_MASK_CHAR, MaskedTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TextField_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TextField/index */ "../node_modules/office-ui-fabric-react/lib/components/TextField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _components_TextField_index__WEBPACK_IMPORTED_MODULE_0__["TextField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextFieldBase", function() { return _components_TextField_index__WEBPACK_IMPORTED_MODULE_0__["TextFieldBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MASK_CHAR", function() { return _components_TextField_index__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MASK_CHAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedTextField", function() { return _components_TextField_index__WEBPACK_IMPORTED_MODULE_0__["MaskedTextField"]; });


//# sourceMappingURL=TextField.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/Utilities.js":
/*!***************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/Utilities.js ***!
  \***************************************************************/
/*! exports provided: Async, AutoScroll, BaseComponent, nullRender, provideContext, DelayedRender, EventGroup, FabricPerformance, GlobalSettings, KeyCodes, Rectangle, appendFunction, mergeAriaAttributeValues, findIndex, find, createArray, toMatrix, removeIndex, replaceElement, addElementAtIndex, flatten, arraysEqual, asAsync, assertNever, autobind, classNamesFunction, createRef, css, Customizations, Customizer, CustomizerContext, customizable, mergeCustomizations, mergeSettings, mergeScopedSettings, elementContains, elementContainsAttribute, findElementRecursive, getChildren, getDocument, getParent, getRect, getVirtualParent, getWindow, isVirtualElement, on, portalContainsElement, raiseClick, DATA_PORTAL_ATTRIBUTE, setPortalAttribute, setVirtualParent, extendComponent, getFirstFocusable, getLastFocusable, getFirstTabbable, getLastTabbable, focusFirstChild, getPreviousElement, getNextElement, isElementVisible, isElementTabbable, isElementFocusZone, isElementFocusSubZone, doesElementContainFocus, shouldWrapFocus, focusAsync, getFocusableByIndexPath, getElementIndexPath, hoistMethods, unhoistMethods, hoistStatics, initializeComponentRef, IsFocusVisibleClassName, initializeFocusRects, getInitials, isDirectionalKeyCode, addDirectionalKeyCode, getLanguage, setLanguage, getDistanceBetweenPoints, fitContentToBounds, calculatePrecision, precisionRound, setMemoizeWeakMap, resetMemoizations, memoize, memoizeFunction, merge, isIOS, shallowCompare, assign, filteredAssign, getId, resetIds, mapEnumByName, values, isMac, hasHorizontalOverflow, hasVerticalOverflow, hasOverflow, baseElementEvents, baseElementProperties, htmlElementProperties, labelProperties, audioProperties, videoProperties, olProperties, liProperties, anchorProperties, buttonProperties, inputProperties, textAreaProperties, selectProperties, optionProperties, tableProperties, trProperties, thProperties, tdProperties, colGroupProperties, colProperties, formProperties, iframeProperties, imgProperties, imageProperties, divProperties, getNativeProps, getResourceUrl, setBaseUrl, getRTL, setRTL, getRTLSafeKeyCode, safeRequestAnimationFrame, safeSetTimeout, DATA_IS_SCROLLABLE_ATTRIBUTE, allowScrollOnElement, disableBodyScroll, enableBodyScroll, getScrollbarWidth, findScrollableParent, SELECTION_CHANGE, SelectionMode, SelectionDirection, Selection, format, styled, warn, setWarningCallback, warnConditionallyRequiredProps, warnDeprecations, warnMutuallyExclusive, setFocusVisibility, setSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "../node_modules/office-ui-fabric-react/lib/version.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "../node_modules/@uifabric/utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["AutoScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nullRender", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["nullRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provideContext", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["provideContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelayedRender", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["DelayedRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabricPerformance", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["FabricPerformance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["GlobalSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["KeyCodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendFunction", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["appendFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeAriaAttributeValues", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeAriaAttributeValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["createArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMatrix", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["toMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeIndex", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["removeIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["replaceElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addElementAtIndex", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["addElementAtIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["arraysEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asAsync", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["asAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["assertNever"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["autobind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNamesFunction", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizations", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Customizations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizer", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Customizer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizerContext", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["CustomizerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customizable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["customizable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeCustomizations", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeCustomizations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeSettings", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeScopedSettings", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeScopedSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["elementContains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["elementContainsAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["findElementRecursive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getVirtualParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVirtualElement", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["isVirtualElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["on"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "portalContainsElement", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["portalContainsElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raiseClick", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["raiseClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_PORTAL_ATTRIBUTE", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["DATA_PORTAL_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPortalAttribute", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["setPortalAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["setVirtualParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendComponent", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["extendComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstFocusable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getFirstFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastFocusable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getLastFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstTabbable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getFirstTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastTabbable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getLastTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusFirstChild", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["focusFirstChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPreviousElement", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getPreviousElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextElement", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getNextElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementVisible", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["isElementVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementTabbable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["isElementTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusZone", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["isElementFocusZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusSubZone", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["isElementFocusSubZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["doesElementContainFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shouldWrapFocus", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["shouldWrapFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusAsync", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["focusAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusableByIndexPath", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getFocusableByIndexPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementIndexPath", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getElementIndexPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistMethods", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["hoistMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unhoistMethods", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["unhoistMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["hoistStatics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeComponentRef", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["initializeComponentRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsFocusVisibleClassName", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeFocusRects", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["initializeFocusRects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitials", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getInitials"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirectionalKeyCode", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["isDirectionalKeyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDirectionalKeyCode", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["addDirectionalKeyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["setLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenPoints", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getDistanceBetweenPoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fitContentToBounds", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["fitContentToBounds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculatePrecision", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["calculatePrecision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["precisionRound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMemoizeWeakMap", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["setMemoizeWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetMemoizations", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["resetMemoizations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoizeFunction", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["isIOS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["shallowCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filteredAssign", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["filteredAssign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIds", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["resetIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapEnumByName", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["mapEnumByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["isMac"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalOverflow", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["hasHorizontalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOverflow", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["hasVerticalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOverflow", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["hasOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementEvents", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["baseElementEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["baseElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlElementProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["htmlElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "labelProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["labelProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["audioProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "videoProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["videoProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "olProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["olProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "liProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["liProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anchorProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["anchorProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["buttonProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["inputProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textAreaProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["textAreaProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["selectProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["optionProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["tableProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["trProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["thProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tdProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["tdProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colGroupProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["colGroupProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["colProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["formProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iframeProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["iframeProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imgProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["imgProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["imageProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "divProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["divProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNativeProps", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getNativeProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResourceUrl", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getResourceUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["setBaseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["setRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTLSafeKeyCode", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getRTLSafeKeyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeRequestAnimationFrame", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["safeRequestAnimationFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeSetTimeout", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["safeSetTimeout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_IS_SCROLLABLE_ATTRIBUTE", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["DATA_IS_SCROLLABLE_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allowScrollOnElement", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["allowScrollOnElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["disableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["enableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["getScrollbarWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["findScrollableParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["SELECTION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionMode", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["SelectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["SelectionDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Selection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["styled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["setWarningCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warnConditionallyRequiredProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warnDeprecations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warnMutuallyExclusive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFocusVisibility", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["setFocusVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSSR", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["setSSR"]; });



//# sourceMappingURL=Utilities.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Icon/FontIcon.js":
/*!******************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Icon/FontIcon.js ***!
  \******************************************************************************/
/*! exports provided: getIconContent, FontIcon, getFontIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIconContent", function() { return getIconContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontIcon", function() { return FontIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontIcon", function() { return getFontIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.styles */ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Styling */ "../node_modules/office-ui-fabric-react/lib/Styling.js");





var getIconContent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (iconName) {
    var iconDefinition = Object(_Styling__WEBPACK_IMPORTED_MODULE_4__["getIcon"])(iconName) || {
        subset: {
            className: undefined
        },
        code: undefined
    };
    return {
        children: iconDefinition.code,
        iconClassName: iconDefinition.subset.className
    };
});
/**
 * Fast icon component which only supports font glyphs (not images) and isn't themeable.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 */
var FontIcon = function (props) {
    var iconName = props.iconName, className = props.className;
    var _a = getIconContent(iconName), iconClassName = _a.iconClassName, children = _a.children;
    var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(props, _Utilities__WEBPACK_IMPORTED_MODULE_3__["htmlElementProperties"]);
    var containerProps = props['aria-label']
        ? {}
        : {
            role: 'presentation',
            'aria-hidden': true
        };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ "data-icon-name": iconName }, containerProps, nativeProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_Icon_styles__WEBPACK_IMPORTED_MODULE_2__["MS_ICON"], _Icon_styles__WEBPACK_IMPORTED_MODULE_2__["classNames"].root, iconClassName, !iconName && _Icon_styles__WEBPACK_IMPORTED_MODULE_2__["classNames"].placeholder, className) }), children));
};
/**
 * Memoized helper for rendering a FontIcon.
 * @param iconName - The name of the icon to use from the icon font.
 * @param className - Class name for styling the icon.
 * @param ariaLabel - Label for the icon for the benefit of screen readers.
 */
var getFontIcon = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (iconName, className, ariaLabel) {
    return FontIcon({ iconName: iconName, className: className, 'aria-label': ariaLabel });
});
//# sourceMappingURL=FontIcon.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js ***!
  \*******************************************************************************/
/*! exports provided: IconBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return IconBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.types */ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js");
/* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Image/Image */ "../node_modules/office-ui-fabric-react/lib/components/Image/Image.js");
/* harmony import */ var _Image_Image_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Image/Image.types */ "../node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _FontIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FontIcon */ "../node_modules/office-ui-fabric-react/lib/components/Icon/FontIcon.js");







var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["classNamesFunction"])({
    disableCaching: true
});
var IconBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IconBase, _super);
    function IconBase(props) {
        var _this = _super.call(this, props) || this;
        _this.onImageLoadingStateChange = function (state) {
            if (_this.props.imageProps && _this.props.imageProps.onLoadingStateChange) {
                _this.props.imageProps.onLoadingStateChange(state);
            }
            if (state === _Image_Image_types__WEBPACK_IMPORTED_MODULE_4__["ImageLoadState"].error) {
                _this.setState({ imageLoadError: true });
            }
        };
        _this.state = {
            imageLoadError: false
        };
        return _this;
    }
    IconBase.prototype.render = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, iconName = _a.iconName, imageErrorAs = _a.imageErrorAs, theme = _a.theme;
        var isPlaceholder = typeof iconName === 'string' && iconName.length === 0;
        var isImage = this.props.iconType === _Icon_types__WEBPACK_IMPORTED_MODULE_2__["IconType"].image || this.props.iconType === _Icon_types__WEBPACK_IMPORTED_MODULE_2__["IconType"].Image || !!this.props.imageProps;
        var _b = Object(_FontIcon__WEBPACK_IMPORTED_MODULE_6__["getIconContent"])(iconName), iconClassName = _b.iconClassName, children = _b.children;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            iconClassName: iconClassName,
            isImage: isImage,
            isPlaceholder: isPlaceholder
        });
        var RootType = isImage ? 'div' : 'i';
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_5__["htmlElementProperties"], ['aria-label']);
        var imageLoadError = this.state.imageLoadError;
        var imageProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props.imageProps, { onLoadingStateChange: this.onImageLoadingStateChange });
        var ImageType = (imageLoadError && imageErrorAs) || _Image_Image__WEBPACK_IMPORTED_MODULE_3__["Image"];
        var ariaLabel = this.props.ariaLabel || this.props['aria-label'];
        var containerProps = ariaLabel
            ? {
                'aria-label': ariaLabel
            }
            : {
                role: 'presentation',
                'aria-hidden': imageProps.alt || imageProps['aria-labelledby'] ? false : true
            };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RootType, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ "data-icon-name": iconName }, containerProps, nativeProps, { className: classNames.root }), isImage ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ImageType, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, imageProps)) : children));
    };
    return IconBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Icon.base.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.js":
/*!**************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.js ***!
  \**************************************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Icon_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.base */ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js");
/* harmony import */ var _Icon_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.styles */ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js");



/**
 * Icons are used for rendering an individual's avatar, presence and details.
 * They are used within the PeoplePicker components.
 */
var Icon = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Icon_base__WEBPACK_IMPORTED_MODULE_1__["IconBase"], _Icon_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Icon'
}, true);
//# sourceMappingURL=Icon.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js ***!
  \*********************************************************************************/
/*! exports provided: classNames, MS_ICON, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS_ICON", function() { return MS_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "../node_modules/office-ui-fabric-react/lib/Styling.js");

/** Class names used in themeable and non-themeable Icon components */
var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["mergeStyleSets"])({
    root: {
        display: 'inline-block'
    },
    placeholder: [
        'ms-Icon-placeHolder',
        {
            width: '1em'
        }
    ],
    image: [
        'ms-Icon-imageContainer',
        {
            overflow: 'hidden'
        }
    ]
});
/** Class name used only in non-themeable Icon components */
var MS_ICON = 'ms-Icon';
var getStyles = function (props) {
    var className = props.className, iconClassName = props.iconClassName, isPlaceholder = props.isPlaceholder, isImage = props.isImage, styles = props.styles;
    return {
        root: [
            isPlaceholder && classNames.placeholder,
            classNames.root,
            isImage && classNames.image,
            iconClassName,
            className,
            styles && styles.root,
            styles && styles.imageContainer
        ]
    };
};
//# sourceMappingURL=Icon.styles.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js":
/*!********************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js ***!
  \********************************************************************************/
/*! exports provided: IconType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return IconType; });
/**
 * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
 */
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * Deprecated, use `default`.
     * @deprecated Use `default`.
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * Deprecated, use `image`.
     * @deprecated Use `image`.
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType || (IconType = {}));
//# sourceMappingURL=Icon.types.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Icon/ImageIcon.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Icon/ImageIcon.js ***!
  \*******************************************************************************/
/*! exports provided: ImageIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageIcon", function() { return ImageIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Image/Image */ "../node_modules/office-ui-fabric-react/lib/components/Image/Image.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Icon_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon.styles */ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js");





var ImageIcon = function (props) {
    var className = props.className, imageProps = props.imageProps;
    var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(props, _Utilities__WEBPACK_IMPORTED_MODULE_3__["htmlElementProperties"]);
    var containerProps = props['aria-label']
        ? {}
        : {
            role: 'presentation',
            'aria-hidden': imageProps.alt || imageProps['aria-labelledby'] ? false : true
        };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, containerProps, nativeProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(_Icon_styles__WEBPACK_IMPORTED_MODULE_4__["MS_ICON"], _Icon_styles__WEBPACK_IMPORTED_MODULE_4__["classNames"].root, _Icon_styles__WEBPACK_IMPORTED_MODULE_4__["classNames"].image, className) }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Image_Image__WEBPACK_IMPORTED_MODULE_2__["Image"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, imageProps))));
};
//# sourceMappingURL=ImageIcon.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Icon/index.js":
/*!***************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Icon/index.js ***!
  \***************************************************************************/
/*! exports provided: Icon, IconBase, IconType, getIconContent, FontIcon, getFontIcon, ImageIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony import */ var _Icon_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.base */ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return _Icon_base__WEBPACK_IMPORTED_MODULE_1__["IconBase"]; });

/* harmony import */ var _Icon_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.types */ "../node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return _Icon_types__WEBPACK_IMPORTED_MODULE_2__["IconType"]; });

/* harmony import */ var _FontIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FontIcon */ "../node_modules/office-ui-fabric-react/lib/components/Icon/FontIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconContent", function() { return _FontIcon__WEBPACK_IMPORTED_MODULE_3__["getIconContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontIcon", function() { return _FontIcon__WEBPACK_IMPORTED_MODULE_3__["FontIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFontIcon", function() { return _FontIcon__WEBPACK_IMPORTED_MODULE_3__["getFontIcon"]; });

/* harmony import */ var _ImageIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageIcon */ "../node_modules/office-ui-fabric-react/lib/components/Icon/ImageIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageIcon", function() { return _ImageIcon__WEBPACK_IMPORTED_MODULE_4__["ImageIcon"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Image/Image.base.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Image/Image.base.js ***!
  \*********************************************************************************/
/*! exports provided: ImageBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBase", function() { return ImageBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Image_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image.types */ "../node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js");




var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var KEY_PREFIX = 'fabricImage';
var ImageBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImageBase, _super);
    function ImageBase(props) {
        var _this = _super.call(this, props) || this;
        // Make an initial assumption about the image layout until we can
        // check the rendered element. The value here only takes effect when
        // shouldStartVisible is true.
        _this._coverStyle = _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].portrait;
        _this._imageElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._frameElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onImageLoaded = function (ev) {
            var _a = _this.props, src = _a.src, onLoad = _a.onLoad;
            if (onLoad) {
                onLoad(ev);
            }
            _this._computeCoverStyle(_this.props);
            if (src) {
                _this.setState({
                    loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded
                });
            }
        };
        _this._onImageError = function (ev) {
            if (_this.props.onError) {
                _this.props.onError(ev);
            }
            _this.setState({
                loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].error
            });
        };
        _this.state = {
            loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded
        };
        return _this;
    }
    ImageBase.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({
                loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded
            });
        }
        else if (this.state.loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded) {
            this._computeCoverStyle(nextProps);
        }
    };
    ImageBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._checkImageLoaded();
        if (this.props.onLoadingStateChange && prevState.loadState !== this.state.loadState) {
            this.props.onLoadingStateChange(this.state.loadState);
        }
    };
    ImageBase.prototype.render = function () {
        var imageProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["imageProperties"], ['width', 'height']);
        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, shouldStartVisible = _a.shouldStartVisible, className = _a.className, imageFit = _a.imageFit, role = _a.role, maximizeFrame = _a.maximizeFrame, styles = _a.styles, theme = _a.theme;
        var loadState = this.state.loadState;
        var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            width: width,
            height: height,
            maximizeFrame: maximizeFrame,
            shouldFadeIn: shouldFadeIn,
            shouldStartVisible: shouldStartVisible,
            isLoaded: loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded || (loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded && this.props.shouldStartVisible),
            isLandscape: coverStyle === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].landscape,
            isCenter: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].center,
            isCenterContain: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerContain,
            isCenterCover: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerCover,
            isContain: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].contain,
            isCover: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].cover,
            isNone: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].none,
            isError: loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].error,
            isNotImageFit: imageFit === undefined
        });
        // If image dimensions aren't specified, the natural size of the image is used.
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root, style: { width: width, height: height }, ref: this._frameElement },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, imageProps, { onLoad: this._onImageLoaded, onError: this._onImageError, key: KEY_PREFIX + this.props.src || '', className: classNames.image, ref: this._imageElement, src: src, alt: alt, role: role }))));
    };
    ImageBase.prototype._checkImageLoaded = function () {
        var src = this.props.src;
        var loadState = this.state.loadState;
        if (loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = this._imageElement.current
                ? (src && (this._imageElement.current.naturalWidth > 0 && this._imageElement.current.naturalHeight > 0)) ||
                    (this._imageElement.current.complete && ImageBase._svgRegex.test(src))
                : false;
            if (isLoaded) {
                this._computeCoverStyle(this.props);
                this.setState({
                    loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded
                });
            }
        }
    };
    ImageBase.prototype._computeCoverStyle = function (props) {
        var imageFit = props.imageFit, width = props.width, height = props.height;
        // Do not compute cover style if it was already specified in props
        if ((imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].cover ||
            imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].contain ||
            imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerContain ||
            imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerCover) &&
            this.props.coverStyle === undefined &&
            this._imageElement.current &&
            this._frameElement.current) {
            // Determine the desired ratio using the width and height props.
            // If those props aren't available, measure measure the frame.
            var desiredRatio = void 0;
            if (!!width && !!height && imageFit !== _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerContain && imageFit !== _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].centerCover) {
                desiredRatio = width / height;
            }
            else {
                desiredRatio = this._frameElement.current.clientWidth / this._frameElement.current.clientHeight;
            }
            // Examine the source image to determine its original ratio.
            var naturalRatio = this._imageElement.current.naturalWidth / this._imageElement.current.naturalHeight;
            // Should we crop from the top or the sides?
            if (naturalRatio > desiredRatio) {
                this._coverStyle = _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].landscape;
            }
            else {
                this._coverStyle = _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].portrait;
            }
        }
    };
    ImageBase.defaultProps = {
        shouldFadeIn: true
    };
    ImageBase._svgRegex = /\.svg$/i;
    return ImageBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Image.base.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Image/Image.js":
/*!****************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Image/Image.js ***!
  \****************************************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Image_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.base */ "../node_modules/office-ui-fabric-react/lib/components/Image/Image.base.js");
/* harmony import */ var _Image_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.styles */ "../node_modules/office-ui-fabric-react/lib/components/Image/Image.styles.js");



var Image = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Image_base__WEBPACK_IMPORTED_MODULE_1__["ImageBase"], _Image_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Image'
}, true);
//# sourceMappingURL=Image.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Image/Image.styles.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Image/Image.styles.js ***!
  \***********************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "../node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");


var GlobalClassNames = {
    root: 'ms-Image',
    rootMaximizeFrame: 'ms-Image--maximizeFrame',
    image: 'ms-Image-image',
    imageCenter: 'ms-Image-image--center',
    imageContain: 'ms-Image-image--contain',
    imageCover: 'ms-Image-image--cover',
    imageCenterContain: 'ms-Image-image--centerContain',
    imageCenterCover: 'ms-Image-image--centerCover',
    imageNone: 'ms-Image-image--none',
    imageLandscape: 'ms-Image-image--landscape',
    imagePortrait: 'ms-Image-image--portrait'
};
var getStyles = function (props) {
    var className = props.className, width = props.width, height = props.height, maximizeFrame = props.maximizeFrame, isLoaded = props.isLoaded, shouldFadeIn = props.shouldFadeIn, shouldStartVisible = props.shouldStartVisible, isLandscape = props.isLandscape, isCenter = props.isCenter, isContain = props.isContain, isCover = props.isCover, isCenterContain = props.isCenterContain, isCenterCover = props.isCenterCover, isNone = props.isNone, isError = props.isError, isNotImageFit = props.isNotImageFit, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var ImageFitStyles = {
        position: 'absolute',
        left: '50% /* @noflip */',
        top: '50%',
        transform: 'translate(-50%,-50%)' // @todo test RTL renders transform: translate(50%,-50%);
    };
    // Cut the mustard using msMaxTouchPoints to detect IE11 which does not support CSS object-fit
    var window = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getWindow"])();
    var supportsObjectFit = window !== undefined && window.navigator.msMaxTouchPoints === undefined;
    var fallbackObjectFitStyles = (isContain && isLandscape) || (isCover && !isLandscape) ? { width: '100%', height: 'auto' } : { width: 'auto', height: '100%' };
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                overflow: 'hidden'
            },
            maximizeFrame && [
                classNames.rootMaximizeFrame,
                {
                    height: '100%',
                    width: '100%'
                }
            ],
            isLoaded && shouldFadeIn && !shouldStartVisible && _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"].fadeIn400,
            (isCenter || isContain || isCover || isCenterContain || isCenterCover) && {
                position: 'relative'
            },
            className
        ],
        image: [
            classNames.image,
            {
                display: 'block',
                opacity: 0
            },
            isLoaded && [
                'is-loaded',
                {
                    opacity: 1
                }
            ],
            isCenter && [classNames.imageCenter, ImageFitStyles],
            isContain && [
                classNames.imageContain,
                supportsObjectFit && {
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                },
                !supportsObjectFit && fallbackObjectFitStyles,
                ImageFitStyles
            ],
            isCover && [
                classNames.imageCover,
                supportsObjectFit && {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                },
                !supportsObjectFit && fallbackObjectFitStyles,
                ImageFitStyles
            ],
            isCenterContain && [
                classNames.imageCenterContain,
                isLandscape && {
                    maxWidth: '100%'
                },
                !isLandscape && {
                    maxHeight: '100%'
                },
                ImageFitStyles
            ],
            isCenterCover && [
                classNames.imageCenterCover,
                isLandscape && {
                    maxHeight: '100%'
                },
                !isLandscape && {
                    maxWidth: '100%'
                },
                ImageFitStyles
            ],
            isNone && [
                classNames.imageNone,
                {
                    width: 'auto',
                    height: 'auto'
                }
            ],
            isNotImageFit && [
                !!width &&
                    !height && {
                    height: 'auto',
                    width: '100%'
                },
                !width &&
                    !!height && {
                    height: '100%',
                    width: 'auto'
                },
                !!width &&
                    !!height && {
                    height: '100%',
                    width: '100%'
                }
            ],
            isLandscape && classNames.imageLandscape,
            !isLandscape && classNames.imagePortrait,
            !isLoaded && 'is-notLoaded',
            shouldFadeIn && 'is-fadeIn',
            isError && 'is-error'
        ]
    };
};
//# sourceMappingURL=Image.styles.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js ***!
  \**********************************************************************************/
/*! exports provided: ImageFit, ImageCoverStyle, ImageLoadState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageFit", function() { return ImageFit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCoverStyle", function() { return ImageCoverStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoadState", function() { return ImageLoadState; });
/**
 * The possible methods that can be used to fit the image.
 * {@docCategory Image}
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
    /**
     * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
     * behave as ImageFit.center if the image's natural height or width is less than the Image frame's height or width,
     * but if both natural height and width are larger than the frame it will behave as ImageFit.cover.
     */
    ImageFit[ImageFit["centerCover"] = 4] = "centerCover";
    /**
     * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
     * behave as ImageFit.center if the image's natural height and width is less than the Image frame's height and width,
     * but if either natural height or width are larger than the frame it will behave as ImageFit.contain.
     */
    ImageFit[ImageFit["centerContain"] = 5] = "centerContain";
})(ImageFit || (ImageFit = {}));
/**
 * The cover style to be used on the image
 * {@docCategory Image}
 */
var ImageCoverStyle;
(function (ImageCoverStyle) {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle || (ImageCoverStyle = {}));
/**
 * {@docCategory Image}
 */
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use `onLoadingStateChange` instead
     * and rerender the Image with a difference src.
     * @deprecated Use `onLoadingStateChange` instead
     * and rerender the Image with a difference src.
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState || (ImageLoadState = {}));
//# sourceMappingURL=Image.types.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Label/Label.base.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Label/Label.base.js ***!
  \*********************************************************************************/
/*! exports provided: LabelBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelBase", function() { return LabelBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");




var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])({
    disableCaching: true
});
var LabelBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LabelBase, _super);
    function LabelBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelBase.prototype.render = function () {
        var _a = this.props, _b = _a.as, RootType = _b === void 0 ? 'label' : _b, children = _a.children, className = _a.className, disabled = _a.disabled, styles = _a.styles, required = _a.required, theme = _a.theme;
        var classNames = getClassNames(styles, {
            className: className,
            disabled: disabled,
            required: required,
            theme: theme
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RootType, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]), { className: classNames.root }), children));
    };
    return LabelBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Label.base.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Label/Label.js":
/*!****************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Label/Label.js ***!
  \****************************************************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Label_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label.base */ "../node_modules/office-ui-fabric-react/lib/components/Label/Label.base.js");
/* harmony import */ var _Label_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Label.styles */ "../node_modules/office-ui-fabric-react/lib/components/Label/Label.styles.js");



var Label = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Label_base__WEBPACK_IMPORTED_MODULE_1__["LabelBase"], _Label_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Label'
});
//# sourceMappingURL=Label.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Label/Label.styles.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Label/Label.styles.js ***!
  \***********************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "../node_modules/office-ui-fabric-react/lib/Styling.js");

var getStyles = function (props) {
    var theme = props.theme, className = props.className, disabled = props.disabled, required = props.required;
    return {
        root: [
            'ms-Label',
            theme.fonts.medium,
            {
                color: theme.semanticColors.bodyText,
                boxSizing: 'border-box',
                boxShadow: 'none',
                margin: 0,
                display: 'block',
                padding: '5px 0',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
            },
            disabled && {
                color: theme.semanticColors.disabledBodyText,
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        color: 'GrayText'
                    },
                    _a)
            },
            required && {
                selectors: {
                    '::after': {
                        content: "' *'",
                        color: theme.semanticColors.errorText,
                        paddingRight: 12
                    }
                }
            },
            className
        ]
    };
    var _a;
};
//# sourceMappingURL=Label.styles.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/Label/index.js":
/*!****************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/Label/index.js ***!
  \****************************************************************************/
/*! exports provided: LabelBase, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Label_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label.base */ "../node_modules/office-ui-fabric-react/lib/components/Label/Label.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelBase", function() { return _Label_base__WEBPACK_IMPORTED_MODULE_0__["LabelBase"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label */ "../node_modules/office-ui-fabric-react/lib/components/Label/Label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_1__["Label"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/TextField/MaskedTextField/MaskedTextField.js":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/TextField/MaskedTextField/MaskedTextField.js ***!
  \**********************************************************************************************************/
/*! exports provided: DEFAULT_MASK_CHAR, MaskedTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MASK_CHAR", function() { return DEFAULT_MASK_CHAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedTextField", function() { return MaskedTextField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TextField */ "../node_modules/office-ui-fabric-react/lib/components/TextField/TextField.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _inputMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputMask */ "../node_modules/office-ui-fabric-react/lib/components/TextField/MaskedTextField/inputMask.js");





var DEFAULT_MASK_CHAR = '_';
var MaskedTextField = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MaskedTextField, _super);
    function MaskedTextField(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        _this._textField = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["initializeComponentRef"])(_this);
        // Translate mask into charData
        _this._maskCharData = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["parseMask"])(props.mask, props.maskFormat);
        // If an initial value is provided, use it to populate the format chars
        props.value !== undefined && _this.setValue(props.value);
        _this._isFocused = false;
        _this._moveCursorOnMouseUp = false;
        _this.state = {
            displayValue: Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["getMaskDisplay"])(props.mask, _this._maskCharData, props.maskChar)
        };
        return _this;
    }
    MaskedTextField.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.mask !== this.props.mask || newProps.value !== this.props.value) {
            this._maskCharData = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["parseMask"])(newProps.mask, newProps.maskFormat);
            newProps.value !== undefined && this.setValue(newProps.value);
            this.setState({
                displayValue: Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["getMaskDisplay"])(newProps.mask, this._maskCharData, newProps.maskChar)
            });
        }
    };
    MaskedTextField.prototype.componentDidUpdate = function () {
        // Move the cursor to the start of the mask format on update
        if (this._isFocused && this.state.maskCursorPosition !== undefined && this._textField.current) {
            this._textField.current.setSelectionRange(this.state.maskCursorPosition, this.state.maskCursorPosition);
        }
    };
    MaskedTextField.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TextField__WEBPACK_IMPORTED_MODULE_2__["TextField"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { onFocus: this._onFocus, onBlur: this._onBlur, onMouseDown: this._onMouseDown, onMouseUp: this._onMouseUp, onChange: this._onInputChange, onBeforeChange: this._onBeforeChange, onKeyDown: this._onKeyDown, onPaste: this._onPaste, value: this.state.displayValue, componentRef: this._textField })));
    };
    Object.defineProperty(MaskedTextField.prototype, "value", {
        /**
         * @returns The value of all filled format characters or undefined if not all format characters are filled
         */
        get: function () {
            var value = '';
            for (var i = 0; i < this._maskCharData.length; i++) {
                if (!this._maskCharData[i].value) {
                    return undefined;
                }
                value += this._maskCharData[i].value;
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     */
    MaskedTextField.prototype.setValue = function (newValue) {
        var valueIndex = 0, charDataIndex = 0;
        while (valueIndex < newValue.length && charDataIndex < this._maskCharData.length) {
            // Test if the next character in the new value fits the next format character
            var testVal = newValue[valueIndex];
            if (this._maskCharData[charDataIndex].format.test(testVal)) {
                this._maskCharData[charDataIndex].value = testVal;
                charDataIndex++;
            }
            valueIndex++;
        }
    };
    MaskedTextField.prototype.focus = function () {
        var current = this._textField.current;
        current && current.focus();
    };
    MaskedTextField.prototype.blur = function () {
        var current = this._textField.current;
        current && current.blur();
    };
    MaskedTextField.prototype.select = function () {
        var current = this._textField.current;
        current && current.select();
    };
    MaskedTextField.prototype.setSelectionStart = function (value) {
        var current = this._textField.current;
        current && current.setSelectionStart(value);
    };
    MaskedTextField.prototype.setSelectionEnd = function (value) {
        var current = this._textField.current;
        current && current.setSelectionEnd(value);
    };
    MaskedTextField.prototype.setSelectionRange = function (start, end) {
        var current = this._textField.current;
        current && current.setSelectionRange(start, end);
    };
    Object.defineProperty(MaskedTextField.prototype, "selectionStart", {
        get: function () {
            var current = this._textField.current;
            return current && current.selectionStart !== null ? current.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextField.prototype, "selectionEnd", {
        get: function () {
            var current = this._textField.current;
            return current && current.selectionEnd ? current.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    MaskedTextField.prototype._onFocus = function (event) {
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
        this._isFocused = true;
        // Move the cursor position to the leftmost unfilled position
        for (var i = 0; i < this._maskCharData.length; i++) {
            if (!this._maskCharData[i].value) {
                this.setState({
                    maskCursorPosition: this._maskCharData[i].displayIndex
                });
                break;
            }
        }
    };
    MaskedTextField.prototype._onBlur = function (event) {
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
        this._isFocused = false;
        this._moveCursorOnMouseUp = true;
    };
    MaskedTextField.prototype._onMouseDown = function (event) {
        if (this.props.onMouseDown) {
            this.props.onMouseDown(event);
        }
        if (!this._isFocused) {
            this._moveCursorOnMouseUp = true;
        }
    };
    MaskedTextField.prototype._onMouseUp = function (event) {
        if (this.props.onMouseUp) {
            this.props.onMouseUp(event);
        }
        // Move the cursor on mouseUp after focusing the textField
        if (this._moveCursorOnMouseUp) {
            this._moveCursorOnMouseUp = false;
            // Move the cursor position to the rightmost unfilled position
            for (var i = 0; i < this._maskCharData.length; i++) {
                if (!this._maskCharData[i].value) {
                    this.setState({
                        maskCursorPosition: this._maskCharData[i].displayIndex
                    });
                    break;
                }
            }
        }
    };
    MaskedTextField.prototype._onBeforeChange = function (value) {
        var current = this._textField.current;
        if (this.props.onBeforeChange) {
            this.props.onBeforeChange(value);
        }
        if (this._changeSelectionData === null && current) {
            this._changeSelectionData = {
                changeType: 'default',
                selectionStart: current.selectionStart !== null ? current.selectionStart : -1,
                selectionEnd: current.selectionEnd !== null ? current.selectionEnd : -1
            };
        }
    };
    MaskedTextField.prototype._onInputChange = function (ev, value) {
        if (!this._changeSelectionData) {
            return;
        }
        var displayValue = this.state.displayValue;
        // The initial value of cursorPos does not matter
        var cursorPos = 0;
        var _a = this._changeSelectionData, changeType = _a.changeType, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd;
        if (changeType === 'textPasted') {
            var charsSelected = selectionEnd - selectionStart, charCount = value.length + charsSelected - displayValue.length, startPos = selectionStart, pastedString = value.substr(startPos, charCount);
            // Clear any selected characters
            if (charsSelected) {
                this._maskCharData = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["clearRange"])(this._maskCharData, selectionStart, charsSelected);
            }
            cursorPos = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["insertString"])(this._maskCharData, startPos, pastedString);
        }
        else if (changeType === 'delete' || changeType === 'backspace') {
            // isDel is true If the characters are removed LTR, otherwise RTL
            var isDel = changeType === 'delete', charCount = selectionEnd - selectionStart;
            if (charCount) {
                // charCount is > 0 if range was deleted
                this._maskCharData = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["clearRange"])(this._maskCharData, selectionStart, charCount);
                cursorPos = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["getRightFormatIndex"])(this._maskCharData, selectionStart);
            }
            else {
                // If charCount === 0, there was no selection and a single character was deleted
                if (isDel) {
                    this._maskCharData = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["clearNext"])(this._maskCharData, selectionStart);
                    cursorPos = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["getRightFormatIndex"])(this._maskCharData, selectionStart);
                }
                else {
                    this._maskCharData = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["clearPrev"])(this._maskCharData, selectionStart);
                    cursorPos = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["getLeftFormatIndex"])(this._maskCharData, selectionStart);
                }
            }
        }
        else if (value.length > displayValue.length) {
            // This case is if the user added characters
            var charCount = value.length - displayValue.length, startPos = selectionEnd - charCount, enteredString = value.substr(startPos, charCount);
            cursorPos = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["insertString"])(this._maskCharData, startPos, enteredString);
        }
        else if (value.length <= displayValue.length) {
            /**
             * This case is reached only if the user has selected a block of 1 or more
             * characters and input a character replacing the characters they've selected.
             */
            var charCount = 1, selectCount = displayValue.length + charCount - value.length, startPos = selectionEnd - charCount, enteredString = value.substr(startPos, charCount);
            // Clear the selected range
            this._maskCharData = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["clearRange"])(this._maskCharData, startPos, selectCount);
            // Insert the printed character
            cursorPos = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["insertString"])(this._maskCharData, startPos, enteredString);
        }
        this._changeSelectionData = null;
        var newValue = Object(_inputMask__WEBPACK_IMPORTED_MODULE_4__["getMaskDisplay"])(this.props.mask, this._maskCharData, this.props.maskChar);
        this.setState({
            displayValue: newValue,
            maskCursorPosition: cursorPos
        });
        // Perform onChange/d after input has been processed. Return value is expected to be the displayed text
        if (this.props.onChange) {
            this.props.onChange(ev, newValue);
        }
        if (this.props.onChanged) {
            this.props.onChanged(newValue);
        }
    };
    MaskedTextField.prototype._onKeyDown = function (event) {
        var current = this._textField.current;
        if (this.props.onKeyDown) {
            this.props.onKeyDown(event);
        }
        this._changeSelectionData = null;
        if (current && current.value) {
            var keyCode = event.keyCode, ctrlKey = event.ctrlKey, metaKey = event.metaKey;
            // Ignore ctrl and meta keydown
            if (ctrlKey || metaKey) {
                return;
            }
            // On backspace or delete, store the selection and the keyCode
            if (keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].backspace || keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].del) {
                var selectionStart = event.target.selectionStart, selectionEnd = event.target.selectionEnd;
                // Check if backspace or delete press is valid.
                if (!(keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].backspace && selectionEnd && selectionEnd > 0) &&
                    !(keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].del && selectionStart !== null && selectionStart < current.value.length)) {
                    return;
                }
                this._changeSelectionData = {
                    changeType: keyCode === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].backspace ? 'backspace' : 'delete',
                    selectionStart: selectionStart !== null ? selectionStart : -1,
                    selectionEnd: selectionEnd !== null ? selectionEnd : -1
                };
            }
        }
    };
    MaskedTextField.prototype._onPaste = function (event) {
        if (this.props.onPaste) {
            this.props.onPaste(event);
        }
        var selectionStart = event.target.selectionStart, selectionEnd = event.target.selectionEnd;
        // Store the paste selection range
        this._changeSelectionData = {
            changeType: 'textPasted',
            selectionStart: selectionStart !== null ? selectionStart : -1,
            selectionEnd: selectionEnd !== null ? selectionEnd : -1
        };
    };
    MaskedTextField.defaultProps = {
        maskChar: DEFAULT_MASK_CHAR,
        maskFormat: _inputMask__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_MASK_FORMAT_CHARS"]
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _Utilities__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], MaskedTextField.prototype, "_onFocus", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _Utilities__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], MaskedTextField.prototype, "_onBlur", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _Utilities__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], MaskedTextField.prototype, "_onMouseDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _Utilities__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], MaskedTextField.prototype, "_onMouseUp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _Utilities__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], MaskedTextField.prototype, "_onBeforeChange", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _Utilities__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], MaskedTextField.prototype, "_onInputChange", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _Utilities__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], MaskedTextField.prototype, "_onKeyDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _Utilities__WEBPACK_IMPORTED_MODULE_3__["autobind"]
    ], MaskedTextField.prototype, "_onPaste", null);
    return MaskedTextField;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=MaskedTextField.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/TextField/MaskedTextField/inputMask.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/TextField/MaskedTextField/inputMask.js ***!
  \****************************************************************************************************/
/*! exports provided: DEFAULT_MASK_FORMAT_CHARS, parseMask, getMaskDisplay, getRightFormatIndex, getLeftFormatIndex, clearRange, clearNext, clearPrev, insertString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MASK_FORMAT_CHARS", function() { return DEFAULT_MASK_FORMAT_CHARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMask", function() { return parseMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaskDisplay", function() { return getMaskDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRightFormatIndex", function() { return getRightFormatIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeftFormatIndex", function() { return getLeftFormatIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearRange", function() { return clearRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearNext", function() { return clearNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearPrev", function() { return clearPrev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertString", function() { return insertString; });
var DEFAULT_MASK_FORMAT_CHARS = {
    '9': /[0-9]/,
    a: /[a-zA-Z]/,
    '*': /[a-zA-Z0-9]/
};
/**
 * Takes in the mask string and the formatCharacters and returns an array of MaskValues
 * Example:
 * mask = 'Phone Number: (999) - 9999'
 * return = [
 *    { value: undefined, displayIndex: 16, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 17, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 18, format: /[0-9]/ },
 *    { value: undefined, displayIndex: 22, format: /[0-9]/ },
 * ]
 *
 * @param mask The string use to define the format of the displayed maskedValue.
 * @param formatChars An object defining how certain characters in the mask should accept input.
 */
function parseMask(mask, formatChars) {
    if (formatChars === void 0) { formatChars = DEFAULT_MASK_FORMAT_CHARS; }
    if (!mask) {
        return [];
    }
    var maskCharData = [];
    // Count the escape characters in the mask string.
    var escapedChars = 0;
    for (var i = 0; i + escapedChars < mask.length; i++) {
        var maskChar = mask.charAt(i + escapedChars);
        if (maskChar === '\\') {
            escapedChars++;
        }
        else {
            // Check if the maskChar is a format character.
            var maskFormat = formatChars[maskChar];
            if (maskFormat) {
                maskCharData.push({
                    /**
                     * Do not add escapedChars to the displayIndex.
                     * The index refers to a position in the mask's displayValue.
                     * Since the backslashes don't appear in the displayValue,
                     * we do not add them to the charData displayIndex.
                     */
                    displayIndex: i,
                    format: maskFormat
                });
            }
        }
    }
    return maskCharData;
}
/**
 * Takes in the mask string, an array of MaskValues, and the maskCharacter
 * returns the mask string formatted with the input values and maskCharacter.
 * If the maskChar is undefined, the maskDisplay is truncated to the last filled format character.
 * Example:
 * mask = 'Phone Number: (999) 999 - 9999'
 * maskCharData = '12345'
 * maskChar = '_'
 * return = 'Phone Number: (123) 45_ - ___'
 *
 * Example:
 * mask = 'Phone Number: (999) 999 - 9999'
 * value = '12345'
 * maskChar = undefined
 * return = 'Phone Number: (123) 45'
 *
 * @param mask The string use to define the format of the displayed maskedValue.
 * @param maskCharData The input values to insert into the mask string for displaying.
 * @param maskChar? A character to display in place of unfilled mask format characters.
 */
function getMaskDisplay(mask, maskCharData, maskChar) {
    var maskDisplay = mask;
    if (!maskDisplay) {
        return '';
    }
    // Remove all backslashes
    maskDisplay = maskDisplay.replace(/\\/g, '');
    // lastDisplayIndex is is used to truncate the string if necessary.
    var lastDisplayIndex = 0;
    if (maskCharData.length > 0) {
        lastDisplayIndex = maskCharData[0].displayIndex - 1;
    }
    /**
     * For each input value, replace the character in the maskDisplay with the value.
     * If there is no value set for the format character, use the maskChar.
     */
    for (var _i = 0, maskCharData_1 = maskCharData; _i < maskCharData_1.length; _i++) {
        var charData = maskCharData_1[_i];
        var nextChar = ' ';
        if (charData.value) {
            nextChar = charData.value;
            if (charData.displayIndex > lastDisplayIndex) {
                lastDisplayIndex = charData.displayIndex;
            }
        }
        else {
            if (maskChar) {
                nextChar = maskChar;
            }
        }
        // Insert the character into the maskdisplay at its corresponding index
        maskDisplay = maskDisplay.slice(0, charData.displayIndex) + nextChar + maskDisplay.slice(charData.displayIndex + 1);
    }
    // Cut off all mask characters after the last filled format value
    if (!maskChar) {
        maskDisplay = maskDisplay.slice(0, lastDisplayIndex + 1);
    }
    return maskDisplay;
}
/**
 * Get the next format index right of or at a specified index.
 * If no index exists, returns the rightmost index.
 * @param maskCharData
 * @param index
 */
function getRightFormatIndex(maskCharData, index) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= index) {
            return maskCharData[i].displayIndex;
        }
    }
    return maskCharData[maskCharData.length - 1].displayIndex;
}
/**
 * Get the next format index left of a specified index.
 * If no index exists, returns the leftmost index.
 * @param maskCharData
 * @param index
 */
function getLeftFormatIndex(maskCharData, index) {
    for (var i = maskCharData.length - 1; i >= 0; i--) {
        if (maskCharData[i].displayIndex < index) {
            return maskCharData[i].displayIndex;
        }
    }
    return maskCharData[0].displayIndex;
}
/**
 * Deletes all values in maskCharData with a displayIndex that falls inside the specified range.
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 * @param selectionCount
 */
function clearRange(maskCharData, selectionStart, selectionCount) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            if (maskCharData[i].displayIndex >= selectionStart + selectionCount) {
                break;
            }
            maskCharData[i].value = undefined;
        }
    }
    return maskCharData;
}
/**
 * Deletes the input character at or after a specified index and returns the new array of charData
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 */
function clearNext(maskCharData, selectionStart) {
    for (var i = 0; i < maskCharData.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            maskCharData[i].value = undefined;
            break;
        }
    }
    return maskCharData;
}
/**
 * Deletes the input character before a specified index and returns the new array of charData
 * maskCharData is modified inline and also returned.
 * @param maskCharData
 * @param selectionStart
 */
function clearPrev(maskCharData, selectionStart) {
    for (var i = maskCharData.length - 1; i >= 0; i--) {
        if (maskCharData[i].displayIndex < selectionStart) {
            maskCharData[i].value = undefined;
            break;
        }
    }
    return maskCharData;
}
/**
 * Deletes all values in maskCharData with a displayIndex that falls inside the specified range.
 * Modifies the maskCharData inplace with the passed string and returns the display index of the
 * next format character after the inserted string.
 * @param maskCharData
 * @param selectionStart
 * @param selectionCount
 * @return The displayIndex of the next format character
 */
function insertString(maskCharData, selectionStart, newString) {
    var stringIndex = 0;
    var nextIndex = 0;
    var isStringInserted = false;
    // Iterate through _maskCharData finding values with a displayIndex after the specified range start
    for (var i = 0; i < maskCharData.length && stringIndex < newString.length; i++) {
        if (maskCharData[i].displayIndex >= selectionStart) {
            isStringInserted = true;
            nextIndex = maskCharData[i].displayIndex;
            // Find the next character in the newString that matches the format
            while (stringIndex < newString.length) {
                // If the character matches the format regexp, set the maskCharData to the new character
                if (maskCharData[i].format.test(newString.charAt(stringIndex))) {
                    maskCharData[i].value = newString.charAt(stringIndex++);
                    // Set the nextIndex to the display index of the next mask format character.
                    if (i + 1 < maskCharData.length) {
                        nextIndex = maskCharData[i + 1].displayIndex;
                    }
                    else {
                        nextIndex++;
                    }
                    break;
                }
                stringIndex++;
            }
        }
    }
    return isStringInserted ? nextIndex : selectionStart;
}
//# sourceMappingURL=inputMask.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/TextField/TextField.base.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/TextField/TextField.base.js ***!
  \*****************************************************************************************/
/*! exports provided: TextFieldBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldBase", function() { return TextFieldBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Label */ "../node_modules/office-ui-fabric-react/lib/Label.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icon */ "../node_modules/office-ui-fabric-react/lib/Icon.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["classNamesFunction"])();
var DEFAULT_STATE_VALUE = '';
var TextFieldBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextFieldBase, _super);
    function TextFieldBase(props) {
        var _this = _super.call(this, props) || this;
        _this._textElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["createRef"])();
        _this._onFocus = function (ev) {
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
            _this.setState({ isFocused: true });
            if (_this.props.validateOnFocusIn) {
                _this._validate(_this.state.value);
            }
        };
        _this._onBlur = function (ev) {
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
            _this.setState({ isFocused: false });
            if (_this.props.validateOnFocusOut) {
                _this._validate(_this.state.value);
            }
        };
        _this._onRenderLabel = function (props) {
            var label = props.label, required = props.required;
            // IProcessedStyleSet definition requires casting for what Label expects as its styles prop
            var labelStyles = _this._classNames.subComponentStyles
                ? _this._classNames.subComponentStyles.label
                : undefined;
            if (label) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_2__["Label"], { required: required, htmlFor: _this._id, styles: labelStyles, disabled: props.disabled, id: _this._labelId }, props.label));
            }
            return null;
        };
        _this._onRenderDescription = function (props) {
            if (props.description) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.description }, props.description);
            }
            return null;
        };
        _this._onInputChange = function (event) {
            event.persist();
            var element = event.target;
            var value = element.value;
            // Avoid doing unnecessary work when the value has not changed.
            if (value === _this._latestValue) {
                return;
            }
            _this._latestValue = value;
            _this.setState({ value: value }, function () {
                _this._adjustInputHeight();
                if (_this.props.onChange) {
                    _this.props.onChange(event, value);
                }
                if (_this.props.onChanged) {
                    _this.props.onChanged(value);
                }
            });
            if (_shouldValidateAllChanges(_this.props)) {
                _this._delayedValidate(value);
            }
            if (_this.props.onBeforeChange) {
                _this.props.onBeforeChange(value);
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["initializeComponentRef"])(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_4__["Async"](_this);
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["warnDeprecations"])('TextField', props, {
                iconClass: 'iconProps',
                addonString: 'prefix',
                onRenderAddon: 'onRenderPrefix',
                onChanged: 'onChange'
            });
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["warnMutuallyExclusive"])('TextField', props, {
                value: 'defaultValue'
            });
        }
        _this._id = props.id || Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getId"])('TextField');
        _this._descriptionId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getId"])('TextFieldDescription');
        _this._labelId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getId"])('TextFieldLabel');
        if (props.value !== undefined) {
            _this._latestValue = props.value;
        }
        else if (props.defaultValue !== undefined) {
            _this._latestValue = props.defaultValue;
        }
        else {
            _this._latestValue = DEFAULT_STATE_VALUE;
        }
        _this.state = {
            value: _this._latestValue,
            isFocused: false,
            errorMessage: ''
        };
        _this._delayedValidate = _this._async.debounce(_this._validate, _this.props.deferredValidationTime);
        _this._lastValidation = 0;
        return _this;
    }
    Object.defineProperty(TextFieldBase.prototype, "value", {
        /**
         * Gets the current value of the text field.
         */
        get: function () {
            return this.state.value;
        },
        enumerable: true,
        configurable: true
    });
    TextFieldBase.prototype.componentDidMount = function () {
        this._isMounted = true;
        this._adjustInputHeight();
        if (this.props.validateOnLoad) {
            this._validate(this.state.value);
        }
    };
    TextFieldBase.prototype.componentWillReceiveProps = function (newProps) {
        var onBeforeChange = this.props.onBeforeChange;
        // If old value prop was undefined, then component is controlled and we should
        //    respect new undefined value and update state accordingly.
        if (newProps.value !== this.state.value && (newProps.value !== undefined || this.props.value !== undefined)) {
            if (onBeforeChange) {
                onBeforeChange(newProps.value);
            }
            this._id = newProps.id || this._id;
            this._setValue(newProps.value);
            if (_shouldValidateAllChanges(newProps)) {
                this._delayedValidate(newProps.value);
            }
        }
        // If component is not currently controlled and defaultValue changes, set value to new defaultValue.
        if (newProps.defaultValue !== this.props.defaultValue && newProps.value === undefined) {
            this._setValue(newProps.defaultValue);
        }
        // Text field is changing between single- and multi-line. After the change is complete,
        // we'll need to reset focus and selection/cursor.
        if (!!newProps.multiline !== !!this.props.multiline && this.state.isFocused) {
            this._shouldResetFocusAfterRender = true;
            this._selectionBeforeInputTypeChange = [this.selectionStart, this.selectionEnd];
        }
    };
    TextFieldBase.prototype.componentDidUpdate = function () {
        if (this._shouldResetFocusAfterRender) {
            // The text field has just changed between single- and multi-line, so we need to reset focus
            // and selection/cursor.
            this._shouldResetFocusAfterRender = false;
            this.focus();
            if (this._selectionBeforeInputTypeChange) {
                var _a = this._selectionBeforeInputTypeChange, start = _a[0], end = _a[1];
                if (start !== null && end !== null) {
                    this.setSelectionRange(start, end);
                }
            }
        }
    };
    TextFieldBase.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        this._async.dispose();
    };
    TextFieldBase.prototype.render = function () {
        var _a = this.props, borderless = _a.borderless, className = _a.className, disabled = _a.disabled, iconClass = _a.iconClass, iconProps = _a.iconProps, inputClassName = _a.inputClassName, label = _a.label, multiline = _a.multiline, required = _a.required, underlined = _a.underlined, addonString = _a.addonString, // @deprecated
        prefix = _a.prefix, resizable = _a.resizable, suffix = _a.suffix, theme = _a.theme, styles = _a.styles, autoAdjustHeight = _a.autoAdjustHeight, _b = _a.onRenderAddon, onRenderAddon = _b === void 0 ? this._onRenderAddon : _b, // @deprecated
        _c = _a.onRenderPrefix, // @deprecated
        onRenderPrefix = _c === void 0 ? this._onRenderPrefix : _c, _d = _a.onRenderSuffix, onRenderSuffix = _d === void 0 ? this._onRenderSuffix : _d, _e = _a.onRenderLabel, onRenderLabel = _e === void 0 ? this._onRenderLabel : _e, _f = _a.onRenderDescription, onRenderDescription = _f === void 0 ? this._onRenderDescription : _f;
        var isFocused = this.state.isFocused;
        var errorMessage = this._errorMessage;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            disabled: disabled,
            focused: isFocused,
            required: required,
            multiline: multiline,
            hasLabel: !!label,
            hasErrorMessage: !!errorMessage,
            borderless: borderless,
            resizable: resizable,
            hasIcon: !!iconProps,
            underlined: underlined,
            iconClass: iconClass,
            inputClassName: inputClassName,
            autoAdjustHeight: autoAdjustHeight
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.root },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.wrapper },
                onRenderLabel(this.props, this._onRenderLabel),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.fieldGroup },
                    (addonString !== undefined || this.props.onRenderAddon) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.prefix }, onRenderAddon(this.props, this._onRenderAddon))),
                    (prefix !== undefined || this.props.onRenderPrefix) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.prefix }, onRenderPrefix(this.props, this._onRenderPrefix))),
                    multiline ? this._renderTextArea() : this._renderInput(),
                    (iconClass || iconProps) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ className: this._classNames.icon }, iconProps)),
                    (suffix !== undefined || this.props.onRenderSuffix) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.suffix }, onRenderSuffix(this.props, this._onRenderSuffix))))),
            this._isDescriptionAvailable && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: this._descriptionId },
                onRenderDescription(this.props, this._onRenderDescription),
                errorMessage && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "alert" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Utilities__WEBPACK_IMPORTED_MODULE_4__["DelayedRender"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: this._classNames.errorMessage },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { "data-automation-id": "error-message" }, errorMessage)))))))));
    };
    /**
     * Sets focus on the text field
     */
    TextFieldBase.prototype.focus = function () {
        if (this._textElement.current) {
            this._textElement.current.focus();
        }
    };
    /**
     * Blurs the text field.
     */
    TextFieldBase.prototype.blur = function () {
        if (this._textElement.current) {
            this._textElement.current.blur();
        }
    };
    /**
     * Selects the text field
     */
    TextFieldBase.prototype.select = function () {
        if (this._textElement.current) {
            this._textElement.current.select();
        }
    };
    /**
     * Sets the selection start of the text field to a specified value
     */
    TextFieldBase.prototype.setSelectionStart = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionStart = value;
        }
    };
    /**
     * Sets the selection end of the text field to a specified value
     */
    TextFieldBase.prototype.setSelectionEnd = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionEnd = value;
        }
    };
    Object.defineProperty(TextFieldBase.prototype, "selectionStart", {
        /**
         * Gets the selection start of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldBase.prototype, "selectionEnd", {
        /**
         * Gets the selection end of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start - Index of the start of the selection.
     * @param end - Index of the end of the selection.
     */
    TextFieldBase.prototype.setSelectionRange = function (start, end) {
        if (this._textElement.current) {
            this._textElement.current.setSelectionRange(start, end);
        }
    };
    TextFieldBase.prototype._setValue = function (value) {
        var _this = this;
        this._latestValue = value;
        this.setState({
            value: value || DEFAULT_STATE_VALUE,
            errorMessage: ''
        }, function () {
            _this._adjustInputHeight();
        });
    };
    // @deprecated
    TextFieldBase.prototype._onRenderAddon = function (props) {
        var addonString = props.addonString;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { style: { paddingBottom: '1px' } }, addonString);
    };
    TextFieldBase.prototype._onRenderPrefix = function (props) {
        var prefix = props.prefix;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { style: { paddingBottom: '1px' } }, prefix);
    };
    TextFieldBase.prototype._onRenderSuffix = function (props) {
        var suffix = props.suffix;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { style: { paddingBottom: '1px' } }, suffix);
    };
    Object.defineProperty(TextFieldBase.prototype, "_errorMessage", {
        get: function () {
            var errorMessage = this.state.errorMessage;
            if (!errorMessage && this.props.errorMessage) {
                errorMessage = this.props.errorMessage;
            }
            return errorMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldBase.prototype, "_isDescriptionAvailable", {
        /**
         * If a custom description render function is supplied then treat description as always available.
         * Otherwise defer to the presence of description or error message text.
         */
        get: function () {
            var props = this.props;
            return !!(props.onRenderDescription || props.description || this._errorMessage);
        },
        enumerable: true,
        configurable: true
    });
    TextFieldBase.prototype._renderTextArea = function () {
        var textAreaProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_4__["textAreaProperties"], ['defaultValue']);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: this._id }, textAreaProps, { ref: this._textElement, value: this.state.value, onInput: this._onInputChange, onChange: this._onInputChange, className: this._classNames.field, "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], "aria-invalid": !!this._errorMessage, "aria-label": this.props.ariaLabel, readOnly: this.props.readOnly, onFocus: this._onFocus, onBlur: this._onBlur })));
    };
    TextFieldBase.prototype._renderInput = function () {
        var inputProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_4__["inputProperties"], ['defaultValue']);
        var ariaLabelledBy = this.props['aria-labelledby'] || (this.props.label ? this._labelId : undefined);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ type: 'text', id: this._id, "aria-labelledby": ariaLabelledBy }, inputProps, { ref: this._textElement, value: this.state.value, onInput: this._onInputChange, onChange: this._onInputChange, className: this._classNames.field, "aria-label": this.props.ariaLabel, "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], "aria-invalid": !!this._errorMessage, readOnly: this.props.readOnly, onFocus: this._onFocus, onBlur: this._onBlur })));
    };
    TextFieldBase.prototype._validate = function (value) {
        var _this = this;
        // In case of _validate called multi-times during executing validate logic with promise return.
        if (this._latestValidateValue === value && _shouldValidateAllChanges(this.props)) {
            return;
        }
        this._latestValidateValue = value;
        var onGetErrorMessage = this.props.onGetErrorMessage;
        var result = onGetErrorMessage(value || '');
        if (result !== undefined) {
            if (typeof result === 'string' || !('then' in result)) {
                this.setState({ errorMessage: result });
                this._notifyAfterValidate(value, result);
            }
            else {
                var currentValidation_1 = ++this._lastValidation;
                result.then(function (errorMessage) {
                    if (_this._isMounted && currentValidation_1 === _this._lastValidation) {
                        _this.setState({ errorMessage: errorMessage });
                    }
                    _this._notifyAfterValidate(value, errorMessage);
                });
            }
        }
        else {
            this._notifyAfterValidate(value, '');
        }
    };
    TextFieldBase.prototype._notifyAfterValidate = function (value, errorMessage) {
        if (this._isMounted && value === this.state.value && this.props.onNotifyValidationResult) {
            this.props.onNotifyValidationResult(errorMessage, value);
        }
    };
    TextFieldBase.prototype._adjustInputHeight = function () {
        if (this._textElement.current && this.props.autoAdjustHeight && this.props.multiline) {
            var textField = this._textElement.current;
            textField.style.height = '';
            textField.style.height = textField.scrollHeight + 'px';
        }
    };
    TextFieldBase.defaultProps = {
        multiline: false,
        resizable: true,
        autoAdjustHeight: false,
        underlined: false,
        borderless: false,
        onChange: function () {
            /* noop */
        },
        onBeforeChange: function () {
            /* noop */
        },
        onNotifyValidationResult: function () {
            /* noop */
        },
        onGetErrorMessage: function () { return undefined; },
        deferredValidationTime: 200,
        errorMessage: '',
        validateOnFocusIn: false,
        validateOnFocusOut: false,
        validateOnLoad: true
    };
    return TextFieldBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/**
 * If `validateOnFocusIn` or `validateOnFocusOut` is true, validation should run **only** on that event.
 * Otherwise, validation should run on every change.
 */
function _shouldValidateAllChanges(props) {
    return !(props.validateOnFocusIn || props.validateOnFocusOut);
}
//# sourceMappingURL=TextField.base.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/TextField/TextField.js":
/*!************************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/TextField/TextField.js ***!
  \************************************************************************************/
/*! exports provided: TextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "../node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _TextField_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextField.base */ "../node_modules/office-ui-fabric-react/lib/components/TextField/TextField.base.js");
/* harmony import */ var _TextField_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField.styles */ "../node_modules/office-ui-fabric-react/lib/components/TextField/TextField.styles.js");



var TextField = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_TextField_base__WEBPACK_IMPORTED_MODULE_1__["TextFieldBase"], _TextField_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'TextField'
});
//# sourceMappingURL=TextField.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/TextField/TextField.styles.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/TextField/TextField.styles.js ***!
  \*******************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "../node_modules/office-ui-fabric-react/lib/Styling.js");

var globalClassNames = {
    root: 'ms-TextField',
    description: 'ms-TextField-description',
    errorMessage: 'ms-TextField-errorMessage',
    field: 'ms-TextField-field',
    fieldGroup: 'ms-TextField-fieldGroup',
    prefix: 'ms-TextField-prefix',
    suffix: 'ms-TextField-suffix',
    wrapper: 'ms-TextField-wrapper',
    multiline: 'ms-TextField--multiline',
    borderless: 'ms-TextField--borderless',
    underlined: 'ms-TextField--underlined',
    unresizable: 'ms-TextField--unresizable',
    required: 'is-required',
    disabled: 'is-disabled',
    active: 'is-active'
};
function getLabelStyles(props) {
    var underlined = props.underlined, disabled = props.disabled, focused = props.focused;
    return function () {
        return ({
            root: [
                underlined &&
                    disabled && {
                    color: props.theme.palette.neutralTertiary
                },
                underlined && {
                    fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].medium,
                    marginRight: 8,
                    paddingLeft: 12,
                    paddingRight: 0,
                    lineHeight: '22px',
                    height: 32
                },
                underlined &&
                    focused && {
                    selectors: (_a = {},
                        _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            height: 31 // -1px to prevent jumpiness in HC with the increased border-width to 2px
                        },
                        _a)
                }
            ]
        });
        var _a;
    };
}
function getStyles(props) {
    var theme = props.theme, className = props.className, disabled = props.disabled, focused = props.focused, required = props.required, multiline = props.multiline, hasLabel = props.hasLabel, borderless = props.borderless, underlined = props.underlined, hasIcon = props.hasIcon, resizable = props.resizable, hasErrorMessage = props.hasErrorMessage, iconClass = props.iconClass, inputClassName = props.inputClassName, autoAdjustHeight = props.autoAdjustHeight;
    var semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(globalClassNames, theme);
    var fieldPrefixSuffix = {
        background: semanticColors.disabledBackground,
        color: !disabled ? semanticColors.inputPlaceholderText : semanticColors.disabledText,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        flexShrink: 0
    };
    // placeholder style constants
    var placeholderStyles = [
        theme.fonts.medium,
        {
            color: semanticColors.inputPlaceholderText,
            opacity: 1
        }
    ];
    var disabledPlaceholderStyles = {
        color: semanticColors.disabledText
    };
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            required && classNames.required,
            disabled && classNames.disabled,
            focused && classNames.active,
            multiline && classNames.multiline,
            borderless && classNames.borderless,
            underlined && classNames.underlined,
            _Styling__WEBPACK_IMPORTED_MODULE_0__["normalize"],
            {
                position: 'relative'
            },
            className
        ],
        wrapper: [
            classNames.wrapper,
            underlined && {
                display: 'flex',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: semanticColors.inputBorder,
                width: '100%'
            },
            hasErrorMessage &&
                underlined &&
                !disabled && {
                borderBottomColor: semanticColors.errorText,
                selectors: {
                    ':hover': {
                        borderBottomColor: semanticColors.errorText,
                        selectors: (_a = {},
                            _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                borderBottomColor: 'Highlight'
                            },
                            _a)
                    }
                }
            },
            underlined &&
                disabled && {
                borderBottomColor: semanticColors.disabledBackground
            },
            underlined &&
                !disabled &&
                !focused &&
                !hasErrorMessage && {
                selectors: {
                    ':hover': {
                        borderBottomColor: semanticColors.inputBorderHovered,
                        selectors: (_b = {},
                            _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                borderBottomColor: 'Highlight'
                            },
                            _b)
                    }
                }
            },
            underlined &&
                focused && {
                borderBottomColor: !hasErrorMessage ? semanticColors.inputFocusBorderAlt : semanticColors.errorText,
                selectors: (_c = {},
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        borderBottomWidth: 2,
                        borderBottomColor: 'Highlight'
                    },
                    _c)
            }
        ],
        fieldGroup: [
            classNames.fieldGroup,
            _Styling__WEBPACK_IMPORTED_MODULE_0__["normalize"],
            {
                border: "1px solid " + semanticColors.inputBorder,
                background: semanticColors.inputBackground,
                cursor: 'text',
                height: 32,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                position: 'relative',
                selectors: {
                    ':hover': {
                        selectors: (_d = {},
                            _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                borderColor: 'Highlight'
                            },
                            _d)
                    }
                }
            },
            multiline && {
                minHeight: '60px',
                height: 'auto',
                display: 'flex'
            },
            borderless && {
                border: 'none'
            },
            !focused &&
                !disabled && {
                selectors: {
                    ':hover': {
                        borderColor: semanticColors.inputBorderHovered
                    }
                }
            },
            focused && {
                borderColor: semanticColors.inputFocusBorderAlt,
                selectors: (_e = {},
                    _e[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        borderWidth: 2,
                        borderColor: 'Highlight'
                    },
                    _e)
            },
            disabled && {
                backgroundColor: semanticColors.disabledBackground,
                borderColor: semanticColors.disabledBackground,
                cursor: 'default'
            },
            underlined && {
                flex: '1 1 0px',
                border: 'none',
                textAlign: 'left'
            },
            underlined &&
                focused && {
                selectors: (_f = {},
                    _f[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        height: 31 // -1px to prevent jumpiness in HC with the increased border-width to 2px
                    },
                    _f)
            },
            underlined &&
                disabled && {
                backgroundColor: 'transparent'
            },
            hasErrorMessage && {
                borderColor: semanticColors.errorText,
                selectors: {
                    '&:focus, &:hover': {
                        borderColor: semanticColors.errorText
                    }
                }
            },
            hasErrorMessage &&
                focused && {
                borderColor: semanticColors.errorText
            },
            !hasLabel &&
                required && {
                selectors: (_g = {
                        ':after': {
                            content: "'*'",
                            color: semanticColors.errorText,
                            position: 'absolute',
                            top: -5,
                            right: -10
                        }
                    },
                    _g[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        selectors: {
                            ':after': {
                                right: -14 // moving the * 4 pixel to right to alleviate border clipping in HC mode.
                            }
                        }
                    },
                    _g)
            }
        ],
        field: [
            theme.fonts.medium,
            classNames.field,
            _Styling__WEBPACK_IMPORTED_MODULE_0__["normalize"],
            {
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].medium,
                borderRadius: 0,
                border: 'none',
                background: 'none',
                backgroundColor: 'transparent',
                color: semanticColors.inputText,
                padding: '0 12px',
                width: '100%',
                minWidth: 0,
                textOverflow: 'ellipsis',
                outline: 0,
                selectors: {
                    '&:active, &:focus, &:hover': { outline: 0 },
                    '::-ms-clear': {
                        display: 'none'
                    }
                }
            },
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getPlaceholderStyles"])(placeholderStyles),
            multiline &&
                !resizable && [
                classNames.unresizable,
                {
                    resize: 'none'
                }
            ],
            multiline && {
                minHeight: 'inherit',
                lineHeight: 17,
                flexGrow: 1,
                paddingTop: 6,
                overflow: 'auto',
                width: '100%'
            },
            multiline &&
                autoAdjustHeight && {
                overflow: 'hidden'
            },
            hasIcon && {
                paddingRight: 24
            },
            multiline &&
                hasIcon && {
                paddingRight: 40
            },
            disabled && [
                {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    color: semanticColors.disabledText
                },
                Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getPlaceholderStyles"])(disabledPlaceholderStyles)
            ],
            underlined && {
                textAlign: 'left'
            },
            focused &&
                !borderless && {
                selectors: (_h = {},
                    _h[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        paddingLeft: 11,
                        paddingRight: 11
                    },
                    _h)
            },
            focused &&
                multiline &&
                !borderless && {
                selectors: (_j = {},
                    _j[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        paddingTop: 4 // take into consideration the 2px increased border-width (not when borderless).
                    },
                    _j)
            },
            inputClassName
        ],
        icon: [
            multiline && {
                paddingRight: 24,
                paddingBottom: 8,
                alignItems: 'flex-end'
            },
            {
                pointerEvents: 'none',
                position: 'absolute',
                bottom: 5,
                right: 8,
                top: 'auto',
                fontSize: 16,
                lineHeight: 18
            },
            disabled && {
                color: semanticColors.disabledText
            },
            iconClass
        ],
        description: [
            classNames.description,
            {
                color: semanticColors.bodySubtext,
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].xSmall
            }
        ],
        errorMessage: [
            classNames.errorMessage,
            _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"].slideDownIn20,
            theme.fonts.small,
            {
                color: semanticColors.errorText,
                margin: 0,
                paddingTop: 5,
                display: 'flex',
                alignItems: 'center'
            }
        ],
        prefix: [classNames.prefix, fieldPrefixSuffix],
        suffix: [classNames.suffix, fieldPrefixSuffix],
        subComponentStyles: {
            label: getLabelStyles(props)
        }
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}
//# sourceMappingURL=TextField.styles.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/components/TextField/index.js":
/*!********************************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/components/TextField/index.js ***!
  \********************************************************************************/
/*! exports provided: TextField, TextFieldBase, DEFAULT_MASK_CHAR, MaskedTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField */ "../node_modules/office-ui-fabric-react/lib/components/TextField/TextField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _TextField__WEBPACK_IMPORTED_MODULE_0__["TextField"]; });

/* harmony import */ var _TextField_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextField.base */ "../node_modules/office-ui-fabric-react/lib/components/TextField/TextField.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextFieldBase", function() { return _TextField_base__WEBPACK_IMPORTED_MODULE_1__["TextFieldBase"]; });

/* harmony import */ var _MaskedTextField_MaskedTextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaskedTextField/MaskedTextField */ "../node_modules/office-ui-fabric-react/lib/components/TextField/MaskedTextField/MaskedTextField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MASK_CHAR", function() { return _MaskedTextField_MaskedTextField__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_MASK_CHAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedTextField", function() { return _MaskedTextField_MaskedTextField__WEBPACK_IMPORTED_MODULE_2__["MaskedTextField"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/office-ui-fabric-react/lib/version.js":
/*!*************************************************************!*\
  !*** ../node_modules/office-ui-fabric-react/lib/version.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/set-version */ "../node_modules/@uifabric/set-version/lib/index.js");
// office-ui-fabric-react@6.214.0
// Do not modify this file, the file is generated as part of publish. The checked in version is a placeholder only.

Object(_uifabric_set_version__WEBPACK_IMPORTED_MODULE_0__["setVersion"])('office-ui-fabric-react', '6.214.0');
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!************************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function bytesToUuid(buf, offset_) {
  var offset = offset_ || 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  return (byteToHex[buf[offset + 0]] + byteToHex[buf[offset + 1]] + byteToHex[buf[offset + 2]] + byteToHex[buf[offset + 3]] + '-' + byteToHex[buf[offset + 4]] + byteToHex[buf[offset + 5]] + '-' + byteToHex[buf[offset + 6]] + byteToHex[buf[offset + 7]] + '-' + byteToHex[buf[offset + 8]] + byteToHex[buf[offset + 9]] + '-' + byteToHex[buf[offset + 10]] + byteToHex[buf[offset + 11]] + byteToHex[buf[offset + 12]] + byteToHex[buf[offset + 13]] + byteToHex[buf[offset + 14]] + byteToHex[buf[offset + 15]]).toLowerCase();
}

/* harmony default export */ __webpack_exports__["default"] = (bytesToUuid);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/index.js":
/*!******************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/index.js ***!
  \******************************************************/
/*! exports provided: v1, v3, v4, v5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "../node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "../node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "../node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "../node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/md5.js":
/*!****************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/md5.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/rng.js":
/*!****************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/rng.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/sha1.js":
/*!*****************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/sha1.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/v1.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/v1.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "../node_modules/uuid/dist/esm-browser/bytesToUuid.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/v3.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/v3.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "../node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/v35.js":
/*!****************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/v35.js ***!
  \****************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToUuid.js */ "../node_modules/uuid/dist/esm-browser/bytesToUuid.js");


function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
    bytes.push(parseInt(hex, 16));
  });
  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = uuidToBytes(namespace);
    }

    if (!Array.isArray(value)) {
      throw TypeError('value must be an array of bytes');
    }

    if (!Array.isArray(namespace) || namespace.length !== 16) {
      throw TypeError('namespace must be uuid string or an Array of 16 byte values');
    } // Per 4.3


    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/v4.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/v4.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "../node_modules/uuid/dist/esm-browser/bytesToUuid.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/v5.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/v5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "../node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../node_modules/whatwg-fetch/fetch.js":
/*!*********************************************!*\
  !*** ../node_modules/whatwg-fetch/fetch.js ***!
  \*********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var global = (function(self) {
  return self
  // eslint-disable-next-line no-invalid-this
})(typeof self !== 'undefined' ? self : undefined)
var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : ''
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException

if (typeof DOMException !== 'function') {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ }),

/***/ "./src/Constants.ts":
/*!**************************!*\
  !*** ./src/Constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.localStorageKeyCode = 'ExcelJupyterCode';
    Constants.localStorageKeyConnectionUrl = "ExcelJupyterUrl";
    Constants.localStorageKeyConnectionToken = "ExcelJupyterToken";
    Constants.localStorageKeyConnectionNotebookName = "ExcelJupyterNotebookName";
    Constants.localStorageKeyEmbedNotebookUrl = "ExcelJupyterEmbedNotebookUrl";
    Constants.jupyterInputPromptPrefixForApi = "{635FE197-E26B-407E-9C3C-C3C34DC3AFE0}|";
    Constants.jupyterInputPromptPrefixForRichApiRequest = Constants.jupyterInputPromptPrefixForApi + "RICHAPI|";
    Constants.jupyterInputPromptPrefixForOperationMethodRequest = Constants.jupyterInputPromptPrefixForApi + "OPERATIONMETHOD|";
    return Constants;
}());
exports.Constants = Constants;


/***/ }),

/***/ "./src/Utility.ts":
/*!************************!*\
  !*** ./src/Utility.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
var Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.isNullOrEmptyString = function (value) {
        if (typeof (value) === 'undefined') {
            return true;
        }
        if (value === null) {
            return true;
        }
        if (value.length === 0) {
            return true;
        }
        return false;
    };
    Utility.isNullOrUndefined = function (value) {
        if (typeof (value) === 'undefined') {
            return true;
        }
        if (value === null) {
            return true;
        }
        return false;
    };
    Utility.log = function (message) {
        var logger = window._logger;
        if (logger) {
            logger.log(message);
        }
        else {
            var divlog = document.getElementById("DivLog");
            if (divlog) {
                var div = document.createElement("div");
                div.appendChild(document.createTextNode(message));
                document.getElementById("DivLog").appendChild(div);
            }
            else {
                console.log(message);
            }
        }
    };
    Utility.logConsole = function (message) {
        var logger = window._logger;
        if (logger) {
            logger.logConsole(message);
        }
        else {
            console.log(message);
        }
    };
    Utility.logError = function (error) {
        var message;
        if (error instanceof Error) {
            message = error.name + ':' + error.message;
        }
        else if (typeof (error) === 'string') {
            message = error;
        }
        else {
            message = JSON.stringify(error);
        }
        var logger = window._logger;
        if (logger) {
            logger.logError(message);
        }
        else {
            console.error(message);
        }
    };
    Utility.getJupyterConnectionFromLocalStorageOrDefault = function () {
        var jupyterUrl = localStorage.getItem(Constants_1.Constants.localStorageKeyConnectionUrl);
        var jupyterToken = localStorage.getItem(Constants_1.Constants.localStorageKeyConnectionToken);
        var jupyterNotebookName = localStorage.getItem(Constants_1.Constants.localStorageKeyConnectionNotebookName);
        if (Utility.isNullOrEmptyString(jupyterUrl)) {
            jupyterUrl = 'http://localhost:8888';
            jupyterToken = 'exceljupyter';
            jupyterNotebookName = 'HelloWorld.ipynb';
        }
        return {
            url: jupyterUrl,
            token: jupyterToken,
            notebookName: jupyterNotebookName
        };
    };
    Utility.appendQueryString = function (url, queryStrings) {
        var query = '';
        for (var key in queryStrings) {
            if (query.length > 0) {
                query = query + '&';
            }
            query = query + encodeURIComponent(key) + '=' + encodeURIComponent(queryStrings[key]);
        }
        if (query.length === 0) {
            return url;
        }
        var index = url.indexOf('?');
        if (index < 0) {
            url = url + '?';
        }
        else {
            url = url + '&';
        }
        url = url + query;
        return url;
    };
    return Utility;
}());
exports.Utility = Utility;


/***/ }),

/***/ "./src/WebServiceCustomFunctionInvoker.ts":
/*!************************************************!*\
  !*** ./src/WebServiceCustomFunctionInvoker.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCustomFunctionInvoker = void 0;
/// <reference path="./references/customfunctions.d.ts" />
__webpack_require__(/*! whatwg-fetch */ "../node_modules/whatwg-fetch/fetch.js");
var Utility_1 = __webpack_require__(/*! ./Utility */ "./src/Utility.ts");
var WebServiceCustomFunctionInvoker = /** @class */ (function () {
    function WebServiceCustomFunctionInvoker() {
    }
    WebServiceCustomFunctionInvoker.prototype.invoke = function (functionName, parameters, context) {
        var _this = this;
        var payload = {
            id: functionName,
            parameters: parameters
        };
        var url = "/functions?invoke=" + encodeURIComponent(JSON.stringify(payload));
        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify(payload)
        // })
        fetch(url)
            .then(function (response) {
            return response.json();
        })
            .then(function (invokeResult) {
            if (invokeResult.error) {
                context.setError(CustomFunctions.ErrorCode.unknown);
            }
            else {
                if (typeof (invokeResult.result) === "object") {
                    if (invokeResult.result.mimeType === "image/png") {
                        context.setResult("#IMAGE");
                        var address_1 = context.address;
                        setTimeout(function () {
                            _this.setImage(address_1, invokeResult.result.data);
                        }, 0);
                    }
                    else {
                        context.setError(CustomFunctions.ErrorCode.unknown);
                    }
                }
                else {
                    context.setResult(invokeResult.result);
                }
            }
        })
            .catch(function (ex) {
            context.setError(CustomFunctions.ErrorCode.notAvailable, JSON.stringify(ex));
        });
    };
    WebServiceCustomFunctionInvoker.prototype.setImage = function (fullAddress, base64) {
        var _this = this;
        Excel.run(function (context) { return __awaiter(_this, void 0, void 0, function () {
            var worksheet, range, index, sheetName, address, shapes, i, shape;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (fullAddress) {
                            index = fullAddress.indexOf('!');
                            sheetName = fullAddress.substring(0, index);
                            address = fullAddress.substring(index + 1);
                            worksheet = context.workbook.worksheets.getItem(sheetName);
                            range = worksheet.getRange(address);
                        }
                        else {
                            worksheet = context.workbook.worksheets.getActiveWorksheet();
                            range = worksheet.getRange("A1");
                        }
                        shapes = worksheet.shapes.load();
                        return [4 /*yield*/, context.sync()];
                    case 1:
                        _a.sent();
                        for (i = 0; i < shapes.items.length; i++) {
                            shapes.items[i].delete();
                        }
                        range.load("top, left");
                        return [4 /*yield*/, context.sync()];
                    case 2:
                        _a.sent();
                        shape = shapes.addImage(base64);
                        shape.left = range.left + 10;
                        shape.top = range.top + 10;
                        return [4 /*yield*/, context.sync()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return WebServiceCustomFunctionInvoker;
}());
function initCustomFunctionInvoker() {
    if (typeof (CustomFunctions) === 'object' && CustomFunctions.setCustomFunctionInvoker) {
        Utility_1.Utility.log("setCustomFunctionInvoker");
        CustomFunctions.setCustomFunctionInvoker(new WebServiceCustomFunctionInvoker());
    }
}
exports.initCustomFunctionInvoker = initCustomFunctionInvoker;


/***/ }),

/***/ "./src/WebServiceCustomFunctionUtility.ts":
/*!************************************************!*\
  !*** ./src/WebServiceCustomFunctionUtility.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebServiceCustomFunctionUtility = void 0;
/// <reference path="references/office.d.ts" />
var Utility_1 = __webpack_require__(/*! ./Utility */ "./src/Utility.ts");
var WebServiceCustomFunctionUtility = /** @class */ (function () {
    function WebServiceCustomFunctionUtility() {
    }
    WebServiceCustomFunctionUtility.fetchFunctionsMetadata = function () {
        return fetch('/functions')
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Invalid response, status = " + response.status);
            }
            var contentType = response.headers.get('content-type');
            if (!contentType || contentType.indexOf('application/json') < 0) {
                throw new Error("Invalid response, contentType= " + contentType);
            }
            return response.text();
        })
            .then(function (metadata) {
            var metadataObj = JSON.parse(metadata);
            var normalizedMetadata = JSON.stringify(metadataObj);
            return normalizedMetadata;
        })
            .catch(function (ex) {
            Utility_1.Utility.logError(ex);
            throw ex;
        });
    };
    WebServiceCustomFunctionUtility.registerFunctions = function (metadata) {
        if (typeof (Excel) !== 'undefined' && Excel.CustomFunctionManager) {
            return Excel.CustomFunctionManager.register(metadata, "");
        }
        else {
            return Promise.resolve();
        }
    };
    return WebServiceCustomFunctionUtility;
}());
exports.WebServiceCustomFunctionUtility = WebServiceCustomFunctionUtility;


/***/ }),

/***/ "./src/components/CustomFunctionPane.tsx":
/*!***********************************************!*\
  !*** ./src/components/CustomFunctionPane.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../references/office.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFunctionPane = void 0;
var React = __webpack_require__(/*! react */ "react");
var uuid_1 = __webpack_require__(/*! uuid */ "../node_modules/uuid/dist/esm-browser/index.js");
var Utility_1 = __webpack_require__(/*! ../Utility */ "./src/Utility.ts");
var WebServiceCustomFunctionUtility_1 = __webpack_require__(/*! ../WebServiceCustomFunctionUtility */ "./src/WebServiceCustomFunctionUtility.ts");
var CustomFunctionTestPane_1 = __webpack_require__(/*! ./CustomFunctionTestPane */ "./src/components/CustomFunctionTestPane.tsx");
var CustomFunctionPane = /** @class */ (function (_super) {
    __extends(CustomFunctionPane, _super);
    function CustomFunctionPane(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            functions: []
        };
        return _this;
    }
    CustomFunctionPane.prototype.componentDidMount = function () {
        var _this = this;
        var savedMetadata = null;
        var officeOnReady = false;
        WebServiceCustomFunctionUtility_1.WebServiceCustomFunctionUtility.fetchFunctionsMetadata()
            .then(function (metadata) {
            savedMetadata = metadata;
            var metadataObj = JSON.parse(metadata);
            var functions = metadataObj.functions || [];
            _this.setState({ functions: functions });
            Office.onReady(function () {
                Utility_1.Utility.log("Register " + metadata);
                officeOnReady = true;
                return WebServiceCustomFunctionUtility_1.WebServiceCustomFunctionUtility.registerFunctions(metadata);
            });
        });
        window.setInterval(function () {
            WebServiceCustomFunctionUtility_1.WebServiceCustomFunctionUtility.fetchFunctionsMetadata()
                .then(function (metadata) {
                if (savedMetadata != metadata) {
                    savedMetadata = metadata;
                    var metadataObj = JSON.parse(metadata);
                    var functions = metadataObj.functions || [];
                    _this.setState({ functions: functions });
                    if (officeOnReady) {
                        Utility_1.Utility.log("Register " + metadata);
                        return WebServiceCustomFunctionUtility_1.WebServiceCustomFunctionUtility.registerFunctions(metadata);
                    }
                }
            });
        }, 30000);
    };
    CustomFunctionPane.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("button", { onClick: function () { return _this.generateManifestButtonClick(); } }, "Generate Manifest"),
                React.createElement("button", { onClick: function () { return _this.registerButtonClick(); } }, "Register Functions With Excel"),
                React.createElement("div", null, "Functions"),
                this.state.functions.map(function (func) {
                    return (React.createElement(CustomFunctionTestPane_1.CustomFunctionTestPane, { key: func.id, func: func, onReceiveImage: function (image) { return _this.onReceiveImage(image); } }));
                })),
            React.createElement("div", null, this.state.image && React.createElement("img", { src: "data:image/png;base64," + this.state.image })),
            React.createElement("div", null, "Test Sections:"),
            React.createElement("div", null,
                React.createElement("button", { onClick: function () { return _this.refreshButtonClick(); } }, "Refresh"),
                React.createElement("button", { onClick: function () { return _this.testPostButtonClick(); } }, "Test Post"),
                React.createElement("button", { onClick: function () { return _this.testGetButtonClick(); } }, "Test Get"),
                React.createElement("div", null, this.state.manifest))));
    };
    CustomFunctionPane.prototype.onReceiveImage = function (image) {
        this.setState({ image: image });
    };
    CustomFunctionPane.prototype.refreshButtonClick = function () {
        window.location.reload();
    };
    CustomFunctionPane.prototype.testGetButtonClick = function () {
        var url = "/functions";
        fetch(url)
            .then(function (response) {
            return response.text();
        })
            .then(function (responseText) {
            Utility_1.Utility.log(responseText);
        })
            .catch(function (ex) {
            Utility_1.Utility.logError(ex);
        });
    };
    CustomFunctionPane.prototype.testPostButtonClick = function () {
        var url = "/functions";
        var payload = {
            id: "myadd",
            parameters: [3, 4]
        };
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(function (response) {
            return response.text();
        })
            .then(function (responseText) {
            Utility_1.Utility.log(responseText);
        })
            .catch(function (ex) {
            Utility_1.Utility.logError(ex);
        });
    };
    CustomFunctionPane.prototype.registerButtonClick = function () {
        WebServiceCustomFunctionUtility_1.WebServiceCustomFunctionUtility.fetchFunctionsMetadata()
            .then(function (metadata) {
            return WebServiceCustomFunctionUtility_1.WebServiceCustomFunctionUtility.registerFunctions(metadata);
        })
            .catch(function (ex) {
            Utility_1.Utility.logError(ex);
        });
    };
    CustomFunctionPane.prototype.generateManifestButtonClick = function () {
        var hostUrl = window.location.protocol + "//" + window.location.host;
        var addinId = uuid_1.v4();
        if (window.localStorage) {
            var key = 'ExcelJupyter.AddinId';
            addinId = window.localStorage.getItem(key);
            if (!addinId) {
                addinId = uuid_1.v4();
                window.localStorage.setItem(key, addinId);
            }
        }
        var manifestFormat = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<OfficeApp xmlns=\"http://schemas.microsoft.com/office/appforoffice/1.1\"\n xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n xmlns:bt=\"http://schemas.microsoft.com/office/officeappbasictypes/1.0\"\n xmlns:ov=\"http://schemas.microsoft.com/office/taskpaneappversionoverrides\"\n xsi:type=\"TaskPaneApp\">\n\t<Id>" + addinId + "</Id>\n\t<Version>1.0.0.0</Version>\n\t<ProviderName>Microsoft Office Platform Team</ProviderName>\n\t<DefaultLocale>en-US</DefaultLocale>\n\t<DisplayName DefaultValue=\"Python\" />\n\t<Description DefaultValue=\"Python\" />\n\t<IconUrl DefaultValue=\"https://exceljupyter.azurewebsites.net/agave/images/Button32x32.png\" />\n\t<SupportUrl DefaultValue=\"https://www.microsoft.com\" />\n\t<Hosts>\n\t\t<Host Name=\"Workbook\" />\n\t</Hosts>\n\t<DefaultSettings>\n\t\t<SourceLocation DefaultValue=\"" + hostUrl + "/functions.html\"/>\n\t</DefaultSettings>\n\t<Permissions>ReadWriteDocument</Permissions>\n\t<VersionOverrides xmlns=\"http://schemas.microsoft.com/office/taskpaneappversionoverrides\" xsi:type=\"VersionOverridesV1_0\">\n\t\t<Hosts>\n\t\t\t<Host xsi:type=\"Workbook\">\n        \t\t<Runtimes>\n          \t\t\t<Runtime resid=\"OEP.SharedRuntime.Url\" lifetime=\"long\" />\n        \t\t</Runtimes>\n\t\t\t\t<AllFormFactors>\n\t\t\t\t\t<ExtensionPoint xsi:type=\"CustomFunctions\">\n\t\t\t\t\t\t<Script>\n\t\t\t\t\t\t\t<SourceLocation resid=\"OEP.UDF.Js\" />\n\t\t\t\t\t\t</Script>\n\t\t\t\t\t\t<Page>\n\t\t\t\t\t\t\t<SourceLocation resid=\"OEP.SharedRuntime.Url\"/>\n\t\t\t\t\t\t</Page>\n\t\t\t\t\t\t<Metadata>\n\t\t\t\t\t\t\t<SourceLocation resid=\"OEP.UDF.Json\" />\n\t\t\t\t\t\t</Metadata>\n\t\t\t\t\t\t<Namespace resid=\"OEP.UDF.Namespace\" />\n\t\t\t\t\t</ExtensionPoint>\n\t\t\t\t</AllFormFactors>\n\t\t\t\t<DesktopFormFactor>\n\t\t\t\t  \t<!--\"This code enables a customizable message to be displayed when the add-in is loaded successfully upon individual install.\"-->\n\t\t\t\t  \t<GetStarted>\n\t\t\t\t\t\t<!-- Title of the Getting Started callout. resid points to a ShortString resource -->\n\t\t\t\t\t\t<Title resid=\"OEP.GetStarted.Title\"/>\n\n\t\t\t\t\t\t<!-- Description of the Getting Started callout. resid points to a LongString resource -->\n\t\t\t\t\t\t<Description resid=\"OEP.GetStarted.Description\"/>\n\n\t\t\t\t\t\t<!-- Point to a url resource which details how the add-in should be used. -->\n\t\t\t\t\t\t<LearnMoreUrl resid=\"OEP.GetStarted.LearnMoreUrl\"/>\n\t\t\t\t  \t</GetStarted>\n\n\t\t  \t\t\t<!-- Function file is a HTML page that includes the JavaScript where functions for ExecuteAction will be called. \n\t\t\t\t\t\tThink of the FunctionFile as the code behind ExecuteFunction. -->\n\t\t  \t\t\t<FunctionFile resid=\"OEP.SharedRuntime.Url\" />\n\n\t\t\t\t  \t<!-- PrimaryCommandSurface is the main Office Ribbon. -->\n\t\t\t\t  \t<ExtensionPoint xsi:type=\"PrimaryCommandSurface\">\n\t\t\t\t\t\t<!-- Use OfficeTab to extend an existing Tab. Use CustomTab to create a new tab. -->\n\t\t\t\t\t\t<CustomTab id=\"OEP.TabJupyter\">\n\t\t\t\t\t\t\t<!-- Ensure you provide a unique id for the group. Recommendation for any IDs is to namespace using your company name. -->\n\t\t\t\t\t\t\t<Group id=\"OEP.Group1\">\n\t\t\t\t\t\t\t\t<!-- Label for your group. resid must point to a ShortString resource. -->\n\t\t\t\t\t\t\t\t<Label resid=\"OEP.Group1Label\" />\n\t\t\t\t\t\t\t\t<!-- Icons. Required sizes 16,32,80, optional 20, 24, 40, 48, 64. Strongly recommended to provide all sizes for great UX. -->\n\t\t\t\t\t\t\t\t<!-- Use PNG icons. All URLs on the resources section must use HTTPS. -->\n\t\t\t\t\t\t\t\t<Icon>\n\t\t\t\t\t\t\t\t\t<bt:Image size=\"16\" resid=\"OEP.tpicon_16x16\" />\n\t\t\t\t\t\t\t\t\t<bt:Image size=\"32\" resid=\"OEP.tpicon_32x32\" />\n\t\t\t\t\t\t\t\t\t<bt:Image size=\"80\" resid=\"OEP.tpicon_80x80\" />\n\t\t\t\t\t\t\t\t</Icon>\n\t\t\t\t\t\t\t\t<!-- Control. It can be of type \"Button\" or \"Menu\". -->\n\t\t\t\t\t\t\t\t<Control xsi:type=\"Button\" id=\"OEP.TaskpaneButton\">\n\t\t\t\t\t\t\t\t\t<Label resid=\"OEP.TaskpaneButton.Label\" />\n\t\t\t\t\t\t\t\t\t<Supertip>\n\t\t\t\t\t\t\t\t\t\t<!-- ToolTip title. resid must point to a ShortString resource. -->\n\t\t\t\t\t\t\t\t\t\t<Title resid=\"OEP.TaskpaneButton.Label\" />\n\t\t\t\t\t\t\t\t\t\t<!-- ToolTip description. resid must point to a LongString resource. -->\n\t\t\t\t\t\t\t\t\t\t<Description resid=\"OEP.TaskpaneButton.Tooltip\" />\n\t\t\t\t\t\t\t\t\t</Supertip>\n\t\t\t\t\t\t\t\t\t<Icon>\n\t\t\t\t\t\t\t\t\t\t<bt:Image size=\"16\" resid=\"OEP.tpicon_16x16\" />\n\t\t\t\t\t\t\t\t\t\t<bt:Image size=\"32\" resid=\"OEP.tpicon_32x32\" />\n\t\t\t\t\t\t\t\t\t\t<bt:Image size=\"80\" resid=\"OEP.tpicon_80x80\" />\n\t\t\t\t\t\t\t\t\t</Icon>\n\n\t\t\t\t\t\t\t\t\t<!-- This is what happens when the command is triggered (E.g. click on the Ribbon). Supported actions are ExecuteFunction or ShowTaskpane. -->\n\t\t\t\t\t\t\t\t\t<Action xsi:type=\"ShowTaskpane\">\n\t\t\t\t\t\t\t\t\t\t<TaskpaneId>CodeEditor</TaskpaneId>\n\t\t\t\t\t\t\t\t\t\t<!-- Provide a url resource id for the location that will be displayed on the task pane. -->\n\t\t\t\t\t\t\t\t\t\t<SourceLocation resid=\"OEP.SharedRuntime.Url\" />\n\t\t\t\t\t\t\t\t\t</Action>\n\t\t\t\t\t\t\t\t</Control>\n\t\t\t\t\t\t\t</Group>\n\t\t\t\t\t\t\t<Label resid=\"OEP.JupyterTab.Label\" />\n\t\t\t\t\t\t</CustomTab>\n\t\t\t\t  </ExtensionPoint>\n\t\t\t\t</DesktopFormFactor>\n\t\t\t</Host>\n\t\t</Hosts>\n\t\t<Resources>\n\t\t\t<bt:Images>\n\t\t\t\t<bt:Image id=\"OEP.tpicon_16x16\" DefaultValue=\"https://exceljupyter.azurewebsites.net/agave/images/Button16x16.png\" />\n\t\t\t\t<bt:Image id=\"OEP.tpicon_32x32\" DefaultValue=\"https://exceljupyter.azurewebsites.net/agave/images/Button32x32.png\" />\n\t\t\t\t<bt:Image id=\"OEP.tpicon_80x80\" DefaultValue=\"https://exceljupyter.azurewebsites.net/agave/images/Button80x80.png\" />\n\t\t\t</bt:Images>\n\t\t\t<bt:Urls>\n\t\t\t\t<bt:Url id=\"OEP.UDF.Json\" DefaultValue=\"https://exceljupyter.azurewebsites.net/agave/udf.json\" >\n\t\t\t\t</bt:Url>\n\t\t\t\t<bt:Url id=\"OEP.UDF.Js\" DefaultValue=\"https://exceljupyter.azurewebsites.net/agave/udf.js\" >\n\t\t\t\t</bt:Url>\n\t\t\t\t<bt:Url id=\"OEP.SharedRuntime.Url\" DefaultValue=\"" + hostUrl + "/functions.html\" />\n\t\t\t\t<bt:Url id=\"OEP.GetStarted.LearnMoreUrl\" DefaultValue=\"https://go.microsoft.com/fwlink/?LinkId=276812\" />\n\t\t\t</bt:Urls>\n\t\t\t<bt:ShortStrings>\n\t\t\t\t<bt:String id=\"OEP.UDF.Namespace\" DefaultValue=\"PYTHON\" />\n\t\t\t\t<bt:String id=\"OEP.TaskpaneButton.Label\" DefaultValue=\"Show Taskpane\" />\n\t\t\t\t<bt:String id=\"OEP.Group1Label\" DefaultValue=\"Python\" />\n\t\t\t\t<bt:String id=\"OEP.GetStarted.Title\" DefaultValue=\"Python\" />\n\t  \t\t\t<bt:String id=\"OEP.JupyterTab.Label\" DefaultValue=\"Python\" />\n\t\t\t\t<bt:String id=\"OEP.RegisterButton.Label\" DefaultValue=\"Register\" />\n\t\t\t</bt:ShortStrings>\n\t\t\t<bt:LongStrings>\n\t\t\t\t<bt:String id=\"OEP.TaskpaneButton.Tooltip\" DefaultValue=\"Click to show Python\" />\n\t\t\t\t<bt:String id=\"OEP.ConnectButton.Tooltip\" DefaultValue=\"Connect to a Python\" />\n\t\t\t\t<bt:String id=\"OEP.RegisterButton.Tooltip\" DefaultValue=\"Register Custom Functions\" />\n\t\t\t\t<bt:String id=\"OEP.GetStarted.Description\" DefaultValue=\"Your add-in loaded succesfully. Go to the Python tab and click the 'Show Python' button to get started.\" />\n\t\t\t</bt:LongStrings>\n\t\t</Resources>\n\t</VersionOverrides>\n</OfficeApp>\n";
        this.setState({
            manifest: manifestFormat
        });
        this.downloadToFile(manifestFormat, addinId + ".xml");
    };
    CustomFunctionPane.prototype.downloadToFile = function (content, filename) {
        var a = document.createElement('a');
        var file = new Blob([content], { type: "text/xml" });
        a.href = URL.createObjectURL(file);
        a.download = filename;
        a.click();
        URL.revokeObjectURL(a.href);
    };
    return CustomFunctionPane;
}(React.Component));
exports.CustomFunctionPane = CustomFunctionPane;


/***/ }),

/***/ "./src/components/CustomFunctionTestPane.tsx":
/*!***************************************************!*\
  !*** ./src/components/CustomFunctionTestPane.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../references/customfunctions.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFunctionTestPane = void 0;
var React = __webpack_require__(/*! react */ "react");
var TextField_1 = __webpack_require__(/*! office-ui-fabric-react/lib/TextField */ "../node_modules/office-ui-fabric-react/lib/TextField.js");
var Utility_1 = __webpack_require__(/*! ../Utility */ "./src/Utility.ts");
var CustomFunctionTestPane = /** @class */ (function (_super) {
    __extends(CustomFunctionTestPane, _super);
    function CustomFunctionTestPane(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            parameters: ""
        };
        return _this;
    }
    CustomFunctionTestPane.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("span", null,
                    this.props.func.name,
                    " (",
                    this.props.func.parameters && this.props.func.parameters.map(function (par, index) {
                        return (index > 0 ? "," : "") + " " + par.name;
                    }),
                    ")")),
            React.createElement("div", null,
                React.createElement(TextField_1.TextField, { prefix: "=PYTHON." + this.props.func.name + "(", suffix: ")", onChange: function (evt, value) { return _this.onParametersTextChanged(value); }, value: this.state.parameters, onKeyUp: function (evt) { return _this.onKeyUp(evt); } }))));
    };
    CustomFunctionTestPane.prototype.onParametersTextChanged = function (value) {
        this.setState({ parameters: value });
    };
    CustomFunctionTestPane.prototype.onKeyUp = function (evt) {
        if (evt.keyCode == 13) {
            this.onInvokeButtonClick();
        }
    };
    CustomFunctionTestPane.prototype.onInvokeButtonClick = function () {
        var _this = this;
        var payload = {
            id: this.props.func.id,
            parameters: JSON.parse("[" + this.state.parameters + "]")
        };
        var url = "/functions?invoke=" + encodeURIComponent(JSON.stringify(payload));
        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify(payload)
        // })
        fetch(url)
            .then(function (response) {
            return response.text();
        })
            .then(function (text) {
            Utility_1.Utility.log(text);
            var invokeResult = JSON.parse(text);
            if (typeof (invokeResult.result) === 'object' && invokeResult.result.mimeType === "image/png") {
                if (_this.props.onReceiveImage) {
                    _this.props.onReceiveImage(invokeResult.result.data);
                }
            }
        });
    };
    return CustomFunctionTestPane;
}(React.Component));
exports.CustomFunctionTestPane = CustomFunctionTestPane;


/***/ }),

/***/ "./src/index-custom-function-forwarder.tsx":
/*!*************************************************!*\
  !*** ./src/index-custom-function-forwarder.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./references/customfunctions.d.ts" />
/// <reference path="./references/office.d.ts" />
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var Icons_1 = __webpack_require__(/*! office-ui-fabric-react/lib/Icons */ "../node_modules/office-ui-fabric-react/lib/Icons.js");
var WebServiceCustomFunctionInvoker_1 = __webpack_require__(/*! ./WebServiceCustomFunctionInvoker */ "./src/WebServiceCustomFunctionInvoker.ts");
var CustomFunctionPane_1 = __webpack_require__(/*! ./components/CustomFunctionPane */ "./src/components/CustomFunctionPane.tsx");
if (CustomFunctions) {
    CustomFunctions.delayInitialization();
}
Icons_1.initializeIcons( /* optional base url */);
Office.onReady(function () {
    console.log("Office.onReady");
    WebServiceCustomFunctionInvoker_1.initCustomFunctionInvoker();
});
window.addEventListener('load', function () {
    if (document.getElementById('DivApp')) {
        ReactDOM.render(React.createElement(CustomFunctionPane_1.CustomFunctionPane, null), document.getElementById("DivApp"));
    }
});


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=custom-function-forwarder.bundle.js.map