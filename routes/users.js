const express = require('express');

const router = express.Router();

// localhost: 4000/users/
router.get('/', (req, res) => {
  res.render('users', { user: '이 데이터는 users에서 보냈어요!' });
});

// module로 빼준다 //
module.exports = router;
