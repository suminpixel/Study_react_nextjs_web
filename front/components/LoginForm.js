import React, { useCallback, useState } from 'react';
import {Menu, Input, Button, Row, Col, Card, Avatar, Checkbox, Form} from 'antd';
import Link from 'next/link'
import PropTypes from 'prop-types';
import { useInput } from '../pages/signup';

const LoginForm = () => {

    //스테이트
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    //로그인 버튼 클릭
    const onSubmitform = useCallback((e) => {
        e.preventDefault();
        console.log(
            {id, password}
        );
    },[id, password]);


    return (
        <Form onSubmit = {onSubmitform}>
            {/* 로그인 폼 */}
            <div>
                <label htmlFor = "user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor = "user-password">비밀번호</label>
                <br />
                <Input name="user-password" value={password} onChange={onChangePassword} type="password"  />
            </div>
            <div style={{ margin:10 }}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
            </div>
        </Form>

    );
};


export default LoginForm;