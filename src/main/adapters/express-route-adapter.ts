
import { type Controller } from '@/presentation/protocols';
import { type Request, type Response } from 'express';

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const request = Object.assign({}, req.body, req.params, req.query, req.headers);

        const httpResponse = await controller.handle(request);

        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            return res.status(httpResponse.statusCode).json(httpResponse.body).end();
        }

        return res.status(httpResponse.statusCode).json({ error: httpResponse.body.message }).end();
    };
};
