import { all, fork, takeLatest, put, delay, call} from 'redux-saga/effects';
import axios from 'axios';
import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from '../reducers/post';
import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_MAIN_POSTS_REQUEST,
    LOAD_MAIN_POSTS_SUCCESS,
} from '../reducers/post';
/*
 사가 구성 3종 세트
 api 콜 함수 - 실행(실제 동작) 함수 - watch 함수
*/

axios.default.baseURL = 'http://localhost:3065/api';

function addPostAPI(postData) {
    console.log('add post api: '+ postData) ; //유저정보 없음
    return axios.post('http://localhost:3065/api/post', postData,{
        withCredentials: true //로그인한 사람만 작성 가능하므로 쿠키로 인증 필요
    })
}

function* addPost(action) {
    try {
        console.log('add post saga data: '+ action.data.content) ; //유저정보 없음
        const result = yield call(addPostAPI, action.data);
        yield put({
          type: ADD_POST_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        yield put({
          type: ADD_POST_FAILURE,
          error: e,
        });
    }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
    console.log('watch add post ') ; //유저정보 없음
}

function addCommentAPI() {

}

function* addComment(action) {
  try {
    yield delay(2000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: {
        postId: action.data.postId,
      },
    });
  } catch (e) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: e,
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function loadMainPostsAPI() {
    return axios.get('http://localhost:3065/api/posts');
}

function* loadMainPosts() {
    try {
        const result = yield call(loadMainPostsAPI);
        yield put({
            type: LOAD_MAIN_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        yield put({
            type: LOAD_MAIN_POSTS_FAILURE,
            error: e,
        });
    }
}

function* watchLoadMainPosts() {
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}



export default function* postSaga() {
    yield all([
        fork(watchLoadMainPosts),
        fork(watchAddPost),
        fork(watchAddComment),
    ]);
}