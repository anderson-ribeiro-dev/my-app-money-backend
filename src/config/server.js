const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true })) //padrão submit form
server.use(bodyParser.json())//middleware parse-json
server.use(allowCors) //middleware de chamadas

server.listen(port, function(){
   console.log(`Backend is running on port ${port}`)     
})


module.exports = server