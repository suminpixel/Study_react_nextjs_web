import React from 'react'
import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import PropTypes from 'prop-types';
//리덕스
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import withRedux from 'next-redux-wrapper'

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
NodeBird.propTypes = {
    Compoent : PropTypes.element,
    store : PropTypes.object,
};

//리액트에 스토어를 세팅 !!! 그냥 외울것
export default withRedux((initialState, options)=>{

    //리덕스 미들웨어 정의 (리덕스에 없는 기능을 추가하고 싶을 때) ex)리덕스 데브 툴즈
    const middlewares = [];
    //여러 미들웨어 끼리 합성(compose) !!! 그냥 외울것
    const enhancer = compose(applyMiddleware(...middlewares),
            typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );

    //루트스토어의 리듀서를 넣어줄 것
    const store = createStore(reducer, initialState, enhancer);
    //이 위치에 스토어 커스터마이징 가능
    return store;
})(NodeBird);