webpackHotUpdate_N_E("pages/posts/calendar",{

/***/ "./pages/posts/calendar.js":
/*!*********************************!*\
  !*** ./pages/posts/calendar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");






var _jsxFileName = "C:\\Users\\sambr\\Blockchain@IU\\blogchain\\pages\\posts\\calendar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var localizer = Object(react_big_calendar__WEBPACK_IMPORTED_MODULE_8__["momentLocalizer"])(moment__WEBPACK_IMPORTED_MODULE_9___default.a);

function Event(_ref) {
  var event = _ref.event;

  var popoverClickRootClose = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Popover"], {
    id: "popover-trigger-click-root-close",
    style: {
      zIndex: 10000,
      backgroundColor: "#FFFFFF",
      marginBottom: 10,
      padding: 5,
      border: "1px solid black",
      borderRadius: 12
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, event.title), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, event.description));

  console.log(event);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["OverlayTrigger"], {
    id: "help",
    trigger: "click",
    rootClose: true,
    container: this,
    placement: "top",
    overlay: popoverClickRootClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, event.image, "  ", event.title))));
}

_c = Event;

var BigCalendar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(BigCalendar, _Component);

  var _super = _createSuper(BigCalendar);

  function BigCalendar() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BigCalendar);

    _this = _super.call(this);
    var now = new Date();
    var events = [{
      id: 1,
      title: 'Today',
      start: now,
      end: now,
      description: 'The date is: ' + (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear(),
      image: __jsx("img", {
        src: "/favicon.png",
        style: {
          width: 30,
          height: 30,
          marginRight: 5
        },
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 18
        }
      })
    }, {
      id: 2,
      title: 'Blockchain 101',
      start: new Date(2020, 8, 15, 17, 0),
      end: new Date(2020, 8, 15, 18, 30),
      description: 'Introduction to Blockchain@IU and blockchain technology'
    }, {
      id: 3,
      title: 'Courses Begin',
      start: new Date(2020, 8, 21, 17, 0),
      end: new Date(2020, 8, 21, 18, 0),
      description: "Tenative start to our Business Applications and Development courses. Learn more about our courses on at Blockchain101 on September 15th!"
    }];
    _this.state = {
      name: 'React',
      events: events
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BigCalendar, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 7
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }
      }, "Back to Home")), __jsx("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 30,
          marginTop: 10,
          marginLeft: 40
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/favicon.png",
        style: {
          width: '5rem',
          heigh: '5rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }), __jsx("h2", {
        style: {
          textAlign: 'center',
          color: "#990000",
          marginLeft: 15
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }, "Blockchain@IU Calendar")), __jsx("div", {
        style: {
          height: '500pt',
          marginLeft: 40,
          marginRight: 40
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }
      }, __jsx(react_big_calendar__WEBPACK_IMPORTED_MODULE_8__["Calendar"], {
        events: this.state.events,
        startAccessor: "start",
        endAccessor: "end",
        defaultDate: moment__WEBPACK_IMPORTED_MODULE_9___default()().toDate(),
        localizer: localizer,
        components: {
          event: Event
        },
        eventPropGetter: function eventPropGetter(event) {
          return {
            style: {
              borderColor: "#990000"
            }
          };
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }
      })));
    }
  }]);

  return BigCalendar;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BigCalendar);

var _c;

$RefreshReg$(_c, "Event");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOlsibG9jYWxpemVyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50IiwiRXZlbnQiLCJldmVudCIsInBvcG92ZXJDbGlja1Jvb3RDbG9zZSIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaW1hZ2UiLCJCaWdDYWxlbmRhciIsIm5vdyIsIkRhdGUiLCJldmVudHMiLCJpZCIsInN0YXJ0IiwiZW5kIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0Iiwic3RhdGUiLCJuYW1lIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImhlaWdoIiwidGV4dEFsaWduIiwiY29sb3IiLCJ0b0RhdGUiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMEVBQWUsQ0FBQ0MsNkNBQUQsQ0FBakM7O0FBRUEsU0FBU0MsS0FBVCxPQUEwQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDeEIsTUFBSUMscUJBQXFCLEdBQ3ZCLE1BQUMsd0RBQUQ7QUFDRSxNQUFFLEVBQUMsa0NBREw7QUFFRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLEtBREg7QUFFTEMscUJBQWUsRUFBRSxTQUZaO0FBR0xDLGtCQUFZLEVBQUUsRUFIVDtBQUlMQyxhQUFPLEVBQUUsQ0FKSjtBQUtMQyxZQUFNLEVBQUUsaUJBTEg7QUFNTEMsa0JBQVksRUFBRTtBQU5ULEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU1AsS0FBSyxDQUFDUSxLQUFmLENBVk4sRUFXTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWE4sRUFZTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWk4sRUFhTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlSLEtBQUssQ0FBQ1MsV0FBVixDQWJOLENBREY7O0FBa0JBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQWdCLE1BQUUsRUFBQyxNQUFuQjtBQUEwQixXQUFPLEVBQUMsT0FBbEM7QUFBMEMsYUFBUyxNQUFuRDtBQUFvRCxhQUFTLEVBQUUsSUFBL0Q7QUFBcUUsYUFBUyxFQUFDLEtBQS9FO0FBQXFGLFdBQU8sRUFBRUMscUJBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFDVyxhQUFPLEVBQUUsTUFBVjtBQUFrQkMsbUJBQWEsRUFBRTtBQUFqQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2IsS0FBSyxDQUFDYyxLQURYLFFBQ29CZCxLQUFLLENBQUNRLEtBRDFCLENBREYsQ0FERixDQURGLENBREY7QUFXRDs7S0EvQlFULEs7O0lBaUNIZ0IsVzs7Ozs7QUFDSix5QkFBYztBQUFBOztBQUFBOztBQUNaO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBWjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxDQUNiO0FBQ0lDLFFBQUUsRUFBRSxDQURSO0FBRUlYLFdBQUssRUFBRSxPQUZYO0FBR0lZLFdBQUssRUFBRUosR0FIWDtBQUlJSyxTQUFHLEVBQUVMLEdBSlQ7QUFLSVAsaUJBQVcsRUFBRSxtQkFBbUJPLEdBQUcsQ0FBQ00sUUFBSixLQUFlLENBQWxDLElBQXVDLEdBQXZDLEdBQTZDTixHQUFHLENBQUNPLE9BQUosRUFBN0MsR0FBNkQsR0FBN0QsR0FBbUVQLEdBQUcsQ0FBQ1EsV0FBSixFQUxwRjtBQU1JVixXQUFLLEVBQUU7QUFBSyxXQUFHLEVBQUMsY0FBVDtBQUF3QixhQUFLLEVBQUU7QUFBQ1csZUFBSyxFQUFFLEVBQVI7QUFBWUMsZ0JBQU0sRUFBRSxFQUFwQjtBQUF3QkMscUJBQVcsRUFBRTtBQUFyQyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlgsS0FEYSxFQVNiO0FBQ0lSLFFBQUUsRUFBRSxDQURSO0FBRUlYLFdBQUssRUFBRSxnQkFGWDtBQUdJWSxXQUFLLEVBQUUsSUFBSUgsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLENBSFg7QUFJSUksU0FBRyxFQUFFLElBQUlKLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixFQUExQixDQUpUO0FBS0lSLGlCQUFXLEVBQUU7QUFMakIsS0FUYSxFQWdCYjtBQUNJVSxRQUFFLEVBQUUsQ0FEUjtBQUVJWCxXQUFLLEVBQUUsZUFGWDtBQUdJWSxXQUFLLEVBQUUsSUFBSUgsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLENBSFg7QUFJSUksU0FBRyxFQUFFLElBQUlKLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixDQUExQixDQUpUO0FBS0lSLGlCQUFXLEVBQUU7QUFMakIsS0FoQmEsQ0FBZjtBQXdCQSxVQUFLbUIsS0FBTCxHQUFhO0FBQ1hDLFVBQUksRUFBRSxPQURLO0FBRVhYLFlBQU0sRUFBTkE7QUFGVyxLQUFiO0FBM0JZO0FBK0JiOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxpREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLENBREYsRUFJRTtBQUFLLGFBQUssRUFBRTtBQUFFTixpQkFBTyxFQUFFLE1BQVg7QUFDRUMsdUJBQWEsRUFBRSxLQURqQjtBQUVFVCxzQkFBWSxFQUFFLEVBRmhCO0FBR0UwQixtQkFBUyxFQUFFLEVBSGI7QUFJRUMsb0JBQVUsRUFBRTtBQUpkLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtFO0FBQ0ksV0FBRyxFQUFDLGNBRFI7QUFFSSxhQUFLLEVBQUU7QUFBRU4sZUFBSyxFQUFFLE1BQVQ7QUFDRU8sZUFBSyxFQUFFO0FBRFQsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEYsRUFVRTtBQUFJLGFBQUssRUFBRTtBQUFDQyxtQkFBUyxFQUFFLFFBQVo7QUFDQ0MsZUFBSyxFQUFFLFNBRFI7QUFFQ0gsb0JBQVUsRUFBRTtBQUZiLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FWRixDQUpGLEVBb0JFO0FBQUssYUFBSyxFQUFFO0FBQUVMLGdCQUFNLEVBQUUsT0FBVjtBQUNFSyxvQkFBVSxFQUFFLEVBRGQ7QUFFRUoscUJBQVcsRUFBRTtBQUZmLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdFLE1BQUMsMkRBQUQ7QUFDRSxjQUFNLEVBQUUsS0FBS0MsS0FBTCxDQUFXVixNQURyQjtBQUVFLHFCQUFhLEVBQUMsT0FGaEI7QUFHRSxtQkFBVyxFQUFDLEtBSGQ7QUFJRSxtQkFBVyxFQUFFcEIsNkNBQU0sR0FBR3FDLE1BQVQsRUFKZjtBQUtFLGlCQUFTLEVBQUV2QyxTQUxiO0FBTUUsa0JBQVUsRUFBRTtBQUNWSSxlQUFLLEVBQUVEO0FBREcsU0FOZDtBQVNFLHVCQUFlLEVBQUUseUJBQUFDLEtBQUs7QUFBQSxpQkFBSztBQUN6Qm9DLGlCQUFLLEVBQUU7QUFDTEMseUJBQVcsRUFBRTtBQURSO0FBRGtCLFdBQUw7QUFBQSxTQVR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FwQkYsQ0FERjtBQTBDRDs7OztFQTdFdUJDLCtDOztBQWdGWHZCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL2NhbGVuZGFyLjJiN2I1YTQwNzkwNWY5Yjk1NWIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBDYWxlbmRhciwgbW9tZW50TG9jYWxpemVyIH0gZnJvbSAncmVhY3QtYmlnLWNhbGVuZGFyJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7T3ZlcmxheX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtPdmVybGF5VHJpZ2dlcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtQb3BvdmVyfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgbG9jYWxpemVyID0gbW9tZW50TG9jYWxpemVyKG1vbWVudCk7XHJcblxyXG5mdW5jdGlvbiBFdmVudCh7IGV2ZW50IH0pIHtcclxuICBsZXQgcG9wb3ZlckNsaWNrUm9vdENsb3NlID0gKFxyXG4gICAgPFBvcG92ZXJcclxuICAgICAgaWQ9XCJwb3BvdmVyLXRyaWdnZXItY2xpY2stcm9vdC1jbG9zZVwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgekluZGV4OiAxMDAwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMixcclxuICAgICAgfX0+XHJcbiAgICAgICAgICA8c3Ryb25nPntldmVudC50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvUG9wb3Zlcj5cclxuICApO1xyXG5cclxuICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE92ZXJsYXlUcmlnZ2VyIGlkPVwiaGVscFwiIHRyaWdnZXI9XCJjbGlja1wiIHJvb3RDbG9zZSBjb250YWluZXI9e3RoaXN9IHBsYWNlbWVudD1cInRvcFwiIG92ZXJsYXk9e3BvcG92ZXJDbGlja1Jvb3RDbG9zZX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93Jyx9fT5cclxuICAgICAgICAgICAgICB7ZXZlbnQuaW1hZ2V9ICB7ZXZlbnQudGl0bGV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNsYXNzIEJpZ0NhbGVuZGFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZXZlbnRzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIHRpdGxlOiAnVG9kYXknLFxyXG4gICAgICAgICAgc3RhcnQ6IG5vdyxcclxuICAgICAgICAgIGVuZDogbm93LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgZGF0ZSBpczogJyArIChub3cuZ2V0TW9udGgoKSsxKSArICcvJyArIG5vdy5nZXREYXRlKCkgKyAnLycgKyBub3cuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgIGltYWdlOiA8aW1nIHNyYz1cIi9mYXZpY29uLnBuZ1wiIHN0eWxlPXt7d2lkdGg6IDMwLCBoZWlnaHQ6IDMwLCBtYXJnaW5SaWdodDogNX19IC8+XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIDEwMScsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAyMCwgOCwgMTUsIDE3LCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAyMCwgOCwgMTUsIDE4LCAzMCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ludHJvZHVjdGlvbiB0byBCbG9ja2NoYWluQElVIGFuZCBibG9ja2NoYWluIHRlY2hub2xvZ3knXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgdGl0bGU6ICdDb3Vyc2VzIEJlZ2luJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDIwLCA4LCAyMSwgMTcsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDIwLCA4LCAyMSwgMTgsIDApLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVGVuYXRpdmUgc3RhcnQgdG8gb3VyIEJ1c2luZXNzIEFwcGxpY2F0aW9ucyBhbmQgRGV2ZWxvcG1lbnQgY291cnNlcy4gTGVhcm4gbW9yZSBhYm91dCBvdXIgY291cnNlcyBvbiBhdCBCbG9ja2NoYWluMTAxIG9uIFNlcHRlbWJlciAxNXRoIVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICdSZWFjdCcsXHJcbiAgICAgIGV2ZW50c1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPkJhY2sgdG8gSG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNDB9fT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvZmF2aWNvbi5wbmdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2g6ICc1cmVtJyx9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjOTkwMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxNX19PlxyXG4gICAgICAgICAgICBCbG9ja2NoYWluQElVIENhbGVuZGFyXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTAwcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNDAsfX0+XHJcbiAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgZXZlbnRzPXt0aGlzLnN0YXRlLmV2ZW50c31cclxuICAgICAgICAgICAgc3RhcnRBY2Nlc3Nvcj1cInN0YXJ0XCJcclxuICAgICAgICAgICAgZW5kQWNjZXNzb3I9XCJlbmRcIlxyXG4gICAgICAgICAgICBkZWZhdWx0RGF0ZT17bW9tZW50KCkudG9EYXRlKCl9XHJcbiAgICAgICAgICAgIGxvY2FsaXplcj17bG9jYWxpemVyfVxyXG4gICAgICAgICAgICBjb21wb25lbnRzPXt7XHJcbiAgICAgICAgICAgICAgZXZlbnQ6IEV2ZW50XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGV2ZW50UHJvcEdldHRlcj17ZXZlbnQgPT4gKHtcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzk5MDAwMFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlnQ2FsZW5kYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=