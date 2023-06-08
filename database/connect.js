const mongoose = require("mongoose");


uri = "mongodb+srv://nitinsingh:negi@nitincluster.qgosivf.mongodb.net/nitincluster?retryWrites=true&w=majority"
const connectDB = ()=>{

    // console.log("connect with database");
return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
};

module.exports = connectDB;