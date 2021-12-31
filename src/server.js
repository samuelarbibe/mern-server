const express = require('express')
const mongoose = require('mongoose')

const logger = require('./utils/logger')

const errorHandler = require('./middlewares/errorHandler')
const morganMiddleware = require('./middlewares/morganMiddleware')
const passportMiddleware = require('./middlewares/passportMiddleware')

const routes = require('./routes/index')

const PORT = process.env.PORT
const mongoURI = process.env.MONGO_URI

const connectDb = async (uri) => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  mongoose.set('useFindAndModify', false)
  mongoose.set('returnOriginal', false)
}

const createServer = () => {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  if (process.env.NODE_ENV !== 'test') app.use(morganMiddleware)
  app.use(passportMiddleware())

  app.use('/api', routes)

  app.use(errorHandler)

  return app
}

const init = async () => {
  await connectDb(mongoURI)
  const app = createServer()

  app.listen(PORT, () => {
    logger.debug(`listening on port ${PORT}`)
  })
}

module.exports = {
  init,
  connectDb,
  createServer,
}