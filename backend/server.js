const express =require('express');
const notes =require("../frontend/src/data/notes.js");
const dotenv=require('dotenv');
const app =express();

dotenv.config();

app.get('/', (req, res)=>{
    res.send("Api is running")
    
})

app.get('/api/notes', (req, res)=>{
    res.json(notes)

})
app.get('/api/notes/:id', (req, res)=>{
    const note=notes.find((n)=>n._id ===req.params.id);
    res.json(note)
})
const PORT =process.env.PORT? process.env.PORT: 5060;
                                            // Template string
app.listen(PORT,console.log(`Server started on PORT ${PORT}`))