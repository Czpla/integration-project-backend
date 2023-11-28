import { type LogErrorRepository } from '@/business/protocols';
import { type Controller, type HttpResponse } from '@/presentation/protocols';
import { serverError } from '../helpers';

export class LogErrorController implements Controller {
    constructor(private readonly _controller: Controller, private readonly _logErrorRepository: LogErrorRepository) {}

    public async handle(request: any): Promise<HttpResponse> {
        try {
            const httpResponse = await this._controller.handle(request);

            if (httpResponse.statusCode === 500) {
                await this._logErrorRepository.logError(httpResponse.body.stack);
            }

            return httpResponse;
        } catch (error: any) {
            await this._logErrorRepository.logError(error.stack);

            return serverError(error);
        }
    }
}
