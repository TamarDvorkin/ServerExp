const express = require ("express");
const { get } = require("express/lib/response");
const { listen } = require("express/lib/application");
const app =  express();
const cors =require('cors');
require('dotenv').config();
const axios = require('axios');
const res = require("express/lib/response");
const { response } = require("express");
//import axios from "axios";
//import haversine from 'haversine-distance'



app.use(cors())
//app.get("/",(req,res)=>{
  //      res.json("hi")})



app.use("/locations/", require("./routes/locationsRoutes"));


app.listen(3001, function(){
    console.log("express server is runing on port 3001");
})

//here Im only openning the port for Backend- nothing else is done