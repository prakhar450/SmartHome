var express = require("express");
var router = express.Router();

var Device = require("../models/device");

router.get("/", isLoggedIn, function (req, res) {
    var currentUser = req.user;
    Device.find({ author: currentUser._id }, function (err, devices) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { devices: devices });
        }
    })


});

router.post("/", isLoggedIn, function (req, res) {
    var name = req.body.name;
    var action = req.body.action;
    var currentUser = req.user;
    var newDevice = { name: name, action: action, author: currentUser._id };
    Device.create(newDevice, function (err, newDevice) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/devices");
        }
    })

});

router.get("/new", isLoggedIn, function (req, res) {
    res.render("new");
});

router.get("/:id/action/:action_name", isLoggedIn, function (req, res) {
    console.log(req.params.action_name);
});

router.get("/:id", isLoggedIn, function (req, res) {
    Device.findById(req.params.id, function (err, device) {
        if (err) {
            console.log(err);
        } else {
            res.render("show", { device: device });
        }
    })
});

router.delete("/:id", isLoggedIn, function (req, res) {
    Device.findByIdAndRemove(req.params.id, function (err) {
        res.redirect("/devices");
    })
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
