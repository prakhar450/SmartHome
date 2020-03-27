var express = require("express");
var router = express.Router();
var Device = require("../models/device");
log4js = require('log4js');
    log4js.configure({
    appenders: {
        actionLogs: { type: 'file', filename: 'action-logs.log' },
        errorLogs: { type: 'file', filename: 'error-logs.log' },
        console: { type: 'console' }
      },
     categories: {
        action: { appenders: ['actionLogs'], level: 'info' },
        error: { appenders: ['errorLogs'], level: 'error' },
        another: { appenders: ['console'], level: 'trace' },
        default: { appenders: ['console'], level: 'trace' }
    }
});
var actionLogger = log4js.getLogger('action'); 
var errorLogger = log4js.getLogger('error');

router.get("/", isLoggedIn, function (req, res) {
    var currentUser = req.user;
    Device.find({ author: currentUser._id }, function (err, devices) {
        if (err) {
            errorLogger.error(err);
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
            errorLogger.error(err);
        } else {
            res.redirect("/devices");
        }
    })

});

router.get("/new", isLoggedIn, function (req, res) {
    res.render("new");
});

router.get("/:id/action/:action_name", isLoggedIn, function (req, res) {
    var deviceId = req.params.id;
    actionLogger.info("Action Performed: ", req.params.action_name);
    res.redirect("/devices/" + deviceId);
});

router.get("/:id", isLoggedIn, function (req, res) {
    Device.findById(req.params.id, function (err, device) {
        if (err) {
            errorLogger.error(err);
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
