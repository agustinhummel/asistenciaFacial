const { Medic } = require('../../database/models')
const getMedic = async (req, res) => {
  try {
    const { id } = req.query;

    const medic = id
      ?
      (await Medic.findByPk(id))
      : await Medic.findAll()

    return res.status(200).json({ message: 'Medic data', data: { medic } })

  } catch (error) {

    return res.status(400).json({ error: 'Get Medic', message: error.message })
  }
}

module.exports = { getMedic }