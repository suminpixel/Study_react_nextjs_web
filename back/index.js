/*
* 서버의 중앙통제실
* */
const express = require('express');
bodyParser = require('body-parser');
const morgan = require('morgan'); //클라이언트의 요청 기록해 주는 미들웨
const cors  = require('cors'); //cors 오류 잡아주기
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv'); //!! 디비관련 보안이 필요한 정보들을 모아두는 문
const passport = require('passport');
const passportConfig = require('./passport');

//DB세팅
const db = require('./models/');// 테이블들
db.sequelize.sync();// 테이블 생성
passportConfig();
dotenv.config();

const app = express();
//관련 라우터 정리된 문서 세팅
//라우터 파일 분리는 경험이 중요함 (보통 100줄 내외에서 새 파일로 나눔)
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');


//폼으로 들어온 데이터를 처리
//미들웨어란? 요청과 응답사이를 변조해주는
app.use(morgan('dev')); // 들어오는 요청에 대해 morgan 미들웨어로 기록을 남김
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cors({
    origin: true,
    credentials: true, //프론트로 쿠키 보낼 수 있게 세팅
}));

//쿠키, 세션관련 옵
app.use(cookieParser('myCookie')); //쿠키를 자동으로 붙여줌
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: false,
        secure: false, // https를 쓸 때 true
    },
    name: 'sumin_test_cookie', //TODO : 반드시 쿠키이름은 바꿀것
}));
app.use(passport.initialize()); //로그인했는지 확인해주 작업
app.use(passport.session());


//프론트에서 / (메인페이지)로 요청 보내면 hello server라고 응답해줌
//http 통신
/*
app.get('/', (req, res) => { //get: 웹사이트 접속 요청하는 restapi 규칙중 하나
    res.send('Hello, server! ');
});
*/


app.post('/', (req, res) => { //get: 웹사이트 접속 요청하는 restapi 규칙중 하나
    res.send(req.body.id + ': Hello, server! ');
});

// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);


//3065 포트번호로 접속하면 서버에 접근할수 있게 됨
app.listen(3065, ()=>{
    console.log('서버실행 3065 포트~');
});