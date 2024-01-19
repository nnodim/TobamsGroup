import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
    },
});
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
        cb(null, true);
    }
    else {
        cb(new Error('Invalid file format. Only images (jpg, jpeg, png, gif) are allowed.'), false);
    }
};
const upload = multer({
    storage,
    fileFilter,
});
export { upload };
//# sourceMappingURL=multer.js.map