const {Turno, Patient, Medic} = require('../../database/models')

const modelsToInclude = [
  { model: Patient, as: 'patient' },
  { model: Medic, as: 'medic' },
]
const getTurno = async (req, res) => {
    try {
      const { fecha } = req.query;
  
      const turno = fecha
      ?
      (await Turno.findOne({
        where: {
          fecha: fecha
        }, include: modelsToInclude
      }))
      : await Turno.findAll({include:modelsToInclude})

      return res.status(200).json({ message: 'Turno data', data:{turno} })
  
    } catch (error) {

      return res.status(400).json({ error: 'Get Turno', message:error.message })
    }
  }

  module.exports = {getTurno}