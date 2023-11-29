const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const User = require("../Models/User");


exports.login = async function (req, res, next) {
  try {
    let email = req.body.email;

    let data = await User.findOne({ email });

    if (!data) {
      throw new Error("Please enter valid email");
    } else {
      let pass = req.body.password;
      let checkUser = await bcrypt.compare(pass, data.password);
      if (!checkUser) {
        throw new Error("Please enter valid password");
      } else {
        var token = await jwt.sign({ id: data._id }, "malkari");
        res.status(200).json({
          status: "200",
          message: "login successfully",
          data: data,
          token,
        });
      }
    }
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};

exports.signUp = async function (req, res, next) {
  try {
    let email = req.body.email;
    let check = await User.find({ email: email });
    let pass = req.body.password;

    if (check[0]) {
      throw new Error("this emailId is already exist!!");
    }
    if(!pass.length){
      throw new Error("this passwprd is not vaild!!");
    }
    let user = { ...req.body };
    user.password = await bcrypt.hash(pass, 15);
    let newUser = await User.create(user);
    
    let token = await jwt.sign({ id: newUser._id }, "malkari");
    res.status(200).json({
      status: "200",
      message: "registration successfully",
      data: newUser,
      token,
    });
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};

exports.protect = async function (req, res, next) {
  try {
    console.log("Middleware call");

    let token = req.headers.authorization;
    if (!token) {
      throw new Error("Please send token");
    }

    let tokenData = await jwt.verify(token.replace("Bearer ", ""), "malkari");

    req.headers.authorization = tokenData.id;

    let checkUser = await User.findById(tokenData.id);

    if (!checkUser) {
      throw new Error("User Not Found");
    }
    next();
  } catch (err) {
    res.status(200).json({
      status: "500",
      message: err.message,
    });
  }
};