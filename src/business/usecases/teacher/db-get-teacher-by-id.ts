import { type GetTeacherByIdRepository } from '@/business/protocols';
import { type Teacher } from '@/domain/entities';
import { type GetTeacherById } from '@/domain/usecases';

export class DbGetTeacherById implements GetTeacherById {
    constructor(private readonly _getTeacherByIdRepository: GetTeacherByIdRepository) {}

    public async get(id: string): Promise<Teacher | null> {
        return await this._getTeacherByIdRepository.getById(id);
    }
}
