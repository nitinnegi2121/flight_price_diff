const Flight = require("../models/flights");


const getflight = async (req, res)=>{
 
  const { destination, name } = req.query;
  const queryObject = {};
  

  if( destination ){
    queryObject.destination = destination;
  }

  if(name){
    queryObject.name = name;
  }

  console.log(queryObject);
    
  const flight = await Flight.find(queryObject);
  res.status(200).json({flight })
}

const flightPrices = async(req, res) =>{
  
  const flight = await Flight.find(ueryObject);

console.log(
  " ~ file: flight.js ~ line 15 ~ flightPrices ~ req.query",
  req.query
)

  res.status(200).json({flight })
}



module.exports = {getflight, flightPrices};