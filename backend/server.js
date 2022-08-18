const express =require('express');
const notes =require("../frontend/src/data/notes.js");
const dotenv=require('dotenv');
const app =express();
const mongoose = require('mongoose');
const userRoutes=require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true

    }).then(()=>console.log("Jai Shree Ram Connected to MongoDB "))
   .catch((err)=>console.error(err))


app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Api is running")
    
})

app.get('/api/notes', (req, res)=>{
    res.json(notes)

})

app.use('/api/user',userRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT =process.env.PORT? process.env.PORT: 5060;
                                            // Template string
app.listen(PORT,console.log(`Server started on PORT ${PORT}`))