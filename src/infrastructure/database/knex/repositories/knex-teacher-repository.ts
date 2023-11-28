/* eslint-disable @typescript-eslint/no-floating-promises */

import { type CreateTeacherRepository, type DeleteTeacherByIdRepository, type GetPaginatedTeacherRepository, type GetTeacherByIdRepository, type UpdateTeacherRepository } from '@/business/protocols';
import { type Teacher } from '@/domain/entities';
import { KnexHelper } from '../knex-helper';
import { KnexTeacher } from '../models';

export class KnexTeacherRepository
implements
        CreateTeacherRepository,
        UpdateTeacherRepository,
        GetTeacherByIdRepository,
        DeleteTeacherByIdRepository,
        GetPaginatedTeacherRepository {
    public async create(teacher: Teacher): Promise<void> {
        await KnexHelper.createQuery().from('teachers').insert(KnexTeacher.fromEntity(teacher).toJSON());
    }

    public async update(teacher: Teacher): Promise<void> {
        await KnexHelper.createQuery()
            .from('teachers')
            .where('id', '=', teacher.metadata.id)
            .update(KnexTeacher.fromEntity(teacher).toJSON());
    }

    public async getById(id: string): Promise<Teacher | null> {
        const json = await KnexHelper.createQuery().from('teachers').where('id', '=', id).first();

        if (!json) {
            return null;
        }

        return KnexTeacher.fromJSON(json).toEntity();
    }

    public async paginate(page: number, pageSize: number): Promise<GetPaginatedTeacherRepository.Output> {
        const { total } = await KnexHelper.createQuery().from('teachers').count('id as total').first();
        const data = await KnexHelper.createQuery()
            .from('teachers')
            .limit(pageSize)
            .offset(page * pageSize);

        return {
            data: data.map((item: any) => KnexTeacher.fromJSON(item).toEntity()),
            total: total,
        };
    }

    public async deleteById(id: string): Promise<void> {
        await KnexHelper.createQuery().from('teachers').where('id', '=', id).delete();
    }
}
