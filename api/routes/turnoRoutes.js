const express = require("express");
const router = express.Router();

const {
  createTurno,
  editTurno,
  deleteTurno,
  getTurno
} = require("../controllers/Turno/index.js");


router.post("/",createTurno);
router.put("/", editTurno);
router.delete("", deleteTurno);
router.get("",getTurno);

module.exports = router;
