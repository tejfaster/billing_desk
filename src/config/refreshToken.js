const { jwt } = require("../constatnt/library")


const refreshToken = (...data) => {
    return jwt.sign({data},process.env.jwt_secret,{expiresIn:"2d"})
}

module.exports = refreshToken