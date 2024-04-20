const { editPatient } = require("./editPatient");
const { createPatient } = require("./registerPatient");
const { deletePatient } = require("./deletePatient");
const { getPatient } = require("./getPatient");

module.exports = {
  editPatient,
  createPatient,
  deletePatient,
  getPatient
};
