const {Patient} = require('../../database/models')
const bcrypt = require('bcrypt')


const createPatient = async (req, res) => {
    try {
  
      const { fullname, obraSocial, email, birthdate, nid } = req.body
  
      if (!fullname || !obraSocial || !email || !birthdate || !nid ) {
        throw new Error('All fields are required.')
      }
  
      const isDuplicated = await Patient.findOne({
        where: {
          email: email
        }
      })
  
      if (isDuplicated) {
       throw new Error('Patient duplicated')
      }
  
      await Patient.create({
        fullname,
        email,
        nid,
        birthdate,
        obraSocial
      });

      return res.status(201).send({message:'Patiente Registered'})

    } catch (error) {
      return res.status(400).json({ error: 'Register Patient', message:error.message })
    }   
  }

  module.exports ={ createPatient } 