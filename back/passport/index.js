//로그인 관련 문서
//sns 로그인 까지 총괄 하는 파일
const passport = require('passport');
const db = require('../models');
const local = require('./local');

//사용자가 로그인 하면 로그인 정보를 세션에 저장
//어마어마하게 많은 내용을 저장하다보면 서버쪽 메모리가 폭발
module.exports = () => {
    passport.serializeUser((user,done) => { // 서버쪽에 [{ id:3, cookie: "프론트로 보냅니다"// }]
        //서버는 아이디만 저장, 프론트는 쿠키
      return done(null, user.id);
    });
    //id 를 시리얼라이즈 해서 유저정보를 되찾는
    passport.deserializeUser(async (id, done) => {
    try{
        const user = await db.User.findOne({
            where : {id},
        });
        return  done(null, user); // req.user 에 저장
    }catch (e) {
        console.error(e);
        return done(e);


    }
  });


    local();//로그인 전략 실행
};