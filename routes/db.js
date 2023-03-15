const express = require('express');
const userDB = require('../controllers/user.Controller');

const router = express.Router();

router.get('/', (req, res) => {
  userDB.getUsers((data) => {
    res.send(data);
  });
});

module.exports = router;
