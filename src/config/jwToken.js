const { jwt } = require("../constatnt/library")

const genrateToken = (...data) => {
    return jwt.sign({data},process.env.jwt_secret,{expiresIn:"1d"})
}

module.exports = genrateToken