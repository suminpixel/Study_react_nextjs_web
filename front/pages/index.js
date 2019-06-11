import React, {useState, useEffect} from 'react';
import {Form, Input, Button , Card, Icon, Avatar} from 'antd';
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {LOG_IN, logoutAction} from "../reducers/user";


const Home = () => {

    //리덕스 스테이트가 가지고 있는 데이터 소환하여 state로
    // const { isLoggedIn } = useSelector(state => state.user.isLoggedIn); -> 잘게 쪼개
    const { mainPosts } = useSelector(state => state.post);

    //액션을 리덕스 훅스 문법으로 디스팻치하는 방법
    const dispatch = useDispatch();
    //스테이트 가져옴
    const {isLoggedIn, user} = useSelector (state => state.user); //리덕스 스토어 (index.js)전체스테이트에서 유저를 가져와라
    console.log(user);
    useEffect(()=> {
            dispatch(
                {
                    type : LOG_IN,
                    data:{
                        nickname:'홍길동'
                    },
                }
            );
            dispatch(logoutAction);

        }, []);
    return (
        <div>
            {user ? <div>로그인 했습니다 {user.nickname}</div> : <div>로그아웃 했습니다. </div>}
            {/* 포스팅 입력 폼  */}
            {isLoggedIn && <PostForm/>}
            {/* 메인 포스트 매핑  */}
            {mainPosts.map((c) => {
                return(
                    <PostCard key={c} post={c}/>
                )
          })}
        </div>
    );
};

export default Home;