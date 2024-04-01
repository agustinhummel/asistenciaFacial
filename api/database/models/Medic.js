'use strict';
const {
  Model
} = require('sequelize');
const { uuid } = require("uuidv4")
module.exports = (sequelize, DataTypes) => {
  class Medic extends Model {
    static associate(models) {
    }
  }
  Medic.init({
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    avatar: {
      type: DataTypes.TEXT
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
    }
  }, {
    sequelize,
    modelName: 'Medic',
  });
  Medic.addHook('beforeSave', async (medic) => {
    return medic.id = uuid();
  });
  return Medic;
};