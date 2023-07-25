const express = require("express");
const router = express.Router()
const authController = require("../controllers/authController")

// register user
router.post("/signup", authController.signUp);

// signin user
router.post("/signin", authController.signIn)

module.exports = router;