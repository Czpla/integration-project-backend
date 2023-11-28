import { type GetPaginatedTeacherRepository } from '@/business/protocols';
import { type GetPaginatedTeacher } from '@/domain/usecases';

export class DbGetPaginatedTeacher implements GetPaginatedTeacher {
    constructor(private readonly _getPaginatedTeacherRepository: GetPaginatedTeacherRepository) {}

    public async paginate(page: number, pageSize: number): Promise<GetPaginatedTeacher.Output> {
        return await this._getPaginatedTeacherRepository.paginate(page, Math.min(pageSize, 50));
    }
}
