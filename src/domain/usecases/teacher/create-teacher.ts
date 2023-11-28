import { type Teacher } from '@/domain/entities';

export interface CreateTeacher {
    create(params: Teacher.Params): Promise<Teacher>;
}
