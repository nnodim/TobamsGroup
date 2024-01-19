import mongoose from 'mongoose';
const imageSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
});
export default mongoose.model('Image', imageSchema);
//# sourceMappingURL=image-model.js.map