const express = require('express')
const connectDB = require('./config/db')

const server = express()

// Connect Database
connectDB()

server.get('/', (req, res) => {
  res.send('API Running')
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('Listening on port', PORT)
})