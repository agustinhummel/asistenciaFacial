'use strict';

const {
  Model
} = require('sequelize');
const { uuid} = require("uuidv4")
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      Patient.hasMany(models.Turno,{foreignKey: 'patientId', as: 'turnos'})
    }
  }
  Patient.init({
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nid: {
      type: DataTypes.BIGINT
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    obraSocial: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Patient',
  }),
  Patient.addHook('beforeSave', async (patient) => {
    return patient.id = uuid();
  });
  return Patient;
};