const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.get("/", (req, res) => {
  console.log(req.body);
  const user = User(req.body);
  user.save();
  res.send("ok got it");
});

module.exports = router;
