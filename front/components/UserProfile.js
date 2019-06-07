import React from 'react';
import {Button, Icon, Input, List, Form, Card} from "antd";
const dummy = {
    nickname : '제로초',
    post : [],
    followers : [],
    followings : [],
    isLoggedIn : false
};
const UserProfile = () => {
    return(
        <Card
            actions={[
                <div key="twit">포스트 <br/> {dummy.post.length}</div>,
                <div key="following">팔로잉 <br/> {dummy.followings.length}</div>,
                <div key="follower">팔로워 <br/> {dummy.followers.length}</div>,
            ]
            }>
            {/* Avatar 태그 : 썸네일 antd 컴포 */}
            <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
            />
        </Card>
    );

};

export default UserProfile;