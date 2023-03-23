const mongoClient = require('./mongoConnect');

const UNEXPECTED_MSG =
  '알 수 없는 문제 발생<br><a href="/register"> 회원 가입으로 이동 </a>';

const DUPLICATED_MSG =
  '동일한 ID를 가지는 회원이 존재합니다.<br><a href="/register">회원 가입으로 이동</a>';

const SUCCESS_MSG = '회원 가입 성공!<br><a href="/login">로그인으로 이동</a>';

const UNLOGIN_MSG =
  '알 수 없는 문제 발생<br><a href="/login"> 회원 가입으로 이동 </a>';

const UNID_MSG =
  '입력 하신 ID를 가지는 회원이 존재하지 않습니다.<br><a href="/register">회원가입 이동</a>';

const UNPASSWORD_MSG =
  '비밀번호가 틀렸습니다..<br><a href="/login">로그인 이동</a>';

// 회원가입 //
const registerUser = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const user = client.db('kdt5').collection('user');

    const duplicatedUser = await user.findOne({ id: req.body.id });
    if (duplicatedUser) return res.status(400).send(DUPLICATED_MSG);

    await user.insertOne(req.body);
    res.status(200).send(SUCCESS_MSG);
  } catch (err) {
    console.error(err);
    res.status(500).send(UNEXPECTED_MSG);
  }
};

const loginUser = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const login = client.db('kdt5').collection('user');

    const logUser = await login.findOne({ id: req.body.id });
    if (!logUser) return res.status(400).send(UNID_MSG);

    if (logUser.password !== req.body.password)
      return res.status(400).send(UNPASSWORD_MSG);

    req.session.login = true;
    req.session.userId = req.body.id;

    res.cookie('user', req.body.id, {
      maxAge: 1000 * 30,
      httpOnly: true,
      signed: true,
    });

    res.status(200);
    res.redirect('/dbBoard');
  } catch (err) {
    console.error(err);
    res.status(500).send(UNLOGIN_MSG);
  }
};

module.exports = {
  registerUser,
  loginUser,
};

// const userDB = {
// 중복 회원 찾기
// userCheck: async (userId) => {
//   try {
//     const client = await mongoClient.connect();
//     const user = client.db('kdt5').collection('user');
//     const findUser = await user.findOne({ id: userId });
//     return findUser;
//   } catch (err) {
//     console.log(err);
//   }
// },
// 회원 가입 하기
//   registerUser: async (newUser) => {
//     try {
//       const client = await mongoClient.connect();
//       const user = client.db('kdt5').collection('user');
//       await user.insertOne(newUser);
//       return true;
//     } catch (err) {
//       console.log(err);
//     }
//   },
// };

// module.exports = userDB;
