const express = require("express");
const router = express.Router();
const { postUser, getAllUsers, deleteUser, makeAdmin } = require("../controllers/userController");

router.post("/user", postUser);
router.get("/users", getAllUsers);
router.delete("/user/:id", deleteUser);
router.patch("/user/admin/:id", makeAdmin); // Assuming makeAdmin is defined in userController
module.exports = router;
