import { Request, Response, NextFunction } from 'express';

export const moderationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { content } = req.body;
    if (content.includes('inappropriate')) {
        return res.status(400).json({ message: 'Inappropriate content' });
    }
    next();
};
