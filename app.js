const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    deviceRoutes = require("./routes/device"),
    authRoutes = require("./routes/auth"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    User = require("./models/user")
    methodOverride = require("method-override");

mongoose.connect("mongodb://localhost:27017/smart_home", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(require("express-session")({
    secret: "Welcome to the future",
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

app.use(authRoutes);
app.use("/devices", deviceRoutes);



app.listen(3000, '127.0.0.1', function () {
    console.log("Server started");
});
