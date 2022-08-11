const express =require('express');
const notes =require("../frontend/src/data/notes.js");
const dotenv=require('dotenv');
const app =express();
const mongoose = require('mongoose');

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true},()=>{

    console.log("Connected to MongoDB")
});

app.get('/', (req, res)=>{
    res.send("Api is running")
    
})

app.get('/api/notes', (req, res)=>{
    res.json(notes)

})

const PORT =process.env.PORT? process.env.PORT: 5060;
                                            // Template string
app.listen(PORT,console.log(`Server started on PORT ${PORT}`))