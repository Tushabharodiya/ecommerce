let express = require("express")
let routes = express.Router();

let adminRoute = require("./admin.route");
let userRoute = require("./user.route");
let categoryRoute = require("./category.route");
let productRoute = require("./product.route");
let cartRoute = require("./cart.route");
let wishlistRoute = require("./wishlist.route")

routes.use("/admin", adminRoute);
routes.use("/user", userRoute);
routes.use("/category", categoryRoute);
routes.use("/product", productRoute);
routes.use("/cart", cartRoute);
routes.use("/wishlist", wishlistRoute)

module.exports = routes;