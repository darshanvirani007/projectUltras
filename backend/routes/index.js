var express = require("express");
const multer = require("../Controllers/Multer");
const AdminController = require("../Controllers/AdminController");
const Products = require("../Models/products");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET jsgrid page. */
router.get("/products", AdminController.getProduct);
router.get("/orders",AdminController.getOrder, function (req, res, next) {
  res.render("orderlist", { title: "Express" });
});
router.get("/users",AdminController.getUser, function (req, res, next) {
  res.render("userList", { title: "Express" });
});
router.get("/product/add", function (req, res, next) {
  res.render("addProduct", { edit: false, products : null });
});
router.get("/product/edit/:id", async function (req, res, next) {
  let products = await Products.findById(req.params.id);
  res.render("addProduct", { edit: true, products });
});
router.post("/product/add", multer.upload.any(), AdminController.addProduct);
router.get("/product/delete/:id", multer.upload.any(), AdminController.deleteProduct);
router.post(
  "/product/edit/:id",
  multer.upload.any(),
  AdminController.editProduct
);

module.exports = router;
