import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../pages/signup'; // TODO: util 폴더로 옮기기
import { LOG_IN_REQUEST } from '../reducers/user';
/*

로그인 폼
스토어 스테이트 : 0
자체 스테이트 : id, pw, onChangeId, onChangePW
콜백 함수 : 온서브밋폼
디스패치 액션 : 로그인액션


*/
const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const { isLoggingIn } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: LOG_IN_REQUEST,
            data: {
                id, password,
            },
        });
    }, [id, password]);


    return (
        <Form onSubmit = {onSubmitForm}>
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
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>

    );
};


export default LoginForm;