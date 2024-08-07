const fs = require('fs');
const path = require('path');
const uploadImage = require("../middleware/Coludinary")
const { productSchema } = require("../models")
const cloudinary = require('../middleware/Coludinary')
// const cloudinary = require('cloudinary').v2;



let getProduct = async (req, res) => {
    try {

        let product = await productSchema.find().populate('category', 'name');

        res.status(200).json({
            message: "product get successfully...",
            product,
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

let addProduct = async (req, res) => {
    try {

        let body = req.body;
        const image = req.files['image'];
        const backimage = req.files['backimage'];
        // console.log(image);

        let firstImage = await cloudinary.uploader.upload(image[0].path);
        // console.log(firstImage)
        let secoundImage = await cloudinary.uploader.upload(backimage[0].path)


        if (!body.name || !body.category || !body.brand || !body.price) {
            throw new Error("All fields are required");
        }
        let newBody = {
            image: firstImage.secure_url,
            backimage: secoundImage.secure_url,
            image_public_id: firstImage.public_id,
            backimage_public_id: secoundImage.public_id,
            ...body,
        }
        // console.log(newBody);


        let product = await productSchema.create(newBody)
        product = await product.populate('category', 'name');

        // console.log(product);


        res.status(201).json({
            message: "Product added successfully",
            product,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let deleteProduct = async (req, res) => {
    try {

        let { id } = req.params;

        let product = await productSchema.findById(id)
        if (!product) {
            throw new Error("product are not found");
        }
        await cloudinary.uploader.destroy(product.image_public_id);
        if (product.backimage_public_id) {
            await cloudinary.uploader.destroy(product.backimage_public_id);
        }
        await productSchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "product delete successfully...",
            product,
        });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

};

let updateProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        if (req.file) {
            let old = await productSchema.findById(id)
            console.log(old);
            await cloudinary.uploader.destroy(old.public_id)

            let firstImage = await cloudinary.uploader.upload(req.file.path)
            let secoundImage = await cloudinary.uploader.upload(req.file.path)

            let newBody = {
                image: firstImage.secure_url,
                backimage: secoundImage.secure_url,
                image_public_id: firstImage.public_id,
                backimage_public_id: secoundImage.public_id,
                ...body,
            }

            let product = await productSchema.findByIdAndUpdate(id, newBody)
            console.log(product);
            return res.status(200).json({
                message: "Product successfully update",
                newBody,
            })

        } else {
            let old = await productSchema.findById(id)
            let newBody = {
                image: old.secure_url,
                backimage: old.secure_url,
                image_public_id: old.public_id,
                backimage_public_id: old.public_id,
                ...body,
            }

            let product = await productSchema.findByIdAndUpdate(id, newBody)
            console.log(product);
            return res.status(200).json({
                message: "Product successfully update",
                newBody,
            })
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// let updateProduct = async (req, res) => {
//     try {
//         let { name, category, brand, price, discount, badges, stoke } = req.body;
//         let { id } = req.params;

//         let updateFields = {
//             name,
//             category,
//             brand,
//             price,
//             discount,
//             badges,
//             stoke
//         };
//         console.log(updateFields);

//         // let product = await productSchema.findById({ name })
//         // console.log(product, "lhcxfvh");

//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };







module.exports = { getProduct, addProduct, deleteProduct, updateProduct }