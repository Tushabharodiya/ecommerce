let express = require("express")
const { wishlistController } = require("../controller")

let route = express.Router()

route.get("/get", wishlistController.getWishlist);
route.post("/add", wishlistController.createWishlist);
route.delete("/delete/:id", wishlistController.deleteWishlist)


module.exports = route;