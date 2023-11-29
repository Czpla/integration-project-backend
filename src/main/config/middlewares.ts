import { type Express } from 'express';
import { bodyParser, contentType, cors } from '../middlewares';

export default async (app: Express): Promise<void> => {
    app.use(bodyParser);
    app.use(cors);
    app.use(contentType);
};
