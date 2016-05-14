function initUser (app) {
  app.get('/notes/:id', (req, res) => {
    res.render('note/overview')
  })
}

module.exports = initUser
