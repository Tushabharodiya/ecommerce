const { cartSchema } = require("../models")
const product = require("../models/product.model")



let userCart = async (req, res) => {
    try {
        let cart = await cartSchema.find().populate("product").populate({ path: "user", select: "id  name" })
        res.status(200).json({
            message: 'cart items fecth successfully.... ',
            cart,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let addToCart = async (req, res) => {
    try {

        let body = req.body;
        let productId = body.product


        let existingcartitem = await cartSchema.findOne({ product: productId })
        // console.log(existingcartitem);

        if (existingcartitem) {
            res.status(401).json({
                message: "This product is already in your cart."
            })
        } else {

            let cart = await cartSchema.create(body)
            // console.log(cart);

            res.status(201).json({
                message: "product successfully added to your cart!",
                cart,
            })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

let deleteCart = async (req, res) => {
    try {
        let { id } = req.params;

        let cart = await cartSchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "cart product delete successfully...",
            cart,
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

let updateCart = async (req, res) => {
    try {
        let { id } = req.params;
        let { quentity } = req.body;
        // console.log(que);

        let cart = await cartSchema.findByIdAndUpdate(id,
            { quentity: quentity }, { new: true });
        // console.log(cart);

        res.status(200).json({
            message: "cart existed success",
            cart: cart,
        })




    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { userCart, addToCart, deleteCart, updateCart }