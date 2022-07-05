
const Math = require("mathjs");
const haversine = require("haversine");
const LOTRplaces = require("../LOTRplaces.json");


const nameArray = [];
for (let place=0; place< LOTRplaces.length; place++ ){
    if (LOTRplaces[place].name!=undefined){
      nameArray.push(LOTRplaces[place].name)
}}

const lotArray = [];
for (let place=0; place< LOTRplaces.length; place++ ){
    if (LOTRplaces[place].name!=undefined){
        lotArray.push(LOTRplaces[place].lot)
}}

const latArray = [];
for (let place=0; place< LOTRplaces.length; place++ ){
    if (LOTRplaces[place].name!=undefined){
        latArray.push(LOTRplaces[place].lng)
}}

const sceneArray = []
for (let place=0; place< LOTRplaces.length; place++ ){
    if (LOTRplaces[place].name!=undefined){
        sceneArray.push(LOTRplaces[place].scene)
}}


const LOTRCoord = latArray.map(function (x, i) {

    return { Lat: x, lot: lotArray[i] }
});


exports.locationsControllers=(req,res) => {
    
    const userLon=console.log(req.query.lon)
    const userLat= console.log(req.query.lat)
    const distanceHaver = [];
    
    for (let i = 0; i < LOTRCoord.length; i++) {
        const start={
            latitude: req.query.lat,
            longitude: req.query.lon
    
        }
        //please pay attention- lot and lat(lng) are switched in DB
        const end= {
            latitude: LOTRCoord[i].lot,
            longitude: LOTRCoord[i].Lat   
        }
       
        distanceHaver.push((haversine(start, end)));
   
    }
   
    const minDistance = (Math.min.apply( Math, distanceHaver ));
    const indexofMin = distanceHaver.indexOf(minDistance);
    const LocationChoosen= [nameArray[indexofMin], LOTRCoord[indexofMin].Lat, LOTRCoord[indexofMin].lot,sceneArray[indexofMin]]
    const LocationChoosenJson = JSON.stringify(LocationChoosen);


        //reult of haversine- take to the front 
        res.json(
            
            LocationChoosenJson       

  );
    }  
          

    








