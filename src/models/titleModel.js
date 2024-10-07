const { mongoose } = require("../constatnt/library");

var titleSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true,
        unique:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Title",titleSchema)