const { FILE } = require('dns');
const mongoose = require('mongoose');

var placesSchema = new mongoose.Schema({
    placeName: {
        type: String,
        required: true,
        min: 10,
        max: 255
    },
    image:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
})

mongoose.model("Place", placesSchema);