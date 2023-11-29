const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: [],
  size: [],
  SKU: {
    type: Number,
    required: true,
  },
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;

