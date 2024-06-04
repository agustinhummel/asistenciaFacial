"use strict";
const {Patient, Medic} = require ("../models")

const bcrypt = require("bcrypt");
const { uuid} = require("uuidv4")
const {faker} = require('@faker-js/faker')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let turnos = []
    let patient = await Patient.findAll()
    let medic = await Medic.findAll()


     for (let i = 0; i < 40; i++) {
      turnos.push({
        id: uuid(),
        medicId: medic[i].id,
        patientId: patient[i].id,
        fecha: faker.date.anytime(),
        review: faker.lorem.paragraphs(),
        validateAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    } 
    
    turnos.push({
      id: uuid(),
      medicId: (await Medic.findOne({
        where: {
          email: "medictest@test.com"
        }
      })).id,
      patientId: (await Patient.findOne({
        where: {
          email: "patienttest@test.com"
        }
      })).id,
      fecha: '10-12-2024',
      validateAdmin: true,
      review: "todo ok con el paciente",
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return await queryInterface.bulkInsert("Turnos", turnos);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Turnos", null, {});
  },
};
