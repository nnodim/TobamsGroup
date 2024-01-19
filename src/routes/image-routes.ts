import { Router } from "express";
import { upload } from "../config/multer.js";
import { getImage, imageUpload } from "../controller/imageController.js";

const router = Router()

router.post('/upload', upload.single('image'), imageUpload)
router.get('/get_image/:id', getImage)

export default router