import imageModel from '../model/image-model.js';
const imageUpload = async (req, res) => {
    try {
        if (!req.file) {
            throw new Error('No image provided.');
        }
        // Save image details to MongoDB
        const newImage = new imageModel({
            filename: req.file.filename,
            path: req.file.path,
        });
        await newImage.save();
        res.json({ message: 'Image uploaded successfully.' });
    }
    catch (error) {
        console.error(error.message);
        res.status(400).json({ error: error.message });
    }
};
const getImage = async (req, res) => {
    try {
        const image = await imageModel.findById(req.params.id);
        if (!image) {
            throw new Error('Image not found.');
        }
        const secureURL = `https://yourdomain.com/${image.filename}`;
        res.json({ url: secureURL });
    }
    catch (error) {
        console.error(error.message);
        res.status(404).json({ error: error.message });
    }
};
export { imageUpload, getImage };
//# sourceMappingURL=imageController.js.map