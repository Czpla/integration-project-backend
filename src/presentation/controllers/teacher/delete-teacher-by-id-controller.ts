import { DomainError } from '@/domain/helpers';
import { type DeleteTeacherById } from '@/domain/usecases';
import { badRequest, noContent, serverError } from '@/presentation/helpers';
import { type Controller, type HttpResponse } from '@/presentation/protocols';

export class DeleteTeacherByIdController implements Controller {
    constructor(private readonly _deleteTeacherById: DeleteTeacherById) {}

    public async handle(request: DeleteTeacherController.Request): Promise<HttpResponse> {
        try {
            await this._deleteTeacherById.delete(request.id);

            return noContent();
        } catch (error: any) {
            if (error instanceof DomainError) {
                return badRequest(error);
            }

            return serverError(error);
        }
    }
}

export namespace DeleteTeacherController {
    export interface Request {
        id: string;
    }
}
