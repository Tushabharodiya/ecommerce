let express = require("express");
const { userController } = require("../controller");
const { isLogin } = require("../middleware/auth");

let route = express.Router();

route.post("/register", userController.createUser);
route.post("/login", userController.userLogin);
route.get("/profile", isLogin(["admin", "user"]), userController.userProfile);
route.patch("/forgot_password", userController.forgotPasssword);


module.exports = route;