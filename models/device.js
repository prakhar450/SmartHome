var mongoose = require("mongoose");

var deviceSchema = new mongoose.Schema({
    name: String,
    action: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Device", deviceSchema);