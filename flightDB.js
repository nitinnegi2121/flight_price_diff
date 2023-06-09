const connectDB = require('./database/connect');
const Flight = require("./models/flights");

const FlightJson = require('./flight.json');

const start = async () =>{
    try{
  
  await connectDB(uri);
  await Flight.create(FlightJson);
  // await Flight.deleteMany();
  console.log("success");

    }catch(error){
        console.log(error);
    }
}

start();