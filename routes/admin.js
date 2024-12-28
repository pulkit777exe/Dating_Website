import Admin from "../db/index"
import adminMiddleware from "../middleware/admin"

const { Router } = require("express")
const router = Router();

router.post("/signup",adminMiddleware,function(req,res){
    const username= req.headers.username;
    const password = req.headers.password;

    try{
         const user = Admin.create({
            username : username,
            password : password
        })
    } catch(e){
        console.error(e);
    } finally {
        console.log("Login Successful")
    }
     
    if(user){
        res.json({
            msg : "User was created succesfully"
        })
    } else {
        res.json({
            msg : "Unable to login"
        })
    }
})
router.post("/signin",adminMiddleware,function(req,res){
    const username= req.headers.username;
    const password = req.headers.password;

    try{
         const user = Admin.findOne({
            username : username,
            password : password
        })
    } catch(e){
        console.error(e);
    } finally {
        console.log("Login Successful")
    }
    if(user){
        res.json({
            msg : "User was logged in succesfully"
        })
    } else {
        res.json({
            msg : "Error logging in "
        })
    }
})