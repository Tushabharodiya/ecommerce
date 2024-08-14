const { createToken } = require("../middleware/auth");
const { userSchema } = require("../models");


// register
let createUser = async (req, res) => {
    try {
        let body = req.body;

        if (!body.name || !body.email || !body.password) {
            throw new Error("all filed required")
        }

        let findByEmail = await userSchema.findOne({ email: body.email })
        if (findByEmail) {
            throw new Error("you are alreay register");
        }

        let user = await userSchema.create(body)

        res.status(201).json({
            message: "user register success",
            user,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// login
let userLogin = async (req, res) => {
    try {

        let { email, password } = req.body;

        let user = await userSchema.findOne({ email })

        if (!user) {
            throw new Error("user are not found");
        }

        if (user.password != password) {
            throw new Error("password invalid ! ");
        }

        let token = createToken({ user });
        res.cookie("token", token, {
            withCrdentials: true,
        })

        res.status(201).json({
            message: "user login success",
            user,
            token,
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// profile
let userProfile = async (req, res) => {
    try {

        let user = req.user;
        // console.log(user);
        res.status(200).json({
            message: " profile get success",
            user,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// fotger password


let forgotPasssword = async (req, res) => {
    try {
        let { password, email } = req.body;

        if (!password) {
            return res.status(400).json({ error: "Password is required!" });
        }

        // Find the user by email
        let user = await userSchema.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found!" });
        }

        let updatedUser = await userSchema.findByIdAndUpdate(
            user._id,
            { password: password },
            { new: true },
        );

        res.status(200).json({
            message: "Password successfully changed",
            user: updatedUser,
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createUser, userLogin, userProfile, forgotPasssword };