import { type Teacher } from '@/domain/entities';
import { DomainError } from '@/domain/helpers';
import { type GetPaginatedTeacher } from '@/domain/usecases';
import { badRequest, ok, serverError } from '@/presentation/helpers';
import { type Controller, type HttpResponse } from '@/presentation/protocols';
import { PageViewModel, TeacherViewModel } from '@/presentation/viewmodels';

export class GetPaginatedTeacherController implements Controller {
    constructor(private readonly _getPaginatedTeacher: GetPaginatedTeacher) {}

    public async handle(request: GetPaginatedTeacherController.Request): Promise<HttpResponse> {
        try {
            const { data, total } = await this._getPaginatedTeacher.paginate(request.page, request.pageSize);

            return ok(
                new PageViewModel({
                    data: data.map((teacher: Teacher) => TeacherViewModel.fromEntity(teacher).toJSON()),
                    total: total,
                }).toJSON(),
            );
        } catch (error: any) {
            if (error instanceof DomainError) {
                return badRequest(error);
            }

            return serverError(error);
        }
    }
}

export namespace GetPaginatedTeacherController {
    export interface Request {
        page: number;
        pageSize: number;
    }
}
