import { DbCreateTeacher } from '@/business/usecases';
import { makeKnexTeacherRepository } from '../../database';

export function makeDbCreateTeacher() {
    return new DbCreateTeacher(makeKnexTeacherRepository());
}
