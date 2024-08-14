let express = require("express");
const { cartController } = require("../controller");

let route = express.Router();

route.get("/get", cartController.userCart);
route.post("/addtocart", cartController.addToCart);
route.delete("/delete/:id", cartController.deleteCart);
route.patch("/update/:id",cartController.updateCart)

module.exports = route;