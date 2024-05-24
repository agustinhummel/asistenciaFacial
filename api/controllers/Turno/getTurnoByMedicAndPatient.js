const { Turno } = require('../../database/models');


const getTurnoByMedicAndPatientId = async (req, res) => {


    try {
        const { medicId, patientId } = req.query;
        
        const getTurnos = await Turno.findAll({
            where: {
                medicId,
                patientId
            },

        });

        if (getTurnos.length === 0) {
            return res.status(404).send({ message: 'No turnos found' });
        }

        return res.status(200).send({ message: 'Successfully retrieved', turnos: getTurnos });
    } catch (error) {
        console.error(error); // Log the error for server-side debugging
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
};

module.exports = { getTurnoByMedicAndPatientId };
