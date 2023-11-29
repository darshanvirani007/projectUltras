const User = require("../Models/User");
const Product = require("../Models/products");
const Order = require("../Models/order");
exports.getProduct = async (req, res, next) => {
  try {
    let products = await Product.find();
    res.render("productList", { products });
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
exports.getOrder = async (req, res, next) => {
  try {
    let orders = await Order.find().populate("productsList.productsId");
    console.log(orders);
    res.render("orderlist", { orders });
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
exports.getUser = async (req, res, next) => {
  try {
    let users = await User.find();
    res.render("userList", { users });
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
exports.addProduct = async (req, res, next) => {
  try {
    let images = req.files.map((e) => {
      return e.filename;
    });
    console.log(req.body);
    await Product.create({
      title: req.body.title,
      images,
      price: req.body.price,
      description: req.body.description,
      color: req.body.color.split(","),
      size: req.body.size.split(","),
      SKU: req.body.SKU,
    });
    res.redirect("/products");
    // res.status(200).json({
    //   status: "200",
    //   message: "Add product successfully",
    //   data: newproduct,
    // });
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/products");
    
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
exports.editProduct = async (req, res, next) => {
  try {
    let images = req.files.map((e) => {
      return e.filename;
    });
    console.log(req.body);
    if (images.legnth) {
      await Product.updateOne(
        {
          _id: req.params.id,
        },
        {
          title: req.body.title,
          images,
          price: req.body.price,
          description: req.body.description,
          color: req.body.color.split(","),
          size: req.body.size.split(","),
          SKU: req.body.SKU,
        }
      );
    } else {
      await Product.updateOne(
        {
          _id: req.params.id,
        },
        {
          title: req.body.title,
          price: req.body.price,
          description: req.body.description,
          color: req.body.color.split(","),
          size: req.body.size.split(","),
          SKU: req.body.SKU,
        }
      );
    }
    res.redirect("/products");
    // res.status(200).json({
    //   status: "200",
    //   message: "Add product successfully",
    //   data: newproduct,
    // });
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
