const { mongoose } = require("../constatnt/library")


const dbConnect = () =>{
    const Url = `mongodb+srv://${process.env.mongoDb_user}:${process.env.mongoDb_pass}@billingdesk.ofrcipk.mongodb.net/database`
    try{
        mongoose.connect(Url)
        console.log("Database connect successfully")
    }catch(err){
        throw new Error(err)
    }
}

module.exports = dbConnect