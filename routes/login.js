var user = require('../user.json');

exports.view = function(req, res){
  console.log(user);
  res.render('login', user);
};