const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    deviceRoutes = require("./routes/device"),
    authRoutes = require("./routes/auth");

mongoose.connect("mongodb://localhost:27017/smart_home", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authRoutes);
app.use("/devices", deviceRoutes);

app.listen(3000, '127.0.0.1', function () {
    console.log("Server started");
});
