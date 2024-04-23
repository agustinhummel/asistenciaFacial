const { Turno } = require("../../database/models");

const deleteTurno = async (req, res) => {
  try {
    const fecha = req.query.fecha;

    if (!fecha) {
      throw new Error("All fields are required")
    }

    const deleteTurno = await Turno.destroy({
      where: {
        fecha: fecha,
      },
    });

    if (!deleteTurno) {
      throw new Error("Turno not found")
    }

    return res
      .status(200)
      .json({ message: "turno deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Turno" });
  }
};

module.exports = {
  deleteTurno,
};