import React from 'react';
import {Button, Icon, Input, List, Form, Card} from "antd";

const NicknameEditForm = () => {
    return(
        <Form style={{}}>
            <Input addonBefore="닉네임" />
            <Button type="primary">수정</Button>
        </Form>
    );

};

export default NicknameEditForm;