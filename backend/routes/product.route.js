let express = require("express");
const { productController } = require("../controller");
const multer = require('multer')
const storage = multer.diskStorage({});
const upload = multer({ storage: storage }).fields([{ name: 'image' }, { name: 'backimage' }]);

let route = express.Router();

route.get("/get", productController.getProduct);
route.post("/add", upload, productController.addProduct);
route.delete("/delete/:id", productController.deleteProduct);
route.put("/update/:id", upload, productController.updateProduct)
// route.patch("/view/:id", productController.updateProduct);

module.exports = route;