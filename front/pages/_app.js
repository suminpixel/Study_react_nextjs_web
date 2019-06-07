import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import PropTypes from 'prop-types';

const NodeBird = ( {Component} ) => {
    return (
        <>
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
        </>
    );
};

//Compoent 타입 체크
NodeBird.propTypes = {
    Compoent : PropTypes.element,
};
export default NodeBird;