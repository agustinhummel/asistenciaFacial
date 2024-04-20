const express = require("express");
const router = express.Router();

const {
  createPatient,
  editPatient,
  deletePatient,
  getPatient
} = require("../controllers/Patient/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/",createPatient);
router.put("/", verifyJWT,editPatient);
router.delete("", verifyJWT,deletePatient);
router.get("",getPatient);

module.exports = router;
