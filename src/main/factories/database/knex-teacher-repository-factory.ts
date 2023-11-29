import { KnexTeacherRepository } from '@/infrastructure/database';

let knexTeacherRepository: KnexTeacherRepository;

export function makeKnexTeacherRepository(): KnexTeacherRepository {
    knexTeacherRepository ??= new KnexTeacherRepository();

    return knexTeacherRepository;
}
