import { DbGetTeacherById } from '@/business/usecases';
import { makeKnexTeacherRepository } from '../../database';

export function makeDbGetTeacherById() {
    return new DbGetTeacherById(makeKnexTeacherRepository());
}
