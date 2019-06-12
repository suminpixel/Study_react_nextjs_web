import { all, fork } from 'redux-saga/effects';
import user from './user';
import post from './post';

//유저사가, 포스트사가를 가져와 바인딩 - 루트사가
export default function* rootSaga() {
    yield all([
        fork(user),
        fork(post),
    ]);
}