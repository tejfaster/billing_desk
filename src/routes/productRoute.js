const { express } = require("../constatnt/library");
const { createProduct, getProduct, updateProduct, deleteProduct } = require("../controller/productCtrl");

const router = express.Router()

router.post("/",createProduct)
router.get("/",getProduct)
router.patch("/update",updateProduct)
router.delete("/:id",deleteProduct)

module.exports = router