module.exports = ((req, res) => {
  res.render('errors/error404', {
    title: '404'
  })
});