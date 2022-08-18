const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const generateTokens = require("../utils/generateTokens");

// async function because requesting to MongoDb
const registerUser= asyncHandler(async(req,res)=>{
    const {name,email,password,pic}=req.body;

    //  findOne mongodb query
    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error("User already exists");
    }
    const user =await User.create({
        name,
        email,
        password,
        pic

    });
    if(user){ res.status(201).json({
        _id:user.id,
        name:user.name,email,
        email:user.email,email,
        password:user.password,
        isAdmin:user.isAdmin,
        pic:user.pic,pic,
        token:generateTokens(user._id)
    })}
    else{ res.status(400)
    
    throw new Error("Error Occured")}
   

});

const authUser= asyncHandler(async(req, res)=>
{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user && (await user.matchPassword(password)))
    {
        res.status(200).json({name:user.name,_id:user.id,email:user.email,token:generateTokens(user._id)})
    }
    else{ res.status(400);
        throw new Error("Error Occured");}

})
module.exports ={registerUser,authUser}