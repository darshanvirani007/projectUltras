var express = require("express");
var router = express.Router();
const AuthController = require("../Controllers/AuthController");

router.post("/login", AuthController.login);
router.post("/signup", AuthController.signUp);
// router.post("/logout", AuthController.logOut);

module.exports = router;
