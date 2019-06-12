import React, { useCallback, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';
/*

포스팅(업로드) 포맷
스토어 스테이트 : imagePath <-?
자체 스테이트 : 0

*/
const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);

  useEffect(() => {
    setText('');
  }, [postAdded === true]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        text,
      },
    });
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onSubmit={onSubmitForm}>{/* 인코딩 타입 : 파일, 이미지 업로드  */}
      <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText} />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
      </div>

      {/* 미리보기 이미지 매핑 */}
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
