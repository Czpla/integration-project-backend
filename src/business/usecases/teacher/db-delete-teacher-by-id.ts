import { type DeleteTeacherByIdRepository } from '@/business/protocols';
import { DeleteError } from '@/domain/helpers';
import { type DeleteTeacherById } from '@/domain/usecases';

export class DbDeleteTeacherById implements DeleteTeacherById {
    constructor(private readonly _deleteTeacherByIdRepository: DeleteTeacherByIdRepository) {}

    public async delete(id: string): Promise<void> {
        try {
            await this._deleteTeacherByIdRepository.deleteById(id);
        } catch (error) {
            throw new DeleteError(`Id "${id}" invalid`);
        }
    }
}
