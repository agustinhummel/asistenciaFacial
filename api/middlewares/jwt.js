const jwt = require('jsonwebtoken')
const { Medic } = require("../database/models");


const verifyJWT = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) { throw new Error('Not authorization header inside the request') }
        const token = authorization.split(' ')[1]
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        return res.status(400).json({ error: "JWT", message: error.message }).end()
    }
}

const renewToken = async (req, res) => {
    const token = req.header('Authorization')?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
  
    try {
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const medic = await Medic.findByPk(decoded.medic.id);
      if (!medic) {
        return res.status(404).json({ error: 'Medic not found' });
      }
      decoded.password=null
  
      const newToken = jwt.sign(decoded, process.env.JWT_SECRET, { expiresIn: '5h' });
  
      return res.status(200).json({ token: newToken,user:medic });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };



module.exports = {
    verifyJWT,
    renewToken
}