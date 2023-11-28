import { makeLogErrorControllerDecorator } from '@/main/decorators';
import { UpdateTeacherController } from '@/presentation/controllers';
import { makeDbUpdateTeacher } from '../../usecases';

export function makeUpdateTeacherController() {
    const controller = new UpdateTeacherController(makeDbUpdateTeacher());

    return makeLogErrorControllerDecorator(controller);
}
