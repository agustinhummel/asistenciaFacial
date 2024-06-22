const express = require("express");
const router = express.Router();

const {
  createMedic,
  editMedic,
  deleteMedic,
  getMedic,
} = require("../controllers/Medic/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/",createMedic)
router.put("/",editMedic);
router.delete("",deleteMedic);
router.get("",getMedic);

module.exports = router;
