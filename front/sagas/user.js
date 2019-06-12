import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../reducers/user';
/*

-사가 yield 이펙트 정리-
next : 따로 작성할 필요없고 사가가 알아서 이펙트가 실행될 때 마다 해줌
take : 다른 사가를 기다림.
takeLatest :  해당 사가 실행완료 될때 까지 기다렸다가 액션 실행
put: 사가의 dispatch
fork : 함수를 실행해줌 (비동기호출)
call : 함수를 실행해줌 (동기 호출 ex)콜백 로직이 중요한 로그인 로직 )

*/

//서버에 로그인 요청
function loginAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post('/login');
}

function* login() {
  try {
    // yield call(loginAPI);
    yield delay(2000);
    yield put({ // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
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

function signUpAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post('/login');
}

function* signUp() {
  try {
    // yield call(signUpAPI);
    yield delay(2000);
    throw new Error('에러에러에러');
    yield put({ // put은 dispatch 동일
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

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
  ]);
}
