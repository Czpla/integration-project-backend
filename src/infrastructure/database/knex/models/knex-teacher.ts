import { Teacher } from '@/domain/entities';
import { KnexMetadata } from './common/knex-metadata';

export class KnexTeacher {
    public metadata!: KnexMetadata;

    public name!: string;
    public email!: string;
    public ra!: string;

    constructor(params: KnexTeacher.Params) {
        this.name = params.name;
        this.email = params.email;
        this.ra = params.ra;
        this.metadata = new KnexMetadata(params);
    }

    public toJSON() {
        return Object.assign(this.metadata.toJSON(), {
            name: this.name,
            email: this.email,
            ra: this.ra,
        });
    }

    public toEntity(): Teacher {
        return new Teacher({
            metadata: this.metadata.toEntity(),
            name: this.name,
            email: this.email,
            ra: this.ra,
        });
    }

    public static fromEntity(teacher: Teacher): KnexTeacher {
        const metadata = KnexMetadata.fromEntity(teacher.metadata);

        return new KnexTeacher(
            Object.assign({}, metadata, {
                name: teacher.name,
                email: teacher.email,
                ra: teacher.ra,
            }),
        );
    }

    public static fromJSON(json: KnexTeacher.Params): KnexTeacher {
        const metadata = KnexMetadata.fromJSON(json);

        return new KnexTeacher(
            Object.assign({}, metadata, {
                name: json.name,
                email: json.email,
                ra: json.ra,
            }),
        );
    }
}

export namespace KnexTeacher {
    export const TABLE_NAME = 'Teachers';
    export const FIELDS = [
        ...KnexMetadata.FIELDS,
        'name',
        'email',
        'ra',
    ];

    export interface Params extends KnexMetadata.Params {
        name: string;
        email: string;
        ra: string;
    }
}
