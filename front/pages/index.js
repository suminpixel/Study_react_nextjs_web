import React, {useState, useEffect} from 'react';
import {Form, Input, Button , Card, Icon, Avatar} from 'antd';
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

{/*  TODO 서버에서 받아야할 더미데이터  */}
const dummy={
    isLoggedIn : true,
    imagePaths : [],
    mainPosts : [
        //첫번째 유저의 포스팅
        {
            User:{
                id:1,
                nickname:'제로초',
            },
            content:'첫번 째 게시글',
            img: 'https://i.pinimg.com/originals/d9/82/f4/d982f4ec7d06f6910539472634e1f9b1.png'
        }
    ],
};
const Home = () => {
    return (
        <div>
            {/* 포스팅 입력 폼  */}
            {dummy.isLoggedIn && <PostForm/>}
            {/* 메인 포스트 매핑  */}
            {dummy.mainPosts.map((c) => {
                return(
                    <PostCard key={c} post={c}/>
                )
          })}
        </div>
    );
};

export default Home;