require("dotenv").config();

const Redis = require("ioredis");

const client = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD

});

client.on('connect',()=>{
    console.log("connecting to redis...");
} );
client.on("ready",()=>{
    console.log("Redis is ready");
})
client.on('error', (err) => console.log('Redis Client Error', err));
client.on('close',()=>{
    console.log("Redis connection closed");
})

module.exports = client;

