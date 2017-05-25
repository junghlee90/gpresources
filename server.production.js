var path = require('path')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const serverRouter = require('./api/routes/index')

app.set('port', (process.env.PORT || 8000))

app.use(express.static(path.join(__dirname, '/dist')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', serverRouter)

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(app.get('port'), function (err) {
  if (err) {
    console.log(err)
  }
  console.info('==> Listening on port %s.', app.get('port'))
})
