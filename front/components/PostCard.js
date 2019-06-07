import React from 'react';
import {Button, Icon, Input, List, Form, Card, Avatar} from "antd";
import PropTypes from 'prop-types';

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
const PostCard= ( {post} ) => {
    return(
        <Card
            key={+post.createdAt}
            cover={post.img && <img alt="example" src={post.img} />}
            actions={[
                <Icon type="retweet" key="retweet"/>,
                <Icon type="heart" key="heart"/>,
                <Icon type="message" key="message"/>,
                <Icon type="ellipsis" key="ellipsis"/>,
            ]} extra={<Button>팔로우</Button>}>
            <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                descrption={post.content}/>
        </Card>
    );

};

PostCard.propTypes = {
    post:PropTypes.shape(
        {
            User: PropTypes.object,
            content : PropTypes.string,
            img : PropTypes.string,
            createdAt: PropTypes.object
        }
    )
};
export default PostCard;