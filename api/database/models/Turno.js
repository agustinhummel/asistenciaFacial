'use strict';
const {
  Model
} = require('sequelize');
const { uuid} = require("uuidv4")
module.exports = (sequelize, DataTypes) => {
  class Turno extends Model {
    static associate(models) {
    }
  }
  Turno.init({
    patientId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Patients', // This should match the actual table name for the Medic model
        key: 'id',
      },
      medicId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Medics', // This should match the actual table name for the Medic model
          key: 'id',
        },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }}},{
      sequelize,
      modelName: 'Turno',
    }),
  Turno.addHook('beforeSave', async (turno) => {
    return turno.id = uuid();
  });
  return Turno;
};