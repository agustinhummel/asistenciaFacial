"use strict";
const bcrypt = require("bcrypt");
const { uuid} = require("uuidv4")
const {faker} = require('@faker-js/faker')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let patients = []
     for (let i = 0; i < 80; i++) {
      patients.push({
        id: uuid(),
        fullname: faker.person.fullName(),
        email: faker.internet.email(),
        birthdate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
        nid: faker.number.int({ min: 1000000000, max: 9999999999 }),
        obraSocial:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    } 
    patients.push({
      id: uuid(),
      fullname: 'Paciente TEST',
      email: 'patienttest@test.com',
      birthdate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
      nid: faker.number.int({ min: 1000000000, max: 9999999999 }),
      obraSocial:"OSDE",
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return await queryInterface.bulkInsert("Patients", patients);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Patients", null, {});
  },
};
