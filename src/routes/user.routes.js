const express = require("express");
const userController = require("../controllers/user.controller");
const uploadCloud = require("../middlewares/upload-middleware");
const router = express.Router();

// Define your routes and middleware for this router
router.post(
  "/createUser",
  uploadCloud.single("avatar"),
  userController.createNewUser
);
router.get("/:accountType", userController.getUserByType);

router.get("/allUser", userController.getAllUser);

router.delete("/deleteUser", userController.deleteUser);

router.put("/", userController.updateUser);

// Export the router as a module

module.exports = router;
