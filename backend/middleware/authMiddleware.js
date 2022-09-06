const jwt=require("jsonwebtoken");

const User =require("../models/userModels")

const asyncHandler=require("express-async-handler")

const protect = asyncHandler(async(req,res,next)=>{

    let token;

    if(req.headers.authorization 
        && req.headers.authorization.startsWith("Bearer"))
        {
            try{

                token=req.headers.authorization.split(" ")[1];


                const decoded =jwt.verify(token,process.env.JWT_SECRET);
                //  find the user by decoded.id and store in req.body and leave the password
                req.user= await User.findById(decoded.id).select("-password");
                // console.log(req.user);
                next();
            }
            catch(error){
                res.status(400);
                throw new Error("Not authorized token failed")
            }
        }
        if(!token){
            res.status(401);
            throw new Error("Not authorized, no token")
        }



})

module.exports={protect}