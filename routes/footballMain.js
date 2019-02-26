var user = require('../public/user.json');
var fetch = require('../public/js/footballFetch');

exports.view = function (req, res) {
    console.log("fetch's user before:");
    console.log(fetch.user);
    fetch.user = user;
    window.data = user;
    console.log("fetch's user after:");
    console.log(fetch.user);
    res.render('footballMain', user);
}