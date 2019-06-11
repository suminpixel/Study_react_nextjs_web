webpackHotUpdate("static/development/pages/index.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: intialState, LOG_IN, LOG_OUT, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intialState", function() { return intialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN", function() { return LOG_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var intialState = {
  //초기 스테이트
  isLoggedIn: false,
  user: {
    nickname: null,
    post: [],
    followers: [],
    followings: []
  }
}; //api로 받아올 더미 유저

var dummyUser = {
  nickname: '홍길동',
  post: [],
  followers: [],
  followings: [],
  isLoggedIn: false //액션세

};
var LOG_IN = 'LOG_IN'; //액션의 이름

var LOG_OUT = 'LOG_OUT'; //액션의 이름

var loginAction = {
  type: LOG_IN,
  data: {
    nickname: '제로초'
  }
};
var logoutAction = {
  type: LOG_OUT
}; //리듀서 세

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN:
      {
        //만약 액션타입이 로그인 액션이면...
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          //다음스테이트를 이렇게 같이 세탕한다. 스프레드 문법 : 새 객체를 새ㅔㅇ성해야 불변성 이전 객체와 차이점을 알 수 있
          isLoggedIn: true,
          user: dummyUser //user: action.data,

        });
      }

    case LOG_OUT:
      {
        //만약 액션타입이 로그아웃이면...
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          //다음스테이트를 이렇게 같이 세탕한
          isLoggedIn: false,
          user: null
        });
      }

    default:
      {
        return {
          state: state
        };
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=index.js.49790368227ebdad24bd.hot-update.js.map