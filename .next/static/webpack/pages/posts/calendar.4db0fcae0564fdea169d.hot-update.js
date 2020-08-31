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
        className: "".concat(styles.headerHomeImage, " ").concat(utilStyles.borderCircle),
        alt: name,
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
          lineNumber: 90,
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
          lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOlsibG9jYWxpemVyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50IiwiRXZlbnQiLCJldmVudCIsInBvcG92ZXJDbGlja1Jvb3RDbG9zZSIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsIkJpZ0NhbGVuZGFyIiwibm93IiwiRGF0ZSIsImV2ZW50cyIsImlkIiwic3RhcnQiLCJlbmQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsInN0YXRlIiwibmFtZSIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInN0eWxlcyIsImhlYWRlckhvbWVJbWFnZSIsInV0aWxTdHlsZXMiLCJib3JkZXJDaXJjbGUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInRvRGF0ZSIsInN0eWxlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDBFQUFlLENBQUNDLDZDQUFELENBQWpDOztBQUVBLFNBQVNDLEtBQVQsT0FBMEI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQ3hCLE1BQUlDLHFCQUFxQixHQUN2QixNQUFDLHdEQUFEO0FBQ0UsTUFBRSxFQUFDLGtDQURMO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxLQURIO0FBRUxDLHFCQUFlLEVBQUUsU0FGWjtBQUdMQyxrQkFBWSxFQUFFLEVBSFQ7QUFJTEMsYUFBTyxFQUFFLENBSko7QUFLTEMsWUFBTSxFQUFFLGlCQUxIO0FBTUxDLGtCQUFZLEVBQUU7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QUFFLE9BQVY7QUFDRUMsb0JBQVUsRUFBRSxFQURkO0FBRUVDLHFCQUFXLEVBQUU7QUFGZixTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHRTtBQUNJLFdBQUcsRUFBQyxjQURSO0FBRUksaUJBQVMsWUFBS0MsTUFBTSxDQUFDQyxlQUFaLGNBQStCQyxVQUFVLENBQUNDLFlBQTFDLENBRmI7QUFHSSxXQUFHLEVBQUVQLElBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhGLEVBUUU7QUFBSSxhQUFLLEVBQUU7QUFBQ1EsbUJBQVMsRUFBRSxRQUFaO0FBQ0NDLGVBQUssRUFBRTtBQURSLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FSRixFQVlFLE1BQUMsMkRBQUQ7QUFDRSxjQUFNLEVBQUUsS0FBS1YsS0FBTCxDQUFXUCxNQURyQjtBQUVFLHFCQUFhLEVBQUMsT0FGaEI7QUFHRSxtQkFBVyxFQUFDLEtBSGQ7QUFJRSxtQkFBVyxFQUFFakIsNkNBQU0sR0FBR21DLE1BQVQsRUFKZjtBQUtFLGlCQUFTLEVBQUVyQyxTQUxiO0FBTUUsa0JBQVUsRUFBRTtBQUNWSSxlQUFLLEVBQUVEO0FBREcsU0FOZDtBQVNFLHVCQUFlLEVBQUUseUJBQUFDLEtBQUs7QUFBQSxpQkFBSztBQUN6QmtDLGlCQUFLLEVBQUU7QUFDTC9CLDZCQUFlLEVBQUU7QUFEWjtBQURrQixXQUFMO0FBQUEsU0FUeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVpGLENBSkYsQ0FERjtBQW1DRDs7OztFQXJFdUJnQywrQzs7QUF3RVh2QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9jYWxlbmRhci40ZGIwZmNhZTA1NjRmZGVhMTY5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQ2FsZW5kYXIsIG1vbWVudExvY2FsaXplciB9IGZyb20gJ3JlYWN0LWJpZy1jYWxlbmRhcic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge092ZXJsYXl9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7T3ZlcmxheVRyaWdnZXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7UG9wb3Zlcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IGxvY2FsaXplciA9IG1vbWVudExvY2FsaXplcihtb21lbnQpO1xyXG5cclxuZnVuY3Rpb24gRXZlbnQoeyBldmVudCB9KSB7XHJcbiAgbGV0IHBvcG92ZXJDbGlja1Jvb3RDbG9zZSA9IChcclxuICAgIDxQb3BvdmVyXHJcbiAgICAgIGlkPVwicG9wb3Zlci10cmlnZ2VyLWNsaWNrLXJvb3QtY2xvc2VcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHpJbmRleDogMTAwMDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTIsXHJcbiAgICAgIH19PlxyXG4gICAgICAgICAgPHN0cm9uZz57ZXZlbnQudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxwPntldmVudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L1BvcG92ZXI+XHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxPdmVybGF5VHJpZ2dlciBpZD1cImhlbHBcIiB0cmlnZ2VyPVwiY2xpY2tcIiByb290Q2xvc2UgY29udGFpbmVyPXt0aGlzfSBwbGFjZW1lbnQ9XCJ0b3BcIiBvdmVybGF5PXtwb3BvdmVyQ2xpY2tSb290Q2xvc2V9PlxyXG4gICAgICAgICAgPGRpdj57ZXZlbnQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jbGFzcyBCaWdDYWxlbmRhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGV2ZW50cyA9IFtcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICB0aXRsZTogJ1RvZGF5JyxcclxuICAgICAgICAgIHN0YXJ0OiBub3csXHJcbiAgICAgICAgICBlbmQ6IG5vdyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGRhdGUgaXM6ICcgKyAobm93LmdldE1vbnRoKCkrMSkgKyAnLycgKyBub3cuZ2V0RGF0ZSgpICsgJy8nICsgbm93LmdldEZ1bGxZZWFyKClcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICB0aXRsZTogJ0Jsb2NrY2hhaW4gMTAxJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxNSwgMTcsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDIwLCA4LCAxNSwgMTgsIDMwKSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSW50cm9kdWN0aW9uIHRvIEJsb2NrY2hhaW5ASVUgYW5kIGJsb2NrY2hhaW4gdGVjaG5vbG9neSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICB0aXRsZTogJ0NvdXJzZXMgQmVnaW4nLFxyXG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMjAsIDgsIDIxLCAxNywgMCksXHJcbiAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMjAsIDgsIDIxLCAxOCwgMCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZW5hdGl2ZSBzdGFydCB0byBvdXIgQnVzaW5lc3MgQXBwbGljYXRpb25zIGFuZCBEZXZlbG9wbWVudCBjb3Vyc2VzLiBMZWFybiBtb3JlIGFib3V0IG91ciBjb3Vyc2VzIG9uIGF0IEJsb2NrY2hhaW4xMDEgb24gU2VwdGVtYmVyIDE1dGghXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogJ1JlYWN0JyxcclxuICAgICAgZXZlbnRzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+QmFjayB0byBIb21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUwMHB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDQwLH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9mYXZpY29uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVySG9tZUltYWdlfSAke3V0aWxTdHlsZXMuYm9yZGVyQ2lyY2xlfWB9XHJcbiAgICAgICAgICAgICAgYWx0PXtuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjOTkwMDAwXCIsfX0+XHJcbiAgICAgICAgICAgIEJsb2NrY2hhaW5ASVUgQ2FsZW5kYXJcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgZXZlbnRzPXt0aGlzLnN0YXRlLmV2ZW50c31cclxuICAgICAgICAgICAgc3RhcnRBY2Nlc3Nvcj1cInN0YXJ0XCJcclxuICAgICAgICAgICAgZW5kQWNjZXNzb3I9XCJlbmRcIlxyXG4gICAgICAgICAgICBkZWZhdWx0RGF0ZT17bW9tZW50KCkudG9EYXRlKCl9XHJcbiAgICAgICAgICAgIGxvY2FsaXplcj17bG9jYWxpemVyfVxyXG4gICAgICAgICAgICBjb21wb25lbnRzPXt7XHJcbiAgICAgICAgICAgICAgZXZlbnQ6IEV2ZW50XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGV2ZW50UHJvcEdldHRlcj17ZXZlbnQgPT4gKHtcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM5OTAwMDBcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpZ0NhbGVuZGFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9