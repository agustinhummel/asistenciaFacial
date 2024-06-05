const { editTurno } = require("./editTurno");
const { createTurno } = require("./registerTurno");
const { deleteTurno } = require("./deleteTurno");
const { getTurno } = require("./getTurno");
const { getTurnoByMedicAndPatientId } = require("./getTurnoByMedicAndPatient");
const {getTurnoById} = require ("./getTurnoById");

module.exports = {
  editTurno,
  createTurno,
  deleteTurno,
  getTurno,
  getTurnoByMedicAndPatientId,
  getTurnoById
};
