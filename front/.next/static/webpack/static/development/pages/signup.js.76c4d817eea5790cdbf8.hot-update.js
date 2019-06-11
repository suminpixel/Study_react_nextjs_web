webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "/Users/suminlee/PhpstormProjects/reactSNS/front/components/UserProfile.js";





var UserProfile = function UserProfile() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector.user;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(); //로그아웃버튼 클릭

  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["logoutAction"]);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "twit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "\uD3EC\uC2A4\uD2B8 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), " ", user.post.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "following",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "\uD314\uB85C\uC789 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), " ", user.followings.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "follower",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "\uD314\uB85C\uC6CC ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), " ", user.followers.length)],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, user.nickname[0]),
    title: user.nickname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\uB85C\uADF8\uC544\uC6C3 "));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ })

})
//# sourceMappingURL=signup.js.76c4d817eea5790cdbf8.hot-update.js.map