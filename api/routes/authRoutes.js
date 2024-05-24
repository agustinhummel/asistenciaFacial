const express = require('express');
const router = express.Router();

const {
  loginMedic
} = require('../controllers/Auth/index.js')
const { renewToken } = require('../middlewares/jwt.js')

router.post('/',loginMedic)
router.post('/renew-token',renewToken)



module.exports = router