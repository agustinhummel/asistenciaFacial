const express = require('express')
const router = express.Router()

const {
  loginMedic
} = require('../controllers/Medic/index.js')

router.post('/medic',loginMedic)


module.exports = router