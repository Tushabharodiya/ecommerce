let express = require("express");
const { productController } = require("../controller");
const multer = require('multer')
const storage = multer.diskStorage({});
const upload = multer({ storage: storage }).fields([{ name: 'image' }, { name: 'backimage' }]);

let route = express.Router();

route.get("/get", productController.getProduct);
route.get("/category", productController.getAllProduct)
route.get("/single-product/:id", productController.single_product)
route.post("/add", upload, productController.addProduct);
route.delete("/delete/:id", productController.deleteProduct);
route.put("/update", upload, productController.updateProduct)

module.exports = route;