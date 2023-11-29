import { type Teacher } from '../../entities';

export interface GetPaginatedTeacher {
    paginate(page: number, pageSize: number): Promise<GetPaginatedTeacher.Output>;
}

export namespace GetPaginatedTeacher {
    export interface Output {
        data: Teacher[];
        total: number;
    }
}
