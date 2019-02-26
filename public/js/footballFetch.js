var user = {
    users: []
};
function spawn(){
    console.log("fetch file called");
    console.log(user);
    for (var i = 0; i < user.users.length; i++) {
        console.log(i);
        if (user.users[i].logged == "true" && user.users[i].preferences[0].check == "checked") {
            user_index = i;
            for (var j = 0; j < user.users[i].playbooks.length; j++) {
                if (user.users[i].playbooks[j].selected == "true") {
                    playbook_index = j;
                    for (var k = 0; k < user.users[i].playbooks[j].plays.length; k++) {
                        if (user.users[i].playbooks[j].plays[k].selected == "true") {
                            play_index = k;
                            for (var l = 0; l < user.users[i].playbooks[j].plays[k].positions.length; l++) {
                                document.getElementById("field").innerHTML += '<div class="player" id="player' + l + '" onclick="dragElement(this)" ontouchstart="dragElementTouch(this)" style="position: absolute;z-index: 9; top: ' + user.users[i].playbooks[j].plays[k].positions[l].top + '; left: ' + user.users[i].playbooks[j].plays[k].positions[l].left + '"><img src="img/circle.png" style="width:25px; height:25px; background: ' + user.users[i].playbooks[j].plays[k].positions[l].color + '; border-radius:12.5px"><div style="color: white; transform: translate(0, -100%)">' + l + '</div></div>';
                                document.dragElementTouch(document.getElementById("player" + l));
                                document.dragElement(document.getElementById("player" + l));
                            }
                        }
                    }
                }
            }
            break;
        }
    }
}