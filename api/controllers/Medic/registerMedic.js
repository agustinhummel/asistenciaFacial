const bcrypt = require('bcrypt')
const {Medic} = require('../../database/models')

const createMedic = async (req, res) => {
    try {
  
      const { fullname, password, email, birthdate, nid } = req.body
      
      if (!fullname || !password || !email || !birthdate || !nid ) {
        throw new Error('All fields are required.')
      }

      const isDuplicated = await Medic.findOne({
        where: {
          email: email
        }
      })

      if (isDuplicated) {
        throw new Error('Medic duplicated')
       }

      const hashedPwd = await bcrypt.hash(password, 10)
  
      await Medic.create({
        fullname,
        password:hashedPwd,
        email,
        nid,
        birthdate,
      });
      
      return res.status(201).send({message:'Medic Registered'})

    } catch (error) {
      return res.status(400).json({ message: error.message, error: 'Register Medic' })
    }   
  }


module.exports = { createMedic }