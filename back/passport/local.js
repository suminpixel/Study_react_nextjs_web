const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({ //프론트에서 보내는 req.body.id, password를 아이디와 패스워드로 삼겠다
        usernameField: 'userId',
        passwordField: 'password',
    }, async (userId, password, done) => {//어떤 사람을 로그인 시킬지 전략
        try {
            const user = await db.User.findOne({
                where: { userId }
            });
            if (!user) {
                //user 가 없을때
                //서버쪽 에러, 로직상 존재하지 않는 경우 어떤 값들을 리턴할지
                return done(null, false, { reason: '존재하지 않는 사용자입니다!' });
            }
            console.log(userId + '의 패스워드를 체크합니다.');
            const result = await bcrypt.compare(password, user.password);//비밀번호 비교
            if (result) {
                return done(null, user);
            }
            return done(null, false, { reason: '비밀번호가 틀립니다.' });
        } catch (e) {
            console.error(e);
            return done(e);
        }
    }));
};
