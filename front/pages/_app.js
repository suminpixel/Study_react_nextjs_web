import React from 'react'
import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import PropTypes from 'prop-types';
//리덕스
import { createStore } from 'redux';
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
//그냥 외울것 리액트에 스토어를 세팅하는것
export default withRedux((initialState, option)=>{
    const store = createStore(reducer, initialState); //루트스토어의 리듀서를 넣어줄 것
    //이 위치에 스토어 커스터마이징 가능
    return store;
})(NodeBird);