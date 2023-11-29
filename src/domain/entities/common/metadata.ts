import { randomUUID } from 'node:crypto';

export class Metadata {
    public id: string = randomUUID();
    public createdBy: string | null = null;
    public createdAt: Date = new Date();
    public updatedBy: string | null = null;
    public updatedAt: Date = new Date();
    public deletedBy: string | null = null;
    public deletedAt: Date | null = null;

    constructor(params?: Metadata.Params) {
        this.id = params?.id ?? this.id;
        this.createdAt = params?.createdAt ?? this.createdAt;
        this.createdBy = params?.createdBy ?? this.createdBy;
        this.updatedAt = params?.updatedAt ?? this.updatedAt;
        this.updatedBy = params?.updatedBy ?? this.updatedBy;
        this.deletedAt = params?.deletedAt ?? this.deletedAt;
        this.deletedBy = params?.deletedBy ?? this.deletedBy;
    }

    public updated() {
        this.updatedAt = new Date();
    }
}

export namespace Metadata {
    export interface Params {
        id?: string;
        createdBy?: string | null;
        createdAt?: Date;
        updatedBy?: string | null;
        updatedAt?: Date;
        deletedBy?: string | null;
        deletedAt?: Date | null;
    }
}
