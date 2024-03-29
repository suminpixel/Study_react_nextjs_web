import React, {useCallback} from 'react';
import {Button, Icon, Input, List, Form, Card, Avatar} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {LOG_OUT_REQUEST} from '../reducers/user'

/*

유저 프로필 포맷
스토어 스테이트 : userInfo
자체 스테이트 : 0
디스패치 : 로그아웃 액션

*/
const UserProfile = () => {

    const {me} = useSelector(state=>state.user);
    const dispatch = useDispatch();

    //로그아웃버튼 클릭 //다른 컴포넌트에 state 내려보내는것은 무조건 유즈콜백
    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    return(
        <Card
            actions={[
                <div key="twit">포스트 <br/> {me.post.length}</div>,
                <div key="following">팔로잉 <br/> {me.followings.length}</div>,
                <div key="follower">팔로워 <br/> {me.followers.length}</div>,
            ]
            }>
            {/* Avatar 태그 : 썸네일 antd 컴포 */}
            <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogout}>로그아웃 </Button>
        </Card>
    );

};

export default UserProfile;