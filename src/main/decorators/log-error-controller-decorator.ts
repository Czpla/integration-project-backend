import { LogConsoleRepository } from '@/infrastructure/logger';
import { LogErrorController } from '@/presentation/controllers';
import { type Controller } from '@/presentation/protocols';

export function makeLogErrorControllerDecorator(controller: Controller): Controller {
    const logErrorRepository = LogConsoleRepository.instance;

    return new LogErrorController(controller, logErrorRepository);
}
