const { asyncHandler, jwt } = require("../constatnt/library")
const User = require("../models/userModel")

const authMiddleware = asyncHandler(async(req,res,next) =>{
    let token
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
        console.log("token",token)
        try{
            if(token){
                const decode = jwt.verify(token,process.env.jwt_secret)            
                const user = await User.findById(decode?.data[0])           
                req.user = user
                next()
            }
        }catch(err){
            throw new Error("Not Authorized,Please Login again")
        }
    }else{
        throw new Error("There is no Token attached to header")
    }
})

const isAdmin = asyncHandler(async(req,res,next) => {
    const user = await User.findOne({email:req?.user?.email})
    if(user.role !== "admin"){
        throw new Error("You aren't an admin")
    }else{
        next()
    }
})

module.exports = {
    authMiddleware,
    isAdmin
}
