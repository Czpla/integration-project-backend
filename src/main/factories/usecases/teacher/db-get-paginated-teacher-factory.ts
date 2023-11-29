import { DbGetPaginatedTeacher } from '@/business/usecases';
import { makeKnexTeacherRepository } from '../../database';

export function makeDbGetPaginatedTeacher() {
    return new DbGetPaginatedTeacher(makeKnexTeacherRepository());
}
