const jwt=require("jsonwebtoken");

const User =require("../models/userModels")

const asyncHandler=require("express-async-handler")

const protect = asyncHandler(async(req,res,next)=>{

    let token;

    if(req.header.authorization 
        && req.header.authorization.startsWith("Bearer"))
        {
            try{

                token=req.header.authorization.split(" ")[1];


                const decoded =jwt.verify(token,process.env.JWT_SECRET);
                //  find the user by decoded.id and store in req.body and leave the password
                req.user= await User.findById(decoded.id).select("-password")
            }
        }



})