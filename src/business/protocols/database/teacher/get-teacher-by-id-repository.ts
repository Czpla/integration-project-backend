import { type Teacher } from '@/domain/entities';

export interface GetTeacherByIdRepository {
    getById(id: string): Promise<Teacher | null>;
}
