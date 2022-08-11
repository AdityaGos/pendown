const mongoose = require('mongoose')

const connectDB=async ()=>{

    try{
        const conn=await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParse:true,
            useCreateIndex:true,


        });
        console.log(`MongoDB connected${conn}`);
    }catch(err){console.error(err);}
}

module.exports=connectDB;