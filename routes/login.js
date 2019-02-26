var data = require('../public/user.json');
var fetch = require('../public/js/footballFetch');

exports.view = function (req, res) {
  console.log(data);
  res.render('login', data);
};

exports.fetch = function (req, res) {
  fetch.user = data;
  console.log("hey yall");
  console.log(fetch.user);
  res.render('footballMain', data);
  // for (var i = 0; i < data.users.length; i++) {
  //   console.log(i);
  //   if (data.users[i].logged == "true" && data.users[i].preferences[0].check == "checked") {
  //     user_index = i;
  //     for (var j = 0; j < data.users[i].playbooks.length; j++) {
  //       if (data.users[i].playbooks[j].selected == "true") {
  //         playbook_index = j;
  //         for (var k = 0; k < data.users[i].playbooks[j].plays.length; k++) {
  //           if (data.users[i].playbooks[j].plays[k].selected == "true") {
  //             play_index = k;
  //             for (var l = 0; l < data.users[i].playbooks[j].plays[k].positions.length; l++) {
  //               document.getElementById("field").innerHTML += '<div class="player" id="player' + l + '" onclick="dragElement(this)" ontouchstart="dragElementTouch(this)" style="position: absolute;z-index: 9; top: ' + data.users[i].playbooks[j].plays[k].positions[l].top + '; left: ' + data.users[i].playbooks[j].plays[k].positions[l].left + '"><img src="img/circle.png" style="width:25px; height:25px; background: ' + data.users[i].playbooks[j].plays[k].positions[l].color + '; border-radius:12.5px"><div style="color: white; transform: translate(0, -100%)">' + l + '</div></div>';
  //               document.dragElement(document.getElementById("player" + l));
  //               document.dragElementTouch(document.getElementById("player" + l));
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}

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

