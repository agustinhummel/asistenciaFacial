const { Turno } = require("../../database/models");

const getTurnoById = async (req, res) => {
  try {
    const { id } = req.params;

    const turno = await Turno.findOne({
      where: {
        id
      },
    });

    if (!turno) {
      return res.status(404).json({ message: 'Turno not found' });
    }

    return res.status(200).json(turno);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getTurnoById
  };