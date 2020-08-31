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
          textAlign: center
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/favicon.png",
        style: {
          width: '8rem',
          heigh: '8rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
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
      }, "Blockchain@IU Calendar")), __jsx("div", {
        style: {
          height: '500pt',
          marginLeft: 40,
          marginRight: 40
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, __jsx(react_big_calendar__WEBPACK_IMPORTED_MODULE_7__["Calendar"], {
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
          lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOlsibG9jYWxpemVyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50IiwiRXZlbnQiLCJldmVudCIsInBvcG92ZXJDbGlja1Jvb3RDbG9zZSIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsIkJpZ0NhbGVuZGFyIiwibm93IiwiRGF0ZSIsImV2ZW50cyIsImlkIiwic3RhcnQiLCJlbmQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsInN0YXRlIiwibmFtZSIsInRleHRBbGlnbiIsImNlbnRlciIsIndpZHRoIiwiaGVpZ2giLCJjb2xvciIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInRvRGF0ZSIsInN0eWxlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDBFQUFlLENBQUNDLDZDQUFELENBQWpDOztBQUVBLFNBQVNDLEtBQVQsT0FBMEI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQ3hCLE1BQUlDLHFCQUFxQixHQUN2QixNQUFDLHdEQUFEO0FBQ0UsTUFBRSxFQUFDLGtDQURMO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxLQURIO0FBRUxDLHFCQUFlLEVBQUUsU0FGWjtBQUdMQyxrQkFBWSxFQUFFLEVBSFQ7QUFJTEMsYUFBTyxFQUFFLENBSko7QUFLTEMsWUFBTSxFQUFFLGlCQUxIO0FBTUxDLGtCQUFZLEVBQUU7QUFOVCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0ksV0FBRyxFQUFDLGNBRFI7QUFFSSxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFLE1BQVQ7QUFDRUMsZUFBSyxFQUFFO0FBRFQsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFNRTtBQUFJLGFBQUssRUFBRTtBQUFDSCxtQkFBUyxFQUFFLFFBQVo7QUFDQ0ksZUFBSyxFQUFFO0FBRFIsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQU5GLENBSkYsRUFlRTtBQUFLLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFLE9BQVY7QUFDRUMsb0JBQVUsRUFBRSxFQURkO0FBRUVDLHFCQUFXLEVBQUU7QUFGZixTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHRSxNQUFDLDJEQUFEO0FBQ0UsY0FBTSxFQUFFLEtBQUtULEtBQUwsQ0FBV1AsTUFEckI7QUFFRSxxQkFBYSxFQUFDLE9BRmhCO0FBR0UsbUJBQVcsRUFBQyxLQUhkO0FBSUUsbUJBQVcsRUFBRWpCLDZDQUFNLEdBQUdrQyxNQUFULEVBSmY7QUFLRSxpQkFBUyxFQUFFcEMsU0FMYjtBQU1FLGtCQUFVLEVBQUU7QUFDVkksZUFBSyxFQUFFRDtBQURHLFNBTmQ7QUFTRSx1QkFBZSxFQUFFLHlCQUFBQyxLQUFLO0FBQUEsaUJBQUs7QUFDekJpQyxpQkFBSyxFQUFFO0FBQ0w5Qiw2QkFBZSxFQUFFO0FBRFo7QUFEa0IsV0FBTDtBQUFBLFNBVHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQWZGLENBREY7QUFxQ0Q7Ozs7RUF2RXVCK0IsK0M7O0FBMEVYdEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvY2FsZW5kYXIuNTRkNmI4ZWYzMjBkZWIzYmM2OTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IENhbGVuZGFyLCBtb21lbnRMb2NhbGl6ZXIgfSBmcm9tICdyZWFjdC1iaWctY2FsZW5kYXInO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtPdmVybGF5fSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge092ZXJsYXlUcmlnZ2VyfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge1BvcG92ZXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5jb25zdCBsb2NhbGl6ZXIgPSBtb21lbnRMb2NhbGl6ZXIobW9tZW50KTtcclxuXHJcbmZ1bmN0aW9uIEV2ZW50KHsgZXZlbnQgfSkge1xyXG4gIGxldCBwb3BvdmVyQ2xpY2tSb290Q2xvc2UgPSAoXHJcbiAgICA8UG9wb3ZlclxyXG4gICAgICBpZD1cInBvcG92ZXItdHJpZ2dlci1jbGljay1yb290LWNsb3NlXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB6SW5kZXg6IDEwMDAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEyLFxyXG4gICAgICB9fT5cclxuICAgICAgICAgIDxzdHJvbmc+e2V2ZW50LnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8cD57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8T3ZlcmxheVRyaWdnZXIgaWQ9XCJoZWxwXCIgdHJpZ2dlcj1cImNsaWNrXCIgcm9vdENsb3NlIGNvbnRhaW5lcj17dGhpc30gcGxhY2VtZW50PVwidG9wXCIgb3ZlcmxheT17cG9wb3ZlckNsaWNrUm9vdENsb3NlfT5cclxuICAgICAgICAgIDxkaXY+e2V2ZW50LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY2xhc3MgQmlnQ2FsZW5kYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBldmVudHMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgdGl0bGU6ICdUb2RheScsXHJcbiAgICAgICAgICBzdGFydDogbm93LFxyXG4gICAgICAgICAgZW5kOiBub3csXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBkYXRlIGlzOiAnICsgKG5vdy5nZXRNb250aCgpKzEpICsgJy8nICsgbm93LmdldERhdGUoKSArICcvJyArIG5vdy5nZXRGdWxsWWVhcigpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIDEwMScsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAyMCwgOCwgMTUsIDE3LCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAyMCwgOCwgMTUsIDE4LCAzMCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ludHJvZHVjdGlvbiB0byBCbG9ja2NoYWluQElVIGFuZCBibG9ja2NoYWluIHRlY2hub2xvZ3knXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgdGl0bGU6ICdDb3Vyc2VzIEJlZ2luJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDIwLCA4LCAyMSwgMTcsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDIwLCA4LCAyMSwgMTgsIDApLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVGVuYXRpdmUgc3RhcnQgdG8gb3VyIEJ1c2luZXNzIEFwcGxpY2F0aW9ucyBhbmQgRGV2ZWxvcG1lbnQgY291cnNlcy4gTGVhcm4gbW9yZSBhYm91dCBvdXIgY291cnNlcyBvbiBhdCBCbG9ja2NoYWluMTAxIG9uIFNlcHRlbWJlciAxNXRoIVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICdSZWFjdCcsXHJcbiAgICAgIGV2ZW50c1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPkJhY2sgdG8gSG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IGNlbnRlciB9fT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvZmF2aWNvbi5wbmdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOHJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2g6ICc4cmVtJyx9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjOTkwMDAwXCIsfX0+XHJcbiAgICAgICAgICAgIEJsb2NrY2hhaW5ASVUgQ2FsZW5kYXJcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1MDBwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA0MCx9fT5cclxuICAgICAgICAgIDxDYWxlbmRhclxyXG4gICAgICAgICAgICBldmVudHM9e3RoaXMuc3RhdGUuZXZlbnRzfVxyXG4gICAgICAgICAgICBzdGFydEFjY2Vzc29yPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBlbmRBY2Nlc3Nvcj1cImVuZFwiXHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRlPXttb21lbnQoKS50b0RhdGUoKX1cclxuICAgICAgICAgICAgbG9jYWxpemVyPXtsb2NhbGl6ZXJ9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcclxuICAgICAgICAgICAgICBldmVudDogRXZlbnRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZXZlbnRQcm9wR2V0dGVyPXtldmVudCA9PiAoe1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzk5MDAwMFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlnQ2FsZW5kYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=