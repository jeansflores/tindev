const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

mongoose.connect(
  'mongodb://localhost:27017/tindev',
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
  }
)

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)
