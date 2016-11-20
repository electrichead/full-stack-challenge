const express = require('express');
const router = express.Router();
const authCtrl = require('../../controllers/auth');

router.post('/login', (req, res) => {
  return authCtrl.login(
    req.body.username,
    req.body.password
  )
    .then((results) => {
      res
        .status(200)
        .json(results);
    })
    .then(null, (err) => {
      console.error(err);
      res
        .status(500)
        .end();
    });
});

module.exports = router;
