const { ObjectId } = require("../constatnt/library")


const validateMongoDbId =(id)=>{
    const isValid = ObjectId.isValid(id)
    if(!isValid) throw new Error("Id isn't valid or not found")
}

module.exports = validateMongoDbId