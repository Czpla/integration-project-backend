import { makeLogErrorControllerDecorator } from '@/main/decorators';
import { CreateTeacherController } from '@/presentation/controllers';
import { makeDbCreateTeacher } from '../../usecases';

export function makeCreateTeacherController() {
    const controller = new CreateTeacherController(makeDbCreateTeacher());

    return makeLogErrorControllerDecorator(controller);
}
