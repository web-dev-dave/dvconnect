const express = require('express')
const connectDB = require('./config/db')

const server = express()

// Init middleware
server.use(express.json({ extended: false }))

// Declare routes
const usersRoute = require('./routes/api/users')
const profileRoute = require('./routes/api/profile')
const postsRoute = require('./routes/api/posts')
const authRoute = require('./routes/api/auth')

// Use routes
server.use('/api/users', usersRoute)
server.use('/api/profile', profileRoute)
server.use('/api/posts', postsRoute)
server.use('/api/auth', authRoute)

// Connect Database
connectDB()

server.get('/', (req, res) => {
  res.send('API Running')
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('Listening on port', PORT)
})