import { Teacher } from '@/domain/entities';
import { DomainError } from '@/domain/helpers';
import { type UpdateTeacher } from '@/domain/usecases/teacher/update-teacher';
import { badRequest, noContent, serverError } from '@/presentation/helpers';
import { type Controller, type HttpResponse } from '@/presentation/protocols';

export class UpdateTeacherController implements Controller {
    constructor(private readonly _updateTeacher: UpdateTeacher) {}

    public async handle(request: UpdateTeacherController.Request): Promise<HttpResponse> {
        try {
            await this._updateTeacher.update(
                new Teacher({
                    metadata: { id: request.id },
                    name: request.name,
                    email: request.email,
                    ra: request.ra,
                }),
            );

            return noContent();
        } catch (error: any) {
            if (error instanceof DomainError) {
                return badRequest(error);
            }

            return serverError(error);
        }
    }
}

export namespace UpdateTeacherController {
    export interface Request {
        id: string;
        name: string;
        email: string;
        ra: string;
    }
}
