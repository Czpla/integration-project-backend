import { adaptRoute } from '@/main/adapters';
import {
    makeCreateTeacherController, makeDeleteTeacherByIdController, makeGetPaginatedTeacherController, makeGetTeacherByIdController, makeUpdateTeacherController,
} from '@/main/factories';

import { type Router } from 'express';

export default (router: Router): void => {
    router.get('/teacher/:id/get', adaptRoute(makeGetTeacherByIdController()));
    router.get('/teacher/paginate', adaptRoute(makeGetPaginatedTeacherController()));

    router.post('/teacher/new', adaptRoute(makeCreateTeacherController()));
    router.put('/teacher/:id/update', adaptRoute(makeUpdateTeacherController()));
    router.delete('/teacher/:id/delete', adaptRoute(makeDeleteTeacherByIdController()));
};
