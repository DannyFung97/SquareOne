
/*
 * GET home page.
 */
var user = require('../views/user.json');

exports.view = function(req, res){
  res.render('index', user);

};