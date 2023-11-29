import { makeLogErrorControllerDecorator } from '@/main/decorators';
import { GetTeacherByIdController } from '@/presentation/controllers';
import { makeDbGetTeacherById } from '../../usecases';

export function makeGetTeacherByIdController() {
    const controller = new GetTeacherByIdController(makeDbGetTeacherById());

    return makeLogErrorControllerDecorator(controller);
}
