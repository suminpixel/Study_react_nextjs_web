import React from 'react';
import {Button, Icon, List, Card} from "antd";
import NicknameEditForm from '../components/NicknameEditForm';
import {useSelector} from "react-redux";

const Profile = () => {
    return(
        <div>
            <NicknameEditForm />
            <List
                style={{marginBottom : '20px'}}
                grid={{ gutter : 4, xs:2, md:3}}
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width : '100%'}}>더 보기</Button>}
                bordered
                dataSource={['제로초', '바보', '노드버드 오피셜']}
                renderItem =  {item => (
                    <List.Item>
                        <Card action = {[<Icon type="stop" />]}>
                            <Card.Meta description={item}/>
                        </Card>
                    </List.Item>
                )}
            />
            <List
                style={{marginBottom : '20px'}}
                grid={{ gutter : 4, xs:2, md:3}}
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{ width : '100%'}}>더 보기</Button>}
                bordered
                dataSource={['제로초', '바보', '노드버드 오피셜']}
                renderItem =  {item => (
                    <List.Item>
                        <Card action = {[<Icon type="stop" />]}>
                            <Card.Meta description={item}/>
                        </Card>
                    </List.Item>
                )}
            />

        </div>
    );

};

export default Profile;