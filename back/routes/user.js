const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');


/*
api 라우터 관련 문서

라우터란? 다른 서버가 내 서버에 접근 할 수 있도록 열어둔 창구
api란? 다른 서비스가 내 서비스의 기능을 실행할 수 있도록 열어준 창구

*/
//로그인 라우터 //TODO: 깃헙에서 불러오기

//사용자 등록(회원가입) 라우터
router.post('/', async (req, res) => {
    //scynce 비동기 처리를 위해 try catch 문 사용 내 정보 가져오는
    try{
        //console.log("라우터가 받은 req :" + req); //해당 콘솔 코드 때문에 아래 코드가 동작 안함
        const exUser = await db.User.findOne({
            where: {
                userId: req.body.userId, //유저아이디 중복체크
            }
        });
        if(exUser){
            //exUser에 값이 들어오면 어떤 코드들을 체크해서 반환
            //에러코드는 프론트와 서버간의 규약
            return res.status(403).send('이미 사용중인 아이디 입니다.');
        }
        //패스워드 암호화
        const hashedPassword = await bcrypt.hash(req.body.password, 12); //salt는 10~13사이로
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword // 암호화된 패스워

        });
        console.log(newUser);
        //클라이언트에게 정보 보
        return res.json(newUser);

    }catch (e) {
        //서버와 통신하다가 오류가 나면 에러 처리
        console.log(e);
        //return next(e); //next(e) : 프론트에 에러 났다고 알려줌
        return res.status(404).send(e);
    }
});

router.get('/:id', (req, res) => {
    //남의 정보 가져오는 ex)  /api/user/:3

});
router.post('/logout', (req, res) => {
    //로그아웃
});
router.post('/login', (req, res) => {
    //로그인
});
router.get('/:id/follow', (req, res) => {
    //n번 유저 팔로우 수 가져오기
});
router.delete('/:id/follow', (req, res) => {
    //n번 유저 팔로우 지우기
});
router.delete('/:id/follower', (req, res) => {
    //n번 유저 팔로워 지우기
});
router.post('/:id/posts', (req, res) => {
    // n번 유저의 게시글 가져오기
});


router.get('/test', (req, res) => {
    // n번 유저의 게시글 가져오기
    return res.json("우와!");
});

// 라우터 : app.post('/api/post/images',
// 컨트롤러 : (req, res) => {


module.exports = router;
