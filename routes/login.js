var data = require('../public/user.json');

exports.view = function(req, res){
  console.log(data);
  res.render('login', data);
};

exports.update = function (request, response) {
  console.log("OLD");
  console.log(data);
  for (var i = 0; i < data.users.length; i++) {
      if (data.users[i].logged == "false" && data.users[i].username == request.query.username && data.users[i].password == request.query.password) {
          data.users[i].logged = "true";
      }
      break;
  }
  console.log("NEW");
  console.log(data);
  response.render('index', data);
};