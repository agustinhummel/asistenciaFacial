const express = require("express");
const router = express.Router();

const {
  createTurno,
  editTurno,
  deleteTurno,
  getTurno,
  getTurnoById, // Importamos el nuevo controlador
  getTurnoByMedicAndPatientId
} = require("../controllers/Turno/index.js");

router.post("/", createTurno);
router.put("/", editTurno);
router.delete("/", deleteTurno);
router.get("/", getTurno);
router.get("/bymedicid", getTurnoByMedicAndPatientId);
router.get("/:id", getTurnoById); // Añadimos la nueva ruta

module.exports = router;
