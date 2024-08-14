let mongoose = require("mongoose")


let wishlistSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productSchema",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
    }
})

let wishlist = mongoose.model("wishlistSchema", wishlistSchema)

module.exports = wishlist;