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
      flexDirection: 'row',
      color: 'black'
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
      description: 'Introduction to Blockchain@IU and blockchain technology',
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
          lineNumber: 64,
          columnNumber: 18
        }
      })
    }, {
      id: 3,
      title: 'Courses Begin',
      start: new Date(2020, 8, 21, 17, 0),
      end: new Date(2020, 8, 21, 18, 0),
      description: "Tenative start to our Business Applications and Development courses. Learn more about our courses at Blockchain101 on September 15th!",
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
          lineNumber: 72,
          columnNumber: 18
        }
      })
    }, {
      id: 99,
      title: 'Semester Begins',
      start: new Date(2020, 7, 24),
      end: new Date(2020, 7, 24),
      description: 'Start of Fall 2020 Semester.',
      image: __jsx("img", {
        src: "/iu.png",
        style: {
          width: 25,
          height: 30,
          marginRight: 5
        },
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 18
        }
      })
    }, {
      id: 100,
      title: 'Thanksgiving Break',
      start: new Date(2020, 10, 23),
      end: new Date(2020, 10, 28),
      description: 'Thanksgiving Break. No Classes.',
      image: __jsx("img", {
        src: "/iu.png",
        style: {
          width: 25,
          height: 30,
          marginRight: 5
        },
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 18
        }
      })
    }, {
      id: 101,
      title: 'Final Exams',
      start: new Date(2020, 11, 14),
      end: new Date(2020, 11, 19),
      description: "Final exams and end of Fall 2020 semester",
      image: __jsx("img", {
        src: "/iu.png",
        style: {
          width: 25,
          height: 30,
          marginRight: 5
        },
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 18
        }
      })
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
          lineNumber: 107,
          columnNumber: 7
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
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
          lineNumber: 111,
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
          lineNumber: 116,
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
          lineNumber: 121,
          columnNumber: 11
        }
      }, "Blockchain@IU Calendar"), __jsx("div", {
        style: {
          width: 400
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }
      }), __jsx("img", {
        href: "https://linktr.ee/blockchainIU",
        src: "/linkIcon.png",
        style: {
          width: 30,
          height: 80
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      })), __jsx("div", {
        style: {
          height: '500pt',
          marginLeft: 40,
          marginRight: 40
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
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
              backgroundColor: "#FFFFFF",
              border: "2px solid #990000"
            }
          };
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOlsibG9jYWxpemVyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50IiwiRXZlbnQiLCJldmVudCIsInBvcG92ZXJDbGlja1Jvb3RDbG9zZSIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY29sb3IiLCJpbWFnZSIsIkJpZ0NhbGVuZGFyIiwibm93IiwiRGF0ZSIsImV2ZW50cyIsImlkIiwic3RhcnQiLCJlbmQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJzdGF0ZSIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiaGVpZ2giLCJ0ZXh0QWxpZ24iLCJ0b0RhdGUiLCJzdHlsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDBFQUFlLENBQUNDLDZDQUFELENBQWpDOztBQUVBLFNBQVNDLEtBQVQsT0FBMEI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQ3hCLE1BQUlDLHFCQUFxQixHQUN2QixNQUFDLHdEQUFEO0FBQ0UsTUFBRSxFQUFDLGtDQURMO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxLQURIO0FBRUxDLHFCQUFlLEVBQUUsU0FGWjtBQUdMQyxrQkFBWSxFQUFFLEVBSFQ7QUFJTEMsYUFBTyxFQUFFLENBSko7QUFLTEMsWUFBTSxFQUFFLGlCQUxIO0FBTUxDLGtC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RUFBRUQ7QUFERyxTQU5kO0FBU0UsdUJBQWUsRUFBRSx5QkFBQUMsS0FBSztBQUFBLGlCQUFLO0FBQ3pCb0MsaUJBQUssRUFBRTtBQUNMakMsNkJBQWUsRUFBRSxTQURaO0FBRUxHLG9CQUFNLEVBQUU7QUFGSDtBQURrQixXQUFMO0FBQUEsU0FUeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhGLENBeEJGLENBREY7QUErQ0Q7Ozs7RUE1R3VCK0IsK0M7O0FBK0dYckIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvY2FsZW5kYXIuZWU1NGM2OWEwYzVlODExYzQ2NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IENhbGVuZGFyLCBtb21lbnRMb2NhbGl6ZXIgfSBmcm9tICdyZWFjdC1iaWctY2FsZW5kYXInO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtPdmVybGF5fSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge092ZXJsYXlUcmlnZ2VyfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge1BvcG92ZXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5jb25zdCBsb2NhbGl6ZXIgPSBtb21lbnRMb2NhbGl6ZXIobW9tZW50KTtcclxuXHJcbmZ1bmN0aW9uIEV2ZW50KHsgZXZlbnQgfSkge1xyXG4gIGxldCBwb3BvdmVyQ2xpY2tSb290Q2xvc2UgPSAoXHJcbiAgICA8UG9wb3ZlclxyXG4gICAgICBpZD1cInBvcG92ZXItdHJpZ2dlci1jbGljay1yb290LWNsb3NlXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB6SW5kZXg6IDEwMDAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEyLFxyXG4gICAgICB9fT5cclxuICAgICAgICAgIDxzdHJvbmc+e2V2ZW50LnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8cD57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8T3ZlcmxheVRyaWdnZXIgaWQ9XCJoZWxwXCIgdHJpZ2dlcj1cImNsaWNrXCIgcm9vdENsb3NlIGNvbnRhaW5lcj17dGhpc30gcGxhY2VtZW50PVwidG9wXCIgb3ZlcmxheT17cG9wb3ZlckNsaWNrUm9vdENsb3NlfT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBjb2xvcjogJ2JsYWNrJ319PlxyXG4gICAgICAgICAgICAgIHtldmVudC5pbWFnZX0gIHtldmVudC50aXRsZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY2xhc3MgQmlnQ2FsZW5kYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBldmVudHMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgdGl0bGU6ICdUb2RheScsXHJcbiAgICAgICAgICBzdGFydDogbm93LFxyXG4gICAgICAgICAgZW5kOiBub3csXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBkYXRlIGlzOiAnICsgKG5vdy5nZXRNb250aCgpKzEpICsgJy8nICsgbm93LmdldERhdGUoKSArICcvJyArIG5vdy5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgaW1hZ2U6IDxpbWcgc3JjPVwiL2Zhdmljb24ucG5nXCIgc3R5bGU9e3t3aWR0aDogMzAsIGhlaWdodDogMzAsIG1hcmdpblJpZ2h0OiA1fX0gLz5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICB0aXRsZTogJ0Jsb2NrY2hhaW4gMTAxJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxNSwgMTcsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDIwLCA4LCAxNSwgMTgsIDMwKSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSW50cm9kdWN0aW9uIHRvIEJsb2NrY2hhaW5ASVUgYW5kIGJsb2NrY2hhaW4gdGVjaG5vbG9neScsXHJcbiAgICAgICAgICBpbWFnZTogPGltZyBzcmM9XCIvZmF2aWNvbi5wbmdcIiBzdHlsZT17e3dpZHRoOiAzMCwgaGVpZ2h0OiAzMCwgbWFyZ2luUmlnaHQ6IDV9fSAvPlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIHRpdGxlOiAnQ291cnNlcyBCZWdpbicsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAyMCwgOCwgMjEsIDE3LCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAyMCwgOCwgMjEsIDE4LCAwKSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRlbmF0aXZlIHN0YXJ0IHRvIG91ciBCdXNpbmVzcyBBcHBsaWNhdGlvbnMgYW5kIERldmVsb3BtZW50IGNvdXJzZXMuIExlYXJuIG1vcmUgYWJvdXQgb3VyIGNvdXJzZXMgYXQgQmxvY2tjaGFpbjEwMSBvbiBTZXB0ZW1iZXIgMTV0aCFcIixcclxuICAgICAgICAgIGltYWdlOiA8aW1nIHNyYz1cIi9mYXZpY29uLnBuZ1wiIHN0eWxlPXt7d2lkdGg6IDMwLCBoZWlnaHQ6IDMwLCBtYXJnaW5SaWdodDogNX19IC8+XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiA5OSxcclxuICAgICAgICAgIHRpdGxlOiAnU2VtZXN0ZXIgQmVnaW5zJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDIwLCA3LCAyNCksXHJcbiAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMjAsIDcsIDI0KSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3RhcnQgb2YgRmFsbCAyMDIwIFNlbWVzdGVyLicsXHJcbiAgICAgICAgICBpbWFnZTogPGltZyBzcmM9XCIvaXUucG5nXCIgc3R5bGU9e3t3aWR0aDogMjUsIGhlaWdodDogMzAsIG1hcmdpblJpZ2h0OiA1fX0gLz5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEwMCxcclxuICAgICAgICAgIHRpdGxlOiAnVGhhbmtzZ2l2aW5nIEJyZWFrJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDIwLCAxMCwgMjMpLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDIwLCAxMCwgMjgpLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdUaGFua3NnaXZpbmcgQnJlYWsuIE5vIENsYXNzZXMuJyxcclxuICAgICAgICAgIGltYWdlOiA8aW1nIHNyYz1cIi9pdS5wbmdcIiBzdHlsZT17e3dpZHRoOiAyNSwgaGVpZ2h0OiAzMCwgbWFyZ2luUmlnaHQ6IDV9fSAvPlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMTAxLFxyXG4gICAgICAgICAgdGl0bGU6ICdGaW5hbCBFeGFtcycsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAyMCwgMTEsIDE0KSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAyMCwgMTEsIDE5KSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZpbmFsIGV4YW1zIGFuZCBlbmQgb2YgRmFsbCAyMDIwIHNlbWVzdGVyXCIsXHJcbiAgICAgICAgICBpbWFnZTogPGltZyBzcmM9XCIvaXUucG5nXCIgc3R5bGU9e3t3aWR0aDogMjUsIGhlaWdodDogMzAsIG1hcmdpblJpZ2h0OiA1fX0gLz5cclxuICAgICAgfVxyXG4gICAgXVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogJ1JlYWN0JyxcclxuICAgICAgZXZlbnRzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+QmFjayB0byBIb21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA0MH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9mYXZpY29uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaDogJzVyZW0nLH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM5OTAwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDE1fX0+XHJcbiAgICAgICAgICAgIEJsb2NrY2hhaW5ASVUgQ2FsZW5kYXJcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA0MDAgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8aW1nIGhyZWY9XCJodHRwczovL2xpbmt0ci5lZS9ibG9ja2NoYWluSVVcIlxyXG4gICAgICAgICAgICAgICBzcmM9XCIvbGlua0ljb24ucG5nXCJcclxuICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMwLCBoZWlnaHQ6IDgwfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUwMHB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDQwLH19PlxyXG4gICAgICAgICAgPENhbGVuZGFyXHJcbiAgICAgICAgICAgIGV2ZW50cz17dGhpcy5zdGF0ZS5ldmVudHN9XHJcbiAgICAgICAgICAgIHN0YXJ0QWNjZXNzb3I9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGVuZEFjY2Vzc29yPVwiZW5kXCJcclxuICAgICAgICAgICAgZGVmYXVsdERhdGU9e21vbWVudCgpLnRvRGF0ZSgpfVxyXG4gICAgICAgICAgICBsb2NhbGl6ZXI9e2xvY2FsaXplcn1cclxuICAgICAgICAgICAgY29tcG9uZW50cz17e1xyXG4gICAgICAgICAgICAgIGV2ZW50OiBFdmVudFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBldmVudFByb3BHZXR0ZXI9e2V2ZW50ID0+ICh7XHJcbiAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICM5OTAwMDBcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlnQ2FsZW5kYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=