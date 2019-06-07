import React from 'react';
import {Button, Icon, Input, List, Form, Card} from "antd";

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

const PostForm = () => {
    return(

        <Form encType="multipart/form-data"> {/* 인코딩 타입 : 파일, 이미지 업로드  */}
            <Input.TextArea maxLength = {140} placeholder="어떤 신기한 일이 있었나요?"/>
            <div>
                <Input type="file" multiple hidden/>
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float : 'right' }} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {/* 이미지 패쓰로 받은것을 매핑  */}
                {dummy.imagePaths.map((v,i) => {
                    return(
                        <div key={v} style={{ display : 'inline-block'}}>
                            <img src={'//localhost:3000' + v } style={{ width : '200px'}} alt={v}/>
                            <Button>제거</Button>
                        </div>
                    )
                })}
            </div>
        </Form>
    );

};

export default PostForm;