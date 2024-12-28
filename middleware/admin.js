import { Admin } from "../db";

async function adminMiddleware(req,res,next){
    const {username , password} = req.body;

    try{
        const admin = await Admin.findOne({
            username : username,
            password : password
        })
        next()
    } catch(e){
        console.error(e);
        res.status(403).json({
            msg : "User not found"
        })
    }
}

module.exports = adminMiddleware