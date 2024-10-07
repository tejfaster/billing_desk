const { mongoose } = require("../constatnt/library");

const brandSchema = new mongoose.Schema({
    brand:{
        type:String,
        required:true,
        unique:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Brand",brandSchema)