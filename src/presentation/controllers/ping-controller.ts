import { ok } from '../helpers';
import { type Controller, type HttpResponse } from '../protocols';

export class PingController implements Controller {
    public async handle(): Promise<HttpResponse<any>> {
        return ok({ message: 'pong' });
    }
}
