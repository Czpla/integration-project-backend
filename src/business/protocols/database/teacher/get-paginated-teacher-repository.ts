import { type Teacher } from '@/domain/entities';

export interface GetPaginatedTeacherRepository {
    paginate(page: number, pageSize: number): Promise<GetPaginatedTeacherRepository.Output>;
}

export namespace GetPaginatedTeacherRepository {
    export interface Output {
        data: Teacher[];
        total: number;
    }
}
