const express = require("express");
const connectDB = require("./database/connect");
const app = express();


const flight_routes =  require("./routes/flight");

app.use("/api/flights", flight_routes);

app.get('/', async(req, res)=>{
  res.send("flights are available", flight_routes)
})


const start = async() => {

  try{

      await connectDB(uri);

      app.listen(4000, ()=>{
          console.log('server is running on http://localhost:4000')
      });

  } catch(error){
      console.log(error)
  }
};
start();