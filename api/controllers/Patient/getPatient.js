const { Patient} = require('../../database/models')



const getPatient = async (req, res) => {
    try {
      const { patientId } = req.query;
  
      const patient = patientId
      ?
      (await Patient.findByPk(patientId))
      : await Patient.findAll()

      return res.status(200).json({ message: 'Patient data', data:{patient} })
  
    } catch (error) {

      return res.status(400).json({ error: 'Get Patient', message:error.message })
    }
  }

  module.exports = {getPatient}