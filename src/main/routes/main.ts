import { type Router } from 'express';
import { adaptRoute } from '../adapters';
import { makePingController } from '../factories';

export default (router: Router) => {
    router.get('/ping', adaptRoute(makePingController()));
};
