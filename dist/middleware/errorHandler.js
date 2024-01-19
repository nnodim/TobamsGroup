import { MulterError } from 'multer';
export const globalErrorHandler = (err, req, res, next) => {
    console.error(err.message);
    if (err instanceof MulterError) {
        res
            .status(400)
            .json({ error: err.message });
    }
    else {
        console.error(`${req.url}: ${err.message}`);
        res.status(500).json({ error: err.message });
    }
    next();
};
//# sourceMappingURL=errorHandler.js.map