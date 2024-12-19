const express = require("express");
const app = express();
let PORT = 3000;
app.listen(PORT,()=>{
    console.log("Hi i am Online "+PORT)
})


app.get("/res",(req,res)=>{
    res.send("Hello ")
})
