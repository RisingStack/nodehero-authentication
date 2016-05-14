const user = {
  username: 'test-user',
  password: 'test-password'
}

function initUser (app) {
  app.get('/', welcome)
  app.post('/login', login)
}

function welcome (req, res) {
  res.render('user/welcome')
}

function login (req, res) {
  res.render('user/profile', {
    
  })
}

module.exports = initUser
