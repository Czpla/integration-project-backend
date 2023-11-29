import { makeLogErrorControllerDecorator } from '@/main/decorators';
import { DeleteTeacherByIdController } from '@/presentation/controllers';
import { makeDbDeleteTeacherById } from '../../usecases';

export function makeDeleteTeacherByIdController() {
    const controller = new DeleteTeacherByIdController(makeDbDeleteTeacherById());

    return makeLogErrorControllerDecorator(controller);
}
