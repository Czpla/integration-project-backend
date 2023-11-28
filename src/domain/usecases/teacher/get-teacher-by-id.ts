import { type Teacher } from '@/domain/entities';

export interface GetTeacherById {
    get(id: string): Promise<Teacher | null>;
}
