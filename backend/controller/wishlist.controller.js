const { wishlistSchema } = require("../models")




let getWishlist = async (req, res) => {
    try {

        let wishlist = await wishlistSchema.find().populate("product").populate({ path: "user", select: "id  name" })

        res.status(200).json({
            message: "wishlist get successfully...",
            wishlist,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let createWishlist = async (req, res) => {
    try {
        let body = req.body;
        let wishlistId = body.product;

        let findWishlist = await wishlistSchema.findOne({ product: wishlistId })
        // console.log(findWishlist,"zsdycay");

        if (findWishlist) {
            res.status(401).json({
                message: "This product is already in your wishlist."
            })
        } else {

            let wishlist = await wishlistSchema.create(body)
            res.status(201).json({
                message: "product successfully add in wishlist..",
                wishlist,
            })
        }



    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let deleteWishlist = async (req, res) => {
    try {
        let { id } = req.params;

        let wishlist = await wishlistSchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "succesfully product remove in wishlist",
            wishlist,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = { getWishlist, createWishlist, deleteWishlist }