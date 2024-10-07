const { express } = require("../constatnt/library");
const { createUser, loginUser, updateUser, logoutUser } = require("../controller/authCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");


const router = express.Router()

router.post("/registration",createUser)
router.post("/login",loginUser)
router.patch("/update",authMiddleware,updateUser)
router.patch("/logout",authMiddleware,logoutUser)

module.exports = router