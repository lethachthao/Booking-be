const express = require("express");
const userController = require("../controllers/user.controller")
const router = express.Router();

// Define your routes and middleware for this router
router.post("/createUser", userController.createNewUser);

router.get("/allUser", userController.getAllUser);

// Export the router as a module

module.exports = router
