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
      description: "Tenative start to our Business Applications and Development courses. Learn more about our courses on at Blockchain101 on September 15th!",
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
      }, "Blockchain@IU Calendar")), __jsx("div", {
        style: {
          height: '500pt',
          marginLeft: 40,
          marginRight: 40
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
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
          lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOlsibG9jYWxpemVyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50IiwiRXZlbnQiLCJldmVudCIsInBvcG92ZXJDbGlja1Jvb3RDbG9zZSIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY29sb3IiLCJpbWFnZSIsIkJpZ0NhbGVuZGFyIiwibm93IiwiRGF0ZSIsImV2ZW50cyIsImlkIiwic3RhcnQiLCJlbmQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJzdGF0ZSIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiaGVpZ2giLCJ0ZXh0QWxpZ24iLCJ0b0RhdGUiLCJzdHlsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDBFQUFlLENBQUNDLDZDQUFELENBQWpDOztBQUVBLFNBQVNDLEtBQVQsT0FBMEI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQ3hCLE1BQUlDLHFCQUFxQixHQUN2QixNQUFDLHdEQUFEO0FBQ0UsTUFBRSxFQUFDLGtDQURMO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxLQURIO0FBRUxDLHFCQUFlLEVBQUUsU0FGWjtBQUdMQyxrQkFBWSxFQUFFLEVBSFQ7QUFJTEMsYUFBTyxFQUFFLENBSko7QUFLTEMsWUFBTSxFQUFFLGlCQUxIO0FBTUxDLGtCQUFZLEVBQUU7QUFOVCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNQLEtBQUssQ0FBQ1EsS0FBZixDQVZOLEVBV007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhOLEVBWU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpOLEVBYU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJUixLQUFLLENBQUNTLFdBQVYsQ0FiTixDQURGOztBQWtCQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlYLEtBQVo7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFnQixNQUFFLEVBQUMsTUFBbkI7QUFBMEIsV0FBTyxFQUFDLE9BQWxDO0FBQTBDLGFBQVMsTUFBbkQ7QUFBb0QsYUFBUyxFQUFFLElBQS9EO0FBQXFFLGFBQVMsRUFBQyxLQUEvRTtBQUFxRixXQUFPLEVBQUVDLHFCQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ1csYUFBTyxFQUFFLE1BQVY7QUFBa0JDLG1CQUFhLEVBQUUsS0FBakM7QUFBd0NDLFdBQUssRUFBRTtBQUEvQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2QsS0FBSyxDQUFDZSxLQURYLFFBQ29CZixLQUFLLENBQUNRLEtBRDFCLENBREYsQ0FERixDQURGLENBREY7QUFXRDs7S0EvQlFULEs7O0lBaUNIaUIsVzs7Ozs7QUFDSix5QkFBYztBQUFBOztBQUFBOztBQUNaO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBWjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxDQUNiO0FBQ0lDLFFBQUUsRUFBRSxDQURSO0FBRUlaLFdBQUssRUFBRSxPQUZYO0FBR0lhLFdBQUssRUFBRUosR0FIWDtBQUlJSyxTQUFHLEVBQUVMLEdBSlQ7QUFLSVIsaUJBQVcsRUFBRSxtQkFBbUJRLEdBQUcsQ0FBQ00sUUFBSixLQUFlLENBQWxDLElBQXVDLEdBQXZDLEdBQTZDTixHQUFHLENBQUNPLE9BQUosRUFBN0MsR0FBNkQsR0FBN0QsR0FBbUVQLEdBQUcsQ0FBQ1EsV0FBSixFQUxwRjtBQU1JVixXQUFLLEVBQUU7QUFBSyxXQUFHLEVBQUMsY0FBVDtBQUF3QixhQUFLLEVBQUU7QUFBQ1csZUFBSyxFQUFFLEVBQVI7QUFBWUMsZ0JBQU0sRUFBRSxFQUFwQjtBQUF3QkMscUJBQVcsRUFBRTtBQUFyQyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlgsS0FEYSxFQVNiO0FBQ0lSLFFBQUUsRUFBRSxDQURSO0FBRUlaLFdBQUssRUFBRSxnQkFGWDtBQUdJYSxXQUFLLEVBQUUsSUFBSUgsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLENBSFg7QUFJSUksU0FBRyxFQUFFLElBQUlKLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixFQUExQixDQUpUO0FBS0lULGlCQUFXLEVBQUUseURBTGpCO0FBTUlNLFdBQUssRUFBRTtBQUFLLFdBQUcsRUFBQyxjQUFUO0FBQXdCLGFBQUssRUFBRTtBQUFDVyxlQUFLLEVBQUUsRUFBUjtBQUFZQyxnQkFBTSxFQUFFLEVBQXBCO0FBQXdCQyxxQkFBVyxFQUFFO0FBQXJDLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOWCxLQVRhLEVBaUJiO0FBQ0lSLFFBQUUsRUFBRSxDQURSO0FBRUlaLFdBQUssRUFBRSxlQUZYO0FBR0lhLFdBQUssRUFBRSxJQUFJSCxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsQ0FBMUIsQ0FIWDtBQUlJSSxTQUFHLEVBQUUsSUFBSUosSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLENBSlQ7QUFLSVQsaUJBQVcsRUFBRSwwSUFMakI7QUFNSU0sV0FBSyxFQUFFO0FBQUssV0FBRyxFQUFDLGNBQVQ7QUFBd0IsYUFBSyxFQUFFO0FBQUNXLGVBQUssRUFBRSxFQUFSO0FBQVlDLGdCQUFNLEVBQUUsRUFBcEI7QUFBd0JDLHFCQUFXLEVBQUU7QUFBckMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5YLEtBakJhLEVBeUJiO0FBQ0lSLFFBQUUsRUFBRSxFQURSO0FBRUlaLFdBQUssRUFBRSxpQkFGWDtBQUdJYSxXQUFLLEVBQUUsSUFBSUgsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBSFg7QUFJSUksU0FBRyxFQUFFLElBQUlKLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixDQUpUO0FBS0lULGlCQUFXLEVBQUUsOEJBTGpCO0FBTUlNLFdBQUssRUFBRTtBQUFLLFdBQUcsRUFBQyxTQUFUO0FBQW1CLGFBQUssRUFBRTtBQUFDVyxlQUFLLEVBQUUsRUFBUjtBQUFZQyxnQkFBTSxFQUFFLEVBQXBCO0FBQXdCQyxxQkFBVyxFQUFFO0FBQXJDLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOWCxLQXpCYSxFQWlDYjtBQUNJUixRQUFFLEVBQUUsR0FEUjtBQUVJWixXQUFLLEVBQUUsb0JBRlg7QUFHSWEsV0FBSyxFQUFFLElBQUlILElBQUosQ0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQixFQUFuQixDQUhYO0FBSUlJLFNBQUcsRUFBRSxJQUFJSixJQUFKLENBQVMsSUFBVCxFQUFlLEVBQWYsRUFBbUIsRUFBbkIsQ0FKVDtBQUtJVCxpQkFBVyxFQUFFLGlDQUxqQjtBQU1JTSxXQUFLLEVBQUU7QUFBSyxXQUFHLEVBQUMsU0FBVDtBQUFtQixhQUFLLEVBQUU7QUFBQ1csZUFBSyxFQUFFLEVBQVI7QUFBWUMsZ0JBQU0sRUFBRSxFQUFwQjtBQUF3QkMscUJBQVcsRUFBRTtBQUFyQyxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlgsS0FqQ2EsRUF5Q2I7QUFDSVIsUUFBRSxFQUFFLEdBRFI7QUFFSVosV0FBSyxFQUFFLGFBRlg7QUFHSWEsV0FBSyxFQUFFLElBQUlILElBQUosQ0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQixFQUFuQixDQUhYO0FBSUlJLFNBQUcsRUFBRSxJQUFJSixJQUFKLENBQVMsSUFBVCxFQUFlLEVBQWYsRUFBbUIsRUFBbkIsQ0FKVDtBQUtJVCxpQkFBVyxFQUFFLDJDQUxqQjtBQU1JTSxXQUFLLEVBQUU7QUFBSyxXQUFHLEVBQUMsU0FBVDtBQUFtQixhQUFLLEVBQUU7QUFBQ1csZUFBSyxFQUFFLEVBQVI7QUFBWUMsZ0JBQU0sRUFBRSxFQUFwQjtBQUF3QkMscUJBQVcsRUFBRTtBQUFyQyxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlgsS0F6Q2EsQ0FBZjtBQWtEQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsVUFBSSxFQUFFLE9BREs7QUFFWFgsWUFBTSxFQUFOQTtBQUZXLEtBQWI7QUFyRFk7QUF5RGI7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FERixFQUlFO0FBQUssYUFBSyxFQUFFO0FBQUVQLGlCQUFPLEVBQUUsTUFBWDtBQUNFQyx1QkFBYSxFQUFFLEtBRGpCO0FBRUVULHNCQUFZLEVBQUUsRUFGaEI7QUFHRTJCLG1CQUFTLEVBQUUsRUFIYjtBQUlFQyxvQkFBVSxFQUFFO0FBSmQsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0U7QUFDSSxXQUFHLEVBQUMsY0FEUjtBQUVJLGFBQUssRUFBRTtBQUFFTixlQUFLLEVBQUUsTUFBVDtBQUNFTyxlQUFLLEVBQUU7QUFEVCxTQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMRixFQVVFO0FBQUksYUFBSyxFQUFFO0FBQUNDLG1CQUFTLEVBQUUsUUFBWjtBQUNDcEIsZUFBSyxFQUFFLFNBRFI7QUFFQ2tCLG9CQUFVLEVBQUU7QUFGYixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBVkYsQ0FKRixFQW9CRTtBQUFLLGFBQUssRUFBRTtBQUFFTCxnQkFBTSxFQUFFLE9BQVY7QUFDRUssb0JBQVUsRUFBRSxFQURkO0FBRUVKLHFCQUFXLEVBQUU7QUFGZixTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHRSxNQUFDLDJEQUFEO0FBQ0UsY0FBTSxFQUFFLEtBQUtDLEtBQUwsQ0FBV1YsTUFEckI7QUFFRSxxQkFBYSxFQUFDLE9BRmhCO0FBR0UsbUJBQVcsRUFBQyxLQUhkO0FBSUUsbUJBQVcsRUFBRXJCLDZDQUFNLEdBQUdxQyxNQUFULEVBSmY7QUFLRSxpQkFBUyxFQUFFdkMsU0FMYjtBQU1FLGtCQUFVLEVBQUU7QUFDVkksZUFBSyxFQUFFRDtBQURHLFNBTmQ7QUFTRSx1QkFBZSxFQUFFLHlCQUFBQyxLQUFLO0FBQUEsaUJBQUs7QUFDekJvQyxpQkFBSyxFQUFFO0FBQ0xqQyw2QkFBZSxFQUFFLFNBRFo7QUFFTEcsb0JBQU0sRUFBRTtBQUZIO0FBRGtCLFdBQUw7QUFBQSxTQVR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FwQkYsQ0FERjtBQTJDRDs7OztFQXhHdUIrQiwrQzs7QUEyR1hyQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9jYWxlbmRhci45Y2UzZTY4YTZhYzIyNTUzMjRjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQ2FsZW5kYXIsIG1vbWVudExvY2FsaXplciB9IGZyb20gJ3JlYWN0LWJpZy1jYWxlbmRhcic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge092ZXJsYXl9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7T3ZlcmxheVRyaWdnZXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7UG9wb3Zlcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IGxvY2FsaXplciA9IG1vbWVudExvY2FsaXplcihtb21lbnQpO1xyXG5cclxuZnVuY3Rpb24gRXZlbnQoeyBldmVudCB9KSB7XHJcbiAgbGV0IHBvcG92ZXJDbGlja1Jvb3RDbG9zZSA9IChcclxuICAgIDxQb3BvdmVyXHJcbiAgICAgIGlkPVwicG9wb3Zlci10cmlnZ2VyLWNsaWNrLXJvb3QtY2xvc2VcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHpJbmRleDogMTAwMDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTIsXHJcbiAgICAgIH19PlxyXG4gICAgICAgICAgPHN0cm9uZz57ZXZlbnQudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxwPntldmVudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L1BvcG92ZXI+XHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxPdmVybGF5VHJpZ2dlciBpZD1cImhlbHBcIiB0cmlnZ2VyPVwiY2xpY2tcIiByb290Q2xvc2UgY29udGFpbmVyPXt0aGlzfSBwbGFjZW1lbnQ9XCJ0b3BcIiBvdmVybGF5PXtwb3BvdmVyQ2xpY2tSb290Q2xvc2V9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGNvbG9yOiAnYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAge2V2ZW50LmltYWdlfSAge2V2ZW50LnRpdGxlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jbGFzcyBCaWdDYWxlbmRhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGV2ZW50cyA9IFtcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICB0aXRsZTogJ1RvZGF5JyxcclxuICAgICAgICAgIHN0YXJ0OiBub3csXHJcbiAgICAgICAgICBlbmQ6IG5vdyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGRhdGUgaXM6ICcgKyAobm93LmdldE1vbnRoKCkrMSkgKyAnLycgKyBub3cuZ2V0RGF0ZSgpICsgJy8nICsgbm93LmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICBpbWFnZTogPGltZyBzcmM9XCIvZmF2aWNvbi5wbmdcIiBzdHlsZT17e3dpZHRoOiAzMCwgaGVpZ2h0OiAzMCwgbWFyZ2luUmlnaHQ6IDV9fSAvPlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIHRpdGxlOiAnQmxvY2tjaGFpbiAxMDEnLFxyXG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMjAsIDgsIDE1LCAxNywgMCksXHJcbiAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMjAsIDgsIDE1LCAxOCwgMzApLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdJbnRyb2R1Y3Rpb24gdG8gQmxvY2tjaGFpbkBJVSBhbmQgYmxvY2tjaGFpbiB0ZWNobm9sb2d5JyxcclxuICAgICAgICAgIGltYWdlOiA8aW1nIHNyYz1cIi9mYXZpY29uLnBuZ1wiIHN0eWxlPXt7d2lkdGg6IDMwLCBoZWlnaHQ6IDMwLCBtYXJnaW5SaWdodDogNX19IC8+XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgdGl0bGU6ICdDb3Vyc2VzIEJlZ2luJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDIwLCA4LCAyMSwgMTcsIDApLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDIwLCA4LCAyMSwgMTgsIDApLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVGVuYXRpdmUgc3RhcnQgdG8gb3VyIEJ1c2luZXNzIEFwcGxpY2F0aW9ucyBhbmQgRGV2ZWxvcG1lbnQgY291cnNlcy4gTGVhcm4gbW9yZSBhYm91dCBvdXIgY291cnNlcyBvbiBhdCBCbG9ja2NoYWluMTAxIG9uIFNlcHRlbWJlciAxNXRoIVwiLFxyXG4gICAgICAgICAgaW1hZ2U6IDxpbWcgc3JjPVwiL2Zhdmljb24ucG5nXCIgc3R5bGU9e3t3aWR0aDogMzAsIGhlaWdodDogMzAsIG1hcmdpblJpZ2h0OiA1fX0gLz5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDk5LFxyXG4gICAgICAgICAgdGl0bGU6ICdTZW1lc3RlciBCZWdpbnMnLFxyXG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMjAsIDcsIDI0KSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAyMCwgNywgMjQpLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTdGFydCBvZiBGYWxsIDIwMjAgU2VtZXN0ZXIuJyxcclxuICAgICAgICAgIGltYWdlOiA8aW1nIHNyYz1cIi9pdS5wbmdcIiBzdHlsZT17e3dpZHRoOiAyNSwgaGVpZ2h0OiAzMCwgbWFyZ2luUmlnaHQ6IDV9fSAvPlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMTAwLFxyXG4gICAgICAgICAgdGl0bGU6ICdUaGFua3NnaXZpbmcgQnJlYWsnLFxyXG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMjAsIDEwLCAyMyksXHJcbiAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMjAsIDEwLCAyOCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoYW5rc2dpdmluZyBCcmVhay4gTm8gQ2xhc3Nlcy4nLFxyXG4gICAgICAgICAgaW1hZ2U6IDxpbWcgc3JjPVwiL2l1LnBuZ1wiIHN0eWxlPXt7d2lkdGg6IDI1LCBoZWlnaHQ6IDMwLCBtYXJnaW5SaWdodDogNX19IC8+XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAxMDEsXHJcbiAgICAgICAgICB0aXRsZTogJ0ZpbmFsIEV4YW1zJyxcclxuICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDIwLCAxMSwgMTQpLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDIwLCAxMSwgMTkpLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiRmluYWwgZXhhbXMgYW5kIGVuZCBvZiBGYWxsIDIwMjAgc2VtZXN0ZXJcIixcclxuICAgICAgICAgIGltYWdlOiA8aW1nIHNyYz1cIi9pdS5wbmdcIiBzdHlsZT17e3dpZHRoOiAyNSwgaGVpZ2h0OiAzMCwgbWFyZ2luUmlnaHQ6IDV9fSAvPlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiAnUmVhY3QnLFxyXG4gICAgICBldmVudHNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5CYWNrIHRvIEhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDQwfX0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Zhdmljb24ucG5nXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzVyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdoOiAnNXJlbScsfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzk5MDAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTV9fT5cclxuICAgICAgICAgICAgQmxvY2tjaGFpbkBJVSBDYWxlbmRhclxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUwMHB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDQwLH19PlxyXG4gICAgICAgICAgPENhbGVuZGFyXHJcbiAgICAgICAgICAgIGV2ZW50cz17dGhpcy5zdGF0ZS5ldmVudHN9XHJcbiAgICAgICAgICAgIHN0YXJ0QWNjZXNzb3I9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGVuZEFjY2Vzc29yPVwiZW5kXCJcclxuICAgICAgICAgICAgZGVmYXVsdERhdGU9e21vbWVudCgpLnRvRGF0ZSgpfVxyXG4gICAgICAgICAgICBsb2NhbGl6ZXI9e2xvY2FsaXplcn1cclxuICAgICAgICAgICAgY29tcG9uZW50cz17e1xyXG4gICAgICAgICAgICAgIGV2ZW50OiBFdmVudFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBldmVudFByb3BHZXR0ZXI9e2V2ZW50ID0+ICh7XHJcbiAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICM5OTAwMDBcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlnQ2FsZW5kYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=