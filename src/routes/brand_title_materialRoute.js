const { express } = require("../constatnt/library");
const { createTitle, getTitle, updateTitle, deleteTitle, 
        createMaterial, getMaterial, updateMaterial, deleteMaterial,
        createBrand, getBrand, updateBrand, deleteBrand } = require("../controller/brand_title_materialCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router()

router.post("/create/title",authMiddleware,isAdmin,createTitle)
router.get("/get/title",authMiddleware,isAdmin,getTitle)
router.patch("/update/title/:id",authMiddleware,isAdmin,updateTitle)
router.delete("/delete/title/:id",authMiddleware,isAdmin,deleteTitle)

router.post("/create/material",authMiddleware,isAdmin,createMaterial)
router.get("/get/material",authMiddleware,isAdmin,getMaterial)
router.patch("/update/material/:id",authMiddleware,isAdmin,updateMaterial)
router.delete("/delete/material/:id",authMiddleware,isAdmin,deleteMaterial)

router.post("/create/brand",authMiddleware,isAdmin,createBrand)
router.get("/get/brand",authMiddleware,isAdmin,getBrand)
router.patch("/update/brand/:id",authMiddleware,isAdmin,updateBrand)
router.delete("/delete/brand/:id",authMiddleware,isAdmin,deleteBrand)

module.exports = router

