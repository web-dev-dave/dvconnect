const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.send('API Running')
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('Listening on port', PORT)
})