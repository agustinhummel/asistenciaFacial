
const { Turno } = require("../../database/models");

const editTurno = async (req, res) => {
  try {

    const { fecha } = req.body

    if(!fecha)
    {
      throw new Error("Must contain turno")
    }

    const updateTurno = await Turno.update(
        req.body,
      {
        where: {
          fecha
        },
      }
    );

    if (updateTurno == 0) {
      throw new Error("Turno not found")
    }

    const turno = await Turno.findOne(
      {
        where: {
          fecha
        },
      }
    );

    return res
      .status(200)
      .json({ data:{patient},message: "Turno Updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Turno" });
  }
};

module.exports = {
  editTurno
};