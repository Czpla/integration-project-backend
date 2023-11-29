import { makeLogErrorControllerDecorator } from '@/main/decorators';
import { PingController } from '@/presentation/controllers';

export function makePingController() {
    const controller = new PingController();

    return makeLogErrorControllerDecorator(controller);
}
