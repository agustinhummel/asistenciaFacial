const { Medic } = require('../../database/models')
const getAllMedics = async (req, res) => {
  try {

    const medics = await Medic.findAll()


    return res.status(200).json({ message: 'Medics data', data: { medics } })

  } catch (error) {

    return res.status(400).json({ error: 'Get Medics', message: error.message })
  }
}

module.exports = { getAllMedics }