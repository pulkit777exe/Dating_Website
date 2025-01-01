const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const z = require("zod");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/yourdbname"); 

const userSchema = new Schema({
  username: { type: String, required: true, minlength: 3 },
  password: { type: String, required: true, minlength: 6 },
  email: { type: String, required: true, unique: true, validate: /\S+@\S+\.\S+/ },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  }
  next();
});

const adminSchema = new Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);

module.exports = { User, Admin };
