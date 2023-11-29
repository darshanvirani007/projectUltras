var express = require("express");
var router = express.Router();
const ApiController = require("../Controllers/ApiController");
const AuthController = require("../Controllers/AuthController");

/* GET products listing. */
router.get("/products", ApiController.getProducts);

/* GET one products listing. */
router.get("/product/:id", ApiController.getOneProduct);

/* user login request listing. */
router.post("/auth/login", AuthController.login);

/* user signUp request listing. */
router.post("/auth/signup", AuthController.signUp);

/*GET cart request listing. */
router.get("/carts", AuthController.protect, ApiController.getCart);

/*Add to cart request listing. */
router.post("/cart/add",AuthController.protect, ApiController.addToCart, ApiController.getCart);

/*remove from cart request listing. */
router.post("/cart/remove",AuthController.protect, ApiController.removeFromCart, ApiController.getCart);

/*Delete from cart request listing. */
router.post("/cart/delete",AuthController.protect, ApiController.deleteFromCart, ApiController.getCart);

/*Order request listing. */
router.post("/order", ApiController.order);

module.exports = router;
