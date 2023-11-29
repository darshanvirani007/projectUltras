const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: false,
  },
  CountryOrRegion: {
    type: String,
    require: true,
  },
  streetAddress: {
    first: {
      type: String,
      required: true,
    },
    second: {
      type: String,
      required: true,
    },
  },
  TownOrCity: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amout: {
    type: Number,
    required: true,
  },
  productsList: [
    {
      productsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
      },
      quantity: {
        type: Number,
        require: true,
      },
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
