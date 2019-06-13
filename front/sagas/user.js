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

**
 사가 구성 3종 세트
 api 콜 함수 - 실행(실제 동작) 함수 - watch 함수
**

*/

//서버에 로그인 요청
function loginAPI() {

  return axios.post('/login');
}

function* login(action) {
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

function signUpAPI(signUpData) {
  // 서버에 요청을 보내는 부분
  return axios.post('//localhost:3065/api/user/', signUpData); //api 주소
}

function* signUp(action) {
  try {
    // yield call(signUpAPI);
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

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
  ]);
}
