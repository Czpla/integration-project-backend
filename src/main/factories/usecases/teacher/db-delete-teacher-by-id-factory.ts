import { DbDeleteTeacherById } from '@/business/usecases';
import { makeKnexTeacherRepository } from '../../database';

export function makeDbDeleteTeacherById() {
    return new DbDeleteTeacherById(makeKnexTeacherRepository());
}
