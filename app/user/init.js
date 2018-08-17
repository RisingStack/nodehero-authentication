const passport = require('passport')

function initUser (app) {
  app.get('/', passport.authenticationMiddleware(), renderWelcome)
  app.get('/login', renderLogin)
  app.get('/profile', passport.authenticationMiddleware(), renderProfile)
  app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }))
}

function renderWelcome (req, res) {
  res.render('user/welcome')
}

function renderLogin (req, res) {
  res.render('user/login')
}

function renderProfile (req, res) {
  res.render('user/profile', {
    username: req.user.username
  })
}

module.exports = initUser
