const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    airline:{
    
        type: String,
        required : true,
        // :{
        //     values: ["Vistara", "AirIndia", "AirAsia", ],enum
        //     message: '{values} no flight avaialable',
        // }

    },
    price:{
        type: String,
        required: [true,"price must be provided"],

    },
    destination:{
    
        type: String,
        required: true,

    },
    source:{

        type: String,
        required: true,

    },
    date:{
        type: Date,

    }
})

module.exports = mongoose.model('Flight', flightSchema);