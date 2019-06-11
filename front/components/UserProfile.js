import React, {useCallback} from 'react';
import {Button, Icon, Input, List, Form, Card, Avatar} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {logoutAction} from '../reducers/user'

const UserProfile = () => {

    const {user} = useSelector(state=>state.user);
    const dispatch = useDispatch();

    //로그아웃버튼 클릭 //다른 컴포넌트에 state 내려보내는것은 무조건 유즈콜백
    const onLogout = useCallback(()=>{
            dispatch(logoutAction);
        },[]);

    return(
        <Card
            actions={[
                <div key="twit">포스트 <br/> {user.post.length}</div>,
                <div key="following">팔로잉 <br/> {user.followings.length}</div>,
                <div key="follower">팔로워 <br/> {user.followers.length}</div>,
            ]
            }>
            {/* Avatar 태그 : 썸네일 antd 컴포 */}
            <Card.Meta
                avatar={<Avatar>{user.nickname[0]}</Avatar>}
                title={user.nickname}
            />
            <Button onClick={onLogout}>로그아웃 </Button>
        </Card>
    );

};

export default UserProfile;