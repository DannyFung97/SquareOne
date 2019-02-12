$.getJSON("user.json", function (json) {
    for (u in user.users) {
        if (usern == u.username || passw == u.password) {
            console.log(json.username);
        }
    }
});