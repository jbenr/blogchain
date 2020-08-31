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
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 30,
          marginTop: 30,
          marginLeft: 40
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
          width: '5rem',
          heigh: '5rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
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
          lineNumber: 92,
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
          lineNumber: 98,
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
          lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOlsibG9jYWxpemVyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50IiwiRXZlbnQiLCJldmVudCIsInBvcG92ZXJDbGlja1Jvb3RDbG9zZSIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsIkJpZ0NhbGVuZGFyIiwibm93IiwiRGF0ZSIsImV2ZW50cyIsImlkIiwic3RhcnQiLCJlbmQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsInN0YXRlIiwibmFtZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiaGVpZ2giLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwidG9EYXRlIiwic3R5bGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMEVBQWUsQ0FBQ0MsNkNBQUQsQ0FBakM7O0FBRUEsU0FBU0MsS0FBVCxPQUEwQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDeEIsTUFBSUMscUJBQXFCLEdBQ3ZCLE1BQUMsd0RBQUQ7QUFDRSxNQUFFLEVBQUMsa0NBREw7QUFFRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLEtBREg7QUFFTEMscUJBQWUsRUFBRSxTQUZaO0FBR0xDLGtCQUFZLEVBQUUsRUFIVDtBQUlMQyxhQUFPLEVBQUUsQ0FKSjtBQUtMQyxZQUFNLEVBQUUsaUJBTEg7QUFNTEMsa0JBQVksRUFBRTtB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RXVCaUMsK0M7O0FBK0VYeEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvY2FsZW5kYXIuYjIyYTM1ZDg4OGNkYjQyOTA1Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IENhbGVuZGFyLCBtb21lbnRMb2NhbGl6ZXIgfSBmcm9tICdyZWFjdC1iaWctY2FsZW5kYXInO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtPdmVybGF5fSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge092ZXJsYXlUcmlnZ2VyfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge1BvcG92ZXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5jb25zdCBsb2NhbGl6ZXIgPSBtb21lbnRMb2NhbGl6ZXIobW9tZW50KTtcclxuXHJcbmZ1bmN0aW9uIEV2ZW50KHsgZXZlbnQgfSkge1xyXG4gIGxldCBwb3BvdmVyQ2xpY2tSb290Q2xvc2UgPSAoXHJcbiAgICA8UG9wb3ZlclxyXG4gICAgICBpZD1cInBvcG92ZXItdHJpZ2dlci1jbGljay1yb290LWNsb3NlXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB6SW5kZXg6IDEwMDAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEyLFxyXG4gICAgICB9fT5cclxuICAgICAgICAgIDxzdHJvbmc+e2V2ZW50LnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8cD57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8T3ZlcmxheVRyaWdnZXIgaWQ9XCJoZWxwXCIgdHJpZ2dlcj1cImNsaWNrXCIgcm9vdENsb3NlIGNvbnRhaW5lcj17dGhpc30gcGxhY2VtZW50PVwidG9wXCIgb3ZlcmxheT17cG9wb3ZlckNsaWNrUm9vdENsb3NlfT5cclxuICAgICAgICAgIDxkaXY+e2V2ZW50LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY2xhc3MgQmlnQ2FsZW5kYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBldmVudHMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgdGl0bGU6ICdUb2RheScsXHJcbiAgICAgICAgICBzdGFydDogbm93LFxyXG4gICAgICAgICAgZW5kOiBub3csXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBkYXRlIGlzOiAnICsgKG5vdy5nZXRNb250aCgpKzEpICsgJy8nICsgbm93LmdldERhdGUoKSArICcvJyArIG5vdy5nZXRGdWxsWWVhcigpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIDEwMScsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAyMCwgOCwgMTUsIDE3LCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAyMCwgOCwgMTUsIDE4LCAzMCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ludHJvZHVjdGlvbiB0byBCbG9ja2NoYWluQElVIGFuZCBibG9ja2NoYWluIHRlY2hub2xvZ3knXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgdGl0bGU6ICdDb3Vyc2VzIEJlZ2luJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDIwLCA4LCAyMSwgMTcsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDIwLCA4LCAyMSwgMTgsIDApLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVGVuYXRpdmUgc3RhcnQgdG8gb3VyIEJ1c2luZXNzIEFwcGxpY2F0aW9ucyBhbmQgRGV2ZWxvcG1lbnQgY291cnNlcy4gTGVhcm4gbW9yZSBhYm91dCBvdXIgY291cnNlcyBvbiBhdCBCbG9ja2NoYWluMTAxIG9uIFNlcHRlbWJlciAxNXRoIVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICdSZWFjdCcsXHJcbiAgICAgIGV2ZW50c1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPkJhY2sgdG8gSG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNDB9fT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvZmF2aWNvbi5wbmdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2g6ICc1cmVtJyx9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjOTkwMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxNX19PlxyXG4gICAgICAgICAgICBCbG9ja2NoYWluQElVIENhbGVuZGFyXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTAwcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNDAsfX0+XHJcbiAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgZXZlbnRzPXt0aGlzLnN0YXRlLmV2ZW50c31cclxuICAgICAgICAgICAgc3RhcnRBY2Nlc3Nvcj1cInN0YXJ0XCJcclxuICAgICAgICAgICAgZW5kQWNjZXNzb3I9XCJlbmRcIlxyXG4gICAgICAgICAgICBkZWZhdWx0RGF0ZT17bW9tZW50KCkudG9EYXRlKCl9XHJcbiAgICAgICAgICAgIGxvY2FsaXplcj17bG9jYWxpemVyfVxyXG4gICAgICAgICAgICBjb21wb25lbnRzPXt7XHJcbiAgICAgICAgICAgICAgZXZlbnQ6IEV2ZW50XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGV2ZW50UHJvcEdldHRlcj17ZXZlbnQgPT4gKHtcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM5OTAwMDBcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpZ0NhbGVuZGFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9