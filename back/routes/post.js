const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');
const passport = require('passport'); //로그인 전
/*

게시글 등록하기

*/

router.post('/', async (req, res, next) => {
    try{
        //body.content 에서 정규표현식으로 hashtag 추출
        const hashtags = req.body.content.match(/#[^\s]+/g);
        const newPost = await db.Post.create(
            {
                content: req.body.content,
            }
        );
        //해시태그 배열을 저장
        //findOrCreate : 찾아서 없으면 넣고 있으면 암것도 안함
        if(hashtags){
            const result = await Promise.all(
                hashtags.map(tag => db.Hashtag.findOrCreate({
                    where: { name: tag.slice(1).toLowerCase() }, //앞에 #을 때고 소문자로 통일
                    userId: req.user.id,
                }))
            );
            console.log(result);
            //post db에 Hasgtaags db 연결해서 만들어줌 (시컬라이즈 기능)
            //add(생성) set(수정) remove(삭제) get(가져오기)
            await newPost.addHashtags(result.map(r => r[0]));
            const fullPost = await db.Post.findOne({
                where: { id: newPost.id },
                include: [{
                    model: db.User,
                }],
            });
            res.json(fullPost);
        }
        res.json(newPost)
    }catch (e) {
        console.error(e);
        next(e)
    }
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