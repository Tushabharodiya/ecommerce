let mongoose = require("mongoose")

let productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    backimage: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySchema",
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
    },
    badges: {
        type: String,
    },
    stoke: {
        type: Boolean,
        default: true,
    },
    image_public_id: {
        type: String,
    },
    backimage_public_id: {
        type: String,
    }
})


let product = mongoose.model("productSchema", productSchema)

module.exports = product;