webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_FOLLOW_REQUEST, LOAD_FOLLOW_SUCCESS, LOAD_FOLLOW_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_REQUEST", function() { return LOAD_FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_SUCCESS", function() { return LOAD_FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_FAILURE", function() { return LOAD_FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_REQUEST", function() { return FOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_SUCCESS", function() { return FOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_FAILURE", function() { return FOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_REQUEST", function() { return UNFOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_SUCCESS", function() { return UNFOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_FAILURE", function() { return UNFOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


/*

initialState 란?
해당 리덕스문서가 사용하는 스테이트 중앙 통제실
웹을 대표하는 모든 상태값을 가지고 있음
해당 스테이트 설계가 가장 중요

*/
var initialState = {
  isLoggedIn: false,
  // 로그인 여부
  isLoggingOut: false,
  // 로그아웃 시도중
  isLoggingIn: false,
  // 로그인 시도중
  logInErrorReason: '',
  // 로그인 실패 사유
  signedUp: false,
  // 회원가입 성공
  isSigningUp: false,
  // 회원가입 시도중
  signUpErrorReason: '',
  // 회원가입 실패 사유
  me: null,
  // 내 정보
  followingList: [],
  // 팔로잉 리스트
  followerList: [],
  // 팔로워 리스트
  userInfo: null // 남의 정보

};
/*
 리듀서 삼종 세트
 REQUEST -  SUCCESS - FAILURE
*/

var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름

var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름

var LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
var LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
var LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';
var FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
var FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
var FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';
var UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
var UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
var UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';
var REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
var REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
var REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    /*
    로그인 
    */
    case LOG_IN_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isLoggingIn: true,
          logInErrorReason: ''
        });
      }

    case LOG_IN_SUCCESS:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isLoggingIn: false,
          isLoggedIn: true,
          me: action.data,
          //로그인 성공했을때 데이터 받기(api callback)
          isLoading: false
        });
      }

    case LOG_IN_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isLoggingIn: false,
          isLoggedIn: false,
          logInErrorReason: action.error,
          me: null
        });
      }

    /*
    로그아웃
    */

    case LOG_OUT_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isLoggingOut: true,
          isLoggedOut: false
        });
      }

    case LOG_OUT_SUCCESS:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isLoggingOut: false,
          isLoggedOut: true,
          me: null
        });
      }

    case LOG_OUT_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isLoggingOut: false,
          isLoggedOut: false,
          logOutErrorReason: action.error
        });
      }

    /*
    회원가입
    */

    case SIGN_UP_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isSigningUp: true,
          isSignedUp: false,
          signUpErrorReason: ''
        });
      }

    case SIGN_UP_SUCCESS:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isSigningUp: false,
          isSignedUp: true
        });
      }

    case SIGN_UP_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isSigningUp: false,
          signUpErrorReason: action.error
        });
      }

    /*
    유저 정보 받기
    */

    case LOAD_USER_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
      }

    case LOAD_USER_SUCCESS:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          me: action.data
        });
      }

    case LOAD_USER_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
      }

    default:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
      }
  }
});

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(login),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked5 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogout),
    _marked6 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logout),
    _marked7 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),
    _marked8 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUser),
    _marked9 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);




/*

-사가 yield 이펙트 정리-
next : 따로 작성할 필요없고 사가가 알아서 이펙트가 실행될 때 마다 해줌
take : 다른 사가를 기다림.
takeLatest :  해당 사가 실행완료 될때 까지 기다렸다가 액션 실행
put: 사가의 dispatch
fork : 함수를 실행해줌 (비동기호출)
call : 함수를 실행해줌 (동기 호출 ex)콜백 로직이 중요한 로그인 로직 )

**
 사가 구성 3종 세트
 api 콜 함수 - 실행(실제 동작) 함수 - watch 함수
**

*/

/*
로그인
*/

function loginAPI(loginData) {
  // 서버에 요청을 보내는 부분
  console.log("saga -callapi : " + typeof loginData); // 데이터타입 object 반환

  console.log("saga -callapi : " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(loginData)); //스트링 반환

  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('//localhost:3065/api/user/login', loginData, {
    withCredentials: true //!!! 쿠키를 받기 위해 반드시 세팅해야

  });
}

function login(action) {
  var result;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('saga - login() :' + action.type);
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loginAPI, action.data);

        case 6:
          result = _context.sent;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            // put은 dispatch 동일
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_IN_SUCCESS"],
            data: result.data // result 내부에 있는 데이터

          });

        case 9:
          _context.next = 16;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          // loginAPI 실패
          console.error(_context.t0);
          _context.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_IN_FAILURE"]
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 11]]);
} //로그인이라는 액션을 기다리고
//LOG_IN 이라는 타입으 액션이 실행될때까지 기다렸다가 login 함수 실행


function watchLogin() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_IN_REQUEST"], login);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/*
회원가입
*/


function watchSignUp() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function signUpAPI(signUpData) {
  // 서버에 요청을 보내는 부분
  console.log("saga -callapi : " + typeof signUpData); // 데이터타입 object 반환

  console.log("saga -callapi : " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(signUpData)); //스트링 반환

  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('//localhost:3065/api/user/', signUpData); //api 주소
}

function signUp(action) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          // yield call(signUpAPI);
          console.log("saga -signup action : " + action.type); //타입반환

          console.log("saga -signup action : " + action.data);
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(signUpAPI, action.data);

        case 5:
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            // put = dispatch
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_SUCCESS"]
          });

        case 7:
          _context4.next = 14;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          // loginAPI 실패
          console.error(_context4.t0);
          _context4.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_FAILURE"],
            error: _context4.t0
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
}
/*
로그아웃
*/


function watchLogout() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogout$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_REQUEST"], logout);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function logout(action) {
  var _result;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logout$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          console.log('saga - login() :' + action.type);
          _context6.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 4:
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(logoutAPI, action.data);

        case 6:
          _result = _context6.sent;
          _context6.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            // put은 dispatch 동일
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_SUCCESS"],
            data: _result.data // result 내부에 있는 데이터

          });

        case 9:
          _context6.next = 16;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          // loginAPI 실패
          console.error(_context6.t0);
          _context6.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_FAILURE"]
          });

        case 16:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 11]]);
}

function logoutAPI() {
  // 서버에 요청을 보내는 부분
  console.log("saga -callapi : logout");
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('//localhost:3065/api/user/logout', {}, {
    //데이터가 없어도 빈갯
    withCredentials: true //!!! 쿠키를 받기 위해 반드시 세팅해야

  });
}
/*
쿠키를 통해 유저정보 불러오기
*/


function watchLoadUser() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_REQUEST"], loadUser);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function loadUser(action) {
  var _result2;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUser$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          console.log("saga -callapi : loadUser");
          _context8.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loadUserAPI, action.data);

        case 4:
          _result2 = _context8.sent;
          _context8.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            // put = dispatch
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_SUCCESS"],
            data: _result2.data
          });

        case 7:
          console.log(_result2.data);
          _context8.next = 15;
          break;

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          // loginAPI 실패
          console.error(_context8.t0);
          _context8.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_FAILURE"],
            error: _context8.t0
          });

        case 15:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 10]]);
}

function loadUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('//localhost:3065/api/user/', {
    withCredentials: true // 쿠키를 받기 위

  }); //get은 데이터를 보내지 않음
}

function userSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

/***/ })

})
//# sourceMappingURL=_app.js.185bb23d25d0d092ba0c.hot-update.js.map