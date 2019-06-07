import React, { useCallback, useState } from 'react';
import AppLayout from "../components/AppLayout"
import {Input, Button, Form, Checkbox} from 'antd';
import Head from "next/head";
import PropTypes from 'prop-types';


const TextInput = ( { value } ) => {
    return (
        <div>{value}</div>
    );
};

TextInput.PropTypes = {
    value : PropTypes.string,

};
//커스텀 훅 (export : 외부로 보내기)
//만약 이곳에 값이 전달됬을경우
export const useInput = (initValue = null) => {
    //전달된 매개변수를 value, setter로 스테이트 화 시킵니다
    const [value, setter] = useState(initValue);
    //핸들러라는 이름의 변수에  setter의 value를 넣습니다.
    const handler = useCallback((e) => {
        setter(e.target.value);
    },[]);
    return [value, handler];

};

const Signup = () => {

    //훅(스테이트 세팅)
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);


    //이벤트 매서드
    const onSubmit = useCallback((e)=>{
        e.preventDefault();//실제 제출되지않게
        console.log("폼 클릭 이벤트 동작"); //실제 제출시에는 콘솔로그들 지우기 : 웹팩 콘솔로그 없애기
        //검증로직
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(
            {
                id,
                nick,
                password,
                passwordCheck,
                term
            }
        );
    },[password, passwordCheck, term]);


    //입력창이 변경 될 때마다 실행되는 매서드 (스테이트 변경)
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    },[id]);
    const onChangeNick = useCallback((e) => {
        setNick(e.target.value);
    },[nick]);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[password]);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password); // 비번칠때마다 같은지 아닌지 알려주는
        setPasswordCheck(e.target.value);
    },[password]);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
    },[term]);


    //랜더링 리턴
    return(
        <>
                <div>
                    회원ㅣ입
                    <Form onSubmit={onSubmit} style={{ padding:10 }}>
                        <TextInput value="123"/>
                        <div>
                            <label htmlFor = "user-id">아이디</label>
                            <br />
                            <Input name="user-id" value={id} required onChange={onChangeId}/>
                        </div>
                        <div>
                            <label htmlFor = "user-nick">닉네임</label>
                            <br />
                            <Input name="user-nick" value={nick} required onChange={onChangeNick}/>
                        </div>
                        <div>
                            <label htmlFor = "user-password">비밀번호</label>
                            <br />
                            <Input name="user-password" value={password} type="password"  required onChange={onChangePassword}/>
                        </div>
                        <div>
                            <label htmlFor = "user-password-check">비밀번호 재입력</label>
                            <br />
                            <Input name="user-password-check" value={passwordCheck} type="password" required onChange={onChangePasswordCheck}/>
                            {passwordError && <div style={{ color:'red' }}> 비밀번호가 일치하지 않습니다. </div>}
                        </div>
                        <div>
                            <Checkbox name="user-term"  value={term} onChange={onChangeTerm}>
                                약관에 동의합니다.
                            </Checkbox>
                            {termError && <div style={{ color:'red' }}> 약관에 동의하셔야 합니다.</div>}
                        </div>
                        <div style={{ margin:10 }}>
                            <Button type="primary" htmlType="submit">가입하기</Button>
                        </div>
                    </Form>
                </div>
        </>
    )
};

export default Signup