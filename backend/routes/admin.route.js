let express = require("express");
const { adminController } = require("../controller");
let route = express.Router();


route.post("/create", adminController.getAdmin);

module.exports = route;