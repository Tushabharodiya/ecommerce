const { required } = require("joi");
let mongoose = require("mongoose")


let categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
})

let category = mongoose.model("categorySchema", categorySchema)

module.exports = category;