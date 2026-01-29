const express = require("express");
const ip = require("ip");

const MAX_Allowed = 5;
const MAX_Time = 20000; //30s 

let ip_mapping = {

}

const app = express();

setInterval(()=>{
    ip_mapping={};
    console.log("IP_mapping cleared");

},MAX_Time)
app.use((req,res,next)=>{
    
    const my_ip=req.ip;
    const server_ip = ip.address();
    ip_mapping[my_ip] = ip_mapping[my_ip]+1 || 1;

    if (ip_mapping[my_ip]>MAX_Allowed){
        console.error("too many requests")
        console.log(`received request number ${ip_mapping[my_ip]} from ${server_ip}`);
        return res.status(429).send("too many request");
    }
    next();

})

app.get("/",(req,res)=>{
    console.log("received a request");
    res.status(200).send("ok");

})



app.listen(3000,()=>{
    console.log("running on port 3000")
})