const express = require('express');
// const userDB = require('../controllers/user.Controller');
const { loginUser } = require('../controllers/user.Controller');
const router = express.Router();

// 로그인 페이지 이동 //
router.get('/', (req, res) => {
  res.render('login');
});

// 로그인 처리 //
router.post('/', loginUser);

// 로그인 //

// router.post('/', (req, res) => {
//   userDB.userCheck(req.body.id, (data) => {
//     if (data.length === 1) {
//       if (data[0].PASSWORD === req.body.password) {
//         // 백엔드 세션 생성 //
//         req.session.login = true;
//         req.session.userId = req.body.id;

//         // 로그인 쿠키 발행 //
//         res.cookie('user', req.body.id, {
//           maxAge: 1000 * 10,
//           httpOnly: true,
//           signed: true,
//         });

//         res.status(200);
//         res.redirect('/dbBoard');
//       } else {
//         res.status(400);
//         res.send(
//           '비밀번호가 다릅니다!<br><a href="/login">로그인으로 이동</a>'
//         );
//       }
//     } else {
//       res.status(400);
//       res.send(
//         '해당 ID가 존재 하지 않습니다.<br><a href="/register">회원 가입으로 이동</a>'
//       );
//     }
//   });
// });

// 로그아웃 //
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.clearCookie('user');
    res.redirect('/');
  });
});
module.exports = router;
