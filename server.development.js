var express = require('express')
var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.config.development')
var app = express()
var compiler = webpack(config)

var middleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'app',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})

var router = express.Router()
router.get('/', function (req, res) {
  res.json({ message: 'horray welcome to our api!' })
})

app.use('/api', router)

app.use(middleware)
app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log
}))

app.get('*', function response (req, res) {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')))
  res.end()
})
app.use(express.static(path.join(__dirname, '/dist')))

app.listen(config._hotPort, 'localhost', function (err) {
  if (err) {
    console.log(err)
  }
  console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', config._hotPort, config._hotPort)
})
