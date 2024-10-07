const { mongoose } = require("../constatnt/library");

var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    material:{
        type:String
    },
    brand:{
        type:String
    },
    size:{
        type:String,
        required:true,
        default:0
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    metric:{
        type:String,
        required:true,
    }    
})

module.exports = mongoose.model('Product',productSchema)