const express = require("express")
const mongoose = require("mongoose")
const cookie = require("cookie-parser")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const morgan = require("morgan")
const crypto = require("crypto")
const cors = require("cors")
const multer = require("multer")
const asyncHandler = require("express-async-handler")

const app = express()
const ObjectId = mongoose.Types.ObjectId

module.exports={
    app,mongoose,ObjectId,cookie,express,jwt,
    bcrypt,morgan,crypto,cors,multer,asyncHandler
}