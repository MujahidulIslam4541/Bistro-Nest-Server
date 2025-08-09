const express = require("express");
const router = express.Router();
const { postUser, getAllUsers, deleteUser } = require("../controllers/userController");

router.post("/user", postUser);
router.get("/users", getAllUsers);
router.delete("/user/:id", deleteUser);
module.exports = router;
