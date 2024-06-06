const { Turno } = require("../../database/models");

const deleteTurno = async (req, res) => {
  try {
    const { turnoId } = req.params;

    if (!turnoId) {
      throw new Error("Turno ID is required");
    }

    const deleteTurno = await Turno.destroy({
      where: {
        id: turnoId,
      },
    });

    if (!deleteTurno) {
      throw new Error("Turno not found");
    }

    return res
      .status(200)
      .json({ message: "Turno deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Turno" });
  }
};


module.exports = {
  deleteTurno,
};