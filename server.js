const express = require ("express");
const { get } = require("express/lib/response");
const { listen } = require("express/lib/application");
const app =  express();
const cors =require('cors');
require('dotenv').config();
const axios = require('axios');
const res = require("express/lib/response");
const { response } = require("express");


app.use(cors())

app.use("/locations/", require("./routes/locationsRoutes"));


app.listen(3001, function(){
    console.log("express server is runing on port 3001");
})

