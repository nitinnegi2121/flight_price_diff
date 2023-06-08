const Flight = require("../models/flights");


const getflight = async (req, res)=>{
    
  const flight = await Flight.find({});
  res.status(200).json({flight })
}

const flightPrices = async(req, res) =>{
  
  const flight = await Flight.find(req.query);

console.log(
  " ~ file: flight.js ~ line 15 ~ flightPrices ~ req.query",
  req.query
)

  res.status(200).json({flight })
}



module.exports = {getflight, flightPrices};