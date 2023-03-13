const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.set('view engine', 'ejs'); //ejs 로 view로 사용하겠다//
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 라우터 (파일) //
const mainRouter = require('./routes'); //./router/index.js 생략
const userRouter = require('./routes/users');
const boardRouter = require('./routes/board');

// 사용 '/파일.js//
app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/board', boardRouter);

//
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
});

// 서버 최초 실행 //
app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포토에서 실행 중입니다.`);
});