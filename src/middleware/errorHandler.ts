import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { MulterError } from 'multer';

export const globalErrorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.message);
  if (err instanceof MulterError) {
    res
      .status(400)
      .json({error: err.message });
  } else {
    console.error(`${req.url}: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
  next();
};
