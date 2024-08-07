const { adminSchema } = require("../models");


let getAdmin = async (req, res) => {
    try {
        let body = req.body;

        let admin = await adminSchema.create(body)

        res.status(201).json({
            message: "admin create successfully....",
            admin
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = { getAdmin }