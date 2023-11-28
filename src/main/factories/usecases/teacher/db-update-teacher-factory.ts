import { DbUpdateTeacher } from '@/business/usecases';
import { makeKnexTeacherRepository } from '../../database';

export function makeDbUpdateTeacher() {
    return new DbUpdateTeacher(makeKnexTeacherRepository());
}
