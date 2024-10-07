const notfound = (req,res,next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (err, req,res,next) =>{
    const statuscode = res.statusCode == 200 ? 500 :res.statusCode
    // console.log("statuscode",statuscode,"res.statuscode",res.statusCode)
    res.status(statuscode)
    // console.log({message:err?.message,stack:err?.stack})
    // console.log(res)
    // res.json({message:err?.message,stack:err?.stack})
    res.json({message:err?.message})
}

const noDataFound = (data) => {
    if(!data) throw new Error("no data  found")
}

module.exports = {
    notfound,
    errorHandler,
    noDataFound}