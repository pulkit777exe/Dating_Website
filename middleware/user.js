import { User } from "../db";

async function userMiddleware(req,res,next){
    const {username , password} = req.body;

    try{
        const user = await User.findOne({
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

module.exports = userMiddleware