import { Router } from "express";
import Admin from "../db/index";
import adminMiddleware from "../middleware/admin";
import { z } from "zod";

const router = Router();
router.use(adminMiddleware)

const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const signinSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.headers;

  try {
    signupSchema.parse({ username, password });
    const user = await Admin.create({ username, password });

    res.json({
      msg: "User was created successfully",
      user: user
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({ msg: e.errors ? e.errors[0].message : "Error creating user" });
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.headers;

  try {
    signinSchema.parse({ username, password });
    const user = await Admin.findOne({ username, password });

    if (user) {
      res.json({
        msg: "User was logged in successfully",
        user: user
      });
    } else {
      res.status(404).json({
        msg: "Error logging in. Invalid credentials."
      });
    }
  } catch (e) {
    console.error(e);
    res.status(400).json({ msg: e.errors ? e.errors[0].message : "Error logging in" });
  }
});

export default router;
