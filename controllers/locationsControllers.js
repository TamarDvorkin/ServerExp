
const Math = require("mathjs");
const haversine = require("haversine");
const Json_data =

{

    "The Shire":
    {
        "name": "The Shire",
        "lot": "-37.8095635",
        "lng": "175.7732759",
        "nzName": "Matamata",
        "event": "Bilbo's 111 birthday"


    },

    "Ithilien":
    {
        "name": "Ithilien",
        "lot": "-39.319350",
        "lng": "175.502633",
        "nzName": "Mangawhero River",
        "event": "Gollum catches a fish"


    },

    "Mordor":
    {
        "name": "Mordor",
        "lot": "-39.277783",
        "lng": "175.610433",
        "nzName": "Whakapapa skifield",
        "event": "Isildur cuts off Sauron's finger and the Ring"
    },


    "Dimholt Road": {
        "name": "Dimholt Road",
        "lot": "-41.447683",
        "lng": "175.244567",
        "nzName": "Putangirua Pinnacles",
        "event": "Aragorn, Legolas and Gimli ride to meet the Army of the Dead"
    },

    "Dimrill Dale": {
        "name": "Dimrill Dale",
        "lot": "-41.558217",
        "lng": "172.540017",
        "nzName": "Mount Owen route",
        "event": " The Fellowship, now without Gandalf, escape Moria"
    },


    "Ered Nimrais": {
        "name": "Ered Nimrais",
        "lot": "-43.428667",
        "lng": "170.168417",
        "nzName": "Mount Gunn",
        "event": "The beacons along The White Mountains from Gondor to Rohan are lit"
    },

    "Edoras": {
        "name": "Edoras",
        "lot": "-43.580867",
        "lng": "170.970200",
        "nzName": "Mount Sunday",
        "event": "The capital of Rohan, the hall of King Theoden"
    },


    "Ford of Bruinen": {
        "name": "Ford of Bruinen",
        "lot": "-44.845400",
        "lng": "168.684233",
        "nzName": "Skippers ",
        "event": "Arwen defeats the Nazgûl by conjuring up a flood"
    },


    "Isengard": {
        "name": "Isengard",
        "lot": "-44.673617",
        "lng": "168.340950",
        "nzName": "Rees-Dart Track",
        "event": "Gandalf rides up to Isengard in Nan Curunír"
    },

    "Ithilien camp": {
        "name": "Ithilien camp",
        "lot": "-45.069183",
        "lng": "168.543117",
        "nzName": "Twelve Mile Delta Campsite",
        "event": "Sam and Gollum discuss coney cookery"
    },

    "The Argonath on the Anduin River": {
        "name": "The Argonath on the Anduin River",
        "lot": "-45.011850",
        "lng": "168.892783",
        "nzName": "Kawarau Suspension Bridge",
        "event": "The Fellowship pass the Pillars of the Kings on the Anduin River"
    },


    "Silverlode and Anduin rivers": {
        "name": "Silverlode and Anduin rivers",
        "lot": "-45.316167",
        "lng": "168.179067",
        "nzName": "Mararoa River Track, swingbridge",
        "event": "The Fellowship leave Lothlórien"
    },


    "Fangorn Forest": {
        "name": "Fangorn Forest",
        "lot": "-45.332800",
        "lng": "168.173400",
        "nzName": "Mararoa River Track, swingbridge",
        "event": "Aragorn, Legolas and Gimli are looking for Merry and Pippin"
    },

    "Rivendell": {
        "name": "Rivendell",
        "lot": "-45.422633",
        "lng": "167.346667",
        "nzName": "Fiordland National Park",
        "event": "The Fellowship move south out of Rivendell"
    },


    "Dead Marshes": {
        "name": "Dead Marshes",
        "lot": "-45.492783",
        "lng": "167.698283",
        "nzName": "Manapouri ",
        "event": "Gollum guides Frodo and Sam through the swamp"
    }
};


const result = [];

for (const i in Json_data)
    result.push([i, Json_data[i]]);



