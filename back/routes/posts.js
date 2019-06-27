const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');
const passport = require('passport'); //로그인 전

// 포스트'들' 가져오기
router.get('/', async (req, res, next) => { // GET /api/posts
    try {
        const posts = await db.Post.findAll({
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],//비번가져오지 않게 주의
            }],
            order: [['createdAt', 'DESC']], // DESC는 내림차순, ASC는 오름차순
        });
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

// 라우터 : app.post('/api/post/images',
// 컨트롤러 : (req, res) => {


module.exports = router;