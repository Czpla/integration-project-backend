import { type Teacher } from '@/domain/entities';

export class TeacherViewModel {
    public id: string;
    public name: string;
    public email: string;
    public ra: string;

    constructor(params: TeacherViewModel.Params) {
        this.id = params.id;
        this.name = params.name;
        this.email = params.email;
        this.ra = params.ra;
    }

    public toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            ra: this.ra,
        };
    }

    public static fromEntity(teacher: Teacher): TeacherViewModel {
        return new TeacherViewModel({
            id: teacher.metadata.id,
            name: teacher.name,
            email: teacher.email,
            ra: teacher.ra,
        });
    }
}

export namespace TeacherViewModel {
    export interface Params {
        id: string;
        name: string;
        email: string;
        ra: string;
    }
}
