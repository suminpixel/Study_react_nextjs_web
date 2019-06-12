import React from 'react';
import { useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

/*

메인페이지
스토어 스테이트 : 스토어에서 포스트 정보, 유저 정보, 유저 로그인 정보를 가져온다.
스토어 스테이트에 상태에 따라 포스팅리스트 등을 가져와 뿌린다.

*/
const Home = () => {

    //리덕스 스테이트가 가지고 있는 데이터 소환하여 state로
    // const { isLoggedIn } = useSelector(state => state.user.isLoggedIn); -> 잘게 쪼개
    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);


    //이 페이지 출력되자마자 실행되는 이펙트 : useEffect //TODO: 공부용으로 놔둔 함수 지울것
    /*
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

        */
    return (
        <div>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c} post={c} />
                );
            })}
        </div>
    );
    //map: 메인 포스팅들 매핑
};

function* generator() {
    
}
export default Home;