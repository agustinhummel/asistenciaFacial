'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Turnos', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      patientId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Patients', key: 'id'}
      },
      medicId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Medics', key: 'id'}
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Turnos');
  }
};