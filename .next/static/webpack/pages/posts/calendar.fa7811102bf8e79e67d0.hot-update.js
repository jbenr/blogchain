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
          width: 370
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }
      }), __jsx("a", {
        href: "https://linktr.ee/blockchainIU",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      }, __jsx("img", {
        src: "/linkIcon.png",
        style: {
          width: '20rem',
          height: '3rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }))), __jsx("div", {
        style: {
          height: '500pt',
          marginLeft: 40,
          marginRight: 40
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
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
          lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOlsibG9jYWxpemVyIiwibW9tZW50TG9jYWxpemVyIiwibW9tZW50IiwiRXZlbnQiLCJldmVudCIsInBvcG92ZXJDbGlja1Jvb3RDbG9zZSIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY29sb3IiLCJpbWFnZSIsIkJpZ0NhbGVuZGFyIiwibm93IiwiRGF0ZSIsImV2ZW50cyIsImlkIiwic3RhcnQiLCJlbmQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJzdGF0ZSIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiaGVpZ2giLCJ0ZXh0QWxpZ24iLCJ0b0RhdGUiLCJzdHlsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDBFQUFlLENBQUNDLDZDQUFELENBQWpDOztBQUVBLFNBQVNDLEtBQVQsT0FBMEI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQ3hCLE1BQUlDLHFCQUFxQixHQUN2QixNQUFDLHdEQUFEO0FBQ0UsTUFBRSxFQUFDLGtDQURMO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxLQURIO0FBRUxDLHFCQUFlLEVBQUUsU0FGWjtBQUdMQyxrQkFBWSxFQUFFLEVBSFQ7QUFJTEMsYUFBTyxFQUFFLENBSko7QUFLTEMsWUFBTSxFQUFFLGlCQUxIO0FBTUxDLGtC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LGlCQUFTLEVBQUV2QyxTQUxiO0FBTUUsa0JBQVUsRUFBRTtBQUNWSSxlQUFLLEVBQUVEO0FBREcsU0FOZDtBQVNFLHVCQUFlLEVBQUUseUJBQUFDLEtBQUs7QUFBQSxpQkFBSztBQUN6Qm9DLGlCQUFLLEVBQUU7QUFDTGpDLDZCQUFlLEVBQUUsU0FEWjtBQUVMRyxvQkFBTSxFQUFFO0FBRkg7QUFEa0IsV0FBTDtBQUFBLFNBVHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQXpCRixDQURGO0FBZ0REOzs7O0VBN0d1QitCLCtDOztBQWdIWHJCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL2NhbGVuZGFyLmZhNzgxMTEwMmJmOGU3OWU2N2QwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBDYWxlbmRhciwgbW9tZW50TG9jYWxpemVyIH0gZnJvbSAncmVhY3QtYmlnLWNhbGVuZGFyJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7T3ZlcmxheX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtPdmVybGF5VHJpZ2dlcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtQb3BvdmVyfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgbG9jYWxpemVyID0gbW9tZW50TG9jYWxpemVyKG1vbWVudCk7XHJcblxyXG5mdW5jdGlvbiBFdmVudCh7IGV2ZW50IH0pIHtcclxuICBsZXQgcG9wb3ZlckNsaWNrUm9vdENsb3NlID0gKFxyXG4gICAgPFBvcG92ZXJcclxuICAgICAgaWQ9XCJwb3BvdmVyLXRyaWdnZXItY2xpY2stcm9vdC1jbG9zZVwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgekluZGV4OiAxMDAwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMixcclxuICAgICAgfX0+XHJcbiAgICAgICAgICA8c3Ryb25nPntldmVudC50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvUG9wb3Zlcj5cclxuICApO1xyXG5cclxuICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE92ZXJsYXlUcmlnZ2VyIGlkPVwiaGVscFwiIHRyaWdnZXI9XCJjbGlja1wiIHJvb3RDbG9zZSBjb250YWluZXI9e3RoaXN9IHBsYWNlbWVudD1cInRvcFwiIG92ZXJsYXk9e3BvcG92ZXJDbGlja1Jvb3RDbG9zZX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgY29sb3I6ICdibGFjayd9fT5cclxuICAgICAgICAgICAgICB7ZXZlbnQuaW1hZ2V9ICB7ZXZlbnQudGl0bGV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNsYXNzIEJpZ0NhbGVuZGFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZXZlbnRzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIHRpdGxlOiAnVG9kYXknLFxyXG4gICAgICAgICAgc3RhcnQ6IG5vdyxcclxuICAgICAgICAgIGVuZDogbm93LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgZGF0ZSBpczogJyArIChub3cuZ2V0TW9udGgoKSsxKSArICcvJyArIG5vdy5nZXREYXRlKCkgKyAnLycgKyBub3cuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgIGltYWdlOiA8aW1nIHNyYz1cIi9mYXZpY29uLnBuZ1wiIHN0eWxlPXt7d2lkdGg6IDMwLCBoZWlnaHQ6IDMwLCBtYXJnaW5SaWdodDogNX19IC8+XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIDEwMScsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAyMCwgOCwgMTUsIDE3LCAwKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAyMCwgOCwgMTUsIDE4LCAzMCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ludHJvZHVjdGlvbiB0byBCbG9ja2NoYWluQElVIGFuZCBibG9ja2NoYWluIHRlY2hub2xvZ3knLFxyXG4gICAgICAgICAgaW1hZ2U6IDxpbWcgc3JjPVwiL2Zhdmljb24ucG5nXCIgc3R5bGU9e3t3aWR0aDogMzAsIGhlaWdodDogMzAsIG1hcmdpblJpZ2h0OiA1fX0gLz5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICB0aXRsZTogJ0NvdXJzZXMgQmVnaW4nLFxyXG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMjAsIDgsIDIxLCAxNywgMCksXHJcbiAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMjAsIDgsIDIxLCAxOCwgMCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZW5hdGl2ZSBzdGFydCB0byBvdXIgQnVzaW5lc3MgQXBwbGljYXRpb25zIGFuZCBEZXZlbG9wbWVudCBjb3Vyc2VzLiBMZWFybiBtb3JlIGFib3V0IG91ciBjb3Vyc2VzIGF0IEJsb2NrY2hhaW4xMDEgb24gU2VwdGVtYmVyIDE1dGghXCIsXHJcbiAgICAgICAgICBpbWFnZTogPGltZyBzcmM9XCIvZmF2aWNvbi5wbmdcIiBzdHlsZT17e3dpZHRoOiAzMCwgaGVpZ2h0OiAzMCwgbWFyZ2luUmlnaHQ6IDV9fSAvPlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBpZDogOTksXHJcbiAgICAgICAgICB0aXRsZTogJ1NlbWVzdGVyIEJlZ2lucycsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAyMCwgNywgMjQpLFxyXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgyMDIwLCA3LCAyNCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1N0YXJ0IG9mIEZhbGwgMjAyMCBTZW1lc3Rlci4nLFxyXG4gICAgICAgICAgaW1hZ2U6IDxpbWcgc3JjPVwiL2l1LnBuZ1wiIHN0eWxlPXt7d2lkdGg6IDI1LCBoZWlnaHQ6IDMwLCBtYXJnaW5SaWdodDogNX19IC8+XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIGlkOiAxMDAsXHJcbiAgICAgICAgICB0aXRsZTogJ1RoYW5rc2dpdmluZyBCcmVhaycsXHJcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAyMCwgMTAsIDIzKSxcclxuICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAyMCwgMTAsIDI4KSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhhbmtzZ2l2aW5nIEJyZWFrLiBObyBDbGFzc2VzLicsXHJcbiAgICAgICAgICBpbWFnZTogPGltZyBzcmM9XCIvaXUucG5nXCIgc3R5bGU9e3t3aWR0aDogMjUsIGhlaWdodDogMzAsIG1hcmdpblJpZ2h0OiA1fX0gLz5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEwMSxcclxuICAgICAgICAgIHRpdGxlOiAnRmluYWwgRXhhbXMnLFxyXG4gICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMjAsIDExLCAxNCksXHJcbiAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMjAsIDExLCAxOSksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGaW5hbCBleGFtcyBhbmQgZW5kIG9mIEZhbGwgMjAyMCBzZW1lc3RlclwiLFxyXG4gICAgICAgICAgaW1hZ2U6IDxpbWcgc3JjPVwiL2l1LnBuZ1wiIHN0eWxlPXt7d2lkdGg6IDI1LCBoZWlnaHQ6IDMwLCBtYXJnaW5SaWdodDogNX19IC8+XHJcbiAgICAgIH1cclxuICAgIF1cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICdSZWFjdCcsXHJcbiAgICAgIGV2ZW50c1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPkJhY2sgdG8gSG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNDB9fT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvZmF2aWNvbi5wbmdcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2g6ICc1cmVtJyx9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjOTkwMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxNX19PlxyXG4gICAgICAgICAgICBCbG9ja2NoYWluQElVIENhbGVuZGFyXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMzcwIH19PjwvZGl2PlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbGlua3RyLmVlL2Jsb2NrY2hhaW5JVVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9saW5rSWNvbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjByZW0nLCBoZWlnaHQ6ICczcmVtJ319IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1MDBwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA0MCx9fT5cclxuICAgICAgICAgIDxDYWxlbmRhclxyXG4gICAgICAgICAgICBldmVudHM9e3RoaXMuc3RhdGUuZXZlbnRzfVxyXG4gICAgICAgICAgICBzdGFydEFjY2Vzc29yPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBlbmRBY2Nlc3Nvcj1cImVuZFwiXHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRlPXttb21lbnQoKS50b0RhdGUoKX1cclxuICAgICAgICAgICAgbG9jYWxpemVyPXtsb2NhbGl6ZXJ9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcclxuICAgICAgICAgICAgICBldmVudDogRXZlbnRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZXZlbnRQcm9wR2V0dGVyPXtldmVudCA9PiAoe1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjOTkwMDAwXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpZ0NhbGVuZGFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9