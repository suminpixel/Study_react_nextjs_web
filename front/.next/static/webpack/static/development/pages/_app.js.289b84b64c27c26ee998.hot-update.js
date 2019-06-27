webpackHotUpdate("static/development/pages/_app.js",{

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

  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:3065/api/user/', signUpData); //api 주소
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
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:3065/api/user/', {
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
//# sourceMappingURL=_app.js.289b84b64c27c26ee998.hot-update.js.map