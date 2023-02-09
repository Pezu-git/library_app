// module.exports = ((req, res) => {
//   res.render('errors/error404', {
//     title: '404'
//   })
// });

module.exports = (req, res) => {
  res.status(404);
  res.json({ result: false, message: "page not found" });
};
