import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger.config';

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(`Error: ${err.message}`);
    res.status(err.status || 500).json({
        message: err.message || 'Server Error',
        status: err.status || 500
    });
};
