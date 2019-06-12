import React from 'react';
import {Button, Icon, Input, List, Form, Card} from "antd";
import {useSelector} from "react-redux";

/*

포스팅(업로드) 포맷
스토어 스테이트 : imagePath <-?
자체 스테이트 : 0

*/
const PostForm = () => {

    const { imagePaths } = useSelector(state=>state.post);

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
                {imagePaths.map((v,i) => {
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