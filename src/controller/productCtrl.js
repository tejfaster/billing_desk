const { asyncHandler } = require("../constatnt/library");
const Product = require("../models/productModel");
const validateMongoDbId = require("../utils/validMongoId");


const createProduct = asyncHandler(async (req,res) =>{
    try{
        const product = await Product.create(req.body)
        res.json(product)
    }catch(err){
        throw new Error(err)
    }
})

const getProduct = asyncHandler(async (req,res) =>{
    try{
        const product = await Product.find()
        res.json(product)
    }catch(err){
        throw new Error(err)
    }
})

const updateProduct = asyncHandler(async (req,res) =>{
    try{
        for(i = 0 ; i < req.body.length; i++){            
            let existedProduct = await Product.findById(req.body[i]?._id)            
            let quantity = Number(existedProduct?.quantity) - Number(req.body[i]?.quantity)            
            await Product.findByIdAndUpdate(req.body[i]._id,{"quantity":quantity},{new:true})
        }
        res.json("update successfully")
    }catch(err){
        throw new Error(err)
    }
})

const deleteProduct = asyncHandler(async (req,res) =>{
    try{
        validateMongoDbId(req?.params?.id)
        const product = await Product.findByIdAndDelete(req.params.id)
        res.json(product)
    }catch(err){
        throw new Error(err)
    }
})

module.exports ={
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}