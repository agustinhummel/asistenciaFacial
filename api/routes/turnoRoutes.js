const express = require("express");
const router = express.Router();

const {
  createTurno,
  editTurno,
  deleteTurno,
  getTurno,
  getTurnoById, 
  getTurnoByMedicAndPatientId
} = require("../controllers/Turno/index.js");

router.post("/", createTurno);
router.put("/", editTurno);
router.delete("/:turnoId", deleteTurno);
router.get("/", getTurno);
router.get("/bymedicid", getTurnoByMedicAndPatientId);
router.get("/:id", getTurnoById); 

module.exports = router;