const newArrayName = [];
for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
        newArrayName.push(result[i][j].name);
    }
}

const ArrayName = newArrayName.filter(element => {
    return element !== undefined;
});

console.log(ArrayName);
//only  lot array
const newArraylot = [];
for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
        newArraylot.push(parseFloat(result[i][j].lot));
        
    }
}
console.log(newArraylot)

const Arraylot = newArraylot.filter(element => {
    return element !== NaN;
});

console.log(Arraylot);

//only lat array
const newArraylat = [];
for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
        newArraylat.push(parseFloat(result[i][j].lng));
    }
}

const Arraylat = newArraylat.filter(element => {
    return element !== NaN;
});


console.log(Arraylat);


const LOTRCoord = Arraylat.map(function (x, i) {

    return { Lat: x, lot: Arraylot[i] }
});

const NoNan = [];

for (let i = 0; i < LOTRCoord.length; i++) {
    if (i % 2 !== 0) { // index is even
        NoNan.push(LOTRCoord[i]);
    }
}


const eventOnly = [];
for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
        eventOnly.push(result[i][j].event);
    }
}

const eventClean = [];
for (let i = 0; i < eventOnly.length; i++) {
    if (i % 2 !== 0) { // index is even
        eventClean.push(eventOnly[i]);
    }
}


console.log(eventOnly, eventClean);



exports.locationsControllers=(req,res) => {
    
    const userLon=console.log(req.query.lon)
    const userLat= console.log(req.query.lat)
    console.log(NoNan);
    
  
    //loop over all NoNan lat and lot
    //keep results in new array, then find min
   

    const distanceHaver = [];
    
    for (let i = 0; i < NoNan.length; i++) {
        const start={
            latitude: req.query.lat,
            longitude: req.query.lon
    
        }
        const end= {
            latitude: NoNan[i].lot,
            longitude: NoNan[i].Lat   
        }
        console.log(start,end);
        /*
        just to check the module- hard coded calculate of haversine
     
        f= Math.sin(90)/2;
        
        PI= 3.14159265359;
        lon1 =  req.query.lon *PI / 180;
        lon2 = NoNan[i].lot *PI / 180;
        lat1 = req.query.lat * PI / 180;
        lat2 = NoNan[i].Lat *PI / 180;
        console.log(lat2);
   
        // Haversine formula
        
        const dlon = lon2 - lon1;
        const dlat = lat2 - lat1;
        const a = Math.pow(Math.sin(dlat / 2), 2)
                 + Math.cos(lat1) * Math.cos(lat2)
                 * Math.pow(Math.sin(dlon / 2),2);
               
        const c = 2 * Math.asin(Math.sqrt(a));       
   
        //Radius of earth in kilometers   
        const r = 6371;
   
        //calculate the result
        resultHaver = (c * r);
                
        distanceHaver.push((resultHaver));
    }
    */


        distanceHaver.push((haversine(start, end)));
   
    
    }
   
    console.log(distanceHaver);
   
    const min = (Math.min.apply( Math, distanceHaver ));
    const index = distanceHaver.indexOf(min);
    

    console.log(min,index)   
    console.log(newArrayName)
    //print only those who are not UNDEFIEND
    const NamesClean = [];

    for (let i = 0; i < newArrayName.length; i++) {
        if (newArrayName[i] !== undefined) { // index is even
            NamesClean.push(newArrayName[i]);
        }
    }

    console.log(NamesClean);
    console.log("Home is behind, the world ahead. You are closest to  "+NamesClean[index] )
    //reminder- NoNan are corrd witout NaN value
    const LocationChoosen= [NamesClean[index], NoNan[index].Lat, NoNan[index].lot, eventClean[index]]
    
    console.log(LocationChoosen)
    const myJsonString = JSON.stringify(LocationChoosen);
    console.log(myJsonString)
    

        //reult of haversine- take to the front 
        res.json(
            
            myJsonString        

  );
    }  
          

    








