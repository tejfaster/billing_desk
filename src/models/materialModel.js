const { mongoose } = require("../constatnt/library");


var materialSchema = new mongoose.Schema({
    metal:{
        type:String,
        required:true,
        unique:true
    }
    },{
        timestamps:true
    }
)

module.exports = mongoose.model('Material',materialSchema)
