const { editTurno } = require("./editTurno");
const { createTurno } = require("./registerTurno");
const { deleteTurno } = require("./deleteTurno");
const { getTurno } = require("./getTurno");
const { getTurnoByMedicAndPatientId } = require("./getTurnoByMedicAndPatient");

module.exports = {
  editTurno,
  createTurno,
  deleteTurno,
  getTurno,
  getTurnoByMedicAndPatientId
};
