const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    console.log("received a request");

    res.status(200).send("ok");
})
app.listen(3000,()=>{
    console.log("running on port 3000")
})