const { asyncHandler } = require("../constatnt/library");
const Material = require("../models/materialModel");
const Title = require("../models/titleModel");
const Brand = require("../models/brandModel")

// create
const createTitle = asyncHandler(async (req,res)=>{
    try{
        await Title.create(req?.body)
        res.json("Product Title created successfully")
    }catch(err){
        throw new Error(err)
    }
})

const createMaterial = asyncHandler(async (req,res) =>{
    try{
        await Material.create(req?.body)
        res.json("Material name created successfully")
    }catch(err){
        throw new Error(err)
    }
})

const createBrand = asyncHandler(async (req,res) =>{
    try{
        await Brand.create(req?.body)
        res.json("Brand created successfully")
    }catch(err){
        throw new Error(err)
    }
})

// get item
const getTitle = asyncHandler(async (req,res) =>{
    try{
        const title = await Title.find()
        res.json(title)
    }catch(err){
        throw new ErrorEvent(err)
    }
})

const getMaterial= asyncHandler(async (req,res) =>{
    try{
        const material= await Material.find()
        res.json(material)
    }catch(err){
        throw new ErrorEvent(err)
    }
})

const getBrand = asyncHandler(async (req,res) =>{
    try{
        const brand= await Brand.find()
        res.json(brand)
    }catch(err){
        throw new ErrorEvent(err)
    }
})

// update

const updateTitle = asyncHandler(async (req, res) =>{
    try{
        await Title.findByIdAndUpdate(req?.params.id,req.body,{new:true})
        res.json("update successfully")
    }catch(err){
        throw new Error(err)
    }
})

const updateMaterial = asyncHandler(async (req, res) =>{
    try{
        await Material.findByIdAndUpdate(req?.params.id,req.body,{new:true})
        res.json("update successfully")
    }catch(err){
        throw new Error(err)
    }
})

const updateBrand = asyncHandler(async (req, res) =>{
    try{
        await Brand.findByIdAndUpdate(req?.params.id,req.body,{new:true})
        res.json("update successfully")
    }catch(err){
        throw new Error(err)
    }
})

// Delete

const deleteTitle = asyncHandler(async (req, res) =>{
    try{
        await Title.findByIdAndDelete(req?.params.id)
        res.json("update successfully")
    }catch(err){
        throw new Error(err)
    }
})

const deleteMaterial = asyncHandler(async (req, res) =>{
    try{
        await Material.findByIdAndDelete(req?.params.id)
        res.json("update successfully")
    }catch(err){
        throw new Error(err)
    }
})

const deleteBrand = asyncHandler(async (req, res) =>{
    try{
        await Brand.findByIdAndDelete(req?.params.id)
        res.json("update successfully")
    }catch(err){
        throw new Error(err)
    }
})


module.exports= {
    createTitle,
    createMaterial,
    createBrand,
    getTitle,
    getMaterial,
    getBrand,
    updateTitle,
    updateMaterial,
    updateBrand,
    deleteTitle,
    deleteMaterial,
    deleteBrand
}