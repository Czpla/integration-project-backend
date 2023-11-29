import { type Teacher } from '../../entities';

export interface UpdateTeacher {
    update(reacher: Teacher): Promise<void>;
}
