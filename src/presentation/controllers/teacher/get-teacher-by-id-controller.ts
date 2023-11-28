import { DomainError } from '@/domain/helpers';
import { type GetTeacherById } from '@/domain/usecases';
import { badRequest, InvalidParamError, ok, serverError } from '@/presentation/helpers';
import { type Controller, type HttpResponse } from '@/presentation/protocols';
import { TeacherViewModel } from '@/presentation/viewmodels';

export class GetTeacherByIdController implements Controller {
    constructor(private readonly _getTeacherById: GetTeacherById) {}

    public async handle(request: GetTeacherController.Request): Promise<HttpResponse> {
        try {
            const teacher = await this._getTeacherById.get(request.id);

            if (!teacher) {
                return badRequest(new InvalidParamError(request.id));
            }

            return ok(TeacherViewModel.fromEntity(teacher).toJSON());
        } catch (error: any) {
            if (error instanceof DomainError) {
                return badRequest(error);
            }

            return serverError(error);
        }
    }
}

export namespace GetTeacherController {
    export interface Request {
        id: string;
    }
}
