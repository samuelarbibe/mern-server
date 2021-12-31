require('../src/utils/config')
const { connectDb } = require('../src/server')

const User = require('../src/models/User')

const mongoURI = process.env.MONGO_URI
connectDb(mongoURI)

before(async () => {
})

beforeEach(async () => {
  await User.register({ username: 'username' }, 'password')
})

afterEach(async () => {
  await User.deleteMany({})
})

after(async () => {
})