const refreshToken = require("../config/refreshToken");
const { asyncHandler } = require("../constatnt/library");
const User = require("../models/userModel");

// CreateUser
const createUser = asyncHandler(async (req,res) =>{
    const {email,mobile} = req?.body
    console.log(email,mobile)
    const oldemail = await User.findOne({email:email})
    const oldmobile = await User.findOne({mobile:mobile})
    // const mobile = await User.findOne({phone:req?.body?.mobile}) 
    if(oldemail){
        throw new Error("User already Existed")
    }
    if(oldmobile){
        throw new Error("Mobile number already existed")
    }    
    User.create(req?.body)
    res.send("User created")
    
})

// Login User
const loginUser = asyncHandler(async (req,res) => {
    const user = await User.findOne({email: req?.body?.email})
    if( user && await user.isPasswordMatch(req?.body?.password)){
        const token = refreshToken(user?._id,user?.email)
        await User.findByIdAndUpdate(user?._id,{
            refreshToken: token
        },{
            new:true
        })
        res.cookie("refreshToken",token,{
            httpOnly:true,
            maxAge: 72 * 60 * 60 * 1000
        })
        res.json({
            id:user?._id,
            firstname:user?.firstname,
            lastname:user?.lastname,
            mobile:user?.mobile,
            role:user?.role,
            token:token
        })

    }else{
        throw new Error("Invalid Credentials")
    }
})
// update User
const updateUser = asyncHandler(async (req,res) => {
    try{
        const user= req?.use
        await User.findByIdAndUpdate(user?._id,{
            firstname:  req?.body?.firstname,
            lastname: req?.body?.lastname,
            email:req?.body?.email,
            mobile:req?.body?.mobile
        },{
            new: true
        })
        res.json("Update successfully")
    }catch(err){
        throw new Error(err)
    }
})

const deletUser = asyncHandler(async (req,res) => {
    try{


    }catch(err){
        throw new Error(err)
    }
})

const logoutUser = asyncHandler(async (req,res) => {
    try{
        const user = req?.user
        await User.findByIdAndUpdate(user?._id,{
            refreshToken:""
        },{
            new:true
        })
        res.json("Logout Successfully")
    }catch(err){
        throw new Error(err)
    }
})

module.exports = {
    createUser,
    loginUser,
    updateUser,
    logoutUser,
    deletUser
}