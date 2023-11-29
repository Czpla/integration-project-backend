import { makeLogErrorControllerDecorator } from '@/main/decorators';
import { GetPaginatedTeacherController } from '@/presentation/controllers';
import { makeDbGetPaginatedTeacher } from '../../usecases';

export function makeGetPaginatedTeacherController() {
    const controller = new GetPaginatedTeacherController(makeDbGetPaginatedTeacher());

    return makeLogErrorControllerDecorator(controller);
}
