// import { Mongoose } from "mongoose";
var Mongoose = require("mongoose");

var heroSchema = new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    heroId:{type: Number}
});
var Hero = Mongoose.model('heroes',heroSchema);

module.exports = Hero;