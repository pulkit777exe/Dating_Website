import userMiddleware from "../middleware/user"
const express = require("express");
const User = require("../db/index"); 
const router = express.Router();

router.post("/user/signup",userMiddleware, async (req, res) => {
  const { username, password } = req.body; 

  try {
    const user = await User.create({
      username: username,
      password: password, 
    });
    res.json({
      msg: "User was created successfully",
    });
    console.log("User created successfully");
  } catch (e) {
    console.error(e);
    res.json({
      msg: "Unable to create user",
    });
  }
});

router.post("/user/signin", userMiddleware ,async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: { username: username, password: password },
    });

    if (user) {
      res.json({
        msg: "User logged in successfully",
      });
      console.log("Login successful");
    } else {
      res.json({
        msg: "Invalid credentials",
      });
    }
  } catch (e) {
    console.error(e);
    res.json({
      msg: "Error logging in",
    });
  }
});

module.exports = router;
