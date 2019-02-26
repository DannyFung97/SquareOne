var data = require('../public/user.json');
var fetch = require('../public/js/footballFetch');

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

  console.log("IM IN LOGIN UPDATE");
      var uname = request.query.username;
      var pword = request.query.password;
      var newUser = {};

          newUser = {
            username: uname,
            password: pword,
            logged: "true",
            preferences: [
              {
                sport: "football",
                check: "checked",
                display: "on"
              },
              {
                sport: "basketball",
                check: "checked",
                display: "on"
              },
              {
                sport: "baseball",
                check: "checked",
                display: "on"
              }
            ],
            playbooks: [
              {
                name: "default",
                selected: "true",
                plays: [
                  {
                    name: "default",
                    selected: "true",
                    imgsrc: "img/footballField.jpg",
                    positions: [
                      {
                        top: "50%",
                        left: "28%",
                        color: "red"
                      },
                      {
                        top: "50%",
                        left: "40%",
                        color: "red"
                      },
                      {
                        top: "50%",
                        left: "45%",
                        color: "red"
                      },
                      {
                        top: "30%",
                        left: "40%",
                        color: "red"
                      },
                      {
                        top: "50%",
                        left: "55%",
                        color: "red"
                      },
                      {
                        top: "50%",
                        left: "60%",
                        color: "red"
                      },
                      {
                        top: "50%",
                        left: "67%",
                        color: "red"
                      },
                      {
                        top: "45%",
                        left: "65%",
                        color: "red"
                      },
                      {
                        top: "40%",
                        left: "55%",
                        color: "red"
                      },
                      {
                        top: "40%",
                        left: "45%",
                        color: "red"
                      },
                      {
                        top: "30%",
                        left: "60%",
                        color: "red"
                      },
                      {
                        top: "65%",
                        left: "50%",
                        color: "blue"
                      },
                      {
                        top: "60%",
                        left: "55%",
                        color: "blue"
                      },
                      {
                        top: "60%",
                        left: "45%",
                        color: "blue"
                      },
                      {
                        top: "60%",
                        left: "60%",
                        color: "blue"
                      },
                      {
                        top: "60%",
                        left: "40%",
                        color: "blue"
                      },
                      {
                        top: "60%",
                        left: "28%",
                        color: "blue"
                      },
                      {
                        top: "60%",
                        left: "67%",
                        color: "blue"
                      },
                      {
                        top: "65%",
                        left: "65%",
                        color: "blue"
                      },
                      {
                        top: "65%",
                        left: "62%",
                        color: "blue"
                      },
                      {
                        top: "70%",
                        left: "50%",
                        color: "blue"
                      },
                      {
                        top: "60%",
                        left: "50%",
                        color: "blue"
                      }
                    ]
                  }
                ]
              }
            ]
          }
          data.users.pop();
          data.users.push(newUser);
          console.log(data);

  console.log("NEW");
  console.log(data);
  response.render('index', data);
};

