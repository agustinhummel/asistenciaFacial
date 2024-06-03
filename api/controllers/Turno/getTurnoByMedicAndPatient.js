const {Turno, Patient, Medic} = require('../../database/models')

const modelsToInclude = [
    { model: Patient, as: 'patient' },
    { model: Medic, as: 'medic' },
  ]
const getTurnoByMedicAndPatientId = async (req, res) => {
    try {
        const { medicId, patientId } = req.query;

        let whereClause = {}; // Objeto para almacenar las condiciones de la consulta

        // Verifica si se proporciona medicId o patientId y ajusta la cláusula WHERE en consecuencia
        if (medicId && patientId) {
            whereClause = { medicId, patientId };
        } else if (medicId) {
            whereClause = { medicId };
        } else if (patientId) {
            whereClause = { patientId };
        }

        const getTurnos = await Turno.findAll({
            where: whereClause,
            include: modelsToInclude
        });

        return res.status(200).send({ message: 'Successfully retrieved', turnos: getTurnos });
    } catch (error) {
        console.error(error); // Registra el error para depuración en el servidor
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
};


module.exports = { getTurnoByMedicAndPatientId };
