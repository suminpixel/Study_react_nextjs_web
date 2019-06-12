import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import rootSaga from '../sagas';


/*

넥스트 js가 가장 처음 뿌려주는 루트 페이지
스토어 프로바이더 세팅,
미들웨어 세팅등을 여기서 한다.
인덱스를 뿌려준다.

----모르으면 외워서 쓸것--------
store 연결
middleware (rootSaga) 연결
-----------------------------

*/
const NodeBird = ( {Component, store} ) => {
    return (
        //스토어 세
        <Provider store={store}>
            <Head>
                <title>Sumin's SNS</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.js"/>
            </Head>
            {/* 바디 영역에 Compoent children 삽입 */}
            <AppLayout>
                {'hello, js'}
                <Component/>
            </AppLayout>
        </Provider>
    );
};

//Compoent 타입 체크
//isRequired 해당 문서에 comonent와 store가 없는 경우 에러메세지 띄워줌
NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
    store: PropTypes.object.isRequired,
};


//리덕스 스토어 세팅 (리덕스 사가 세팅 + 리덕스와 해당 스토어을 연결) !!! 그냥 외울것
const configureStore = (initialState, options)=>{
    const sagaMiddleware = createSagaMiddleware();
    //리덕스 미들웨어 정의 (리덕스에 없는 기능을 추가하고 싶을 때) ex)리덕스 데브 툴즈
    const middlewares = [sagaMiddleware];
    //여러 미들웨어 끼리 합성(compose) !!! 그냥 외울것
    //실제 서비스에서는 노출하지 말것
    const enhancer =
        process.env.NODE_ENV === 'production'
            ?compose(applyMiddleware(...middlewares),)
            :compose(applyMiddleware(...middlewares),
            typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
            );

    //루트스토어의 리듀서를 넣어줄 것
    const store = createStore(reducer, initialState, enhancer);
    //이 위치에 스토어 커스터마이징 가능
    //루트사가 run
    sagaMiddleware.run(rootSaga);
    return store;
};

//withDedux(props)리액트에 리덕스 스토어를 연결해줌 !!! 그냥 외울것
export default withRedux()(configureStore);