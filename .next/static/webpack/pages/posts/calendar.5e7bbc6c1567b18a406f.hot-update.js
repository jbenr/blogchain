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
  }, event.description), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Time: ", event.start));

  console.log(event);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      description: 'Introduction to Blockchain@IU and blockchain technology' + '/n' + 'test'
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
          lineNumber: 73,
          columnNumber: 7
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, "Back to Home")), __jsx("h2", {
        style: {
          textAlign: 'center',
          color: "#990000"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, "Blockchain@IU Calendar"), __jsx("div", {
        style: {
          height: '500pt',
          marginLeft: 40,
          marginRight: 40
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
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
          lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOlsibG9jYWxpemVyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50IiwiRXZlbnQiLCJldmVudCIsInBvcG92ZXJDbGlja1Jvb3RDbG9zZSIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwiQmlnQ2FsZW5kYXIiLCJub3ciLCJEYXRlIiwiZXZlbnRzIiwiaWQiLCJlbmQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsInN0YXRlIiwibmFtZSIsInRleHRBbGlnbiIsImNvbG9yIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwidG9EYXRlIiwic3R5bGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMEVBQWUsQ0FBQ0MsNkNBQUQsQ0FBakM7O0FBRUEsU0FBU0MsS0FBVCxPQUEwQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDeEIsTUFBSUMscUJBQXFCLEdBQ3ZCLE1BQUMsd0RBQUQ7QUFDRSxNQUFFLEVBQUMsa0NBREw7QUFFRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLEtBREg7QUFFTEMscUJBQWUsRUFBRSxTQUZaO0FBR0xDLGtCQUFZLEVBQUUsRUFIVDtBQUlMQyxhQUFPLEVBQUUsQ0FKSjtBQUtMQyxZQUFNLEVBQUUsaUJBTEg7QUFNTEMsa0JBQVksRUFBRTtBQU5ULEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVNO0FBQUE7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0UsTUFBQywyREFBRDtBQUNFLGNBQU0sRUFBRSxLQUFLTixLQUFMLENBQVdOLE1BRHJCO0FBRUUscUJBQWEsRUFBQyxPQUZoQjtBQUdFLG1CQUFXLEVBQUMsS0FIZDtBQUlFLG1CQUFXLEVBQUVsQiw2Q0FBTSxHQUFHK0IsTUFBVCxFQUpmO0FBS0UsaUJBQVMsRUFBRWpDLFNBTGI7QUFNRSxrQkFBVSxFQUFFO0FBQ1ZJLGVBQUssRUFBRUQ7QUFERyxTQU5kO0FBU0UsdUJBQWUsRUFBRSx5QkFBQUMsS0FBSztBQUFBLGlCQUFLO0FBQ3pCOEIsaUJBQUssRUFBRTtBQUNMM0IsNkJBQWUsRUFBRTtBQURaO0FBRGtCLFdBQUw7QUFBQSxTQVR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FSRixDQURGO0FBOEJEOzs7O0VBekR1QjRCLCtDOztBQTREWGxCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL2NhbGVuZGFyLjVlN2JiYzZjMTU2N2IxOGE0MDZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBDYWxlbmRhciwgbW9tZW50TG9jYWxpemVyIH0gZnJvbSAncmVhY3QtYmlnLWNhbGVuZGFyJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7T3ZlcmxheX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtPdmVybGF5VHJpZ2dlcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtQb3BvdmVyfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgbG9jYWxpemVyID0gbW9tZW50TG9jYWxpemVyKG1vbWVudCk7XHJcblxyXG5mdW5jdGlvbiBFdmVudCh7IGV2ZW50IH0pIHtcclxuICBsZXQgcG9wb3ZlckNsaWNrUm9vdENsb3NlID0gKFxyXG4gICAgPFBvcG92ZXJcclxuICAgICAgaWQ9XCJwb3BvdmVyLXRyaWdnZXItY2xpY2stcm9vdC1jbG9zZVwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgekluZGV4OiAxMDAwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMixcclxuICAgICAgfX0+XHJcbiAgICAgICAgICA8c3Ryb25nPntldmVudC50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8cD5UaW1lOiB7ZXZlbnQuc3RhcnR9PC9wPlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8T3ZlcmxheVRyaWdnZXIgaWQ9XCJoZWxwXCIgdHJpZ2dlcj1cImNsaWNrXCIgcm9vdENsb3NlIGNvbnRhaW5lcj17dGhpc30gcGxhY2VtZW50PVwidG9wXCIgb3ZlcmxheT17cG9wb3ZlckNsaWNrUm9vdENsb3NlfT5cclxuICAgICAgICAgIDxkaXY+e2V2ZW50LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY2xhc3MgQmlnQ2FsZW5kYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBldmVudHMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgdGl0bGU6ICdUb2RheScsXHJcbiAgICAgICAgICBzdGFydDogbm93LFxyXG4gICAgICAgICAgZW5kOiBub3csXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBkYXRlIGlzOiAnICsgKG5vdy5nZXRNb250aCgpKzEpICsgJy8nICsgbm93LmdldERhdGUoKSArICcvJyArIG5vdy5nZXRGdWxsWWVhcigpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIDEwMScsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAyMCwgOCwgMTUsIDE3LCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAyMCwgOCwgMTUsIDE4LCAzMCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ludHJvZHVjdGlvbiB0byBCbG9ja2NoYWluQElVIGFuZCBibG9ja2NoYWluIHRlY2hub2xvZ3knICsgJy9uJyArICd0ZXN0J1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiAnUmVhY3QnLFxyXG4gICAgICBldmVudHNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5CYWNrIHRvIEhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzk5MDAwMFwiLH19PlxyXG4gICAgICAgICAgQmxvY2tjaGFpbkBJVSBDYWxlbmRhclxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1MDBwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA0MCx9fT5cclxuICAgICAgICAgIDxDYWxlbmRhclxyXG4gICAgICAgICAgICBldmVudHM9e3RoaXMuc3RhdGUuZXZlbnRzfVxyXG4gICAgICAgICAgICBzdGFydEFjY2Vzc29yPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBlbmRBY2Nlc3Nvcj1cImVuZFwiXHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRlPXttb21lbnQoKS50b0RhdGUoKX1cclxuICAgICAgICAgICAgbG9jYWxpemVyPXtsb2NhbGl6ZXJ9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcclxuICAgICAgICAgICAgICBldmVudDogRXZlbnRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZXZlbnRQcm9wR2V0dGVyPXtldmVudCA9PiAoe1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzk5MDAwMFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlnQ2FsZW5kYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=