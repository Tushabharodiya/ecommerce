let express = require("express");
const { categoryController } = require("../controller");

let route = express.Router();

route.get("/get", categoryController.getCategory);
route.post("/add", categoryController.createCategory);
route.put("/update/:id", categoryController.updateCategory);
route.delete("/delete/:id",categoryController.deleteCategory)

module.exports = route;