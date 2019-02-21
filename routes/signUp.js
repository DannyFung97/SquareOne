var user = require('../public/user.json');

//$(document).ready(function() {
//  initializePage();
//});

/*
 * Function that is called when the document is ready.
 */
//function initializePage() {
//  $("#signUpBtn").click(signUp);
//}

exports.update = function(request,response) {

      console.log("IM IN SIGNUP");
      var uname = request.query.username;
      var pword = request.query.password;
      var newUser = {};
      var v_password = request.query.verifyPassword;

      if (v_password === pword) {
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
          user.users.pop();
          user.users.push(newUser);
          console.log(user);

      } else {
        //alert("Passwords must match.");
      }
      response.render('index', user);
  }