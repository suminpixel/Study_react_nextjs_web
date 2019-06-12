import React from 'react';
import {Button, Icon, Input, List, Form, Card, Avatar} from "antd";
import PropTypes from 'prop-types';
/*

포스트 카드 1개 포맷
스토어 스테이트 : postInfo (userid, img, nickname, content) <-부모 컴포로 부터 받음
자체 스테이트 : 0



*/
const PostCard= ( {post} ) => {

    const { me } = useSelector(state => state.user);

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