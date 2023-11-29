import { type UpdateTeacherRepository } from '@/business/protocols';
import { type Teacher } from '@/domain/entities';
import { UpdateError } from '@/domain/helpers';
import { type UpdateTeacher } from '@/domain/usecases';

export class DbUpdateTeacher implements UpdateTeacher {
    constructor(private readonly _updateTeacherRepository: UpdateTeacherRepository) {}

    public async update(teacher: Teacher): Promise<void> {
        try {
            await this._updateTeacherRepository.update(teacher);
        } catch (error) {
            throw new UpdateError(`Id "${teacher.metadata.id}" invalid`);
        }
    }
}
