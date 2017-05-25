var express = require('express')

var router = express.Router()
var models = require('../../db/models/index')

router.get('/', (req, res) => {
  res.json({ message: 'horray welcome to our api!' })
})

router.post('/resources', (req, res) => {
  models.Resource.create({
    name: req.body.name
  }).then((resource) => {
    res.json(resource)
  })
})

router.get('/resources', (req, res) => {
  models.Resource.findAll({}).then((resources) => {
    res.json(resources)
  })
})

module.exports = router
