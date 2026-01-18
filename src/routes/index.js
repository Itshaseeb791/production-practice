const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

router.post("/signup", authController.signup);
router.get("/users", userController.getUsers);

module.exports = router;
