const dbConnect = require("./src/config/dbConnect");
const { app, morgan, express,cookie,cors } = require("./src/constatnt/library");
const { notfound, errorHandler } = require("./src/middlewares/errorhandler");
const {authRoute, productRoute, brand_title_materialRoute} = require("./src/routes")

require("dotenv").config()
dbConnect()

app.use(morgan('combined'))
app.use(express.json())

app.use("/api/user",authRoute)
app.use("/api/prod",productRoute)
app.use("/api/btm",brand_title_materialRoute)

app.use(notfound)
app.use(errorHandler)

app.listen(process.env.port,
    ()=>console.log("your server is running at",process.env.port))
