const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  quantity: {
    type: Number,
    require: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
