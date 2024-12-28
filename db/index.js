const mongoose = require("mongoose")
const Schema  = mongoose.Schema;


const userSchema = new Schema({
    username : String,
    password : String,
    is_premium : Boolean
})

const adminSchema = new Schema({
    username : String,
    password : String
})

const User = mongoose.model("User",userSchema)
const Admin = mongoose.model("Admin",adminSchema)

module.exports = {
    User,
    Admin
}