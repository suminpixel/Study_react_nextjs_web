import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';
/*

메인페이지
스토어 스테이트 : 스토어에서 포스트 정보, 유저 정보, 유저 로그인 정보를 가져온다.
스토어 스테이트에 상태에 따라 포스팅리스트 등을  가져와 뿌린다.

*/
const Home = () => {

  //리덕스 스토어 스테이트가 가지고 있는 데이터 소환하여 변수화
  const { me } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST,
    });
  }, []);


  return (
    <div>
      {me && <PostForm />}
      {mainPosts.map((c) => {
        return (
          <PostCard key={c} post={c} />
        );
      })}
    </div>
  );
};

export default Home;
