
const {Turno, Patient, Medic} = require('../../database/models')



const createTurno = async (req, res) => {
    try {
  
      const {fecha, medicId, patientId} = req.body
      
  
      if (!fecha || !medicId || !patientId) {
        throw new Error('All fields are required.')
      }

      const patientExist = await Patient.findOne({
          where: {id: patientId}
        }
      );
      const medicExist = await Medic.findOne({
        where: {id: medicId}
      }
    );

      if (patientExist && medicExist) {
        await Turno.create({
          fecha,
          medicId,
          patientId
        });
      }else {
        throw new Error('No se encontro el medico | paciente')
      };
      

      return res.status(201).send({message:'Turno Registered'})

    } catch (error) {
      return res.status(400).json({ error: 'Register Turno', message:error.message })
    }   
  }

  module.exports ={ createTurno } 