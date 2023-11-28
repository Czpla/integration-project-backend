import _cors from 'cors';
import { type NextFunction, type Request, type Response } from 'express';

export const cors = (req: Request, res: Response, next: NextFunction): void => {
    const cors = _cors({
        methods: '*',
        allowedHeaders: '*',
        origin: '*',
    });

    cors(req, res, next);
};
