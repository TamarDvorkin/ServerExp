const express = require ("express");
const app =  express();
const cors =require('cors');
require('dotenv').config();

app.use(cors())
app.use("/locations/", require("./routes/locationsRoutes"));

app.listen(3001, function(){
    console.log("express server is runing on port 3001");
})

