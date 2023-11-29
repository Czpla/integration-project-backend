import { type CreateTeacherRepository } from '@/business/protocols';
import { type CreateTeacher } from '@/domain/usecases';
import { Teacher } from '../../../domain/entities';

export class DbCreateTeacher implements CreateTeacher {
    constructor(private readonly _createTeacherRepository: CreateTeacherRepository) {}

    public async create(params: Teacher.Params): Promise<Teacher> {
        const entity = new Teacher(params);

        await this._createTeacherRepository.create(entity);

        return entity;
    }
}
