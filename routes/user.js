const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

// user  C R U D operations
router
  .post("/", userController.createUser)
  .get("/", userController.getAllUser)
  .get("/:id", userController.getUser)
  .put("/:id", userController.replaceUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

exports.router = router;
