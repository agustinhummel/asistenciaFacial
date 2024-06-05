const { Turno } = require("../../database/models");

const editTurno = async (req, res) => {
  try {
    const { turnoId, review } = req.body;

    if (!turnoId) {
      throw new Error("Must contain turnoId");
    }

    const updateTurno = await Turno.update(
      { review },
      {
        where: {
          id: turnoId
        },
      }
    );

    if (updateTurno == 0) {
      throw new Error("Turno not found");
    }

    const turno = await Turno.findOne({
      where: {
        id: turnoId
      },
    });

    return res.status(200).json({ data: turno, message: "Turno Updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Turno" });
  }
};

module.exports = {
  editTurno,
};
