const { Turno, Patient, Medic } = require('../../database/models');

const createTurno = async (req, res) => {
  try {
    const { fecha, medicsIds, patientId } = req.body;

    if (!fecha || !Array.isArray(medicsIds) || !patientId) {
      throw new Error('All fields are required.');
    }

    const patientExist = await Patient.findOne({
      where: { id: patientId }
    });

    if (!patientExist) {
      throw new Error('No se encontró el paciente');
    }

    const turnosPromises = medicsIds.map(async (medicId) => {
      const medicExist = await Medic.findOne({
        where: { id: medicId }
      });

      if (!medicExist) {
        throw new Error(`No se encontró el médico con id ${medicId}`);
      }

      return Turno.create({
        fecha,
        medicId,
        patientId
      });
    });

    await Promise.all(turnosPromises);

    return res.status(201).send({ message: 'Turno Registered' });
  } catch (error) {
    return res.status(400).json({ error: 'Register Turno', message: error.message });
  }
};

module.exports = { createTurno };
