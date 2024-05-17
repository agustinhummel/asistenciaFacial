'use strict';
const {
  Model
} = require('sequelize');
const { uuid } = require("uuidv4")
module.exports = (sequelize, DataTypes) => {
  class Medic extends Model {
    static associate(models) {
      Medic.hasMany(models.Turno,{foreignKey: 'medicId', as: 'turnos', onDelete: 'CASCADE'})
    }
  }
  Medic.init({
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'Medic',
    paranoid: true
  });
  Medic.addHook('beforeSave', async (medic) => {
    return medic.id = uuid();
  });
  return Medic;
};