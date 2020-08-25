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





var _jsxFileName = "C:\\Users\\sambr\\Blockchain@IU\\blogchain\\pages\\posts\\calendar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var localizer = Object(react_big_calendar__WEBPACK_IMPORTED_MODULE_7__["momentLocalizer"])(moment__WEBPACK_IMPORTED_MODULE_8___default.a);

var BigCalendar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(BigCalendar, _Component);

  var _super = _createSuper(BigCalendar);

  function BigCalendar() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BigCalendar);

    _this = _super.call(this);
    var now = new Date();
    var events = [{
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2015, 3, 0),
      end: new Date(2015, 3, 1)
    }, {
      id: 1,
      title: 'Long Event',
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10)
    }, {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2016, 2, 13, 0, 0, 0),
      end: new Date(2016, 2, 20, 0, 0, 0)
    }, {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2016, 10, 6, 0, 0, 0),
      end: new Date(2016, 10, 13, 0, 0, 0)
    }, {
      id: 4,
      title: 'Some Event',
      start: new Date(2015, 3, 9, 0, 0, 0),
      end: new Date(2015, 3, 10, 0, 0, 0)
    }, {
      id: 5,
      title: 'Conference',
      start: new Date(2015, 3, 11),
      end: new Date(2015, 3, 13),
      desc: 'Big conference for important people'
    }, {
      id: 6,
      title: 'Meeting',
      start: new Date(2015, 3, 12, 10, 30, 0, 0),
      end: new Date(2015, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting'
    }, {
      id: 7,
      title: 'Lunch',
      start: new Date(2015, 3, 12, 12, 0, 0, 0),
      end: new Date(2015, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch'
    }, {
      id: 8,
      title: 'Meeting',
      start: new Date(2015, 3, 12, 14, 0, 0, 0),
      end: new Date(2015, 3, 12, 15, 0, 0, 0)
    }, {
      id: 9,
      title: 'Happy Hour',
      start: new Date(2015, 3, 12, 17, 0, 0, 0),
      end: new Date(2015, 3, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day'
    }, {
      id: 10,
      title: 'Dinner',
      start: new Date(2015, 3, 12, 20, 0, 0, 0),
      end: new Date(2015, 3, 12, 21, 0, 0, 0)
    }, {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2015, 3, 13, 7, 0, 0),
      end: new Date(2015, 3, 13, 10, 30, 0)
    }, {
      id: 12,
      title: 'Late Night Event',
      start: new Date(2015, 3, 17, 19, 30, 0),
      end: new Date(2015, 3, 18, 2, 0, 0)
    }, {
      id: 12.5,
      title: 'Late Same Night Event',
      start: new Date(2015, 3, 17, 19, 30, 0),
      end: new Date(2015, 3, 17, 23, 30, 0)
    }, {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2015, 3, 20, 19, 30, 0),
      end: new Date(2015, 3, 22, 2, 0, 0)
    }, {
      id: 14,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3))
    }, {
      id: 15,
      title: 'Point in Time Event',
      start: now,
      end: now
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
          lineNumber: 132,
          columnNumber: 7
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }
      }, "A test for the React Big Calendar."), __jsx("div", {
        style: {
          height: '500pt'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 9
        }
      }, __jsx(react_big_calendar__WEBPACK_IMPORTED_MODULE_7__["Calendar"], {
        events: this.state.events,
        startAccessor: "start",
        endAccessor: "end",
        defaultDate: moment__WEBPACK_IMPORTED_MODULE_8___default()().toDate(),
        localizer: localizer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }
      })));
    }
  }]);

  return BigCalendar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BigCalendar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOlsibG9jYWxpemVyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50IiwiQmlnQ2FsZW5kYXIiLCJub3ciLCJEYXRlIiwiZXZlbnRzIiwiaWQiLCJ0aXRsZSIsImFsbERheSIsInN0YXJ0IiwiZW5kIiwiZGVzYyIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJzdGF0ZSIsIm5hbWUiLCJoZWlnaHQiLCJ0b0RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDBFQUFlLENBQUNDLDZDQUFELENBQWpDOztJQUVNQyxXOzs7OztBQUNKLHlCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7QUFDQSxRQUFNQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixFQUFaO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLENBQ2I7QUFDSUMsUUFBRSxFQUFFLENBRFI7QUFFSUMsV0FBSyxFQUFFLCtCQUZYO0FBR0lDLFlBQU0sRUFBRSxJQUhaO0FBSUlDLFdBQUssRUFBRSxJQUFJTCxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FKWDtBQUtJTSxTQUFHLEVBQUUsSUFBSU4sSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLENBQWxCO0FBTFQsS0FEYSxFQVFiO0FBQ0lFLFFBQUUsRUFBRSxDQURSO0FBRUlDLFdBQUssRUFBRSxZQUZYO0FBR0lFLFdBQUssRUFBRSxJQUFJTCxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FIWDtBQUlJTSxTQUFHLEVBQUUsSUFBSU4sSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCO0FBSlQsS0FSYSxFQWViO0FBQ0lFLFFBQUUsRUFBRSxDQURSO0FBRUlDLFdBQUssRUFBRSxZ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QUFvQixJQUFJUixJQUFKLEdBQVdTLFFBQVgsS0FBd0IsQ0FBNUMsQ0FBVDtBQUpULEtBbkdhLEVBeUdiO0FBQ0lQLFFBQUUsRUFBRSxFQURSO0FBRUlDLFdBQUssRUFBRSxxQkFGWDtBQUdJRSxXQUFLLEVBQUVOLEdBSFg7QUFJSU8sU0FBRyxFQUFFUDtBQUpULEtBekdhLENBQWY7QUFnSEEsVUFBS1csS0FBTCxHQUFhO0FBQ1hDLFVBQUksRUFBRSxPQURLO0FBRVhWLFlBQU0sRUFBTkE7QUFGVyxLQUFiO0FBbkhZO0FBdUhiOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FERixFQUlFO0FBQUssYUFBSyxFQUFFO0FBQUVXLGdCQUFNLEVBQUU7QUFBVixTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDJEQUFEO0FBQ0UsY0FBTSxFQUFFLEtBQUtGLEtBQUwsQ0FBV1QsTUFEckI7QUFFRSxxQkFBYSxFQUFDLE9BRmhCO0FBR0UsbUJBQVcsRUFBQyxLQUhkO0FBSUUsbUJBQVcsRUFBRUosNkNBQU0sR0FBR2dCLE1BQVQsRUFKZjtBQUtFLGlCQUFTLEVBQUVsQixTQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQUpGLENBREY7QUFnQkQ7Ozs7RUEzSXVCbUIsK0M7O0FBOElYaEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvY2FsZW5kYXIuYmI3Y2U2NDNjOWFjYmUyZTA0MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IENhbGVuZGFyLCBtb21lbnRMb2NhbGl6ZXIgfSBmcm9tICdyZWFjdC1iaWctY2FsZW5kYXInO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBsb2NhbGl6ZXIgPSBtb21lbnRMb2NhbGl6ZXIobW9tZW50KTtcclxuXHJcbmNsYXNzIEJpZ0NhbGVuZGFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZXZlbnRzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgIHRpdGxlOiAnQWxsIERheSBFdmVudCB2ZXJ5IGxvbmcgdGl0bGUnLFxyXG4gICAgICAgICAgYWxsRGF5OiB0cnVlLFxyXG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTUsIDMsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDE1LCAzLCAxKSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICB0aXRsZTogJ0xvbmcgRXZlbnQnLFxyXG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTUsIDMsIDcpLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDE1LCAzLCAxMCksXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIHRpdGxlOiAnRFRTIFNUQVJUUycsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAxNiwgMiwgMTMsIDAsIDAsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDE2LCAyLCAyMCwgMCwgMCwgMCksXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIHRpdGxlOiAnRFRTIEVORFMnLFxyXG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTYsIDEwLCA2LCAwLCAwLCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAxNiwgMTAsIDEzLCAwLCAwLCAwKSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgdGl0bGU6ICdTb21lIEV2ZW50JyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE1LCAzLCA5LCAwLCAwLCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAxNSwgMywgMTAsIDAsIDAsIDApLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgIHRpdGxlOiAnQ29uZmVyZW5jZScsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAxNSwgMywgMTEpLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDE1LCAzLCAxMyksXHJcbiAgICAgICAgICBkZXNjOiAnQmlnIGNvbmZlcmVuY2UgZm9yIGltcG9ydGFudCBwZW9wbGUnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogNixcclxuICAgICAgICAgIHRpdGxlOiAnTWVldGluZycsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAxNSwgMywgMTIsIDEwLCAzMCwgMCwgMCksXHJcbiAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMTUsIDMsIDEyLCAxMiwgMzAsIDAsIDApLFxyXG4gICAgICAgICAgZGVzYzogJ1ByZS1tZWV0aW5nIG1lZXRpbmcsIHRvIHByZXBhcmUgZm9yIHRoZSBtZWV0aW5nJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgICB0aXRsZTogJ0x1bmNoJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE1LCAzLCAxMiwgMTIsIDAsIDAsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDE1LCAzLCAxMiwgMTMsIDAsIDAsIDApLFxyXG4gICAgICAgICAgZGVzYzogJ1Bvd2VyIGx1bmNoJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgICB0aXRsZTogJ01lZXRpbmcnLFxyXG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTUsIDMsIDEyLCAxNCwgMCwgMCwgMCksXHJcbiAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMTUsIDMsIDEyLCAxNSwgMCwgMCwgMCksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiA5LFxyXG4gICAgICAgICAgdGl0bGU6ICdIYXBweSBIb3VyJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE1LCAzLCAxMiwgMTcsIDAsIDAsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDE1LCAzLCAxMiwgMTcsIDMwLCAwLCAwKSxcclxuICAgICAgICAgIGRlc2M6ICdNb3N0IGltcG9ydGFudCBtZWFsIG9mIHRoZSBkYXknLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMTAsXHJcbiAgICAgICAgICB0aXRsZTogJ0Rpbm5lcicsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAxNSwgMywgMTIsIDIwLCAwLCAwLCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAxNSwgMywgMTIsIDIxLCAwLCAwLCAwKSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDExLFxyXG4gICAgICAgICAgdGl0bGU6ICdCaXJ0aGRheSBQYXJ0eScsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAxNSwgMywgMTMsIDcsIDAsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDE1LCAzLCAxMywgMTAsIDMwLCAwKSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEyLFxyXG4gICAgICAgICAgdGl0bGU6ICdMYXRlIE5pZ2h0IEV2ZW50JyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE1LCAzLCAxNywgMTksIDMwLCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAxNSwgMywgMTgsIDIsIDAsIDApLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMTIuNSxcclxuICAgICAgICAgIHRpdGxlOiAnTGF0ZSBTYW1lIE5pZ2h0IEV2ZW50JyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE1LCAzLCAxNywgMTksIDMwLCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAxNSwgMywgMTcsIDIzLCAzMCwgMCksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAxMyxcclxuICAgICAgICAgIHRpdGxlOiAnTXVsdGktZGF5IEV2ZW50JyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE1LCAzLCAyMCwgMTksIDMwLCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAxNSwgMywgMjIsIDIsIDAsIDApLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMTQsXHJcbiAgICAgICAgICB0aXRsZTogJ1RvZGF5JyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSAtIDMpKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3VycyhuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyAzKSksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAxNSxcclxuICAgICAgICAgIHRpdGxlOiAnUG9pbnQgaW4gVGltZSBFdmVudCcsXHJcbiAgICAgICAgICBzdGFydDogbm93LFxyXG4gICAgICAgICAgZW5kOiBub3csXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiAnUmVhY3QnLFxyXG4gICAgICBldmVudHNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgQSB0ZXN0IGZvciB0aGUgUmVhY3QgQmlnIENhbGVuZGFyLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUwMHB0J319PlxyXG4gICAgICAgICAgPENhbGVuZGFyXHJcbiAgICAgICAgICAgIGV2ZW50cz17dGhpcy5zdGF0ZS5ldmVudHN9XHJcbiAgICAgICAgICAgIHN0YXJ0QWNjZXNzb3I9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGVuZEFjY2Vzc29yPVwiZW5kXCJcclxuICAgICAgICAgICAgZGVmYXVsdERhdGU9e21vbWVudCgpLnRvRGF0ZSgpfVxyXG4gICAgICAgICAgICBsb2NhbGl6ZXI9e2xvY2FsaXplcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpZ0NhbGVuZGFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9