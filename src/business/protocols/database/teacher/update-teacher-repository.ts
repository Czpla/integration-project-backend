import { type Teacher } from '../../../../domain/entities';

export interface UpdateTeacherRepository {
    update(teacher: Teacher): Promise<void>;
}
