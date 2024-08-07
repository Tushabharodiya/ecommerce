const { categorySchema } = require("../models");




let getCategory = async (req, res) => {
    try {
        let category = await categorySchema.find()

        res.status(200).json({
            message: "category get success",
            category,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let createCategory = async (req, res) => {
    try {

        let data = req.body;
        let FindName = await categorySchema.findOne({ name: data.name })
        if (!data.name || !data.desc) {
            throw new Error("all files are reqired")
        }
        if (FindName) {
            throw new Error("this is alreay exsited")
        }
        let category = await categorySchema.create(data)
        res.status(201).json({
            message: "category add success",
            category,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let updateCategory = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let data = await categorySchema.findByIdAndUpdate(id, body)
        let category = {
            id,
            ...body
        }

        res.status(200).json({
            message: "category update success",
            category,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let deleteCategory = async (req, res) => {
    try {

        let { id } = req.params;

        let category = await categorySchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "category delete success",
            category,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getCategory, createCategory, updateCategory, deleteCategory }