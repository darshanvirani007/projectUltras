const Cart = require("../Models/carts");
const Products = require("../Models/products");
var jwt = require("jsonwebtoken");
const User = require("../Models/User");
const Order = require("../Models/order");
var mongoose = require("mongoose");

exports.getProducts = async (req, res, next) => {
  try {
    let products = await Products.find();
    res.status(200).json({
      status: "200",
      message: "Products get successfully",
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
exports.getOneProduct = async (req, res, next) => {
  try {
    let product = await Products.findById(req.params.id);
    res.status(200).json({
      status: "200",
      message: "Product get successfully",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
exports.getCart = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    let carts = await Cart.find({
      userId: req.headers.authorization,
    }).populate("productsId");

    let amout = await Cart.aggregate([
      {
        $match: { userId: new mongoose.Types.ObjectId(req.headers.authorization) },
      },
      {
        $lookup: {
          from: "products", // Assuming your Products model is named 'products'
          localField: "productsId",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product",
      },
      {
        $project: {
          _id: 1,
          userId: 1,
          totalAmount: { $multiply: ["$quantity", "$product.price"] },
        },
      },
      {
        $group: {
          _id: "$_id",
          totalAmount: { $sum: "$totalAmount" },
        },
      },
    ]);

    let totalAmount = amout.reduce((a, b) => a + (b["totalAmount"] || 0), 0);

    res.status(200).json({
      status: "200",
      message: "Carts get successfully",
      data: {
        carts,
        totalAmount,
      },
    });
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
exports.addToCart = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    let cart = await Cart.findOne({
      userId: req.headers.authorization,
      productsId: req.body.productId,
    });
    if (cart) {
      await Cart.findByIdAndUpdate(
        { _id: cart._id },
        { $inc: { quantity: 1 } }
      );
    } else {
      await Cart.create({
        userId: req.headers.authorization,
        productsId: req.body.productId,
        quantity: req.body.quantity,
      });
    }
    cart = await Cart.findOne({
      userId: req.headers.authorization,
      productsId: req.body.productId,
    });
    next();
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
exports.removeFromCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({
      userId: req.headers.authorization,
      productsId: req.body.productId,
    });
    if (cart === null)
      throw new Error("This product is not avilable in you cart");
    if (cart.quantity > 1) {
      await Cart.findByIdAndUpdate(
        { _id: cart._id },
        { $inc: { quantity: -1 } }
      );
    }
    cart = await Cart.findOne({
      userId: req.headers.authorization,
      productsId: req.body.productId,
    });
    next();
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
exports.deleteFromCart = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    let cart = await Cart.findOne({
      userId: req.headers.authorization,
      productsId: req.body.productId,
    });
    if (cart) {
      await Cart.findByIdAndDelete({ _id: cart._id });
    } else {
      throw new Error("This product is not avilable in you cart");
    }
    cart = await Cart.findOne({
      userId: req.headers.authorization,
      productsId: req.body.productId,
    });
    next();
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
exports.order = async (req, res, next) => {
  try {
    let token = req.body.token;
    if (!token) {
      throw new Error("Please send token");
    }

    let tokenData = await jwt.verify(token.replace("Bearer ", ""), "malkari");

    let checkUser = await User.findById(tokenData.id);

    if (!checkUser) {
      throw new Error("User Not Found");
    }
    let {
      firstName,
      lastName,
      companyName,
      CountryOrRegion,
      streetAddress1,
      streetAddress2,
      TownOrCity,
      state,
      zipCode,
      phone,
      email,
      amout,
      listGroupRadios,
    } = req.body;
    let cart = await Cart.find({
      userId: tokenData.id,
    });
    await Cart.deleteMany({
      userId: tokenData.id,
    });
    let neworder = {
      firstName,
      lastName,
      companyName,
      CountryOrRegion,
      streetAddress: {
        first: streetAddress1,
        second: streetAddress2,
      },
      TownOrCity,
      state,
      zipCode,
      phone,
      email,
      listGroupRadios,
      amout,
      productsList: cart,
      userId: tokenData.id,
    };
    await Order.create(neworder);
    // console.log(neworder);
    res.redirect("http://localhost:3000/thankyou");
    
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};
