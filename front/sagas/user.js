import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../reducers/user';
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
  console.log("saga -callapi : " + typeof(loginData)); // 데이터타입 object 반환
  console.log("saga -callapi : " + JSON.stringify(loginData)); //스트링 반환
  return axios.post('//localhost:3065/api/user/login', loginData, {
    withCredentials: true, //!!! 쿠키를 받기 위해 반드시 세팅해야
  });
}


function* login(action) {
  try {
    console.log('saga - login() :' + action.type);
    yield delay(1000);
    const result = yield call(loginAPI, action.data);
    yield put({ // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
      data: result.data // result 내부에 있는 데이터
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}
//로그인이라는 액션을 기다리고
//LOG_IN 이라는 타입으 액션이 실행될때까지 기다렸다가 login 함수 실행
function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}


/*
회원가입
*/
function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}
function signUpAPI(signUpData) {
  // 서버에 요청을 보내는 부분
  console.log("saga -callapi : " + typeof(signUpData)); // 데이터타입 object 반환
  console.log("saga -callapi : " + JSON.stringify(signUpData)); //스트링 반환
  return axios.post('http://localhost:3065/api/user/', signUpData); //api 주소
}

function* signUp(action) {

  try {
    // yield call(signUpAPI);
    console.log("saga -signup action : " + action.type); //타입반환
    console.log("saga -signup action : " + action.data);
    yield call(signUpAPI, action.data); //sinUpAPI함수에 action.data를 인자로 넣는다.
    //throw new Error('에러!'); //일부러 에러내기
    yield put({ // put = dispatch
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    });
  }
}



/*
로그아웃
*/
function* watchLogout() {
  yield takeEvery(LOG_OUT_REQUEST, logout);
}

function* logout(action) {
  try {
    console.log('saga - login() :' + action.type);
    yield delay(1000);
    const result = yield call(logoutAPI, action.data);
    yield put({ // put은 dispatch 동일
      type: LOG_OUT_SUCCESS,
      data: result.data // result 내부에 있는 데이터
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
    });
  }
}

function logoutAPI() {
  // 서버에 요청을 보내는 부분
  console.log("saga -callapi : logout");
  return axios.post('//localhost:3065/api/user/logout', {}, {//데이터가 없어도 빈갯
    withCredentials: true, //!!! 쿠키를 받기 위해 반드시 세팅해야
  });
}
/*
쿠키를 통해 유저정보 불러오기
*/

function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function* loadUser(action) {
  try {
    console.log("saga -callapi : loadUser");
    const result = yield call(loadUserAPI, action.data); //sinUpAPI함수에 action.data를 인자로 넣는다.
    //throw new Error('에러!'); //일부러 에러내기
    yield put({ // put = dispatch
      type: LOAD_USER_SUCCESS,
      data: result.data
    });
    console.log(result.data);
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
    });
  }
}

function loadUserAPI() {
    return axios.get('http://localhost:3065/api/user/', {
        withCredentials: true // 쿠키를 받기 위
    }); //get은 데이터를 보내지 않음
}


export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchLoadUser),
    fork(watchSignUp),
  ]);
}
