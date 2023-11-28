import { type Teacher } from '@/domain/entities';

export interface CreateTeacherRepository {
    create(teacher: Teacher): Promise<void>;
}
