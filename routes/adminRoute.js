// routes/adminRoute.js
const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const { verifyRole } = require("../middlewares/roleMiddleware");
const User = require("../models/authModel");

router.get("/users", authMiddleware, verifyRole("admin"), async (req, res) => {
  try {
    const users = await User.find().select("-password"); // exclude passwords
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
