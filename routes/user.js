import { Router } from "express";
import User from "../db/index"; 
import userMiddleware from "../middleware/user";
import { z } from "zod";

const router = Router();
router.use(userMiddleware);

const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const signinSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

router.post("/user/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    signupSchema.parse({ username, password });
    const user = await User.create({
      username,
      password,
    });
    res.json({
      msg: "User was created successfully",
    });
    console.log("User created successfully");
  } catch (e) {
    console.error(e);
    res.status(400).json({
      msg: e.errors ? e.errors[0].message : "Unable to create user",
    });
  }
});

router.post("/user/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    signinSchema.parse({ username, password });
    const user = await User.findOne({
      where: { username, password },
    });

    if (user) {
      res.json({
        msg: "User logged in successfully",
      });
      console.log("Login successful");
    } else {
      res.status(404).json({
        msg: "Invalid credentials",
      });
    }
  } catch (e) {
    console.error(e);
    res.status(400).json({
      msg: e.errors ? e.errors[0].message : "Error logging in",
    });
  }
});

export default router;
