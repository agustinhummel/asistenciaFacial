'use strict';
const {
  Model
} = require('sequelize');
const { uuid } = require("uuidv4");

module.exports = (sequelize, DataTypes) => {
  class Turno extends Model {
    static associate(models) {
      Turno.belongsTo(models.Patient, { foreignKey: 'patientId', as: 'patient' });
      Turno.belongsTo(models.Medic, { foreignKey: 'medicId', as: 'medic' });
    }
  }
  Turno.init({
    patientId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Patients', 
        key: 'id',
      }
    },
    medicId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Medics', 
        key: 'id',
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    adminValidate:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'Turno',
    paranoid: true
  });

  Turno.addHook('beforeSave', async (turno) => {
    turno.id = uuid();
  });

  return Turno;
};
