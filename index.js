require("dotenv").config();

const express = require("express");
const ip = require("ip");
const redis = require('./helpers/redis');

const MAX_Allowed = 3;
const MAX_Time = 20000; //20s 

// let ip_mapping = {};

const app = express();

// setInterval(()=>{
//     ip_mapping={};
//     console.log("IP_mapping cleared");

// },MAX_Time)

app.use(async(req,res,next)=>{
    
    const my_ip=req.ip;
    const server_ip = ip.address();
    
    // ip_mapping[my_ip] = ip_mapping[my_ip]+1 || 1;

    // if (ip_mapping[my_ip]>MAX_Allowed){
    //     console.error("too many requests")
    //     console.log(`received request number ${ip_mapping[my_ip]} from ${server_ip}`);
    //     return res.status(429).send("too many request");
    // }
    
    const request = await redis.incr(my_ip);

    if (request===1){
        await redis.expire(my_ip,30); //all ips expires after 30s
    }

    if (request>MAX_Allowed){
        return res.status(429).json({
            message:"too many requests"
        });
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