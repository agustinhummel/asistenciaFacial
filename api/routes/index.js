const express = require('express')


const patientRoutes = require('./patientsRoutes')
const medicsRoutes = require('./medicsRoutes')
const authRoutes = require('./authRoutes')
const turnoRoutes = require('./turnoRoutes')

const router = express.Router()

router.use('/medic',medicsRoutes)
router.use('/patient',patientRoutes)
router.use('/turno', turnoRoutes)
router.use('/auth',authRoutes)
/* swager soon 
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); */

module.exports = router
