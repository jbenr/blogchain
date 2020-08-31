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
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");





var _jsxFileName = "C:\\Users\\sambr\\Blockchain@IU\\blogchain\\pages\\posts\\calendar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var localizer = Object(react_big_calendar__WEBPACK_IMPORTED_MODULE_7__["momentLocalizer"])(moment__WEBPACK_IMPORTED_MODULE_8___default.a);

function Event(_ref) {
  var event = _ref.event;

  var popoverClickRootClose = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Popover"], {
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
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["OverlayTrigger"], {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, event.title))));
}

_c = Event;

var BigCalendar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(BigCalendar, _Component);

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
      description: 'The date is: ' + (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear()
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
          lineNumber: 78,
          columnNumber: 7
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }, "Back to Home")), __jsx("div", {
        style: {
          height: '500pt',
          marginLeft: 40,
          marginRight: 40
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/favicon.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      }), __jsx("h2", {
        style: {
          textAlign: 'center',
          color: "#990000"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      }, "Blockchain@IU Calendar"), __jsx(react_big_calendar__WEBPACK_IMPORTED_MODULE_7__["Calendar"], {
        events: this.state.events,
        startAccessor: "start",
        endAccessor: "end",
        defaultDate: moment__WEBPACK_IMPORTED_MODULE_8___default()().toDate(),
        localizer: localizer,
        components: {
          event: Event
        },
        eventPropGetter: function eventPropGetter(event) {
          return {
            style: {
              backgroundColor: "#990000"
            }
          };
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      })));
    }
  }]);

  return BigCalendar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOlsibG9jYWxpemVyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50IiwiRXZlbnQiLCJldmVudCIsInBvcG92ZXJDbGlja1Jvb3RDbG9zZSIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsIkJpZ0NhbGVuZGFyIiwibm93IiwiRGF0ZSIsImV2ZW50cyIsImlkIiwic3RhcnQiLCJlbmQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsInN0YXRlIiwibmFtZSIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInRleHRBbGlnbiIsImNvbG9yIiwidG9EYXRlIiwic3R5bGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMEVBQWUsQ0FBQ0MsNkNBQUQsQ0FBakM7O0FBRUEsU0FBU0MsS0FBVCxPQUEwQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDeEIsTUFBSUMscUJBQXFCLEdBQ3ZCLE1BQUMsd0RBQUQ7QUFDRSxNQUFFLEVBQUMsa0NBREw7QUFFRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLEtBREg7QUFFTEMscUJBQWUsRUFBRSxTQUZaO0FBR0xDLGtCQUFZLEVBQUUsRUFIVDtBQUlMQyxhQUFPLEVBQUUsQ0FKSjtBQUtMQyxZQUFNLEVBQUUsaUJBTEg7QUFNTEMsa0JBQVksRUFBRTtBQU5ULEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVNO0FBQUE7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QVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdFO0FBQ0ksV0FBRyxFQUFDLGNBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhGLEVBTUU7QUFBSSxhQUFLLEVBQUU7QUFBQ0MsbUJBQVMsRUFBRSxRQUFaO0FBQ0NDLGVBQUssRUFBRTtBQURSLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FORixFQVVFLE1BQUMsMkRBQUQ7QUFDRSxjQUFNLEVBQUUsS0FBS04sS0FBTCxDQUFXUCxNQURyQjtBQUVFLHFCQUFhLEVBQUMsT0FGaEI7QUFHRSxtQkFBVyxFQUFDLEtBSGQ7QUFJRSxtQkFBVyxFQUFFakIsNkNBQU0sR0FBRytCLE1BQVQsRUFKZjtBQUtFLGlCQUFTLEVBQUVqQyxTQUxiO0FBTUUsa0JBQVUsRUFBRTtBQUNWSSxlQUFLLEVBQUVEO0FBREcsU0FOZDtBQVNFLHVCQUFlLEVBQUUseUJBQUFDLEtBQUs7QUFBQSxpQkFBSztBQUN6QjhCLGlCQUFLLEVBQUU7QUFDTDNCLDZCQUFlLEVBQUU7QUFEWjtBQURrQixXQUFMO0FBQUEsU0FUeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZGLENBSkYsQ0FERjtBQWlDRDs7OztFQW5FdUI0QiwrQzs7QUFzRVhuQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9jYWxlbmRhci4xMGU4YWVhZGIxNjVkZTlhOGQ5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQ2FsZW5kYXIsIG1vbWVudExvY2FsaXplciB9IGZyb20gJ3JlYWN0LWJpZy1jYWxlbmRhcic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge092ZXJsYXl9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7T3ZlcmxheVRyaWdnZXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7UG9wb3Zlcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IGxvY2FsaXplciA9IG1vbWVudExvY2FsaXplcihtb21lbnQpO1xyXG5cclxuZnVuY3Rpb24gRXZlbnQoeyBldmVudCB9KSB7XHJcbiAgbGV0IHBvcG92ZXJDbGlja1Jvb3RDbG9zZSA9IChcclxuICAgIDxQb3BvdmVyXHJcbiAgICAgIGlkPVwicG9wb3Zlci10cmlnZ2VyLWNsaWNrLXJvb3QtY2xvc2VcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHpJbmRleDogMTAwMDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTIsXHJcbiAgICAgIH19PlxyXG4gICAgICAgICAgPHN0cm9uZz57ZXZlbnQudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxwPntldmVudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L1BvcG92ZXI+XHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxPdmVybGF5VHJpZ2dlciBpZD1cImhlbHBcIiB0cmlnZ2VyPVwiY2xpY2tcIiByb290Q2xvc2UgY29udGFpbmVyPXt0aGlzfSBwbGFjZW1lbnQ9XCJ0b3BcIiBvdmVybGF5PXtwb3BvdmVyQ2xpY2tSb290Q2xvc2V9PlxyXG4gICAgICAgICAgPGRpdj57ZXZlbnQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jbGFzcyBCaWdDYWxlbmRhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGV2ZW50cyA9IFtcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICB0aXRsZTogJ1RvZGF5JyxcclxuICAgICAgICAgIHN0YXJ0OiBub3csXHJcbiAgICAgICAgICBlbmQ6IG5vdyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGRhdGUgaXM6ICcgKyAobm93LmdldE1vbnRoKCkrMSkgKyAnLycgKyBub3cuZ2V0RGF0ZSgpICsgJy8nICsgbm93LmdldEZ1bGxZZWFyKClcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICB0aXRsZTogJ0Jsb2NrY2hhaW4gMTAxJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxNSwgMTcsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDIwLCA4LCAxNSwgMTgsIDMwKSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSW50cm9kdWN0aW9uIHRvIEJsb2NrY2hhaW5ASVUgYW5kIGJsb2NrY2hhaW4gdGVjaG5vbG9neSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICB0aXRsZTogJ0NvdXJzZXMgQmVnaW4nLFxyXG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMjAsIDgsIDIxLCAxNywgMCksXHJcbiAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMjAsIDgsIDIxLCAxOCwgMCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZW5hdGl2ZSBzdGFydCB0byBvdXIgQnVzaW5lc3MgQXBwbGljYXRpb25zIGFuZCBEZXZlbG9wbWVudCBjb3Vyc2VzLiBMZWFybiBtb3JlIGFib3V0IG91ciBjb3Vyc2VzIG9uIGF0IEJsb2NrY2hhaW4xMDEgb24gU2VwdGVtYmVyIDE1dGghXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogJ1JlYWN0JyxcclxuICAgICAgZXZlbnRzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+QmFjayB0byBIb21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUwMHB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDQwLH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9mYXZpY29uLnBuZ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM5OTAwMDBcIix9fT5cclxuICAgICAgICAgICAgQmxvY2tjaGFpbkBJVSBDYWxlbmRhclxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxDYWxlbmRhclxyXG4gICAgICAgICAgICBldmVudHM9e3RoaXMuc3RhdGUuZXZlbnRzfVxyXG4gICAgICAgICAgICBzdGFydEFjY2Vzc29yPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBlbmRBY2Nlc3Nvcj1cImVuZFwiXHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRlPXttb21lbnQoKS50b0RhdGUoKX1cclxuICAgICAgICAgICAgbG9jYWxpemVyPXtsb2NhbGl6ZXJ9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcclxuICAgICAgICAgICAgICBldmVudDogRXZlbnRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZXZlbnRQcm9wR2V0dGVyPXtldmVudCA9PiAoe1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzk5MDAwMFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlnQ2FsZW5kYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=