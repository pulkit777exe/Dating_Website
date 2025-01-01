import express from "express";
import { User } from "../db/index";
import userMiddleware from "../middleware/user";
import jwt from "jsonwebtoken";
import { z } from "zod";
import bcrypt from "bcryptjs";

const JWT_SECRET = "randomdatingwebsite"; 

const app = express();
app.use(express.json()); 
app.use(userMiddleware);

const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  email: z.string().email("Invalid email address"),
});

const signinSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

app.post("/user/signup", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    signupSchema.parse({ username, password, email });
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ msg: "Username already taken" });
    }

    const user = await User.create({ username, password, email });

    res.json({
      msg: "User created successfully",
    });
    console.log("User created successfully");
  } catch (e) {
    console.error(e);
    res.status(400).json({
      msg: e.errors ? e.errors[0].message : "Unable to create user",
    });
  }
});

app.post("/user/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    signinSchema.parse({ username, password });

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ msg: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(404).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });

    res.json({
      msg: "User logged in successfully",
      token,
    });
    console.log("Login successful");
  } catch (e) {
    console.error(e);
    res.status(400).json({
      msg: e.errors ? e.errors[0].message : "Error logging in",
    });
  }
});

app.get("/my-connections", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id).populate("connections");
    res.json(user.connections);
  } catch (e) {
    console.error(e);
    res.status(401).json({ msg: "Invalid or expired token" });
  }
});

app.get("/my-posts", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id).populate("posts");
    res.json(user.posts);
  } catch (e) {
    console.error(e);
    res.status(401).json({ msg: "Invalid or expired token" });
  }
});

export default app;
