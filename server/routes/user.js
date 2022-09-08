const UserController = require("../controllers/userController");

const router = require("express").Router();

// Find All User
router.get("/", UserController.findAllUser);

// Register User
router.post("/", UserController.registerUser);

module.exports = router;