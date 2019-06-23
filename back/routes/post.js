const express = require('express');
const router = express.Router(); //express 에서 제공하는 라우터 정리 객체

router.post('/', (req, res) => {
    // 게시글 등록하기
    return 'hello';
});
router.post('/images', (req, res) => {
    // 이미지 등록하
});
router.get('/', (req, res) => { //get: 웹사이트 접속 요청하는 restapi 규칙중 하나
    res.send('Hello, server! ');
});
// 라우터 : app.post('/api/post/images',
// 컨트롤러 : (req, res) => {


module.exports = router;