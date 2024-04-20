const { Patient} = require('../../database/models')

const getAllPatients = async (req, res) => {
    try {
      
      let pacientes = await Patient.findAll()

      return res.status(200).json({ message: 'Patients data', data:pacientes })
  
    } catch (error) {

      return res.status(400).json({ error: 'Get Patients', message:error.message })
    }
  }

  module.exports = {getAllPatients}