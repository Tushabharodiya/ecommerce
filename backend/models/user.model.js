let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
})

let user = mongoose.model("userSchema", userSchema)

module.exports = user;