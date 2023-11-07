const express = require("express");
const authController = require("../controllers/auth.controller")

const router = express.Router();

// Define your routes and middleware for this router
router.post("/login", authController.loginController);

router.get("/register", authController.registerContrller);

// Export the router as a module

module.exports = router;
