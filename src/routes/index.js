const express = require('express')
const { isAuth } = require('../middlewares/authMiddleware')

const userRoutes = require('./users')

const routes = express.Router()
routes.use('/users', userRoutes)
routes.use(isAuth)

module.exports = routes