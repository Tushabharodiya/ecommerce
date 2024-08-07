let jwt = require("jsonwebtoken")


let createToken = (data) => {
    return jwt.sign(data, process.env.SECRET);
}

let isLogin = ([...role]) => {
    try {

        return (req, res, next) => {
            let token = req.headers['authorization'].split(' ')[1]
            // console.log(token);
            if (!token) {
                throw new Error("you are not login")
            }
            let user = jwt.verify(token, process.env.SECRET);

            if (!role.includes(user.user.role)) {
                throw new Error("you are unauthorised");
            }
            req.user = user.user;
            // console.log(user.user);
            next();
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}





module.exports = { createToken, isLogin }


