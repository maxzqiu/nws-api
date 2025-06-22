const express=require("express");
const cors=require("cors");
const { builtinModules } = require("module");
const app=express()
app.use(cors())


let data=null;

app.get("/newportbeach",async (req,res)=>{
    try{
        let response=await fetch("https://api.weather.gov/gridpoints/SGX/38,57/forecast")
        let json=await response.json()
        res.send(json)
        res.sendStatus(200);
    }
    catch {
        res.send("ERROR: Failed to fetch. ")
        res.sendStatus(404)
    }
})

app.get("/losangeles",async (req,res)=>{
    try{
        let response=await fetch("https://api.weather.gov/gridpoints/LOX/155,45/forecast")
        let json=await response.json()
        res.send(json)
        res.sendStatus(200);
    }
    catch {
        res.send("ERROR: Failed to fetch. ")
        res.sendStatus(404)
    }
})

app.get("/claremont",async (req,res)=>{
    try{
        let response=await fetch("https://api.weather.gov/gridpoints/LOX/174,44/forecast")
        let json=await response.json()
        res.send(json)
        res.sendStatus(200);
    }
    catch {
        res.send("ERROR: Failed to fetch. ")
        res.sendStatus(404)
    }
})

// app.listen("8000", () => {
//     console.log("Connected to port 8000");
// });

module.exports = (req, res) => {
    app(req, res);
  };