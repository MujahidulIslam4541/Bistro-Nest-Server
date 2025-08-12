const express = require("express");
const router = express.Router();
const {
  postUser,
  getAllUsers,
  deleteUser,
  makeAdmin,
  getAdmin,
} = require("../controllers/userController");
const { verifyToken } = require("../controllers/jwtController");

router.post("/user", postUser);
router.get("/users", verifyToken, getAllUsers);
router.delete("/user/:id", verifyToken, deleteUser);
router.patch("/user/admin/:id", verifyToken, makeAdmin); // Assuming makeAdmin is defined in userController
router.get("/user/admin/:email",verifyToken, getAdmin);
module.exports = router;
