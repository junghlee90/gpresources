var express = require('express')

var serverRouter = express.Router()

serverRouter.get('/', function (req, res) {
  res.json({ message: 'horray welcome to our api!' })
})

module.exports = serverRouter
