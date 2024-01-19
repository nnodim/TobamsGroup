import { config } from 'dotenv';
import express from 'express';
import appRouter from './routes/image-routes.js';
import morgan from 'morgan';
import { globalErrorHandler } from './middleware/errorHandler.js';
config();
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/', appRouter);

app.use(globalErrorHandler);

export default app;
