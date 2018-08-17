const path = require('path')

const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

require('dotenv').config();
const config = require('../config')
const app = express()

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());

app.use(session({
  secret: 'Secret key',
  store: new RedisStore({
    host: config.redisStore.host,
    port: config.redisStore.port
  }),
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.engine('.hbs', exphbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: path.join(__dirname),
  partialsDir: path.join(__dirname)
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname))


require('./authentication').init(app)
require('./user').init(app)
require('./note').init(app)

module.exports = app
