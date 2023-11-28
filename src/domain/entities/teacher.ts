import { Metadata } from './common/metadata';

export class Teacher {
    public metadata: Metadata;
    public name: string;
    public email: string;
    public ra: string;

    constructor(params: Teacher.Params) {
        this.metadata = new Metadata(params?.metadata);

        this.name = params.name;
        this.email = params.email;
        this.ra = params.ra;
    }
}

export namespace Teacher {
    export interface Params {
        metadata?: Metadata.Params;
        name: string;
        email: string;
        ra: string;
    }
}
