import { DomainError } from '@/domain/helpers';
import { type CreateTeacher } from '@/domain/usecases';
import { badRequest, created, serverError } from '@/presentation/helpers';
import { type Controller, type HttpResponse } from '@/presentation/protocols';
import { TeacherViewModel } from '@/presentation/viewmodels/teacher-viewmodel';

export class CreateTeacherController implements Controller {
    constructor(private readonly _createTeacher: CreateTeacher) {}

    public async handle(request: CreateTeacherController.Request): Promise<HttpResponse> {
        try {
            const teacher = await this._createTeacher.create({
                name: request.name,
                email: request.email,
                ra: request.ra,
            });

            return created(TeacherViewModel.fromEntity(teacher).toJSON());
        } catch (error: any) {
            if (error instanceof DomainError) {
                return badRequest(error);
            }

            return serverError(error);
        }
    }
}

export namespace CreateTeacherController {
    export interface Request {
        name: string;
        email: string;
        ra: string;
    }
}
