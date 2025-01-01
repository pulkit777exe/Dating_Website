import express from "express";
import { Admin } from "../db/index"; 
import adminMiddleware from "../middleware/admin";
import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "randomdatingwebsite"; 

const app = express();

app.use(adminMiddleware);
app.use(express.json()); 

const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const signinSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    signupSchema.parse({ username, password });

    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      return res.status(400).json({ msg: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({ username, password: hashedPassword });

    res.json({
      msg: "Admin was created successfully",
      user: admin,
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      msg: e.errors ? e.errors[0].message : "Error creating admin",
    });
  }
});

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    signinSchema.parse({ username, password });

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(404).json({ msg: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(404).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id, username: admin.username }, JWT_SECRET, {
      expiresIn: "1h", 
    });

    res.json({
      msg: "Admin logged in successfully",
      token,
    });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      msg: e.errors ? e.errors[0].message : "Error logging in",
    });
  }
});

export default app;
